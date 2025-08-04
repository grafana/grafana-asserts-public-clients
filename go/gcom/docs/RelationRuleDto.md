# RelationRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**StartEntityType** | Pointer to **string** |  | [optional] 
**EndEntityType** | Pointer to **string** |  | [optional] 
**DefinedBy** | Pointer to [**RelationRuleDtoDefinedBy**](RelationRuleDtoDefinedBy.md) |  | [optional] 

## Methods

### NewRelationRuleDto

`func NewRelationRuleDto() *RelationRuleDto`

NewRelationRuleDto instantiates a new RelationRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationRuleDtoWithDefaults

`func NewRelationRuleDtoWithDefaults() *RelationRuleDto`

NewRelationRuleDtoWithDefaults instantiates a new RelationRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RelationRuleDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RelationRuleDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RelationRuleDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RelationRuleDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStartEntityType

`func (o *RelationRuleDto) GetStartEntityType() string`

GetStartEntityType returns the StartEntityType field if non-nil, zero value otherwise.

### GetStartEntityTypeOk

`func (o *RelationRuleDto) GetStartEntityTypeOk() (*string, bool)`

GetStartEntityTypeOk returns a tuple with the StartEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartEntityType

`func (o *RelationRuleDto) SetStartEntityType(v string)`

SetStartEntityType sets StartEntityType field to given value.

### HasStartEntityType

`func (o *RelationRuleDto) HasStartEntityType() bool`

HasStartEntityType returns a boolean if a field has been set.

### GetEndEntityType

`func (o *RelationRuleDto) GetEndEntityType() string`

GetEndEntityType returns the EndEntityType field if non-nil, zero value otherwise.

### GetEndEntityTypeOk

`func (o *RelationRuleDto) GetEndEntityTypeOk() (*string, bool)`

GetEndEntityTypeOk returns a tuple with the EndEntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndEntityType

`func (o *RelationRuleDto) SetEndEntityType(v string)`

SetEndEntityType sets EndEntityType field to given value.

### HasEndEntityType

`func (o *RelationRuleDto) HasEndEntityType() bool`

HasEndEntityType returns a boolean if a field has been set.

### GetDefinedBy

`func (o *RelationRuleDto) GetDefinedBy() RelationRuleDtoDefinedBy`

GetDefinedBy returns the DefinedBy field if non-nil, zero value otherwise.

### GetDefinedByOk

`func (o *RelationRuleDto) GetDefinedByOk() (*RelationRuleDtoDefinedBy, bool)`

GetDefinedByOk returns a tuple with the DefinedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefinedBy

`func (o *RelationRuleDto) SetDefinedBy(v RelationRuleDtoDefinedBy)`

SetDefinedBy sets DefinedBy field to given value.

### HasDefinedBy

`func (o *RelationRuleDto) HasDefinedBy() bool`

HasDefinedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


