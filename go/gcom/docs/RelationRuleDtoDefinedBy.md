# RelationRuleDtoDefinedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StaticProperties** | Pointer to **map[string]interface{}** | Static properties to attach to the relation | [optional] 
**StartDomain** | Pointer to **string** | KG domain the start entity must be in. Omit to address the default telemetry domain — omitting the field is the only spelling for it, so the reserved telemetry domain values are rejected here rather than treated as the default. Set this to bind entities written through the KG Write API, which can never live in the default domain. Required when the endpoint type is declared only by a published kg schema and not by any entity rule, since without it the rule would be accepted and then match nothing. PROPERTY_MATCH only — rejected on a METRICS relation. | [optional] [default to ""]
**EndDomain** | Pointer to **string** | KG domain the end entity must be in. Same semantics as startDomain. | [optional] [default to ""]
**Source** | **string** |  | 
**StartEntityProperties** | Pointer to **[]string** | Properties from start entity to match | [optional] 
**EndEntityProperties** | Pointer to **[]string** | Properties from end entity to match | [optional] 

## Methods

### NewRelationRuleDtoDefinedBy

`func NewRelationRuleDtoDefinedBy(source string, ) *RelationRuleDtoDefinedBy`

NewRelationRuleDtoDefinedBy instantiates a new RelationRuleDtoDefinedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationRuleDtoDefinedByWithDefaults

`func NewRelationRuleDtoDefinedByWithDefaults() *RelationRuleDtoDefinedBy`

NewRelationRuleDtoDefinedByWithDefaults instantiates a new RelationRuleDtoDefinedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStaticProperties

`func (o *RelationRuleDtoDefinedBy) GetStaticProperties() map[string]interface{}`

GetStaticProperties returns the StaticProperties field if non-nil, zero value otherwise.

### GetStaticPropertiesOk

`func (o *RelationRuleDtoDefinedBy) GetStaticPropertiesOk() (*map[string]interface{}, bool)`

GetStaticPropertiesOk returns a tuple with the StaticProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticProperties

`func (o *RelationRuleDtoDefinedBy) SetStaticProperties(v map[string]interface{})`

SetStaticProperties sets StaticProperties field to given value.

### HasStaticProperties

`func (o *RelationRuleDtoDefinedBy) HasStaticProperties() bool`

HasStaticProperties returns a boolean if a field has been set.

### GetStartDomain

`func (o *RelationRuleDtoDefinedBy) GetStartDomain() string`

GetStartDomain returns the StartDomain field if non-nil, zero value otherwise.

### GetStartDomainOk

`func (o *RelationRuleDtoDefinedBy) GetStartDomainOk() (*string, bool)`

GetStartDomainOk returns a tuple with the StartDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDomain

`func (o *RelationRuleDtoDefinedBy) SetStartDomain(v string)`

SetStartDomain sets StartDomain field to given value.

### HasStartDomain

`func (o *RelationRuleDtoDefinedBy) HasStartDomain() bool`

HasStartDomain returns a boolean if a field has been set.

### GetEndDomain

`func (o *RelationRuleDtoDefinedBy) GetEndDomain() string`

GetEndDomain returns the EndDomain field if non-nil, zero value otherwise.

### GetEndDomainOk

`func (o *RelationRuleDtoDefinedBy) GetEndDomainOk() (*string, bool)`

GetEndDomainOk returns a tuple with the EndDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDomain

`func (o *RelationRuleDtoDefinedBy) SetEndDomain(v string)`

SetEndDomain sets EndDomain field to given value.

### HasEndDomain

`func (o *RelationRuleDtoDefinedBy) HasEndDomain() bool`

HasEndDomain returns a boolean if a field has been set.

### GetSource

`func (o *RelationRuleDtoDefinedBy) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RelationRuleDtoDefinedBy) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RelationRuleDtoDefinedBy) SetSource(v string)`

SetSource sets Source field to given value.


### GetStartEntityProperties

`func (o *RelationRuleDtoDefinedBy) GetStartEntityProperties() []string`

GetStartEntityProperties returns the StartEntityProperties field if non-nil, zero value otherwise.

### GetStartEntityPropertiesOk

`func (o *RelationRuleDtoDefinedBy) GetStartEntityPropertiesOk() (*[]string, bool)`

GetStartEntityPropertiesOk returns a tuple with the StartEntityProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartEntityProperties

`func (o *RelationRuleDtoDefinedBy) SetStartEntityProperties(v []string)`

SetStartEntityProperties sets StartEntityProperties field to given value.

### HasStartEntityProperties

`func (o *RelationRuleDtoDefinedBy) HasStartEntityProperties() bool`

HasStartEntityProperties returns a boolean if a field has been set.

### GetEndEntityProperties

`func (o *RelationRuleDtoDefinedBy) GetEndEntityProperties() []string`

GetEndEntityProperties returns the EndEntityProperties field if non-nil, zero value otherwise.

### GetEndEntityPropertiesOk

`func (o *RelationRuleDtoDefinedBy) GetEndEntityPropertiesOk() (*[]string, bool)`

GetEndEntityPropertiesOk returns a tuple with the EndEntityProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndEntityProperties

`func (o *RelationRuleDtoDefinedBy) SetEndEntityProperties(v []string)`

SetEndEntityProperties sets EndEntityProperties field to given value.

### HasEndEntityProperties

`func (o *RelationRuleDtoDefinedBy) HasEndEntityProperties() bool`

HasEndEntityProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


