# AssertionScoreRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartMs** | Pointer to **int64** |  | [optional] 
**EndMs** | Pointer to **int64** |  | [optional] 
**HideAssertionsOlderThanNHours** | Pointer to **int32** |  | [optional] 
**AlertCategories** | Pointer to **[]string** |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**HideAssertionsPresentMoreThanPercentageOfTime** | Pointer to **int32** |  | [optional] 

## Methods

### NewAssertionScoreRequestDto

`func NewAssertionScoreRequestDto() *AssertionScoreRequestDto`

NewAssertionScoreRequestDto instantiates a new AssertionScoreRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionScoreRequestDtoWithDefaults

`func NewAssertionScoreRequestDtoWithDefaults() *AssertionScoreRequestDto`

NewAssertionScoreRequestDtoWithDefaults instantiates a new AssertionScoreRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartMs

`func (o *AssertionScoreRequestDto) GetStartMs() int64`

GetStartMs returns the StartMs field if non-nil, zero value otherwise.

### GetStartMsOk

`func (o *AssertionScoreRequestDto) GetStartMsOk() (*int64, bool)`

GetStartMsOk returns a tuple with the StartMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartMs

`func (o *AssertionScoreRequestDto) SetStartMs(v int64)`

SetStartMs sets StartMs field to given value.

### HasStartMs

`func (o *AssertionScoreRequestDto) HasStartMs() bool`

HasStartMs returns a boolean if a field has been set.

### GetEndMs

`func (o *AssertionScoreRequestDto) GetEndMs() int64`

GetEndMs returns the EndMs field if non-nil, zero value otherwise.

### GetEndMsOk

`func (o *AssertionScoreRequestDto) GetEndMsOk() (*int64, bool)`

GetEndMsOk returns a tuple with the EndMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndMs

`func (o *AssertionScoreRequestDto) SetEndMs(v int64)`

SetEndMs sets EndMs field to given value.

### HasEndMs

`func (o *AssertionScoreRequestDto) HasEndMs() bool`

HasEndMs returns a boolean if a field has been set.

### GetHideAssertionsOlderThanNHours

`func (o *AssertionScoreRequestDto) GetHideAssertionsOlderThanNHours() int32`

GetHideAssertionsOlderThanNHours returns the HideAssertionsOlderThanNHours field if non-nil, zero value otherwise.

### GetHideAssertionsOlderThanNHoursOk

`func (o *AssertionScoreRequestDto) GetHideAssertionsOlderThanNHoursOk() (*int32, bool)`

GetHideAssertionsOlderThanNHoursOk returns a tuple with the HideAssertionsOlderThanNHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsOlderThanNHours

`func (o *AssertionScoreRequestDto) SetHideAssertionsOlderThanNHours(v int32)`

SetHideAssertionsOlderThanNHours sets HideAssertionsOlderThanNHours field to given value.

### HasHideAssertionsOlderThanNHours

`func (o *AssertionScoreRequestDto) HasHideAssertionsOlderThanNHours() bool`

HasHideAssertionsOlderThanNHours returns a boolean if a field has been set.

### GetAlertCategories

`func (o *AssertionScoreRequestDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *AssertionScoreRequestDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *AssertionScoreRequestDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *AssertionScoreRequestDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *AssertionScoreRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *AssertionScoreRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *AssertionScoreRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *AssertionScoreRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionScoreRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTime() int32`

GetHideAssertionsPresentMoreThanPercentageOfTime returns the HideAssertionsPresentMoreThanPercentageOfTime field if non-nil, zero value otherwise.

### GetHideAssertionsPresentMoreThanPercentageOfTimeOk

`func (o *AssertionScoreRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTimeOk() (*int32, bool)`

GetHideAssertionsPresentMoreThanPercentageOfTimeOk returns a tuple with the HideAssertionsPresentMoreThanPercentageOfTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionScoreRequestDto) SetHideAssertionsPresentMoreThanPercentageOfTime(v int32)`

SetHideAssertionsPresentMoreThanPercentageOfTime sets HideAssertionsPresentMoreThanPercentageOfTime field to given value.

### HasHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionScoreRequestDto) HasHideAssertionsPresentMoreThanPercentageOfTime() bool`

HasHideAssertionsPresentMoreThanPercentageOfTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


