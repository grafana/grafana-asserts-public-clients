# SearchDefinitionResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalResults** | Pointer to **int64** |  | [optional] 
**PageResults** | Pointer to **int64** |  | [optional] 
**MaxResults** | Pointer to **int64** |  | [optional] 
**Offset** | Pointer to **int32** |  | [optional] 
**Items** | Pointer to [**[]SearchDefinitionItemDto**](SearchDefinitionItemDto.md) |  | [optional] 

## Methods

### NewSearchDefinitionResponseDto

`func NewSearchDefinitionResponseDto() *SearchDefinitionResponseDto`

NewSearchDefinitionResponseDto instantiates a new SearchDefinitionResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchDefinitionResponseDtoWithDefaults

`func NewSearchDefinitionResponseDtoWithDefaults() *SearchDefinitionResponseDto`

NewSearchDefinitionResponseDtoWithDefaults instantiates a new SearchDefinitionResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotalResults

`func (o *SearchDefinitionResponseDto) GetTotalResults() int64`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SearchDefinitionResponseDto) GetTotalResultsOk() (*int64, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SearchDefinitionResponseDto) SetTotalResults(v int64)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SearchDefinitionResponseDto) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetPageResults

`func (o *SearchDefinitionResponseDto) GetPageResults() int64`

GetPageResults returns the PageResults field if non-nil, zero value otherwise.

### GetPageResultsOk

`func (o *SearchDefinitionResponseDto) GetPageResultsOk() (*int64, bool)`

GetPageResultsOk returns a tuple with the PageResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageResults

`func (o *SearchDefinitionResponseDto) SetPageResults(v int64)`

SetPageResults sets PageResults field to given value.

### HasPageResults

`func (o *SearchDefinitionResponseDto) HasPageResults() bool`

HasPageResults returns a boolean if a field has been set.

### GetMaxResults

`func (o *SearchDefinitionResponseDto) GetMaxResults() int64`

GetMaxResults returns the MaxResults field if non-nil, zero value otherwise.

### GetMaxResultsOk

`func (o *SearchDefinitionResponseDto) GetMaxResultsOk() (*int64, bool)`

GetMaxResultsOk returns a tuple with the MaxResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxResults

`func (o *SearchDefinitionResponseDto) SetMaxResults(v int64)`

SetMaxResults sets MaxResults field to given value.

### HasMaxResults

`func (o *SearchDefinitionResponseDto) HasMaxResults() bool`

HasMaxResults returns a boolean if a field has been set.

### GetOffset

`func (o *SearchDefinitionResponseDto) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *SearchDefinitionResponseDto) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *SearchDefinitionResponseDto) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *SearchDefinitionResponseDto) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetItems

`func (o *SearchDefinitionResponseDto) GetItems() []SearchDefinitionItemDto`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *SearchDefinitionResponseDto) GetItemsOk() (*[]SearchDefinitionItemDto, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *SearchDefinitionResponseDto) SetItems(v []SearchDefinitionItemDto)`

SetItems sets Items field to given value.

### HasItems

`func (o *SearchDefinitionResponseDto) HasItems() bool`

HasItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


