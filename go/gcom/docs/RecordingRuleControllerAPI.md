# \RecordingRuleControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GenerateRules**](RecordingRuleControllerAPI.md#GenerateRules) | **Post** /v1/config/prom-rules/generate | 



## GenerateRules

> RuleGenerationResponseDto GenerateRules(ctx).RuleGenerationRequestDto(ruleGenerationRequestDto).XScopeOrgID(xScopeOrgID).Execute()



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
	ruleGenerationRequestDto := *openapiclient.NewRuleGenerationRequestDto() // RuleGenerationRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.RecordingRuleControllerAPI.GenerateRules(context.Background()).RuleGenerationRequestDto(ruleGenerationRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RecordingRuleControllerAPI.GenerateRules``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GenerateRules`: RuleGenerationResponseDto
	fmt.Fprintf(os.Stdout, "Response from `RecordingRuleControllerAPI.GenerateRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenerateRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleGenerationRequestDto** | [**RuleGenerationRequestDto**](RuleGenerationRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**RuleGenerationResponseDto**](RuleGenerationResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-yml, application/x-yaml, application/json
- **Accept**: application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

