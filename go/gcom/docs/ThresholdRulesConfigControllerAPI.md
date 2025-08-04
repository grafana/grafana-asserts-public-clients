# \ThresholdRulesConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteCustomThresholdRule**](ThresholdRulesConfigControllerAPI.md#DeleteCustomThresholdRule) | **Post** /v1/config/threshold-rule/delete | 
[**GetCustomThresholdRules**](ThresholdRulesConfigControllerAPI.md#GetCustomThresholdRules) | **Get** /v1/config/threshold-rules | 
[**GetRequestThresholdRules**](ThresholdRulesConfigControllerAPI.md#GetRequestThresholdRules) | **Get** /v1/config/threshold-rules/request | 
[**GetResourceThresholdRules**](ThresholdRulesConfigControllerAPI.md#GetResourceThresholdRules) | **Get** /v1/config/threshold-rules/resource | 
[**UpdateCustomThresholdRule**](ThresholdRulesConfigControllerAPI.md#UpdateCustomThresholdRule) | **Post** /v1/config/threshold-rule | 
[**UpdateCustomThresholdRules**](ThresholdRulesConfigControllerAPI.md#UpdateCustomThresholdRules) | **Post** /v1/config/threshold-rules | 



## DeleteCustomThresholdRule

> DeleteCustomThresholdRule(ctx).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()



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
	prometheusRuleDto := *openapiclient.NewPrometheusRuleDto() // PrometheusRuleDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdRulesConfigControllerAPI.DeleteCustomThresholdRule(context.Background()).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.DeleteCustomThresholdRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomThresholdRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prometheusRuleDto** | [**PrometheusRuleDto**](PrometheusRuleDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

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


## GetCustomThresholdRules

> PrometheusRulesDto GetCustomThresholdRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.ThresholdRulesConfigControllerAPI.GetCustomThresholdRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.GetCustomThresholdRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCustomThresholdRules`: PrometheusRulesDto
	fmt.Fprintf(os.Stdout, "Response from `ThresholdRulesConfigControllerAPI.GetCustomThresholdRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomThresholdRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**PrometheusRulesDto**](PrometheusRulesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRequestThresholdRules

> ThresholdRulesDto GetRequestThresholdRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.ThresholdRulesConfigControllerAPI.GetRequestThresholdRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.GetRequestThresholdRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRequestThresholdRules`: ThresholdRulesDto
	fmt.Fprintf(os.Stdout, "Response from `ThresholdRulesConfigControllerAPI.GetRequestThresholdRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRequestThresholdRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ThresholdRulesDto**](ThresholdRulesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetResourceThresholdRules

> ThresholdRulesDto GetResourceThresholdRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.ThresholdRulesConfigControllerAPI.GetResourceThresholdRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.GetResourceThresholdRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetResourceThresholdRules`: ThresholdRulesDto
	fmt.Fprintf(os.Stdout, "Response from `ThresholdRulesConfigControllerAPI.GetResourceThresholdRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetResourceThresholdRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ThresholdRulesDto**](ThresholdRulesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCustomThresholdRule

> UpdateCustomThresholdRule(ctx).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()



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
	prometheusRuleDto := *openapiclient.NewPrometheusRuleDto() // PrometheusRuleDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdRulesConfigControllerAPI.UpdateCustomThresholdRule(context.Background()).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.UpdateCustomThresholdRule``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCustomThresholdRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prometheusRuleDto** | [**PrometheusRuleDto**](PrometheusRuleDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

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


## UpdateCustomThresholdRules

> UpdateCustomThresholdRules(ctx).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()



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
	prometheusRulesDto := *openapiclient.NewPrometheusRulesDto() // PrometheusRulesDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ThresholdRulesConfigControllerAPI.UpdateCustomThresholdRules(context.Background()).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ThresholdRulesConfigControllerAPI.UpdateCustomThresholdRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCustomThresholdRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prometheusRulesDto** | [**PrometheusRulesDto**](PrometheusRulesDto.md) |  | 
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

