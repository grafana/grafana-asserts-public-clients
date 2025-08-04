# ThresholdValueMinMaxDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | Pointer to **int64** |  | [optional] 
**Values** | Pointer to **[]float64** |  | [optional] 

## Methods

### NewThresholdValueMinMaxDto

`func NewThresholdValueMinMaxDto() *ThresholdValueMinMaxDto`

NewThresholdValueMinMaxDto instantiates a new ThresholdValueMinMaxDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdValueMinMaxDtoWithDefaults

`func NewThresholdValueMinMaxDtoWithDefaults() *ThresholdValueMinMaxDto`

NewThresholdValueMinMaxDtoWithDefaults instantiates a new ThresholdValueMinMaxDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTime

`func (o *ThresholdValueMinMaxDto) GetTime() int64`

GetTime returns the Time field if non-nil, zero value otherwise.

### GetTimeOk

`func (o *ThresholdValueMinMaxDto) GetTimeOk() (*int64, bool)`

GetTimeOk returns a tuple with the Time field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTime

`func (o *ThresholdValueMinMaxDto) SetTime(v int64)`

SetTime sets Time field to given value.

### HasTime

`func (o *ThresholdValueMinMaxDto) HasTime() bool`

HasTime returns a boolean if a field has been set.

### GetValues

`func (o *ThresholdValueMinMaxDto) GetValues() []float64`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ThresholdValueMinMaxDto) GetValuesOk() (*[]float64, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ThresholdValueMinMaxDto) SetValues(v []float64)`

SetValues sets Values field to given value.

### HasValues

`func (o *ThresholdValueMinMaxDto) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


