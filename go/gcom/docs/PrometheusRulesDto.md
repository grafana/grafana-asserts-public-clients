# PrometheusRulesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Groups** | Pointer to [**[]PrometheusRuleGroupDto**](PrometheusRuleGroupDto.md) |  | [optional] 
**ManagedBy** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusRulesDto

`func NewPrometheusRulesDto() *PrometheusRulesDto`

NewPrometheusRulesDto instantiates a new PrometheusRulesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRulesDtoWithDefaults

`func NewPrometheusRulesDtoWithDefaults() *PrometheusRulesDto`

NewPrometheusRulesDtoWithDefaults instantiates a new PrometheusRulesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *PrometheusRulesDto) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PrometheusRulesDto) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PrometheusRulesDto) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PrometheusRulesDto) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetName

`func (o *PrometheusRulesDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PrometheusRulesDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PrometheusRulesDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PrometheusRulesDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetGroups

`func (o *PrometheusRulesDto) GetGroups() []PrometheusRuleGroupDto`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *PrometheusRulesDto) GetGroupsOk() (*[]PrometheusRuleGroupDto, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *PrometheusRulesDto) SetGroups(v []PrometheusRuleGroupDto)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *PrometheusRulesDto) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetManagedBy

`func (o *PrometheusRulesDto) GetManagedBy() string`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *PrometheusRulesDto) GetManagedByOk() (*string, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *PrometheusRulesDto) SetManagedBy(v string)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *PrometheusRulesDto) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


