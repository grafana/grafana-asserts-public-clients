# EntityReadResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]string** |  | [optional] 
**Active** | Pointer to **bool** | Whether the entity is currently active (not expired). | [optional] [default to false]
**Properties** | Pointer to **map[string]interface{}** | Properties stored on the entity: scalar values (string, boolean, int64, or double) or arrays of scalars. | [optional] 
**ConnectedTypes** | Pointer to **[]string** | Entity types this entity has at least one relationship to; useful for building follow-up /entities/connected queries. | [optional] 

## Methods

### NewEntityReadResponseDto

`func NewEntityReadResponseDto() *EntityReadResponseDto`

NewEntityReadResponseDto instantiates a new EntityReadResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityReadResponseDtoWithDefaults

`func NewEntityReadResponseDtoWithDefaults() *EntityReadResponseDto`

NewEntityReadResponseDtoWithDefaults instantiates a new EntityReadResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *EntityReadResponseDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *EntityReadResponseDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *EntityReadResponseDto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *EntityReadResponseDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetType

`func (o *EntityReadResponseDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityReadResponseDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityReadResponseDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityReadResponseDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityReadResponseDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityReadResponseDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityReadResponseDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityReadResponseDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *EntityReadResponseDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityReadResponseDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityReadResponseDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityReadResponseDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetActive

`func (o *EntityReadResponseDto) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *EntityReadResponseDto) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *EntityReadResponseDto) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *EntityReadResponseDto) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetProperties

`func (o *EntityReadResponseDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *EntityReadResponseDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *EntityReadResponseDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *EntityReadResponseDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetConnectedTypes

`func (o *EntityReadResponseDto) GetConnectedTypes() []string`

GetConnectedTypes returns the ConnectedTypes field if non-nil, zero value otherwise.

### GetConnectedTypesOk

`func (o *EntityReadResponseDto) GetConnectedTypesOk() (*[]string, bool)`

GetConnectedTypesOk returns a tuple with the ConnectedTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedTypes

`func (o *EntityReadResponseDto) SetConnectedTypes(v []string)`

SetConnectedTypes sets ConnectedTypes field to given value.

### HasConnectedTypes

`func (o *EntityReadResponseDto) HasConnectedTypes() bool`

HasConnectedTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


