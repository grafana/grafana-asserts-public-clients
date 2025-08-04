# ModelMappingEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**EntityType** | **string** |  | 
**Signals** | [**[]ModelMappingEntityDtoSignalsInner**](ModelMappingEntityDtoSignalsInner.md) |  | 

## Methods

### NewModelMappingEntityDto

`func NewModelMappingEntityDto(entityType string, signals []ModelMappingEntityDtoSignalsInner, ) *ModelMappingEntityDto`

NewModelMappingEntityDto instantiates a new ModelMappingEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingEntityDtoWithDefaults

`func NewModelMappingEntityDtoWithDefaults() *ModelMappingEntityDto`

NewModelMappingEntityDtoWithDefaults instantiates a new ModelMappingEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ModelMappingEntityDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelMappingEntityDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelMappingEntityDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelMappingEntityDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEntityType

`func (o *ModelMappingEntityDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *ModelMappingEntityDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *ModelMappingEntityDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.


### GetSignals

`func (o *ModelMappingEntityDto) GetSignals() []ModelMappingEntityDtoSignalsInner`

GetSignals returns the Signals field if non-nil, zero value otherwise.

### GetSignalsOk

`func (o *ModelMappingEntityDto) GetSignalsOk() (*[]ModelMappingEntityDtoSignalsInner, bool)`

GetSignalsOk returns a tuple with the Signals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignals

`func (o *ModelMappingEntityDto) SetSignals(v []ModelMappingEntityDtoSignalsInner)`

SetSignals sets Signals field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


