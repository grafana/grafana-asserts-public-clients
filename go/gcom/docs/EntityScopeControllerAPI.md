# \EntityScopeControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllEntityScopes**](EntityScopeControllerAPI.md#GetAllEntityScopes) | **Get** /v1/entity_scope | 
[**GetAllEntityScopesV2**](EntityScopeControllerAPI.md#GetAllEntityScopesV2) | **Get** /v2/entity_scope | 
[**GetEntityScopes**](EntityScopeControllerAPI.md#GetEntityScopes) | **Post** /v1/entity_scope | 
[**GetEntityScopesV2**](EntityScopeControllerAPI.md#GetEntityScopesV2) | **Post** /v2/entity_scope | 



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


## GetAllEntityScopesV2

> EntityScopesV2ResponseDto GetAllEntityScopesV2(ctx).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.EntityScopeControllerAPI.GetAllEntityScopesV2(context.Background()).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityScopeControllerAPI.GetAllEntityScopesV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllEntityScopesV2`: EntityScopesV2ResponseDto
	fmt.Fprintf(os.Stdout, "Response from `EntityScopeControllerAPI.GetAllEntityScopesV2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllEntityScopesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **int64** |  | 
 **end** | **int64** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityScopesV2ResponseDto**](EntityScopesV2ResponseDto.md)

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


## GetEntityScopesV2

> EntityScopesV2ResponseDto GetEntityScopesV2(ctx).EntityScopesRequestDto(entityScopesRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.EntityScopeControllerAPI.GetEntityScopesV2(context.Background()).EntityScopesRequestDto(entityScopesRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityScopeControllerAPI.GetEntityScopesV2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntityScopesV2`: EntityScopesV2ResponseDto
	fmt.Fprintf(os.Stdout, "Response from `EntityScopeControllerAPI.GetEntityScopesV2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityScopesV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityScopesRequestDto** | [**EntityScopesRequestDto**](EntityScopesRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityScopesV2ResponseDto**](EntityScopesV2ResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

