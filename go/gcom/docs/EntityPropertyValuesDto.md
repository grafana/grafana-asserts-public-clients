# EntityPropertyValuesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** |  | [optional] 
**PropertyName** | Pointer to **string** |  | [optional] 
**Values** | Pointer to **[]string** |  | [optional] 

## Methods

### NewEntityPropertyValuesDto

`func NewEntityPropertyValuesDto() *EntityPropertyValuesDto`

NewEntityPropertyValuesDto instantiates a new EntityPropertyValuesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityPropertyValuesDtoWithDefaults

`func NewEntityPropertyValuesDtoWithDefaults() *EntityPropertyValuesDto`

NewEntityPropertyValuesDtoWithDefaults instantiates a new EntityPropertyValuesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *EntityPropertyValuesDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *EntityPropertyValuesDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *EntityPropertyValuesDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *EntityPropertyValuesDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetPropertyName

`func (o *EntityPropertyValuesDto) GetPropertyName() string`

GetPropertyName returns the PropertyName field if non-nil, zero value otherwise.

### GetPropertyNameOk

`func (o *EntityPropertyValuesDto) GetPropertyNameOk() (*string, bool)`

GetPropertyNameOk returns a tuple with the PropertyName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyName

`func (o *EntityPropertyValuesDto) SetPropertyName(v string)`

SetPropertyName sets PropertyName field to given value.

### HasPropertyName

`func (o *EntityPropertyValuesDto) HasPropertyName() bool`

HasPropertyName returns a boolean if a field has been set.

### GetValues

`func (o *EntityPropertyValuesDto) GetValues() []string`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntityPropertyValuesDto) GetValuesOk() (*[]string, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntityPropertyValuesDto) SetValues(v []string)`

SetValues sets Values field to given value.

### HasValues

`func (o *EntityPropertyValuesDto) HasValues() bool`

HasValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


