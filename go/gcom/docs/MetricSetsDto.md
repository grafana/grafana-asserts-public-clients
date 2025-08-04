# MetricSetsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | Pointer to **int32** |  | [optional] 
**MetricNames** | Pointer to **[]string** |  | [optional] 
**RegexPatterns** | Pointer to **[]string** |  | [optional] 

## Methods

### NewMetricSetsDto

`func NewMetricSetsDto() *MetricSetsDto`

NewMetricSetsDto instantiates a new MetricSetsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricSetsDtoWithDefaults

`func NewMetricSetsDtoWithDefaults() *MetricSetsDto`

NewMetricSetsDtoWithDefaults instantiates a new MetricSetsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *MetricSetsDto) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *MetricSetsDto) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *MetricSetsDto) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *MetricSetsDto) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetMetricNames

`func (o *MetricSetsDto) GetMetricNames() []string`

GetMetricNames returns the MetricNames field if non-nil, zero value otherwise.

### GetMetricNamesOk

`func (o *MetricSetsDto) GetMetricNamesOk() (*[]string, bool)`

GetMetricNamesOk returns a tuple with the MetricNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricNames

`func (o *MetricSetsDto) SetMetricNames(v []string)`

SetMetricNames sets MetricNames field to given value.

### HasMetricNames

`func (o *MetricSetsDto) HasMetricNames() bool`

HasMetricNames returns a boolean if a field has been set.

### GetRegexPatterns

`func (o *MetricSetsDto) GetRegexPatterns() []string`

GetRegexPatterns returns the RegexPatterns field if non-nil, zero value otherwise.

### GetRegexPatternsOk

`func (o *MetricSetsDto) GetRegexPatternsOk() (*[]string, bool)`

GetRegexPatternsOk returns a tuple with the RegexPatterns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegexPatterns

`func (o *MetricSetsDto) SetRegexPatterns(v []string)`

SetRegexPatterns sets RegexPatterns field to given value.

### HasRegexPatterns

`func (o *MetricSetsDto) HasRegexPatterns() bool`

HasRegexPatterns returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


