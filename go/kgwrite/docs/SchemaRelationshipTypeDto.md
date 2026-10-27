# SchemaRelationshipTypeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | **string** |  | 
**RetentionDays** | Pointer to **int32** |  | [optional] 
**Aliases** | Pointer to **[]string** |  | [optional] 
**Label** | Pointer to **map[string]string** |  | [optional] 
**Inverse** | Pointer to **string** |  | [optional] 
**Characteristics** | Pointer to **[]string** |  | [optional] 
**From** | [**SchemaEndpointDto**](SchemaEndpointDto.md) |  | 
**To** | [**SchemaEndpointDto**](SchemaEndpointDto.md) |  | 
**Properties** | Pointer to [**[]SchemaPropertyDto**](SchemaPropertyDto.md) |  | [optional] 

## Methods

### NewSchemaRelationshipTypeDto

`func NewSchemaRelationshipTypeDto(name string, description string, from SchemaEndpointDto, to SchemaEndpointDto, ) *SchemaRelationshipTypeDto`

NewSchemaRelationshipTypeDto instantiates a new SchemaRelationshipTypeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaRelationshipTypeDtoWithDefaults

`func NewSchemaRelationshipTypeDtoWithDefaults() *SchemaRelationshipTypeDto`

NewSchemaRelationshipTypeDtoWithDefaults instantiates a new SchemaRelationshipTypeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaRelationshipTypeDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaRelationshipTypeDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaRelationshipTypeDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *SchemaRelationshipTypeDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SchemaRelationshipTypeDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SchemaRelationshipTypeDto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetRetentionDays

`func (o *SchemaRelationshipTypeDto) GetRetentionDays() int32`

GetRetentionDays returns the RetentionDays field if non-nil, zero value otherwise.

### GetRetentionDaysOk

`func (o *SchemaRelationshipTypeDto) GetRetentionDaysOk() (*int32, bool)`

GetRetentionDaysOk returns a tuple with the RetentionDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionDays

`func (o *SchemaRelationshipTypeDto) SetRetentionDays(v int32)`

SetRetentionDays sets RetentionDays field to given value.

### HasRetentionDays

`func (o *SchemaRelationshipTypeDto) HasRetentionDays() bool`

HasRetentionDays returns a boolean if a field has been set.

### GetAliases

`func (o *SchemaRelationshipTypeDto) GetAliases() []string`

GetAliases returns the Aliases field if non-nil, zero value otherwise.

### GetAliasesOk

`func (o *SchemaRelationshipTypeDto) GetAliasesOk() (*[]string, bool)`

GetAliasesOk returns a tuple with the Aliases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliases

`func (o *SchemaRelationshipTypeDto) SetAliases(v []string)`

SetAliases sets Aliases field to given value.

### HasAliases

`func (o *SchemaRelationshipTypeDto) HasAliases() bool`

HasAliases returns a boolean if a field has been set.

### GetLabel

`func (o *SchemaRelationshipTypeDto) GetLabel() map[string]string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *SchemaRelationshipTypeDto) GetLabelOk() (*map[string]string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *SchemaRelationshipTypeDto) SetLabel(v map[string]string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *SchemaRelationshipTypeDto) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetInverse

`func (o *SchemaRelationshipTypeDto) GetInverse() string`

GetInverse returns the Inverse field if non-nil, zero value otherwise.

### GetInverseOk

`func (o *SchemaRelationshipTypeDto) GetInverseOk() (*string, bool)`

GetInverseOk returns a tuple with the Inverse field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInverse

`func (o *SchemaRelationshipTypeDto) SetInverse(v string)`

SetInverse sets Inverse field to given value.

### HasInverse

`func (o *SchemaRelationshipTypeDto) HasInverse() bool`

HasInverse returns a boolean if a field has been set.

### GetCharacteristics

`func (o *SchemaRelationshipTypeDto) GetCharacteristics() []string`

GetCharacteristics returns the Characteristics field if non-nil, zero value otherwise.

### GetCharacteristicsOk

`func (o *SchemaRelationshipTypeDto) GetCharacteristicsOk() (*[]string, bool)`

GetCharacteristicsOk returns a tuple with the Characteristics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharacteristics

`func (o *SchemaRelationshipTypeDto) SetCharacteristics(v []string)`

SetCharacteristics sets Characteristics field to given value.

### HasCharacteristics

`func (o *SchemaRelationshipTypeDto) HasCharacteristics() bool`

HasCharacteristics returns a boolean if a field has been set.

### GetFrom

`func (o *SchemaRelationshipTypeDto) GetFrom() SchemaEndpointDto`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SchemaRelationshipTypeDto) GetFromOk() (*SchemaEndpointDto, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SchemaRelationshipTypeDto) SetFrom(v SchemaEndpointDto)`

SetFrom sets From field to given value.


### GetTo

`func (o *SchemaRelationshipTypeDto) GetTo() SchemaEndpointDto`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SchemaRelationshipTypeDto) GetToOk() (*SchemaEndpointDto, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SchemaRelationshipTypeDto) SetTo(v SchemaEndpointDto)`

SetTo sets To field to given value.


### GetProperties

`func (o *SchemaRelationshipTypeDto) GetProperties() []SchemaPropertyDto`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *SchemaRelationshipTypeDto) GetPropertiesOk() (*[]SchemaPropertyDto, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *SchemaRelationshipTypeDto) SetProperties(v []SchemaPropertyDto)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *SchemaRelationshipTypeDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


