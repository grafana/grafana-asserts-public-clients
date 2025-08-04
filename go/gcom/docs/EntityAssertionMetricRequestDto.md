# EntityAssertionMetricRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | Pointer to **int64** |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 
**ReferenceForThreshold** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityAssertionMetricRequestDto

`func NewEntityAssertionMetricRequestDto() *EntityAssertionMetricRequestDto`

NewEntityAssertionMetricRequestDto instantiates a new EntityAssertionMetricRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionMetricRequestDtoWithDefaults

`func NewEntityAssertionMetricRequestDtoWithDefaults() *EntityAssertionMetricRequestDto`

NewEntityAssertionMetricRequestDtoWithDefaults instantiates a new EntityAssertionMetricRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTime

`func (o *EntityAssertionMetricRequestDto) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *EntityAssertionMetricRequestDto) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *EntityAssertionMetricRequestDto) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *EntityAssertionMetricRequestDto) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *EntityAssertionMetricRequestDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *EntityAssertionMetricRequestDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *EntityAssertionMetricRequestDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *EntityAssertionMetricRequestDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetLabels

`func (o *EntityAssertionMetricRequestDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *EntityAssertionMetricRequestDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *EntityAssertionMetricRequestDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *EntityAssertionMetricRequestDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetReferenceForThreshold

`func (o *EntityAssertionMetricRequestDto) GetReferenceForThreshold() bool`

GetReferenceForThreshold returns the ReferenceForThreshold field if non-nil, zero value otherwise.

### GetReferenceForThresholdOk

`func (o *EntityAssertionMetricRequestDto) GetReferenceForThresholdOk() (*bool, bool)`

GetReferenceForThresholdOk returns a tuple with the ReferenceForThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceForThreshold

`func (o *EntityAssertionMetricRequestDto) SetReferenceForThreshold(v bool)`

SetReferenceForThreshold sets ReferenceForThreshold field to given value.

### HasReferenceForThreshold

`func (o *EntityAssertionMetricRequestDto) HasReferenceForThreshold() bool`

HasReferenceForThreshold returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


