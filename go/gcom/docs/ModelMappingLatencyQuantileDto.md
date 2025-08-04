# ModelMappingLatencyQuantileDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HistogramMetricName** | **string** |  | 
**HistogramMetricUnit** | **string** |  | 
**Quantiles** | **[]float64** |  | 

## Methods

### NewModelMappingLatencyQuantileDto

`func NewModelMappingLatencyQuantileDto(histogramMetricName string, histogramMetricUnit string, quantiles []float64, ) *ModelMappingLatencyQuantileDto`

NewModelMappingLatencyQuantileDto instantiates a new ModelMappingLatencyQuantileDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingLatencyQuantileDtoWithDefaults

`func NewModelMappingLatencyQuantileDtoWithDefaults() *ModelMappingLatencyQuantileDto`

NewModelMappingLatencyQuantileDtoWithDefaults instantiates a new ModelMappingLatencyQuantileDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHistogramMetricName

`func (o *ModelMappingLatencyQuantileDto) GetHistogramMetricName() string`

GetHistogramMetricName returns the HistogramMetricName field if non-nil, zero value otherwise.

### GetHistogramMetricNameOk

`func (o *ModelMappingLatencyQuantileDto) GetHistogramMetricNameOk() (*string, bool)`

GetHistogramMetricNameOk returns a tuple with the HistogramMetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistogramMetricName

`func (o *ModelMappingLatencyQuantileDto) SetHistogramMetricName(v string)`

SetHistogramMetricName sets HistogramMetricName field to given value.


### GetHistogramMetricUnit

`func (o *ModelMappingLatencyQuantileDto) GetHistogramMetricUnit() string`

GetHistogramMetricUnit returns the HistogramMetricUnit field if non-nil, zero value otherwise.

### GetHistogramMetricUnitOk

`func (o *ModelMappingLatencyQuantileDto) GetHistogramMetricUnitOk() (*string, bool)`

GetHistogramMetricUnitOk returns a tuple with the HistogramMetricUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistogramMetricUnit

`func (o *ModelMappingLatencyQuantileDto) SetHistogramMetricUnit(v string)`

SetHistogramMetricUnit sets HistogramMetricUnit field to given value.


### GetQuantiles

`func (o *ModelMappingLatencyQuantileDto) GetQuantiles() []float64`

GetQuantiles returns the Quantiles field if non-nil, zero value otherwise.

### GetQuantilesOk

`func (o *ModelMappingLatencyQuantileDto) GetQuantilesOk() (*[]float64, bool)`

GetQuantilesOk returns a tuple with the Quantiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantiles

`func (o *ModelMappingLatencyQuantileDto) SetQuantiles(v []float64)`

SetQuantiles sets Quantiles field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


