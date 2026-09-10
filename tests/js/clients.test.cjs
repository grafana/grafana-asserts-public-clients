const assert = require("node:assert/strict");
const test = require("node:test");
const gcom = require("../../js/gcom");
const kgwrite = require("../../js/kgwrite");
const systemschema = require("../../js/systemschema");

function configuration(client, handler) {
  return new client.Configuration({
    basePath: "https://stack.example/api/plugins/grafana-asserts-app/resources",
    headers: { Authorization: "Bearer test-token" },
    fetchApi: handler,
  });
}

test("public client uses the configured base path and tenant header", async () => {
  const expected = { status: "ENABLED", future_field: { enabled: true } };
  const api = new gcom.StackControllerApi(
    configuration(gcom, async (url, init) => {
      assert.equal(
        new URL(url).pathname,
        "/api/plugins/grafana-asserts-app/resources/asserts/api-server/v1/stack/status",
      );
      assert.equal(init.method, "GET");
      assert.equal(init.headers.Authorization, "Bearer test-token");
      assert.equal(init.headers["X-Scope-OrgID"], "123");
      return Response.json(expected);
    }),
  );
  assert.deepEqual(await api.getStatus({ xScopeOrgID: "123" }), expected);
});

test("graph writes preserve arbitrary properties and encode path parameters", async () => {
  const entity = {
    domain: "custom",
    type: "Service",
    name: "checkout",
    scope: { env: "prod" },
    properties: {
      count: 7,
      enabled: true,
      names: ["a", "b"],
      deployment_id: "v1",
    },
  };
  const expected = { entity, created: true };
  const api = new kgwrite.KnowledgeGraphWriteAPIApi(
    configuration(kgwrite, async (url, init) => {
      assert.equal(
        new URL(url).pathname,
        "/api/plugins/grafana-asserts-app/resources/apis/kg.grafana.com/v1alpha1/namespaces/stacks%2F123/entities",
      );
      assert.equal(init.method, "POST");
      assert.equal(init.headers["Content-Type"], "application/json");
      assert.equal(init.headers["X-Scope-OrgID"], "123");
      assert.deepEqual(JSON.parse(init.body), entity);
      return Response.json(expected);
    }),
  );
  assert.deepEqual(
    await api.upsertEntity({
      namespace: "stacks/123",
      entityWriteRequestDto: entity,
      xScopeOrgID: "123",
    }),
    expected,
  );
});

test("entity lookups serialize deep object scope filters", async () => {
  const api = new kgwrite.KnowledgeGraphReadAPIApi(
    configuration(kgwrite, async (url) => {
      const params = new URL(url).searchParams;
      assert.equal(params.get("name"), "checkout & payments");
      assert.equal(params.get("scope[env]"), "prod");
      assert.equal(params.get("scope[site]"), "us/east");
      return Response.json({ entity: null });
    }),
  );
  await api.lookupEntity({
    namespace: "stacks-123",
    type: "Service",
    name: "checkout & payments",
    scope: { env: "prod", site: "us/east" },
  });
});

test("system schema client returns JSON from the schema endpoint", async () => {
  const expected = {
    items: [{ domain: "custom", version: "v1", displayName: "Custom" }],
  };
  const api = new systemschema.SystemKgSchemaAPIApi(
    configuration(systemschema, async (url) => {
      assert.equal(
        new URL(url).pathname,
        "/api/plugins/grafana-asserts-app/resources/apis/kg.grafana.com/v1alpha1/systemschemas",
      );
      return Response.json(expected);
    }),
  );
  assert.deepEqual(await api.list(), expected);
});

test("non-success responses retain their status and error body", async () => {
  const expected = { message: "not found" };
  const api = new systemschema.SystemKgSchemaAPIApi(
    configuration(systemschema, async () =>
      Response.json(expected, { status: 404 }),
    ),
  );
  let caught;
  try {
    await api.list();
  } catch (error) {
    caught = error;
    assert.ok(error instanceof systemschema.ResponseError);
    assert.equal(error.response.status, 404);
    assert.deepEqual(await error.response.json(), expected);
  }
  assert.ok(caught, "expected an HTTP error");
});

test("delete accepts an empty 204 response", async () => {
  const api = new kgwrite.KnowledgeGraphWriteAPIApi(
    configuration(kgwrite, async () => new Response(null, { status: 204 })),
  );
  assert.equal(
    await api.deleteEntity({
      namespace: "stacks-123",
      domain: "custom",
      type: "Service",
      name: "checkout",
    }),
    undefined,
  );
});
