# TenantEnvConfigResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Environments** | Pointer to [**[]EnvironmentDto**](EnvironmentDto.md) |  | [optional] 
**SupportedLogTools** | Pointer to **[]string** |  | [optional] 

## Methods

### NewTenantEnvConfigResponseDto

`func NewTenantEnvConfigResponseDto() *TenantEnvConfigResponseDto`

NewTenantEnvConfigResponseDto instantiates a new TenantEnvConfigResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTenantEnvConfigResponseDtoWithDefaults

`func NewTenantEnvConfigResponseDtoWithDefaults() *TenantEnvConfigResponseDto`

NewTenantEnvConfigResponseDtoWithDefaults instantiates a new TenantEnvConfigResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnvironments

`func (o *TenantEnvConfigResponseDto) GetEnvironments() []EnvironmentDto`

GetEnvironments returns the Environments field if non-nil, zero value otherwise.

### GetEnvironmentsOk

`func (o *TenantEnvConfigResponseDto) GetEnvironmentsOk() (*[]EnvironmentDto, bool)`

GetEnvironmentsOk returns a tuple with the Environments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironments

`func (o *TenantEnvConfigResponseDto) SetEnvironments(v []EnvironmentDto)`

SetEnvironments sets Environments field to given value.

### HasEnvironments

`func (o *TenantEnvConfigResponseDto) HasEnvironments() bool`

HasEnvironments returns a boolean if a field has been set.

### GetSupportedLogTools

`func (o *TenantEnvConfigResponseDto) GetSupportedLogTools() []string`

GetSupportedLogTools returns the SupportedLogTools field if non-nil, zero value otherwise.

### GetSupportedLogToolsOk

`func (o *TenantEnvConfigResponseDto) GetSupportedLogToolsOk() (*[]string, bool)`

GetSupportedLogToolsOk returns a tuple with the SupportedLogTools field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedLogTools

`func (o *TenantEnvConfigResponseDto) SetSupportedLogTools(v []string)`

SetSupportedLogTools sets SupportedLogTools field to given value.

### HasSupportedLogTools

`func (o *TenantEnvConfigResponseDto) HasSupportedLogTools() bool`

HasSupportedLogTools returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


