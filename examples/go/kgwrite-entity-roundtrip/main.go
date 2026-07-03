package main

import (
	"context"
	"encoding/base64"
	"errors"
	"flag"
	"fmt"
	"net/http"
	"net/url"
	"os"
	"strings"

	kgwrite "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	if err := run(); err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}

type appConfig struct {
	Gateway    gatewayConfig
	StackID    string
	Namespace  string
	Domain     string
	EntityType string
	EntityName string
}

type gatewayConfig struct {
	BaseURL             string
	AuthorizationHeader string
	Mode                string
}

func run() error {
	cfg, err := parseConfig()
	if err != nil {
		return err
	}

	client := newClient(cfg.Gateway)
	return runRoundTrip(context.Background(), client, cfg)
}

func parseConfig() (appConfig, error) {
	grafanaURL := flag.String("grafana-url", env("GRAFANA_URL"), "Grafana stack URL, for example https://my-stack.grafana.net")
	cellGatewayURL := flag.String("cell-gateway-url", env("GRAFANA_CELL_GATEWAY_URL"), "Grafana Cloud cell gateway URL, for example https://asserts-dev-us-central-0.grafana-dev.net")
	stackID := flag.String("stack-id", env("GRAFANA_STACK_ID"), "Numeric Grafana stack ID")
	domain := flag.String("domain", envDefault("KG_DOMAIN", "demo"), "Knowledge Graph domain for the demo entity")
	entityType := flag.String("type", envDefault("KG_ENTITY_TYPE", "DemoEntity"), "Demo entity type")
	entityName := flag.String("name", envDefault("KG_ENTITY_NAME", "demo-entity"), "Demo entity name")
	flag.Parse()

	namespace, err := namespaceForStack(*stackID)
	if err != nil {
		return appConfig{}, err
	}
	gateway, err := configureGateway(*grafanaURL, *cellGatewayURL, *stackID)
	if err != nil {
		return appConfig{}, err
	}

	return appConfig{
		Gateway:    gateway,
		StackID:    strings.TrimSpace(*stackID),
		Namespace:  namespace,
		Domain:     *domain,
		EntityType: *entityType,
		EntityName: *entityName,
	}, nil
}

func newClient(gateway gatewayConfig) *kgwrite.APIClient {
	cfg := kgwrite.NewConfiguration()
	cfg.Servers = kgwrite.ServerConfigurations{{URL: gateway.BaseURL}}
	cfg.AddDefaultHeader("Authorization", gateway.AuthorizationHeader)
	return kgwrite.NewAPIClient(cfg)
}

func runRoundTrip(ctx context.Context, client *kgwrite.APIClient, cfg appConfig) error {
	fmt.Printf("Creating entity %s/%s in namespace %s via %s (%s)\n", cfg.EntityType, cfg.EntityName, cfg.Namespace, cfg.Gateway.BaseURL, cfg.Gateway.Mode)
	created, response, err := client.KnowledgeGraphWriteAPIAPI.
		UpsertEntity(ctx, cfg.Namespace).
		XScopeOrgID(cfg.StackID).
		EntityWriteRequestDto(*kgwrite.NewEntityWriteRequestDto(cfg.Domain, cfg.EntityType, cfg.EntityName, -1)).
		Execute()
	if err != nil {
		return fmt.Errorf("create entity failed: %w", err)
	}
	if response == nil || (response.StatusCode != http.StatusCreated && response.StatusCode != http.StatusOK) {
		return fmt.Errorf("create entity returned unexpected status %s", status(response))
	}
	fmt.Printf("Created entity: domain=%s type=%s name=%s status=%s\n", created.GetDomain(), created.GetType(), created.GetName(), status(response))

	fmt.Printf("Deleting entity %s/%s\n", cfg.EntityType, cfg.EntityName)
	response, err = client.KnowledgeGraphWriteAPIAPI.
		DeleteEntity(ctx, cfg.Namespace, cfg.EntityType, cfg.EntityName).
		XScopeOrgID(cfg.StackID).
		Domain(cfg.Domain).
		Execute()
	if err != nil {
		return fmt.Errorf("delete entity failed: %w", err)
	}
	if response == nil || response.StatusCode != http.StatusNoContent {
		return fmt.Errorf("delete entity returned unexpected status %s", status(response))
	}
	fmt.Printf("Deleted entity: status=%s\n", status(response))
	return nil
}

func configureGateway(grafanaURL string, cellGatewayURL string, stackID string) (gatewayConfig, error) {
	stackID = strings.TrimSpace(stackID)
	if strings.TrimSpace(cellGatewayURL) != "" {
		baseURL, err := normalizeURL(cellGatewayURL, "cell gateway URL")
		if err != nil {
			return gatewayConfig{}, err
		}
		token := env("GCOM_TOKEN")
		if token == "" {
			return gatewayConfig{}, errors.New("missing GCom token; set GCOM_TOKEN when using GRAFANA_CELL_GATEWAY_URL")
		}
		return gatewayConfig{
			BaseURL:             baseURL,
			AuthorizationHeader: basicAuthHeader(stackID, token),
			Mode:                "cell gateway Basic auth",
		}, nil
	}

	baseURL, err := normalizeURL(grafanaURL, "Grafana URL")
	if err != nil {
		return gatewayConfig{}, err
	}
	token := env("GRAFANA_TOKEN")
	if token == "" {
		return gatewayConfig{}, errors.New("missing service account token; set GRAFANA_TOKEN")
	}
	return gatewayConfig{
		BaseURL:             baseURL,
		AuthorizationHeader: "Bearer " + token,
		Mode:                "Grafana stack bearer auth",
	}, nil
}

func normalizeURL(value string, label string) (string, error) {
	raw := strings.TrimRight(strings.TrimSpace(value), "/")
	if raw == "" {
		return "", fmt.Errorf("missing %s", label)
	}
	if !strings.Contains(raw, "://") {
		raw = "https://" + raw
	}
	parsed, err := url.Parse(raw)
	if err != nil {
		return "", fmt.Errorf("parse Grafana URL: %w", err)
	}
	if parsed.Scheme != "https" && parsed.Scheme != "http" {
		return "", fmt.Errorf("unsupported %s scheme %q", label, parsed.Scheme)
	}
	if parsed.Host == "" {
		return "", fmt.Errorf("%s %q does not include a host", label, value)
	}
	return strings.TrimRight(parsed.String(), "/"), nil
}

func basicAuthHeader(username string, password string) string {
	token := base64.StdEncoding.EncodeToString([]byte(username + ":" + password))
	return "Basic " + token
}

func namespaceForStack(stackID string) (string, error) {
	stackID = strings.TrimSpace(stackID)
	if stackID == "" {
		return "", errors.New("missing numeric stack ID; set GRAFANA_STACK_ID or pass -stack-id")
	}
	return "stacks-" + stackID, nil
}

func status(response *http.Response) string {
	if response == nil {
		return "<nil>"
	}
	if response.Status != "" {
		return response.Status
	}
	return fmt.Sprintf("%d", response.StatusCode)
}

func env(key string) string {
	return strings.TrimSpace(os.Getenv(key))
}

func envDefault(key string, fallback string) string {
	if value := env(key); value != "" {
		return value
	}
	return fallback
}
