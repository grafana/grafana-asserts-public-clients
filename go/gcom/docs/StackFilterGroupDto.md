# StackFilterGroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EnvLabel** | Pointer to **string** |  | [optional] 
**EnvName** | Pointer to **string** |  | [optional] 
**SiteLabel** | Pointer to **string** |  | [optional] 
**Filters** | Pointer to [**[]StackFilterDto**](StackFilterDto.md) |  | [optional] 
**EnvLabelValues** | Pointer to **[]string** |  | [optional] 
**SiteLabelValues** | Pointer to **[]string** |  | [optional] 

## Methods

### NewStackFilterGroupDto

`func NewStackFilterGroupDto() *StackFilterGroupDto`

NewStackFilterGroupDto instantiates a new StackFilterGroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackFilterGroupDtoWithDefaults

`func NewStackFilterGroupDtoWithDefaults() *StackFilterGroupDto`

NewStackFilterGroupDtoWithDefaults instantiates a new StackFilterGroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnvLabel

`func (o *StackFilterGroupDto) GetEnvLabel() string`

GetEnvLabel returns the EnvLabel field if non-nil, zero value otherwise.

### GetEnvLabelOk

`func (o *StackFilterGroupDto) GetEnvLabelOk() (*string, bool)`

GetEnvLabelOk returns a tuple with the EnvLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvLabel

`func (o *StackFilterGroupDto) SetEnvLabel(v string)`

SetEnvLabel sets EnvLabel field to given value.

### HasEnvLabel

`func (o *StackFilterGroupDto) HasEnvLabel() bool`

HasEnvLabel returns a boolean if a field has been set.

### GetEnvName

`func (o *StackFilterGroupDto) GetEnvName() string`

GetEnvName returns the EnvName field if non-nil, zero value otherwise.

### GetEnvNameOk

`func (o *StackFilterGroupDto) GetEnvNameOk() (*string, bool)`

GetEnvNameOk returns a tuple with the EnvName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvName

`func (o *StackFilterGroupDto) SetEnvName(v string)`

SetEnvName sets EnvName field to given value.

### HasEnvName

`func (o *StackFilterGroupDto) HasEnvName() bool`

HasEnvName returns a boolean if a field has been set.

### GetSiteLabel

`func (o *StackFilterGroupDto) GetSiteLabel() string`

GetSiteLabel returns the SiteLabel field if non-nil, zero value otherwise.

### GetSiteLabelOk

`func (o *StackFilterGroupDto) GetSiteLabelOk() (*string, bool)`

GetSiteLabelOk returns a tuple with the SiteLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSiteLabel

`func (o *StackFilterGroupDto) SetSiteLabel(v string)`

SetSiteLabel sets SiteLabel field to given value.

### HasSiteLabel

`func (o *StackFilterGroupDto) HasSiteLabel() bool`

HasSiteLabel returns a boolean if a field has been set.

### GetFilters

`func (o *StackFilterGroupDto) GetFilters() []StackFilterDto`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *StackFilterGroupDto) GetFiltersOk() (*[]StackFilterDto, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *StackFilterGroupDto) SetFilters(v []StackFilterDto)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *StackFilterGroupDto) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetEnvLabelValues

`func (o *StackFilterGroupDto) GetEnvLabelValues() []string`

GetEnvLabelValues returns the EnvLabelValues field if non-nil, zero value otherwise.

### GetEnvLabelValuesOk

`func (o *StackFilterGroupDto) GetEnvLabelValuesOk() (*[]string, bool)`

GetEnvLabelValuesOk returns a tuple with the EnvLabelValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvLabelValues

`func (o *StackFilterGroupDto) SetEnvLabelValues(v []string)`

SetEnvLabelValues sets EnvLabelValues field to given value.

### HasEnvLabelValues

`func (o *StackFilterGroupDto) HasEnvLabelValues() bool`

HasEnvLabelValues returns a boolean if a field has been set.

### GetSiteLabelValues

`func (o *StackFilterGroupDto) GetSiteLabelValues() []string`

GetSiteLabelValues returns the SiteLabelValues field if non-nil, zero value otherwise.

### GetSiteLabelValuesOk

`func (o *StackFilterGroupDto) GetSiteLabelValuesOk() (*[]string, bool)`

GetSiteLabelValuesOk returns a tuple with the SiteLabelValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSiteLabelValues

`func (o *StackFilterGroupDto) SetSiteLabelValues(v []string)`

SetSiteLabelValues sets SiteLabelValues field to given value.

### HasSiteLabelValues

`func (o *StackFilterGroupDto) HasSiteLabelValues() bool`

HasSiteLabelValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


