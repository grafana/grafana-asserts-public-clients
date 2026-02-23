# EntityPropertyValuesRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** |  | [optional] 
**PropertyName** | Pointer to **string** |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**PropertyMatchers** | Pointer to [**[]PropertyMatcherDto**](PropertyMatcherDto.md) |  | [optional] 
**Prefix** | Pointer to **string** |  | [optional] 
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**Limit** | Pointer to **int32** |  | [optional] 

## Methods

### NewEntityPropertyValuesRequestDto

`func NewEntityPropertyValuesRequestDto() *EntityPropertyValuesRequestDto`

NewEntityPropertyValuesRequestDto instantiates a new EntityPropertyValuesRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityPropertyValuesRequestDtoWithDefaults

`func NewEntityPropertyValuesRequestDtoWithDefaults() *EntityPropertyValuesRequestDto`

NewEntityPropertyValuesRequestDtoWithDefaults instantiates a new EntityPropertyValuesRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *EntityPropertyValuesRequestDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *EntityPropertyValuesRequestDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *EntityPropertyValuesRequestDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *EntityPropertyValuesRequestDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetPropertyName

`func (o *EntityPropertyValuesRequestDto) GetPropertyName() string`

GetPropertyName returns the PropertyName field if non-nil, zero value otherwise.

### GetPropertyNameOk

`func (o *EntityPropertyValuesRequestDto) GetPropertyNameOk() (*string, bool)`

GetPropertyNameOk returns a tuple with the PropertyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyName

`func (o *EntityPropertyValuesRequestDto) SetPropertyName(v string)`

SetPropertyName sets PropertyName field to given value.

### HasPropertyName

`func (o *EntityPropertyValuesRequestDto) HasPropertyName() bool`

HasPropertyName returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *EntityPropertyValuesRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *EntityPropertyValuesRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *EntityPropertyValuesRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *EntityPropertyValuesRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPropertyMatchers

`func (o *EntityPropertyValuesRequestDto) GetPropertyMatchers() []PropertyMatcherDto`

GetPropertyMatchers returns the PropertyMatchers field if non-nil, zero value otherwise.

### GetPropertyMatchersOk

`func (o *EntityPropertyValuesRequestDto) GetPropertyMatchersOk() (*[]PropertyMatcherDto, bool)`

GetPropertyMatchersOk returns a tuple with the PropertyMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatchers

`func (o *EntityPropertyValuesRequestDto) SetPropertyMatchers(v []PropertyMatcherDto)`

SetPropertyMatchers sets PropertyMatchers field to given value.

### HasPropertyMatchers

`func (o *EntityPropertyValuesRequestDto) HasPropertyMatchers() bool`

HasPropertyMatchers returns a boolean if a field has been set.

### GetPrefix

`func (o *EntityPropertyValuesRequestDto) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *EntityPropertyValuesRequestDto) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *EntityPropertyValuesRequestDto) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *EntityPropertyValuesRequestDto) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetStart

`func (o *EntityPropertyValuesRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *EntityPropertyValuesRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *EntityPropertyValuesRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *EntityPropertyValuesRequestDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *EntityPropertyValuesRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *EntityPropertyValuesRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *EntityPropertyValuesRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *EntityPropertyValuesRequestDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetLimit

`func (o *EntityPropertyValuesRequestDto) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *EntityPropertyValuesRequestDto) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *EntityPropertyValuesRequestDto) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *EntityPropertyValuesRequestDto) HasLimit() bool`

HasLimit returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


