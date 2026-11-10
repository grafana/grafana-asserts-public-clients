# \CypherQueryControllerAPI

All URIs are relative to *http://localhost:8030*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Query**](CypherQueryControllerAPI.md#Query) | **Post** /asserts/api-server/v1/query/cypher | 



## Query

> CypherQueryResponseDto Query(ctx).XScopeOrgID(xScopeOrgID).CypherQueryRequestDto(cypherQueryRequestDto).Execute()



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
	cypherQueryRequestDto := *openapiclient.NewCypherQueryRequestDto("Query_example") // CypherQueryRequestDto |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CypherQueryControllerAPI.Query(context.Background()).XScopeOrgID(xScopeOrgID).CypherQueryRequestDto(cypherQueryRequestDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CypherQueryControllerAPI.Query``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Query`: CypherQueryResponseDto
	fmt.Fprintf(os.Stdout, "Response from `CypherQueryControllerAPI.Query`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiQueryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 
 **cypherQueryRequestDto** | [**CypherQueryRequestDto**](CypherQueryRequestDto.md) |  | 

### Return type

[**CypherQueryResponseDto**](CypherQueryResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

