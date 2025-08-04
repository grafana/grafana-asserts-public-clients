# IncidentRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**Search** | Pointer to **string** |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**SloSource** | Pointer to **string** |  | [optional] 

## Methods

### NewIncidentRequestDto

`func NewIncidentRequestDto() *IncidentRequestDto`

NewIncidentRequestDto instantiates a new IncidentRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentRequestDtoWithDefaults

`func NewIncidentRequestDtoWithDefaults() *IncidentRequestDto`

NewIncidentRequestDtoWithDefaults instantiates a new IncidentRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *IncidentRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *IncidentRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *IncidentRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *IncidentRequestDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *IncidentRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *IncidentRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *IncidentRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *IncidentRequestDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSearch

`func (o *IncidentRequestDto) GetSearch() string`

GetSearch returns the Search field if non-nil, zero value otherwise.

### GetSearchOk

`func (o *IncidentRequestDto) GetSearchOk() (*string, bool)`

GetSearchOk returns a tuple with the Search field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearch

`func (o *IncidentRequestDto) SetSearch(v string)`

SetSearch sets Search field to given value.

### HasSearch

`func (o *IncidentRequestDto) HasSearch() bool`

HasSearch returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *IncidentRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *IncidentRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *IncidentRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *IncidentRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetSloSource

`func (o *IncidentRequestDto) GetSloSource() string`

GetSloSource returns the SloSource field if non-nil, zero value otherwise.

### GetSloSourceOk

`func (o *IncidentRequestDto) GetSloSourceOk() (*string, bool)`

GetSloSourceOk returns a tuple with the SloSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloSource

`func (o *IncidentRequestDto) SetSloSource(v string)`

SetSloSource sets SloSource field to given value.

### HasSloSource

`func (o *IncidentRequestDto) HasSloSource() bool`

HasSloSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


