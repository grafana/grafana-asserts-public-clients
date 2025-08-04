# \DisabledAlertConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteDisabledAlertConfig**](DisabledAlertConfigControllerAPI.md#DeleteDisabledAlertConfig) | **Delete** /v1/config/disabled-alert/{name} | 
[**GetAllDisabledAlertConfigs**](DisabledAlertConfigControllerAPI.md#GetAllDisabledAlertConfigs) | **Get** /v1/config/disabled-alerts | 
[**GetDisabledHealthAlertConfigs**](DisabledAlertConfigControllerAPI.md#GetDisabledHealthAlertConfigs) | **Get** /v1/config/disabled-alerts/health | 
[**GetDisabledRequestAlertConfigs**](DisabledAlertConfigControllerAPI.md#GetDisabledRequestAlertConfigs) | **Get** /v1/config/disabled-alerts/request | 
[**GetDisabledResourceAlertConfigs**](DisabledAlertConfigControllerAPI.md#GetDisabledResourceAlertConfigs) | **Get** /v1/config/disabled-alerts/resource | 
[**PutDisabledAlertConfig**](DisabledAlertConfigControllerAPI.md#PutDisabledAlertConfig) | **Post** /v1/config/disabled-alert | 
[**PutDisabledAlertConfigs**](DisabledAlertConfigControllerAPI.md#PutDisabledAlertConfigs) | **Post** /v1/config/disabled-alerts | 



## DeleteDisabledAlertConfig

> DeleteDisabledAlertConfig(ctx, name).XScopeOrgID(xScopeOrgID).Execute()



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
	name := "name_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.DisabledAlertConfigControllerAPI.DeleteDisabledAlertConfig(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.DeleteDisabledAlertConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDisabledAlertConfigRequest struct via the builder pattern


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


## GetAllDisabledAlertConfigs

> DisabledAlertConfigsDto GetAllDisabledAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.DisabledAlertConfigControllerAPI.GetAllDisabledAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.GetAllDisabledAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllDisabledAlertConfigs`: DisabledAlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `DisabledAlertConfigControllerAPI.GetAllDisabledAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllDisabledAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**DisabledAlertConfigsDto**](DisabledAlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDisabledHealthAlertConfigs

> DisabledAlertConfigsDto GetDisabledHealthAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.DisabledAlertConfigControllerAPI.GetDisabledHealthAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.GetDisabledHealthAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDisabledHealthAlertConfigs`: DisabledAlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `DisabledAlertConfigControllerAPI.GetDisabledHealthAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDisabledHealthAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**DisabledAlertConfigsDto**](DisabledAlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDisabledRequestAlertConfigs

> DisabledAlertConfigsDto GetDisabledRequestAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.DisabledAlertConfigControllerAPI.GetDisabledRequestAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.GetDisabledRequestAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDisabledRequestAlertConfigs`: DisabledAlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `DisabledAlertConfigControllerAPI.GetDisabledRequestAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDisabledRequestAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**DisabledAlertConfigsDto**](DisabledAlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDisabledResourceAlertConfigs

> DisabledAlertConfigsDto GetDisabledResourceAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.DisabledAlertConfigControllerAPI.GetDisabledResourceAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.GetDisabledResourceAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDisabledResourceAlertConfigs`: DisabledAlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `DisabledAlertConfigControllerAPI.GetDisabledResourceAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDisabledResourceAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**DisabledAlertConfigsDto**](DisabledAlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutDisabledAlertConfig

> PutDisabledAlertConfig(ctx).DisabledAlertConfigDto(disabledAlertConfigDto).XScopeOrgID(xScopeOrgID).Execute()



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
	disabledAlertConfigDto := *openapiclient.NewDisabledAlertConfigDto() // DisabledAlertConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.DisabledAlertConfigControllerAPI.PutDisabledAlertConfig(context.Background()).DisabledAlertConfigDto(disabledAlertConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.PutDisabledAlertConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDisabledAlertConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disabledAlertConfigDto** | [**DisabledAlertConfigDto**](DisabledAlertConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutDisabledAlertConfigs

> PutDisabledAlertConfigs(ctx).DisabledAlertConfigsDto(disabledAlertConfigsDto).XScopeOrgID(xScopeOrgID).Execute()



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
	disabledAlertConfigsDto := *openapiclient.NewDisabledAlertConfigsDto() // DisabledAlertConfigsDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.DisabledAlertConfigControllerAPI.PutDisabledAlertConfigs(context.Background()).DisabledAlertConfigsDto(disabledAlertConfigsDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DisabledAlertConfigControllerAPI.PutDisabledAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDisabledAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **disabledAlertConfigsDto** | [**DisabledAlertConfigsDto**](DisabledAlertConfigsDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

