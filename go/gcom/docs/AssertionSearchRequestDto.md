# AssertionSearchRequestDto

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

## Methods

### NewAssertionSearchRequestDto

`func NewAssertionSearchRequestDto() *AssertionSearchRequestDto`

NewAssertionSearchRequestDto instantiates a new AssertionSearchRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionSearchRequestDtoWithDefaults

`func NewAssertionSearchRequestDtoWithDefaults() *AssertionSearchRequestDto`

NewAssertionSearchRequestDtoWithDefaults instantiates a new AssertionSearchRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefinitionId

`func (o *AssertionSearchRequestDto) GetDefinitionId() int32`

GetDefinitionId returns the DefinitionId field if non-nil, zero value otherwise.

### GetDefinitionIdOk

`func (o *AssertionSearchRequestDto) GetDefinitionIdOk() (*int32, bool)`

GetDefinitionIdOk returns a tuple with the DefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionId

`func (o *AssertionSearchRequestDto) SetDefinitionId(v int32)`

SetDefinitionId sets DefinitionId field to given value.

### HasDefinitionId

`func (o *AssertionSearchRequestDto) HasDefinitionId() bool`

HasDefinitionId returns a boolean if a field has been set.

### GetTimeCriteria

`func (o *AssertionSearchRequestDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *AssertionSearchRequestDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *AssertionSearchRequestDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *AssertionSearchRequestDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *AssertionSearchRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *AssertionSearchRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *AssertionSearchRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *AssertionSearchRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPageNum

`func (o *AssertionSearchRequestDto) GetPageNum() int32`

GetPageNum returns the PageNum field if non-nil, zero value otherwise.

### GetPageNumOk

`func (o *AssertionSearchRequestDto) GetPageNumOk() (*int32, bool)`

GetPageNumOk returns a tuple with the PageNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNum

`func (o *AssertionSearchRequestDto) SetPageNum(v int32)`

SetPageNum sets PageNum field to given value.

### HasPageNum

`func (o *AssertionSearchRequestDto) HasPageNum() bool`

HasPageNum returns a boolean if a field has been set.

### GetBindings

`func (o *AssertionSearchRequestDto) GetBindings() map[string]string`

GetBindings returns the Bindings field if non-nil, zero value otherwise.

### GetBindingsOk

`func (o *AssertionSearchRequestDto) GetBindingsOk() (*map[string]string, bool)`

GetBindingsOk returns a tuple with the Bindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindings

`func (o *AssertionSearchRequestDto) SetBindings(v map[string]string)`

SetBindings sets Bindings field to given value.

### HasBindings

`func (o *AssertionSearchRequestDto) HasBindings() bool`

HasBindings returns a boolean if a field has been set.

### GetFilterCriteria

`func (o *AssertionSearchRequestDto) GetFilterCriteria() []EntityMatcherDto`

GetFilterCriteria returns the FilterCriteria field if non-nil, zero value otherwise.

### GetFilterCriteriaOk

`func (o *AssertionSearchRequestDto) GetFilterCriteriaOk() (*[]EntityMatcherDto, bool)`

GetFilterCriteriaOk returns a tuple with the FilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCriteria

`func (o *AssertionSearchRequestDto) SetFilterCriteria(v []EntityMatcherDto)`

SetFilterCriteria sets FilterCriteria field to given value.

### HasFilterCriteria

`func (o *AssertionSearchRequestDto) HasFilterCriteria() bool`

HasFilterCriteria returns a boolean if a field has been set.

### GetHideAssertionsOlderThanNHours

`func (o *AssertionSearchRequestDto) GetHideAssertionsOlderThanNHours() int32`

GetHideAssertionsOlderThanNHours returns the HideAssertionsOlderThanNHours field if non-nil, zero value otherwise.

### GetHideAssertionsOlderThanNHoursOk

`func (o *AssertionSearchRequestDto) GetHideAssertionsOlderThanNHoursOk() (*int32, bool)`

GetHideAssertionsOlderThanNHoursOk returns a tuple with the HideAssertionsOlderThanNHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsOlderThanNHours

`func (o *AssertionSearchRequestDto) SetHideAssertionsOlderThanNHours(v int32)`

SetHideAssertionsOlderThanNHours sets HideAssertionsOlderThanNHours field to given value.

### HasHideAssertionsOlderThanNHours

`func (o *AssertionSearchRequestDto) HasHideAssertionsOlderThanNHours() bool`

HasHideAssertionsOlderThanNHours returns a boolean if a field has been set.

### GetAlertCategories

`func (o *AssertionSearchRequestDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *AssertionSearchRequestDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *AssertionSearchRequestDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *AssertionSearchRequestDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.

### GetQuery

`func (o *AssertionSearchRequestDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *AssertionSearchRequestDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *AssertionSearchRequestDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *AssertionSearchRequestDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetCurrentWBEntityCount

`func (o *AssertionSearchRequestDto) GetCurrentWBEntityCount() int32`

GetCurrentWBEntityCount returns the CurrentWBEntityCount field if non-nil, zero value otherwise.

### GetCurrentWBEntityCountOk

`func (o *AssertionSearchRequestDto) GetCurrentWBEntityCountOk() (*int32, bool)`

GetCurrentWBEntityCountOk returns a tuple with the CurrentWBEntityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentWBEntityCount

`func (o *AssertionSearchRequestDto) SetCurrentWBEntityCount(v int32)`

SetCurrentWBEntityCount sets CurrentWBEntityCount field to given value.

### HasCurrentWBEntityCount

`func (o *AssertionSearchRequestDto) HasCurrentWBEntityCount() bool`

HasCurrentWBEntityCount returns a boolean if a field has been set.

### GetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionSearchRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTime() int32`

GetHideAssertionsPresentMoreThanPercentageOfTime returns the HideAssertionsPresentMoreThanPercentageOfTime field if non-nil, zero value otherwise.

### GetHideAssertionsPresentMoreThanPercentageOfTimeOk

`func (o *AssertionSearchRequestDto) GetHideAssertionsPresentMoreThanPercentageOfTimeOk() (*int32, bool)`

GetHideAssertionsPresentMoreThanPercentageOfTimeOk returns a tuple with the HideAssertionsPresentMoreThanPercentageOfTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionSearchRequestDto) SetHideAssertionsPresentMoreThanPercentageOfTime(v int32)`

SetHideAssertionsPresentMoreThanPercentageOfTime sets HideAssertionsPresentMoreThanPercentageOfTime field to given value.

### HasHideAssertionsPresentMoreThanPercentageOfTime

`func (o *AssertionSearchRequestDto) HasHideAssertionsPresentMoreThanPercentageOfTime() bool`

HasHideAssertionsPresentMoreThanPercentageOfTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


