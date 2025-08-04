# EntityMatcherDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | **string** |  | 
**PropertyMatchers** | Pointer to [**[]PropertyMatcherDto**](PropertyMatcherDto.md) |  | [optional] 
**ConnectToEntityTypes** | Pointer to **[]string** |  | [optional] 
**HavingAssertion** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityMatcherDto

`func NewEntityMatcherDto(entityType string, ) *EntityMatcherDto`

NewEntityMatcherDto instantiates a new EntityMatcherDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityMatcherDtoWithDefaults

`func NewEntityMatcherDtoWithDefaults() *EntityMatcherDto`

NewEntityMatcherDtoWithDefaults instantiates a new EntityMatcherDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *EntityMatcherDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *EntityMatcherDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *EntityMatcherDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.


### GetPropertyMatchers

`func (o *EntityMatcherDto) GetPropertyMatchers() []PropertyMatcherDto`

GetPropertyMatchers returns the PropertyMatchers field if non-nil, zero value otherwise.

### GetPropertyMatchersOk

`func (o *EntityMatcherDto) GetPropertyMatchersOk() (*[]PropertyMatcherDto, bool)`

GetPropertyMatchersOk returns a tuple with the PropertyMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatchers

`func (o *EntityMatcherDto) SetPropertyMatchers(v []PropertyMatcherDto)`

SetPropertyMatchers sets PropertyMatchers field to given value.

### HasPropertyMatchers

`func (o *EntityMatcherDto) HasPropertyMatchers() bool`

HasPropertyMatchers returns a boolean if a field has been set.

### GetConnectToEntityTypes

`func (o *EntityMatcherDto) GetConnectToEntityTypes() []string`

GetConnectToEntityTypes returns the ConnectToEntityTypes field if non-nil, zero value otherwise.

### GetConnectToEntityTypesOk

`func (o *EntityMatcherDto) GetConnectToEntityTypesOk() (*[]string, bool)`

GetConnectToEntityTypesOk returns a tuple with the ConnectToEntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectToEntityTypes

`func (o *EntityMatcherDto) SetConnectToEntityTypes(v []string)`

SetConnectToEntityTypes sets ConnectToEntityTypes field to given value.

### HasConnectToEntityTypes

`func (o *EntityMatcherDto) HasConnectToEntityTypes() bool`

HasConnectToEntityTypes returns a boolean if a field has been set.

### GetHavingAssertion

`func (o *EntityMatcherDto) GetHavingAssertion() bool`

GetHavingAssertion returns the HavingAssertion field if non-nil, zero value otherwise.

### GetHavingAssertionOk

`func (o *EntityMatcherDto) GetHavingAssertionOk() (*bool, bool)`

GetHavingAssertionOk returns a tuple with the HavingAssertion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHavingAssertion

`func (o *EntityMatcherDto) SetHavingAssertion(v bool)`

SetHavingAssertion sets HavingAssertion field to given value.

### HasHavingAssertion

`func (o *EntityMatcherDto) HasHavingAssertion() bool`

HasHavingAssertion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


