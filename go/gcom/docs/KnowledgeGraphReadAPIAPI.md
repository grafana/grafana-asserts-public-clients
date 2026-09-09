# \KnowledgeGraphReadAPIAPI

All URIs are relative to *http://localhost:18031*

Method | HTTP request | Description
------------- | ------------- | -------------
[**LookupConnectedEntities**](KnowledgeGraphReadAPIAPI.md#LookupConnectedEntities) | **Get** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/entities/connected | Get entities connected to the entity with the given identity
[**LookupEntity**](KnowledgeGraphReadAPIAPI.md#LookupEntity) | **Get** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/entities | Get one entity by its identity



## LookupConnectedEntities

> ConnectedEntitiesResponseDto LookupConnectedEntities(ctx, namespace).Type_(type_).Name(name).Domain(domain).ConnectedType(connectedType).Limit(limit).Offset(offset).XScopeOrgID(xScopeOrgID).Execute()

Get entities connected to the entity with the given identity



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/gcom"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId> (default to "")
	type_ := "type__example" // string | 
	name := "name_example" // string | 
	domain := "domain_example" // string |  (optional)
	connectedType := "connectedType_example" // string | Restrict results to connected entities of this type (optional) (default to "")
	limit := int32(56) // int32 |  (optional) (default to 25)
	offset := int32(56) // int32 |  (optional) (default to 0)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KnowledgeGraphReadAPIAPI.LookupConnectedEntities(context.Background(), namespace).Type_(type_).Name(name).Domain(domain).ConnectedType(connectedType).Limit(limit).Offset(offset).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphReadAPIAPI.LookupConnectedEntities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LookupConnectedEntities`: ConnectedEntitiesResponseDto
	fmt.Fprintf(os.Stdout, "Response from `KnowledgeGraphReadAPIAPI.LookupConnectedEntities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiLookupConnectedEntitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | **string** |  | 
 **name** | **string** |  | 
 **domain** | **string** |  | 
 **connectedType** | **string** | Restrict results to connected entities of this type | [default to &quot;&quot;]
 **limit** | **int32** |  | [default to 25]
 **offset** | **int32** |  | [default to 0]
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ConnectedEntitiesResponseDto**](ConnectedEntitiesResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LookupEntity

> EntityReadResponseDto LookupEntity(ctx, namespace).Type_(type_).Name(name).Domain(domain).XScopeOrgID(xScopeOrgID).Execute()

Get one entity by its identity



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/gcom"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId> (default to "")
	type_ := "type__example" // string | 
	name := "name_example" // string | 
	domain := "domain_example" // string |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KnowledgeGraphReadAPIAPI.LookupEntity(context.Background(), namespace).Type_(type_).Name(name).Domain(domain).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphReadAPIAPI.LookupEntity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LookupEntity`: EntityReadResponseDto
	fmt.Fprintf(os.Stdout, "Response from `KnowledgeGraphReadAPIAPI.LookupEntity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiLookupEntityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | **string** |  | 
 **name** | **string** |  | 
 **domain** | **string** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityReadResponseDto**](EntityReadResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

