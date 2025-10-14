# \LlmRcaControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLlmRcaSummary**](LlmRcaControllerAPI.md#GetLlmRcaSummary) | **Post** /v1/search/assertions/llm-summary | 
[**GetLlmRcaSummary1**](LlmRcaControllerAPI.md#GetLlmRcaSummary1) | **Post** /v1/assertions/llm-summary | 



## GetLlmRcaSummary

> LlmRcaSummariesDto GetLlmRcaSummary(ctx).LlmRcaSummarySearchReqDto(llmRcaSummarySearchReqDto).XScopeOrgID(xScopeOrgID).Execute()



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
	llmRcaSummarySearchReqDto := *openapiclient.NewLlmRcaSummarySearchReqDto() // LlmRcaSummarySearchReqDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LlmRcaControllerAPI.GetLlmRcaSummary(context.Background()).LlmRcaSummarySearchReqDto(llmRcaSummarySearchReqDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LlmRcaControllerAPI.GetLlmRcaSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLlmRcaSummary`: LlmRcaSummariesDto
	fmt.Fprintf(os.Stdout, "Response from `LlmRcaControllerAPI.GetLlmRcaSummary`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLlmRcaSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **llmRcaSummarySearchReqDto** | [**LlmRcaSummarySearchReqDto**](LlmRcaSummarySearchReqDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**LlmRcaSummariesDto**](LlmRcaSummariesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLlmRcaSummary1

> LlmRcaSummariesDto GetLlmRcaSummary1(ctx).LlmRcaSummaryReqDto(llmRcaSummaryReqDto).XScopeOrgID(xScopeOrgID).Execute()



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
	llmRcaSummaryReqDto := *openapiclient.NewLlmRcaSummaryReqDto([]openapiclient.EntityKeyDto{*openapiclient.NewEntityKeyDto()}) // LlmRcaSummaryReqDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.LlmRcaControllerAPI.GetLlmRcaSummary1(context.Background()).LlmRcaSummaryReqDto(llmRcaSummaryReqDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `LlmRcaControllerAPI.GetLlmRcaSummary1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetLlmRcaSummary1`: LlmRcaSummariesDto
	fmt.Fprintf(os.Stdout, "Response from `LlmRcaControllerAPI.GetLlmRcaSummary1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLlmRcaSummary1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **llmRcaSummaryReqDto** | [**LlmRcaSummaryReqDto**](LlmRcaSummaryReqDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**LlmRcaSummariesDto**](LlmRcaSummariesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

