# \MimirRelabelRulesConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteEpilogueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#DeleteEpilogueRelabelRules) | **Delete** /v2/config/relabel-rules/epilogue | 
[**DeletePrologueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#DeletePrologueRelabelRules) | **Delete** /v2/config/relabel-rules/prologue | 
[**GetEpilogueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#GetEpilogueRelabelRules) | **Get** /v2/config/relabel-rules/epilogue | 
[**GetGeneratedRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#GetGeneratedRelabelRules) | **Get** /v2/config/relabel-rules/generated | 
[**GetPrologueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#GetPrologueRelabelRules) | **Get** /v2/config/relabel-rules/prologue | 
[**PutMimirEpilogueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#PutMimirEpilogueRelabelRules) | **Put** /v2/config/relabel-rules/epilogue | 
[**PutMimirPrologueRelabelRules**](MimirRelabelRulesConfigControllerAPI.md#PutMimirPrologueRelabelRules) | **Put** /v2/config/relabel-rules/prologue | 



## DeleteEpilogueRelabelRules

> DeleteEpilogueRelabelRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.MimirRelabelRulesConfigControllerAPI.DeleteEpilogueRelabelRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.DeleteEpilogueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEpilogueRelabelRulesRequest struct via the builder pattern


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


## DeletePrologueRelabelRules

> DeletePrologueRelabelRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	r, err := apiClient.MimirRelabelRulesConfigControllerAPI.DeletePrologueRelabelRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.DeletePrologueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeletePrologueRelabelRulesRequest struct via the builder pattern


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


## GetEpilogueRelabelRules

> MimirRelabelRuleGroupDto GetEpilogueRelabelRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.MimirRelabelRulesConfigControllerAPI.GetEpilogueRelabelRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.GetEpilogueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEpilogueRelabelRules`: MimirRelabelRuleGroupDto
	fmt.Fprintf(os.Stdout, "Response from `MimirRelabelRulesConfigControllerAPI.GetEpilogueRelabelRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEpilogueRelabelRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**MimirRelabelRuleGroupDto**](MimirRelabelRuleGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGeneratedRelabelRules

> MimirRelabelRuleGroupDto GetGeneratedRelabelRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.MimirRelabelRulesConfigControllerAPI.GetGeneratedRelabelRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.GetGeneratedRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetGeneratedRelabelRules`: MimirRelabelRuleGroupDto
	fmt.Fprintf(os.Stdout, "Response from `MimirRelabelRulesConfigControllerAPI.GetGeneratedRelabelRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGeneratedRelabelRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**MimirRelabelRuleGroupDto**](MimirRelabelRuleGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPrologueRelabelRules

> MimirRelabelRuleGroupDto GetPrologueRelabelRules(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.MimirRelabelRulesConfigControllerAPI.GetPrologueRelabelRules(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.GetPrologueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPrologueRelabelRules`: MimirRelabelRuleGroupDto
	fmt.Fprintf(os.Stdout, "Response from `MimirRelabelRulesConfigControllerAPI.GetPrologueRelabelRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPrologueRelabelRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**MimirRelabelRuleGroupDto**](MimirRelabelRuleGroupDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutMimirEpilogueRelabelRules

> PutMimirEpilogueRelabelRules(ctx).MimirRelabelRuleGroupDto(mimirRelabelRuleGroupDto).XScopeOrgID(xScopeOrgID).Execute()



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
	mimirRelabelRuleGroupDto := *openapiclient.NewMimirRelabelRuleGroupDto() // MimirRelabelRuleGroupDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.MimirRelabelRulesConfigControllerAPI.PutMimirEpilogueRelabelRules(context.Background()).MimirRelabelRuleGroupDto(mimirRelabelRuleGroupDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.PutMimirEpilogueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutMimirEpilogueRelabelRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mimirRelabelRuleGroupDto** | [**MimirRelabelRuleGroupDto**](MimirRelabelRuleGroupDto.md) |  | 
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


## PutMimirPrologueRelabelRules

> PutMimirPrologueRelabelRules(ctx).MimirRelabelRuleGroupDto(mimirRelabelRuleGroupDto).XScopeOrgID(xScopeOrgID).Execute()



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
	mimirRelabelRuleGroupDto := *openapiclient.NewMimirRelabelRuleGroupDto() // MimirRelabelRuleGroupDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.MimirRelabelRulesConfigControllerAPI.PutMimirPrologueRelabelRules(context.Background()).MimirRelabelRuleGroupDto(mimirRelabelRuleGroupDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MimirRelabelRulesConfigControllerAPI.PutMimirPrologueRelabelRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutMimirPrologueRelabelRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mimirRelabelRuleGroupDto** | [**MimirRelabelRuleGroupDto**](MimirRelabelRuleGroupDto.md) |  | 
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

