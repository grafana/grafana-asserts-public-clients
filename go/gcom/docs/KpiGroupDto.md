# KpiGroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Kpis** | Pointer to [**[]KpiNameDto**](KpiNameDto.md) |  | [optional] 

## Methods

### NewKpiGroupDto

`func NewKpiGroupDto() *KpiGroupDto`

NewKpiGroupDto instantiates a new KpiGroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKpiGroupDtoWithDefaults

`func NewKpiGroupDtoWithDefaults() *KpiGroupDto`

NewKpiGroupDtoWithDefaults instantiates a new KpiGroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *KpiGroupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *KpiGroupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *KpiGroupDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *KpiGroupDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetKpis

`func (o *KpiGroupDto) GetKpis() []KpiNameDto`

GetKpis returns the Kpis field if non-nil, zero value otherwise.

### GetKpisOk

`func (o *KpiGroupDto) GetKpisOk() (*[]KpiNameDto, bool)`

GetKpisOk returns a tuple with the Kpis field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKpis

`func (o *KpiGroupDto) SetKpis(v []KpiNameDto)`

SetKpis sets Kpis field to given value.

### HasKpis

`func (o *KpiGroupDto) HasKpis() bool`

HasKpis returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


