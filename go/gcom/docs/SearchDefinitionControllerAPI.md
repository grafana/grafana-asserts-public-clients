# \SearchDefinitionControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateSearchDefinition**](SearchDefinitionControllerAPI.md#CreateSearchDefinition) | **Post** /v1/search/definition | 
[**DeleteSearchDefinition**](SearchDefinitionControllerAPI.md#DeleteSearchDefinition) | **Delete** /v1/search/definition/{id} | 
[**GetSearchDefinition**](SearchDefinitionControllerAPI.md#GetSearchDefinition) | **Get** /v1/search/definition/{id} | 
[**SearchDefinitions**](SearchDefinitionControllerAPI.md#SearchDefinitions) | **Get** /v1/search/definition | 
[**UpdateSearchDefinition**](SearchDefinitionControllerAPI.md#UpdateSearchDefinition) | **Put** /v1/search/definition/{id} | 



## CreateSearchDefinition

> SearchDefinitionDto CreateSearchDefinition(ctx).SearchDefinitionDto(searchDefinitionDto).XScopeOrgID(xScopeOrgID).Execute()



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
	searchDefinitionDto := *openapiclient.NewSearchDefinitionDto() // SearchDefinitionDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchDefinitionControllerAPI.CreateSearchDefinition(context.Background()).SearchDefinitionDto(searchDefinitionDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchDefinitionControllerAPI.CreateSearchDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSearchDefinition`: SearchDefinitionDto
	fmt.Fprintf(os.Stdout, "Response from `SearchDefinitionControllerAPI.CreateSearchDefinition`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSearchDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchDefinitionDto** | [**SearchDefinitionDto**](SearchDefinitionDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SearchDefinitionDto**](SearchDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSearchDefinition

> DeleteSearchDefinition(ctx, id).XScopeOrgID(xScopeOrgID).Execute()



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
	id := int32(56) // int32 | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.SearchDefinitionControllerAPI.DeleteSearchDefinition(context.Background(), id).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchDefinitionControllerAPI.DeleteSearchDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSearchDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSearchDefinition

> SearchDefinitionDto GetSearchDefinition(ctx, id).XScopeOrgID(xScopeOrgID).Execute()



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
	id := "id_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchDefinitionControllerAPI.GetSearchDefinition(context.Background(), id).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchDefinitionControllerAPI.GetSearchDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSearchDefinition`: SearchDefinitionDto
	fmt.Fprintf(os.Stdout, "Response from `SearchDefinitionControllerAPI.GetSearchDefinition`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSearchDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SearchDefinitionDto**](SearchDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchDefinitions

> SearchDefinitionResponseDto SearchDefinitions(ctx).Q(q).OnlyCustomSearch(onlyCustomSearch).Max(max).Offset(offset).XScopeOrgID(xScopeOrgID).Execute()



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
	q := "q_example" // string | 
	onlyCustomSearch := true // bool |  (optional) (default to false)
	max := int32(56) // int32 |  (optional)
	offset := int32(56) // int32 |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchDefinitionControllerAPI.SearchDefinitions(context.Background()).Q(q).OnlyCustomSearch(onlyCustomSearch).Max(max).Offset(offset).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchDefinitionControllerAPI.SearchDefinitions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchDefinitions`: SearchDefinitionResponseDto
	fmt.Fprintf(os.Stdout, "Response from `SearchDefinitionControllerAPI.SearchDefinitions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **string** |  | 
 **onlyCustomSearch** | **bool** |  | [default to false]
 **max** | **int32** |  | 
 **offset** | **int32** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SearchDefinitionResponseDto**](SearchDefinitionResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateSearchDefinition

> SearchDefinitionDto UpdateSearchDefinition(ctx, id).SearchDefinitionDto(searchDefinitionDto).XScopeOrgID(xScopeOrgID).Execute()



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
	id := int32(56) // int32 | 
	searchDefinitionDto := *openapiclient.NewSearchDefinitionDto() // SearchDefinitionDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchDefinitionControllerAPI.UpdateSearchDefinition(context.Background(), id).SearchDefinitionDto(searchDefinitionDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchDefinitionControllerAPI.UpdateSearchDefinition``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateSearchDefinition`: SearchDefinitionDto
	fmt.Fprintf(os.Stdout, "Response from `SearchDefinitionControllerAPI.UpdateSearchDefinition`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateSearchDefinitionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **searchDefinitionDto** | [**SearchDefinitionDto**](SearchDefinitionDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SearchDefinitionDto**](SearchDefinitionDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

