# \CustomDashConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteCustomDashConfig**](CustomDashConfigControllerAPI.md#DeleteCustomDashConfig) | **Post** /v1/config/dashboard/delete/{entity_type} | 
[**GetAllCustomDashConfig**](CustomDashConfigControllerAPI.md#GetAllCustomDashConfig) | **Get** /v1/config/dashboard | 
[**GetCustomDashConfig**](CustomDashConfigControllerAPI.md#GetCustomDashConfig) | **Get** /v1/config/dashboard/{entity_type} | 
[**UpdateCustomDashConfig**](CustomDashConfigControllerAPI.md#UpdateCustomDashConfig) | **Post** /v1/config/dashboard/{entity_type} | 



## DeleteCustomDashConfig

> DeleteCustomDashConfig(ctx, entityType).CustomDashConfigDto(customDashConfigDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityType := "entityType_example" // string | 
	customDashConfigDto := *openapiclient.NewCustomDashConfigDto() // CustomDashConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CustomDashConfigControllerAPI.DeleteCustomDashConfig(context.Background(), entityType).CustomDashConfigDto(customDashConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomDashConfigControllerAPI.DeleteCustomDashConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**entityType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomDashConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customDashConfigDto** | [**CustomDashConfigDto**](CustomDashConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllCustomDashConfig

> CustomKpiDashConfigDto GetAllCustomDashConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomDashConfigControllerAPI.GetAllCustomDashConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomDashConfigControllerAPI.GetAllCustomDashConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllCustomDashConfig`: CustomKpiDashConfigDto
	fmt.Fprintf(os.Stdout, "Response from `CustomDashConfigControllerAPI.GetAllCustomDashConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllCustomDashConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**CustomKpiDashConfigDto**](CustomKpiDashConfigDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomDashConfig

> CustomDashConfigsDto GetCustomDashConfig(ctx, entityType).XScopeOrgID(xScopeOrgID).Execute()



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
	entityType := "entityType_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomDashConfigControllerAPI.GetCustomDashConfig(context.Background(), entityType).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomDashConfigControllerAPI.GetCustomDashConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomDashConfig`: CustomDashConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `CustomDashConfigControllerAPI.GetCustomDashConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**entityType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomDashConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**CustomDashConfigsDto**](CustomDashConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCustomDashConfig

> UpdateCustomDashConfig(ctx, entityType).CustomDashConfigDto(customDashConfigDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityType := "entityType_example" // string | 
	customDashConfigDto := *openapiclient.NewCustomDashConfigDto() // CustomDashConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CustomDashConfigControllerAPI.UpdateCustomDashConfig(context.Background(), entityType).CustomDashConfigDto(customDashConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomDashConfigControllerAPI.UpdateCustomDashConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**entityType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCustomDashConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **customDashConfigDto** | [**CustomDashConfigDto**](CustomDashConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

