# ConfigImportResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedConfigs** | Pointer to **map[string][]string** |  | [optional] 

## Methods

### NewConfigImportResultDto

`func NewConfigImportResultDto() *ConfigImportResultDto`

NewConfigImportResultDto instantiates a new ConfigImportResultDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigImportResultDtoWithDefaults

`func NewConfigImportResultDtoWithDefaults() *ConfigImportResultDto`

NewConfigImportResultDtoWithDefaults instantiates a new ConfigImportResultDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFailedConfigs

`func (o *ConfigImportResultDto) GetFailedConfigs() map[string][]string`

GetFailedConfigs returns the FailedConfigs field if non-nil, zero value otherwise.

### GetFailedConfigsOk

`func (o *ConfigImportResultDto) GetFailedConfigsOk() (*map[string][]string, bool)`

GetFailedConfigsOk returns a tuple with the FailedConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedConfigs

`func (o *ConfigImportResultDto) SetFailedConfigs(v map[string][]string)`

SetFailedConfigs sets FailedConfigs field to given value.

### HasFailedConfigs

`func (o *ConfigImportResultDto) HasFailedConfigs() bool`

HasFailedConfigs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


