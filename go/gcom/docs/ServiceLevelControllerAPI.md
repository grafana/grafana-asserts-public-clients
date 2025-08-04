# \ServiceLevelControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetSloChart**](ServiceLevelControllerAPI.md#GetSloChart) | **Post** /v1/slo/chart | 
[**GetSlos**](ServiceLevelControllerAPI.md#GetSlos) | **Post** /v1/slo | 
[**GetTopSloTargets**](ServiceLevelControllerAPI.md#GetTopSloTargets) | **Post** /v1/slo/top | 



## GetSloChart

> SloChartResponseDto GetSloChart(ctx).SloChartRequestDto(sloChartRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	sloChartRequestDto := *openapiclient.NewSloChartRequestDto() // SloChartRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ServiceLevelControllerAPI.GetSloChart(context.Background()).SloChartRequestDto(sloChartRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceLevelControllerAPI.GetSloChart``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSloChart`: SloChartResponseDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceLevelControllerAPI.GetSloChart`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSloChartRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sloChartRequestDto** | [**SloChartRequestDto**](SloChartRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SloChartResponseDto**](SloChartResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSlos

> SloListDto GetSlos(ctx).SloListRequestDto(sloListRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	sloListRequestDto := *openapiclient.NewSloListRequestDto() // SloListRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ServiceLevelControllerAPI.GetSlos(context.Background()).SloListRequestDto(sloListRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceLevelControllerAPI.GetSlos``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSlos`: SloListDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceLevelControllerAPI.GetSlos`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSlosRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sloListRequestDto** | [**SloListRequestDto**](SloListRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SloListDto**](SloListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTopSloTargets

> SloListDto GetTopSloTargets(ctx).SloListRequestDto(sloListRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	sloListRequestDto := *openapiclient.NewSloListRequestDto() // SloListRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ServiceLevelControllerAPI.GetTopSloTargets(context.Background()).SloListRequestDto(sloListRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ServiceLevelControllerAPI.GetTopSloTargets``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTopSloTargets`: SloListDto
	fmt.Fprintf(os.Stdout, "Response from `ServiceLevelControllerAPI.GetTopSloTargets`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTopSloTargetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sloListRequestDto** | [**SloListRequestDto**](SloListRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SloListDto**](SloListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

