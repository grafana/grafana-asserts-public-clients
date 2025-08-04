# \EntityAssertionsControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**EntityAssertionsDetails**](EntityAssertionsControllerAPI.md#EntityAssertionsDetails) | **Post** /v1/assertions/entity-metric | 
[**GetAssertionAffectedEntities**](EntityAssertionsControllerAPI.md#GetAssertionAffectedEntities) | **Post** /v1/assertion/affected-entities | 
[**GetAssertionEntityNames**](EntityAssertionsControllerAPI.md#GetAssertionEntityNames) | **Post** /v1/assertion/affected-entity-names | 
[**GetAssertions**](EntityAssertionsControllerAPI.md#GetAssertions) | **Post** /v1/assertions | 
[**GetAssertionsSummary**](EntityAssertionsControllerAPI.md#GetAssertionsSummary) | **Post** /v1/assertions/summary | 
[**GetEntityAssertionsGraph**](EntityAssertionsControllerAPI.md#GetEntityAssertionsGraph) | **Post** /v1/assertions/graph | 
[**SearchAssertions**](EntityAssertionsControllerAPI.md#SearchAssertions) | **Post** /v1/search/assertions | 
[**SearchAssertionsSummary**](EntityAssertionsControllerAPI.md#SearchAssertionsSummary) | **Post** /v1/search/assertions/summary | 



## EntityAssertionsDetails

> EntityAssertionDetailsDto EntityAssertionsDetails(ctx).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityAssertionMetricRequestDto := *openapiclient.NewEntityAssertionMetricRequestDto() // EntityAssertionMetricRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.EntityAssertionsDetails(context.Background()).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.EntityAssertionsDetails``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EntityAssertionsDetails`: EntityAssertionDetailsDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.EntityAssertionsDetails`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEntityAssertionsDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityAssertionMetricRequestDto** | [**EntityAssertionMetricRequestDto**](EntityAssertionMetricRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityAssertionDetailsDto**](EntityAssertionDetailsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssertionAffectedEntities

> AffectedEntityDetailsDto GetAssertionAffectedEntities(ctx).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityAssertionMetricRequestDto := *openapiclient.NewEntityAssertionMetricRequestDto() // EntityAssertionMetricRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.GetAssertionAffectedEntities(context.Background()).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.GetAssertionAffectedEntities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertionAffectedEntities`: AffectedEntityDetailsDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.GetAssertionAffectedEntities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionAffectedEntitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityAssertionMetricRequestDto** | [**EntityAssertionMetricRequestDto**](EntityAssertionMetricRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AffectedEntityDetailsDto**](AffectedEntityDetailsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssertionEntityNames

> AffectedEntityNamesDto GetAssertionEntityNames(ctx).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityAssertionMetricRequestDto := *openapiclient.NewEntityAssertionMetricRequestDto() // EntityAssertionMetricRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.GetAssertionEntityNames(context.Background()).EntityAssertionMetricRequestDto(entityAssertionMetricRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.GetAssertionEntityNames``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertionEntityNames`: AffectedEntityNamesDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.GetAssertionEntityNames`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionEntityNamesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityAssertionMetricRequestDto** | [**EntityAssertionMetricRequestDto**](EntityAssertionMetricRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AffectedEntityNamesDto**](AffectedEntityNamesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssertions

> map[string]interface{} GetAssertions(ctx).AssertionsRequestDto(assertionsRequestDto).WithFilters(withFilters).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionsRequestDto := *openapiclient.NewAssertionsRequestDto() // AssertionsRequestDto | 
	withFilters := true // bool |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.GetAssertions(context.Background()).AssertionsRequestDto(assertionsRequestDto).WithFilters(withFilters).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.GetAssertions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertions`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.GetAssertions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionsRequestDto** | [**AssertionsRequestDto**](AssertionsRequestDto.md) |  | 
 **withFilters** | **bool** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

**map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAssertionsSummary

> EntityAssertionSummariesDto GetAssertionsSummary(ctx).AssertionsRequestDto(assertionsRequestDto).WithRCA(withRCA).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionsRequestDto := *openapiclient.NewAssertionsRequestDto() // AssertionsRequestDto | 
	withRCA := true // bool |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.GetAssertionsSummary(context.Background()).AssertionsRequestDto(assertionsRequestDto).WithRCA(withRCA).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.GetAssertionsSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAssertionsSummary`: EntityAssertionSummariesDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.GetAssertionsSummary`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAssertionsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionsRequestDto** | [**AssertionsRequestDto**](AssertionsRequestDto.md) |  | 
 **withRCA** | **bool** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityAssertionSummariesDto**](EntityAssertionSummariesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEntityAssertionsGraph

> EntityAssertionsGraphDto GetEntityAssertionsGraph(ctx).AssertionsRequestDto(assertionsRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	assertionsRequestDto := *openapiclient.NewAssertionsRequestDto() // AssertionsRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.GetEntityAssertionsGraph(context.Background()).AssertionsRequestDto(assertionsRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.GetEntityAssertionsGraph``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntityAssertionsGraph`: EntityAssertionsGraphDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.GetEntityAssertionsGraph`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityAssertionsGraphRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionsRequestDto** | [**AssertionsRequestDto**](AssertionsRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityAssertionsGraphDto**](EntityAssertionsGraphDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchAssertions

> map[string]interface{} SearchAssertions(ctx).AssertionSearchRequestDto(assertionSearchRequestDto).WithFilters(withFilters).XScopeOrgID(xScopeOrgID).Execute()



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
	withFilters := true // bool |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.SearchAssertions(context.Background()).AssertionSearchRequestDto(assertionSearchRequestDto).WithFilters(withFilters).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.SearchAssertions``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchAssertions`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.SearchAssertions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAssertionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionSearchRequestDto** | [**AssertionSearchRequestDto**](AssertionSearchRequestDto.md) |  | 
 **withFilters** | **bool** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

**map[string]interface{}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SearchAssertionsSummary

> EntityAssertionSummariesDto SearchAssertionsSummary(ctx).AssertionSearchRequestDto(assertionSearchRequestDto).WithRCA(withRCA).XScopeOrgID(xScopeOrgID).Execute()



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
	withRCA := true // bool |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsControllerAPI.SearchAssertionsSummary(context.Background()).AssertionSearchRequestDto(assertionSearchRequestDto).WithRCA(withRCA).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsControllerAPI.SearchAssertionsSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchAssertionsSummary`: EntityAssertionSummariesDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsControllerAPI.SearchAssertionsSummary`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchAssertionsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionSearchRequestDto** | [**AssertionSearchRequestDto**](AssertionSearchRequestDto.md) |  | 
 **withRCA** | **bool** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityAssertionSummariesDto**](EntityAssertionSummariesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

