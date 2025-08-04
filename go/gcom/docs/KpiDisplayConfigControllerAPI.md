# \KpiDisplayConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetKpiViewConfig**](KpiDisplayConfigControllerAPI.md#GetKpiViewConfig) | **Get** /v1/config/display/kpi | 
[**PutKpiViewConfig**](KpiDisplayConfigControllerAPI.md#PutKpiViewConfig) | **Post** /v1/config/display/kpi | 



## GetKpiViewConfig

> KpiDisplayConfigDto GetKpiViewConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.KpiDisplayConfigControllerAPI.GetKpiViewConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KpiDisplayConfigControllerAPI.GetKpiViewConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetKpiViewConfig`: KpiDisplayConfigDto
	fmt.Fprintf(os.Stdout, "Response from `KpiDisplayConfigControllerAPI.GetKpiViewConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetKpiViewConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**KpiDisplayConfigDto**](KpiDisplayConfigDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutKpiViewConfig

> PutKpiViewConfig(ctx).KpiDisplayConfigDto(kpiDisplayConfigDto).XScopeOrgID(xScopeOrgID).Execute()



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
	kpiDisplayConfigDto := *openapiclient.NewKpiDisplayConfigDto() // KpiDisplayConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.KpiDisplayConfigControllerAPI.PutKpiViewConfig(context.Background()).KpiDisplayConfigDto(kpiDisplayConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KpiDisplayConfigControllerAPI.PutKpiViewConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutKpiViewConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **kpiDisplayConfigDto** | [**KpiDisplayConfigDto**](KpiDisplayConfigDto.md) |  | 
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

