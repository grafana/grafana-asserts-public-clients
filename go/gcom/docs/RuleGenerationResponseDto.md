# RuleGenerationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrometheusRules** | Pointer to [**PrometheusRules**](PrometheusRules.md) |  | [optional] 
**UnmappedCpuMetrics** | Pointer to **[]string** |  | [optional] 
**UnmappedMemoryMetrics** | Pointer to **[]string** |  | [optional] 
**UnmappedBytesMetric** | Pointer to **[]string** |  | [optional] 
**UnmappedHistograms** | Pointer to **[]string** |  | [optional] 
**UnmappedSummaries** | Pointer to **[]string** |  | [optional] 
**UnmappedMetrics** | Pointer to **[]string** |  | [optional] 

## Methods

### NewRuleGenerationResponseDto

`func NewRuleGenerationResponseDto() *RuleGenerationResponseDto`

NewRuleGenerationResponseDto instantiates a new RuleGenerationResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRuleGenerationResponseDtoWithDefaults

`func NewRuleGenerationResponseDtoWithDefaults() *RuleGenerationResponseDto`

NewRuleGenerationResponseDtoWithDefaults instantiates a new RuleGenerationResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrometheusRules

`func (o *RuleGenerationResponseDto) GetPrometheusRules() PrometheusRules`

GetPrometheusRules returns the PrometheusRules field if non-nil, zero value otherwise.

### GetPrometheusRulesOk

`func (o *RuleGenerationResponseDto) GetPrometheusRulesOk() (*PrometheusRules, bool)`

GetPrometheusRulesOk returns a tuple with the PrometheusRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrometheusRules

`func (o *RuleGenerationResponseDto) SetPrometheusRules(v PrometheusRules)`

SetPrometheusRules sets PrometheusRules field to given value.

### HasPrometheusRules

`func (o *RuleGenerationResponseDto) HasPrometheusRules() bool`

HasPrometheusRules returns a boolean if a field has been set.

### GetUnmappedCpuMetrics

`func (o *RuleGenerationResponseDto) GetUnmappedCpuMetrics() []string`

GetUnmappedCpuMetrics returns the UnmappedCpuMetrics field if non-nil, zero value otherwise.

### GetUnmappedCpuMetricsOk

`func (o *RuleGenerationResponseDto) GetUnmappedCpuMetricsOk() (*[]string, bool)`

GetUnmappedCpuMetricsOk returns a tuple with the UnmappedCpuMetrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedCpuMetrics

`func (o *RuleGenerationResponseDto) SetUnmappedCpuMetrics(v []string)`

SetUnmappedCpuMetrics sets UnmappedCpuMetrics field to given value.

### HasUnmappedCpuMetrics

`func (o *RuleGenerationResponseDto) HasUnmappedCpuMetrics() bool`

HasUnmappedCpuMetrics returns a boolean if a field has been set.

### GetUnmappedMemoryMetrics

`func (o *RuleGenerationResponseDto) GetUnmappedMemoryMetrics() []string`

GetUnmappedMemoryMetrics returns the UnmappedMemoryMetrics field if non-nil, zero value otherwise.

### GetUnmappedMemoryMetricsOk

`func (o *RuleGenerationResponseDto) GetUnmappedMemoryMetricsOk() (*[]string, bool)`

GetUnmappedMemoryMetricsOk returns a tuple with the UnmappedMemoryMetrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedMemoryMetrics

`func (o *RuleGenerationResponseDto) SetUnmappedMemoryMetrics(v []string)`

SetUnmappedMemoryMetrics sets UnmappedMemoryMetrics field to given value.

### HasUnmappedMemoryMetrics

`func (o *RuleGenerationResponseDto) HasUnmappedMemoryMetrics() bool`

HasUnmappedMemoryMetrics returns a boolean if a field has been set.

### GetUnmappedBytesMetric

`func (o *RuleGenerationResponseDto) GetUnmappedBytesMetric() []string`

GetUnmappedBytesMetric returns the UnmappedBytesMetric field if non-nil, zero value otherwise.

### GetUnmappedBytesMetricOk

`func (o *RuleGenerationResponseDto) GetUnmappedBytesMetricOk() (*[]string, bool)`

GetUnmappedBytesMetricOk returns a tuple with the UnmappedBytesMetric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedBytesMetric

`func (o *RuleGenerationResponseDto) SetUnmappedBytesMetric(v []string)`

SetUnmappedBytesMetric sets UnmappedBytesMetric field to given value.

### HasUnmappedBytesMetric

`func (o *RuleGenerationResponseDto) HasUnmappedBytesMetric() bool`

HasUnmappedBytesMetric returns a boolean if a field has been set.

### GetUnmappedHistograms

`func (o *RuleGenerationResponseDto) GetUnmappedHistograms() []string`

GetUnmappedHistograms returns the UnmappedHistograms field if non-nil, zero value otherwise.

### GetUnmappedHistogramsOk

`func (o *RuleGenerationResponseDto) GetUnmappedHistogramsOk() (*[]string, bool)`

GetUnmappedHistogramsOk returns a tuple with the UnmappedHistograms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedHistograms

`func (o *RuleGenerationResponseDto) SetUnmappedHistograms(v []string)`

SetUnmappedHistograms sets UnmappedHistograms field to given value.

### HasUnmappedHistograms

`func (o *RuleGenerationResponseDto) HasUnmappedHistograms() bool`

HasUnmappedHistograms returns a boolean if a field has been set.

### GetUnmappedSummaries

`func (o *RuleGenerationResponseDto) GetUnmappedSummaries() []string`

GetUnmappedSummaries returns the UnmappedSummaries field if non-nil, zero value otherwise.

### GetUnmappedSummariesOk

`func (o *RuleGenerationResponseDto) GetUnmappedSummariesOk() (*[]string, bool)`

GetUnmappedSummariesOk returns a tuple with the UnmappedSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedSummaries

`func (o *RuleGenerationResponseDto) SetUnmappedSummaries(v []string)`

SetUnmappedSummaries sets UnmappedSummaries field to given value.

### HasUnmappedSummaries

`func (o *RuleGenerationResponseDto) HasUnmappedSummaries() bool`

HasUnmappedSummaries returns a boolean if a field has been set.

### GetUnmappedMetrics

`func (o *RuleGenerationResponseDto) GetUnmappedMetrics() []string`

GetUnmappedMetrics returns the UnmappedMetrics field if non-nil, zero value otherwise.

### GetUnmappedMetricsOk

`func (o *RuleGenerationResponseDto) GetUnmappedMetricsOk() (*[]string, bool)`

GetUnmappedMetricsOk returns a tuple with the UnmappedMetrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnmappedMetrics

`func (o *RuleGenerationResponseDto) SetUnmappedMetrics(v []string)`

SetUnmappedMetrics sets UnmappedMetrics field to given value.

### HasUnmappedMetrics

`func (o *RuleGenerationResponseDto) HasUnmappedMetrics() bool`

HasUnmappedMetrics returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


