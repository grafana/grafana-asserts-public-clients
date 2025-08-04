# \EntityScopeControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllEntityScopes**](EntityScopeControllerAPI.md#GetAllEntityScopes) | **Get** /v1/entity_scope | 
[**GetEntityScopes**](EntityScopeControllerAPI.md#GetEntityScopes) | **Post** /v1/entity_scope | 



## GetAllEntityScopes

> EntityScopesResponseDto GetAllEntityScopes(ctx).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()



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
	start := int64(789) // int64 |  (optional)
	end := int64(789) // int64 |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityScopeControllerAPI.GetAllEntityScopes(context.Background()).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityScopeControllerAPI.GetAllEntityScopes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllEntityScopes`: EntityScopesResponseDto
	fmt.Fprintf(os.Stdout, "Response from `EntityScopeControllerAPI.GetAllEntityScopes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllEntityScopesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int64** |  | 
 **end** | **int64** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityScopesResponseDto**](EntityScopesResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEntityScopes

> EntityScopesResponseDto GetEntityScopes(ctx).EntityScopesRequestDto(entityScopesRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityScopesRequestDto := *openapiclient.NewEntityScopesRequestDto() // EntityScopesRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityScopeControllerAPI.GetEntityScopes(context.Background()).EntityScopesRequestDto(entityScopesRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityScopeControllerAPI.GetEntityScopes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntityScopes`: EntityScopesResponseDto
	fmt.Fprintf(os.Stdout, "Response from `EntityScopeControllerAPI.GetEntityScopes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityScopesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityScopesRequestDto** | [**EntityScopesRequestDto**](EntityScopesRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityScopesResponseDto**](EntityScopesResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

