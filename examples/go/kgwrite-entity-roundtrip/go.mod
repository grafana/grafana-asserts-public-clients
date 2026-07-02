module github.com/grafana/grafana-asserts-public-clients/examples/go/kgwrite-entity-roundtrip

go 1.18

require github.com/grafana/grafana-asserts-public-clients/go/kgwrite v0.0.0

require gopkg.in/validator.v2 v2.0.1 // indirect

replace github.com/grafana/grafana-asserts-public-clients/go/kgwrite => ../../../go/kgwrite
