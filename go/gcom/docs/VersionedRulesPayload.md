# VersionedRulesPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **string** |  | [optional] 
**Rules** | Pointer to [**[]PrometheusRules**](PrometheusRules.md) |  | [optional] 

## Methods

### NewVersionedRulesPayload

`func NewVersionedRulesPayload() *VersionedRulesPayload`

NewVersionedRulesPayload instantiates a new VersionedRulesPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionedRulesPayloadWithDefaults

`func NewVersionedRulesPayloadWithDefaults() *VersionedRulesPayload`

NewVersionedRulesPayloadWithDefaults instantiates a new VersionedRulesPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *VersionedRulesPayload) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *VersionedRulesPayload) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *VersionedRulesPayload) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *VersionedRulesPayload) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetRules

`func (o *VersionedRulesPayload) GetRules() []PrometheusRules`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *VersionedRulesPayload) GetRulesOk() (*[]PrometheusRules, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *VersionedRulesPayload) SetRules(v []PrometheusRules)`

SetRules sets Rules field to given value.

### HasRules

`func (o *VersionedRulesPayload) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


