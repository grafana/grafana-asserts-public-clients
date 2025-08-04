# MimirRelabelRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Selector** | Pointer to **string** |  | [optional] 
**Replacement** | Pointer to **string** |  | [optional] 
**Drop** | Pointer to **bool** |  | [optional] 
**JoinLabels** | Pointer to **[]string** |  | [optional] 
**JoinSeparator** | Pointer to **string** |  | [optional] 
**RankedChoice** | Pointer to **[]string** |  | [optional] 
**TransformLabel** | Pointer to **string** |  | [optional] 
**TransformOperation** | Pointer to **string** |  | [optional] 
**TransformArg** | Pointer to **string** |  | [optional] 
**TargetLabel** | Pointer to **string** |  | [optional] 

## Methods

### NewMimirRelabelRuleDto

`func NewMimirRelabelRuleDto() *MimirRelabelRuleDto`

NewMimirRelabelRuleDto instantiates a new MimirRelabelRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMimirRelabelRuleDtoWithDefaults

`func NewMimirRelabelRuleDtoWithDefaults() *MimirRelabelRuleDto`

NewMimirRelabelRuleDtoWithDefaults instantiates a new MimirRelabelRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelector

`func (o *MimirRelabelRuleDto) GetSelector() string`

GetSelector returns the Selector field if non-nil, zero value otherwise.

### GetSelectorOk

`func (o *MimirRelabelRuleDto) GetSelectorOk() (*string, bool)`

GetSelectorOk returns a tuple with the Selector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelector

`func (o *MimirRelabelRuleDto) SetSelector(v string)`

SetSelector sets Selector field to given value.

### HasSelector

`func (o *MimirRelabelRuleDto) HasSelector() bool`

HasSelector returns a boolean if a field has been set.

### GetReplacement

`func (o *MimirRelabelRuleDto) GetReplacement() string`

GetReplacement returns the Replacement field if non-nil, zero value otherwise.

### GetReplacementOk

`func (o *MimirRelabelRuleDto) GetReplacementOk() (*string, bool)`

GetReplacementOk returns a tuple with the Replacement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacement

`func (o *MimirRelabelRuleDto) SetReplacement(v string)`

SetReplacement sets Replacement field to given value.

### HasReplacement

`func (o *MimirRelabelRuleDto) HasReplacement() bool`

HasReplacement returns a boolean if a field has been set.

### GetDrop

`func (o *MimirRelabelRuleDto) GetDrop() bool`

GetDrop returns the Drop field if non-nil, zero value otherwise.

### GetDropOk

`func (o *MimirRelabelRuleDto) GetDropOk() (*bool, bool)`

GetDropOk returns a tuple with the Drop field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrop

`func (o *MimirRelabelRuleDto) SetDrop(v bool)`

SetDrop sets Drop field to given value.

### HasDrop

`func (o *MimirRelabelRuleDto) HasDrop() bool`

HasDrop returns a boolean if a field has been set.

### GetJoinLabels

`func (o *MimirRelabelRuleDto) GetJoinLabels() []string`

GetJoinLabels returns the JoinLabels field if non-nil, zero value otherwise.

### GetJoinLabelsOk

`func (o *MimirRelabelRuleDto) GetJoinLabelsOk() (*[]string, bool)`

GetJoinLabelsOk returns a tuple with the JoinLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinLabels

`func (o *MimirRelabelRuleDto) SetJoinLabels(v []string)`

SetJoinLabels sets JoinLabels field to given value.

### HasJoinLabels

`func (o *MimirRelabelRuleDto) HasJoinLabels() bool`

HasJoinLabels returns a boolean if a field has been set.

### GetJoinSeparator

`func (o *MimirRelabelRuleDto) GetJoinSeparator() string`

GetJoinSeparator returns the JoinSeparator field if non-nil, zero value otherwise.

### GetJoinSeparatorOk

`func (o *MimirRelabelRuleDto) GetJoinSeparatorOk() (*string, bool)`

GetJoinSeparatorOk returns a tuple with the JoinSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinSeparator

`func (o *MimirRelabelRuleDto) SetJoinSeparator(v string)`

SetJoinSeparator sets JoinSeparator field to given value.

### HasJoinSeparator

`func (o *MimirRelabelRuleDto) HasJoinSeparator() bool`

HasJoinSeparator returns a boolean if a field has been set.

### GetRankedChoice

`func (o *MimirRelabelRuleDto) GetRankedChoice() []string`

GetRankedChoice returns the RankedChoice field if non-nil, zero value otherwise.

### GetRankedChoiceOk

`func (o *MimirRelabelRuleDto) GetRankedChoiceOk() (*[]string, bool)`

GetRankedChoiceOk returns a tuple with the RankedChoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedChoice

`func (o *MimirRelabelRuleDto) SetRankedChoice(v []string)`

SetRankedChoice sets RankedChoice field to given value.

### HasRankedChoice

`func (o *MimirRelabelRuleDto) HasRankedChoice() bool`

HasRankedChoice returns a boolean if a field has been set.

### GetTransformLabel

`func (o *MimirRelabelRuleDto) GetTransformLabel() string`

GetTransformLabel returns the TransformLabel field if non-nil, zero value otherwise.

### GetTransformLabelOk

`func (o *MimirRelabelRuleDto) GetTransformLabelOk() (*string, bool)`

GetTransformLabelOk returns a tuple with the TransformLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformLabel

`func (o *MimirRelabelRuleDto) SetTransformLabel(v string)`

SetTransformLabel sets TransformLabel field to given value.

### HasTransformLabel

`func (o *MimirRelabelRuleDto) HasTransformLabel() bool`

HasTransformLabel returns a boolean if a field has been set.

### GetTransformOperation

`func (o *MimirRelabelRuleDto) GetTransformOperation() string`

GetTransformOperation returns the TransformOperation field if non-nil, zero value otherwise.

### GetTransformOperationOk

`func (o *MimirRelabelRuleDto) GetTransformOperationOk() (*string, bool)`

GetTransformOperationOk returns a tuple with the TransformOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformOperation

`func (o *MimirRelabelRuleDto) SetTransformOperation(v string)`

SetTransformOperation sets TransformOperation field to given value.

### HasTransformOperation

`func (o *MimirRelabelRuleDto) HasTransformOperation() bool`

HasTransformOperation returns a boolean if a field has been set.

### GetTransformArg

`func (o *MimirRelabelRuleDto) GetTransformArg() string`

GetTransformArg returns the TransformArg field if non-nil, zero value otherwise.

### GetTransformArgOk

`func (o *MimirRelabelRuleDto) GetTransformArgOk() (*string, bool)`

GetTransformArgOk returns a tuple with the TransformArg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformArg

`func (o *MimirRelabelRuleDto) SetTransformArg(v string)`

SetTransformArg sets TransformArg field to given value.

### HasTransformArg

`func (o *MimirRelabelRuleDto) HasTransformArg() bool`

HasTransformArg returns a boolean if a field has been set.

### GetTargetLabel

`func (o *MimirRelabelRuleDto) GetTargetLabel() string`

GetTargetLabel returns the TargetLabel field if non-nil, zero value otherwise.

### GetTargetLabelOk

`func (o *MimirRelabelRuleDto) GetTargetLabelOk() (*string, bool)`

GetTargetLabelOk returns a tuple with the TargetLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetLabel

`func (o *MimirRelabelRuleDto) SetTargetLabel(v string)`

SetTargetLabel sets TargetLabel field to given value.

### HasTargetLabel

`func (o *MimirRelabelRuleDto) HasTargetLabel() bool`

HasTargetLabel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


