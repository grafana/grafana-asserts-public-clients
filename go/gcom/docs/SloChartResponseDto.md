# SloChartResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | Pointer to **string** |  | [optional] 
**Metrics** | Pointer to [**[]MetricDto**](MetricDto.md) |  | [optional] 
**Thresholds** | Pointer to [**[]ThresholdSingleDto**](ThresholdSingleDto.md) |  | [optional] 
**StartTimeMs** | Pointer to **int64** |  | [optional] 
**EndTimeMs** | Pointer to **int64** |  | [optional] 
**StepMs** | Pointer to **int64** |  | [optional] 
**BadEventQuery** | Pointer to **string** |  | [optional] 
**TotalEventQuery** | Pointer to **string** |  | [optional] 
**MeasurementQuery** | Pointer to **string** |  | [optional] 

## Methods

### NewSloChartResponseDto

`func NewSloChartResponseDto() *SloChartResponseDto`

NewSloChartResponseDto instantiates a new SloChartResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloChartResponseDtoWithDefaults

`func NewSloChartResponseDtoWithDefaults() *SloChartResponseDto`

NewSloChartResponseDtoWithDefaults instantiates a new SloChartResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *SloChartResponseDto) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *SloChartResponseDto) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *SloChartResponseDto) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *SloChartResponseDto) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetMetrics

`func (o *SloChartResponseDto) GetMetrics() []MetricDto`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *SloChartResponseDto) GetMetricsOk() (*[]MetricDto, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *SloChartResponseDto) SetMetrics(v []MetricDto)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *SloChartResponseDto) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.

### GetThresholds

`func (o *SloChartResponseDto) GetThresholds() []ThresholdSingleDto`

GetThresholds returns the Thresholds field if non-nil, zero value otherwise.

### GetThresholdsOk

`func (o *SloChartResponseDto) GetThresholdsOk() (*[]ThresholdSingleDto, bool)`

GetThresholdsOk returns a tuple with the Thresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholds

`func (o *SloChartResponseDto) SetThresholds(v []ThresholdSingleDto)`

SetThresholds sets Thresholds field to given value.

### HasThresholds

`func (o *SloChartResponseDto) HasThresholds() bool`

HasThresholds returns a boolean if a field has been set.

### GetStartTimeMs

`func (o *SloChartResponseDto) GetStartTimeMs() int64`

GetStartTimeMs returns the StartTimeMs field if non-nil, zero value otherwise.

### GetStartTimeMsOk

`func (o *SloChartResponseDto) GetStartTimeMsOk() (*int64, bool)`

GetStartTimeMsOk returns a tuple with the StartTimeMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTimeMs

`func (o *SloChartResponseDto) SetStartTimeMs(v int64)`

SetStartTimeMs sets StartTimeMs field to given value.

### HasStartTimeMs

`func (o *SloChartResponseDto) HasStartTimeMs() bool`

HasStartTimeMs returns a boolean if a field has been set.

### GetEndTimeMs

`func (o *SloChartResponseDto) GetEndTimeMs() int64`

GetEndTimeMs returns the EndTimeMs field if non-nil, zero value otherwise.

### GetEndTimeMsOk

`func (o *SloChartResponseDto) GetEndTimeMsOk() (*int64, bool)`

GetEndTimeMsOk returns a tuple with the EndTimeMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTimeMs

`func (o *SloChartResponseDto) SetEndTimeMs(v int64)`

SetEndTimeMs sets EndTimeMs field to given value.

### HasEndTimeMs

`func (o *SloChartResponseDto) HasEndTimeMs() bool`

HasEndTimeMs returns a boolean if a field has been set.

### GetStepMs

`func (o *SloChartResponseDto) GetStepMs() int64`

GetStepMs returns the StepMs field if non-nil, zero value otherwise.

### GetStepMsOk

`func (o *SloChartResponseDto) GetStepMsOk() (*int64, bool)`

GetStepMsOk returns a tuple with the StepMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepMs

`func (o *SloChartResponseDto) SetStepMs(v int64)`

SetStepMs sets StepMs field to given value.

### HasStepMs

`func (o *SloChartResponseDto) HasStepMs() bool`

HasStepMs returns a boolean if a field has been set.

### GetBadEventQuery

`func (o *SloChartResponseDto) GetBadEventQuery() string`

GetBadEventQuery returns the BadEventQuery field if non-nil, zero value otherwise.

### GetBadEventQueryOk

`func (o *SloChartResponseDto) GetBadEventQueryOk() (*string, bool)`

GetBadEventQueryOk returns a tuple with the BadEventQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBadEventQuery

`func (o *SloChartResponseDto) SetBadEventQuery(v string)`

SetBadEventQuery sets BadEventQuery field to given value.

### HasBadEventQuery

`func (o *SloChartResponseDto) HasBadEventQuery() bool`

HasBadEventQuery returns a boolean if a field has been set.

### GetTotalEventQuery

`func (o *SloChartResponseDto) GetTotalEventQuery() string`

GetTotalEventQuery returns the TotalEventQuery field if non-nil, zero value otherwise.

### GetTotalEventQueryOk

`func (o *SloChartResponseDto) GetTotalEventQueryOk() (*string, bool)`

GetTotalEventQueryOk returns a tuple with the TotalEventQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEventQuery

`func (o *SloChartResponseDto) SetTotalEventQuery(v string)`

SetTotalEventQuery sets TotalEventQuery field to given value.

### HasTotalEventQuery

`func (o *SloChartResponseDto) HasTotalEventQuery() bool`

HasTotalEventQuery returns a boolean if a field has been set.

### GetMeasurementQuery

`func (o *SloChartResponseDto) GetMeasurementQuery() string`

GetMeasurementQuery returns the MeasurementQuery field if non-nil, zero value otherwise.

### GetMeasurementQueryOk

`func (o *SloChartResponseDto) GetMeasurementQueryOk() (*string, bool)`

GetMeasurementQueryOk returns a tuple with the MeasurementQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeasurementQuery

`func (o *SloChartResponseDto) SetMeasurementQuery(v string)`

SetMeasurementQuery sets MeasurementQuery field to given value.

### HasMeasurementQuery

`func (o *SloChartResponseDto) HasMeasurementQuery() bool`

HasMeasurementQuery returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


