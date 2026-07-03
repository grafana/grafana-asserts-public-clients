# KG Write entity roundtrip example

This example creates and deletes one custom Knowledge Graph entity through the
Grafana Cloud gateway.

It lives outside the generated `go/kgwrite` client tree so OpenAPI client
regeneration does not overwrite it.

For a Grafana Cloud cell gateway, use a GCom token as HTTP Basic auth. The
example sets the same shape as:

```sh
curl -u '<stack-id>:<gcom-token>' https://asserts-dev-us-central-0.grafana-dev.net/apis/...
```

Run it with:

```sh
export GRAFANA_CELL_GATEWAY_URL="https://asserts-dev-us-central-0.grafana-dev.net"
export GCOM_TOKEN="..."
export GRAFANA_STACK_ID="12345"

go run .
```

You can also point the example at a Grafana stack URL with a service account
token:

```sh
export GRAFANA_URL="https://my-stack.grafana.net"
export GRAFANA_TOKEN="glsa_xxx"
export GRAFANA_STACK_ID="12345"

go run .
```

Optional flags:

```sh
go run . \
  -cell-gateway-url https://asserts-dev-us-central-0.grafana-dev.net \
  -domain demo \
  -type DemoEntity \
  -name demo-entity
```
