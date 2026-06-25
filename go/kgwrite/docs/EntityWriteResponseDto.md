# EntityWriteResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]string** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewEntityWriteResponseDto

`func NewEntityWriteResponseDto() *EntityWriteResponseDto`

NewEntityWriteResponseDto instantiates a new EntityWriteResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityWriteResponseDtoWithDefaults

`func NewEntityWriteResponseDtoWithDefaults() *EntityWriteResponseDto`

NewEntityWriteResponseDtoWithDefaults instantiates a new EntityWriteResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *EntityWriteResponseDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *EntityWriteResponseDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *EntityWriteResponseDto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *EntityWriteResponseDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetType

`func (o *EntityWriteResponseDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityWriteResponseDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityWriteResponseDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityWriteResponseDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityWriteResponseDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityWriteResponseDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityWriteResponseDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityWriteResponseDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *EntityWriteResponseDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityWriteResponseDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityWriteResponseDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityWriteResponseDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetProperties

`func (o *EntityWriteResponseDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *EntityWriteResponseDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *EntityWriteResponseDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *EntityWriteResponseDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


