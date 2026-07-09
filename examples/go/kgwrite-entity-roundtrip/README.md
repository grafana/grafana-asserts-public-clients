# KG Write entity roundtrip example

This example creates two custom Knowledge Graph entities, creates a relationship
between them, deletes the relationship, and then deletes both entities through
the Grafana Cloud gateway.

It lives outside the generated `go/kgwrite` client tree so OpenAPI client
regeneration does not overwrite it.

Use a GCom token with the Grafana Cloud cell gateway. The example sets the same
HTTP Basic auth shape as:

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

Optional flags:

```sh
go run . \
  -cell-gateway-url https://asserts-dev-us-central-0.grafana-dev.net \
  -domain demo \
  -type DemoEntity \
  -name demo-entity \
  -relation-type DEPENDS_ON
```

The `-name` value is used as a base name. The example creates
`<name>-from` and `<name>-to`, then writes `<relation-type>` between them.

The example writes `ttlSeconds=-1`, which means the demo entities and
relationship do not expire before the cleanup delete calls run.
