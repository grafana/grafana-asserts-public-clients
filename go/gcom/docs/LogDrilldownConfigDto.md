# LogDrilldownConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **int32** |  | [optional] 
**Match** | Pointer to [**[]PropertyMatchEntryDto**](PropertyMatchEntryDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 
**DataSourceUid** | Pointer to **string** |  | [optional] 
**ErrorLabel** | Pointer to **string** |  | [optional] 
**EntityPropertyToLogLabelMapping** | Pointer to **map[string]string** |  | [optional] 
**FilterBySpanId** | Pointer to **bool** |  | [optional] 
**FilterByTraceId** | Pointer to **bool** |  | [optional] 

## Methods

### NewLogDrilldownConfigDto

`func NewLogDrilldownConfigDto() *LogDrilldownConfigDto`

NewLogDrilldownConfigDto instantiates a new LogDrilldownConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogDrilldownConfigDtoWithDefaults

`func NewLogDrilldownConfigDtoWithDefaults() *LogDrilldownConfigDto`

NewLogDrilldownConfigDtoWithDefaults instantiates a new LogDrilldownConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *LogDrilldownConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LogDrilldownConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LogDrilldownConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LogDrilldownConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPriority

`func (o *LogDrilldownConfigDto) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *LogDrilldownConfigDto) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *LogDrilldownConfigDto) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *LogDrilldownConfigDto) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetMatch

`func (o *LogDrilldownConfigDto) GetMatch() []PropertyMatchEntryDto`

GetMatch returns the Match field if non-nil, zero value otherwise.

### GetMatchOk

`func (o *LogDrilldownConfigDto) GetMatchOk() (*[]PropertyMatchEntryDto, bool)`

GetMatchOk returns a tuple with the Match field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatch

`func (o *LogDrilldownConfigDto) SetMatch(v []PropertyMatchEntryDto)`

SetMatch sets Match field to given value.

### HasMatch

`func (o *LogDrilldownConfigDto) HasMatch() bool`

HasMatch returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *LogDrilldownConfigDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *LogDrilldownConfigDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *LogDrilldownConfigDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *LogDrilldownConfigDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.

### GetDataSourceUid

`func (o *LogDrilldownConfigDto) GetDataSourceUid() string`

GetDataSourceUid returns the DataSourceUid field if non-nil, zero value otherwise.

### GetDataSourceUidOk

`func (o *LogDrilldownConfigDto) GetDataSourceUidOk() (*string, bool)`

GetDataSourceUidOk returns a tuple with the DataSourceUid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceUid

`func (o *LogDrilldownConfigDto) SetDataSourceUid(v string)`

SetDataSourceUid sets DataSourceUid field to given value.

### HasDataSourceUid

`func (o *LogDrilldownConfigDto) HasDataSourceUid() bool`

HasDataSourceUid returns a boolean if a field has been set.

### GetErrorLabel

`func (o *LogDrilldownConfigDto) GetErrorLabel() string`

GetErrorLabel returns the ErrorLabel field if non-nil, zero value otherwise.

### GetErrorLabelOk

`func (o *LogDrilldownConfigDto) GetErrorLabelOk() (*string, bool)`

GetErrorLabelOk returns a tuple with the ErrorLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorLabel

`func (o *LogDrilldownConfigDto) SetErrorLabel(v string)`

SetErrorLabel sets ErrorLabel field to given value.

### HasErrorLabel

`func (o *LogDrilldownConfigDto) HasErrorLabel() bool`

HasErrorLabel returns a boolean if a field has been set.

### GetEntityPropertyToLogLabelMapping

`func (o *LogDrilldownConfigDto) GetEntityPropertyToLogLabelMapping() map[string]string`

GetEntityPropertyToLogLabelMapping returns the EntityPropertyToLogLabelMapping field if non-nil, zero value otherwise.

### GetEntityPropertyToLogLabelMappingOk

`func (o *LogDrilldownConfigDto) GetEntityPropertyToLogLabelMappingOk() (*map[string]string, bool)`

GetEntityPropertyToLogLabelMappingOk returns a tuple with the EntityPropertyToLogLabelMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityPropertyToLogLabelMapping

`func (o *LogDrilldownConfigDto) SetEntityPropertyToLogLabelMapping(v map[string]string)`

SetEntityPropertyToLogLabelMapping sets EntityPropertyToLogLabelMapping field to given value.

### HasEntityPropertyToLogLabelMapping

`func (o *LogDrilldownConfigDto) HasEntityPropertyToLogLabelMapping() bool`

HasEntityPropertyToLogLabelMapping returns a boolean if a field has been set.

### GetFilterBySpanId

`func (o *LogDrilldownConfigDto) GetFilterBySpanId() bool`

GetFilterBySpanId returns the FilterBySpanId field if non-nil, zero value otherwise.

### GetFilterBySpanIdOk

`func (o *LogDrilldownConfigDto) GetFilterBySpanIdOk() (*bool, bool)`

GetFilterBySpanIdOk returns a tuple with the FilterBySpanId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterBySpanId

`func (o *LogDrilldownConfigDto) SetFilterBySpanId(v bool)`

SetFilterBySpanId sets FilterBySpanId field to given value.

### HasFilterBySpanId

`func (o *LogDrilldownConfigDto) HasFilterBySpanId() bool`

HasFilterBySpanId returns a boolean if a field has been set.

### GetFilterByTraceId

`func (o *LogDrilldownConfigDto) GetFilterByTraceId() bool`

GetFilterByTraceId returns the FilterByTraceId field if non-nil, zero value otherwise.

### GetFilterByTraceIdOk

`func (o *LogDrilldownConfigDto) GetFilterByTraceIdOk() (*bool, bool)`

GetFilterByTraceIdOk returns a tuple with the FilterByTraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterByTraceId

`func (o *LogDrilldownConfigDto) SetFilterByTraceId(v bool)`

SetFilterByTraceId sets FilterByTraceId field to given value.

### HasFilterByTraceId

`func (o *LogDrilldownConfigDto) HasFilterByTraceId() bool`

HasFilterByTraceId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


