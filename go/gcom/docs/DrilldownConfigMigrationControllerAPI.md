# \DrilldownConfigMigrationControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**MigrateConfigs**](DrilldownConfigMigrationControllerAPI.md#MigrateConfigs) | **Post** /v2/config/drilldown-migration | 



## MigrateConfigs

> MigrateConfigs(ctx).DrilldownConfigMigrationDto(drilldownConfigMigrationDto).XScopeOrgID(xScopeOrgID).Execute()



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
	drilldownConfigMigrationDto := *openapiclient.NewDrilldownConfigMigrationDto() // DrilldownConfigMigrationDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.DrilldownConfigMigrationControllerAPI.MigrateConfigs(context.Background()).DrilldownConfigMigrationDto(drilldownConfigMigrationDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DrilldownConfigMigrationControllerAPI.MigrateConfigs``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMigrateConfigsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **drilldownConfigMigrationDto** | [**DrilldownConfigMigrationDto**](DrilldownConfigMigrationDto.md) |  | 
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

