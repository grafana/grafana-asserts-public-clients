# OtelCollectorConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaptureMetrics** | Pointer to **bool** |  | [optional] 
**CustomAttributes** | Pointer to [**map[string]map[string][]CustomAttributeConfigDto**](map.md) |  | [optional] 
**SpanAttributes** | Pointer to [**[]SpanAttributeDto**](SpanAttributeDto.md) |  | [optional] 
**AttributesAsMetricLabels** | Pointer to **[]string** |  | [optional] 
**SamplingLatencyThresholdSeconds** | Pointer to **float64** |  | [optional] 
**LatencyHistogramBuckets** | Pointer to **[]float64** |  | [optional] 
**IgnoreClientErrors** | Pointer to **bool** |  | [optional] 

## Methods

### NewOtelCollectorConfigDto

`func NewOtelCollectorConfigDto() *OtelCollectorConfigDto`

NewOtelCollectorConfigDto instantiates a new OtelCollectorConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOtelCollectorConfigDtoWithDefaults

`func NewOtelCollectorConfigDtoWithDefaults() *OtelCollectorConfigDto`

NewOtelCollectorConfigDtoWithDefaults instantiates a new OtelCollectorConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaptureMetrics

`func (o *OtelCollectorConfigDto) GetCaptureMetrics() bool`

GetCaptureMetrics returns the CaptureMetrics field if non-nil, zero value otherwise.

### GetCaptureMetricsOk

`func (o *OtelCollectorConfigDto) GetCaptureMetricsOk() (*bool, bool)`

GetCaptureMetricsOk returns a tuple with the CaptureMetrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaptureMetrics

`func (o *OtelCollectorConfigDto) SetCaptureMetrics(v bool)`

SetCaptureMetrics sets CaptureMetrics field to given value.

### HasCaptureMetrics

`func (o *OtelCollectorConfigDto) HasCaptureMetrics() bool`

HasCaptureMetrics returns a boolean if a field has been set.

### GetCustomAttributes

`func (o *OtelCollectorConfigDto) GetCustomAttributes() map[string]map[string][]CustomAttributeConfigDto`

GetCustomAttributes returns the CustomAttributes field if non-nil, zero value otherwise.

### GetCustomAttributesOk

`func (o *OtelCollectorConfigDto) GetCustomAttributesOk() (*map[string]map[string][]CustomAttributeConfigDto, bool)`

GetCustomAttributesOk returns a tuple with the CustomAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomAttributes

`func (o *OtelCollectorConfigDto) SetCustomAttributes(v map[string]map[string][]CustomAttributeConfigDto)`

SetCustomAttributes sets CustomAttributes field to given value.

### HasCustomAttributes

`func (o *OtelCollectorConfigDto) HasCustomAttributes() bool`

HasCustomAttributes returns a boolean if a field has been set.

### GetSpanAttributes

`func (o *OtelCollectorConfigDto) GetSpanAttributes() []SpanAttributeDto`

GetSpanAttributes returns the SpanAttributes field if non-nil, zero value otherwise.

### GetSpanAttributesOk

`func (o *OtelCollectorConfigDto) GetSpanAttributesOk() (*[]SpanAttributeDto, bool)`

GetSpanAttributesOk returns a tuple with the SpanAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpanAttributes

`func (o *OtelCollectorConfigDto) SetSpanAttributes(v []SpanAttributeDto)`

SetSpanAttributes sets SpanAttributes field to given value.

### HasSpanAttributes

`func (o *OtelCollectorConfigDto) HasSpanAttributes() bool`

HasSpanAttributes returns a boolean if a field has been set.

### GetAttributesAsMetricLabels

`func (o *OtelCollectorConfigDto) GetAttributesAsMetricLabels() []string`

GetAttributesAsMetricLabels returns the AttributesAsMetricLabels field if non-nil, zero value otherwise.

### GetAttributesAsMetricLabelsOk

`func (o *OtelCollectorConfigDto) GetAttributesAsMetricLabelsOk() (*[]string, bool)`

GetAttributesAsMetricLabelsOk returns a tuple with the AttributesAsMetricLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributesAsMetricLabels

`func (o *OtelCollectorConfigDto) SetAttributesAsMetricLabels(v []string)`

SetAttributesAsMetricLabels sets AttributesAsMetricLabels field to given value.

### HasAttributesAsMetricLabels

`func (o *OtelCollectorConfigDto) HasAttributesAsMetricLabels() bool`

HasAttributesAsMetricLabels returns a boolean if a field has been set.

### GetSamplingLatencyThresholdSeconds

`func (o *OtelCollectorConfigDto) GetSamplingLatencyThresholdSeconds() float64`

GetSamplingLatencyThresholdSeconds returns the SamplingLatencyThresholdSeconds field if non-nil, zero value otherwise.

### GetSamplingLatencyThresholdSecondsOk

`func (o *OtelCollectorConfigDto) GetSamplingLatencyThresholdSecondsOk() (*float64, bool)`

GetSamplingLatencyThresholdSecondsOk returns a tuple with the SamplingLatencyThresholdSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSamplingLatencyThresholdSeconds

`func (o *OtelCollectorConfigDto) SetSamplingLatencyThresholdSeconds(v float64)`

SetSamplingLatencyThresholdSeconds sets SamplingLatencyThresholdSeconds field to given value.

### HasSamplingLatencyThresholdSeconds

`func (o *OtelCollectorConfigDto) HasSamplingLatencyThresholdSeconds() bool`

HasSamplingLatencyThresholdSeconds returns a boolean if a field has been set.

### GetLatencyHistogramBuckets

`func (o *OtelCollectorConfigDto) GetLatencyHistogramBuckets() []float64`

GetLatencyHistogramBuckets returns the LatencyHistogramBuckets field if non-nil, zero value otherwise.

### GetLatencyHistogramBucketsOk

`func (o *OtelCollectorConfigDto) GetLatencyHistogramBucketsOk() (*[]float64, bool)`

GetLatencyHistogramBucketsOk returns a tuple with the LatencyHistogramBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatencyHistogramBuckets

`func (o *OtelCollectorConfigDto) SetLatencyHistogramBuckets(v []float64)`

SetLatencyHistogramBuckets sets LatencyHistogramBuckets field to given value.

### HasLatencyHistogramBuckets

`func (o *OtelCollectorConfigDto) HasLatencyHistogramBuckets() bool`

HasLatencyHistogramBuckets returns a boolean if a field has been set.

### GetIgnoreClientErrors

`func (o *OtelCollectorConfigDto) GetIgnoreClientErrors() bool`

GetIgnoreClientErrors returns the IgnoreClientErrors field if non-nil, zero value otherwise.

### GetIgnoreClientErrorsOk

`func (o *OtelCollectorConfigDto) GetIgnoreClientErrorsOk() (*bool, bool)`

GetIgnoreClientErrorsOk returns a tuple with the IgnoreClientErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreClientErrors

`func (o *OtelCollectorConfigDto) SetIgnoreClientErrors(v bool)`

SetIgnoreClientErrors sets IgnoreClientErrors field to given value.

### HasIgnoreClientErrors

`func (o *OtelCollectorConfigDto) HasIgnoreClientErrors() bool`

HasIgnoreClientErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


