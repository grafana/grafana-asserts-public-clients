# TraceEnvConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**EnvsForTrace** | Pointer to **[]string** |  | [optional] 
**SitesForTrace** | Pointer to **[]string** |  | [optional] 
**TraceConfig** | Pointer to [**TraceConfigDto**](TraceConfigDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 

## Methods

### NewTraceEnvConfigDto

`func NewTraceEnvConfigDto() *TraceEnvConfigDto`

NewTraceEnvConfigDto instantiates a new TraceEnvConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceEnvConfigDtoWithDefaults

`func NewTraceEnvConfigDtoWithDefaults() *TraceEnvConfigDto`

NewTraceEnvConfigDtoWithDefaults instantiates a new TraceEnvConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TraceEnvConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TraceEnvConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TraceEnvConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *TraceEnvConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEnvsForTrace

`func (o *TraceEnvConfigDto) GetEnvsForTrace() []string`

GetEnvsForTrace returns the EnvsForTrace field if non-nil, zero value otherwise.

### GetEnvsForTraceOk

`func (o *TraceEnvConfigDto) GetEnvsForTraceOk() (*[]string, bool)`

GetEnvsForTraceOk returns a tuple with the EnvsForTrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvsForTrace

`func (o *TraceEnvConfigDto) SetEnvsForTrace(v []string)`

SetEnvsForTrace sets EnvsForTrace field to given value.

### HasEnvsForTrace

`func (o *TraceEnvConfigDto) HasEnvsForTrace() bool`

HasEnvsForTrace returns a boolean if a field has been set.

### GetSitesForTrace

`func (o *TraceEnvConfigDto) GetSitesForTrace() []string`

GetSitesForTrace returns the SitesForTrace field if non-nil, zero value otherwise.

### GetSitesForTraceOk

`func (o *TraceEnvConfigDto) GetSitesForTraceOk() (*[]string, bool)`

GetSitesForTraceOk returns a tuple with the SitesForTrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitesForTrace

`func (o *TraceEnvConfigDto) SetSitesForTrace(v []string)`

SetSitesForTrace sets SitesForTrace field to given value.

### HasSitesForTrace

`func (o *TraceEnvConfigDto) HasSitesForTrace() bool`

HasSitesForTrace returns a boolean if a field has been set.

### GetTraceConfig

`func (o *TraceEnvConfigDto) GetTraceConfig() TraceConfigDto`

GetTraceConfig returns the TraceConfig field if non-nil, zero value otherwise.

### GetTraceConfigOk

`func (o *TraceEnvConfigDto) GetTraceConfigOk() (*TraceConfigDto, bool)`

GetTraceConfigOk returns a tuple with the TraceConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceConfig

`func (o *TraceEnvConfigDto) SetTraceConfig(v TraceConfigDto)`

SetTraceConfig sets TraceConfig field to given value.

### HasTraceConfig

`func (o *TraceEnvConfigDto) HasTraceConfig() bool`

HasTraceConfig returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *TraceEnvConfigDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *TraceEnvConfigDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *TraceEnvConfigDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *TraceEnvConfigDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


