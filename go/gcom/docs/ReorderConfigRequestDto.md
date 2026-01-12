# ReorderConfigRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderedConfigs** | [**[]ProfileConfigPriorityDto**](ProfileConfigPriorityDto.md) |  | 

## Methods

### NewReorderConfigRequestDto

`func NewReorderConfigRequestDto(orderedConfigs []ProfileConfigPriorityDto, ) *ReorderConfigRequestDto`

NewReorderConfigRequestDto instantiates a new ReorderConfigRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReorderConfigRequestDtoWithDefaults

`func NewReorderConfigRequestDtoWithDefaults() *ReorderConfigRequestDto`

NewReorderConfigRequestDtoWithDefaults instantiates a new ReorderConfigRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderedConfigs

`func (o *ReorderConfigRequestDto) GetOrderedConfigs() []ProfileConfigPriorityDto`

GetOrderedConfigs returns the OrderedConfigs field if non-nil, zero value otherwise.

### GetOrderedConfigsOk

`func (o *ReorderConfigRequestDto) GetOrderedConfigsOk() (*[]ProfileConfigPriorityDto, bool)`

GetOrderedConfigsOk returns a tuple with the OrderedConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderedConfigs

`func (o *ReorderConfigRequestDto) SetOrderedConfigs(v []ProfileConfigPriorityDto)`

SetOrderedConfigs sets OrderedConfigs field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


