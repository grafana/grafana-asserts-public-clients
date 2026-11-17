# KgTimeCriteriaDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **int64** | Window start, epoch millis inclusive. Required when end is supplied. | [optional] 
**End** | Pointer to **int64** | Window end, epoch millis inclusive. Defaults to now when start is supplied. | [optional] 

## Methods

### NewKgTimeCriteriaDto

`func NewKgTimeCriteriaDto() *KgTimeCriteriaDto`

NewKgTimeCriteriaDto instantiates a new KgTimeCriteriaDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgTimeCriteriaDtoWithDefaults

`func NewKgTimeCriteriaDtoWithDefaults() *KgTimeCriteriaDto`

NewKgTimeCriteriaDtoWithDefaults instantiates a new KgTimeCriteriaDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *KgTimeCriteriaDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *KgTimeCriteriaDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *KgTimeCriteriaDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *KgTimeCriteriaDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *KgTimeCriteriaDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *KgTimeCriteriaDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *KgTimeCriteriaDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *KgTimeCriteriaDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


