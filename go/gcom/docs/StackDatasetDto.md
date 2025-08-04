# StackDatasetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetType** | **string** |  | 
**DisabledVendors** | Pointer to **[]string** |  | [optional] 
**FilterGroups** | Pointer to [**[]StackFilterGroupDto**](StackFilterGroupDto.md) |  | [optional] 

## Methods

### NewStackDatasetDto

`func NewStackDatasetDto(datasetType string, ) *StackDatasetDto`

NewStackDatasetDto instantiates a new StackDatasetDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackDatasetDtoWithDefaults

`func NewStackDatasetDtoWithDefaults() *StackDatasetDto`

NewStackDatasetDtoWithDefaults instantiates a new StackDatasetDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDatasetType

`func (o *StackDatasetDto) GetDatasetType() string`

GetDatasetType returns the DatasetType field if non-nil, zero value otherwise.

### GetDatasetTypeOk

`func (o *StackDatasetDto) GetDatasetTypeOk() (*string, bool)`

GetDatasetTypeOk returns a tuple with the DatasetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetType

`func (o *StackDatasetDto) SetDatasetType(v string)`

SetDatasetType sets DatasetType field to given value.


### GetDisabledVendors

`func (o *StackDatasetDto) GetDisabledVendors() []string`

GetDisabledVendors returns the DisabledVendors field if non-nil, zero value otherwise.

### GetDisabledVendorsOk

`func (o *StackDatasetDto) GetDisabledVendorsOk() (*[]string, bool)`

GetDisabledVendorsOk returns a tuple with the DisabledVendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabledVendors

`func (o *StackDatasetDto) SetDisabledVendors(v []string)`

SetDisabledVendors sets DisabledVendors field to given value.

### HasDisabledVendors

`func (o *StackDatasetDto) HasDisabledVendors() bool`

HasDisabledVendors returns a boolean if a field has been set.

### GetFilterGroups

`func (o *StackDatasetDto) GetFilterGroups() []StackFilterGroupDto`

GetFilterGroups returns the FilterGroups field if non-nil, zero value otherwise.

### GetFilterGroupsOk

`func (o *StackDatasetDto) GetFilterGroupsOk() (*[]StackFilterGroupDto, bool)`

GetFilterGroupsOk returns a tuple with the FilterGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterGroups

`func (o *StackDatasetDto) SetFilterGroups(v []StackFilterGroupDto)`

SetFilterGroups sets FilterGroups field to given value.

### HasFilterGroups

`func (o *StackDatasetDto) HasFilterGroups() bool`

HasFilterGroups returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


