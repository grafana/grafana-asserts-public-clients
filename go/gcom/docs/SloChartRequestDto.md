# SloChartRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChartName** | Pointer to **string** |  | [optional] 
**SloName** | Pointer to **string** |  | [optional] 
**TargetName** | Pointer to **string** |  | [optional] 
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**SloSource** | Pointer to **string** |  | [optional] 

## Methods

### NewSloChartRequestDto

`func NewSloChartRequestDto() *SloChartRequestDto`

NewSloChartRequestDto instantiates a new SloChartRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloChartRequestDtoWithDefaults

`func NewSloChartRequestDtoWithDefaults() *SloChartRequestDto`

NewSloChartRequestDtoWithDefaults instantiates a new SloChartRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChartName

`func (o *SloChartRequestDto) GetChartName() string`

GetChartName returns the ChartName field if non-nil, zero value otherwise.

### GetChartNameOk

`func (o *SloChartRequestDto) GetChartNameOk() (*string, bool)`

GetChartNameOk returns a tuple with the ChartName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChartName

`func (o *SloChartRequestDto) SetChartName(v string)`

SetChartName sets ChartName field to given value.

### HasChartName

`func (o *SloChartRequestDto) HasChartName() bool`

HasChartName returns a boolean if a field has been set.

### GetSloName

`func (o *SloChartRequestDto) GetSloName() string`

GetSloName returns the SloName field if non-nil, zero value otherwise.

### GetSloNameOk

`func (o *SloChartRequestDto) GetSloNameOk() (*string, bool)`

GetSloNameOk returns a tuple with the SloName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloName

`func (o *SloChartRequestDto) SetSloName(v string)`

SetSloName sets SloName field to given value.

### HasSloName

`func (o *SloChartRequestDto) HasSloName() bool`

HasSloName returns a boolean if a field has been set.

### GetTargetName

`func (o *SloChartRequestDto) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SloChartRequestDto) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SloChartRequestDto) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SloChartRequestDto) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetStart

`func (o *SloChartRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *SloChartRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *SloChartRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *SloChartRequestDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *SloChartRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *SloChartRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *SloChartRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *SloChartRequestDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *SloChartRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *SloChartRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *SloChartRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *SloChartRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetSloSource

`func (o *SloChartRequestDto) GetSloSource() string`

GetSloSource returns the SloSource field if non-nil, zero value otherwise.

### GetSloSourceOk

`func (o *SloChartRequestDto) GetSloSourceOk() (*string, bool)`

GetSloSourceOk returns a tuple with the SloSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloSource

`func (o *SloChartRequestDto) SetSloSource(v string)`

SetSloSource sets SloSource field to given value.

### HasSloSource

`func (o *SloChartRequestDto) HasSloSource() bool`

HasSloSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


