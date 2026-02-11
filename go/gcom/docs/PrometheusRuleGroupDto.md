# PrometheusRuleGroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Group name | 
**Interval** | Pointer to **string** | Evaluation interval (e.g., &#39;30s&#39;, &#39;1m&#39;) | [optional] 
**Rules** | [**[]PrometheusRuleDto**](PrometheusRuleDto.md) | List of alert and recording rules in this group | 

## Methods

### NewPrometheusRuleGroupDto

`func NewPrometheusRuleGroupDto(name string, rules []PrometheusRuleDto, ) *PrometheusRuleGroupDto`

NewPrometheusRuleGroupDto instantiates a new PrometheusRuleGroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRuleGroupDtoWithDefaults

`func NewPrometheusRuleGroupDtoWithDefaults() *PrometheusRuleGroupDto`

NewPrometheusRuleGroupDtoWithDefaults instantiates a new PrometheusRuleGroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PrometheusRuleGroupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PrometheusRuleGroupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PrometheusRuleGroupDto) SetName(v string)`

SetName sets Name field to given value.


### GetInterval

`func (o *PrometheusRuleGroupDto) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *PrometheusRuleGroupDto) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *PrometheusRuleGroupDto) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *PrometheusRuleGroupDto) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetRules

`func (o *PrometheusRuleGroupDto) GetRules() []PrometheusRuleDto`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *PrometheusRuleGroupDto) GetRulesOk() (*[]PrometheusRuleDto, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *PrometheusRuleGroupDto) SetRules(v []PrometheusRuleDto)`

SetRules sets Rules field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


