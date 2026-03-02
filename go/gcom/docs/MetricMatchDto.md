# MetricMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Metric** | Pointer to **string** |  | [optional] 
**Match** | Pointer to **string** |  | [optional] 
**MatchScope** | Pointer to **bool** |  | [optional] 

## Methods

### NewMetricMatchDto

`func NewMetricMatchDto() *MetricMatchDto`

NewMetricMatchDto instantiates a new MetricMatchDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricMatchDtoWithDefaults

`func NewMetricMatchDtoWithDefaults() *MetricMatchDto`

NewMetricMatchDtoWithDefaults instantiates a new MetricMatchDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetric

`func (o *MetricMatchDto) GetMetric() string`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *MetricMatchDto) GetMetricOk() (*string, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *MetricMatchDto) SetMetric(v string)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *MetricMatchDto) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetMatch

`func (o *MetricMatchDto) GetMatch() string`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *MetricMatchDto) GetMatchOk() (*string, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *MetricMatchDto) SetMatch(v string)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *MetricMatchDto) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetMatchScope

`func (o *MetricMatchDto) GetMatchScope() bool`

GetMatchScope returns the MatchScope field if non-nil, zero value otherwise.

### GetMatchScopeOk

`func (o *MetricMatchDto) GetMatchScopeOk() (*bool, bool)`

GetMatchScopeOk returns a tuple with the MatchScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchScope

`func (o *MetricMatchDto) SetMatchScope(v bool)`

SetMatchScope sets MatchScope field to given value.

### HasMatchScope

`func (o *MetricMatchDto) HasMatchScope() bool`

HasMatchScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


