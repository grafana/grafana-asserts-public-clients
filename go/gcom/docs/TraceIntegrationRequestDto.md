# TraceIntegrationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **int64** |  | 
**End** | **int64** |  | 
**Properties** | Pointer to **map[string]string** |  | [optional] 
**Values** | Pointer to [**[]MetricValueDto**](MetricValueDto.md) |  | [optional] 
**ThresholdBands** | Pointer to [**[]ThresholdValueMinMaxDto**](ThresholdValueMinMaxDto.md) |  | [optional] 
**SingleThreshold** | Pointer to **float64** |  | [optional] 

## Methods

### NewTraceIntegrationRequestDto

`func NewTraceIntegrationRequestDto(start int64, end int64, ) *TraceIntegrationRequestDto`

NewTraceIntegrationRequestDto instantiates a new TraceIntegrationRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceIntegrationRequestDtoWithDefaults

`func NewTraceIntegrationRequestDtoWithDefaults() *TraceIntegrationRequestDto`

NewTraceIntegrationRequestDtoWithDefaults instantiates a new TraceIntegrationRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *TraceIntegrationRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *TraceIntegrationRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *TraceIntegrationRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.


### GetEnd

`func (o *TraceIntegrationRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *TraceIntegrationRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *TraceIntegrationRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.


### GetProperties

`func (o *TraceIntegrationRequestDto) GetProperties() map[string]string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *TraceIntegrationRequestDto) GetPropertiesOk() (*map[string]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *TraceIntegrationRequestDto) SetProperties(v map[string]string)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *TraceIntegrationRequestDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetValues

`func (o *TraceIntegrationRequestDto) GetValues() []MetricValueDto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *TraceIntegrationRequestDto) GetValuesOk() (*[]MetricValueDto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *TraceIntegrationRequestDto) SetValues(v []MetricValueDto)`

SetValues sets Values field to given value.

### HasValues

`func (o *TraceIntegrationRequestDto) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetThresholdBands

`func (o *TraceIntegrationRequestDto) GetThresholdBands() []ThresholdValueMinMaxDto`

GetThresholdBands returns the ThresholdBands field if non-nil, zero value otherwise.

### GetThresholdBandsOk

`func (o *TraceIntegrationRequestDto) GetThresholdBandsOk() (*[]ThresholdValueMinMaxDto, bool)`

GetThresholdBandsOk returns a tuple with the ThresholdBands field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholdBands

`func (o *TraceIntegrationRequestDto) SetThresholdBands(v []ThresholdValueMinMaxDto)`

SetThresholdBands sets ThresholdBands field to given value.

### HasThresholdBands

`func (o *TraceIntegrationRequestDto) HasThresholdBands() bool`

HasThresholdBands returns a boolean if a field has been set.

### GetSingleThreshold

`func (o *TraceIntegrationRequestDto) GetSingleThreshold() float64`

GetSingleThreshold returns the SingleThreshold field if non-nil, zero value otherwise.

### GetSingleThresholdOk

`func (o *TraceIntegrationRequestDto) GetSingleThresholdOk() (*float64, bool)`

GetSingleThresholdOk returns a tuple with the SingleThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSingleThreshold

`func (o *TraceIntegrationRequestDto) SetSingleThreshold(v float64)`

SetSingleThreshold sets SingleThreshold field to given value.

### HasSingleThreshold

`func (o *TraceIntegrationRequestDto) HasSingleThreshold() bool`

HasSingleThreshold returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


