# \SystemKgSchemaAPIAPI

All URIs are relative to *http://localhost:8030/api-server*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get**](SystemKgSchemaAPIAPI.md#Get) | **Get** /apis/kg.grafana.com/v1alpha1/systemschemas/{domain}/{version} | Get a system schema bundle by domain and version
[**List**](SystemKgSchemaAPIAPI.md#List) | **Get** /apis/kg.grafana.com/v1alpha1/systemschemas | List all system schema references
[**Upsert**](SystemKgSchemaAPIAPI.md#Upsert) | **Post** /apis/kg.grafana.com/v1alpha1/systemschemas | Push a system schema bundle



## Get

> SystemKgSchemaBundleDto Get(ctx, domain, version).Execute()

Get a system schema bundle by domain and version



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/systemschema"
)

func main() {
	domain := "domain_example" // string | 
	version := "version_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SystemKgSchemaAPIAPI.Get(context.Background(), domain, version).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SystemKgSchemaAPIAPI.Get``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Get`: SystemKgSchemaBundleDto
	fmt.Fprintf(os.Stdout, "Response from `SystemKgSchemaAPIAPI.Get`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**domain** | **string** |  | 
**version** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**SystemKgSchemaBundleDto**](SystemKgSchemaBundleDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## List

> SystemKgSchemaRefListDto List(ctx).Execute()

List all system schema references



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/systemschema"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SystemKgSchemaAPIAPI.List(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SystemKgSchemaAPIAPI.List``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `List`: SystemKgSchemaRefListDto
	fmt.Fprintf(os.Stdout, "Response from `SystemKgSchemaAPIAPI.List`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListRequest struct via the builder pattern


### Return type

[**SystemKgSchemaRefListDto**](SystemKgSchemaRefListDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## Upsert

> SystemKgSchemaResponseDto Upsert(ctx).SystemKgSchemaBundleDto(systemKgSchemaBundleDto).Execute()

Push a system schema bundle



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/grafana/grafana-asserts-public-clients/go/systemschema"
)

func main() {
	systemKgSchemaBundleDto := *openapiclient.NewSystemKgSchemaBundleDto(*openapiclient.NewSchemaDomainDto("Name_example", "Version_example"), []openapiclient.SchemaEntityTypeDto{*openapiclient.NewSchemaEntityTypeDto("Name_example", "Description_example")}, []openapiclient.SchemaRelationshipTypeDto{*openapiclient.NewSchemaRelationshipTypeDto("Name_example", "Description_example", *openapiclient.NewSchemaEndpointDto([]string{"Types_example"}), *openapiclient.NewSchemaEndpointDto([]string{"Types_example"}))}) // SystemKgSchemaBundleDto | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SystemKgSchemaAPIAPI.Upsert(context.Background()).SystemKgSchemaBundleDto(systemKgSchemaBundleDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SystemKgSchemaAPIAPI.Upsert``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Upsert`: SystemKgSchemaResponseDto
	fmt.Fprintf(os.Stdout, "Response from `SystemKgSchemaAPIAPI.Upsert`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpsertRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **systemKgSchemaBundleDto** | [**SystemKgSchemaBundleDto**](SystemKgSchemaBundleDto.md) |  | 

### Return type

[**SystemKgSchemaResponseDto**](SystemKgSchemaResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/x-yml, application/x-yaml
- **Accept**: application/json, application/x-yml, application/x-yaml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

