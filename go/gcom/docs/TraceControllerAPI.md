# \TraceControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BuildTraceUrl**](TraceControllerAPI.md#BuildTraceUrl) | **Post** /v1/integration/trace | 



## BuildTraceUrl

> TraceIntegrationResponseDto BuildTraceUrl(ctx).TraceIntegrationRequestDto(traceIntegrationRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	traceIntegrationRequestDto := *openapiclient.NewTraceIntegrationRequestDto(int64(123), int64(123)) // TraceIntegrationRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.TraceControllerAPI.BuildTraceUrl(context.Background()).TraceIntegrationRequestDto(traceIntegrationRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TraceControllerAPI.BuildTraceUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BuildTraceUrl`: TraceIntegrationResponseDto
	fmt.Fprintf(os.Stdout, "Response from `TraceControllerAPI.BuildTraceUrl`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBuildTraceUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **traceIntegrationRequestDto** | [**TraceIntegrationRequestDto**](TraceIntegrationRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TraceIntegrationResponseDto**](TraceIntegrationResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

