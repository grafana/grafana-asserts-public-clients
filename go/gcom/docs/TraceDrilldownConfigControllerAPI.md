# \TraceDrilldownConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteConfig**](TraceDrilldownConfigControllerAPI.md#DeleteConfig) | **Delete** /v2/config/trace/{name} | Delete trace drilldown configuration
[**GetTenantTraceConfig**](TraceDrilldownConfigControllerAPI.md#GetTenantTraceConfig) | **Get** /v2/config/trace | Get tenant trace configuration
[**UpsertTraceDrilldownConfig**](TraceDrilldownConfigControllerAPI.md#UpsertTraceDrilldownConfig) | **Post** /v2/config/trace | Upsert trace drilldown configuration



## DeleteConfig

> DeleteConfig(ctx, name).XScopeOrgID(xScopeOrgID).Execute()

Delete trace drilldown configuration



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
	name := "name_example" // string | Name of the trace configuration to delete
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.TraceDrilldownConfigControllerAPI.DeleteConfig(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TraceDrilldownConfigControllerAPI.DeleteConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the trace configuration to delete | 

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


## GetTenantTraceConfig

> TenantTraceConfigResponseDto GetTenantTraceConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get tenant trace configuration



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
	resp, r, err := apiClient.TraceDrilldownConfigControllerAPI.GetTenantTraceConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TraceDrilldownConfigControllerAPI.GetTenantTraceConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantTraceConfig`: TenantTraceConfigResponseDto
	fmt.Fprintf(os.Stdout, "Response from `TraceDrilldownConfigControllerAPI.GetTenantTraceConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantTraceConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TenantTraceConfigResponseDto**](TenantTraceConfigResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpsertTraceDrilldownConfig

> UpsertTraceDrilldownConfig(ctx).TraceDrilldownConfigDto(traceDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()

Upsert trace drilldown configuration



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
	traceDrilldownConfigDto := *openapiclient.NewTraceDrilldownConfigDto() // TraceDrilldownConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.TraceDrilldownConfigControllerAPI.UpsertTraceDrilldownConfig(context.Background()).TraceDrilldownConfigDto(traceDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TraceDrilldownConfigControllerAPI.UpsertTraceDrilldownConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpsertTraceDrilldownConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **traceDrilldownConfigDto** | [**TraceDrilldownConfigDto**](TraceDrilldownConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/yaml
- **Accept**: application/json, application/x-yml, application/yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

