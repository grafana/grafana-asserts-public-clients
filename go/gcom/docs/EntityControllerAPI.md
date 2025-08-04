# \EntityControllerAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetEntity**](EntityControllerAPI.md#GetEntity) | **Get** /v1/entity/info | 
[**LookupEntityFromAlertLabels**](EntityControllerAPI.md#LookupEntityFromAlertLabels) | **Get** /v1/entity | 



## GetEntity

> GraphEntity GetEntity(ctx).EntityType(entityType).EntityName(entityName).Env(env).Site(site).Namespace(namespace).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()



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
	entityType := "entityType_example" // string | 
	entityName := "entityName_example" // string | 
	env := "env_example" // string |  (optional)
	site := "site_example" // string |  (optional)
	namespace := "namespace_example" // string |  (optional)
	start := int64(789) // int64 |  (optional)
	end := int64(789) // int64 |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityControllerAPI.GetEntity(context.Background()).EntityType(entityType).EntityName(entityName).Env(env).Site(site).Namespace(namespace).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityControllerAPI.GetEntity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntity`: GraphEntity
	fmt.Fprintf(os.Stdout, "Response from `EntityControllerAPI.GetEntity`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **string** |  | 
 **entityName** | **string** |  | 
 **env** | **string** |  | 
 **site** | **string** |  | 
 **namespace** | **string** |  | 
 **start** | **int64** |  | 
 **end** | **int64** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**GraphEntity**](GraphEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LookupEntityFromAlertLabels

> GraphEntity LookupEntityFromAlertLabels(ctx).RequestParams(requestParams).Env(env).Site(site).Namespace(namespace).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()



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
	requestParams := map[string]string{"key": "Inner_example"} // map[string]string | 
	env := "env_example" // string |  (optional)
	site := "site_example" // string |  (optional)
	namespace := "namespace_example" // string |  (optional)
	start := int64(789) // int64 |  (optional)
	end := int64(789) // int64 |  (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.EntityControllerAPI.LookupEntityFromAlertLabels(context.Background()).RequestParams(requestParams).Env(env).Site(site).Namespace(namespace).Start(start).End(end).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `EntityControllerAPI.LookupEntityFromAlertLabels``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `LookupEntityFromAlertLabels`: GraphEntity
	fmt.Fprintf(os.Stdout, "Response from `EntityControllerAPI.LookupEntityFromAlertLabels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLookupEntityFromAlertLabelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestParams** | **map[string]string** |  | 
 **env** | **string** |  | 
 **site** | **string** |  | 
 **namespace** | **string** |  | 
 **start** | **int64** |  | 
 **end** | **int64** |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**GraphEntity**](GraphEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

