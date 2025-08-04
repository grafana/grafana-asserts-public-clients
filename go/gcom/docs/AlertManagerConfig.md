# AlertManagerConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Global** | Pointer to [**AlertManagerGlobal**](AlertManagerGlobal.md) |  | [optional] 
**Templates** | Pointer to **[]string** |  | [optional] 
**Route** | Pointer to [**AlertManagerRoute**](AlertManagerRoute.md) |  | [optional] 
**Receivers** | Pointer to [**[]AlertManagerReceiver**](AlertManagerReceiver.md) |  | [optional] 
**InhibitRules** | Pointer to [**[]AlertManagerInhibitRule**](AlertManagerInhibitRule.md) |  | [optional] 
**MuteTimeIntervals** | Pointer to [**[]AlertManagerNamedTimeInterval**](AlertManagerNamedTimeInterval.md) |  | [optional] 
**TimeIntervals** | Pointer to [**[]AlertManagerNamedTimeInterval**](AlertManagerNamedTimeInterval.md) |  | [optional] 

## Methods

### NewAlertManagerConfig

`func NewAlertManagerConfig() *AlertManagerConfig`

NewAlertManagerConfig instantiates a new AlertManagerConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerConfigWithDefaults

`func NewAlertManagerConfigWithDefaults() *AlertManagerConfig`

NewAlertManagerConfigWithDefaults instantiates a new AlertManagerConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGlobal

`func (o *AlertManagerConfig) GetGlobal() AlertManagerGlobal`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *AlertManagerConfig) GetGlobalOk() (*AlertManagerGlobal, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *AlertManagerConfig) SetGlobal(v AlertManagerGlobal)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *AlertManagerConfig) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetTemplates

`func (o *AlertManagerConfig) GetTemplates() []string`

GetTemplates returns the Templates field if non-nil, zero value otherwise.

### GetTemplatesOk

`func (o *AlertManagerConfig) GetTemplatesOk() (*[]string, bool)`

GetTemplatesOk returns a tuple with the Templates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplates

`func (o *AlertManagerConfig) SetTemplates(v []string)`

SetTemplates sets Templates field to given value.

### HasTemplates

`func (o *AlertManagerConfig) HasTemplates() bool`

HasTemplates returns a boolean if a field has been set.

### GetRoute

`func (o *AlertManagerConfig) GetRoute() AlertManagerRoute`

GetRoute returns the Route field if non-nil, zero value otherwise.

### GetRouteOk

`func (o *AlertManagerConfig) GetRouteOk() (*AlertManagerRoute, bool)`

GetRouteOk returns a tuple with the Route field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoute

`func (o *AlertManagerConfig) SetRoute(v AlertManagerRoute)`

SetRoute sets Route field to given value.

### HasRoute

`func (o *AlertManagerConfig) HasRoute() bool`

HasRoute returns a boolean if a field has been set.

### GetReceivers

`func (o *AlertManagerConfig) GetReceivers() []AlertManagerReceiver`

GetReceivers returns the Receivers field if non-nil, zero value otherwise.

### GetReceiversOk

`func (o *AlertManagerConfig) GetReceiversOk() (*[]AlertManagerReceiver, bool)`

GetReceiversOk returns a tuple with the Receivers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceivers

`func (o *AlertManagerConfig) SetReceivers(v []AlertManagerReceiver)`

SetReceivers sets Receivers field to given value.

### HasReceivers

`func (o *AlertManagerConfig) HasReceivers() bool`

HasReceivers returns a boolean if a field has been set.

### GetInhibitRules

`func (o *AlertManagerConfig) GetInhibitRules() []AlertManagerInhibitRule`

GetInhibitRules returns the InhibitRules field if non-nil, zero value otherwise.

### GetInhibitRulesOk

`func (o *AlertManagerConfig) GetInhibitRulesOk() (*[]AlertManagerInhibitRule, bool)`

GetInhibitRulesOk returns a tuple with the InhibitRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInhibitRules

`func (o *AlertManagerConfig) SetInhibitRules(v []AlertManagerInhibitRule)`

SetInhibitRules sets InhibitRules field to given value.

### HasInhibitRules

`func (o *AlertManagerConfig) HasInhibitRules() bool`

HasInhibitRules returns a boolean if a field has been set.

### GetMuteTimeIntervals

`func (o *AlertManagerConfig) GetMuteTimeIntervals() []AlertManagerNamedTimeInterval`

GetMuteTimeIntervals returns the MuteTimeIntervals field if non-nil, zero value otherwise.

### GetMuteTimeIntervalsOk

`func (o *AlertManagerConfig) GetMuteTimeIntervalsOk() (*[]AlertManagerNamedTimeInterval, bool)`

GetMuteTimeIntervalsOk returns a tuple with the MuteTimeIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMuteTimeIntervals

`func (o *AlertManagerConfig) SetMuteTimeIntervals(v []AlertManagerNamedTimeInterval)`

SetMuteTimeIntervals sets MuteTimeIntervals field to given value.

### HasMuteTimeIntervals

`func (o *AlertManagerConfig) HasMuteTimeIntervals() bool`

HasMuteTimeIntervals returns a boolean if a field has been set.

### GetTimeIntervals

`func (o *AlertManagerConfig) GetTimeIntervals() []AlertManagerNamedTimeInterval`

GetTimeIntervals returns the TimeIntervals field if non-nil, zero value otherwise.

### GetTimeIntervalsOk

`func (o *AlertManagerConfig) GetTimeIntervalsOk() (*[]AlertManagerNamedTimeInterval, bool)`

GetTimeIntervalsOk returns a tuple with the TimeIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeIntervals

`func (o *AlertManagerConfig) SetTimeIntervals(v []AlertManagerNamedTimeInterval)`

SetTimeIntervals sets TimeIntervals field to given value.

### HasTimeIntervals

`func (o *AlertManagerConfig) HasTimeIntervals() bool`

HasTimeIntervals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


