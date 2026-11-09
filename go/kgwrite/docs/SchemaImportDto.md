# SchemaImportDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**Version** | **string** |  | 
**Alias** | Pointer to **string** |  | [optional] 

## Methods

### NewSchemaImportDto

`func NewSchemaImportDto(domain string, version string, ) *SchemaImportDto`

NewSchemaImportDto instantiates a new SchemaImportDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaImportDtoWithDefaults

`func NewSchemaImportDtoWithDefaults() *SchemaImportDto`

NewSchemaImportDtoWithDefaults instantiates a new SchemaImportDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *SchemaImportDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *SchemaImportDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *SchemaImportDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetVersion

`func (o *SchemaImportDto) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *SchemaImportDto) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *SchemaImportDto) SetVersion(v string)`

SetVersion sets Version field to given value.


### GetAlias

`func (o *SchemaImportDto) GetAlias() string`

GetAlias returns the Alias field if non-nil, zero value otherwise.

### GetAliasOk

`func (o *SchemaImportDto) GetAliasOk() (*string, bool)`

GetAliasOk returns a tuple with the Alias field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlias

`func (o *SchemaImportDto) SetAlias(v string)`

SetAlias sets Alias field to given value.

### HasAlias

`func (o *SchemaImportDto) HasAlias() bool`

HasAlias returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


