# ConfigValidationResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** |  | [optional] 
**JobId** | Pointer to **string** |  | [optional] 
**Errors** | Pointer to **[]string** |  | [optional] 

## Methods

### NewConfigValidationResponseDto

`func NewConfigValidationResponseDto() *ConfigValidationResponseDto`

NewConfigValidationResponseDto instantiates a new ConfigValidationResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigValidationResponseDtoWithDefaults

`func NewConfigValidationResponseDtoWithDefaults() *ConfigValidationResponseDto`

NewConfigValidationResponseDtoWithDefaults instantiates a new ConfigValidationResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *ConfigValidationResponseDto) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *ConfigValidationResponseDto) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *ConfigValidationResponseDto) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *ConfigValidationResponseDto) HasState() bool`

HasState returns a boolean if a field has been set.

### GetJobId

`func (o *ConfigValidationResponseDto) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *ConfigValidationResponseDto) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *ConfigValidationResponseDto) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *ConfigValidationResponseDto) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetErrors

`func (o *ConfigValidationResponseDto) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ConfigValidationResponseDto) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ConfigValidationResponseDto) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ConfigValidationResponseDto) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


