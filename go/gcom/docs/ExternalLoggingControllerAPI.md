# \ExternalLoggingControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BuildExternalLoggingUrl**](ExternalLoggingControllerAPI.md#BuildExternalLoggingUrl) | **Post** /v1/logging/external | 



## BuildExternalLoggingUrl

> ExternalLoggingResponseDto BuildExternalLoggingUrl(ctx).ExternalLoggingRequestDto(externalLoggingRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	externalLoggingRequestDto := *openapiclient.NewExternalLoggingRequestDto(int64(123), int64(123)) // ExternalLoggingRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ExternalLoggingControllerAPI.BuildExternalLoggingUrl(context.Background()).ExternalLoggingRequestDto(externalLoggingRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ExternalLoggingControllerAPI.BuildExternalLoggingUrl``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `BuildExternalLoggingUrl`: ExternalLoggingResponseDto
	fmt.Fprintf(os.Stdout, "Response from `ExternalLoggingControllerAPI.BuildExternalLoggingUrl`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiBuildExternalLoggingUrlRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalLoggingRequestDto** | [**ExternalLoggingRequestDto**](ExternalLoggingRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ExternalLoggingResponseDto**](ExternalLoggingResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

