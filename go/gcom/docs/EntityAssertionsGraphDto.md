# EntityAssertionsGraphDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**TimeCriteria** | Pointer to [**TimeWindowDto**](TimeWindowDto.md) |  | [optional] 
**Data** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewEntityAssertionsGraphDto

`func NewEntityAssertionsGraphDto() *EntityAssertionsGraphDto`

NewEntityAssertionsGraphDto instantiates a new EntityAssertionsGraphDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionsGraphDtoWithDefaults

`func NewEntityAssertionsGraphDtoWithDefaults() *EntityAssertionsGraphDto`

NewEntityAssertionsGraphDtoWithDefaults instantiates a new EntityAssertionsGraphDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntityAssertionsGraphDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityAssertionsGraphDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityAssertionsGraphDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityAssertionsGraphDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTimeCriteria

`func (o *EntityAssertionsGraphDto) GetTimeCriteria() TimeWindowDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *EntityAssertionsGraphDto) GetTimeCriteriaOk() (*TimeWindowDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *EntityAssertionsGraphDto) SetTimeCriteria(v TimeWindowDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *EntityAssertionsGraphDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetData

`func (o *EntityAssertionsGraphDto) GetData() interface{}`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *EntityAssertionsGraphDto) GetDataOk() (*interface{}, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *EntityAssertionsGraphDto) SetData(v interface{})`

SetData sets Data field to given value.

### HasData

`func (o *EntityAssertionsGraphDto) HasData() bool`

HasData returns a boolean if a field has been set.

### SetDataNil

`func (o *EntityAssertionsGraphDto) SetDataNil(b bool)`

 SetDataNil sets the value for Data to be an explicit nil

### UnsetData
`func (o *EntityAssertionsGraphDto) UnsetData()`

UnsetData ensures that no value is present for Data, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


