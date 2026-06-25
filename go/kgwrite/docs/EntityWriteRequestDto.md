# EntityWriteRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**Type** | **string** |  | 
**Name** | **string** |  | 
**Scope** | Pointer to **map[string]string** |  | [optional] 
**Properties** | Pointer to **map[string]string** |  | [optional] 
**TtlSeconds** | **int64** |  | 

## Methods

### NewEntityWriteRequestDto

`func NewEntityWriteRequestDto(domain string, type_ string, name string, ttlSeconds int64, ) *EntityWriteRequestDto`

NewEntityWriteRequestDto instantiates a new EntityWriteRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityWriteRequestDtoWithDefaults

`func NewEntityWriteRequestDtoWithDefaults() *EntityWriteRequestDto`

NewEntityWriteRequestDtoWithDefaults instantiates a new EntityWriteRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *EntityWriteRequestDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *EntityWriteRequestDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *EntityWriteRequestDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetType

`func (o *EntityWriteRequestDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityWriteRequestDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityWriteRequestDto) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *EntityWriteRequestDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityWriteRequestDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityWriteRequestDto) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *EntityWriteRequestDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityWriteRequestDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityWriteRequestDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityWriteRequestDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetProperties

`func (o *EntityWriteRequestDto) GetProperties() map[string]string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *EntityWriteRequestDto) GetPropertiesOk() (*map[string]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *EntityWriteRequestDto) SetProperties(v map[string]string)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *EntityWriteRequestDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetTtlSeconds

`func (o *EntityWriteRequestDto) GetTtlSeconds() int64`

GetTtlSeconds returns the TtlSeconds field if non-nil, zero value otherwise.

### GetTtlSecondsOk

`func (o *EntityWriteRequestDto) GetTtlSecondsOk() (*int64, bool)`

GetTtlSecondsOk returns a tuple with the TtlSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtlSeconds

`func (o *EntityWriteRequestDto) SetTtlSeconds(v int64)`

SetTtlSeconds sets TtlSeconds field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


