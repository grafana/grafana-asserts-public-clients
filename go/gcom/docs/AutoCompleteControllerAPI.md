# \AutoCompleteControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AutoComplete**](AutoCompleteControllerAPI.md#AutoComplete) | **Get** /v1/search/autocomplete/{index} | 



## AutoComplete

> AutoCompleteResponseDto AutoComplete(ctx, index).Q(q).Fuzzy(fuzzy).Max(max).XScopeOrgID(xScopeOrgID).Execute()



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
	index := "index_example" // string | 
	q := "q_example" // string | 
	fuzzy := true // bool |  (optional)
	max := int32(56) // int32 |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AutoCompleteControllerAPI.AutoComplete(context.Background(), index).Q(q).Fuzzy(fuzzy).Max(max).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AutoCompleteControllerAPI.AutoComplete``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AutoComplete`: AutoCompleteResponseDto
	fmt.Fprintf(os.Stdout, "Response from `AutoCompleteControllerAPI.AutoComplete`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**index** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAutoCompleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **q** | **string** |  | 
 **fuzzy** | **bool** |  | 
 **max** | **int32** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AutoCompleteResponseDto**](AutoCompleteResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

