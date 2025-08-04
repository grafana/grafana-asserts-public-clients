# PrometheusRuleGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Interval** | Pointer to **string** |  | [optional] 
**Rules** | Pointer to [**[]PrometheusRule**](PrometheusRule.md) |  | [optional] 

## Methods

### NewPrometheusRuleGroup

`func NewPrometheusRuleGroup() *PrometheusRuleGroup`

NewPrometheusRuleGroup instantiates a new PrometheusRuleGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRuleGroupWithDefaults

`func NewPrometheusRuleGroupWithDefaults() *PrometheusRuleGroup`

NewPrometheusRuleGroupWithDefaults instantiates a new PrometheusRuleGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PrometheusRuleGroup) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PrometheusRuleGroup) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PrometheusRuleGroup) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PrometheusRuleGroup) HasName() bool`

HasName returns a boolean if a field has been set.

### GetInterval

`func (o *PrometheusRuleGroup) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PrometheusRuleGroup) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PrometheusRuleGroup) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *PrometheusRuleGroup) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetRules

`func (o *PrometheusRuleGroup) GetRules() []PrometheusRule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *PrometheusRuleGroup) GetRulesOk() (*[]PrometheusRule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *PrometheusRuleGroup) SetRules(v []PrometheusRule)`

SetRules sets Rules field to given value.

### HasRules

`func (o *PrometheusRuleGroup) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


