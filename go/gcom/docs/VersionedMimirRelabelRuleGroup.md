# VersionedMimirRelabelRuleGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **string** |  | [optional] 
**RuleGroup** | Pointer to [**MimirRelabelRuleGroup**](MimirRelabelRuleGroup.md) |  | [optional] 

## Methods

### NewVersionedMimirRelabelRuleGroup

`func NewVersionedMimirRelabelRuleGroup() *VersionedMimirRelabelRuleGroup`

NewVersionedMimirRelabelRuleGroup instantiates a new VersionedMimirRelabelRuleGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVersionedMimirRelabelRuleGroupWithDefaults

`func NewVersionedMimirRelabelRuleGroupWithDefaults() *VersionedMimirRelabelRuleGroup`

NewVersionedMimirRelabelRuleGroupWithDefaults instantiates a new VersionedMimirRelabelRuleGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *VersionedMimirRelabelRuleGroup) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *VersionedMimirRelabelRuleGroup) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *VersionedMimirRelabelRuleGroup) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *VersionedMimirRelabelRuleGroup) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetRuleGroup

`func (o *VersionedMimirRelabelRuleGroup) GetRuleGroup() MimirRelabelRuleGroup`

GetRuleGroup returns the RuleGroup field if non-nil, zero value otherwise.

### GetRuleGroupOk

`func (o *VersionedMimirRelabelRuleGroup) GetRuleGroupOk() (*MimirRelabelRuleGroup, bool)`

GetRuleGroupOk returns a tuple with the RuleGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleGroup

`func (o *VersionedMimirRelabelRuleGroup) SetRuleGroup(v MimirRelabelRuleGroup)`

SetRuleGroup sets RuleGroup field to given value.

### HasRuleGroup

`func (o *VersionedMimirRelabelRuleGroup) HasRuleGroup() bool`

HasRuleGroup returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


