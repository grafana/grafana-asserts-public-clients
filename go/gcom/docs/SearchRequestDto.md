# SearchRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefinitionId** | Pointer to **int32** |  | [optional] 
**TimeCriteria** | Pointer to [**TimeCriteriaDto**](TimeCriteriaDto.md) |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**PageNum** | Pointer to **int32** |  | [optional] 
**Bindings** | Pointer to **map[string]string** |  | [optional] 
**FilterCriteria** | Pointer to [**[]EntityMatcherDto**](EntityMatcherDto.md) |  | [optional] 

## Methods

### NewSearchRequestDto

`func NewSearchRequestDto() *SearchRequestDto`

NewSearchRequestDto instantiates a new SearchRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchRequestDtoWithDefaults

`func NewSearchRequestDtoWithDefaults() *SearchRequestDto`

NewSearchRequestDtoWithDefaults instantiates a new SearchRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefinitionId

`func (o *SearchRequestDto) GetDefinitionId() int32`

GetDefinitionId returns the DefinitionId field if non-nil, zero value otherwise.

### GetDefinitionIdOk

`func (o *SearchRequestDto) GetDefinitionIdOk() (*int32, bool)`

GetDefinitionIdOk returns a tuple with the DefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionId

`func (o *SearchRequestDto) SetDefinitionId(v int32)`

SetDefinitionId sets DefinitionId field to given value.

### HasDefinitionId

`func (o *SearchRequestDto) HasDefinitionId() bool`

HasDefinitionId returns a boolean if a field has been set.

### GetTimeCriteria

`func (o *SearchRequestDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *SearchRequestDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *SearchRequestDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *SearchRequestDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *SearchRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *SearchRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *SearchRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *SearchRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPageNum

`func (o *SearchRequestDto) GetPageNum() int32`

GetPageNum returns the PageNum field if non-nil, zero value otherwise.

### GetPageNumOk

`func (o *SearchRequestDto) GetPageNumOk() (*int32, bool)`

GetPageNumOk returns a tuple with the PageNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNum

`func (o *SearchRequestDto) SetPageNum(v int32)`

SetPageNum sets PageNum field to given value.

### HasPageNum

`func (o *SearchRequestDto) HasPageNum() bool`

HasPageNum returns a boolean if a field has been set.

### GetBindings

`func (o *SearchRequestDto) GetBindings() map[string]string`

GetBindings returns the Bindings field if non-nil, zero value otherwise.

### GetBindingsOk

`func (o *SearchRequestDto) GetBindingsOk() (*map[string]string, bool)`

GetBindingsOk returns a tuple with the Bindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindings

`func (o *SearchRequestDto) SetBindings(v map[string]string)`

SetBindings sets Bindings field to given value.

### HasBindings

`func (o *SearchRequestDto) HasBindings() bool`

HasBindings returns a boolean if a field has been set.

### GetFilterCriteria

`func (o *SearchRequestDto) GetFilterCriteria() []EntityMatcherDto`

GetFilterCriteria returns the FilterCriteria field if non-nil, zero value otherwise.

### GetFilterCriteriaOk

`func (o *SearchRequestDto) GetFilterCriteriaOk() (*[]EntityMatcherDto, bool)`

GetFilterCriteriaOk returns a tuple with the FilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCriteria

`func (o *SearchRequestDto) SetFilterCriteria(v []EntityMatcherDto)`

SetFilterCriteria sets FilterCriteria field to given value.

### HasFilterCriteria

`func (o *SearchRequestDto) HasFilterCriteria() bool`

HasFilterCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


