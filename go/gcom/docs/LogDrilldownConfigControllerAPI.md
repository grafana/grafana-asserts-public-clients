# \LogDrilldownConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteConfig**](LogDrilldownConfigControllerAPI.md#DeleteConfig) | **Delete** /v2/config/log/{name} | Delete log drilldown configuration
[**GetTenantLogConfig**](LogDrilldownConfigControllerAPI.md#GetTenantLogConfig) | **Get** /v2/config/log | Get tenant log configuration
[**UpsertLogDrilldownConfig**](LogDrilldownConfigControllerAPI.md#UpsertLogDrilldownConfig) | **Post** /v2/config/log | Upsert log drilldown configuration



## DeleteConfig

> DeleteConfig(ctx, name).XScopeOrgID(xScopeOrgID).Execute()

Delete log drilldown configuration



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
	name := "name_example" // string | Name of the log configuration to delete
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.LogDrilldownConfigControllerAPI.DeleteConfig(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogDrilldownConfigControllerAPI.DeleteConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the log configuration to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConfigRequest struct via the builder pattern


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


## GetTenantLogConfig

> TenantLogConfigResponseDto GetTenantLogConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get tenant log configuration



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
	resp, r, err := apiClient.LogDrilldownConfigControllerAPI.GetTenantLogConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogDrilldownConfigControllerAPI.GetTenantLogConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantLogConfig`: TenantLogConfigResponseDto
	fmt.Fprintf(os.Stdout, "Response from `LogDrilldownConfigControllerAPI.GetTenantLogConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantLogConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TenantLogConfigResponseDto**](TenantLogConfigResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpsertLogDrilldownConfig

> UpsertLogDrilldownConfig(ctx).LogDrilldownConfigDto(logDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()

Upsert log drilldown configuration



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
	logDrilldownConfigDto := *openapiclient.NewLogDrilldownConfigDto() // LogDrilldownConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.LogDrilldownConfigControllerAPI.UpsertLogDrilldownConfig(context.Background()).LogDrilldownConfigDto(logDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LogDrilldownConfigControllerAPI.UpsertLogDrilldownConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpsertLogDrilldownConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **logDrilldownConfigDto** | [**LogDrilldownConfigDto**](LogDrilldownConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

