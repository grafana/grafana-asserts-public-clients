# \AssertionSearchControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Search2**](AssertionSearchControllerAPI.md#Search2) | **Post** /v1/assertions/search | 



## Search2

> []EntityKeyDto Search2(ctx).AssertionSearchRequestDto(assertionSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.AssertionSearchControllerAPI.Search2(context.Background()).AssertionSearchRequestDto(assertionSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AssertionSearchControllerAPI.Search2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Search2`: []EntityKeyDto
	fmt.Fprintf(os.Stdout, "Response from `AssertionSearchControllerAPI.Search2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearch2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assertionSearchRequestDto** | [**AssertionSearchRequestDto**](AssertionSearchRequestDto.md) |  | 
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

