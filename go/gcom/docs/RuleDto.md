# RuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RuleGroup** | Pointer to **string** |  | [optional] 
**GenerateDefaultRules** | Pointer to **bool** |  | [optional] 
**AssertsRuleName** | Pointer to **string** |  | [optional] 
**RuleExpr** | Pointer to **string** |  | [optional] 
**LabelsTemplate** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewRuleDto

`func NewRuleDto() *RuleDto`

NewRuleDto instantiates a new RuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRuleDtoWithDefaults

`func NewRuleDtoWithDefaults() *RuleDto`

NewRuleDtoWithDefaults instantiates a new RuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRuleGroup

`func (o *RuleDto) GetRuleGroup() string`

GetRuleGroup returns the RuleGroup field if non-nil, zero value otherwise.

### GetRuleGroupOk

`func (o *RuleDto) GetRuleGroupOk() (*string, bool)`

GetRuleGroupOk returns a tuple with the RuleGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleGroup

`func (o *RuleDto) SetRuleGroup(v string)`

SetRuleGroup sets RuleGroup field to given value.

### HasRuleGroup

`func (o *RuleDto) HasRuleGroup() bool`

HasRuleGroup returns a boolean if a field has been set.

### GetGenerateDefaultRules

`func (o *RuleDto) GetGenerateDefaultRules() bool`

GetGenerateDefaultRules returns the GenerateDefaultRules field if non-nil, zero value otherwise.

### GetGenerateDefaultRulesOk

`func (o *RuleDto) GetGenerateDefaultRulesOk() (*bool, bool)`

GetGenerateDefaultRulesOk returns a tuple with the GenerateDefaultRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerateDefaultRules

`func (o *RuleDto) SetGenerateDefaultRules(v bool)`

SetGenerateDefaultRules sets GenerateDefaultRules field to given value.

### HasGenerateDefaultRules

`func (o *RuleDto) HasGenerateDefaultRules() bool`

HasGenerateDefaultRules returns a boolean if a field has been set.

### GetAssertsRuleName

`func (o *RuleDto) GetAssertsRuleName() string`

GetAssertsRuleName returns the AssertsRuleName field if non-nil, zero value otherwise.

### GetAssertsRuleNameOk

`func (o *RuleDto) GetAssertsRuleNameOk() (*string, bool)`

GetAssertsRuleNameOk returns a tuple with the AssertsRuleName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertsRuleName

`func (o *RuleDto) SetAssertsRuleName(v string)`

SetAssertsRuleName sets AssertsRuleName field to given value.

### HasAssertsRuleName

`func (o *RuleDto) HasAssertsRuleName() bool`

HasAssertsRuleName returns a boolean if a field has been set.

### GetRuleExpr

`func (o *RuleDto) GetRuleExpr() string`

GetRuleExpr returns the RuleExpr field if non-nil, zero value otherwise.

### GetRuleExprOk

`func (o *RuleDto) GetRuleExprOk() (*string, bool)`

GetRuleExprOk returns a tuple with the RuleExpr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleExpr

`func (o *RuleDto) SetRuleExpr(v string)`

SetRuleExpr sets RuleExpr field to given value.

### HasRuleExpr

`func (o *RuleDto) HasRuleExpr() bool`

HasRuleExpr returns a boolean if a field has been set.

### GetLabelsTemplate

`func (o *RuleDto) GetLabelsTemplate() map[string]string`

GetLabelsTemplate returns the LabelsTemplate field if non-nil, zero value otherwise.

### GetLabelsTemplateOk

`func (o *RuleDto) GetLabelsTemplateOk() (*map[string]string, bool)`

GetLabelsTemplateOk returns a tuple with the LabelsTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelsTemplate

`func (o *RuleDto) SetLabelsTemplate(v map[string]string)`

SetLabelsTemplate sets LabelsTemplate field to given value.

### HasLabelsTemplate

`func (o *RuleDto) HasLabelsTemplate() bool`

HasLabelsTemplate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


