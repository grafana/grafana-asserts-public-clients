# AutoCompleteResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Index** | Pointer to **string** |  | [optional] 
**MaxResults** | Pointer to **int32** |  | [optional] 
**Fuzzy** | Pointer to **bool** |  | [optional] 
**Items** | Pointer to [**[]AutoCompleteItemDto**](AutoCompleteItemDto.md) |  | [optional] 

## Methods

### NewAutoCompleteResponseDto

`func NewAutoCompleteResponseDto() *AutoCompleteResponseDto`

NewAutoCompleteResponseDto instantiates a new AutoCompleteResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoCompleteResponseDtoWithDefaults

`func NewAutoCompleteResponseDtoWithDefaults() *AutoCompleteResponseDto`

NewAutoCompleteResponseDtoWithDefaults instantiates a new AutoCompleteResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndex

`func (o *AutoCompleteResponseDto) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *AutoCompleteResponseDto) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *AutoCompleteResponseDto) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *AutoCompleteResponseDto) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetMaxResults

`func (o *AutoCompleteResponseDto) GetMaxResults() int32`

GetMaxResults returns the MaxResults field if non-nil, zero value otherwise.

### GetMaxResultsOk

`func (o *AutoCompleteResponseDto) GetMaxResultsOk() (*int32, bool)`

GetMaxResultsOk returns a tuple with the MaxResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxResults

`func (o *AutoCompleteResponseDto) SetMaxResults(v int32)`

SetMaxResults sets MaxResults field to given value.

### HasMaxResults

`func (o *AutoCompleteResponseDto) HasMaxResults() bool`

HasMaxResults returns a boolean if a field has been set.

### GetFuzzy

`func (o *AutoCompleteResponseDto) GetFuzzy() bool`

GetFuzzy returns the Fuzzy field if non-nil, zero value otherwise.

### GetFuzzyOk

`func (o *AutoCompleteResponseDto) GetFuzzyOk() (*bool, bool)`

GetFuzzyOk returns a tuple with the Fuzzy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFuzzy

`func (o *AutoCompleteResponseDto) SetFuzzy(v bool)`

SetFuzzy sets Fuzzy field to given value.

### HasFuzzy

`func (o *AutoCompleteResponseDto) HasFuzzy() bool`

HasFuzzy returns a boolean if a field has been set.

### GetItems

`func (o *AutoCompleteResponseDto) GetItems() []AutoCompleteItemDto`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *AutoCompleteResponseDto) GetItemsOk() (*[]AutoCompleteItemDto, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *AutoCompleteResponseDto) SetItems(v []AutoCompleteItemDto)`

SetItems sets Items field to given value.

### HasItems

`func (o *AutoCompleteResponseDto) HasItems() bool`

HasItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


