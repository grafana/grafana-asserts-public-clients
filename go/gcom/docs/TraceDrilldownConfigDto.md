# TraceDrilldownConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **int32** |  | [optional] 
**Match** | Pointer to [**[]PropertyMatchEntryDto**](PropertyMatchEntryDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 
**DataSourceUid** | Pointer to **string** |  | [optional] 
**EntityPropertyToTraceLabelMapping** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewTraceDrilldownConfigDto

`func NewTraceDrilldownConfigDto() *TraceDrilldownConfigDto`

NewTraceDrilldownConfigDto instantiates a new TraceDrilldownConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceDrilldownConfigDtoWithDefaults

`func NewTraceDrilldownConfigDtoWithDefaults() *TraceDrilldownConfigDto`

NewTraceDrilldownConfigDtoWithDefaults instantiates a new TraceDrilldownConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TraceDrilldownConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TraceDrilldownConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TraceDrilldownConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TraceDrilldownConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPriority

`func (o *TraceDrilldownConfigDto) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *TraceDrilldownConfigDto) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *TraceDrilldownConfigDto) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *TraceDrilldownConfigDto) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetMatch

`func (o *TraceDrilldownConfigDto) GetMatch() []PropertyMatchEntryDto`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *TraceDrilldownConfigDto) GetMatchOk() (*[]PropertyMatchEntryDto, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *TraceDrilldownConfigDto) SetMatch(v []PropertyMatchEntryDto)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *TraceDrilldownConfigDto) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *TraceDrilldownConfigDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *TraceDrilldownConfigDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *TraceDrilldownConfigDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *TraceDrilldownConfigDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.

### GetDataSourceUid

`func (o *TraceDrilldownConfigDto) GetDataSourceUid() string`

GetDataSourceUid returns the DataSourceUid field if non-nil, zero value otherwise.

### GetDataSourceUidOk

`func (o *TraceDrilldownConfigDto) GetDataSourceUidOk() (*string, bool)`

GetDataSourceUidOk returns a tuple with the DataSourceUid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceUid

`func (o *TraceDrilldownConfigDto) SetDataSourceUid(v string)`

SetDataSourceUid sets DataSourceUid field to given value.

### HasDataSourceUid

`func (o *TraceDrilldownConfigDto) HasDataSourceUid() bool`

HasDataSourceUid returns a boolean if a field has been set.

### GetEntityPropertyToTraceLabelMapping

`func (o *TraceDrilldownConfigDto) GetEntityPropertyToTraceLabelMapping() map[string]string`

GetEntityPropertyToTraceLabelMapping returns the EntityPropertyToTraceLabelMapping field if non-nil, zero value otherwise.

### GetEntityPropertyToTraceLabelMappingOk

`func (o *TraceDrilldownConfigDto) GetEntityPropertyToTraceLabelMappingOk() (*map[string]string, bool)`

GetEntityPropertyToTraceLabelMappingOk returns a tuple with the EntityPropertyToTraceLabelMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityPropertyToTraceLabelMapping

`func (o *TraceDrilldownConfigDto) SetEntityPropertyToTraceLabelMapping(v map[string]string)`

SetEntityPropertyToTraceLabelMapping sets EntityPropertyToTraceLabelMapping field to given value.

### HasEntityPropertyToTraceLabelMapping

`func (o *TraceDrilldownConfigDto) HasEntityPropertyToTraceLabelMapping() bool`

HasEntityPropertyToTraceLabelMapping returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


