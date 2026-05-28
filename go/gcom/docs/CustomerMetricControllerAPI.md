# \CustomerMetricControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllMetrics**](CustomerMetricControllerAPI.md#GetAllMetrics) | **Get** /v1/customer/metric | 
[**GetAllMetrics1**](CustomerMetricControllerAPI.md#GetAllMetrics1) | **Post** /v1/customer/metric | 



## GetAllMetrics

> CustomerMetricResponseDto GetAllMetrics(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.CustomerMetricControllerAPI.GetAllMetrics(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomerMetricControllerAPI.GetAllMetrics``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllMetrics`: CustomerMetricResponseDto
	fmt.Fprintf(os.Stdout, "Response from `CustomerMetricControllerAPI.GetAllMetrics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllMetricsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**CustomerMetricResponseDto**](CustomerMetricResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllMetrics1

> CustomerMetricResponseDto GetAllMetrics1(ctx).CustomerMetricRequestDto(customerMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	customerMetricRequestDto := *openapiclient.NewCustomerMetricRequestDto() // CustomerMetricRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CustomerMetricControllerAPI.GetAllMetrics1(context.Background()).CustomerMetricRequestDto(customerMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CustomerMetricControllerAPI.GetAllMetrics1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllMetrics1`: CustomerMetricResponseDto
	fmt.Fprintf(os.Stdout, "Response from `CustomerMetricControllerAPI.GetAllMetrics1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllMetrics1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerMetricRequestDto** | [**CustomerMetricRequestDto**](CustomerMetricRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**CustomerMetricResponseDto**](CustomerMetricResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

