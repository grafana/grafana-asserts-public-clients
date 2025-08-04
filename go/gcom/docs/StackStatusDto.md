# StackStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** |  | [optional] 
**DisabledTime** | Pointer to **time.Time** |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] 
**AlertManagerConfigured** | Pointer to **bool** |  | [optional] 
**GraphInstanceCreated** | Pointer to **bool** |  | [optional] 
**SanityCheckResults** | Pointer to [**[]MetricSanityCheckResult**](MetricSanityCheckResult.md) |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewStackStatusDto

`func NewStackStatusDto() *StackStatusDto`

NewStackStatusDto instantiates a new StackStatusDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackStatusDtoWithDefaults

`func NewStackStatusDtoWithDefaults() *StackStatusDto`

NewStackStatusDtoWithDefaults instantiates a new StackStatusDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *StackStatusDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StackStatusDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StackStatusDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StackStatusDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDisabledTime

`func (o *StackStatusDto) GetDisabledTime() time.Time`

GetDisabledTime returns the DisabledTime field if non-nil, zero value otherwise.

### GetDisabledTimeOk

`func (o *StackStatusDto) GetDisabledTimeOk() (*time.Time, bool)`

GetDisabledTimeOk returns a tuple with the DisabledTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabledTime

`func (o *StackStatusDto) SetDisabledTime(v time.Time)`

SetDisabledTime sets DisabledTime field to given value.

### HasDisabledTime

`func (o *StackStatusDto) HasDisabledTime() bool`

HasDisabledTime returns a boolean if a field has been set.

### GetEnabled

`func (o *StackStatusDto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *StackStatusDto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *StackStatusDto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *StackStatusDto) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetAlertManagerConfigured

`func (o *StackStatusDto) GetAlertManagerConfigured() bool`

GetAlertManagerConfigured returns the AlertManagerConfigured field if non-nil, zero value otherwise.

### GetAlertManagerConfiguredOk

`func (o *StackStatusDto) GetAlertManagerConfiguredOk() (*bool, bool)`

GetAlertManagerConfiguredOk returns a tuple with the AlertManagerConfigured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertManagerConfigured

`func (o *StackStatusDto) SetAlertManagerConfigured(v bool)`

SetAlertManagerConfigured sets AlertManagerConfigured field to given value.

### HasAlertManagerConfigured

`func (o *StackStatusDto) HasAlertManagerConfigured() bool`

HasAlertManagerConfigured returns a boolean if a field has been set.

### GetGraphInstanceCreated

`func (o *StackStatusDto) GetGraphInstanceCreated() bool`

GetGraphInstanceCreated returns the GraphInstanceCreated field if non-nil, zero value otherwise.

### GetGraphInstanceCreatedOk

`func (o *StackStatusDto) GetGraphInstanceCreatedOk() (*bool, bool)`

GetGraphInstanceCreatedOk returns a tuple with the GraphInstanceCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphInstanceCreated

`func (o *StackStatusDto) SetGraphInstanceCreated(v bool)`

SetGraphInstanceCreated sets GraphInstanceCreated field to given value.

### HasGraphInstanceCreated

`func (o *StackStatusDto) HasGraphInstanceCreated() bool`

HasGraphInstanceCreated returns a boolean if a field has been set.

### GetSanityCheckResults

`func (o *StackStatusDto) GetSanityCheckResults() []MetricSanityCheckResult`

GetSanityCheckResults returns the SanityCheckResults field if non-nil, zero value otherwise.

### GetSanityCheckResultsOk

`func (o *StackStatusDto) GetSanityCheckResultsOk() (*[]MetricSanityCheckResult, bool)`

GetSanityCheckResultsOk returns a tuple with the SanityCheckResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSanityCheckResults

`func (o *StackStatusDto) SetSanityCheckResults(v []MetricSanityCheckResult)`

SetSanityCheckResults sets SanityCheckResults field to given value.

### HasSanityCheckResults

`func (o *StackStatusDto) HasSanityCheckResults() bool`

HasSanityCheckResults returns a boolean if a field has been set.

### GetVersion

`func (o *StackStatusDto) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *StackStatusDto) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *StackStatusDto) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *StackStatusDto) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


