# SloListRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**SloSource** | Pointer to **string** |  | [optional] 

## Methods

### NewSloListRequestDto

`func NewSloListRequestDto() *SloListRequestDto`

NewSloListRequestDto instantiates a new SloListRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloListRequestDtoWithDefaults

`func NewSloListRequestDtoWithDefaults() *SloListRequestDto`

NewSloListRequestDtoWithDefaults instantiates a new SloListRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScopeCriteria

`func (o *SloListRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *SloListRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *SloListRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *SloListRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetEndTime

`func (o *SloListRequestDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *SloListRequestDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *SloListRequestDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *SloListRequestDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetSloSource

`func (o *SloListRequestDto) GetSloSource() string`

GetSloSource returns the SloSource field if non-nil, zero value otherwise.

### GetSloSourceOk

`func (o *SloListRequestDto) GetSloSourceOk() (*string, bool)`

GetSloSourceOk returns a tuple with the SloSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloSource

`func (o *SloListRequestDto) SetSloSource(v string)`

SetSloSource sets SloSource field to given value.

### HasSloSource

`func (o *SloListRequestDto) HasSloSource() bool`

HasSloSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


