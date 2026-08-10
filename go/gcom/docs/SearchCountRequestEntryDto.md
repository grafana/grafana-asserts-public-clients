# SearchCountRequestEntryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | **string** |  | 
**NameMatcher** | Pointer to [**SearchCountRequestEntryDtoNameMatcher**](SearchCountRequestEntryDtoNameMatcher.md) |  | [optional] 
**WithInsights** | Pointer to [**InsightCriteriaDto**](InsightCriteriaDto.md) |  | [optional] 
**GroupBy** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSearchCountRequestEntryDto

`func NewSearchCountRequestEntryDto(entityType string, ) *SearchCountRequestEntryDto`

NewSearchCountRequestEntryDto instantiates a new SearchCountRequestEntryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCountRequestEntryDtoWithDefaults

`func NewSearchCountRequestEntryDtoWithDefaults() *SearchCountRequestEntryDto`

NewSearchCountRequestEntryDtoWithDefaults instantiates a new SearchCountRequestEntryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *SearchCountRequestEntryDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *SearchCountRequestEntryDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *SearchCountRequestEntryDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.


### GetNameMatcher

`func (o *SearchCountRequestEntryDto) GetNameMatcher() SearchCountRequestEntryDtoNameMatcher`

GetNameMatcher returns the NameMatcher field if non-nil, zero value otherwise.

### GetNameMatcherOk

`func (o *SearchCountRequestEntryDto) GetNameMatcherOk() (*SearchCountRequestEntryDtoNameMatcher, bool)`

GetNameMatcherOk returns a tuple with the NameMatcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNameMatcher

`func (o *SearchCountRequestEntryDto) SetNameMatcher(v SearchCountRequestEntryDtoNameMatcher)`

SetNameMatcher sets NameMatcher field to given value.

### HasNameMatcher

`func (o *SearchCountRequestEntryDto) HasNameMatcher() bool`

HasNameMatcher returns a boolean if a field has been set.

### GetWithInsights

`func (o *SearchCountRequestEntryDto) GetWithInsights() InsightCriteriaDto`

GetWithInsights returns the WithInsights field if non-nil, zero value otherwise.

### GetWithInsightsOk

`func (o *SearchCountRequestEntryDto) GetWithInsightsOk() (*InsightCriteriaDto, bool)`

GetWithInsightsOk returns a tuple with the WithInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithInsights

`func (o *SearchCountRequestEntryDto) SetWithInsights(v InsightCriteriaDto)`

SetWithInsights sets WithInsights field to given value.

### HasWithInsights

`func (o *SearchCountRequestEntryDto) HasWithInsights() bool`

HasWithInsights returns a boolean if a field has been set.

### GetGroupBy

`func (o *SearchCountRequestEntryDto) GetGroupBy() []string`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *SearchCountRequestEntryDto) GetGroupByOk() (*[]string, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *SearchCountRequestEntryDto) SetGroupBy(v []string)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *SearchCountRequestEntryDto) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


