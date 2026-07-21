# SchemaEntityTypeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | **string** |  | 
**RetentionDays** | Pointer to **int32** |  | [optional] 
**Aliases** | Pointer to **[]string** |  | [optional] 
**Label** | Pointer to **map[string]string** |  | [optional] 
**ScopeKeys** | Pointer to [**[]SchemaScopeKeyDto**](SchemaScopeKeyDto.md) |  | [optional] 
**Properties** | Pointer to [**[]SchemaPropertyDto**](SchemaPropertyDto.md) |  | [optional] 

## Methods

### NewSchemaEntityTypeDto

`func NewSchemaEntityTypeDto(name string, description string, ) *SchemaEntityTypeDto`

NewSchemaEntityTypeDto instantiates a new SchemaEntityTypeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaEntityTypeDtoWithDefaults

`func NewSchemaEntityTypeDtoWithDefaults() *SchemaEntityTypeDto`

NewSchemaEntityTypeDtoWithDefaults instantiates a new SchemaEntityTypeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaEntityTypeDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaEntityTypeDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaEntityTypeDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *SchemaEntityTypeDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SchemaEntityTypeDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SchemaEntityTypeDto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRetentionDays

`func (o *SchemaEntityTypeDto) GetRetentionDays() int32`

GetRetentionDays returns the RetentionDays field if non-nil, zero value otherwise.

### GetRetentionDaysOk

`func (o *SchemaEntityTypeDto) GetRetentionDaysOk() (*int32, bool)`

GetRetentionDaysOk returns a tuple with the RetentionDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionDays

`func (o *SchemaEntityTypeDto) SetRetentionDays(v int32)`

SetRetentionDays sets RetentionDays field to given value.

### HasRetentionDays

`func (o *SchemaEntityTypeDto) HasRetentionDays() bool`

HasRetentionDays returns a boolean if a field has been set.

### GetAliases

`func (o *SchemaEntityTypeDto) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *SchemaEntityTypeDto) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *SchemaEntityTypeDto) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *SchemaEntityTypeDto) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### GetLabel

`func (o *SchemaEntityTypeDto) GetLabel() map[string]string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *SchemaEntityTypeDto) GetLabelOk() (*map[string]string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *SchemaEntityTypeDto) SetLabel(v map[string]string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *SchemaEntityTypeDto) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetScopeKeys

`func (o *SchemaEntityTypeDto) GetScopeKeys() []SchemaScopeKeyDto`

GetScopeKeys returns the ScopeKeys field if non-nil, zero value otherwise.

### GetScopeKeysOk

`func (o *SchemaEntityTypeDto) GetScopeKeysOk() (*[]SchemaScopeKeyDto, bool)`

GetScopeKeysOk returns a tuple with the ScopeKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeKeys

`func (o *SchemaEntityTypeDto) SetScopeKeys(v []SchemaScopeKeyDto)`

SetScopeKeys sets ScopeKeys field to given value.

### HasScopeKeys

`func (o *SchemaEntityTypeDto) HasScopeKeys() bool`

HasScopeKeys returns a boolean if a field has been set.

### GetProperties

`func (o *SchemaEntityTypeDto) GetProperties() []SchemaPropertyDto`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *SchemaEntityTypeDto) GetPropertiesOk() (*[]SchemaPropertyDto, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *SchemaEntityTypeDto) SetProperties(v []SchemaPropertyDto)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *SchemaEntityTypeDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


