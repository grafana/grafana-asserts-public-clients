# \AlertConfigurationAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAlertConfig**](AlertConfigurationAPI.md#DeleteAlertConfig) | **Delete** /v1/config/alert/{name} | Delete an alert configuration by name
[**GetAllAlertConfigs**](AlertConfigurationAPI.md#GetAllAlertConfigs) | **Get** /v1/config/alerts | Get all alert configurations
[**GetFailureRuleGroups**](AlertConfigurationAPI.md#GetFailureRuleGroups) | **Get** /v1/config/failure-rules | Get Prometheus failure rule groups
[**GetHealthAlertConfigs**](AlertConfigurationAPI.md#GetHealthAlertConfigs) | **Get** /v1/config/alerts/health | Get health-based alert configurations
[**GetRequestAlertConfigs**](AlertConfigurationAPI.md#GetRequestAlertConfigs) | **Get** /v1/config/alerts/request | Get request-based alert configurations
[**GetResourceAlertConfigs**](AlertConfigurationAPI.md#GetResourceAlertConfigs) | **Get** /v1/config/alerts/resource | Get resource-based alert configurations
[**GetSloAlertConfigs**](AlertConfigurationAPI.md#GetSloAlertConfigs) | **Get** /v1/config/alerts/slo | Get SLO-based alert configurations
[**PutAlertConfig**](AlertConfigurationAPI.md#PutAlertConfig) | **Post** /v1/config/alert | Create or update a single alert configuration
[**PutAlertConfigs**](AlertConfigurationAPI.md#PutAlertConfigs) | **Post** /v1/config/alerts | Create or update multiple alert configurations



## DeleteAlertConfig

> DeleteAlertConfig(ctx, name).XScopeOrgID(xScopeOrgID).Execute()

Delete an alert configuration by name



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
	name := "name_example" // string | The name of the alert configuration to delete
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AlertConfigurationAPI.DeleteAlertConfig(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.DeleteAlertConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The name of the alert configuration to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAlertConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllAlertConfigs

> AlertConfigsDto GetAllAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get all alert configurations



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
	resp, r, err := apiClient.AlertConfigurationAPI.GetAllAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetAllAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllAlertConfigs`: AlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetAllAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AlertConfigsDto**](AlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFailureRuleGroups

> PrometheusRuleGroupDto GetFailureRuleGroups(ctx).CustomFailureRules(customFailureRules).AllFailureRuleGroups(allFailureRuleGroups).XScopeOrgID(xScopeOrgID).Execute()

Get Prometheus failure rule groups



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
	customFailureRules := true // bool | Set to true to fetch only custom failure rules (optional)
	allFailureRuleGroups := true // bool | Set to true to fetch all failure rule groups (custom and default) (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AlertConfigurationAPI.GetFailureRuleGroups(context.Background()).CustomFailureRules(customFailureRules).AllFailureRuleGroups(allFailureRuleGroups).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetFailureRuleGroups``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetFailureRuleGroups`: PrometheusRuleGroupDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetFailureRuleGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFailureRuleGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customFailureRules** | **bool** | Set to true to fetch only custom failure rules | 
 **allFailureRuleGroups** | **bool** | Set to true to fetch all failure rule groups (custom and default) | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**PrometheusRuleGroupDto**](PrometheusRuleGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHealthAlertConfigs

> AlertConfigsDto GetHealthAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get health-based alert configurations



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
	resp, r, err := apiClient.AlertConfigurationAPI.GetHealthAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetHealthAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetHealthAlertConfigs`: AlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetHealthAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHealthAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AlertConfigsDto**](AlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRequestAlertConfigs

> AlertConfigsDto GetRequestAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get request-based alert configurations



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
	resp, r, err := apiClient.AlertConfigurationAPI.GetRequestAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetRequestAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRequestAlertConfigs`: AlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetRequestAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRequestAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AlertConfigsDto**](AlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetResourceAlertConfigs

> AlertConfigsDto GetResourceAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get resource-based alert configurations



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
	resp, r, err := apiClient.AlertConfigurationAPI.GetResourceAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetResourceAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetResourceAlertConfigs`: AlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetResourceAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetResourceAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AlertConfigsDto**](AlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSloAlertConfigs

> AlertConfigsDto GetSloAlertConfigs(ctx).XScopeOrgID(xScopeOrgID).Execute()

Get SLO-based alert configurations



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
	resp, r, err := apiClient.AlertConfigurationAPI.GetSloAlertConfigs(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.GetSloAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSloAlertConfigs`: AlertConfigsDto
	fmt.Fprintf(os.Stdout, "Response from `AlertConfigurationAPI.GetSloAlertConfigs`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSloAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**AlertConfigsDto**](AlertConfigsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAlertConfig

> PutAlertConfig(ctx).AlertConfigDto(alertConfigDto).XScopeOrgID(xScopeOrgID).Execute()

Create or update a single alert configuration



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
	alertConfigDto := *openapiclient.NewAlertConfigDto() // AlertConfigDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AlertConfigurationAPI.PutAlertConfig(context.Background()).AlertConfigDto(alertConfigDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.PutAlertConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAlertConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertConfigDto** | [**AlertConfigDto**](AlertConfigDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAlertConfigs

> PutAlertConfigs(ctx).AlertConfigsDto(alertConfigsDto).XScopeOrgID(xScopeOrgID).Execute()

Create or update multiple alert configurations



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
	alertConfigsDto := *openapiclient.NewAlertConfigsDto() // AlertConfigsDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.AlertConfigurationAPI.PutAlertConfigs(context.Background()).AlertConfigsDto(alertConfigsDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertConfigurationAPI.PutAlertConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAlertConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertConfigsDto** | [**AlertConfigsDto**](AlertConfigsDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

