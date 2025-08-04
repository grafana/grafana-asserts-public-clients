# VersionedAlertManagerPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **string** |  | [optional] 
**Config** | Pointer to [**AlertManagerConfig**](AlertManagerConfig.md) |  | [optional] 

## Methods

### NewVersionedAlertManagerPayload

`func NewVersionedAlertManagerPayload() *VersionedAlertManagerPayload`

NewVersionedAlertManagerPayload instantiates a new VersionedAlertManagerPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionedAlertManagerPayloadWithDefaults

`func NewVersionedAlertManagerPayloadWithDefaults() *VersionedAlertManagerPayload`

NewVersionedAlertManagerPayloadWithDefaults instantiates a new VersionedAlertManagerPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *VersionedAlertManagerPayload) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *VersionedAlertManagerPayload) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *VersionedAlertManagerPayload) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *VersionedAlertManagerPayload) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetConfig

`func (o *VersionedAlertManagerPayload) GetConfig() AlertManagerConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *VersionedAlertManagerPayload) GetConfigOk() (*AlertManagerConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *VersionedAlertManagerPayload) SetConfig(v AlertManagerConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *VersionedAlertManagerPayload) HasConfig() bool`

HasConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


