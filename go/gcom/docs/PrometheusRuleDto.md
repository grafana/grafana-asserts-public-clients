# PrometheusRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** |  | [optional] 
**Record** | Pointer to **string** |  | [optional] 
**Alert** | Pointer to **string** |  | [optional] 
**Expr** | Pointer to **string** |  | [optional] 
**Annotations** | Pointer to **map[string]string** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 
**DisableInGroups** | Pointer to **[]string** |  | [optional] 
**For** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusRuleDto

`func NewPrometheusRuleDto() *PrometheusRuleDto`

NewPrometheusRuleDto instantiates a new PrometheusRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRuleDtoWithDefaults

`func NewPrometheusRuleDtoWithDefaults() *PrometheusRuleDto`

NewPrometheusRuleDtoWithDefaults instantiates a new PrometheusRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *PrometheusRuleDto) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *PrometheusRuleDto) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *PrometheusRuleDto) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *PrometheusRuleDto) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetRecord

`func (o *PrometheusRuleDto) GetRecord() string`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *PrometheusRuleDto) GetRecordOk() (*string, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *PrometheusRuleDto) SetRecord(v string)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *PrometheusRuleDto) HasRecord() bool`

HasRecord returns a boolean if a field has been set.

### GetAlert

`func (o *PrometheusRuleDto) GetAlert() string`

GetAlert returns the Alert field if non-nil, zero value otherwise.

### GetAlertOk

`func (o *PrometheusRuleDto) GetAlertOk() (*string, bool)`

GetAlertOk returns a tuple with the Alert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlert

`func (o *PrometheusRuleDto) SetAlert(v string)`

SetAlert sets Alert field to given value.

### HasAlert

`func (o *PrometheusRuleDto) HasAlert() bool`

HasAlert returns a boolean if a field has been set.

### GetExpr

`func (o *PrometheusRuleDto) GetExpr() string`

GetExpr returns the Expr field if non-nil, zero value otherwise.

### GetExprOk

`func (o *PrometheusRuleDto) GetExprOk() (*string, bool)`

GetExprOk returns a tuple with the Expr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpr

`func (o *PrometheusRuleDto) SetExpr(v string)`

SetExpr sets Expr field to given value.

### HasExpr

`func (o *PrometheusRuleDto) HasExpr() bool`

HasExpr returns a boolean if a field has been set.

### GetAnnotations

`func (o *PrometheusRuleDto) GetAnnotations() map[string]string`

GetAnnotations returns the Annotations field if non-nil, zero value otherwise.

### GetAnnotationsOk

`func (o *PrometheusRuleDto) GetAnnotationsOk() (*map[string]string, bool)`

GetAnnotationsOk returns a tuple with the Annotations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnnotations

`func (o *PrometheusRuleDto) SetAnnotations(v map[string]string)`

SetAnnotations sets Annotations field to given value.

### HasAnnotations

`func (o *PrometheusRuleDto) HasAnnotations() bool`

HasAnnotations returns a boolean if a field has been set.

### GetLabels

`func (o *PrometheusRuleDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *PrometheusRuleDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *PrometheusRuleDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *PrometheusRuleDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetDisableInGroups

`func (o *PrometheusRuleDto) GetDisableInGroups() []string`

GetDisableInGroups returns the DisableInGroups field if non-nil, zero value otherwise.

### GetDisableInGroupsOk

`func (o *PrometheusRuleDto) GetDisableInGroupsOk() (*[]string, bool)`

GetDisableInGroupsOk returns a tuple with the DisableInGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableInGroups

`func (o *PrometheusRuleDto) SetDisableInGroups(v []string)`

SetDisableInGroups sets DisableInGroups field to given value.

### HasDisableInGroups

`func (o *PrometheusRuleDto) HasDisableInGroups() bool`

HasDisableInGroups returns a boolean if a field has been set.

### GetFor

`func (o *PrometheusRuleDto) GetFor() string`

GetFor returns the For field if non-nil, zero value otherwise.

### GetForOk

`func (o *PrometheusRuleDto) GetForOk() (*string, bool)`

GetForOk returns a tuple with the For field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFor

`func (o *PrometheusRuleDto) SetFor(v string)`

SetFor sets For field to given value.

### HasFor

`func (o *PrometheusRuleDto) HasFor() bool`

HasFor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


