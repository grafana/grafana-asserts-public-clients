# PrometheusRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | Pointer to [**[]PrometheusRuleGroup**](PrometheusRuleGroup.md) |  | [optional] 
**ManagedBy** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusRules

`func NewPrometheusRules() *PrometheusRules`

NewPrometheusRules instantiates a new PrometheusRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRulesWithDefaults

`func NewPrometheusRulesWithDefaults() *PrometheusRules`

NewPrometheusRulesWithDefaults instantiates a new PrometheusRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroups

`func (o *PrometheusRules) GetGroups() []PrometheusRuleGroup`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *PrometheusRules) GetGroupsOk() (*[]PrometheusRuleGroup, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *PrometheusRules) SetGroups(v []PrometheusRuleGroup)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *PrometheusRules) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetManagedBy

`func (o *PrometheusRules) GetManagedBy() string`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *PrometheusRules) GetManagedByOk() (*string, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *PrometheusRules) SetManagedBy(v string)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *PrometheusRules) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


