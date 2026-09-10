# grafana-asserts-public-clients

Grafana Asserts Public API client

## Clients

Both languages are generated from the same specs in the same release PR.

| Spec                         | Go                                   | JavaScript / TypeScript              |
| ---------------------------- | ------------------------------------ | ------------------------------------ |
| `openapi.yaml`               | [`go/gcom`](go/gcom)                 | [`js/gcom`](js/gcom)                 |
| `kg-write-openapi.yaml`      | [`go/kgwrite`](go/kgwrite)           | [`js/kgwrite`](js/kgwrite)           |
| `system-schema-openapi.yaml` | [`go/systemschema`](go/systemschema) | [`js/systemschema`](js/systemschema) |

The JavaScript packages use OpenAPI Generator's `typescript-fetch` generator.
Each contains TypeScript source, a pinned compiler, and a lockfile. Builds produce
CommonJS JavaScript and type declarations in `dist/`, which is ignored by Git.
There are no runtime dependencies. Use Node.js 18+ or a browser with Fetch support.

## Using a JavaScript client

Clone this repository and build the package you need:

```sh
cd js/kgwrite
npm ci
npm run build
```

From a consuming project, install the local package directory:

```sh
npm install /path/to/grafana-asserts-public-clients/js/kgwrite
```

```js
const {
  Configuration,
  KnowledgeGraphReadAPIApi,
} = require("grafana-asserts-public-clients-kgwrite");

const api = new KnowledgeGraphReadAPIApi(
  new Configuration({
    basePath: process.env.ASSERTS_BASE_URL,
    headers: { Authorization: `Bearer ${process.env.ASSERTS_TOKEN}` },
  }),
);

// In an async function:
const entity = await api.lookupEntity({
  namespace: "stacks-123",
  xScopeOrgID: "123",
  type: "Service",
  name: "checkout",
  scope: { env: "prod" },
});
```

Set `basePath` explicitly to your API endpoint, without a trailing slash. In a
Grafana plugin, use `/api/plugins/grafana-asserts-app/resources` to reach the plugin
resource proxy. Authentication and tenant permissions must match the endpoint.
The default server URL in the generated client comes from the spec's generation
environment.

Models preserve wire-format property names and JSON values; they do not validate
response schemas at runtime. HTTP failures reject with `ResponseError`, whose
`response` retains the status and response body.

These packages are consumed from this repository. Their `0.0.0` package versions
are placeholders; npm registry publishing is not part of this workflow.

## Regeneration and validation

`.github/workflows/publish.yml` generates Go and JavaScript from all three specs.
It builds the JavaScript packages, runs `node --test tests/js/*.test.cjs`, and
commits both languages together through the existing signed-commit step. The
Asserts release script opens the resulting PR.

Change the specs or generator configuration and regenerate; do not edit generated
files directly. To check existing JavaScript sources locally:

```sh
for package in gcom kgwrite systemschema; do
  (cd "js/$package" && npm ci && npm run build)
done
node --test tests/js/*.test.cjs
```
