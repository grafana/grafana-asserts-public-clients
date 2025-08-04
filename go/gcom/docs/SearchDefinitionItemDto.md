# SearchDefinitionItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Score** | Pointer to **float64** |  | [optional] 
**DefinitionId** | Pointer to **int32** |  | [optional] 
**BoundDescription** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Bindings** | Pointer to **map[string]interface{}** |  | [optional] 
**FilterCriteria** | Pointer to [**[]EntityMatcherDto**](EntityMatcherDto.md) |  | [optional] 

## Methods

### NewSearchDefinitionItemDto

`func NewSearchDefinitionItemDto() *SearchDefinitionItemDto`

NewSearchDefinitionItemDto instantiates a new SearchDefinitionItemDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchDefinitionItemDtoWithDefaults

`func NewSearchDefinitionItemDtoWithDefaults() *SearchDefinitionItemDto`

NewSearchDefinitionItemDtoWithDefaults instantiates a new SearchDefinitionItemDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SearchDefinitionItemDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SearchDefinitionItemDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SearchDefinitionItemDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SearchDefinitionItemDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetScore

`func (o *SearchDefinitionItemDto) GetScore() float64`

GetScore returns the Score field if non-nil, zero value otherwise.

### GetScoreOk

`func (o *SearchDefinitionItemDto) GetScoreOk() (*float64, bool)`

GetScoreOk returns a tuple with the Score field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScore

`func (o *SearchDefinitionItemDto) SetScore(v float64)`

SetScore sets Score field to given value.

### HasScore

`func (o *SearchDefinitionItemDto) HasScore() bool`

HasScore returns a boolean if a field has been set.

### GetDefinitionId

`func (o *SearchDefinitionItemDto) GetDefinitionId() int32`

GetDefinitionId returns the DefinitionId field if non-nil, zero value otherwise.

### GetDefinitionIdOk

`func (o *SearchDefinitionItemDto) GetDefinitionIdOk() (*int32, bool)`

GetDefinitionIdOk returns a tuple with the DefinitionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinitionId

`func (o *SearchDefinitionItemDto) SetDefinitionId(v int32)`

SetDefinitionId sets DefinitionId field to given value.

### HasDefinitionId

`func (o *SearchDefinitionItemDto) HasDefinitionId() bool`

HasDefinitionId returns a boolean if a field has been set.

### GetBoundDescription

`func (o *SearchDefinitionItemDto) GetBoundDescription() string`

GetBoundDescription returns the BoundDescription field if non-nil, zero value otherwise.

### GetBoundDescriptionOk

`func (o *SearchDefinitionItemDto) GetBoundDescriptionOk() (*string, bool)`

GetBoundDescriptionOk returns a tuple with the BoundDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBoundDescription

`func (o *SearchDefinitionItemDto) SetBoundDescription(v string)`

SetBoundDescription sets BoundDescription field to given value.

### HasBoundDescription

`func (o *SearchDefinitionItemDto) HasBoundDescription() bool`

HasBoundDescription returns a boolean if a field has been set.

### GetDescription

`func (o *SearchDefinitionItemDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SearchDefinitionItemDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SearchDefinitionItemDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SearchDefinitionItemDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetBindings

`func (o *SearchDefinitionItemDto) GetBindings() map[string]interface{}`

GetBindings returns the Bindings field if non-nil, zero value otherwise.

### GetBindingsOk

`func (o *SearchDefinitionItemDto) GetBindingsOk() (*map[string]interface{}, bool)`

GetBindingsOk returns a tuple with the Bindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindings

`func (o *SearchDefinitionItemDto) SetBindings(v map[string]interface{})`

SetBindings sets Bindings field to given value.

### HasBindings

`func (o *SearchDefinitionItemDto) HasBindings() bool`

HasBindings returns a boolean if a field has been set.

### GetFilterCriteria

`func (o *SearchDefinitionItemDto) GetFilterCriteria() []EntityMatcherDto`

GetFilterCriteria returns the FilterCriteria field if non-nil, zero value otherwise.

### GetFilterCriteriaOk

`func (o *SearchDefinitionItemDto) GetFilterCriteriaOk() (*[]EntityMatcherDto, bool)`

GetFilterCriteriaOk returns a tuple with the FilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCriteria

`func (o *SearchDefinitionItemDto) SetFilterCriteria(v []EntityMatcherDto)`

SetFilterCriteria sets FilterCriteria field to given value.

### HasFilterCriteria

`func (o *SearchDefinitionItemDto) HasFilterCriteria() bool`

HasFilterCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


