# MimirRelabelRuleGroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Order** | Pointer to **int32** |  | [optional] 
**Selector** | Pointer to **string** |  | [optional] 
**Rules** | Pointer to [**[]MimirRelabelRuleDto**](MimirRelabelRuleDto.md) |  | [optional] 

## Methods

### NewMimirRelabelRuleGroupDto

`func NewMimirRelabelRuleGroupDto() *MimirRelabelRuleGroupDto`

NewMimirRelabelRuleGroupDto instantiates a new MimirRelabelRuleGroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMimirRelabelRuleGroupDtoWithDefaults

`func NewMimirRelabelRuleGroupDtoWithDefaults() *MimirRelabelRuleGroupDto`

NewMimirRelabelRuleGroupDtoWithDefaults instantiates a new MimirRelabelRuleGroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MimirRelabelRuleGroupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MimirRelabelRuleGroupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MimirRelabelRuleGroupDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MimirRelabelRuleGroupDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOrder

`func (o *MimirRelabelRuleGroupDto) GetOrder() int32`

GetOrder returns the Order field if non-nil, zero value otherwise.

### GetOrderOk

`func (o *MimirRelabelRuleGroupDto) GetOrderOk() (*int32, bool)`

GetOrderOk returns a tuple with the Order field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrder

`func (o *MimirRelabelRuleGroupDto) SetOrder(v int32)`

SetOrder sets Order field to given value.

### HasOrder

`func (o *MimirRelabelRuleGroupDto) HasOrder() bool`

HasOrder returns a boolean if a field has been set.

### GetSelector

`func (o *MimirRelabelRuleGroupDto) GetSelector() string`

GetSelector returns the Selector field if non-nil, zero value otherwise.

### GetSelectorOk

`func (o *MimirRelabelRuleGroupDto) GetSelectorOk() (*string, bool)`

GetSelectorOk returns a tuple with the Selector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelector

`func (o *MimirRelabelRuleGroupDto) SetSelector(v string)`

SetSelector sets Selector field to given value.

### HasSelector

`func (o *MimirRelabelRuleGroupDto) HasSelector() bool`

HasSelector returns a boolean if a field has been set.

### GetRules

`func (o *MimirRelabelRuleGroupDto) GetRules() []MimirRelabelRuleDto`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *MimirRelabelRuleGroupDto) GetRulesOk() (*[]MimirRelabelRuleDto, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *MimirRelabelRuleGroupDto) SetRules(v []MimirRelabelRuleDto)`

SetRules sets Rules field to given value.

### HasRules

`func (o *MimirRelabelRuleGroupDto) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


