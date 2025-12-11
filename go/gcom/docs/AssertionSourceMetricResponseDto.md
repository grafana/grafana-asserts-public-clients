# AssertionSourceMetricResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetricName** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to [**[]AssertionSourceMetricLabelDto**](AssertionSourceMetricLabelDto.md) |  | [optional] 

## Methods

### NewAssertionSourceMetricResponseDto

`func NewAssertionSourceMetricResponseDto() *AssertionSourceMetricResponseDto`

NewAssertionSourceMetricResponseDto instantiates a new AssertionSourceMetricResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionSourceMetricResponseDtoWithDefaults

`func NewAssertionSourceMetricResponseDtoWithDefaults() *AssertionSourceMetricResponseDto`

NewAssertionSourceMetricResponseDtoWithDefaults instantiates a new AssertionSourceMetricResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetricName

`func (o *AssertionSourceMetricResponseDto) GetMetricName() string`

GetMetricName returns the MetricName field if non-nil, zero value otherwise.

### GetMetricNameOk

`func (o *AssertionSourceMetricResponseDto) GetMetricNameOk() (*string, bool)`

GetMetricNameOk returns a tuple with the MetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricName

`func (o *AssertionSourceMetricResponseDto) SetMetricName(v string)`

SetMetricName sets MetricName field to given value.

### HasMetricName

`func (o *AssertionSourceMetricResponseDto) HasMetricName() bool`

HasMetricName returns a boolean if a field has been set.

### GetLabels

`func (o *AssertionSourceMetricResponseDto) GetLabels() []AssertionSourceMetricLabelDto`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *AssertionSourceMetricResponseDto) GetLabelsOk() (*[]AssertionSourceMetricLabelDto, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *AssertionSourceMetricResponseDto) SetLabels(v []AssertionSourceMetricLabelDto)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *AssertionSourceMetricResponseDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


