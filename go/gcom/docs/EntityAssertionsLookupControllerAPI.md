# \EntityAssertionsLookupControllerAPI

All URIs are relative to *http://localhost:8030*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Lookup**](EntityAssertionsLookupControllerAPI.md#Lookup) | **Post** /asserts/api-server/v1/assertions/entities | 



## Lookup

> EntityAssertionsLookupResponseDto Lookup(ctx).EntityAssertionsLookupRequestDto(entityAssertionsLookupRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	entityAssertionsLookupRequestDto := *openapiclient.NewEntityAssertionsLookupRequestDto() // EntityAssertionsLookupRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityAssertionsLookupControllerAPI.Lookup(context.Background()).EntityAssertionsLookupRequestDto(entityAssertionsLookupRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityAssertionsLookupControllerAPI.Lookup``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Lookup`: EntityAssertionsLookupResponseDto
	fmt.Fprintf(os.Stdout, "Response from `EntityAssertionsLookupControllerAPI.Lookup`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLookupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityAssertionsLookupRequestDto** | [**EntityAssertionsLookupRequestDto**](EntityAssertionsLookupRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityAssertionsLookupResponseDto**](EntityAssertionsLookupResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

