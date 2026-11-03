# KgSchemaDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | [**SchemaDomainDto**](SchemaDomainDto.md) |  | 
**Imports** | Pointer to [**[]SchemaImportDto**](SchemaImportDto.md) |  | [optional] 
**EntityTypes** | Pointer to [**[]SchemaEntityTypeDto**](SchemaEntityTypeDto.md) |  | [optional] 
**RelationshipTypes** | Pointer to [**[]SchemaRelationshipTypeDto**](SchemaRelationshipTypeDto.md) |  | [optional] 
**RelationshipTypeBindings** | Pointer to [**[]SchemaBindingDto**](SchemaBindingDto.md) |  | [optional] 

## Methods

### NewKgSchemaDto

`func NewKgSchemaDto(domain SchemaDomainDto, ) *KgSchemaDto`

NewKgSchemaDto instantiates a new KgSchemaDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgSchemaDtoWithDefaults

`func NewKgSchemaDtoWithDefaults() *KgSchemaDto`

NewKgSchemaDtoWithDefaults instantiates a new KgSchemaDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *KgSchemaDto) GetDomain() SchemaDomainDto`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *KgSchemaDto) GetDomainOk() (*SchemaDomainDto, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *KgSchemaDto) SetDomain(v SchemaDomainDto)`

SetDomain sets Domain field to given value.


### GetImports

`func (o *KgSchemaDto) GetImports() []SchemaImportDto`

GetImports returns the Imports field if non-nil, zero value otherwise.

### GetImportsOk

`func (o *KgSchemaDto) GetImportsOk() (*[]SchemaImportDto, bool)`

GetImportsOk returns a tuple with the Imports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImports

`func (o *KgSchemaDto) SetImports(v []SchemaImportDto)`

SetImports sets Imports field to given value.

### HasImports

`func (o *KgSchemaDto) HasImports() bool`

HasImports returns a boolean if a field has been set.

### GetEntityTypes

`func (o *KgSchemaDto) GetEntityTypes() []SchemaEntityTypeDto`

GetEntityTypes returns the EntityTypes field if non-nil, zero value otherwise.

### GetEntityTypesOk

`func (o *KgSchemaDto) GetEntityTypesOk() (*[]SchemaEntityTypeDto, bool)`

GetEntityTypesOk returns a tuple with the EntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityTypes

`func (o *KgSchemaDto) SetEntityTypes(v []SchemaEntityTypeDto)`

SetEntityTypes sets EntityTypes field to given value.

### HasEntityTypes

`func (o *KgSchemaDto) HasEntityTypes() bool`

HasEntityTypes returns a boolean if a field has been set.

### GetRelationshipTypes

`func (o *KgSchemaDto) GetRelationshipTypes() []SchemaRelationshipTypeDto`

GetRelationshipTypes returns the RelationshipTypes field if non-nil, zero value otherwise.

### GetRelationshipTypesOk

`func (o *KgSchemaDto) GetRelationshipTypesOk() (*[]SchemaRelationshipTypeDto, bool)`

GetRelationshipTypesOk returns a tuple with the RelationshipTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipTypes

`func (o *KgSchemaDto) SetRelationshipTypes(v []SchemaRelationshipTypeDto)`

SetRelationshipTypes sets RelationshipTypes field to given value.

### HasRelationshipTypes

`func (o *KgSchemaDto) HasRelationshipTypes() bool`

HasRelationshipTypes returns a boolean if a field has been set.

### GetRelationshipTypeBindings

`func (o *KgSchemaDto) GetRelationshipTypeBindings() []SchemaBindingDto`

GetRelationshipTypeBindings returns the RelationshipTypeBindings field if non-nil, zero value otherwise.

### GetRelationshipTypeBindingsOk

`func (o *KgSchemaDto) GetRelationshipTypeBindingsOk() (*[]SchemaBindingDto, bool)`

GetRelationshipTypeBindingsOk returns a tuple with the RelationshipTypeBindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipTypeBindings

`func (o *KgSchemaDto) SetRelationshipTypeBindings(v []SchemaBindingDto)`

SetRelationshipTypeBindings sets RelationshipTypeBindings field to given value.

### HasRelationshipTypeBindings

`func (o *KgSchemaDto) HasRelationshipTypeBindings() bool`

HasRelationshipTypeBindings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


