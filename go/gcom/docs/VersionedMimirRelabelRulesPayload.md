# VersionedMimirRelabelRulesPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Generated** | Pointer to [**VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**Prologue** | Pointer to [**VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**Vendor** | Pointer to [**[]VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**Base** | Pointer to [**[]VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**Epilogue** | Pointer to [**VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**ModelMapped** | Pointer to [**[]VersionedMimirRelabelRuleGroup**](VersionedMimirRelabelRuleGroup.md) |  | [optional] 
**BaseGroups** | Pointer to **[]string** |  | [optional] 

## Methods

### NewVersionedMimirRelabelRulesPayload

`func NewVersionedMimirRelabelRulesPayload() *VersionedMimirRelabelRulesPayload`

NewVersionedMimirRelabelRulesPayload instantiates a new VersionedMimirRelabelRulesPayload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionedMimirRelabelRulesPayloadWithDefaults

`func NewVersionedMimirRelabelRulesPayloadWithDefaults() *VersionedMimirRelabelRulesPayload`

NewVersionedMimirRelabelRulesPayloadWithDefaults instantiates a new VersionedMimirRelabelRulesPayload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGenerated

`func (o *VersionedMimirRelabelRulesPayload) GetGenerated() VersionedMimirRelabelRuleGroup`

GetGenerated returns the Generated field if non-nil, zero value otherwise.

### GetGeneratedOk

`func (o *VersionedMimirRelabelRulesPayload) GetGeneratedOk() (*VersionedMimirRelabelRuleGroup, bool)`

GetGeneratedOk returns a tuple with the Generated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerated

`func (o *VersionedMimirRelabelRulesPayload) SetGenerated(v VersionedMimirRelabelRuleGroup)`

SetGenerated sets Generated field to given value.

### HasGenerated

`func (o *VersionedMimirRelabelRulesPayload) HasGenerated() bool`

HasGenerated returns a boolean if a field has been set.

### GetPrologue

`func (o *VersionedMimirRelabelRulesPayload) GetPrologue() VersionedMimirRelabelRuleGroup`

GetPrologue returns the Prologue field if non-nil, zero value otherwise.

### GetPrologueOk

`func (o *VersionedMimirRelabelRulesPayload) GetPrologueOk() (*VersionedMimirRelabelRuleGroup, bool)`

GetPrologueOk returns a tuple with the Prologue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrologue

`func (o *VersionedMimirRelabelRulesPayload) SetPrologue(v VersionedMimirRelabelRuleGroup)`

SetPrologue sets Prologue field to given value.

### HasPrologue

`func (o *VersionedMimirRelabelRulesPayload) HasPrologue() bool`

HasPrologue returns a boolean if a field has been set.

### GetVendor

`func (o *VersionedMimirRelabelRulesPayload) GetVendor() []VersionedMimirRelabelRuleGroup`

GetVendor returns the Vendor field if non-nil, zero value otherwise.

### GetVendorOk

`func (o *VersionedMimirRelabelRulesPayload) GetVendorOk() (*[]VersionedMimirRelabelRuleGroup, bool)`

GetVendorOk returns a tuple with the Vendor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendor

`func (o *VersionedMimirRelabelRulesPayload) SetVendor(v []VersionedMimirRelabelRuleGroup)`

SetVendor sets Vendor field to given value.

### HasVendor

`func (o *VersionedMimirRelabelRulesPayload) HasVendor() bool`

HasVendor returns a boolean if a field has been set.

### GetBase

`func (o *VersionedMimirRelabelRulesPayload) GetBase() []VersionedMimirRelabelRuleGroup`

GetBase returns the Base field if non-nil, zero value otherwise.

### GetBaseOk

`func (o *VersionedMimirRelabelRulesPayload) GetBaseOk() (*[]VersionedMimirRelabelRuleGroup, bool)`

GetBaseOk returns a tuple with the Base field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase

`func (o *VersionedMimirRelabelRulesPayload) SetBase(v []VersionedMimirRelabelRuleGroup)`

SetBase sets Base field to given value.

### HasBase

`func (o *VersionedMimirRelabelRulesPayload) HasBase() bool`

HasBase returns a boolean if a field has been set.

### GetEpilogue

`func (o *VersionedMimirRelabelRulesPayload) GetEpilogue() VersionedMimirRelabelRuleGroup`

GetEpilogue returns the Epilogue field if non-nil, zero value otherwise.

### GetEpilogueOk

`func (o *VersionedMimirRelabelRulesPayload) GetEpilogueOk() (*VersionedMimirRelabelRuleGroup, bool)`

GetEpilogueOk returns a tuple with the Epilogue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEpilogue

`func (o *VersionedMimirRelabelRulesPayload) SetEpilogue(v VersionedMimirRelabelRuleGroup)`

SetEpilogue sets Epilogue field to given value.

### HasEpilogue

`func (o *VersionedMimirRelabelRulesPayload) HasEpilogue() bool`

HasEpilogue returns a boolean if a field has been set.

### GetModelMapped

`func (o *VersionedMimirRelabelRulesPayload) GetModelMapped() []VersionedMimirRelabelRuleGroup`

GetModelMapped returns the ModelMapped field if non-nil, zero value otherwise.

### GetModelMappedOk

`func (o *VersionedMimirRelabelRulesPayload) GetModelMappedOk() (*[]VersionedMimirRelabelRuleGroup, bool)`

GetModelMappedOk returns a tuple with the ModelMapped field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModelMapped

`func (o *VersionedMimirRelabelRulesPayload) SetModelMapped(v []VersionedMimirRelabelRuleGroup)`

SetModelMapped sets ModelMapped field to given value.

### HasModelMapped

`func (o *VersionedMimirRelabelRulesPayload) HasModelMapped() bool`

HasModelMapped returns a boolean if a field has been set.

### GetBaseGroups

`func (o *VersionedMimirRelabelRulesPayload) GetBaseGroups() []string`

GetBaseGroups returns the BaseGroups field if non-nil, zero value otherwise.

### GetBaseGroupsOk

`func (o *VersionedMimirRelabelRulesPayload) GetBaseGroupsOk() (*[]string, bool)`

GetBaseGroupsOk returns a tuple with the BaseGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseGroups

`func (o *VersionedMimirRelabelRulesPayload) SetBaseGroups(v []string)`

SetBaseGroups sets BaseGroups field to given value.

### HasBaseGroups

`func (o *VersionedMimirRelabelRulesPayload) HasBaseGroups() bool`

HasBaseGroups returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


