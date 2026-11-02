# SchemaScopeKeyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Type** | **string** |  | 
**Required** | Pointer to **bool** |  | [optional] 
**Enum** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSchemaScopeKeyDto

`func NewSchemaScopeKeyDto(name string, type_ string, ) *SchemaScopeKeyDto`

NewSchemaScopeKeyDto instantiates a new SchemaScopeKeyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaScopeKeyDtoWithDefaults

`func NewSchemaScopeKeyDtoWithDefaults() *SchemaScopeKeyDto`

NewSchemaScopeKeyDtoWithDefaults instantiates a new SchemaScopeKeyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaScopeKeyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaScopeKeyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaScopeKeyDto) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SchemaScopeKeyDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SchemaScopeKeyDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SchemaScopeKeyDto) SetType(v string)`

SetType sets Type field to given value.


### GetRequired

`func (o *SchemaScopeKeyDto) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SchemaScopeKeyDto) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SchemaScopeKeyDto) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *SchemaScopeKeyDto) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetEnum

`func (o *SchemaScopeKeyDto) GetEnum() []string`

GetEnum returns the Enum field if non-nil, zero value otherwise.

### GetEnumOk

`func (o *SchemaScopeKeyDto) GetEnumOk() (*[]string, bool)`

GetEnumOk returns a tuple with the Enum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnum

`func (o *SchemaScopeKeyDto) SetEnum(v []string)`

SetEnum sets Enum field to given value.

### HasEnum

`func (o *SchemaScopeKeyDto) HasEnum() bool`

HasEnum returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


