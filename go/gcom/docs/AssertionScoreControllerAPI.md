# \AssertionScoreControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAssertionScores**](AssertionScoreControllerAPI.md#GetAssertionScores) | **Post** /v1/assertion_scores | 
[**GetAssertionScoresFromSearch**](AssertionScoreControllerAPI.md#GetAssertionScoresFromSearch) | **Post** /v1/assertion_scores/search | 
[**GetTopNAssertingEntities**](AssertionScoreControllerAPI.md#GetTopNAssertingEntities) | **Post** /v1/assertion_scores/top_entities | 



## GetAssertionScores

> AssertionScoresDto GetAssertionScores(ctx).AssertionScoreRequestDto(assertionScoreRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionScoreRequestDto := *openapiclient.NewAssertionScoreRequestDto() // AssertionScoreRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AssertionScoreControllerAPI.GetAssertionScores(context.Background()).AssertionScoreRequestDto(assertionScoreRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AssertionScoreControllerAPI.GetAssertionScores``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertionScores`: AssertionScoresDto
	fmt.Fprintf(os.Stdout, "Response from `AssertionScoreControllerAPI.GetAssertionScores`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionScoresRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionScoreRequestDto** | [**AssertionScoreRequestDto**](AssertionScoreRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AssertionScoresDto**](AssertionScoresDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssertionScoresFromSearch

> AssertionScoresDto GetAssertionScoresFromSearch(ctx).AssertionSearchRequestDto(assertionSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionSearchRequestDto := *openapiclient.NewAssertionSearchRequestDto() // AssertionSearchRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AssertionScoreControllerAPI.GetAssertionScoresFromSearch(context.Background()).AssertionSearchRequestDto(assertionSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AssertionScoreControllerAPI.GetAssertionScoresFromSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertionScoresFromSearch`: AssertionScoresDto
	fmt.Fprintf(os.Stdout, "Response from `AssertionScoreControllerAPI.GetAssertionScoresFromSearch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionScoresFromSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionSearchRequestDto** | [**AssertionSearchRequestDto**](AssertionSearchRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AssertionScoresDto**](AssertionScoresDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTopNAssertingEntities

> []EntityKeyDto GetTopNAssertingEntities(ctx).AssertionScoreRequestDto(assertionScoreRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionScoreRequestDto := *openapiclient.NewAssertionScoreRequestDto() // AssertionScoreRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AssertionScoreControllerAPI.GetTopNAssertingEntities(context.Background()).AssertionScoreRequestDto(assertionScoreRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AssertionScoreControllerAPI.GetTopNAssertingEntities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTopNAssertingEntities`: []EntityKeyDto
	fmt.Fprintf(os.Stdout, "Response from `AssertionScoreControllerAPI.GetTopNAssertingEntities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTopNAssertingEntitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionScoreRequestDto** | [**AssertionScoreRequestDto**](AssertionScoreRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**[]EntityKeyDto**](EntityKeyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

