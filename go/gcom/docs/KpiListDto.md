# KpiListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KpiGroups** | Pointer to [**[]KpiGroupDto**](KpiGroupDto.md) |  | [optional] 
**KpisByEntityType** | Pointer to [**[]EntityKpiScopeDto**](EntityKpiScopeDto.md) |  | [optional] 

## Methods

### NewKpiListDto

`func NewKpiListDto() *KpiListDto`

NewKpiListDto instantiates a new KpiListDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKpiListDtoWithDefaults

`func NewKpiListDtoWithDefaults() *KpiListDto`

NewKpiListDtoWithDefaults instantiates a new KpiListDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKpiGroups

`func (o *KpiListDto) GetKpiGroups() []KpiGroupDto`

GetKpiGroups returns the KpiGroups field if non-nil, zero value otherwise.

### GetKpiGroupsOk

`func (o *KpiListDto) GetKpiGroupsOk() (*[]KpiGroupDto, bool)`

GetKpiGroupsOk returns a tuple with the KpiGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKpiGroups

`func (o *KpiListDto) SetKpiGroups(v []KpiGroupDto)`

SetKpiGroups sets KpiGroups field to given value.

### HasKpiGroups

`func (o *KpiListDto) HasKpiGroups() bool`

HasKpiGroups returns a boolean if a field has been set.

### GetKpisByEntityType

`func (o *KpiListDto) GetKpisByEntityType() []EntityKpiScopeDto`

GetKpisByEntityType returns the KpisByEntityType field if non-nil, zero value otherwise.

### GetKpisByEntityTypeOk

`func (o *KpiListDto) GetKpisByEntityTypeOk() (*[]EntityKpiScopeDto, bool)`

GetKpisByEntityTypeOk returns a tuple with the KpisByEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKpisByEntityType

`func (o *KpiListDto) SetKpisByEntityType(v []EntityKpiScopeDto)`

SetKpisByEntityType sets KpisByEntityType field to given value.

### HasKpisByEntityType

`func (o *KpiListDto) HasKpisByEntityType() bool`

HasKpisByEntityType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


