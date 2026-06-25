# EntityRefDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**Type** | **string** |  | 
**Name** | **string** |  | 
**Scope** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewEntityRefDto

`func NewEntityRefDto(domain string, type_ string, name string, ) *EntityRefDto`

NewEntityRefDto instantiates a new EntityRefDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityRefDtoWithDefaults

`func NewEntityRefDtoWithDefaults() *EntityRefDto`

NewEntityRefDtoWithDefaults instantiates a new EntityRefDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *EntityRefDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *EntityRefDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *EntityRefDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetType

`func (o *EntityRefDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityRefDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityRefDto) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *EntityRefDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityRefDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityRefDto) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *EntityRefDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityRefDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityRefDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityRefDto) HasScope() bool`

HasScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


