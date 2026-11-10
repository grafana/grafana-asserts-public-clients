# \KnowledgeGraphSchemaAPIAPI

All URIs are relative to *http://localhost:8030*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ListSchemas**](KnowledgeGraphSchemaAPIAPI.md#ListSchemas) | **Get** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/schemas | List effective declared schemas



## ListSchemas

> KgSchemaListDto ListSchemas(ctx, namespace).Expand(expand).LatestOnly(latestOnly).XScopeOrgID(xScopeOrgID).Execute()

List effective declared schemas



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId>
	expand := true // bool | Include complete schema bundle contents (optional) (default to false)
	latestOnly := true // bool | Return only the highest-priority version of each domain (optional) (default to true)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KnowledgeGraphSchemaAPIAPI.ListSchemas(context.Background(), namespace).Expand(expand).LatestOnly(latestOnly).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphSchemaAPIAPI.ListSchemas``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSchemas`: KgSchemaListDto
	fmt.Fprintf(os.Stdout, "Response from `KnowledgeGraphSchemaAPIAPI.ListSchemas`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | 

### Other Parameters

Other parameters are passed through a pointer to a apiListSchemasRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **expand** | **bool** | Include complete schema bundle contents | [default to false]
 **latestOnly** | **bool** | Return only the highest-priority version of each domain | [default to true]
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**KgSchemaListDto**](KgSchemaListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

