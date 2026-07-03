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
	FromName   string
	ToName     string
	Relation   string
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
	cellGatewayURL := flag.String("cell-gateway-url", env("GRAFANA_CELL_GATEWAY_URL"), "Grafana Cloud cell gateway URL, for example https://asserts-dev-us-central-0.grafana-dev.net")
	stackID := flag.String("stack-id", env("GRAFANA_STACK_ID"), "Numeric Grafana stack ID")
	domain := flag.String("domain", envDefault("KG_DOMAIN", "demo"), "Knowledge Graph domain for the demo entity")
	entityType := flag.String("type", envDefault("KG_ENTITY_TYPE", "DemoEntity"), "Demo entity type")
	entityName := flag.String("name", envDefault("KG_ENTITY_NAME", "demo-entity"), "Demo entity name")
	relationType := flag.String("relation-type", envDefault("KG_RELATION_TYPE", "DEPENDS_ON"), "Demo relationship type")
	flag.Parse()

	namespace, err := namespaceForStack(*stackID)
	if err != nil {
		return appConfig{}, err
	}
	gateway, err := configureGateway(*cellGatewayURL, *stackID)
	if err != nil {
		return appConfig{}, err
	}

	return appConfig{
		Gateway:    gateway,
		StackID:    strings.TrimSpace(*stackID),
		Namespace:  namespace,
		Domain:     *domain,
		EntityType: *entityType,
		FromName:   *entityName + "-from",
		ToName:     *entityName + "-to",
		Relation:   *relationType,
	}, nil
}

func newClient(gateway gatewayConfig) *kgwrite.APIClient {
	cfg := kgwrite.NewConfiguration()
	cfg.Servers = kgwrite.ServerConfigurations{{URL: gateway.BaseURL}}
	cfg.AddDefaultHeader("Authorization", gateway.AuthorizationHeader)
	return kgwrite.NewAPIClient(cfg)
}

func runRoundTrip(ctx context.Context, client *kgwrite.APIClient, cfg appConfig) error {
	fmt.Printf("Creating entities %s/%s and %s/%s in namespace %s via %s (%s)\n", cfg.EntityType, cfg.FromName, cfg.EntityType, cfg.ToName, cfg.Namespace, cfg.Gateway.BaseURL, cfg.Gateway.Mode)
	if err := upsertEntity(ctx, client, cfg, cfg.FromName); err != nil {
		return err
	}
	if err := upsertEntity(ctx, client, cfg, cfg.ToName); err != nil {
		_ = deleteEntity(ctx, client, cfg, cfg.FromName)
		return err
	}

	if err := upsertRelationship(ctx, client, cfg); err != nil {
		_ = deleteEntity(ctx, client, cfg, cfg.ToName)
		_ = deleteEntity(ctx, client, cfg, cfg.FromName)
		return err
	}

	var firstErr error
	if err := deleteRelationship(ctx, client, cfg); err != nil {
		firstErr = err
	}
	if err := deleteEntity(ctx, client, cfg, cfg.ToName); err != nil && firstErr == nil {
		firstErr = err
	}
	if err := deleteEntity(ctx, client, cfg, cfg.FromName); err != nil && firstErr == nil {
		firstErr = err
	}
	return firstErr
}

func upsertEntity(ctx context.Context, client *kgwrite.APIClient, cfg appConfig, name string) error {
	created, response, err := client.KnowledgeGraphWriteAPIAPI.
		UpsertEntity(ctx, cfg.Namespace).
		XScopeOrgID(cfg.StackID).
		EntityWriteRequestDto(*kgwrite.NewEntityWriteRequestDto(cfg.Domain, cfg.EntityType, name, -1)).
		Execute()
	if err != nil {
		return fmt.Errorf("create entity %s/%s failed: %w", cfg.EntityType, name, err)
	}
	if response == nil || (response.StatusCode != http.StatusCreated && response.StatusCode != http.StatusOK) {
		return fmt.Errorf("create entity %s/%s returned unexpected status %s", cfg.EntityType, name, status(response))
	}
	fmt.Printf("Created entity: domain=%s type=%s name=%s status=%s\n", created.GetDomain(), created.GetType(), created.GetName(), status(response))
	return nil
}

func upsertRelationship(ctx context.Context, client *kgwrite.APIClient, cfg appConfig) error {
	from := *kgwrite.NewEntityRefDto(cfg.Domain, cfg.EntityType, cfg.FromName)
	to := *kgwrite.NewEntityRefDto(cfg.Domain, cfg.EntityType, cfg.ToName)

	fmt.Printf("Creating relationship %s from %s/%s to %s/%s\n", cfg.Relation, from.GetType(), from.GetName(), to.GetType(), to.GetName())
	created, response, err := client.KnowledgeGraphWriteAPIAPI.
		UpsertRelationship(ctx, cfg.Namespace).
		XScopeOrgID(cfg.StackID).
		RelationshipWriteRequestDto(*kgwrite.NewRelationshipWriteRequestDto(cfg.Domain, cfg.Relation, from, to, -1)).
		Execute()
	if err != nil {
		return fmt.Errorf("create relationship %s failed: %w", cfg.Relation, err)
	}
	if response == nil || response.StatusCode != http.StatusOK {
		return fmt.Errorf("create relationship %s returned unexpected status %s", cfg.Relation, status(response))
	}
	fmt.Printf("Created relationship: domain=%s type=%s status=%s\n", created.GetDomain(), created.GetType(), status(response))
	return nil
}

func deleteRelationship(ctx context.Context, client *kgwrite.APIClient, cfg appConfig) error {
	fmt.Printf("Deleting relationship %s from %s/%s to %s/%s\n", cfg.Relation, cfg.EntityType, cfg.FromName, cfg.EntityType, cfg.ToName)
	response, err := client.KnowledgeGraphWriteAPIAPI.
		DeleteRelationship(ctx, cfg.Namespace, cfg.Relation).
		XScopeOrgID(cfg.StackID).
		FromDomain(cfg.Domain).
		FromType(cfg.EntityType).
		FromName(cfg.FromName).
		ToDomain(cfg.Domain).
		ToType(cfg.EntityType).
		ToName(cfg.ToName).
		Execute()
	if err != nil {
		return fmt.Errorf("delete relationship %s failed: %w", cfg.Relation, err)
	}
	if response == nil || response.StatusCode != http.StatusNoContent {
		return fmt.Errorf("delete relationship %s returned unexpected status %s", cfg.Relation, status(response))
	}
	fmt.Printf("Deleted relationship: status=%s\n", status(response))
	return nil
}

func deleteEntity(ctx context.Context, client *kgwrite.APIClient, cfg appConfig, name string) error {
	fmt.Printf("Deleting entity %s/%s\n", cfg.EntityType, name)
	response, err := client.KnowledgeGraphWriteAPIAPI.
		DeleteEntity(ctx, cfg.Namespace, cfg.EntityType, name).
		XScopeOrgID(cfg.StackID).
		Domain(cfg.Domain).
		Execute()
	if err != nil {
		return fmt.Errorf("delete entity %s/%s failed: %w", cfg.EntityType, name, err)
	}
	if response == nil || response.StatusCode != http.StatusNoContent {
		return fmt.Errorf("delete entity %s/%s returned unexpected status %s", cfg.EntityType, name, status(response))
	}
	fmt.Printf("Deleted entity: type=%s name=%s status=%s\n", cfg.EntityType, name, status(response))
	return nil
}

func configureGateway(cellGatewayURL string, stackID string) (gatewayConfig, error) {
	stackID = strings.TrimSpace(stackID)
	baseURL, err := normalizeURL(cellGatewayURL, "cell gateway URL")
	if err != nil {
		return gatewayConfig{}, err
	}
	token := env("GCOM_TOKEN")
	if token == "" {
		return gatewayConfig{}, errors.New("missing GCom token; set GCOM_TOKEN")
	}
	return gatewayConfig{
		BaseURL:             baseURL,
		AuthorizationHeader: basicAuthHeader(stackID, token),
		Mode:                "cell gateway Basic auth",
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
