# \MetricDrilldownConfigControllerAPI

All URIs are relative to *http://localhost:18031*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteConfig3**](MetricDrilldownConfigControllerAPI.md#DeleteConfig3) | **Delete** /asserts/api-server/v2/config/metric/{name} | Delete metric drilldown configuration
[**GetTenantMetricConfig**](MetricDrilldownConfigControllerAPI.md#GetTenantMetricConfig) | **Get** /asserts/api-server/v2/config/metric | Get tenant metric configuration
[**ReorderMetricConfigPriorities**](MetricDrilldownConfigControllerAPI.md#ReorderMetricConfigPriorities) | **Put** /asserts/api-server/v2/config/metric/reorder | Reorder metric drilldown configuration priorities
[**UpsertMetricDrilldownConfig**](MetricDrilldownConfigControllerAPI.md#UpsertMetricDrilldownConfig) | **Post** /asserts/api-server/v2/config/metric | Upsert metric drilldown configuration



## DeleteConfig3

> DeleteConfig3(ctx, name).XScopeOrgID(xScopeOrgID).Execute()

Delete metric drilldown configuration



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
	name := "name_example" // string | Name of the metric configuration to delete (default to "")
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.MetricDrilldownConfigControllerAPI.DeleteConfig3(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricDrilldownConfigControllerAPI.DeleteConfig3``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the metric configuration to delete | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConfig3Request struct via the builder pattern


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


## GetTenantMetricConfig

> TenantMetricConfigResponseDto GetTenantMetricConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get tenant metric configuration



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
	resp, r, err := apiClient.MetricDrilldownConfigControllerAPI.GetTenantMetricConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricDrilldownConfigControllerAPI.GetTenantMetricConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantMetricConfig`: TenantMetricConfigResponseDto
	fmt.Fprintf(os.Stdout, "Response from `MetricDrilldownConfigControllerAPI.GetTenantMetricConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantMetricConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TenantMetricConfigResponseDto**](TenantMetricConfigResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReorderMetricConfigPriorities

> TenantMetricConfigResponseDto ReorderMetricConfigPriorities(ctx).Body(body).XScopeOrgID(xScopeOrgID).Execute()

Reorder metric drilldown configuration priorities



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
	body := "body_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MetricDrilldownConfigControllerAPI.ReorderMetricConfigPriorities(context.Background()).Body(body).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricDrilldownConfigControllerAPI.ReorderMetricConfigPriorities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ReorderMetricConfigPriorities`: TenantMetricConfigResponseDto
	fmt.Fprintf(os.Stdout, "Response from `MetricDrilldownConfigControllerAPI.ReorderMetricConfigPriorities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReorderMetricConfigPrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TenantMetricConfigResponseDto**](TenantMetricConfigResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/yaml
- **Accept**: application/json, application/x-yml, application/yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpsertMetricDrilldownConfig

> UpsertMetricDrilldownConfig(ctx).Body(body).XScopeOrgID(xScopeOrgID).Execute()

Upsert metric drilldown configuration



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
	body := "body_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.MetricDrilldownConfigControllerAPI.UpsertMetricDrilldownConfig(context.Background()).Body(body).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MetricDrilldownConfigControllerAPI.UpsertMetricDrilldownConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpsertMetricDrilldownConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **string** |  | 
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

