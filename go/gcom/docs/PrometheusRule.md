# PrometheusRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Record** | Pointer to **string** |  | [optional] 
**Alert** | Pointer to **string** |  | [optional] 
**Expr** | Pointer to **string** |  | [optional] 
**Annotations** | Pointer to [**PrometheusRuleAnnotations**](PrometheusRuleAnnotations.md) |  | [optional] 
**Labels** | Pointer to [**PrometheusRuleAnnotations**](PrometheusRuleAnnotations.md) |  | [optional] 
**DisableInGroups** | Pointer to **[]string** |  | [optional] 
**For** | Pointer to **string** |  | [optional] 

## Methods

### NewPrometheusRule

`func NewPrometheusRule() *PrometheusRule`

NewPrometheusRule instantiates a new PrometheusRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPrometheusRuleWithDefaults

`func NewPrometheusRuleWithDefaults() *PrometheusRule`

NewPrometheusRuleWithDefaults instantiates a new PrometheusRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRecord

`func (o *PrometheusRule) GetRecord() string`

GetRecord returns the Record field if non-nil, zero value otherwise.

### GetRecordOk

`func (o *PrometheusRule) GetRecordOk() (*string, bool)`

GetRecordOk returns a tuple with the Record field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecord

`func (o *PrometheusRule) SetRecord(v string)`

SetRecord sets Record field to given value.

### HasRecord

`func (o *PrometheusRule) HasRecord() bool`

HasRecord returns a boolean if a field has been set.

### GetAlert

`func (o *PrometheusRule) GetAlert() string`

GetAlert returns the Alert field if non-nil, zero value otherwise.

### GetAlertOk

`func (o *PrometheusRule) GetAlertOk() (*string, bool)`

GetAlertOk returns a tuple with the Alert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlert

`func (o *PrometheusRule) SetAlert(v string)`

SetAlert sets Alert field to given value.

### HasAlert

`func (o *PrometheusRule) HasAlert() bool`

HasAlert returns a boolean if a field has been set.

### GetExpr

`func (o *PrometheusRule) GetExpr() string`

GetExpr returns the Expr field if non-nil, zero value otherwise.

### GetExprOk

`func (o *PrometheusRule) GetExprOk() (*string, bool)`

GetExprOk returns a tuple with the Expr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpr

`func (o *PrometheusRule) SetExpr(v string)`

SetExpr sets Expr field to given value.

### HasExpr

`func (o *PrometheusRule) HasExpr() bool`

HasExpr returns a boolean if a field has been set.

### GetAnnotations

`func (o *PrometheusRule) GetAnnotations() PrometheusRuleAnnotations`

GetAnnotations returns the Annotations field if non-nil, zero value otherwise.

### GetAnnotationsOk

`func (o *PrometheusRule) GetAnnotationsOk() (*PrometheusRuleAnnotations, bool)`

GetAnnotationsOk returns a tuple with the Annotations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnnotations

`func (o *PrometheusRule) SetAnnotations(v PrometheusRuleAnnotations)`

SetAnnotations sets Annotations field to given value.

### HasAnnotations

`func (o *PrometheusRule) HasAnnotations() bool`

HasAnnotations returns a boolean if a field has been set.

### GetLabels

`func (o *PrometheusRule) GetLabels() PrometheusRuleAnnotations`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *PrometheusRule) GetLabelsOk() (*PrometheusRuleAnnotations, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *PrometheusRule) SetLabels(v PrometheusRuleAnnotations)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *PrometheusRule) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetDisableInGroups

`func (o *PrometheusRule) GetDisableInGroups() []string`

GetDisableInGroups returns the DisableInGroups field if non-nil, zero value otherwise.

### GetDisableInGroupsOk

`func (o *PrometheusRule) GetDisableInGroupsOk() (*[]string, bool)`

GetDisableInGroupsOk returns a tuple with the DisableInGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableInGroups

`func (o *PrometheusRule) SetDisableInGroups(v []string)`

SetDisableInGroups sets DisableInGroups field to given value.

### HasDisableInGroups

`func (o *PrometheusRule) HasDisableInGroups() bool`

HasDisableInGroups returns a boolean if a field has been set.

### GetFor

`func (o *PrometheusRule) GetFor() string`

GetFor returns the For field if non-nil, zero value otherwise.

### GetForOk

`func (o *PrometheusRule) GetForOk() (*string, bool)`

GetForOk returns a tuple with the For field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFor

`func (o *PrometheusRule) SetFor(v string)`

SetFor sets For field to given value.

### HasFor

`func (o *PrometheusRule) HasFor() bool`

HasFor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


