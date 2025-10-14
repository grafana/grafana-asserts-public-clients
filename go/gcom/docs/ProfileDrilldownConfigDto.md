# ProfileDrilldownConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **int32** |  | [optional] 
**Match** | Pointer to [**[]PropertyMatchEntryDto**](PropertyMatchEntryDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 
**DataSourceUid** | Pointer to **string** |  | [optional] 
**EntityPropertyToProfileLabelMapping** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewProfileDrilldownConfigDto

`func NewProfileDrilldownConfigDto() *ProfileDrilldownConfigDto`

NewProfileDrilldownConfigDto instantiates a new ProfileDrilldownConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDrilldownConfigDtoWithDefaults

`func NewProfileDrilldownConfigDtoWithDefaults() *ProfileDrilldownConfigDto`

NewProfileDrilldownConfigDtoWithDefaults instantiates a new ProfileDrilldownConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProfileDrilldownConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProfileDrilldownConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProfileDrilldownConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ProfileDrilldownConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPriority

`func (o *ProfileDrilldownConfigDto) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ProfileDrilldownConfigDto) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ProfileDrilldownConfigDto) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ProfileDrilldownConfigDto) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetMatch

`func (o *ProfileDrilldownConfigDto) GetMatch() []PropertyMatchEntryDto`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *ProfileDrilldownConfigDto) GetMatchOk() (*[]PropertyMatchEntryDto, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *ProfileDrilldownConfigDto) SetMatch(v []PropertyMatchEntryDto)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *ProfileDrilldownConfigDto) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *ProfileDrilldownConfigDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *ProfileDrilldownConfigDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *ProfileDrilldownConfigDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *ProfileDrilldownConfigDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.

### GetDataSourceUid

`func (o *ProfileDrilldownConfigDto) GetDataSourceUid() string`

GetDataSourceUid returns the DataSourceUid field if non-nil, zero value otherwise.

### GetDataSourceUidOk

`func (o *ProfileDrilldownConfigDto) GetDataSourceUidOk() (*string, bool)`

GetDataSourceUidOk returns a tuple with the DataSourceUid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceUid

`func (o *ProfileDrilldownConfigDto) SetDataSourceUid(v string)`

SetDataSourceUid sets DataSourceUid field to given value.

### HasDataSourceUid

`func (o *ProfileDrilldownConfigDto) HasDataSourceUid() bool`

HasDataSourceUid returns a boolean if a field has been set.

### GetEntityPropertyToProfileLabelMapping

`func (o *ProfileDrilldownConfigDto) GetEntityPropertyToProfileLabelMapping() map[string]string`

GetEntityPropertyToProfileLabelMapping returns the EntityPropertyToProfileLabelMapping field if non-nil, zero value otherwise.

### GetEntityPropertyToProfileLabelMappingOk

`func (o *ProfileDrilldownConfigDto) GetEntityPropertyToProfileLabelMappingOk() (*map[string]string, bool)`

GetEntityPropertyToProfileLabelMappingOk returns a tuple with the EntityPropertyToProfileLabelMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityPropertyToProfileLabelMapping

`func (o *ProfileDrilldownConfigDto) SetEntityPropertyToProfileLabelMapping(v map[string]string)`

SetEntityPropertyToProfileLabelMapping sets EntityPropertyToProfileLabelMapping field to given value.

### HasEntityPropertyToProfileLabelMapping

`func (o *ProfileDrilldownConfigDto) HasEntityPropertyToProfileLabelMapping() bool`

HasEntityPropertyToProfileLabelMapping returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


