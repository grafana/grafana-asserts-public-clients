# \KubernetesEventsAPI

All URIs are relative to *http://localhost:8030/asserts/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAllEvents**](KubernetesEventsAPI.md#GetAllEvents) | **Get** /v1/events | Get all Kubernetes events
[**GetEntityEvents**](KubernetesEventsAPI.md#GetEntityEvents) | **Get** /v1/entity/events | Get Kubernetes events for an entity



## GetAllEvents

> []InfraEventDto GetAllEvents(ctx).Start(start).End(end).Limit(limit).XScopeOrgID(xScopeOrgID).Execute()

Get all Kubernetes events



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
	start := "start_example" // string | Start time (milliseconds since epoch) (default to "")
	end := "end_example" // string | End time (milliseconds since epoch) (default to "")
	limit := "limit_example" // string | Maximum number of events to return (optional) (default to "")
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KubernetesEventsAPI.GetAllEvents(context.Background()).Start(start).End(end).Limit(limit).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KubernetesEventsAPI.GetAllEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAllEvents`: []InfraEventDto
	fmt.Fprintf(os.Stdout, "Response from `KubernetesEventsAPI.GetAllEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **string** | Start time (milliseconds since epoch) | [default to &quot;&quot;]
 **end** | **string** | End time (milliseconds since epoch) | [default to &quot;&quot;]
 **limit** | **string** | Maximum number of events to return | [default to &quot;&quot;]
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**[]InfraEventDto**](InfraEventDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEntityEvents

> EntityEventsDto GetEntityEvents(ctx).EntityType(entityType).EntityName(entityName).Start(start).End(end).Namespace(namespace).Env(env).Site(site).Limit(limit).XScopeOrgID(xScopeOrgID).Execute()

Get Kubernetes events for an entity



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
	entityType := "entityType_example" // string | Entity type (e.g., Service, Pod) (default to "")
	entityName := "entityName_example" // string | Entity name (default to "")
	start := "start_example" // string | Start time (milliseconds since epoch) (default to "")
	end := "end_example" // string | End time (milliseconds since epoch) (default to "")
	namespace := "namespace_example" // string | Namespace (optional) (default to "")
	env := "env_example" // string | Environment/cluster (optional) (default to "")
	site := "site_example" // string | Site (optional) (default to "")
	limit := "limit_example" // string | Maximum number of events to return (optional) (default to "")
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KubernetesEventsAPI.GetEntityEvents(context.Background()).EntityType(entityType).EntityName(entityName).Start(start).End(end).Namespace(namespace).Env(env).Site(site).Limit(limit).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KubernetesEventsAPI.GetEntityEvents``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntityEvents`: EntityEventsDto
	fmt.Fprintf(os.Stdout, "Response from `KubernetesEventsAPI.GetEntityEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEntityEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityType** | **string** | Entity type (e.g., Service, Pod) | [default to &quot;&quot;]
 **entityName** | **string** | Entity name | [default to &quot;&quot;]
 **start** | **string** | Start time (milliseconds since epoch) | [default to &quot;&quot;]
 **end** | **string** | End time (milliseconds since epoch) | [default to &quot;&quot;]
 **namespace** | **string** | Namespace | [default to &quot;&quot;]
 **env** | **string** | Environment/cluster | [default to &quot;&quot;]
 **site** | **string** | Site | [default to &quot;&quot;]
 **limit** | **string** | Maximum number of events to return | [default to &quot;&quot;]
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityEventsDto**](EntityEventsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

