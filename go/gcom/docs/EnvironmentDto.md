# EnvironmentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**EnvsForLog** | Pointer to **[]string** |  | [optional] 
**SitesForLog** | Pointer to **[]string** |  | [optional] 
**LogConfig** | Pointer to [**LogConfigDto**](LogConfigDto.md) |  | [optional] 
**DefaultConfig** | Pointer to **bool** |  | [optional] 

## Methods

### NewEnvironmentDto

`func NewEnvironmentDto() *EnvironmentDto`

NewEnvironmentDto instantiates a new EnvironmentDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvironmentDtoWithDefaults

`func NewEnvironmentDtoWithDefaults() *EnvironmentDto`

NewEnvironmentDtoWithDefaults instantiates a new EnvironmentDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EnvironmentDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EnvironmentDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EnvironmentDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EnvironmentDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEnvsForLog

`func (o *EnvironmentDto) GetEnvsForLog() []string`

GetEnvsForLog returns the EnvsForLog field if non-nil, zero value otherwise.

### GetEnvsForLogOk

`func (o *EnvironmentDto) GetEnvsForLogOk() (*[]string, bool)`

GetEnvsForLogOk returns a tuple with the EnvsForLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvsForLog

`func (o *EnvironmentDto) SetEnvsForLog(v []string)`

SetEnvsForLog sets EnvsForLog field to given value.

### HasEnvsForLog

`func (o *EnvironmentDto) HasEnvsForLog() bool`

HasEnvsForLog returns a boolean if a field has been set.

### GetSitesForLog

`func (o *EnvironmentDto) GetSitesForLog() []string`

GetSitesForLog returns the SitesForLog field if non-nil, zero value otherwise.

### GetSitesForLogOk

`func (o *EnvironmentDto) GetSitesForLogOk() (*[]string, bool)`

GetSitesForLogOk returns a tuple with the SitesForLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitesForLog

`func (o *EnvironmentDto) SetSitesForLog(v []string)`

SetSitesForLog sets SitesForLog field to given value.

### HasSitesForLog

`func (o *EnvironmentDto) HasSitesForLog() bool`

HasSitesForLog returns a boolean if a field has been set.

### GetLogConfig

`func (o *EnvironmentDto) GetLogConfig() LogConfigDto`

GetLogConfig returns the LogConfig field if non-nil, zero value otherwise.

### GetLogConfigOk

`func (o *EnvironmentDto) GetLogConfigOk() (*LogConfigDto, bool)`

GetLogConfigOk returns a tuple with the LogConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogConfig

`func (o *EnvironmentDto) SetLogConfig(v LogConfigDto)`

SetLogConfig sets LogConfig field to given value.

### HasLogConfig

`func (o *EnvironmentDto) HasLogConfig() bool`

HasLogConfig returns a boolean if a field has been set.

### GetDefaultConfig

`func (o *EnvironmentDto) GetDefaultConfig() bool`

GetDefaultConfig returns the DefaultConfig field if non-nil, zero value otherwise.

### GetDefaultConfigOk

`func (o *EnvironmentDto) GetDefaultConfigOk() (*bool, bool)`

GetDefaultConfigOk returns a tuple with the DefaultConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfig

`func (o *EnvironmentDto) SetDefaultConfig(v bool)`

SetDefaultConfig sets DefaultConfig field to given value.

### HasDefaultConfig

`func (o *EnvironmentDto) HasDefaultConfig() bool`

HasDefaultConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


