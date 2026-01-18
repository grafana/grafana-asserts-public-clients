# AlertManagerRoute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Receiver** | Pointer to **string** |  | [optional] 
**Match** | Pointer to **map[string]string** |  | [optional] 
**Matchers** | Pointer to **[]string** |  | [optional] 
**Routes** | Pointer to [**[]AlertManagerRoute**](AlertManagerRoute.md) |  | [optional] 
**GroupBy** | Pointer to **[]string** |  | [optional] 
**Continue** | Pointer to **bool** |  | [optional] 
**MatchRe** | Pointer to **map[string]string** |  | [optional] 
**GroupWait** | Pointer to **string** |  | [optional] 
**GroupInterval** | Pointer to **string** |  | [optional] 
**RepeatInterval** | Pointer to **string** |  | [optional] 
**MuteTimeIntervals** | Pointer to **[]string** |  | [optional] 
**ActiveTimeIntervals** | Pointer to **[]string** |  | [optional] 

## Methods

### NewAlertManagerRoute

`func NewAlertManagerRoute() *AlertManagerRoute`

NewAlertManagerRoute instantiates a new AlertManagerRoute object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerRouteWithDefaults

`func NewAlertManagerRouteWithDefaults() *AlertManagerRoute`

NewAlertManagerRouteWithDefaults instantiates a new AlertManagerRoute object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReceiver

`func (o *AlertManagerRoute) GetReceiver() string`

GetReceiver returns the Receiver field if non-nil, zero value otherwise.

### GetReceiverOk

`func (o *AlertManagerRoute) GetReceiverOk() (*string, bool)`

GetReceiverOk returns a tuple with the Receiver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiver

`func (o *AlertManagerRoute) SetReceiver(v string)`

SetReceiver sets Receiver field to given value.

### HasReceiver

`func (o *AlertManagerRoute) HasReceiver() bool`

HasReceiver returns a boolean if a field has been set.

### GetMatch

`func (o *AlertManagerRoute) GetMatch() map[string]string`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *AlertManagerRoute) GetMatchOk() (*map[string]string, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *AlertManagerRoute) SetMatch(v map[string]string)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *AlertManagerRoute) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetMatchers

`func (o *AlertManagerRoute) GetMatchers() []string`

GetMatchers returns the Matchers field if non-nil, zero value otherwise.

### GetMatchersOk

`func (o *AlertManagerRoute) GetMatchersOk() (*[]string, bool)`

GetMatchersOk returns a tuple with the Matchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchers

`func (o *AlertManagerRoute) SetMatchers(v []string)`

SetMatchers sets Matchers field to given value.

### HasMatchers

`func (o *AlertManagerRoute) HasMatchers() bool`

HasMatchers returns a boolean if a field has been set.

### GetRoutes

`func (o *AlertManagerRoute) GetRoutes() []AlertManagerRoute`

GetRoutes returns the Routes field if non-nil, zero value otherwise.

### GetRoutesOk

`func (o *AlertManagerRoute) GetRoutesOk() (*[]AlertManagerRoute, bool)`

GetRoutesOk returns a tuple with the Routes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutes

`func (o *AlertManagerRoute) SetRoutes(v []AlertManagerRoute)`

SetRoutes sets Routes field to given value.

### HasRoutes

`func (o *AlertManagerRoute) HasRoutes() bool`

HasRoutes returns a boolean if a field has been set.

### GetGroupBy

`func (o *AlertManagerRoute) GetGroupBy() []string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *AlertManagerRoute) GetGroupByOk() (*[]string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *AlertManagerRoute) SetGroupBy(v []string)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *AlertManagerRoute) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.

### GetContinue

`func (o *AlertManagerRoute) GetContinue() bool`

GetContinue returns the Continue field if non-nil, zero value otherwise.

### GetContinueOk

`func (o *AlertManagerRoute) GetContinueOk() (*bool, bool)`

GetContinueOk returns a tuple with the Continue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContinue

`func (o *AlertManagerRoute) SetContinue(v bool)`

SetContinue sets Continue field to given value.

### HasContinue

`func (o *AlertManagerRoute) HasContinue() bool`

HasContinue returns a boolean if a field has been set.

### GetMatchRe

`func (o *AlertManagerRoute) GetMatchRe() map[string]string`

GetMatchRe returns the MatchRe field if non-nil, zero value otherwise.

### GetMatchReOk

`func (o *AlertManagerRoute) GetMatchReOk() (*map[string]string, bool)`

GetMatchReOk returns a tuple with the MatchRe field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchRe

`func (o *AlertManagerRoute) SetMatchRe(v map[string]string)`

SetMatchRe sets MatchRe field to given value.

### HasMatchRe

`func (o *AlertManagerRoute) HasMatchRe() bool`

HasMatchRe returns a boolean if a field has been set.

### GetGroupWait

`func (o *AlertManagerRoute) GetGroupWait() string`

GetGroupWait returns the GroupWait field if non-nil, zero value otherwise.

### GetGroupWaitOk

`func (o *AlertManagerRoute) GetGroupWaitOk() (*string, bool)`

GetGroupWaitOk returns a tuple with the GroupWait field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupWait

`func (o *AlertManagerRoute) SetGroupWait(v string)`

SetGroupWait sets GroupWait field to given value.

### HasGroupWait

`func (o *AlertManagerRoute) HasGroupWait() bool`

HasGroupWait returns a boolean if a field has been set.

### GetGroupInterval

`func (o *AlertManagerRoute) GetGroupInterval() string`

GetGroupInterval returns the GroupInterval field if non-nil, zero value otherwise.

### GetGroupIntervalOk

`func (o *AlertManagerRoute) GetGroupIntervalOk() (*string, bool)`

GetGroupIntervalOk returns a tuple with the GroupInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupInterval

`func (o *AlertManagerRoute) SetGroupInterval(v string)`

SetGroupInterval sets GroupInterval field to given value.

### HasGroupInterval

`func (o *AlertManagerRoute) HasGroupInterval() bool`

HasGroupInterval returns a boolean if a field has been set.

### GetRepeatInterval

`func (o *AlertManagerRoute) GetRepeatInterval() string`

GetRepeatInterval returns the RepeatInterval field if non-nil, zero value otherwise.

### GetRepeatIntervalOk

`func (o *AlertManagerRoute) GetRepeatIntervalOk() (*string, bool)`

GetRepeatIntervalOk returns a tuple with the RepeatInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatInterval

`func (o *AlertManagerRoute) SetRepeatInterval(v string)`

SetRepeatInterval sets RepeatInterval field to given value.

### HasRepeatInterval

`func (o *AlertManagerRoute) HasRepeatInterval() bool`

HasRepeatInterval returns a boolean if a field has been set.

### GetMuteTimeIntervals

`func (o *AlertManagerRoute) GetMuteTimeIntervals() []string`

GetMuteTimeIntervals returns the MuteTimeIntervals field if non-nil, zero value otherwise.

### GetMuteTimeIntervalsOk

`func (o *AlertManagerRoute) GetMuteTimeIntervalsOk() (*[]string, bool)`

GetMuteTimeIntervalsOk returns a tuple with the MuteTimeIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMuteTimeIntervals

`func (o *AlertManagerRoute) SetMuteTimeIntervals(v []string)`

SetMuteTimeIntervals sets MuteTimeIntervals field to given value.

### HasMuteTimeIntervals

`func (o *AlertManagerRoute) HasMuteTimeIntervals() bool`

HasMuteTimeIntervals returns a boolean if a field has been set.

### GetActiveTimeIntervals

`func (o *AlertManagerRoute) GetActiveTimeIntervals() []string`

GetActiveTimeIntervals returns the ActiveTimeIntervals field if non-nil, zero value otherwise.

### GetActiveTimeIntervalsOk

`func (o *AlertManagerRoute) GetActiveTimeIntervalsOk() (*[]string, bool)`

GetActiveTimeIntervalsOk returns a tuple with the ActiveTimeIntervals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveTimeIntervals

`func (o *AlertManagerRoute) SetActiveTimeIntervals(v []string)`

SetActiveTimeIntervals sets ActiveTimeIntervals field to given value.

### HasActiveTimeIntervals

`func (o *AlertManagerRoute) HasActiveTimeIntervals() bool`

HasActiveTimeIntervals returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


