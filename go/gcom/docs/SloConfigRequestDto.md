# SloConfigRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiVersion** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**EntitySearch** | Pointer to **string** |  | [optional] 
**Indicator** | Pointer to [**SloConfigRequestDtoIndicator**](SloConfigRequestDtoIndicator.md) |  | [optional] 
**Objectives** | Pointer to [**[]SloConfigDto**](SloConfigDto.md) |  | [optional] 

## Methods

### NewSloConfigRequestDto

`func NewSloConfigRequestDto() *SloConfigRequestDto`

NewSloConfigRequestDto instantiates a new SloConfigRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloConfigRequestDtoWithDefaults

`func NewSloConfigRequestDtoWithDefaults() *SloConfigRequestDto`

NewSloConfigRequestDtoWithDefaults instantiates a new SloConfigRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApiVersion

`func (o *SloConfigRequestDto) GetApiVersion() string`

GetApiVersion returns the ApiVersion field if non-nil, zero value otherwise.

### GetApiVersionOk

`func (o *SloConfigRequestDto) GetApiVersionOk() (*string, bool)`

GetApiVersionOk returns a tuple with the ApiVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiVersion

`func (o *SloConfigRequestDto) SetApiVersion(v string)`

SetApiVersion sets ApiVersion field to given value.

### HasApiVersion

`func (o *SloConfigRequestDto) HasApiVersion() bool`

HasApiVersion returns a boolean if a field has been set.

### GetName

`func (o *SloConfigRequestDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SloConfigRequestDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SloConfigRequestDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SloConfigRequestDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEntitySearch

`func (o *SloConfigRequestDto) GetEntitySearch() string`

GetEntitySearch returns the EntitySearch field if non-nil, zero value otherwise.

### GetEntitySearchOk

`func (o *SloConfigRequestDto) GetEntitySearchOk() (*string, bool)`

GetEntitySearchOk returns a tuple with the EntitySearch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitySearch

`func (o *SloConfigRequestDto) SetEntitySearch(v string)`

SetEntitySearch sets EntitySearch field to given value.

### HasEntitySearch

`func (o *SloConfigRequestDto) HasEntitySearch() bool`

HasEntitySearch returns a boolean if a field has been set.

### GetIndicator

`func (o *SloConfigRequestDto) GetIndicator() SloConfigRequestDtoIndicator`

GetIndicator returns the Indicator field if non-nil, zero value otherwise.

### GetIndicatorOk

`func (o *SloConfigRequestDto) GetIndicatorOk() (*SloConfigRequestDtoIndicator, bool)`

GetIndicatorOk returns a tuple with the Indicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicator

`func (o *SloConfigRequestDto) SetIndicator(v SloConfigRequestDtoIndicator)`

SetIndicator sets Indicator field to given value.

### HasIndicator

`func (o *SloConfigRequestDto) HasIndicator() bool`

HasIndicator returns a boolean if a field has been set.

### GetObjectives

`func (o *SloConfigRequestDto) GetObjectives() []SloConfigDto`

GetObjectives returns the Objectives field if non-nil, zero value otherwise.

### GetObjectivesOk

`func (o *SloConfigRequestDto) GetObjectivesOk() (*[]SloConfigDto, bool)`

GetObjectivesOk returns a tuple with the Objectives field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjectives

`func (o *SloConfigRequestDto) SetObjectives(v []SloConfigDto)`

SetObjectives sets Objectives field to given value.

### HasObjectives

`func (o *SloConfigRequestDto) HasObjectives() bool`

HasObjectives returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


