# MetricDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**FillZeros** | Pointer to **bool** |  | [optional] 
**Metric** | Pointer to **map[string]string** |  | [optional] 
**Values** | Pointer to [**[]MetricValueDto**](MetricValueDto.md) |  | [optional] 

## Methods

### NewMetricDto

`func NewMetricDto() *MetricDto`

NewMetricDto instantiates a new MetricDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricDtoWithDefaults

`func NewMetricDtoWithDefaults() *MetricDto`

NewMetricDtoWithDefaults instantiates a new MetricDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *MetricDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *MetricDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *MetricDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *MetricDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetName

`func (o *MetricDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MetricDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MetricDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MetricDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetFillZeros

`func (o *MetricDto) GetFillZeros() bool`

GetFillZeros returns the FillZeros field if non-nil, zero value otherwise.

### GetFillZerosOk

`func (o *MetricDto) GetFillZerosOk() (*bool, bool)`

GetFillZerosOk returns a tuple with the FillZeros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillZeros

`func (o *MetricDto) SetFillZeros(v bool)`

SetFillZeros sets FillZeros field to given value.

### HasFillZeros

`func (o *MetricDto) HasFillZeros() bool`

HasFillZeros returns a boolean if a field has been set.

### GetMetric

`func (o *MetricDto) GetMetric() map[string]string`

GetMetric returns the Metric field if non-nil, zero value otherwise.

### GetMetricOk

`func (o *MetricDto) GetMetricOk() (*map[string]string, bool)`

GetMetricOk returns a tuple with the Metric field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetric

`func (o *MetricDto) SetMetric(v map[string]string)`

SetMetric sets Metric field to given value.

### HasMetric

`func (o *MetricDto) HasMetric() bool`

HasMetric returns a boolean if a field has been set.

### GetValues

`func (o *MetricDto) GetValues() []MetricValueDto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *MetricDto) GetValuesOk() (*[]MetricValueDto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *MetricDto) SetValues(v []MetricValueDto)`

SetValues sets Values field to given value.

### HasValues

`func (o *MetricDto) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


