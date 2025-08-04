# \RcaPatternControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**List**](RcaPatternControllerAPI.md#List) | **Post** /v1/patterns/list | 
[**Search1**](RcaPatternControllerAPI.md#Search1) | **Post** /v1/patterns/search | 



## List

> []string List(ctx).RcaPatternListRequestDto(rcaPatternListRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	rcaPatternListRequestDto := *openapiclient.NewRcaPatternListRequestDto() // RcaPatternListRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RcaPatternControllerAPI.List(context.Background()).RcaPatternListRequestDto(rcaPatternListRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RcaPatternControllerAPI.List``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `List`: []string
	fmt.Fprintf(os.Stdout, "Response from `RcaPatternControllerAPI.List`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rcaPatternListRequestDto** | [**RcaPatternListRequestDto**](RcaPatternListRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Search1

> RcaPatternSearchResponseDto Search1(ctx).RcaPatternSearchRequestDto(rcaPatternSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	rcaPatternSearchRequestDto := *openapiclient.NewRcaPatternSearchRequestDto() // RcaPatternSearchRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RcaPatternControllerAPI.Search1(context.Background()).RcaPatternSearchRequestDto(rcaPatternSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RcaPatternControllerAPI.Search1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Search1`: RcaPatternSearchResponseDto
	fmt.Fprintf(os.Stdout, "Response from `RcaPatternControllerAPI.Search1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearch1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rcaPatternSearchRequestDto** | [**RcaPatternSearchRequestDto**](RcaPatternSearchRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**RcaPatternSearchResponseDto**](RcaPatternSearchResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

