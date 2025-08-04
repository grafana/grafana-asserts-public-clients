# RuleCreationSpecDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetricRegExp** | Pointer to **string** |  | [optional] 
**Rules** | Pointer to [**[]RuleDto**](RuleDto.md) |  | [optional] 

## Methods

### NewRuleCreationSpecDto

`func NewRuleCreationSpecDto() *RuleCreationSpecDto`

NewRuleCreationSpecDto instantiates a new RuleCreationSpecDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRuleCreationSpecDtoWithDefaults

`func NewRuleCreationSpecDtoWithDefaults() *RuleCreationSpecDto`

NewRuleCreationSpecDtoWithDefaults instantiates a new RuleCreationSpecDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetricRegExp

`func (o *RuleCreationSpecDto) GetMetricRegExp() string`

GetMetricRegExp returns the MetricRegExp field if non-nil, zero value otherwise.

### GetMetricRegExpOk

`func (o *RuleCreationSpecDto) GetMetricRegExpOk() (*string, bool)`

GetMetricRegExpOk returns a tuple with the MetricRegExp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricRegExp

`func (o *RuleCreationSpecDto) SetMetricRegExp(v string)`

SetMetricRegExp sets MetricRegExp field to given value.

### HasMetricRegExp

`func (o *RuleCreationSpecDto) HasMetricRegExp() bool`

HasMetricRegExp returns a boolean if a field has been set.

### GetRules

`func (o *RuleCreationSpecDto) GetRules() []RuleDto`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *RuleCreationSpecDto) GetRulesOk() (*[]RuleDto, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *RuleCreationSpecDto) SetRules(v []RuleDto)`

SetRules sets Rules field to given value.

### HasRules

`func (o *RuleCreationSpecDto) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


