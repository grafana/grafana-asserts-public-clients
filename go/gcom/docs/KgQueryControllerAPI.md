# \KgQueryControllerAPI

All URIs are relative to *http://localhost:8030*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Query1**](KgQueryControllerAPI.md#Query1) | **Post** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/query | 



## Query1

> KgQueryResponseDto Query1(ctx, namespace).KgQueryRequestDto(kgQueryRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	namespace := "namespace_example" // string | 
	kgQueryRequestDto := *openapiclient.NewKgQueryRequestDto(*openapiclient.NewKgSelectDto()) // KgQueryRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KgQueryControllerAPI.Query1(context.Background(), namespace).KgQueryRequestDto(kgQueryRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KgQueryControllerAPI.Query1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Query1`: KgQueryResponseDto
	fmt.Fprintf(os.Stdout, "Response from `KgQueryControllerAPI.Query1`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiQuery1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **kgQueryRequestDto** | [**KgQueryRequestDto**](KgQueryRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**KgQueryResponseDto**](KgQueryResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

