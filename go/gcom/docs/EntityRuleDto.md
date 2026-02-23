# EntityRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Entity type name (e.g., &#39;Service&#39;, &#39;Pod&#39;, &#39;Jvm&#39;) | 
**Name** | **string** | Entity name pattern | 
**Scope** | Pointer to **map[string]string** | Scope definitions for the entity | [optional] 
**Lookup** | Pointer to **map[string]string** | Lookup mappings | [optional] 
**DefinedBy** | Pointer to [**[]PropertyRuleDto**](PropertyRuleDto.md) | Query/metric definitions that define this entity | [optional] 
**EnrichedBy** | Pointer to [**[]PropertyRuleDto**](PropertyRuleDto.md) | Enrichment rules for this entity | [optional] 
**Disabled** | Pointer to **bool** | Whether this entity rule is disabled | [optional] 

## Methods

### NewEntityRuleDto

`func NewEntityRuleDto(type_ string, name string, ) *EntityRuleDto`

NewEntityRuleDto instantiates a new EntityRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityRuleDtoWithDefaults

`func NewEntityRuleDtoWithDefaults() *EntityRuleDto`

NewEntityRuleDtoWithDefaults instantiates a new EntityRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntityRuleDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityRuleDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityRuleDto) SetType(v string)`

SetType sets Type field to given value.


### GetName

`func (o *EntityRuleDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityRuleDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityRuleDto) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *EntityRuleDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityRuleDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityRuleDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityRuleDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetLookup

`func (o *EntityRuleDto) GetLookup() map[string]string`

GetLookup returns the Lookup field if non-nil, zero value otherwise.

### GetLookupOk

`func (o *EntityRuleDto) GetLookupOk() (*map[string]string, bool)`

GetLookupOk returns a tuple with the Lookup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLookup

`func (o *EntityRuleDto) SetLookup(v map[string]string)`

SetLookup sets Lookup field to given value.

### HasLookup

`func (o *EntityRuleDto) HasLookup() bool`

HasLookup returns a boolean if a field has been set.

### GetDefinedBy

`func (o *EntityRuleDto) GetDefinedBy() []PropertyRuleDto`

GetDefinedBy returns the DefinedBy field if non-nil, zero value otherwise.

### GetDefinedByOk

`func (o *EntityRuleDto) GetDefinedByOk() (*[]PropertyRuleDto, bool)`

GetDefinedByOk returns a tuple with the DefinedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinedBy

`func (o *EntityRuleDto) SetDefinedBy(v []PropertyRuleDto)`

SetDefinedBy sets DefinedBy field to given value.

### HasDefinedBy

`func (o *EntityRuleDto) HasDefinedBy() bool`

HasDefinedBy returns a boolean if a field has been set.

### GetEnrichedBy

`func (o *EntityRuleDto) GetEnrichedBy() []PropertyRuleDto`

GetEnrichedBy returns the EnrichedBy field if non-nil, zero value otherwise.

### GetEnrichedByOk

`func (o *EntityRuleDto) GetEnrichedByOk() (*[]PropertyRuleDto, bool)`

GetEnrichedByOk returns a tuple with the EnrichedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnrichedBy

`func (o *EntityRuleDto) SetEnrichedBy(v []PropertyRuleDto)`

SetEnrichedBy sets EnrichedBy field to given value.

### HasEnrichedBy

`func (o *EntityRuleDto) HasEnrichedBy() bool`

HasEnrichedBy returns a boolean if a field has been set.

### GetDisabled

`func (o *EntityRuleDto) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *EntityRuleDto) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *EntityRuleDto) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *EntityRuleDto) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


