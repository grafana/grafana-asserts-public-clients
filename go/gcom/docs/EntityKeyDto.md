# EntityKeyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewEntityKeyDto

`func NewEntityKeyDto() *EntityKeyDto`

NewEntityKeyDto instantiates a new EntityKeyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityKeyDtoWithDefaults

`func NewEntityKeyDtoWithDefaults() *EntityKeyDto`

NewEntityKeyDtoWithDefaults instantiates a new EntityKeyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntityKeyDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityKeyDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityKeyDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityKeyDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityKeyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityKeyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityKeyDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityKeyDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *EntityKeyDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityKeyDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityKeyDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityKeyDto) HasScope() bool`

HasScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


