# AssertionsRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | Pointer to **int64** |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**EntityKeys** | Pointer to [**[]EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**IncludeConnectedAssertions** | Pointer to **bool** |  | [optional] 
**AlertCategories** | Pointer to **[]string** |  | [optional] 
**Severities** | Pointer to **[]string** |  | [optional] 
**HideAssertionsOlderThanNHours** | Pointer to **int32** |  | [optional] 
**HideAssertionsPresentMoreThanPercentageOfTime** | Pointer to **int32** |  | [optional] 

## Methods

### NewAssertionsRequestDto

`func NewAssertionsRequestDto() *AssertionsRequestDto`

NewAssertionsRequestDto instantiates a new AssertionsRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionsRequestDtoWithDefaults

`func NewAssertionsRequestDtoWithDefaults() *AssertionsRequestDto`

NewAssertionsRequestDtoWithDefaults instantiates a new AssertionsRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTime

`func (o *AssertionsRequestDto) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *AssertionsRequestDto) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *AssertionsRequestDto) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *AssertionsRequestDto) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *AssertionsRequestDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *AssertionsRequestDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *AssertionsRequestDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *AssertionsRequestDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetEntityKeys

`func (o *AssertionsRequestDto) GetEntityKeys() []EntityKeyDto`

GetEntityKeys returns the EntityKeys field if non-nil, zero value otherwise.

### GetEntityKeysOk

`func (o *AssertionsRequestDto) GetEntityKeysOk() (*[]EntityKeyDto, bool)`

GetEntityKeysOk returns a tuple with the EntityKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKeys

`func (o *AssertionsRequestDto) SetEntityKeys(v []EntityKeyDto)`

SetEntityKeys sets EntityKeys field to given value.

### HasEntityKeys

`func (o *AssertionsRequestDto) HasEntityKeys() bool`

HasEntityKeys returns a boolean if a field has been set.

### GetIncludeConnectedAssertions

`func (o *AssertionsRequestDto) GetIncludeConnectedAssertions() bool`

GetIncludeConnectedAssertions returns the IncludeConnectedAssertions field if non-nil, zero value otherwise.

### GetIncludeConnectedAssertionsOk

`func (o *AssertionsRequestDto) GetIncludeConnectedAssertionsOk() (*bool, bool)`

GetIncludeConnectedAssertionsOk returns a tuple with the IncludeConnectedAssertions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeConnectedAssertions

`func (o *AssertionsRequestDto) SetIncludeConnectedAssertions(v bool)`

SetIncludeConnectedAssertions sets IncludeConnectedAssertions field to given value.

### HasIncludeConnectedAssertions

`func (o *AssertionsRequestDto) HasIncludeConnectedAssertions() bool`

HasIncludeConnectedAssertions returns a boolean if a field has been set.

### GetAlertCategories

`func (o *AssertionsRequestDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *AssertionsRequestDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *AssertionsRequestDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *AssertionsRequestDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.

### GetSeverities

`func (o *AssertionsRequestDto) GetSeverities() []string`

GetSeverities returns the Severities field if non-nil, zero value otherwise.

### GetSeveritiesOk

`func (o *AssertionsRequestDto) GetSeveritiesOk() (*[]string, bool)`

GetSeveritiesOk returns a tuple with the Severities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverities

`func (o *AssertionsRequestDto) SetSeverities(v []string)`

SetSeverities sets Severities field to given value.

### HasSeverities

`func (o *AssertionsRequestDto) HasSeverities() bool`

HasSeverities returns a boolean if a field has been set.

### GetHideAssertionsOlderThanNHours

`func (o *AssertionsRequestDto) GetHideAssertionsOlderThanNHours() int32`

GetHideAssertionsOlderThanNHours returns the HideAssertionsOlderThanNHours field if non-nil, zero value otherwise.

### GetHideAssertionsOlderThanNHoursOk

`func (o *AssertionsRequestDto) GetHideAssertionsOlderThanNHoursOk() (*int32, bool)`

GetHideAssertionsOlderThanNHoursOk returns a tuple with the HideAssertionsOlderThanNHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsOlderThanNHours

`func (o *AssertionsRequestDto) SetHideAssertionsOlderThanNHours(v int32)`

SetHideAssertionsOlderThanNHours sets HideAssertionsOlderThanNHours field to given value.

### HasHideAssertionsOlderThanNHours

`func (o *AssertionsRequestDto) HasHideAssertionsOlderThanNHours() bool`

HasHideAssertionsOlderThanNHours returns a boolean if a field has been set.

### GetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionsRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTime() int32`

GetHideAssertionsPresentMoreThanPercentageOfTime returns the HideAssertionsPresentMoreThanPercentageOfTime field if non-nil, zero value otherwise.

### GetHideAssertionsPresentMoreThanPercentageOfTimeOk

`func (o *AssertionsRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTimeOk() (*int32, bool)`

GetHideAssertionsPresentMoreThanPercentageOfTimeOk returns a tuple with the HideAssertionsPresentMoreThanPercentageOfTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionsRequestDto) SetHideAssertionsPresentMoreThanPercentageOfTime(v int32)`

SetHideAssertionsPresentMoreThanPercentageOfTime sets HideAssertionsPresentMoreThanPercentageOfTime field to given value.

### HasHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionsRequestDto) HasHideAssertionsPresentMoreThanPercentageOfTime() bool`

HasHideAssertionsPresentMoreThanPercentageOfTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


