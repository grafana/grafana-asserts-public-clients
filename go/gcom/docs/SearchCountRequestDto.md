# SearchCountRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]SearchCountRequestEntryDto**](SearchCountRequestEntryDto.md) |  | 
**TimeCriteria** | [**SearchCountRequestDtoTimeCriteria**](SearchCountRequestDtoTimeCriteria.md) |  | 
**ScopeCriteria** | Pointer to [**SearchCountRequestDtoScopeCriteria**](SearchCountRequestDtoScopeCriteria.md) |  | [optional] 

## Methods

### NewSearchCountRequestDto

`func NewSearchCountRequestDto(items []SearchCountRequestEntryDto, timeCriteria SearchCountRequestDtoTimeCriteria, ) *SearchCountRequestDto`

NewSearchCountRequestDto instantiates a new SearchCountRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCountRequestDtoWithDefaults

`func NewSearchCountRequestDtoWithDefaults() *SearchCountRequestDto`

NewSearchCountRequestDtoWithDefaults instantiates a new SearchCountRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *SearchCountRequestDto) GetItems() []SearchCountRequestEntryDto`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *SearchCountRequestDto) GetItemsOk() (*[]SearchCountRequestEntryDto, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *SearchCountRequestDto) SetItems(v []SearchCountRequestEntryDto)`

SetItems sets Items field to given value.


### GetTimeCriteria

`func (o *SearchCountRequestDto) GetTimeCriteria() SearchCountRequestDtoTimeCriteria`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *SearchCountRequestDto) GetTimeCriteriaOk() (*SearchCountRequestDtoTimeCriteria, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *SearchCountRequestDto) SetTimeCriteria(v SearchCountRequestDtoTimeCriteria)`

SetTimeCriteria sets TimeCriteria field to given value.


### GetScopeCriteria

`func (o *SearchCountRequestDto) GetScopeCriteria() SearchCountRequestDtoScopeCriteria`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *SearchCountRequestDto) GetScopeCriteriaOk() (*SearchCountRequestDtoScopeCriteria, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *SearchCountRequestDto) SetScopeCriteria(v SearchCountRequestDtoScopeCriteria)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *SearchCountRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


