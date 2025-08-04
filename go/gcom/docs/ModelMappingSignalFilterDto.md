# ModelMappingSignalFilterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Operator** | Pointer to **string** |  | [optional] 
**Values** | Pointer to **[]string** |  | [optional] 

## Methods

### NewModelMappingSignalFilterDto

`func NewModelMappingSignalFilterDto(name string, ) *ModelMappingSignalFilterDto`

NewModelMappingSignalFilterDto instantiates a new ModelMappingSignalFilterDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingSignalFilterDtoWithDefaults

`func NewModelMappingSignalFilterDtoWithDefaults() *ModelMappingSignalFilterDto`

NewModelMappingSignalFilterDtoWithDefaults instantiates a new ModelMappingSignalFilterDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelMappingSignalFilterDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelMappingSignalFilterDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelMappingSignalFilterDto) SetName(v string)`

SetName sets Name field to given value.


### GetOperator

`func (o *ModelMappingSignalFilterDto) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ModelMappingSignalFilterDto) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ModelMappingSignalFilterDto) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ModelMappingSignalFilterDto) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetValues

`func (o *ModelMappingSignalFilterDto) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ModelMappingSignalFilterDto) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ModelMappingSignalFilterDto) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *ModelMappingSignalFilterDto) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


