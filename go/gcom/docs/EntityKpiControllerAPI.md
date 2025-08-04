# \EntityKpiControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetKpiSummary**](EntityKpiControllerAPI.md#GetKpiSummary) | **Post** /v1/kpi/summary/for-entities/{kpi_name} | 
[**GetKpisByEntityType**](EntityKpiControllerAPI.md#GetKpisByEntityType) | **Get** /v1/kpi/list | 



## GetKpiSummary

> map[string]GraphEntityKpiValue GetKpiSummary(ctx, kpiName).KpiSummaryRequestDto(kpiSummaryRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	kpiName := "kpiName_example" // string | 
	kpiSummaryRequestDto := *openapiclient.NewKpiSummaryRequestDto() // KpiSummaryRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityKpiControllerAPI.GetKpiSummary(context.Background(), kpiName).KpiSummaryRequestDto(kpiSummaryRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityKpiControllerAPI.GetKpiSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetKpiSummary`: map[string]GraphEntityKpiValue
	fmt.Fprintf(os.Stdout, "Response from `EntityKpiControllerAPI.GetKpiSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**kpiName** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetKpiSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **kpiSummaryRequestDto** | [**KpiSummaryRequestDto**](KpiSummaryRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**map[string]GraphEntityKpiValue**](GraphEntityKpiValue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetKpisByEntityType

> KpiListDto GetKpisByEntityType(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.EntityKpiControllerAPI.GetKpisByEntityType(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityKpiControllerAPI.GetKpisByEntityType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetKpisByEntityType`: KpiListDto
	fmt.Fprintf(os.Stdout, "Response from `EntityKpiControllerAPI.GetKpisByEntityType`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetKpisByEntityTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**KpiListDto**](KpiListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

