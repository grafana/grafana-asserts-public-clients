# RuleGenerationRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetricMatchConditions** | Pointer to **map[string]string** |  | [optional] 
**SourceMappings** | Pointer to **map[string]string** |  | [optional] 
**RuleCreationSpecs** | Pointer to [**[]RuleCreationSpecDto**](RuleCreationSpecDto.md) |  | [optional] 

## Methods

### NewRuleGenerationRequestDto

`func NewRuleGenerationRequestDto() *RuleGenerationRequestDto`

NewRuleGenerationRequestDto instantiates a new RuleGenerationRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRuleGenerationRequestDtoWithDefaults

`func NewRuleGenerationRequestDtoWithDefaults() *RuleGenerationRequestDto`

NewRuleGenerationRequestDtoWithDefaults instantiates a new RuleGenerationRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetricMatchConditions

`func (o *RuleGenerationRequestDto) GetMetricMatchConditions() map[string]string`

GetMetricMatchConditions returns the MetricMatchConditions field if non-nil, zero value otherwise.

### GetMetricMatchConditionsOk

`func (o *RuleGenerationRequestDto) GetMetricMatchConditionsOk() (*map[string]string, bool)`

GetMetricMatchConditionsOk returns a tuple with the MetricMatchConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricMatchConditions

`func (o *RuleGenerationRequestDto) SetMetricMatchConditions(v map[string]string)`

SetMetricMatchConditions sets MetricMatchConditions field to given value.

### HasMetricMatchConditions

`func (o *RuleGenerationRequestDto) HasMetricMatchConditions() bool`

HasMetricMatchConditions returns a boolean if a field has been set.

### GetSourceMappings

`func (o *RuleGenerationRequestDto) GetSourceMappings() map[string]string`

GetSourceMappings returns the SourceMappings field if non-nil, zero value otherwise.

### GetSourceMappingsOk

`func (o *RuleGenerationRequestDto) GetSourceMappingsOk() (*map[string]string, bool)`

GetSourceMappingsOk returns a tuple with the SourceMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceMappings

`func (o *RuleGenerationRequestDto) SetSourceMappings(v map[string]string)`

SetSourceMappings sets SourceMappings field to given value.

### HasSourceMappings

`func (o *RuleGenerationRequestDto) HasSourceMappings() bool`

HasSourceMappings returns a boolean if a field has been set.

### GetRuleCreationSpecs

`func (o *RuleGenerationRequestDto) GetRuleCreationSpecs() []RuleCreationSpecDto`

GetRuleCreationSpecs returns the RuleCreationSpecs field if non-nil, zero value otherwise.

### GetRuleCreationSpecsOk

`func (o *RuleGenerationRequestDto) GetRuleCreationSpecsOk() (*[]RuleCreationSpecDto, bool)`

GetRuleCreationSpecsOk returns a tuple with the RuleCreationSpecs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuleCreationSpecs

`func (o *RuleGenerationRequestDto) SetRuleCreationSpecs(v []RuleCreationSpecDto)`

SetRuleCreationSpecs sets RuleCreationSpecs field to given value.

### HasRuleCreationSpecs

`func (o *RuleGenerationRequestDto) HasRuleCreationSpecs() bool`

HasRuleCreationSpecs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


