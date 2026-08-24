# \MetricDrilldownConfigControllerAPI

All URIs are relative to *http://localhost:8030*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetTenantMetricConfig**](MetricDrilldownConfigControllerAPI.md#GetTenantMetricConfig) | **Get** /asserts/api-server/v2/config/metric | Get tenant metric configuration
[**UpsertMetricDrilldownConfig**](MetricDrilldownConfigControllerAPI.md#UpsertMetricDrilldownConfig) | **Post** /asserts/api-server/v2/config/metric | Upsert metric drilldown configuration



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

