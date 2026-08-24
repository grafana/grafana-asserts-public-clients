# MetricDrilldownConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **int32** |  | [optional] 
**Match** | Pointer to [**[]PropertyMatchEntryDto**](PropertyMatchEntryDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 
**DataSourceUid** | Pointer to **string** |  | [optional] 
**EntityPropertyToMetricLabelMapping** | Pointer to **map[string]string** |  | [optional] 
**ManagedBy** | Pointer to **string** |  | [optional] 

## Methods

### NewMetricDrilldownConfigDto

`func NewMetricDrilldownConfigDto() *MetricDrilldownConfigDto`

NewMetricDrilldownConfigDto instantiates a new MetricDrilldownConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricDrilldownConfigDtoWithDefaults

`func NewMetricDrilldownConfigDtoWithDefaults() *MetricDrilldownConfigDto`

NewMetricDrilldownConfigDtoWithDefaults instantiates a new MetricDrilldownConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MetricDrilldownConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MetricDrilldownConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MetricDrilldownConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MetricDrilldownConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPriority

`func (o *MetricDrilldownConfigDto) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *MetricDrilldownConfigDto) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *MetricDrilldownConfigDto) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *MetricDrilldownConfigDto) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetMatch

`func (o *MetricDrilldownConfigDto) GetMatch() []PropertyMatchEntryDto`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *MetricDrilldownConfigDto) GetMatchOk() (*[]PropertyMatchEntryDto, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *MetricDrilldownConfigDto) SetMatch(v []PropertyMatchEntryDto)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *MetricDrilldownConfigDto) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *MetricDrilldownConfigDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *MetricDrilldownConfigDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *MetricDrilldownConfigDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *MetricDrilldownConfigDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.

### GetDataSourceUid

`func (o *MetricDrilldownConfigDto) GetDataSourceUid() string`

GetDataSourceUid returns the DataSourceUid field if non-nil, zero value otherwise.

### GetDataSourceUidOk

`func (o *MetricDrilldownConfigDto) GetDataSourceUidOk() (*string, bool)`

GetDataSourceUidOk returns a tuple with the DataSourceUid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceUid

`func (o *MetricDrilldownConfigDto) SetDataSourceUid(v string)`

SetDataSourceUid sets DataSourceUid field to given value.

### HasDataSourceUid

`func (o *MetricDrilldownConfigDto) HasDataSourceUid() bool`

HasDataSourceUid returns a boolean if a field has been set.

### GetEntityPropertyToMetricLabelMapping

`func (o *MetricDrilldownConfigDto) GetEntityPropertyToMetricLabelMapping() map[string]string`

GetEntityPropertyToMetricLabelMapping returns the EntityPropertyToMetricLabelMapping field if non-nil, zero value otherwise.

### GetEntityPropertyToMetricLabelMappingOk

`func (o *MetricDrilldownConfigDto) GetEntityPropertyToMetricLabelMappingOk() (*map[string]string, bool)`

GetEntityPropertyToMetricLabelMappingOk returns a tuple with the EntityPropertyToMetricLabelMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityPropertyToMetricLabelMapping

`func (o *MetricDrilldownConfigDto) SetEntityPropertyToMetricLabelMapping(v map[string]string)`

SetEntityPropertyToMetricLabelMapping sets EntityPropertyToMetricLabelMapping field to given value.

### HasEntityPropertyToMetricLabelMapping

`func (o *MetricDrilldownConfigDto) HasEntityPropertyToMetricLabelMapping() bool`

HasEntityPropertyToMetricLabelMapping returns a boolean if a field has been set.

### GetManagedBy

`func (o *MetricDrilldownConfigDto) GetManagedBy() string`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *MetricDrilldownConfigDto) GetManagedByOk() (*string, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *MetricDrilldownConfigDto) SetManagedBy(v string)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *MetricDrilldownConfigDto) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


