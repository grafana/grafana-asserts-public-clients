# ModelMappingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | [**[]ModelMappingEntityDto**](ModelMappingEntityDto.md) |  | 

## Methods

### NewModelMappingDto

`func NewModelMappingDto(entities []ModelMappingEntityDto, ) *ModelMappingDto`

NewModelMappingDto instantiates a new ModelMappingDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingDtoWithDefaults

`func NewModelMappingDtoWithDefaults() *ModelMappingDto`

NewModelMappingDtoWithDefaults instantiates a new ModelMappingDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *ModelMappingDto) GetEntities() []ModelMappingEntityDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *ModelMappingDto) GetEntitiesOk() (*[]ModelMappingEntityDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *ModelMappingDto) SetEntities(v []ModelMappingEntityDto)`

SetEntities sets Entities field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


