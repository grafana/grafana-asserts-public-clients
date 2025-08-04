# GraphDisplayConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**map[string]EntityDisplayConfigDto**](EntityDisplayConfigDto.md) |  | [optional] 
**Edges** | Pointer to [**map[string]EdgeDisplayConfigDto**](EdgeDisplayConfigDto.md) |  | [optional] 

## Methods

### NewGraphDisplayConfigDto

`func NewGraphDisplayConfigDto() *GraphDisplayConfigDto`

NewGraphDisplayConfigDto instantiates a new GraphDisplayConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphDisplayConfigDtoWithDefaults

`func NewGraphDisplayConfigDtoWithDefaults() *GraphDisplayConfigDto`

NewGraphDisplayConfigDtoWithDefaults instantiates a new GraphDisplayConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *GraphDisplayConfigDto) GetEntities() map[string]EntityDisplayConfigDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *GraphDisplayConfigDto) GetEntitiesOk() (*map[string]EntityDisplayConfigDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *GraphDisplayConfigDto) SetEntities(v map[string]EntityDisplayConfigDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *GraphDisplayConfigDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetEdges

`func (o *GraphDisplayConfigDto) GetEdges() map[string]EdgeDisplayConfigDto`

GetEdges returns the Edges field if non-nil, zero value otherwise.

### GetEdgesOk

`func (o *GraphDisplayConfigDto) GetEdgesOk() (*map[string]EdgeDisplayConfigDto, bool)`

GetEdgesOk returns a tuple with the Edges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdges

`func (o *GraphDisplayConfigDto) SetEdges(v map[string]EdgeDisplayConfigDto)`

SetEdges sets Edges field to given value.

### HasEdges

`func (o *GraphDisplayConfigDto) HasEdges() bool`

HasEdges returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


