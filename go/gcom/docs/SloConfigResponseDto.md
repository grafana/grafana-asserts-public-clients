# SloConfigResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Indicator** | Pointer to [**SloConfigRequestDtoIndicator**](SloConfigRequestDtoIndicator.md) |  | [optional] 
**Objectives** | Pointer to [**[]SloConfigDto**](SloConfigDto.md) |  | [optional] 
**EntitySearch** | Pointer to **string** |  | [optional] 

## Methods

### NewSloConfigResponseDto

`func NewSloConfigResponseDto() *SloConfigResponseDto`

NewSloConfigResponseDto instantiates a new SloConfigResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloConfigResponseDtoWithDefaults

`func NewSloConfigResponseDtoWithDefaults() *SloConfigResponseDto`

NewSloConfigResponseDtoWithDefaults instantiates a new SloConfigResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *SloConfigResponseDto) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *SloConfigResponseDto) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *SloConfigResponseDto) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *SloConfigResponseDto) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetName

`func (o *SloConfigResponseDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SloConfigResponseDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SloConfigResponseDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SloConfigResponseDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetStatus

`func (o *SloConfigResponseDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SloConfigResponseDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SloConfigResponseDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SloConfigResponseDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetIndicator

`func (o *SloConfigResponseDto) GetIndicator() SloConfigRequestDtoIndicator`

GetIndicator returns the Indicator field if non-nil, zero value otherwise.

### GetIndicatorOk

`func (o *SloConfigResponseDto) GetIndicatorOk() (*SloConfigRequestDtoIndicator, bool)`

GetIndicatorOk returns a tuple with the Indicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicator

`func (o *SloConfigResponseDto) SetIndicator(v SloConfigRequestDtoIndicator)`

SetIndicator sets Indicator field to given value.

### HasIndicator

`func (o *SloConfigResponseDto) HasIndicator() bool`

HasIndicator returns a boolean if a field has been set.

### GetObjectives

`func (o *SloConfigResponseDto) GetObjectives() []SloConfigDto`

GetObjectives returns the Objectives field if non-nil, zero value otherwise.

### GetObjectivesOk

`func (o *SloConfigResponseDto) GetObjectivesOk() (*[]SloConfigDto, bool)`

GetObjectivesOk returns a tuple with the Objectives field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectives

`func (o *SloConfigResponseDto) SetObjectives(v []SloConfigDto)`

SetObjectives sets Objectives field to given value.

### HasObjectives

`func (o *SloConfigResponseDto) HasObjectives() bool`

HasObjectives returns a boolean if a field has been set.

### GetEntitySearch

`func (o *SloConfigResponseDto) GetEntitySearch() string`

GetEntitySearch returns the EntitySearch field if non-nil, zero value otherwise.

### GetEntitySearchOk

`func (o *SloConfigResponseDto) GetEntitySearchOk() (*string, bool)`

GetEntitySearchOk returns a tuple with the EntitySearch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitySearch

`func (o *SloConfigResponseDto) SetEntitySearch(v string)`

SetEntitySearch sets EntitySearch field to given value.

### HasEntitySearch

`func (o *SloConfigResponseDto) HasEntitySearch() bool`

HasEntitySearch returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


