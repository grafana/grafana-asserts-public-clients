# \CypherSearchControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Search1**](CypherSearchControllerAPI.md#Search1) | **Post** /v1/search/cypher | 



## Search1

> CypherSearchResponseDto Search1(ctx).CypherSearchRequestDto(cypherSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	cypherSearchRequestDto := *openapiclient.NewCypherSearchRequestDto("CypherQuery_example") // CypherSearchRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CypherSearchControllerAPI.Search1(context.Background()).CypherSearchRequestDto(cypherSearchRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CypherSearchControllerAPI.Search1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Search1`: CypherSearchResponseDto
	fmt.Fprintf(os.Stdout, "Response from `CypherSearchControllerAPI.Search1`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearch1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cypherSearchRequestDto** | [**CypherSearchRequestDto**](CypherSearchRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**CypherSearchResponseDto**](CypherSearchResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

