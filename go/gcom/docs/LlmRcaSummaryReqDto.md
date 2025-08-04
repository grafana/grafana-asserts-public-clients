# LlmRcaSummaryReqDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | Pointer to **int64** |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**EntityKeys** | [**[]EntityKeyDto**](EntityKeyDto.md) |  | 
**SuggestionSrcEntities** | Pointer to [**[]EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**AlertCategories** | Pointer to **[]string** |  | [optional] 
**HideAssertionsOlderThanNHours** | Pointer to **int32** |  | [optional] 
**HideAssertionsPresentMoreThanPercentageOfTime** | Pointer to **int32** |  | [optional] 
**IncludeSuggestions** | Pointer to **bool** |  | [optional] 

## Methods

### NewLlmRcaSummaryReqDto

`func NewLlmRcaSummaryReqDto(entityKeys []EntityKeyDto, ) *LlmRcaSummaryReqDto`

NewLlmRcaSummaryReqDto instantiates a new LlmRcaSummaryReqDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaSummaryReqDtoWithDefaults

`func NewLlmRcaSummaryReqDtoWithDefaults() *LlmRcaSummaryReqDto`

NewLlmRcaSummaryReqDtoWithDefaults instantiates a new LlmRcaSummaryReqDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTime

`func (o *LlmRcaSummaryReqDto) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *LlmRcaSummaryReqDto) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *LlmRcaSummaryReqDto) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *LlmRcaSummaryReqDto) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *LlmRcaSummaryReqDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *LlmRcaSummaryReqDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *LlmRcaSummaryReqDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *LlmRcaSummaryReqDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetEntityKeys

`func (o *LlmRcaSummaryReqDto) GetEntityKeys() []EntityKeyDto`

GetEntityKeys returns the EntityKeys field if non-nil, zero value otherwise.

### GetEntityKeysOk

`func (o *LlmRcaSummaryReqDto) GetEntityKeysOk() (*[]EntityKeyDto, bool)`

GetEntityKeysOk returns a tuple with the EntityKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKeys

`func (o *LlmRcaSummaryReqDto) SetEntityKeys(v []EntityKeyDto)`

SetEntityKeys sets EntityKeys field to given value.


### GetSuggestionSrcEntities

`func (o *LlmRcaSummaryReqDto) GetSuggestionSrcEntities() []EntityKeyDto`

GetSuggestionSrcEntities returns the SuggestionSrcEntities field if non-nil, zero value otherwise.

### GetSuggestionSrcEntitiesOk

`func (o *LlmRcaSummaryReqDto) GetSuggestionSrcEntitiesOk() (*[]EntityKeyDto, bool)`

GetSuggestionSrcEntitiesOk returns a tuple with the SuggestionSrcEntities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestionSrcEntities

`func (o *LlmRcaSummaryReqDto) SetSuggestionSrcEntities(v []EntityKeyDto)`

SetSuggestionSrcEntities sets SuggestionSrcEntities field to given value.

### HasSuggestionSrcEntities

`func (o *LlmRcaSummaryReqDto) HasSuggestionSrcEntities() bool`

HasSuggestionSrcEntities returns a boolean if a field has been set.

### GetAlertCategories

`func (o *LlmRcaSummaryReqDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *LlmRcaSummaryReqDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *LlmRcaSummaryReqDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *LlmRcaSummaryReqDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.

### GetHideAssertionsOlderThanNHours

`func (o *LlmRcaSummaryReqDto) GetHideAssertionsOlderThanNHours() int32`

GetHideAssertionsOlderThanNHours returns the HideAssertionsOlderThanNHours field if non-nil, zero value otherwise.

### GetHideAssertionsOlderThanNHoursOk

`func (o *LlmRcaSummaryReqDto) GetHideAssertionsOlderThanNHoursOk() (*int32, bool)`

GetHideAssertionsOlderThanNHoursOk returns a tuple with the HideAssertionsOlderThanNHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsOlderThanNHours

`func (o *LlmRcaSummaryReqDto) SetHideAssertionsOlderThanNHours(v int32)`

SetHideAssertionsOlderThanNHours sets HideAssertionsOlderThanNHours field to given value.

### HasHideAssertionsOlderThanNHours

`func (o *LlmRcaSummaryReqDto) HasHideAssertionsOlderThanNHours() bool`

HasHideAssertionsOlderThanNHours returns a boolean if a field has been set.

### GetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummaryReqDto) GetHideAssertionsPresentMoreThanPercentageOfTime() int32`

GetHideAssertionsPresentMoreThanPercentageOfTime returns the HideAssertionsPresentMoreThanPercentageOfTime field if non-nil, zero value otherwise.

### GetHideAssertionsPresentMoreThanPercentageOfTimeOk

`func (o *LlmRcaSummaryReqDto) GetHideAssertionsPresentMoreThanPercentageOfTimeOk() (*int32, bool)`

GetHideAssertionsPresentMoreThanPercentageOfTimeOk returns a tuple with the HideAssertionsPresentMoreThanPercentageOfTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummaryReqDto) SetHideAssertionsPresentMoreThanPercentageOfTime(v int32)`

SetHideAssertionsPresentMoreThanPercentageOfTime sets HideAssertionsPresentMoreThanPercentageOfTime field to given value.

### HasHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummaryReqDto) HasHideAssertionsPresentMoreThanPercentageOfTime() bool`

HasHideAssertionsPresentMoreThanPercentageOfTime returns a boolean if a field has been set.

### GetIncludeSuggestions

`func (o *LlmRcaSummaryReqDto) GetIncludeSuggestions() bool`

GetIncludeSuggestions returns the IncludeSuggestions field if non-nil, zero value otherwise.

### GetIncludeSuggestionsOk

`func (o *LlmRcaSummaryReqDto) GetIncludeSuggestionsOk() (*bool, bool)`

GetIncludeSuggestionsOk returns a tuple with the IncludeSuggestions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSuggestions

`func (o *LlmRcaSummaryReqDto) SetIncludeSuggestions(v bool)`

SetIncludeSuggestions sets IncludeSuggestions field to given value.

### HasIncludeSuggestions

`func (o *LlmRcaSummaryReqDto) HasIncludeSuggestions() bool`

HasIncludeSuggestions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


