# ModelRulesSearchMatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileName** | Pointer to **string** | Rule identifier: builtin rules use the file name (e.g., entities_awsapp_sqs.yml), custom rules use the config name (e.g., my_custom_redis) | [optional] [default to ""]
**Source** | Pointer to **string** | Source of the rule: &#39;builtin&#39; or &#39;custom&#39; | [optional] [default to ""]
**EntityTypes** | Pointer to **[]string** | Entity types referenced in this rule (from entity definitions and relationship start/end types) | [optional] [default to ]
**Vendors** | Pointer to **[]string** | Vendor keywords from the &#39;when&#39; clause | [optional] [default to ]
**Rules** | Pointer to [**ModelRulesDto**](ModelRulesDto.md) |  | [optional] 

## Methods

### NewModelRulesSearchMatchDto

`func NewModelRulesSearchMatchDto() *ModelRulesSearchMatchDto`

NewModelRulesSearchMatchDto instantiates a new ModelRulesSearchMatchDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelRulesSearchMatchDtoWithDefaults

`func NewModelRulesSearchMatchDtoWithDefaults() *ModelRulesSearchMatchDto`

NewModelRulesSearchMatchDtoWithDefaults instantiates a new ModelRulesSearchMatchDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFileName

`func (o *ModelRulesSearchMatchDto) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *ModelRulesSearchMatchDto) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *ModelRulesSearchMatchDto) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *ModelRulesSearchMatchDto) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetSource

`func (o *ModelRulesSearchMatchDto) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ModelRulesSearchMatchDto) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ModelRulesSearchMatchDto) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *ModelRulesSearchMatchDto) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetEntityTypes

`func (o *ModelRulesSearchMatchDto) GetEntityTypes() []string`

GetEntityTypes returns the EntityTypes field if non-nil, zero value otherwise.

### GetEntityTypesOk

`func (o *ModelRulesSearchMatchDto) GetEntityTypesOk() (*[]string, bool)`

GetEntityTypesOk returns a tuple with the EntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityTypes

`func (o *ModelRulesSearchMatchDto) SetEntityTypes(v []string)`

SetEntityTypes sets EntityTypes field to given value.

### HasEntityTypes

`func (o *ModelRulesSearchMatchDto) HasEntityTypes() bool`

HasEntityTypes returns a boolean if a field has been set.

### GetVendors

`func (o *ModelRulesSearchMatchDto) GetVendors() []string`

GetVendors returns the Vendors field if non-nil, zero value otherwise.

### GetVendorsOk

`func (o *ModelRulesSearchMatchDto) GetVendorsOk() (*[]string, bool)`

GetVendorsOk returns a tuple with the Vendors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVendors

`func (o *ModelRulesSearchMatchDto) SetVendors(v []string)`

SetVendors sets Vendors field to given value.

### HasVendors

`func (o *ModelRulesSearchMatchDto) HasVendors() bool`

HasVendors returns a boolean if a field has been set.

### GetRules

`func (o *ModelRulesSearchMatchDto) GetRules() ModelRulesDto`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *ModelRulesSearchMatchDto) GetRulesOk() (*ModelRulesDto, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *ModelRulesSearchMatchDto) SetRules(v ModelRulesDto)`

SetRules sets Rules field to given value.

### HasRules

`func (o *ModelRulesSearchMatchDto) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


