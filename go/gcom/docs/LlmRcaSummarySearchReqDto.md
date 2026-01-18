# LlmRcaSummarySearchReqDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefinitionId** | Pointer to **int32** |  | [optional] 
**TimeCriteria** | Pointer to [**TimeCriteriaDto**](TimeCriteriaDto.md) |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**PageNum** | Pointer to **int32** |  | [optional] 
**Bindings** | Pointer to **map[string]string** |  | [optional] 
**FilterCriteria** | Pointer to [**[]EntityMatcherDto**](EntityMatcherDto.md) |  | [optional] 
**HideAssertionsOlderThanNHours** | Pointer to **int32** |  | [optional] 
**AlertCategories** | Pointer to **[]string** |  | [optional] 
**Query** | Pointer to **string** |  | [optional] 
**CurrentWBEntityCount** | Pointer to **int32** |  | [optional] 
**HideAssertionsPresentMoreThanPercentageOfTime** | Pointer to **int32** |  | [optional] 
**IncludeSuggestions** | Pointer to **bool** |  | [optional] 
**IncludeRcaPatterns** | Pointer to **bool** |  | [optional] 

## Methods

### NewLlmRcaSummarySearchReqDto

`func NewLlmRcaSummarySearchReqDto() *LlmRcaSummarySearchReqDto`

NewLlmRcaSummarySearchReqDto instantiates a new LlmRcaSummarySearchReqDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaSummarySearchReqDtoWithDefaults

`func NewLlmRcaSummarySearchReqDtoWithDefaults() *LlmRcaSummarySearchReqDto`

NewLlmRcaSummarySearchReqDtoWithDefaults instantiates a new LlmRcaSummarySearchReqDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefinitionId

`func (o *LlmRcaSummarySearchReqDto) GetDefinitionId() int32`

GetDefinitionId returns the DefinitionId field if non-nil, zero value otherwise.

### GetDefinitionIdOk

`func (o *LlmRcaSummarySearchReqDto) GetDefinitionIdOk() (*int32, bool)`

GetDefinitionIdOk returns a tuple with the DefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionId

`func (o *LlmRcaSummarySearchReqDto) SetDefinitionId(v int32)`

SetDefinitionId sets DefinitionId field to given value.

### HasDefinitionId

`func (o *LlmRcaSummarySearchReqDto) HasDefinitionId() bool`

HasDefinitionId returns a boolean if a field has been set.

### GetTimeCriteria

`func (o *LlmRcaSummarySearchReqDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *LlmRcaSummarySearchReqDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *LlmRcaSummarySearchReqDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *LlmRcaSummarySearchReqDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *LlmRcaSummarySearchReqDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *LlmRcaSummarySearchReqDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *LlmRcaSummarySearchReqDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *LlmRcaSummarySearchReqDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPageNum

`func (o *LlmRcaSummarySearchReqDto) GetPageNum() int32`

GetPageNum returns the PageNum field if non-nil, zero value otherwise.

### GetPageNumOk

`func (o *LlmRcaSummarySearchReqDto) GetPageNumOk() (*int32, bool)`

GetPageNumOk returns a tuple with the PageNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNum

`func (o *LlmRcaSummarySearchReqDto) SetPageNum(v int32)`

SetPageNum sets PageNum field to given value.

### HasPageNum

`func (o *LlmRcaSummarySearchReqDto) HasPageNum() bool`

HasPageNum returns a boolean if a field has been set.

### GetBindings

`func (o *LlmRcaSummarySearchReqDto) GetBindings() map[string]string`

GetBindings returns the Bindings field if non-nil, zero value otherwise.

### GetBindingsOk

`func (o *LlmRcaSummarySearchReqDto) GetBindingsOk() (*map[string]string, bool)`

GetBindingsOk returns a tuple with the Bindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindings

`func (o *LlmRcaSummarySearchReqDto) SetBindings(v map[string]string)`

SetBindings sets Bindings field to given value.

### HasBindings

`func (o *LlmRcaSummarySearchReqDto) HasBindings() bool`

HasBindings returns a boolean if a field has been set.

### GetFilterCriteria

`func (o *LlmRcaSummarySearchReqDto) GetFilterCriteria() []EntityMatcherDto`

GetFilterCriteria returns the FilterCriteria field if non-nil, zero value otherwise.

### GetFilterCriteriaOk

`func (o *LlmRcaSummarySearchReqDto) GetFilterCriteriaOk() (*[]EntityMatcherDto, bool)`

GetFilterCriteriaOk returns a tuple with the FilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCriteria

`func (o *LlmRcaSummarySearchReqDto) SetFilterCriteria(v []EntityMatcherDto)`

SetFilterCriteria sets FilterCriteria field to given value.

### HasFilterCriteria

`func (o *LlmRcaSummarySearchReqDto) HasFilterCriteria() bool`

HasFilterCriteria returns a boolean if a field has been set.

### GetHideAssertionsOlderThanNHours

`func (o *LlmRcaSummarySearchReqDto) GetHideAssertionsOlderThanNHours() int32`

GetHideAssertionsOlderThanNHours returns the HideAssertionsOlderThanNHours field if non-nil, zero value otherwise.

### GetHideAssertionsOlderThanNHoursOk

`func (o *LlmRcaSummarySearchReqDto) GetHideAssertionsOlderThanNHoursOk() (*int32, bool)`

GetHideAssertionsOlderThanNHoursOk returns a tuple with the HideAssertionsOlderThanNHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsOlderThanNHours

`func (o *LlmRcaSummarySearchReqDto) SetHideAssertionsOlderThanNHours(v int32)`

SetHideAssertionsOlderThanNHours sets HideAssertionsOlderThanNHours field to given value.

### HasHideAssertionsOlderThanNHours

`func (o *LlmRcaSummarySearchReqDto) HasHideAssertionsOlderThanNHours() bool`

HasHideAssertionsOlderThanNHours returns a boolean if a field has been set.

### GetAlertCategories

`func (o *LlmRcaSummarySearchReqDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *LlmRcaSummarySearchReqDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *LlmRcaSummarySearchReqDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *LlmRcaSummarySearchReqDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.

### GetQuery

`func (o *LlmRcaSummarySearchReqDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *LlmRcaSummarySearchReqDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *LlmRcaSummarySearchReqDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *LlmRcaSummarySearchReqDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetCurrentWBEntityCount

`func (o *LlmRcaSummarySearchReqDto) GetCurrentWBEntityCount() int32`

GetCurrentWBEntityCount returns the CurrentWBEntityCount field if non-nil, zero value otherwise.

### GetCurrentWBEntityCountOk

`func (o *LlmRcaSummarySearchReqDto) GetCurrentWBEntityCountOk() (*int32, bool)`

GetCurrentWBEntityCountOk returns a tuple with the CurrentWBEntityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentWBEntityCount

`func (o *LlmRcaSummarySearchReqDto) SetCurrentWBEntityCount(v int32)`

SetCurrentWBEntityCount sets CurrentWBEntityCount field to given value.

### HasCurrentWBEntityCount

`func (o *LlmRcaSummarySearchReqDto) HasCurrentWBEntityCount() bool`

HasCurrentWBEntityCount returns a boolean if a field has been set.

### GetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummarySearchReqDto) GetHideAssertionsPresentMoreThanPercentageOfTime() int32`

GetHideAssertionsPresentMoreThanPercentageOfTime returns the HideAssertionsPresentMoreThanPercentageOfTime field if non-nil, zero value otherwise.

### GetHideAssertionsPresentMoreThanPercentageOfTimeOk

`func (o *LlmRcaSummarySearchReqDto) GetHideAssertionsPresentMoreThanPercentageOfTimeOk() (*int32, bool)`

GetHideAssertionsPresentMoreThanPercentageOfTimeOk returns a tuple with the HideAssertionsPresentMoreThanPercentageOfTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummarySearchReqDto) SetHideAssertionsPresentMoreThanPercentageOfTime(v int32)`

SetHideAssertionsPresentMoreThanPercentageOfTime sets HideAssertionsPresentMoreThanPercentageOfTime field to given value.

### HasHideAssertionsPresentMoreThanPercentageOfTime

`func (o *LlmRcaSummarySearchReqDto) HasHideAssertionsPresentMoreThanPercentageOfTime() bool`

HasHideAssertionsPresentMoreThanPercentageOfTime returns a boolean if a field has been set.

### GetIncludeSuggestions

`func (o *LlmRcaSummarySearchReqDto) GetIncludeSuggestions() bool`

GetIncludeSuggestions returns the IncludeSuggestions field if non-nil, zero value otherwise.

### GetIncludeSuggestionsOk

`func (o *LlmRcaSummarySearchReqDto) GetIncludeSuggestionsOk() (*bool, bool)`

GetIncludeSuggestionsOk returns a tuple with the IncludeSuggestions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeSuggestions

`func (o *LlmRcaSummarySearchReqDto) SetIncludeSuggestions(v bool)`

SetIncludeSuggestions sets IncludeSuggestions field to given value.

### HasIncludeSuggestions

`func (o *LlmRcaSummarySearchReqDto) HasIncludeSuggestions() bool`

HasIncludeSuggestions returns a boolean if a field has been set.

### GetIncludeRcaPatterns

`func (o *LlmRcaSummarySearchReqDto) GetIncludeRcaPatterns() bool`

GetIncludeRcaPatterns returns the IncludeRcaPatterns field if non-nil, zero value otherwise.

### GetIncludeRcaPatternsOk

`func (o *LlmRcaSummarySearchReqDto) GetIncludeRcaPatternsOk() (*bool, bool)`

GetIncludeRcaPatternsOk returns a tuple with the IncludeRcaPatterns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeRcaPatterns

`func (o *LlmRcaSummarySearchReqDto) SetIncludeRcaPatterns(v bool)`

SetIncludeRcaPatterns sets IncludeRcaPatterns field to given value.

### HasIncludeRcaPatterns

`func (o *LlmRcaSummarySearchReqDto) HasIncludeRcaPatterns() bool`

HasIncludeRcaPatterns returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


