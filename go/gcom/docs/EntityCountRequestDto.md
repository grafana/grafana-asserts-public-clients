# EntityCountRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeCriteria** | Pointer to [**TimeCriteriaDto**](TimeCriteriaDto.md) |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**PropertyMatchers** | Pointer to [**[]PropertyMatcherDto**](PropertyMatcherDto.md) |  | [optional] 

## Methods

### NewEntityCountRequestDto

`func NewEntityCountRequestDto() *EntityCountRequestDto`

NewEntityCountRequestDto instantiates a new EntityCountRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityCountRequestDtoWithDefaults

`func NewEntityCountRequestDtoWithDefaults() *EntityCountRequestDto`

NewEntityCountRequestDtoWithDefaults instantiates a new EntityCountRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeCriteria

`func (o *EntityCountRequestDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *EntityCountRequestDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *EntityCountRequestDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *EntityCountRequestDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *EntityCountRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *EntityCountRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *EntityCountRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *EntityCountRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPropertyMatchers

`func (o *EntityCountRequestDto) GetPropertyMatchers() []PropertyMatcherDto`

GetPropertyMatchers returns the PropertyMatchers field if non-nil, zero value otherwise.

### GetPropertyMatchersOk

`func (o *EntityCountRequestDto) GetPropertyMatchersOk() (*[]PropertyMatcherDto, bool)`

GetPropertyMatchersOk returns a tuple with the PropertyMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatchers

`func (o *EntityCountRequestDto) SetPropertyMatchers(v []PropertyMatcherDto)`

SetPropertyMatchers sets PropertyMatchers field to given value.

### HasPropertyMatchers

`func (o *EntityCountRequestDto) HasPropertyMatchers() bool`

HasPropertyMatchers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


