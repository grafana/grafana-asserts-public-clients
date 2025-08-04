# \PromRulesConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AbortValidation**](PromRulesConfigControllerAPI.md#AbortValidation) | **Delete** /v1/config/prom-rules-validate/{id} | 
[**DeletePromRules**](PromRulesConfigControllerAPI.md#DeletePromRules) | **Delete** /v1/config/prom-rules/{name} | 
[**DeleteRule**](PromRulesConfigControllerAPI.md#DeleteRule) | **Post** /v1/config/prom-rules/{name}/delete | 
[**DisableRule**](PromRulesConfigControllerAPI.md#DisableRule) | **Post** /v1/config/prom-rules-disable/{name} | 
[**EnableRule**](PromRulesConfigControllerAPI.md#EnableRule) | **Post** /v1/config/prom-rules-enable/{name} | 
[**GetDisabledRules**](PromRulesConfigControllerAPI.md#GetDisabledRules) | **Get** /v1/config/prom-rules-disable | 
[**GetPromRules**](PromRulesConfigControllerAPI.md#GetPromRules) | **Get** /v1/config/prom-rules/{name} | 
[**GetValidation**](PromRulesConfigControllerAPI.md#GetValidation) | **Get** /v1/config/prom-rules-validate/{id} | 
[**GetVendorNames**](PromRulesConfigControllerAPI.md#GetVendorNames) | **Get** /v1/vendor-names | 
[**ListPromRules**](PromRulesConfigControllerAPI.md#ListPromRules) | **Get** /v1/config/prom-rules | 
[**PutPromRules**](PromRulesConfigControllerAPI.md#PutPromRules) | **Put** /v1/config/prom-rules | 
[**SubmitValidation**](PromRulesConfigControllerAPI.md#SubmitValidation) | **Post** /v1/config/prom-rules-validate | 
[**UpdateRule**](PromRulesConfigControllerAPI.md#UpdateRule) | **Post** /v1/config/prom-rules/{name} | 



## AbortValidation

> ConfigValidationResponseDto AbortValidation(ctx, id).XScopeOrgID(xScopeOrgID).Execute()



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
	id := "id_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PromRulesConfigControllerAPI.AbortValidation(context.Background(), id).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.AbortValidation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AbortValidation`: ConfigValidationResponseDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.AbortValidation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAbortValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ConfigValidationResponseDto**](ConfigValidationResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePromRules

> DeletePromRules(ctx, name).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.PromRulesConfigControllerAPI.DeletePromRules(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.DeletePromRules``: %v\n", err)
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

Other parameters are passed through a pointer to a apiDeletePromRulesRequest struct via the builder pattern


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


## DeleteRule

> DeleteRule(ctx, name).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()



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
	prometheusRuleDto := *openapiclient.NewPrometheusRuleDto() // PrometheusRuleDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.PromRulesConfigControllerAPI.DeleteRule(context.Background(), name).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.DeleteRule``: %v\n", err)
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

Other parameters are passed through a pointer to a apiDeleteRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **prometheusRuleDto** | [**PrometheusRuleDto**](PrometheusRuleDto.md) |  | 
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


## DisableRule

> DisableRule(ctx, name).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.PromRulesConfigControllerAPI.DisableRule(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.DisableRule``: %v\n", err)
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

Other parameters are passed through a pointer to a apiDisableRuleRequest struct via the builder pattern


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


## EnableRule

> EnableRule(ctx, name).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.PromRulesConfigControllerAPI.EnableRule(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.EnableRule``: %v\n", err)
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

Other parameters are passed through a pointer to a apiEnableRuleRequest struct via the builder pattern


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


## GetDisabledRules

> DisabledRulesDto GetDisabledRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PromRulesConfigControllerAPI.GetDisabledRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.GetDisabledRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetDisabledRules`: DisabledRulesDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.GetDisabledRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDisabledRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**DisabledRulesDto**](DisabledRulesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPromRules

> PrometheusRulesDto GetPromRules(ctx, name).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PromRulesConfigControllerAPI.GetPromRules(context.Background(), name).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.GetPromRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPromRules`: PrometheusRulesDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.GetPromRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPromRulesRequest struct via the builder pattern


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


## GetValidation

> ConfigValidationResponseDto GetValidation(ctx, id).XScopeOrgID(xScopeOrgID).Execute()



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
	id := "id_example" // string | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PromRulesConfigControllerAPI.GetValidation(context.Background(), id).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.GetValidation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetValidation`: ConfigValidationResponseDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.GetValidation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ConfigValidationResponseDto**](ConfigValidationResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetVendorNames

> VendorNamesDto GetVendorNames(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PromRulesConfigControllerAPI.GetVendorNames(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.GetVendorNames``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVendorNames`: VendorNamesDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.GetVendorNames`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetVendorNamesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**VendorNamesDto**](VendorNamesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ListPromRules

> RuleNamesDto ListPromRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PromRulesConfigControllerAPI.ListPromRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.ListPromRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListPromRules`: RuleNamesDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.ListPromRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPromRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**RuleNamesDto**](RuleNamesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPromRules

> PutPromRules(ctx).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.PromRulesConfigControllerAPI.PutPromRules(context.Background()).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.PutPromRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutPromRulesRequest struct via the builder pattern


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


## SubmitValidation

> ConfigValidationResponseDto SubmitValidation(ctx).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.PromRulesConfigControllerAPI.SubmitValidation(context.Background()).PrometheusRulesDto(prometheusRulesDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.SubmitValidation``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitValidation`: ConfigValidationResponseDto
	fmt.Fprintf(os.Stdout, "Response from `PromRulesConfigControllerAPI.SubmitValidation`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSubmitValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prometheusRulesDto** | [**PrometheusRulesDto**](PrometheusRulesDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**ConfigValidationResponseDto**](ConfigValidationResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateRule

> UpdateRule(ctx, name).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()



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
	prometheusRuleDto := *openapiclient.NewPrometheusRuleDto() // PrometheusRuleDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.PromRulesConfigControllerAPI.UpdateRule(context.Background(), name).PrometheusRuleDto(prometheusRuleDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PromRulesConfigControllerAPI.UpdateRule``: %v\n", err)
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

Other parameters are passed through a pointer to a apiUpdateRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **prometheusRuleDto** | [**PrometheusRuleDto**](PrometheusRuleDto.md) |  | 
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

