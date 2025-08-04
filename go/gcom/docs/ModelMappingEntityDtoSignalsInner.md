# ModelMappingEntityDtoSignalsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**EntityNameLabel** | **string** |  | 
**MetricSource** | **string** |  | 
**RequestType** | **string** |  | 
**RequestContext** | Pointer to **[]string** |  | [optional] 
**RequestContextJoin** | Pointer to **string** |  | [optional] 
**Filters** | Pointer to [**[]ModelMappingSignalFilterDto**](ModelMappingSignalFilterDto.md) |  | [optional] 
**Kind** | **string** |  | 
**LatencyAverageType** | **string** |  | 
**SumMetricName** | Pointer to **string** |  | [optional] 
**SumMetricUnit** | Pointer to **string** |  | [optional] 
**CountMetricName** | Pointer to **string** |  | [optional] 
**GaugeMetricName** | Pointer to **string** |  | [optional] 
**GaugeMetricUnit** | Pointer to **string** |  | [optional] 
**HistogramMetricName** | **string** |  | 
**HistogramMetricUnit** | **string** |  | 
**Quantiles** | **[]float64** |  | 
**MetricName** | **string** |  | 
**MetricType** | **string** |  | 
**Errors** | [**[]ModelMappingRequestErrorConditionDto**](ModelMappingRequestErrorConditionDto.md) |  | 

## Methods

### NewModelMappingEntityDtoSignalsInner

`func NewModelMappingEntityDtoSignalsInner(entityNameLabel string, metricSource string, requestType string, kind string, latencyAverageType string, histogramMetricName string, histogramMetricUnit string, quantiles []float64, metricName string, metricType string, errors []ModelMappingRequestErrorConditionDto, ) *ModelMappingEntityDtoSignalsInner`

NewModelMappingEntityDtoSignalsInner instantiates a new ModelMappingEntityDtoSignalsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingEntityDtoSignalsInnerWithDefaults

`func NewModelMappingEntityDtoSignalsInnerWithDefaults() *ModelMappingEntityDtoSignalsInner`

NewModelMappingEntityDtoSignalsInnerWithDefaults instantiates a new ModelMappingEntityDtoSignalsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ModelMappingEntityDtoSignalsInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelMappingEntityDtoSignalsInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelMappingEntityDtoSignalsInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelMappingEntityDtoSignalsInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEntityNameLabel

`func (o *ModelMappingEntityDtoSignalsInner) GetEntityNameLabel() string`

GetEntityNameLabel returns the EntityNameLabel field if non-nil, zero value otherwise.

### GetEntityNameLabelOk

`func (o *ModelMappingEntityDtoSignalsInner) GetEntityNameLabelOk() (*string, bool)`

GetEntityNameLabelOk returns a tuple with the EntityNameLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityNameLabel

`func (o *ModelMappingEntityDtoSignalsInner) SetEntityNameLabel(v string)`

SetEntityNameLabel sets EntityNameLabel field to given value.


### GetMetricSource

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricSource() string`

GetMetricSource returns the MetricSource field if non-nil, zero value otherwise.

### GetMetricSourceOk

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricSourceOk() (*string, bool)`

GetMetricSourceOk returns a tuple with the MetricSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricSource

`func (o *ModelMappingEntityDtoSignalsInner) SetMetricSource(v string)`

SetMetricSource sets MetricSource field to given value.


### GetRequestType

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *ModelMappingEntityDtoSignalsInner) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.


### GetRequestContext

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestContext() []string`

GetRequestContext returns the RequestContext field if non-nil, zero value otherwise.

### GetRequestContextOk

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestContextOk() (*[]string, bool)`

GetRequestContextOk returns a tuple with the RequestContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestContext

`func (o *ModelMappingEntityDtoSignalsInner) SetRequestContext(v []string)`

SetRequestContext sets RequestContext field to given value.

### HasRequestContext

`func (o *ModelMappingEntityDtoSignalsInner) HasRequestContext() bool`

HasRequestContext returns a boolean if a field has been set.

### GetRequestContextJoin

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestContextJoin() string`

GetRequestContextJoin returns the RequestContextJoin field if non-nil, zero value otherwise.

### GetRequestContextJoinOk

`func (o *ModelMappingEntityDtoSignalsInner) GetRequestContextJoinOk() (*string, bool)`

GetRequestContextJoinOk returns a tuple with the RequestContextJoin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestContextJoin

`func (o *ModelMappingEntityDtoSignalsInner) SetRequestContextJoin(v string)`

SetRequestContextJoin sets RequestContextJoin field to given value.

### HasRequestContextJoin

`func (o *ModelMappingEntityDtoSignalsInner) HasRequestContextJoin() bool`

HasRequestContextJoin returns a boolean if a field has been set.

### GetFilters

`func (o *ModelMappingEntityDtoSignalsInner) GetFilters() []ModelMappingSignalFilterDto`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *ModelMappingEntityDtoSignalsInner) GetFiltersOk() (*[]ModelMappingSignalFilterDto, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *ModelMappingEntityDtoSignalsInner) SetFilters(v []ModelMappingSignalFilterDto)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *ModelMappingEntityDtoSignalsInner) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetKind

`func (o *ModelMappingEntityDtoSignalsInner) GetKind() string`

GetKind returns the Kind field if non-nil, zero value otherwise.

### GetKindOk

`func (o *ModelMappingEntityDtoSignalsInner) GetKindOk() (*string, bool)`

GetKindOk returns a tuple with the Kind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKind

`func (o *ModelMappingEntityDtoSignalsInner) SetKind(v string)`

SetKind sets Kind field to given value.


### GetLatencyAverageType

`func (o *ModelMappingEntityDtoSignalsInner) GetLatencyAverageType() string`

GetLatencyAverageType returns the LatencyAverageType field if non-nil, zero value otherwise.

### GetLatencyAverageTypeOk

`func (o *ModelMappingEntityDtoSignalsInner) GetLatencyAverageTypeOk() (*string, bool)`

GetLatencyAverageTypeOk returns a tuple with the LatencyAverageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatencyAverageType

`func (o *ModelMappingEntityDtoSignalsInner) SetLatencyAverageType(v string)`

SetLatencyAverageType sets LatencyAverageType field to given value.


### GetSumMetricName

`func (o *ModelMappingEntityDtoSignalsInner) GetSumMetricName() string`

GetSumMetricName returns the SumMetricName field if non-nil, zero value otherwise.

### GetSumMetricNameOk

`func (o *ModelMappingEntityDtoSignalsInner) GetSumMetricNameOk() (*string, bool)`

GetSumMetricNameOk returns a tuple with the SumMetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSumMetricName

`func (o *ModelMappingEntityDtoSignalsInner) SetSumMetricName(v string)`

SetSumMetricName sets SumMetricName field to given value.

### HasSumMetricName

`func (o *ModelMappingEntityDtoSignalsInner) HasSumMetricName() bool`

HasSumMetricName returns a boolean if a field has been set.

### GetSumMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) GetSumMetricUnit() string`

GetSumMetricUnit returns the SumMetricUnit field if non-nil, zero value otherwise.

### GetSumMetricUnitOk

`func (o *ModelMappingEntityDtoSignalsInner) GetSumMetricUnitOk() (*string, bool)`

GetSumMetricUnitOk returns a tuple with the SumMetricUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSumMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) SetSumMetricUnit(v string)`

SetSumMetricUnit sets SumMetricUnit field to given value.

### HasSumMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) HasSumMetricUnit() bool`

HasSumMetricUnit returns a boolean if a field has been set.

### GetCountMetricName

`func (o *ModelMappingEntityDtoSignalsInner) GetCountMetricName() string`

GetCountMetricName returns the CountMetricName field if non-nil, zero value otherwise.

### GetCountMetricNameOk

`func (o *ModelMappingEntityDtoSignalsInner) GetCountMetricNameOk() (*string, bool)`

GetCountMetricNameOk returns a tuple with the CountMetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCountMetricName

`func (o *ModelMappingEntityDtoSignalsInner) SetCountMetricName(v string)`

SetCountMetricName sets CountMetricName field to given value.

### HasCountMetricName

`func (o *ModelMappingEntityDtoSignalsInner) HasCountMetricName() bool`

HasCountMetricName returns a boolean if a field has been set.

### GetGaugeMetricName

`func (o *ModelMappingEntityDtoSignalsInner) GetGaugeMetricName() string`

GetGaugeMetricName returns the GaugeMetricName field if non-nil, zero value otherwise.

### GetGaugeMetricNameOk

`func (o *ModelMappingEntityDtoSignalsInner) GetGaugeMetricNameOk() (*string, bool)`

GetGaugeMetricNameOk returns a tuple with the GaugeMetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGaugeMetricName

`func (o *ModelMappingEntityDtoSignalsInner) SetGaugeMetricName(v string)`

SetGaugeMetricName sets GaugeMetricName field to given value.

### HasGaugeMetricName

`func (o *ModelMappingEntityDtoSignalsInner) HasGaugeMetricName() bool`

HasGaugeMetricName returns a boolean if a field has been set.

### GetGaugeMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) GetGaugeMetricUnit() string`

GetGaugeMetricUnit returns the GaugeMetricUnit field if non-nil, zero value otherwise.

### GetGaugeMetricUnitOk

`func (o *ModelMappingEntityDtoSignalsInner) GetGaugeMetricUnitOk() (*string, bool)`

GetGaugeMetricUnitOk returns a tuple with the GaugeMetricUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGaugeMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) SetGaugeMetricUnit(v string)`

SetGaugeMetricUnit sets GaugeMetricUnit field to given value.

### HasGaugeMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) HasGaugeMetricUnit() bool`

HasGaugeMetricUnit returns a boolean if a field has been set.

### GetHistogramMetricName

`func (o *ModelMappingEntityDtoSignalsInner) GetHistogramMetricName() string`

GetHistogramMetricName returns the HistogramMetricName field if non-nil, zero value otherwise.

### GetHistogramMetricNameOk

`func (o *ModelMappingEntityDtoSignalsInner) GetHistogramMetricNameOk() (*string, bool)`

GetHistogramMetricNameOk returns a tuple with the HistogramMetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistogramMetricName

`func (o *ModelMappingEntityDtoSignalsInner) SetHistogramMetricName(v string)`

SetHistogramMetricName sets HistogramMetricName field to given value.


### GetHistogramMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) GetHistogramMetricUnit() string`

GetHistogramMetricUnit returns the HistogramMetricUnit field if non-nil, zero value otherwise.

### GetHistogramMetricUnitOk

`func (o *ModelMappingEntityDtoSignalsInner) GetHistogramMetricUnitOk() (*string, bool)`

GetHistogramMetricUnitOk returns a tuple with the HistogramMetricUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistogramMetricUnit

`func (o *ModelMappingEntityDtoSignalsInner) SetHistogramMetricUnit(v string)`

SetHistogramMetricUnit sets HistogramMetricUnit field to given value.


### GetQuantiles

`func (o *ModelMappingEntityDtoSignalsInner) GetQuantiles() []float64`

GetQuantiles returns the Quantiles field if non-nil, zero value otherwise.

### GetQuantilesOk

`func (o *ModelMappingEntityDtoSignalsInner) GetQuantilesOk() (*[]float64, bool)`

GetQuantilesOk returns a tuple with the Quantiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantiles

`func (o *ModelMappingEntityDtoSignalsInner) SetQuantiles(v []float64)`

SetQuantiles sets Quantiles field to given value.


### GetMetricName

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricName() string`

GetMetricName returns the MetricName field if non-nil, zero value otherwise.

### GetMetricNameOk

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricNameOk() (*string, bool)`

GetMetricNameOk returns a tuple with the MetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricName

`func (o *ModelMappingEntityDtoSignalsInner) SetMetricName(v string)`

SetMetricName sets MetricName field to given value.


### GetMetricType

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricType() string`

GetMetricType returns the MetricType field if non-nil, zero value otherwise.

### GetMetricTypeOk

`func (o *ModelMappingEntityDtoSignalsInner) GetMetricTypeOk() (*string, bool)`

GetMetricTypeOk returns a tuple with the MetricType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricType

`func (o *ModelMappingEntityDtoSignalsInner) SetMetricType(v string)`

SetMetricType sets MetricType field to given value.


### GetErrors

`func (o *ModelMappingEntityDtoSignalsInner) GetErrors() []ModelMappingRequestErrorConditionDto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ModelMappingEntityDtoSignalsInner) GetErrorsOk() (*[]ModelMappingRequestErrorConditionDto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ModelMappingEntityDtoSignalsInner) SetErrors(v []ModelMappingRequestErrorConditionDto)`

SetErrors sets Errors field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


