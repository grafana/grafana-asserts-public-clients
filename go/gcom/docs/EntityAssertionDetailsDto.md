# EntityAssertionDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeWindow** | Pointer to [**TimeWindowDto**](TimeWindowDto.md) |  | [optional] 
**TimeStepIntervalMs** | Pointer to **int64** |  | [optional] 
**Thresholds** | Pointer to [**[]EntityAssertionDetailsDtoThresholdsInner**](EntityAssertionDetailsDtoThresholdsInner.md) |  | [optional] 
**Metrics** | Pointer to [**[]MetricDto**](MetricDto.md) |  | [optional] 
**NotificationRuleName** | Pointer to **string** |  | [optional] 

## Methods

### NewEntityAssertionDetailsDto

`func NewEntityAssertionDetailsDto() *EntityAssertionDetailsDto`

NewEntityAssertionDetailsDto instantiates a new EntityAssertionDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionDetailsDtoWithDefaults

`func NewEntityAssertionDetailsDtoWithDefaults() *EntityAssertionDetailsDto`

NewEntityAssertionDetailsDtoWithDefaults instantiates a new EntityAssertionDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeWindow

`func (o *EntityAssertionDetailsDto) GetTimeWindow() TimeWindowDto`

GetTimeWindow returns the TimeWindow field if non-nil, zero value otherwise.

### GetTimeWindowOk

`func (o *EntityAssertionDetailsDto) GetTimeWindowOk() (*TimeWindowDto, bool)`

GetTimeWindowOk returns a tuple with the TimeWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeWindow

`func (o *EntityAssertionDetailsDto) SetTimeWindow(v TimeWindowDto)`

SetTimeWindow sets TimeWindow field to given value.

### HasTimeWindow

`func (o *EntityAssertionDetailsDto) HasTimeWindow() bool`

HasTimeWindow returns a boolean if a field has been set.

### GetTimeStepIntervalMs

`func (o *EntityAssertionDetailsDto) GetTimeStepIntervalMs() int64`

GetTimeStepIntervalMs returns the TimeStepIntervalMs field if non-nil, zero value otherwise.

### GetTimeStepIntervalMsOk

`func (o *EntityAssertionDetailsDto) GetTimeStepIntervalMsOk() (*int64, bool)`

GetTimeStepIntervalMsOk returns a tuple with the TimeStepIntervalMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStepIntervalMs

`func (o *EntityAssertionDetailsDto) SetTimeStepIntervalMs(v int64)`

SetTimeStepIntervalMs sets TimeStepIntervalMs field to given value.

### HasTimeStepIntervalMs

`func (o *EntityAssertionDetailsDto) HasTimeStepIntervalMs() bool`

HasTimeStepIntervalMs returns a boolean if a field has been set.

### GetThresholds

`func (o *EntityAssertionDetailsDto) GetThresholds() []EntityAssertionDetailsDtoThresholdsInner`

GetThresholds returns the Thresholds field if non-nil, zero value otherwise.

### GetThresholdsOk

`func (o *EntityAssertionDetailsDto) GetThresholdsOk() (*[]EntityAssertionDetailsDtoThresholdsInner, bool)`

GetThresholdsOk returns a tuple with the Thresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThresholds

`func (o *EntityAssertionDetailsDto) SetThresholds(v []EntityAssertionDetailsDtoThresholdsInner)`

SetThresholds sets Thresholds field to given value.

### HasThresholds

`func (o *EntityAssertionDetailsDto) HasThresholds() bool`

HasThresholds returns a boolean if a field has been set.

### GetMetrics

`func (o *EntityAssertionDetailsDto) GetMetrics() []MetricDto`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *EntityAssertionDetailsDto) GetMetricsOk() (*[]MetricDto, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *EntityAssertionDetailsDto) SetMetrics(v []MetricDto)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *EntityAssertionDetailsDto) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.

### GetNotificationRuleName

`func (o *EntityAssertionDetailsDto) GetNotificationRuleName() string`

GetNotificationRuleName returns the NotificationRuleName field if non-nil, zero value otherwise.

### GetNotificationRuleNameOk

`func (o *EntityAssertionDetailsDto) GetNotificationRuleNameOk() (*string, bool)`

GetNotificationRuleNameOk returns a tuple with the NotificationRuleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationRuleName

`func (o *EntityAssertionDetailsDto) SetNotificationRuleName(v string)`

SetNotificationRuleName sets NotificationRuleName field to given value.

### HasNotificationRuleName

`func (o *EntityAssertionDetailsDto) HasNotificationRuleName() bool`

HasNotificationRuleName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


