# SloWindowConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Days** | Pointer to **int32** |  | [optional] 
**Kind** | **string** |  | 

## Methods

### NewSloWindowConfigDto

`func NewSloWindowConfigDto(kind string, ) *SloWindowConfigDto`

NewSloWindowConfigDto instantiates a new SloWindowConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloWindowConfigDtoWithDefaults

`func NewSloWindowConfigDtoWithDefaults() *SloWindowConfigDto`

NewSloWindowConfigDtoWithDefaults instantiates a new SloWindowConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDays

`func (o *SloWindowConfigDto) GetDays() int32`

GetDays returns the Days field if non-nil, zero value otherwise.

### GetDaysOk

`func (o *SloWindowConfigDto) GetDaysOk() (*int32, bool)`

GetDaysOk returns a tuple with the Days field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDays

`func (o *SloWindowConfigDto) SetDays(v int32)`

SetDays sets Days field to given value.

### HasDays

`func (o *SloWindowConfigDto) HasDays() bool`

HasDays returns a boolean if a field has been set.

### GetKind

`func (o *SloWindowConfigDto) GetKind() string`

GetKind returns the Kind field if non-nil, zero value otherwise.

### GetKindOk

`func (o *SloWindowConfigDto) GetKindOk() (*string, bool)`

GetKindOk returns a tuple with the Kind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKind

`func (o *SloWindowConfigDto) SetKind(v string)`

SetKind sets Kind field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


