# DefinedByDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StaticProperties** | Pointer to **map[string]interface{}** | Static properties to attach to the relation | [optional] 
**StartDomain** | Pointer to **string** | KG domain the start entity must be in. Omit to address the default telemetry domain — omitting the field is the only spelling for it, so the reserved telemetry domain values are rejected here rather than treated as the default. Set this to bind entities written through the KG Write API, which can never live in the default domain. Required when the endpoint type is declared only by a published kg schema and not by any entity rule, since without it the rule would be accepted and then match nothing. PROPERTY_MATCH only — rejected on a METRICS relation. | [optional] [default to ""]
**EndDomain** | Pointer to **string** | KG domain the end entity must be in. Same semantics as startDomain. | [optional] [default to ""]
**Source** | **string** |  | 

## Methods

### NewDefinedByDto

`func NewDefinedByDto(source string, ) *DefinedByDto`

NewDefinedByDto instantiates a new DefinedByDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDefinedByDtoWithDefaults

`func NewDefinedByDtoWithDefaults() *DefinedByDto`

NewDefinedByDtoWithDefaults instantiates a new DefinedByDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStaticProperties

`func (o *DefinedByDto) GetStaticProperties() map[string]interface{}`

GetStaticProperties returns the StaticProperties field if non-nil, zero value otherwise.

### GetStaticPropertiesOk

`func (o *DefinedByDto) GetStaticPropertiesOk() (*map[string]interface{}, bool)`

GetStaticPropertiesOk returns a tuple with the StaticProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStaticProperties

`func (o *DefinedByDto) SetStaticProperties(v map[string]interface{})`

SetStaticProperties sets StaticProperties field to given value.

### HasStaticProperties

`func (o *DefinedByDto) HasStaticProperties() bool`

HasStaticProperties returns a boolean if a field has been set.

### GetStartDomain

`func (o *DefinedByDto) GetStartDomain() string`

GetStartDomain returns the StartDomain field if non-nil, zero value otherwise.

### GetStartDomainOk

`func (o *DefinedByDto) GetStartDomainOk() (*string, bool)`

GetStartDomainOk returns a tuple with the StartDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDomain

`func (o *DefinedByDto) SetStartDomain(v string)`

SetStartDomain sets StartDomain field to given value.

### HasStartDomain

`func (o *DefinedByDto) HasStartDomain() bool`

HasStartDomain returns a boolean if a field has been set.

### GetEndDomain

`func (o *DefinedByDto) GetEndDomain() string`

GetEndDomain returns the EndDomain field if non-nil, zero value otherwise.

### GetEndDomainOk

`func (o *DefinedByDto) GetEndDomainOk() (*string, bool)`

GetEndDomainOk returns a tuple with the EndDomain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDomain

`func (o *DefinedByDto) SetEndDomain(v string)`

SetEndDomain sets EndDomain field to given value.

### HasEndDomain

`func (o *DefinedByDto) HasEndDomain() bool`

HasEndDomain returns a boolean if a field has been set.

### GetSource

`func (o *DefinedByDto) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *DefinedByDto) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *DefinedByDto) SetSource(v string)`

SetSource sets Source field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


