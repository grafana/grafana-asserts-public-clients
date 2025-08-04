# ThresholdRulesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GlobalThresholds** | Pointer to [**[]PrometheusRuleDto**](PrometheusRuleDto.md) |  | [optional] 
**CustomThresholds** | Pointer to [**[]PrometheusRuleDto**](PrometheusRuleDto.md) |  | [optional] 

## Methods

### NewThresholdRulesDto

`func NewThresholdRulesDto() *ThresholdRulesDto`

NewThresholdRulesDto instantiates a new ThresholdRulesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdRulesDtoWithDefaults

`func NewThresholdRulesDtoWithDefaults() *ThresholdRulesDto`

NewThresholdRulesDtoWithDefaults instantiates a new ThresholdRulesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGlobalThresholds

`func (o *ThresholdRulesDto) GetGlobalThresholds() []PrometheusRuleDto`

GetGlobalThresholds returns the GlobalThresholds field if non-nil, zero value otherwise.

### GetGlobalThresholdsOk

`func (o *ThresholdRulesDto) GetGlobalThresholdsOk() (*[]PrometheusRuleDto, bool)`

GetGlobalThresholdsOk returns a tuple with the GlobalThresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalThresholds

`func (o *ThresholdRulesDto) SetGlobalThresholds(v []PrometheusRuleDto)`

SetGlobalThresholds sets GlobalThresholds field to given value.

### HasGlobalThresholds

`func (o *ThresholdRulesDto) HasGlobalThresholds() bool`

HasGlobalThresholds returns a boolean if a field has been set.

### GetCustomThresholds

`func (o *ThresholdRulesDto) GetCustomThresholds() []PrometheusRuleDto`

GetCustomThresholds returns the CustomThresholds field if non-nil, zero value otherwise.

### GetCustomThresholdsOk

`func (o *ThresholdRulesDto) GetCustomThresholdsOk() (*[]PrometheusRuleDto, bool)`

GetCustomThresholdsOk returns a tuple with the CustomThresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomThresholds

`func (o *ThresholdRulesDto) SetCustomThresholds(v []PrometheusRuleDto)`

SetCustomThresholds sets CustomThresholds field to given value.

### HasCustomThresholds

`func (o *ThresholdRulesDto) HasCustomThresholds() bool`

HasCustomThresholds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


