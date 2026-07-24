# SystemKgSchemaBundleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | [**SchemaDomainDto**](SchemaDomainDto.md) |  | 
**Imports** | Pointer to [**[]SchemaImportDto**](SchemaImportDto.md) |  | [optional] 
**EntityTypes** | [**[]SchemaEntityTypeDto**](SchemaEntityTypeDto.md) |  | 
**RelationshipTypes** | [**[]SchemaRelationshipTypeDto**](SchemaRelationshipTypeDto.md) |  | 
**RelationshipTypeBindings** | Pointer to [**[]SchemaBindingDto**](SchemaBindingDto.md) |  | [optional] 

## Methods

### NewSystemKgSchemaBundleDto

`func NewSystemKgSchemaBundleDto(domain SchemaDomainDto, entityTypes []SchemaEntityTypeDto, relationshipTypes []SchemaRelationshipTypeDto, ) *SystemKgSchemaBundleDto`

NewSystemKgSchemaBundleDto instantiates a new SystemKgSchemaBundleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSystemKgSchemaBundleDtoWithDefaults

`func NewSystemKgSchemaBundleDtoWithDefaults() *SystemKgSchemaBundleDto`

NewSystemKgSchemaBundleDtoWithDefaults instantiates a new SystemKgSchemaBundleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *SystemKgSchemaBundleDto) GetDomain() SchemaDomainDto`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SystemKgSchemaBundleDto) GetDomainOk() (*SchemaDomainDto, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SystemKgSchemaBundleDto) SetDomain(v SchemaDomainDto)`

SetDomain sets Domain field to given value.


### GetImports

`func (o *SystemKgSchemaBundleDto) GetImports() []SchemaImportDto`

GetImports returns the Imports field if non-nil, zero value otherwise.

### GetImportsOk

`func (o *SystemKgSchemaBundleDto) GetImportsOk() (*[]SchemaImportDto, bool)`

GetImportsOk returns a tuple with the Imports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImports

`func (o *SystemKgSchemaBundleDto) SetImports(v []SchemaImportDto)`

SetImports sets Imports field to given value.

### HasImports

`func (o *SystemKgSchemaBundleDto) HasImports() bool`

HasImports returns a boolean if a field has been set.

### GetEntityTypes

`func (o *SystemKgSchemaBundleDto) GetEntityTypes() []SchemaEntityTypeDto`

GetEntityTypes returns the EntityTypes field if non-nil, zero value otherwise.

### GetEntityTypesOk

`func (o *SystemKgSchemaBundleDto) GetEntityTypesOk() (*[]SchemaEntityTypeDto, bool)`

GetEntityTypesOk returns a tuple with the EntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityTypes

`func (o *SystemKgSchemaBundleDto) SetEntityTypes(v []SchemaEntityTypeDto)`

SetEntityTypes sets EntityTypes field to given value.


### GetRelationshipTypes

`func (o *SystemKgSchemaBundleDto) GetRelationshipTypes() []SchemaRelationshipTypeDto`

GetRelationshipTypes returns the RelationshipTypes field if non-nil, zero value otherwise.

### GetRelationshipTypesOk

`func (o *SystemKgSchemaBundleDto) GetRelationshipTypesOk() (*[]SchemaRelationshipTypeDto, bool)`

GetRelationshipTypesOk returns a tuple with the RelationshipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipTypes

`func (o *SystemKgSchemaBundleDto) SetRelationshipTypes(v []SchemaRelationshipTypeDto)`

SetRelationshipTypes sets RelationshipTypes field to given value.


### GetRelationshipTypeBindings

`func (o *SystemKgSchemaBundleDto) GetRelationshipTypeBindings() []SchemaBindingDto`

GetRelationshipTypeBindings returns the RelationshipTypeBindings field if non-nil, zero value otherwise.

### GetRelationshipTypeBindingsOk

`func (o *SystemKgSchemaBundleDto) GetRelationshipTypeBindingsOk() (*[]SchemaBindingDto, bool)`

GetRelationshipTypeBindingsOk returns a tuple with the RelationshipTypeBindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipTypeBindings

`func (o *SystemKgSchemaBundleDto) SetRelationshipTypeBindings(v []SchemaBindingDto)`

SetRelationshipTypeBindings sets RelationshipTypeBindings field to given value.

### HasRelationshipTypeBindings

`func (o *SystemKgSchemaBundleDto) HasRelationshipTypeBindings() bool`

HasRelationshipTypeBindings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


