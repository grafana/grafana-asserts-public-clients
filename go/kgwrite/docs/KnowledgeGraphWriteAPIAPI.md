# \KnowledgeGraphWriteAPIAPI

All URIs are relative to *http://localhost:8030/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteEntity**](KnowledgeGraphWriteAPIAPI.md#DeleteEntity) | **Delete** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/entities/{type}/{name} | Delete a custom entity
[**DeleteRelationship**](KnowledgeGraphWriteAPIAPI.md#DeleteRelationship) | **Delete** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/relationships/{type} | Delete a custom relationship
[**UpsertEntity**](KnowledgeGraphWriteAPIAPI.md#UpsertEntity) | **Post** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/entities | Create or update a custom entity
[**UpsertRelationship**](KnowledgeGraphWriteAPIAPI.md#UpsertRelationship) | **Post** /apis/kg.grafana.com/v1alpha1/namespaces/{namespace}/relationships | Create or update a custom relationship



## DeleteEntity

> DeleteEntity(ctx, namespace, type_, name).Domain(domain).Scope(scope).XScopeOrgID(xScopeOrgID).Execute()

Delete a custom entity



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId> (default to "")
	type_ := "type__example" // string | Entity type (default to "")
	name := "name_example" // string | Entity name (default to "")
	domain := "domain_example" // string | 
	scope := map[string]string{"key": map[string]string{"key": "Inner_example"}} // map[string]string | Optional scope key/value pairs identifying the entity (scope[key]=value). (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.KnowledgeGraphWriteAPIAPI.DeleteEntity(context.Background(), namespace, type_, name).Domain(domain).Scope(scope).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphWriteAPIAPI.DeleteEntity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | [default to &quot;&quot;]
**type_** | **string** | Entity type | [default to &quot;&quot;]
**name** | **string** | Entity name | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEntityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **domain** | **string** |  | 
 **scope** | **map[string]map[string]string** | Optional scope key/value pairs identifying the entity (scope[key]&#x3D;value). | 
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


## DeleteRelationship

> DeleteRelationship(ctx, namespace, type_).FromDomain(fromDomain).FromType(fromType).FromName(fromName).ToDomain(toDomain).ToType(toType).ToName(toName).FromScope(fromScope).ToScope(toScope).XScopeOrgID(xScopeOrgID).Execute()

Delete a custom relationship



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId> (default to "")
	type_ := "type__example" // string | Relationship type (default to "")
	fromDomain := "fromDomain_example" // string | 
	fromType := "fromType_example" // string | 
	fromName := "fromName_example" // string | 
	toDomain := "toDomain_example" // string | 
	toType := "toType_example" // string | 
	toName := "toName_example" // string | 
	fromScope := map[string]string{"key": map[string]string{"key": "Inner_example"}} // map[string]string | Optional scope key/value pairs identifying the 'from' entity (from.scope[key]=value). (optional)
	toScope := map[string]string{"key": map[string]string{"key": "Inner_example"}} // map[string]string | Optional scope key/value pairs identifying the 'to' entity (to.scope[key]=value). (optional)
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.KnowledgeGraphWriteAPIAPI.DeleteRelationship(context.Background(), namespace, type_).FromDomain(fromDomain).FromType(fromType).FromName(fromName).ToDomain(toDomain).ToType(toType).ToName(toName).FromScope(fromScope).ToScope(toScope).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphWriteAPIAPI.DeleteRelationship``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | [default to &quot;&quot;]
**type_** | **string** | Relationship type | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRelationshipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **fromDomain** | **string** |  | 
 **fromType** | **string** |  | 
 **fromName** | **string** |  | 
 **toDomain** | **string** |  | 
 **toType** | **string** |  | 
 **toName** | **string** |  | 
 **fromScope** | **map[string]map[string]string** | Optional scope key/value pairs identifying the &#39;from&#39; entity (from.scope[key]&#x3D;value). | 
 **toScope** | **map[string]map[string]string** | Optional scope key/value pairs identifying the &#39;to&#39; entity (to.scope[key]&#x3D;value). | 
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


## UpsertEntity

> EntityWriteResponseDto UpsertEntity(ctx, namespace).EntityWriteRequestDto(entityWriteRequestDto).XScopeOrgID(xScopeOrgID).Execute()

Create or update a custom entity



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId>; must match the request tenant (default to "")
	entityWriteRequestDto := *openapiclient.NewEntityWriteRequestDto("Domain_example", "Type_example", "Name_example", int64(123)) // EntityWriteRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KnowledgeGraphWriteAPIAPI.UpsertEntity(context.Background(), namespace).EntityWriteRequestDto(entityWriteRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphWriteAPIAPI.UpsertEntity``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpsertEntity`: EntityWriteResponseDto
	fmt.Fprintf(os.Stdout, "Response from `KnowledgeGraphWriteAPIAPI.UpsertEntity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt;; must match the request tenant | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiUpsertEntityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **entityWriteRequestDto** | [**EntityWriteRequestDto**](EntityWriteRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**EntityWriteResponseDto**](EntityWriteResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpsertRelationship

> RelationshipWriteResponseDto UpsertRelationship(ctx, namespace).RelationshipWriteRequestDto(relationshipWriteRequestDto).XScopeOrgID(xScopeOrgID).Execute()

Create or update a custom relationship



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/kgwrite"
)

func main() {
	namespace := "namespace_example" // string | Tenant namespace, formatted as stacks-<stackId> (default to "")
	relationshipWriteRequestDto := *openapiclient.NewRelationshipWriteRequestDto("Domain_example", "Type_example", *openapiclient.NewEntityRefDto("Domain_example", "Type_example", "Name_example"), *openapiclient.NewEntityRefDto("Domain_example", "Type_example", "Name_example"), int64(123)) // RelationshipWriteRequestDto | 
	xScopeOrgID := "2944" // string | Grafana Tenant/Stack ID (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.KnowledgeGraphWriteAPIAPI.UpsertRelationship(context.Background(), namespace).RelationshipWriteRequestDto(relationshipWriteRequestDto).XScopeOrgID(xScopeOrgID).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `KnowledgeGraphWriteAPIAPI.UpsertRelationship``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpsertRelationship`: RelationshipWriteResponseDto
	fmt.Fprintf(os.Stdout, "Response from `KnowledgeGraphWriteAPIAPI.UpsertRelationship`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**namespace** | **string** | Tenant namespace, formatted as stacks-&lt;stackId&gt; | [default to &quot;&quot;]

### Other Parameters

Other parameters are passed through a pointer to a apiUpsertRelationshipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **relationshipWriteRequestDto** | [**RelationshipWriteRequestDto**](RelationshipWriteRequestDto.md) |  | 
 **xScopeOrgID** | **string** | Grafana Tenant/Stack ID | 

### Return type

[**RelationshipWriteResponseDto**](RelationshipWriteResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

