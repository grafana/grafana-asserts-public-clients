# ModelMappingHistogramDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetricName** | **string** |  | 
**MetricUnit** | Pointer to **string** |  | [optional] 
**Quantiles** | Pointer to **[]float64** |  | [optional] 
**Errors** | Pointer to [**[]ModelMappingRequestErrorConditionDto**](ModelMappingRequestErrorConditionDto.md) |  | [optional] 

## Methods

### NewModelMappingHistogramDto

`func NewModelMappingHistogramDto(metricName string, ) *ModelMappingHistogramDto`

NewModelMappingHistogramDto instantiates a new ModelMappingHistogramDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingHistogramDtoWithDefaults

`func NewModelMappingHistogramDtoWithDefaults() *ModelMappingHistogramDto`

NewModelMappingHistogramDtoWithDefaults instantiates a new ModelMappingHistogramDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetricName

`func (o *ModelMappingHistogramDto) GetMetricName() string`

GetMetricName returns the MetricName field if non-nil, zero value otherwise.

### GetMetricNameOk

`func (o *ModelMappingHistogramDto) GetMetricNameOk() (*string, bool)`

GetMetricNameOk returns a tuple with the MetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricName

`func (o *ModelMappingHistogramDto) SetMetricName(v string)`

SetMetricName sets MetricName field to given value.


### GetMetricUnit

`func (o *ModelMappingHistogramDto) GetMetricUnit() string`

GetMetricUnit returns the MetricUnit field if non-nil, zero value otherwise.

### GetMetricUnitOk

`func (o *ModelMappingHistogramDto) GetMetricUnitOk() (*string, bool)`

GetMetricUnitOk returns a tuple with the MetricUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricUnit

`func (o *ModelMappingHistogramDto) SetMetricUnit(v string)`

SetMetricUnit sets MetricUnit field to given value.

### HasMetricUnit

`func (o *ModelMappingHistogramDto) HasMetricUnit() bool`

HasMetricUnit returns a boolean if a field has been set.

### GetQuantiles

`func (o *ModelMappingHistogramDto) GetQuantiles() []float64`

GetQuantiles returns the Quantiles field if non-nil, zero value otherwise.

### GetQuantilesOk

`func (o *ModelMappingHistogramDto) GetQuantilesOk() (*[]float64, bool)`

GetQuantilesOk returns a tuple with the Quantiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantiles

`func (o *ModelMappingHistogramDto) SetQuantiles(v []float64)`

SetQuantiles sets Quantiles field to given value.

### HasQuantiles

`func (o *ModelMappingHistogramDto) HasQuantiles() bool`

HasQuantiles returns a boolean if a field has been set.

### GetErrors

`func (o *ModelMappingHistogramDto) GetErrors() []ModelMappingRequestErrorConditionDto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ModelMappingHistogramDto) GetErrorsOk() (*[]ModelMappingRequestErrorConditionDto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ModelMappingHistogramDto) SetErrors(v []ModelMappingRequestErrorConditionDto)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ModelMappingHistogramDto) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


