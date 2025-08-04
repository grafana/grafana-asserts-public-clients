# EntityTypeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Lookup** | Pointer to **map[string]string** |  | [optional] 
**Properties** | Pointer to [**[]EntityPropertyDto**](EntityPropertyDto.md) |  | [optional] 
**Created** | Pointer to **int64** |  | [optional] 
**Updated** | Pointer to **int64** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**ConnectedEntityTypes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewEntityTypeDto

`func NewEntityTypeDto() *EntityTypeDto`

NewEntityTypeDto instantiates a new EntityTypeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityTypeDtoWithDefaults

`func NewEntityTypeDtoWithDefaults() *EntityTypeDto`

NewEntityTypeDtoWithDefaults instantiates a new EntityTypeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *EntityTypeDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *EntityTypeDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *EntityTypeDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *EntityTypeDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetName

`func (o *EntityTypeDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityTypeDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityTypeDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityTypeDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLookup

`func (o *EntityTypeDto) GetLookup() map[string]string`

GetLookup returns the Lookup field if non-nil, zero value otherwise.

### GetLookupOk

`func (o *EntityTypeDto) GetLookupOk() (*map[string]string, bool)`

GetLookupOk returns a tuple with the Lookup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookup

`func (o *EntityTypeDto) SetLookup(v map[string]string)`

SetLookup sets Lookup field to given value.

### HasLookup

`func (o *EntityTypeDto) HasLookup() bool`

HasLookup returns a boolean if a field has been set.

### GetProperties

`func (o *EntityTypeDto) GetProperties() []EntityPropertyDto`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *EntityTypeDto) GetPropertiesOk() (*[]EntityPropertyDto, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *EntityTypeDto) SetProperties(v []EntityPropertyDto)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *EntityTypeDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetCreated

`func (o *EntityTypeDto) GetCreated() int64`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EntityTypeDto) GetCreatedOk() (*int64, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EntityTypeDto) SetCreated(v int64)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EntityTypeDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetUpdated

`func (o *EntityTypeDto) GetUpdated() int64`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *EntityTypeDto) GetUpdatedOk() (*int64, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *EntityTypeDto) SetUpdated(v int64)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *EntityTypeDto) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.

### GetActive

`func (o *EntityTypeDto) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *EntityTypeDto) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *EntityTypeDto) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *EntityTypeDto) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetConnectedEntityTypes

`func (o *EntityTypeDto) GetConnectedEntityTypes() []string`

GetConnectedEntityTypes returns the ConnectedEntityTypes field if non-nil, zero value otherwise.

### GetConnectedEntityTypesOk

`func (o *EntityTypeDto) GetConnectedEntityTypesOk() (*[]string, bool)`

GetConnectedEntityTypesOk returns a tuple with the ConnectedEntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedEntityTypes

`func (o *EntityTypeDto) SetConnectedEntityTypes(v []string)`

SetConnectedEntityTypes sets ConnectedEntityTypes field to given value.

### HasConnectedEntityTypes

`func (o *EntityTypeDto) HasConnectedEntityTypes() bool`

HasConnectedEntityTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


