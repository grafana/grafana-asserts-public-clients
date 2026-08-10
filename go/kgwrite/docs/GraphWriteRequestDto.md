# GraphWriteRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**[]EntityWriteRequestDto**](EntityWriteRequestDto.md) |  | [optional] 
**Relationships** | Pointer to [**[]RelationshipWriteRequestDto**](RelationshipWriteRequestDto.md) |  | [optional] 

## Methods

### NewGraphWriteRequestDto

`func NewGraphWriteRequestDto() *GraphWriteRequestDto`

NewGraphWriteRequestDto instantiates a new GraphWriteRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphWriteRequestDtoWithDefaults

`func NewGraphWriteRequestDtoWithDefaults() *GraphWriteRequestDto`

NewGraphWriteRequestDtoWithDefaults instantiates a new GraphWriteRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *GraphWriteRequestDto) GetEntities() []EntityWriteRequestDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *GraphWriteRequestDto) GetEntitiesOk() (*[]EntityWriteRequestDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *GraphWriteRequestDto) SetEntities(v []EntityWriteRequestDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *GraphWriteRequestDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetRelationships

`func (o *GraphWriteRequestDto) GetRelationships() []RelationshipWriteRequestDto`

GetRelationships returns the Relationships field if non-nil, zero value otherwise.

### GetRelationshipsOk

`func (o *GraphWriteRequestDto) GetRelationshipsOk() (*[]RelationshipWriteRequestDto, bool)`

GetRelationshipsOk returns a tuple with the Relationships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationships

`func (o *GraphWriteRequestDto) SetRelationships(v []RelationshipWriteRequestDto)`

SetRelationships sets Relationships field to given value.

### HasRelationships

`func (o *GraphWriteRequestDto) HasRelationships() bool`

HasRelationships returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


