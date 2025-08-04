# MimirRelabelRule

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

### NewMimirRelabelRule

`func NewMimirRelabelRule() *MimirRelabelRule`

NewMimirRelabelRule instantiates a new MimirRelabelRule object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMimirRelabelRuleWithDefaults

`func NewMimirRelabelRuleWithDefaults() *MimirRelabelRule`

NewMimirRelabelRuleWithDefaults instantiates a new MimirRelabelRule object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelector

`func (o *MimirRelabelRule) GetSelector() string`

GetSelector returns the Selector field if non-nil, zero value otherwise.

### GetSelectorOk

`func (o *MimirRelabelRule) GetSelectorOk() (*string, bool)`

GetSelectorOk returns a tuple with the Selector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelector

`func (o *MimirRelabelRule) SetSelector(v string)`

SetSelector sets Selector field to given value.

### HasSelector

`func (o *MimirRelabelRule) HasSelector() bool`

HasSelector returns a boolean if a field has been set.

### GetReplacement

`func (o *MimirRelabelRule) GetReplacement() string`

GetReplacement returns the Replacement field if non-nil, zero value otherwise.

### GetReplacementOk

`func (o *MimirRelabelRule) GetReplacementOk() (*string, bool)`

GetReplacementOk returns a tuple with the Replacement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplacement

`func (o *MimirRelabelRule) SetReplacement(v string)`

SetReplacement sets Replacement field to given value.

### HasReplacement

`func (o *MimirRelabelRule) HasReplacement() bool`

HasReplacement returns a boolean if a field has been set.

### GetDrop

`func (o *MimirRelabelRule) GetDrop() bool`

GetDrop returns the Drop field if non-nil, zero value otherwise.

### GetDropOk

`func (o *MimirRelabelRule) GetDropOk() (*bool, bool)`

GetDropOk returns a tuple with the Drop field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrop

`func (o *MimirRelabelRule) SetDrop(v bool)`

SetDrop sets Drop field to given value.

### HasDrop

`func (o *MimirRelabelRule) HasDrop() bool`

HasDrop returns a boolean if a field has been set.

### GetJoinLabels

`func (o *MimirRelabelRule) GetJoinLabels() []string`

GetJoinLabels returns the JoinLabels field if non-nil, zero value otherwise.

### GetJoinLabelsOk

`func (o *MimirRelabelRule) GetJoinLabelsOk() (*[]string, bool)`

GetJoinLabelsOk returns a tuple with the JoinLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinLabels

`func (o *MimirRelabelRule) SetJoinLabels(v []string)`

SetJoinLabels sets JoinLabels field to given value.

### HasJoinLabels

`func (o *MimirRelabelRule) HasJoinLabels() bool`

HasJoinLabels returns a boolean if a field has been set.

### GetJoinSeparator

`func (o *MimirRelabelRule) GetJoinSeparator() string`

GetJoinSeparator returns the JoinSeparator field if non-nil, zero value otherwise.

### GetJoinSeparatorOk

`func (o *MimirRelabelRule) GetJoinSeparatorOk() (*string, bool)`

GetJoinSeparatorOk returns a tuple with the JoinSeparator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJoinSeparator

`func (o *MimirRelabelRule) SetJoinSeparator(v string)`

SetJoinSeparator sets JoinSeparator field to given value.

### HasJoinSeparator

`func (o *MimirRelabelRule) HasJoinSeparator() bool`

HasJoinSeparator returns a boolean if a field has been set.

### GetRankedChoice

`func (o *MimirRelabelRule) GetRankedChoice() []string`

GetRankedChoice returns the RankedChoice field if non-nil, zero value otherwise.

### GetRankedChoiceOk

`func (o *MimirRelabelRule) GetRankedChoiceOk() (*[]string, bool)`

GetRankedChoiceOk returns a tuple with the RankedChoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRankedChoice

`func (o *MimirRelabelRule) SetRankedChoice(v []string)`

SetRankedChoice sets RankedChoice field to given value.

### HasRankedChoice

`func (o *MimirRelabelRule) HasRankedChoice() bool`

HasRankedChoice returns a boolean if a field has been set.

### GetTransformLabel

`func (o *MimirRelabelRule) GetTransformLabel() string`

GetTransformLabel returns the TransformLabel field if non-nil, zero value otherwise.

### GetTransformLabelOk

`func (o *MimirRelabelRule) GetTransformLabelOk() (*string, bool)`

GetTransformLabelOk returns a tuple with the TransformLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformLabel

`func (o *MimirRelabelRule) SetTransformLabel(v string)`

SetTransformLabel sets TransformLabel field to given value.

### HasTransformLabel

`func (o *MimirRelabelRule) HasTransformLabel() bool`

HasTransformLabel returns a boolean if a field has been set.

### GetTransformOperation

`func (o *MimirRelabelRule) GetTransformOperation() string`

GetTransformOperation returns the TransformOperation field if non-nil, zero value otherwise.

### GetTransformOperationOk

`func (o *MimirRelabelRule) GetTransformOperationOk() (*string, bool)`

GetTransformOperationOk returns a tuple with the TransformOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformOperation

`func (o *MimirRelabelRule) SetTransformOperation(v string)`

SetTransformOperation sets TransformOperation field to given value.

### HasTransformOperation

`func (o *MimirRelabelRule) HasTransformOperation() bool`

HasTransformOperation returns a boolean if a field has been set.

### GetTransformArg

`func (o *MimirRelabelRule) GetTransformArg() string`

GetTransformArg returns the TransformArg field if non-nil, zero value otherwise.

### GetTransformArgOk

`func (o *MimirRelabelRule) GetTransformArgOk() (*string, bool)`

GetTransformArgOk returns a tuple with the TransformArg field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformArg

`func (o *MimirRelabelRule) SetTransformArg(v string)`

SetTransformArg sets TransformArg field to given value.

### HasTransformArg

`func (o *MimirRelabelRule) HasTransformArg() bool`

HasTransformArg returns a boolean if a field has been set.

### GetTargetLabel

`func (o *MimirRelabelRule) GetTargetLabel() string`

GetTargetLabel returns the TargetLabel field if non-nil, zero value otherwise.

### GetTargetLabelOk

`func (o *MimirRelabelRule) GetTargetLabelOk() (*string, bool)`

GetTargetLabelOk returns a tuple with the TargetLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetLabel

`func (o *MimirRelabelRule) SetTargetLabel(v string)`

SetTargetLabel sets TargetLabel field to given value.

### HasTargetLabel

`func (o *MimirRelabelRule) HasTargetLabel() bool`

HasTargetLabel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


