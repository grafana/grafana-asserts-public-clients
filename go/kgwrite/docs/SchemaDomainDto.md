# SchemaDomainDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**DisplayName** | Pointer to **string** |  | [optional] 
**Version** | **string** |  | 

## Methods

### NewSchemaDomainDto

`func NewSchemaDomainDto(name string, version string, ) *SchemaDomainDto`

NewSchemaDomainDto instantiates a new SchemaDomainDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaDomainDtoWithDefaults

`func NewSchemaDomainDtoWithDefaults() *SchemaDomainDto`

NewSchemaDomainDtoWithDefaults instantiates a new SchemaDomainDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaDomainDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaDomainDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaDomainDto) SetName(v string)`

SetName sets Name field to given value.


### GetDisplayName

`func (o *SchemaDomainDto) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SchemaDomainDto) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SchemaDomainDto) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *SchemaDomainDto) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetVersion

`func (o *SchemaDomainDto) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *SchemaDomainDto) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *SchemaDomainDto) SetVersion(v string)`

SetVersion sets Version field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


