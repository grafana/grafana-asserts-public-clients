# SloIncidentRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**SloName** | Pointer to **string** |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**SloSource** | Pointer to **string** |  | [optional] 

## Methods

### NewSloIncidentRequestDto

`func NewSloIncidentRequestDto() *SloIncidentRequestDto`

NewSloIncidentRequestDto instantiates a new SloIncidentRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloIncidentRequestDtoWithDefaults

`func NewSloIncidentRequestDtoWithDefaults() *SloIncidentRequestDto`

NewSloIncidentRequestDtoWithDefaults instantiates a new SloIncidentRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *SloIncidentRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *SloIncidentRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *SloIncidentRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *SloIncidentRequestDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *SloIncidentRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *SloIncidentRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *SloIncidentRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *SloIncidentRequestDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSloName

`func (o *SloIncidentRequestDto) GetSloName() string`

GetSloName returns the SloName field if non-nil, zero value otherwise.

### GetSloNameOk

`func (o *SloIncidentRequestDto) GetSloNameOk() (*string, bool)`

GetSloNameOk returns a tuple with the SloName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloName

`func (o *SloIncidentRequestDto) SetSloName(v string)`

SetSloName sets SloName field to given value.

### HasSloName

`func (o *SloIncidentRequestDto) HasSloName() bool`

HasSloName returns a boolean if a field has been set.

### GetTargetName

`func (o *SloIncidentRequestDto) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SloIncidentRequestDto) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SloIncidentRequestDto) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SloIncidentRequestDto) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *SloIncidentRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *SloIncidentRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *SloIncidentRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *SloIncidentRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetSloSource

`func (o *SloIncidentRequestDto) GetSloSource() string`

GetSloSource returns the SloSource field if non-nil, zero value otherwise.

### GetSloSourceOk

`func (o *SloIncidentRequestDto) GetSloSourceOk() (*string, bool)`

GetSloSourceOk returns a tuple with the SloSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloSource

`func (o *SloIncidentRequestDto) SetSloSource(v string)`

SetSloSource sets SloSource field to given value.

### HasSloSource

`func (o *SloIncidentRequestDto) HasSloSource() bool`

HasSloSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


