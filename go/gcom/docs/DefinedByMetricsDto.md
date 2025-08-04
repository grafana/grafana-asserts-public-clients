# DefinedByMetricsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pattern** | Pointer to **string** |  | [optional] 
**StartEntityMatchers** | Pointer to **map[string]string** |  | [optional] 
**EndEntityMatchers** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewDefinedByMetricsDto

`func NewDefinedByMetricsDto() *DefinedByMetricsDto`

NewDefinedByMetricsDto instantiates a new DefinedByMetricsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefinedByMetricsDtoWithDefaults

`func NewDefinedByMetricsDtoWithDefaults() *DefinedByMetricsDto`

NewDefinedByMetricsDtoWithDefaults instantiates a new DefinedByMetricsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPattern

`func (o *DefinedByMetricsDto) GetPattern() string`

GetPattern returns the Pattern field if non-nil, zero value otherwise.

### GetPatternOk

`func (o *DefinedByMetricsDto) GetPatternOk() (*string, bool)`

GetPatternOk returns a tuple with the Pattern field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPattern

`func (o *DefinedByMetricsDto) SetPattern(v string)`

SetPattern sets Pattern field to given value.

### HasPattern

`func (o *DefinedByMetricsDto) HasPattern() bool`

HasPattern returns a boolean if a field has been set.

### GetStartEntityMatchers

`func (o *DefinedByMetricsDto) GetStartEntityMatchers() map[string]string`

GetStartEntityMatchers returns the StartEntityMatchers field if non-nil, zero value otherwise.

### GetStartEntityMatchersOk

`func (o *DefinedByMetricsDto) GetStartEntityMatchersOk() (*map[string]string, bool)`

GetStartEntityMatchersOk returns a tuple with the StartEntityMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartEntityMatchers

`func (o *DefinedByMetricsDto) SetStartEntityMatchers(v map[string]string)`

SetStartEntityMatchers sets StartEntityMatchers field to given value.

### HasStartEntityMatchers

`func (o *DefinedByMetricsDto) HasStartEntityMatchers() bool`

HasStartEntityMatchers returns a boolean if a field has been set.

### GetEndEntityMatchers

`func (o *DefinedByMetricsDto) GetEndEntityMatchers() map[string]string`

GetEndEntityMatchers returns the EndEntityMatchers field if non-nil, zero value otherwise.

### GetEndEntityMatchersOk

`func (o *DefinedByMetricsDto) GetEndEntityMatchersOk() (*map[string]string, bool)`

GetEndEntityMatchersOk returns a tuple with the EndEntityMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndEntityMatchers

`func (o *DefinedByMetricsDto) SetEndEntityMatchers(v map[string]string)`

SetEndEntityMatchers sets EndEntityMatchers field to given value.

### HasEndEntityMatchers

`func (o *DefinedByMetricsDto) HasEndEntityMatchers() bool`

HasEndEntityMatchers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


