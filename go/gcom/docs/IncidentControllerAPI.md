# \IncidentControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetIncidents**](IncidentControllerAPI.md#GetIncidents) | **Post** /v1/incidents | 
[**GetSloIncidents**](IncidentControllerAPI.md#GetSloIncidents) | **Post** /v1/slo/incidents | 
[**GetTopIncidents**](IncidentControllerAPI.md#GetTopIncidents) | **Post** /v1/incidents/top | 



## GetIncidents

> IncidentGroupListDto GetIncidents(ctx).IncidentRequestDto(incidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	incidentRequestDto := *openapiclient.NewIncidentRequestDto() // IncidentRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IncidentControllerAPI.GetIncidents(context.Background()).IncidentRequestDto(incidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IncidentControllerAPI.GetIncidents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetIncidents`: IncidentGroupListDto
	fmt.Fprintf(os.Stdout, "Response from `IncidentControllerAPI.GetIncidents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetIncidentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentRequestDto** | [**IncidentRequestDto**](IncidentRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**IncidentGroupListDto**](IncidentGroupListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSloIncidents

> SloIncidentListDto GetSloIncidents(ctx).SloIncidentRequestDto(sloIncidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	sloIncidentRequestDto := *openapiclient.NewSloIncidentRequestDto() // SloIncidentRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IncidentControllerAPI.GetSloIncidents(context.Background()).SloIncidentRequestDto(sloIncidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IncidentControllerAPI.GetSloIncidents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSloIncidents`: SloIncidentListDto
	fmt.Fprintf(os.Stdout, "Response from `IncidentControllerAPI.GetSloIncidents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSloIncidentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sloIncidentRequestDto** | [**SloIncidentRequestDto**](SloIncidentRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SloIncidentListDto**](SloIncidentListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTopIncidents

> IncidentSummaryListDto GetTopIncidents(ctx).IncidentRequestDto(incidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	incidentRequestDto := *openapiclient.NewIncidentRequestDto() // IncidentRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.IncidentControllerAPI.GetTopIncidents(context.Background()).IncidentRequestDto(incidentRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IncidentControllerAPI.GetTopIncidents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTopIncidents`: IncidentSummaryListDto
	fmt.Fprintf(os.Stdout, "Response from `IncidentControllerAPI.GetTopIncidents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTopIncidentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentRequestDto** | [**IncidentRequestDto**](IncidentRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**IncidentSummaryListDto**](IncidentSummaryListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

