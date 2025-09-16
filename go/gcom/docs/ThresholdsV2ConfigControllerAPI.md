# \ThresholdsV2ConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetThresholds**](ThresholdsV2ConfigControllerAPI.md#GetThresholds) | **Get** /v2/config/threshold | 
[**UpdateAllThresholds**](ThresholdsV2ConfigControllerAPI.md#UpdateAllThresholds) | **Post** /v2/config/threshold | 
[**UpdateHealthThresholds**](ThresholdsV2ConfigControllerAPI.md#UpdateHealthThresholds) | **Post** /v2/config/threshold/health | 
[**UpdateRequestThresholds**](ThresholdsV2ConfigControllerAPI.md#UpdateRequestThresholds) | **Post** /v2/config/threshold/request | 
[**UpdateResourceThresholds**](ThresholdsV2ConfigControllerAPI.md#UpdateResourceThresholds) | **Post** /v2/config/threshold/resource | 



## GetThresholds

> ThresholdsV2Dto GetThresholds(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.ThresholdsV2ConfigControllerAPI.GetThresholds(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdsV2ConfigControllerAPI.GetThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetThresholds`: ThresholdsV2Dto
	fmt.Fprintf(os.Stdout, "Response from `ThresholdsV2ConfigControllerAPI.GetThresholds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ThresholdsV2Dto**](ThresholdsV2Dto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAllThresholds

> UpdateAllThresholds(ctx).ThresholdsV2Dto(thresholdsV2Dto).XScopeOrgID(xScopeOrgID).Execute()



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
	thresholdsV2Dto := *openapiclient.NewThresholdsV2Dto() // ThresholdsV2Dto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdsV2ConfigControllerAPI.UpdateAllThresholds(context.Background()).ThresholdsV2Dto(thresholdsV2Dto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdsV2ConfigControllerAPI.UpdateAllThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAllThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **thresholdsV2Dto** | [**ThresholdsV2Dto**](ThresholdsV2Dto.md) |  | 
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


## UpdateHealthThresholds

> UpdateHealthThresholds(ctx).HealthThresholdV2Dto(healthThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()



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
	healthThresholdV2Dto := []openapiclient.HealthThresholdV2Dto{*openapiclient.NewHealthThresholdV2Dto()} // []HealthThresholdV2Dto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdsV2ConfigControllerAPI.UpdateHealthThresholds(context.Background()).HealthThresholdV2Dto(healthThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdsV2ConfigControllerAPI.UpdateHealthThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateHealthThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **healthThresholdV2Dto** | [**[]HealthThresholdV2Dto**](HealthThresholdV2Dto.md) |  | 
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


## UpdateRequestThresholds

> UpdateRequestThresholds(ctx).RequestThresholdV2Dto(requestThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()



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
	requestThresholdV2Dto := []openapiclient.RequestThresholdV2Dto{*openapiclient.NewRequestThresholdV2Dto()} // []RequestThresholdV2Dto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdsV2ConfigControllerAPI.UpdateRequestThresholds(context.Background()).RequestThresholdV2Dto(requestThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdsV2ConfigControllerAPI.UpdateRequestThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRequestThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestThresholdV2Dto** | [**[]RequestThresholdV2Dto**](RequestThresholdV2Dto.md) |  | 
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


## UpdateResourceThresholds

> UpdateResourceThresholds(ctx).ResourceThresholdV2Dto(resourceThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()



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
	resourceThresholdV2Dto := []openapiclient.ResourceThresholdV2Dto{*openapiclient.NewResourceThresholdV2Dto()} // []ResourceThresholdV2Dto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdsV2ConfigControllerAPI.UpdateResourceThresholds(context.Background()).ResourceThresholdV2Dto(resourceThresholdV2Dto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdsV2ConfigControllerAPI.UpdateResourceThresholds``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateResourceThresholdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resourceThresholdV2Dto** | [**[]ResourceThresholdV2Dto**](ResourceThresholdV2Dto.md) |  | 
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

