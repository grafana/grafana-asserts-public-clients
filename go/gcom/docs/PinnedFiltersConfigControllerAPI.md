# \PinnedFiltersConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetPinnedFiltersConfig**](PinnedFiltersConfigControllerAPI.md#GetPinnedFiltersConfig) | **Get** /v1/config/display/pinned-filters | 
[**PutPinnedFiltersConfig**](PinnedFiltersConfigControllerAPI.md#PutPinnedFiltersConfig) | **Post** /v1/config/display/pinned-filters | 



## GetPinnedFiltersConfig

> PinnedFiltersConfig GetPinnedFiltersConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PinnedFiltersConfigControllerAPI.GetPinnedFiltersConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PinnedFiltersConfigControllerAPI.GetPinnedFiltersConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPinnedFiltersConfig`: PinnedFiltersConfig
	fmt.Fprintf(os.Stdout, "Response from `PinnedFiltersConfigControllerAPI.GetPinnedFiltersConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPinnedFiltersConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**PinnedFiltersConfig**](PinnedFiltersConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPinnedFiltersConfig

> PutPinnedFiltersConfig(ctx).XScopeOrgID(xScopeOrgID).PinnedFiltersConfig(pinnedFiltersConfig).Execute()



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
	pinnedFiltersConfig := *openapiclient.NewPinnedFiltersConfig() // PinnedFiltersConfig |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.PinnedFiltersConfigControllerAPI.PutPinnedFiltersConfig(context.Background()).XScopeOrgID(xScopeOrgID).PinnedFiltersConfig(pinnedFiltersConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PinnedFiltersConfigControllerAPI.PutPinnedFiltersConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPinnedFiltersConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 
 **pinnedFiltersConfig** | [**PinnedFiltersConfig**](PinnedFiltersConfig.md) |  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

