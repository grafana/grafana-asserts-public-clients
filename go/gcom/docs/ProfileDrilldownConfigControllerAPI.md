# \ProfileDrilldownConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteConfig1**](ProfileDrilldownConfigControllerAPI.md#DeleteConfig1) | **Delete** /v2/config/profile/{name} | Delete profile drilldown configuration
[**GetTenantProfileConfig**](ProfileDrilldownConfigControllerAPI.md#GetTenantProfileConfig) | **Get** /v2/config/profile | Get tenant profile configuration
[**UpsertProfileDrilldownConfig**](ProfileDrilldownConfigControllerAPI.md#UpsertProfileDrilldownConfig) | **Post** /v2/config/profile | Upsert profile drilldown configuration



## DeleteConfig1

> DeleteConfig1(ctx, name).XScopeOrgID(xScopeOrgID).Execute()

Delete profile drilldown configuration



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
	name := "name_example" // string | Name of the profile configuration to delete
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ProfileDrilldownConfigControllerAPI.DeleteConfig1(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfileDrilldownConfigControllerAPI.DeleteConfig1``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the profile configuration to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConfig1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTenantProfileConfig

> TenantProfileConfigResponseDto GetTenantProfileConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get tenant profile configuration



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
	resp, r, err := apiClient.ProfileDrilldownConfigControllerAPI.GetTenantProfileConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfileDrilldownConfigControllerAPI.GetTenantProfileConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantProfileConfig`: TenantProfileConfigResponseDto
	fmt.Fprintf(os.Stdout, "Response from `ProfileDrilldownConfigControllerAPI.GetTenantProfileConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantProfileConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**TenantProfileConfigResponseDto**](TenantProfileConfigResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpsertProfileDrilldownConfig

> UpsertProfileDrilldownConfig(ctx).ProfileDrilldownConfigDto(profileDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()

Upsert profile drilldown configuration



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
	profileDrilldownConfigDto := *openapiclient.NewProfileDrilldownConfigDto() // ProfileDrilldownConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ProfileDrilldownConfigControllerAPI.UpsertProfileDrilldownConfig(context.Background()).ProfileDrilldownConfigDto(profileDrilldownConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfileDrilldownConfigControllerAPI.UpsertProfileDrilldownConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpsertProfileDrilldownConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileDrilldownConfigDto** | [**ProfileDrilldownConfigDto**](ProfileDrilldownConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/yaml
- **Accept**: application/json, application/x-yml, application/yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

