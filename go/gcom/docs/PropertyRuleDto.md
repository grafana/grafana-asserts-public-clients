# PropertyRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** |  | [optional] 
**LabelValues** | Pointer to **map[string]string** |  | [optional] 
**Literals** | Pointer to **map[string]string** |  | [optional] 
**MetricValue** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 

## Methods

### NewPropertyRuleDto

`func NewPropertyRuleDto() *PropertyRuleDto`

NewPropertyRuleDto instantiates a new PropertyRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyRuleDtoWithDefaults

`func NewPropertyRuleDtoWithDefaults() *PropertyRuleDto`

NewPropertyRuleDtoWithDefaults instantiates a new PropertyRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *PropertyRuleDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *PropertyRuleDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *PropertyRuleDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *PropertyRuleDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetLabelValues

`func (o *PropertyRuleDto) GetLabelValues() map[string]string`

GetLabelValues returns the LabelValues field if non-nil, zero value otherwise.

### GetLabelValuesOk

`func (o *PropertyRuleDto) GetLabelValuesOk() (*map[string]string, bool)`

GetLabelValuesOk returns a tuple with the LabelValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelValues

`func (o *PropertyRuleDto) SetLabelValues(v map[string]string)`

SetLabelValues sets LabelValues field to given value.

### HasLabelValues

`func (o *PropertyRuleDto) HasLabelValues() bool`

HasLabelValues returns a boolean if a field has been set.

### GetLiterals

`func (o *PropertyRuleDto) GetLiterals() map[string]string`

GetLiterals returns the Literals field if non-nil, zero value otherwise.

### GetLiteralsOk

`func (o *PropertyRuleDto) GetLiteralsOk() (*map[string]string, bool)`

GetLiteralsOk returns a tuple with the Literals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLiterals

`func (o *PropertyRuleDto) SetLiterals(v map[string]string)`

SetLiterals sets Literals field to given value.

### HasLiterals

`func (o *PropertyRuleDto) HasLiterals() bool`

HasLiterals returns a boolean if a field has been set.

### GetMetricValue

`func (o *PropertyRuleDto) GetMetricValue() string`

GetMetricValue returns the MetricValue field if non-nil, zero value otherwise.

### GetMetricValueOk

`func (o *PropertyRuleDto) GetMetricValueOk() (*string, bool)`

GetMetricValueOk returns a tuple with the MetricValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricValue

`func (o *PropertyRuleDto) SetMetricValue(v string)`

SetMetricValue sets MetricValue field to given value.

### HasMetricValue

`func (o *PropertyRuleDto) HasMetricValue() bool`

HasMetricValue returns a boolean if a field has been set.

### GetDisabled

`func (o *PropertyRuleDto) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *PropertyRuleDto) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *PropertyRuleDto) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *PropertyRuleDto) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


