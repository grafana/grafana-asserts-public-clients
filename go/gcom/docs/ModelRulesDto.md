# ModelRulesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Entities** | Pointer to [**[]EntityRuleDto**](EntityRuleDto.md) |  | [optional] 
**Relations** | Pointer to [**[]RelationRuleDto**](RelationRuleDto.md) |  | [optional] 

## Methods

### NewModelRulesDto

`func NewModelRulesDto() *ModelRulesDto`

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

### HasName

`func (o *ModelRulesDto) HasName() bool`

HasName returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


