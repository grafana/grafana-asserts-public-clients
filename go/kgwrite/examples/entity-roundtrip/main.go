package main

import (
	"context"
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

func run() error {
	grafanaURL := flag.String("grafana-url", env("GRAFANA_URL"), "Grafana stack URL, for example https://my-stack.grafana.net")
	stackID := flag.String("stack-id", env("GRAFANA_STACK_ID"), "Numeric Grafana stack ID")
	domain := flag.String("domain", envDefault("KG_DOMAIN", "demo"), "Knowledge Graph domain for the demo entity")
	entityType := flag.String("type", envDefault("KG_ENTITY_TYPE", "DemoEntity"), "Demo entity type")
	entityName := flag.String("name", envDefault("KG_ENTITY_NAME", "demo-entity"), "Demo entity name")
	flag.Parse()

	baseURL, err := normalizeGrafanaURL(*grafanaURL)
	if err != nil {
		return err
	}
	token := env("GRAFANA_TOKEN")
	if token == "" {
		return errors.New("missing service account token; set GRAFANA_TOKEN")
	}
	namespace, err := namespaceForStack(*stackID)
	if err != nil {
		return err
	}

	cfg := kgwrite.NewConfiguration()
	cfg.Servers = kgwrite.ServerConfigurations{{URL: baseURL}}
	cfg.AddDefaultHeader("Authorization", "Bearer "+token)
	client := kgwrite.NewAPIClient(cfg)

	ctx := context.Background()
	fmt.Printf("Creating entity %s/%s in namespace %s via %s\n", *entityType, *entityName, namespace, baseURL)
	created, response, err := client.KnowledgeGraphWriteAPIAPI.
		UpsertEntity(ctx, namespace).
		EntityWriteRequestDto(*kgwrite.NewEntityWriteRequestDto(*domain, *entityType, *entityName, -1)).
		Execute()
	if err != nil {
		return fmt.Errorf("create entity failed: %w", err)
	}
	if response == nil || (response.StatusCode != http.StatusCreated && response.StatusCode != http.StatusOK) {
		return fmt.Errorf("create entity returned unexpected status %s", status(response))
	}
	fmt.Printf("Created entity: domain=%s type=%s name=%s status=%s\n", created.GetDomain(), created.GetType(), created.GetName(), status(response))

	fmt.Printf("Deleting entity %s/%s\n", *entityType, *entityName)
	response, err = client.KnowledgeGraphWriteAPIAPI.
		DeleteEntity(ctx, namespace, *entityType, *entityName).
		Domain(*domain).
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

func normalizeGrafanaURL(value string) (string, error) {
	raw := strings.TrimRight(strings.TrimSpace(value), "/")
	if raw == "" {
		return "", errors.New("missing Grafana URL; set GRAFANA_URL or pass -grafana-url")
	}
	if !strings.Contains(raw, "://") {
		raw = "https://" + raw
	}
	parsed, err := url.Parse(raw)
	if err != nil {
		return "", fmt.Errorf("parse Grafana URL: %w", err)
	}
	if parsed.Scheme != "https" && parsed.Scheme != "http" {
		return "", fmt.Errorf("unsupported Grafana URL scheme %q", parsed.Scheme)
	}
	if parsed.Host == "" {
		return "", fmt.Errorf("Grafana URL %q does not include a host", value)
	}
	return strings.TrimRight(parsed.String(), "/"), nil
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
