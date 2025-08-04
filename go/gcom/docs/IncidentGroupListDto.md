# IncidentGroupListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IncidentGroups** | Pointer to [**[]IncidentGroupDto**](IncidentGroupDto.md) |  | [optional] 
**ChartName** | Pointer to **string** |  | [optional] 

## Methods

### NewIncidentGroupListDto

`func NewIncidentGroupListDto() *IncidentGroupListDto`

NewIncidentGroupListDto instantiates a new IncidentGroupListDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentGroupListDtoWithDefaults

`func NewIncidentGroupListDtoWithDefaults() *IncidentGroupListDto`

NewIncidentGroupListDtoWithDefaults instantiates a new IncidentGroupListDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncidentGroups

`func (o *IncidentGroupListDto) GetIncidentGroups() []IncidentGroupDto`

GetIncidentGroups returns the IncidentGroups field if non-nil, zero value otherwise.

### GetIncidentGroupsOk

`func (o *IncidentGroupListDto) GetIncidentGroupsOk() (*[]IncidentGroupDto, bool)`

GetIncidentGroupsOk returns a tuple with the IncidentGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentGroups

`func (o *IncidentGroupListDto) SetIncidentGroups(v []IncidentGroupDto)`

SetIncidentGroups sets IncidentGroups field to given value.

### HasIncidentGroups

`func (o *IncidentGroupListDto) HasIncidentGroups() bool`

HasIncidentGroups returns a boolean if a field has been set.

### GetChartName

`func (o *IncidentGroupListDto) GetChartName() string`

GetChartName returns the ChartName field if non-nil, zero value otherwise.

### GetChartNameOk

`func (o *IncidentGroupListDto) GetChartNameOk() (*string, bool)`

GetChartNameOk returns a tuple with the ChartName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChartName

`func (o *IncidentGroupListDto) SetChartName(v string)`

SetChartName sets ChartName field to given value.

### HasChartName

`func (o *IncidentGroupListDto) HasChartName() bool`

HasChartName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


