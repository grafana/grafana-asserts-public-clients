# KG Write entity roundtrip example

This example creates and deletes one custom Knowledge Graph entity through the
Grafana Cloud gateway.

It lives outside the generated `go/kgwrite` client tree so OpenAPI client
regeneration does not overwrite it.

Set a Grafana service account token with Asserts write and delete permissions:

```sh
export GRAFANA_URL="https://my-stack.grafana.net"
export GRAFANA_TOKEN="glsa_xxx"
export GRAFANA_STACK_ID="12345"

go run .
```

Optional flags:

```sh
go run . \
  -domain demo \
  -type DemoEntity \
  -name demo-entity
```
