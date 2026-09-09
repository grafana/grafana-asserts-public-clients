# \KgSizingConfigControllerAPI

All URIs are relative to *http://localhost:18031*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetKgSizing**](KgSizingConfigControllerAPI.md#GetKgSizing) | **Get** /asserts/api-server/v1/config/kg-sizing | 



## GetKgSizing

> KgSizingDto GetKgSizing(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.KgSizingConfigControllerAPI.GetKgSizing(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KgSizingConfigControllerAPI.GetKgSizing``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetKgSizing`: KgSizingDto
	fmt.Fprintf(os.Stdout, "Response from `KgSizingConfigControllerAPI.GetKgSizing`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetKgSizingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**KgSizingDto**](KgSizingDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

