# \AlertManagerVersionedConfigControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetVersionAlertManagerConfig**](AlertManagerVersionedConfigControllerAPI.md#GetVersionAlertManagerConfig) | **Get** /v1/prometheus/alertmanager | 



## GetVersionAlertManagerConfig

> VersionedAlertManagerPayload GetVersionAlertManagerConfig(ctx).XScopeOrgID(xScopeOrgID).Execute()



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
	resp, r, err := apiClient.AlertManagerVersionedConfigControllerAPI.GetVersionAlertManagerConfig(context.Background()).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AlertManagerVersionedConfigControllerAPI.GetVersionAlertManagerConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetVersionAlertManagerConfig`: VersionedAlertManagerPayload
	fmt.Fprintf(os.Stdout, "Response from `AlertManagerVersionedConfigControllerAPI.GetVersionAlertManagerConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetVersionAlertManagerConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**VersionedAlertManagerPayload**](VersionedAlertManagerPayload.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

