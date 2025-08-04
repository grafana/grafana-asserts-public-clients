# \MonitoringStatusControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetEntityMonitoringStatus**](MonitoringStatusControllerAPI.md#GetEntityMonitoringStatus) | **Post** /v1/monitoring-status/for-entities | 



## GetEntityMonitoringStatus

> MonitoringStatusResponseDto GetEntityMonitoringStatus(ctx).MonitoringStatusRequestDto(monitoringStatusRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	monitoringStatusRequestDto := *openapiclient.NewMonitoringStatusRequestDto() // MonitoringStatusRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.MonitoringStatusControllerAPI.GetEntityMonitoringStatus(context.Background()).MonitoringStatusRequestDto(monitoringStatusRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MonitoringStatusControllerAPI.GetEntityMonitoringStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntityMonitoringStatus`: MonitoringStatusResponseDto
	fmt.Fprintf(os.Stdout, "Response from `MonitoringStatusControllerAPI.GetEntityMonitoringStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityMonitoringStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitoringStatusRequestDto** | [**MonitoringStatusRequestDto**](MonitoringStatusRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**MonitoringStatusResponseDto**](MonitoringStatusResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

