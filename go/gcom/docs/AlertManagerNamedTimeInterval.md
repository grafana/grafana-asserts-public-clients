# AlertManagerNamedTimeInterval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**TimeIntervals** | Pointer to [**[]AlertManagerTimeInterval**](AlertManagerTimeInterval.md) |  | [optional] 

## Methods

### NewAlertManagerNamedTimeInterval

`func NewAlertManagerNamedTimeInterval() *AlertManagerNamedTimeInterval`

NewAlertManagerNamedTimeInterval instantiates a new AlertManagerNamedTimeInterval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerNamedTimeIntervalWithDefaults

`func NewAlertManagerNamedTimeIntervalWithDefaults() *AlertManagerNamedTimeInterval`

NewAlertManagerNamedTimeIntervalWithDefaults instantiates a new AlertManagerNamedTimeInterval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AlertManagerNamedTimeInterval) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AlertManagerNamedTimeInterval) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AlertManagerNamedTimeInterval) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AlertManagerNamedTimeInterval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTimeIntervals

`func (o *AlertManagerNamedTimeInterval) GetTimeIntervals() []AlertManagerTimeInterval`

GetTimeIntervals returns the TimeIntervals field if non-nil, zero value otherwise.

### GetTimeIntervalsOk

`func (o *AlertManagerNamedTimeInterval) GetTimeIntervalsOk() (*[]AlertManagerTimeInterval, bool)`

GetTimeIntervalsOk returns a tuple with the TimeIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeIntervals

`func (o *AlertManagerNamedTimeInterval) SetTimeIntervals(v []AlertManagerTimeInterval)`

SetTimeIntervals sets TimeIntervals field to given value.

### HasTimeIntervals

`func (o *AlertManagerNamedTimeInterval) HasTimeIntervals() bool`

HasTimeIntervals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


