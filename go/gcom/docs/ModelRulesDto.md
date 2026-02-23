# ModelRulesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Configuration name | 
**Entities** | Pointer to [**[]EntityRuleDto**](EntityRuleDto.md) | Entity type definitions | [optional] 
**Relations** | Pointer to [**[]RelationRuleDto**](RelationRuleDto.md) | Relationship rules between entities | [optional] 
**ManagedBy** | Pointer to **string** | Management source: &#39;terraform&#39; for Terraform-managed, null for UI-managed | [optional] 

## Methods

### NewModelRulesDto

`func NewModelRulesDto(name string, ) *ModelRulesDto`

NewModelRulesDto instantiates a new ModelRulesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelRulesDtoWithDefaults

`func NewModelRulesDtoWithDefaults() *ModelRulesDto`

NewModelRulesDtoWithDefaults instantiates a new ModelRulesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ModelRulesDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ModelRulesDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ModelRulesDto) SetName(v string)`

SetName sets Name field to given value.


### GetEntities

`func (o *ModelRulesDto) GetEntities() []EntityRuleDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *ModelRulesDto) GetEntitiesOk() (*[]EntityRuleDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *ModelRulesDto) SetEntities(v []EntityRuleDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *ModelRulesDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetRelations

`func (o *ModelRulesDto) GetRelations() []RelationRuleDto`

GetRelations returns the Relations field if non-nil, zero value otherwise.

### GetRelationsOk

`func (o *ModelRulesDto) GetRelationsOk() (*[]RelationRuleDto, bool)`

GetRelationsOk returns a tuple with the Relations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelations

`func (o *ModelRulesDto) SetRelations(v []RelationRuleDto)`

SetRelations sets Relations field to given value.

### HasRelations

`func (o *ModelRulesDto) HasRelations() bool`

HasRelations returns a boolean if a field has been set.

### GetManagedBy

`func (o *ModelRulesDto) GetManagedBy() string`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *ModelRulesDto) GetManagedByOk() (*string, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *ModelRulesDto) SetManagedBy(v string)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *ModelRulesDto) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


