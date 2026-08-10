# GraphWriteResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitiesWritten** | Pointer to **int64** | Count of entities in the accepted batch (idempotent upsert count, not a created-vs-updated breakdown). | [optional] 
**RelationshipsWritten** | Pointer to **int64** | Count of relationships in the accepted batch (idempotent upsert count, not a created-vs-updated breakdown). | [optional] 

## Methods

### NewGraphWriteResponseDto

`func NewGraphWriteResponseDto() *GraphWriteResponseDto`

NewGraphWriteResponseDto instantiates a new GraphWriteResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphWriteResponseDtoWithDefaults

`func NewGraphWriteResponseDtoWithDefaults() *GraphWriteResponseDto`

NewGraphWriteResponseDtoWithDefaults instantiates a new GraphWriteResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntitiesWritten

`func (o *GraphWriteResponseDto) GetEntitiesWritten() int64`

GetEntitiesWritten returns the EntitiesWritten field if non-nil, zero value otherwise.

### GetEntitiesWrittenOk

`func (o *GraphWriteResponseDto) GetEntitiesWrittenOk() (*int64, bool)`

GetEntitiesWrittenOk returns a tuple with the EntitiesWritten field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesWritten

`func (o *GraphWriteResponseDto) SetEntitiesWritten(v int64)`

SetEntitiesWritten sets EntitiesWritten field to given value.

### HasEntitiesWritten

`func (o *GraphWriteResponseDto) HasEntitiesWritten() bool`

HasEntitiesWritten returns a boolean if a field has been set.

### GetRelationshipsWritten

`func (o *GraphWriteResponseDto) GetRelationshipsWritten() int64`

GetRelationshipsWritten returns the RelationshipsWritten field if non-nil, zero value otherwise.

### GetRelationshipsWrittenOk

`func (o *GraphWriteResponseDto) GetRelationshipsWrittenOk() (*int64, bool)`

GetRelationshipsWrittenOk returns a tuple with the RelationshipsWritten field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelationshipsWritten

`func (o *GraphWriteResponseDto) SetRelationshipsWritten(v int64)`

SetRelationshipsWritten sets RelationshipsWritten field to given value.

### HasRelationshipsWritten

`func (o *GraphWriteResponseDto) HasRelationshipsWritten() bool`

HasRelationshipsWritten returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


