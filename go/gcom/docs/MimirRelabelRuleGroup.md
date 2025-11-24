# MimirRelabelRuleGroup

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Order** | Pointer to **int32** |  | [optional] 
**Selector** | Pointer to **string** |  | [optional] 
**Dataset** | Pointer to **string** |  | [optional] 
**Base** | Pointer to **bool** |  | [optional] 
**Rules** | Pointer to [**[]MimirRelabelRule**](MimirRelabelRule.md) |  | [optional] 
**VendorLookupQuery** | Pointer to **string** |  | [optional] 
**MetricRegex** | Pointer to **[]string** |  | [optional] 
**SanityMetricRegex** | Pointer to **[]string** |  | [optional] 

## Methods

### NewMimirRelabelRuleGroup

`func NewMimirRelabelRuleGroup() *MimirRelabelRuleGroup`

NewMimirRelabelRuleGroup instantiates a new MimirRelabelRuleGroup object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMimirRelabelRuleGroupWithDefaults

`func NewMimirRelabelRuleGroupWithDefaults() *MimirRelabelRuleGroup`

NewMimirRelabelRuleGroupWithDefaults instantiates a new MimirRelabelRuleGroup object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MimirRelabelRuleGroup) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MimirRelabelRuleGroup) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MimirRelabelRuleGroup) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MimirRelabelRuleGroup) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrder

`func (o *MimirRelabelRuleGroup) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *MimirRelabelRuleGroup) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *MimirRelabelRuleGroup) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *MimirRelabelRuleGroup) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetSelector

`func (o *MimirRelabelRuleGroup) GetSelector() string`

GetSelector returns the Selector field if non-nil, zero value otherwise.

### GetSelectorOk

`func (o *MimirRelabelRuleGroup) GetSelectorOk() (*string, bool)`

GetSelectorOk returns a tuple with the Selector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelector

`func (o *MimirRelabelRuleGroup) SetSelector(v string)`

SetSelector sets Selector field to given value.

### HasSelector

`func (o *MimirRelabelRuleGroup) HasSelector() bool`

HasSelector returns a boolean if a field has been set.

### GetDataset

`func (o *MimirRelabelRuleGroup) GetDataset() string`

GetDataset returns the Dataset field if non-nil, zero value otherwise.

### GetDatasetOk

`func (o *MimirRelabelRuleGroup) GetDatasetOk() (*string, bool)`

GetDatasetOk returns a tuple with the Dataset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataset

`func (o *MimirRelabelRuleGroup) SetDataset(v string)`

SetDataset sets Dataset field to given value.

### HasDataset

`func (o *MimirRelabelRuleGroup) HasDataset() bool`

HasDataset returns a boolean if a field has been set.

### GetBase

`func (o *MimirRelabelRuleGroup) GetBase() bool`

GetBase returns the Base field if non-nil, zero value otherwise.

### GetBaseOk

`func (o *MimirRelabelRuleGroup) GetBaseOk() (*bool, bool)`

GetBaseOk returns a tuple with the Base field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase

`func (o *MimirRelabelRuleGroup) SetBase(v bool)`

SetBase sets Base field to given value.

### HasBase

`func (o *MimirRelabelRuleGroup) HasBase() bool`

HasBase returns a boolean if a field has been set.

### GetRules

`func (o *MimirRelabelRuleGroup) GetRules() []MimirRelabelRule`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *MimirRelabelRuleGroup) GetRulesOk() (*[]MimirRelabelRule, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *MimirRelabelRuleGroup) SetRules(v []MimirRelabelRule)`

SetRules sets Rules field to given value.

### HasRules

`func (o *MimirRelabelRuleGroup) HasRules() bool`

HasRules returns a boolean if a field has been set.

### GetVendorLookupQuery

`func (o *MimirRelabelRuleGroup) GetVendorLookupQuery() string`

GetVendorLookupQuery returns the VendorLookupQuery field if non-nil, zero value otherwise.

### GetVendorLookupQueryOk

`func (o *MimirRelabelRuleGroup) GetVendorLookupQueryOk() (*string, bool)`

GetVendorLookupQueryOk returns a tuple with the VendorLookupQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendorLookupQuery

`func (o *MimirRelabelRuleGroup) SetVendorLookupQuery(v string)`

SetVendorLookupQuery sets VendorLookupQuery field to given value.

### HasVendorLookupQuery

`func (o *MimirRelabelRuleGroup) HasVendorLookupQuery() bool`

HasVendorLookupQuery returns a boolean if a field has been set.

### GetMetricRegex

`func (o *MimirRelabelRuleGroup) GetMetricRegex() []string`

GetMetricRegex returns the MetricRegex field if non-nil, zero value otherwise.

### GetMetricRegexOk

`func (o *MimirRelabelRuleGroup) GetMetricRegexOk() (*[]string, bool)`

GetMetricRegexOk returns a tuple with the MetricRegex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricRegex

`func (o *MimirRelabelRuleGroup) SetMetricRegex(v []string)`

SetMetricRegex sets MetricRegex field to given value.

### HasMetricRegex

`func (o *MimirRelabelRuleGroup) HasMetricRegex() bool`

HasMetricRegex returns a boolean if a field has been set.

### GetSanityMetricRegex

`func (o *MimirRelabelRuleGroup) GetSanityMetricRegex() []string`

GetSanityMetricRegex returns the SanityMetricRegex field if non-nil, zero value otherwise.

### GetSanityMetricRegexOk

`func (o *MimirRelabelRuleGroup) GetSanityMetricRegexOk() (*[]string, bool)`

GetSanityMetricRegexOk returns a tuple with the SanityMetricRegex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSanityMetricRegex

`func (o *MimirRelabelRuleGroup) SetSanityMetricRegex(v []string)`

SetSanityMetricRegex sets SanityMetricRegex field to given value.

### HasSanityMetricRegex

`func (o *MimirRelabelRuleGroup) HasSanityMetricRegex() bool`

HasSanityMetricRegex returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


