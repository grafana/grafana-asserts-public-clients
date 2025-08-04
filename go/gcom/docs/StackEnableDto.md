# StackEnableDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Vendors** | Pointer to **[]string** |  | [optional] 
**Groups** | Pointer to [**[]StackFilterGroupDto**](StackFilterGroupDto.md) |  | [optional] 

## Methods

### NewStackEnableDto

`func NewStackEnableDto() *StackEnableDto`

NewStackEnableDto instantiates a new StackEnableDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackEnableDtoWithDefaults

`func NewStackEnableDtoWithDefaults() *StackEnableDto`

NewStackEnableDtoWithDefaults instantiates a new StackEnableDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVendors

`func (o *StackEnableDto) GetVendors() []string`

GetVendors returns the Vendors field if non-nil, zero value otherwise.

### GetVendorsOk

`func (o *StackEnableDto) GetVendorsOk() (*[]string, bool)`

GetVendorsOk returns a tuple with the Vendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendors

`func (o *StackEnableDto) SetVendors(v []string)`

SetVendors sets Vendors field to given value.

### HasVendors

`func (o *StackEnableDto) HasVendors() bool`

HasVendors returns a boolean if a field has been set.

### GetGroups

`func (o *StackEnableDto) GetGroups() []StackFilterGroupDto`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *StackEnableDto) GetGroupsOk() (*[]StackFilterGroupDto, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *StackEnableDto) SetGroups(v []StackFilterGroupDto)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *StackEnableDto) HasGroups() bool`

HasGroups returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


