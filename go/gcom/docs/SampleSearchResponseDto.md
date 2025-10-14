# SampleSearchResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**[]SampleEntityDto**](SampleEntityDto.md) |  | [optional] 

## Methods

### NewSampleSearchResponseDto

`func NewSampleSearchResponseDto() *SampleSearchResponseDto`

NewSampleSearchResponseDto instantiates a new SampleSearchResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSampleSearchResponseDtoWithDefaults

`func NewSampleSearchResponseDtoWithDefaults() *SampleSearchResponseDto`

NewSampleSearchResponseDtoWithDefaults instantiates a new SampleSearchResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *SampleSearchResponseDto) GetEntities() []SampleEntityDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *SampleSearchResponseDto) GetEntitiesOk() (*[]SampleEntityDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *SampleSearchResponseDto) SetEntities(v []SampleEntityDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *SampleSearchResponseDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


