# AssertionInfoDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Group** | Pointer to **string** |  | [optional] 
**Expression** | Pointer to **string** |  | [optional] 
**Interval** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 
**Metrics** | Pointer to [**[]AssertionMetricDetailDto**](AssertionMetricDetailDto.md) |  | [optional] 

## Methods

### NewAssertionInfoDto

`func NewAssertionInfoDto() *AssertionInfoDto`

NewAssertionInfoDto instantiates a new AssertionInfoDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionInfoDtoWithDefaults

`func NewAssertionInfoDtoWithDefaults() *AssertionInfoDto`

NewAssertionInfoDtoWithDefaults instantiates a new AssertionInfoDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AssertionInfoDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssertionInfoDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssertionInfoDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AssertionInfoDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *AssertionInfoDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AssertionInfoDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AssertionInfoDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AssertionInfoDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGroup

`func (o *AssertionInfoDto) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *AssertionInfoDto) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *AssertionInfoDto) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *AssertionInfoDto) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetExpression

`func (o *AssertionInfoDto) GetExpression() string`

GetExpression returns the Expression field if non-nil, zero value otherwise.

### GetExpressionOk

`func (o *AssertionInfoDto) GetExpressionOk() (*string, bool)`

GetExpressionOk returns a tuple with the Expression field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpression

`func (o *AssertionInfoDto) SetExpression(v string)`

SetExpression sets Expression field to given value.

### HasExpression

`func (o *AssertionInfoDto) HasExpression() bool`

HasExpression returns a boolean if a field has been set.

### GetInterval

`func (o *AssertionInfoDto) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *AssertionInfoDto) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *AssertionInfoDto) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *AssertionInfoDto) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetLabels

`func (o *AssertionInfoDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *AssertionInfoDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *AssertionInfoDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *AssertionInfoDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetMetrics

`func (o *AssertionInfoDto) GetMetrics() []AssertionMetricDetailDto`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *AssertionInfoDto) GetMetricsOk() (*[]AssertionMetricDetailDto, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *AssertionInfoDto) SetMetrics(v []AssertionMetricDetailDto)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *AssertionInfoDto) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


