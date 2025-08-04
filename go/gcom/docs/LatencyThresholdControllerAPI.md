# \LatencyThresholdControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLatencyThresholds**](LatencyThresholdControllerAPI.md#GetLatencyThresholds) | **Post** /v2/latency-thresholds | 
[**GetLatencyThresholds1**](LatencyThresholdControllerAPI.md#GetLatencyThresholds1) | **Post** /v1/latency-thresholds | 



## GetLatencyThresholds

> []LatencyThresholdsDto GetLatencyThresholds(ctx).EntityKeyDto(entityKeyDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityKeyDto := []openapiclient.EntityKeyDto{*openapiclient.NewEntityKeyDto()} // []EntityKeyDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LatencyThresholdControllerAPI.GetLatencyThresholds(context.Background()).EntityKeyDto(entityKeyDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LatencyThresholdControllerAPI.GetLatencyThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLatencyThresholds`: []LatencyThresholdsDto
	fmt.Fprintf(os.Stdout, "Response from `LatencyThresholdControllerAPI.GetLatencyThresholds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLatencyThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityKeyDto** | [**[]EntityKeyDto**](EntityKeyDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**[]LatencyThresholdsDto**](LatencyThresholdsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLatencyThresholds1

> []LatencyThresholdDto GetLatencyThresholds1(ctx).EntityKeyDto(entityKeyDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityKeyDto := *openapiclient.NewEntityKeyDto() // EntityKeyDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LatencyThresholdControllerAPI.GetLatencyThresholds1(context.Background()).EntityKeyDto(entityKeyDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LatencyThresholdControllerAPI.GetLatencyThresholds1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLatencyThresholds1`: []LatencyThresholdDto
	fmt.Fprintf(os.Stdout, "Response from `LatencyThresholdControllerAPI.GetLatencyThresholds1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLatencyThresholds1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityKeyDto** | [**EntityKeyDto**](EntityKeyDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**[]LatencyThresholdDto**](LatencyThresholdDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

