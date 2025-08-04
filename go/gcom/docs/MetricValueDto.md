# MetricValueDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Time** | Pointer to **int64** |  | [optional] 
**Value** | Pointer to **float64** |  | [optional] 

## Methods

### NewMetricValueDto

`func NewMetricValueDto() *MetricValueDto`

NewMetricValueDto instantiates a new MetricValueDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricValueDtoWithDefaults

`func NewMetricValueDtoWithDefaults() *MetricValueDto`

NewMetricValueDtoWithDefaults instantiates a new MetricValueDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTime

`func (o *MetricValueDto) GetTime() int64`

GetTime returns the Time field if non-nil, zero value otherwise.

### GetTimeOk

`func (o *MetricValueDto) GetTimeOk() (*int64, bool)`

GetTimeOk returns a tuple with the Time field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTime

`func (o *MetricValueDto) SetTime(v int64)`

SetTime sets Time field to given value.

### HasTime

`func (o *MetricValueDto) HasTime() bool`

HasTime returns a boolean if a field has been set.

### GetValue

`func (o *MetricValueDto) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MetricValueDto) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MetricValueDto) SetValue(v float64)`

SetValue sets Value field to given value.

### HasValue

`func (o *MetricValueDto) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


