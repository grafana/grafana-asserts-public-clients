# \SampleSearchControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SearchSample**](SampleSearchControllerAPI.md#SearchSample) | **Post** /v1/search/sample | 



## SearchSample

> SampleSearchResponseDto SearchSample(ctx).SampleSearchRequestDto(sampleSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	sampleSearchRequestDto := *openapiclient.NewSampleSearchRequestDto([]openapiclient.EntityMatcherDto{*openapiclient.NewEntityMatcherDto("EntityType_example")}) // SampleSearchRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SampleSearchControllerAPI.SearchSample(context.Background()).SampleSearchRequestDto(sampleSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SampleSearchControllerAPI.SearchSample``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchSample`: SampleSearchResponseDto
	fmt.Fprintf(os.Stdout, "Response from `SampleSearchControllerAPI.SearchSample`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchSampleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sampleSearchRequestDto** | [**SampleSearchRequestDto**](SampleSearchRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**SampleSearchResponseDto**](SampleSearchResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

