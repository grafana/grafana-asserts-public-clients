# SearchResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**TimeCriteria** | Pointer to [**TimeCriteriaDto**](TimeCriteriaDto.md) |  | [optional] 
**StepDuration** | Pointer to **string** |  | [optional] 
**Data** | Pointer to **interface{}** |  | [optional] 
**AdjustedTimeCriteria** | Pointer to **bool** |  | [optional] 

## Methods

### NewSearchResponseDto

`func NewSearchResponseDto() *SearchResponseDto`

NewSearchResponseDto instantiates a new SearchResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchResponseDtoWithDefaults

`func NewSearchResponseDtoWithDefaults() *SearchResponseDto`

NewSearchResponseDtoWithDefaults instantiates a new SearchResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SearchResponseDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SearchResponseDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SearchResponseDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SearchResponseDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTimeCriteria

`func (o *SearchResponseDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *SearchResponseDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *SearchResponseDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *SearchResponseDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetStepDuration

`func (o *SearchResponseDto) GetStepDuration() string`

GetStepDuration returns the StepDuration field if non-nil, zero value otherwise.

### GetStepDurationOk

`func (o *SearchResponseDto) GetStepDurationOk() (*string, bool)`

GetStepDurationOk returns a tuple with the StepDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepDuration

`func (o *SearchResponseDto) SetStepDuration(v string)`

SetStepDuration sets StepDuration field to given value.

### HasStepDuration

`func (o *SearchResponseDto) HasStepDuration() bool`

HasStepDuration returns a boolean if a field has been set.

### GetData

`func (o *SearchResponseDto) GetData() interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *SearchResponseDto) GetDataOk() (*interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *SearchResponseDto) SetData(v interface{})`

SetData sets Data field to given value.

### HasData

`func (o *SearchResponseDto) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *SearchResponseDto) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *SearchResponseDto) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil
### GetAdjustedTimeCriteria

`func (o *SearchResponseDto) GetAdjustedTimeCriteria() bool`

GetAdjustedTimeCriteria returns the AdjustedTimeCriteria field if non-nil, zero value otherwise.

### GetAdjustedTimeCriteriaOk

`func (o *SearchResponseDto) GetAdjustedTimeCriteriaOk() (*bool, bool)`

GetAdjustedTimeCriteriaOk returns a tuple with the AdjustedTimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustedTimeCriteria

`func (o *SearchResponseDto) SetAdjustedTimeCriteria(v bool)`

SetAdjustedTimeCriteria sets AdjustedTimeCriteria field to given value.

### HasAdjustedTimeCriteria

`func (o *SearchResponseDto) HasAdjustedTimeCriteria() bool`

HasAdjustedTimeCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


