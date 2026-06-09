# CypherSearchResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**[]CypherSearchEntityDto**](CypherSearchEntityDto.md) |  | [optional] 
**Edges** | Pointer to [**[]CypherSearchEdgeDto**](CypherSearchEdgeDto.md) |  | [optional] 
**PageNum** | Pointer to **int32** |  | [optional] 
**LastPage** | Pointer to **bool** |  | [optional] 

## Methods

### NewCypherSearchResponseDto

`func NewCypherSearchResponseDto() *CypherSearchResponseDto`

NewCypherSearchResponseDto instantiates a new CypherSearchResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCypherSearchResponseDtoWithDefaults

`func NewCypherSearchResponseDtoWithDefaults() *CypherSearchResponseDto`

NewCypherSearchResponseDtoWithDefaults instantiates a new CypherSearchResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *CypherSearchResponseDto) GetEntities() []CypherSearchEntityDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *CypherSearchResponseDto) GetEntitiesOk() (*[]CypherSearchEntityDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *CypherSearchResponseDto) SetEntities(v []CypherSearchEntityDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *CypherSearchResponseDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetEdges

`func (o *CypherSearchResponseDto) GetEdges() []CypherSearchEdgeDto`

GetEdges returns the Edges field if non-nil, zero value otherwise.

### GetEdgesOk

`func (o *CypherSearchResponseDto) GetEdgesOk() (*[]CypherSearchEdgeDto, bool)`

GetEdgesOk returns a tuple with the Edges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEdges

`func (o *CypherSearchResponseDto) SetEdges(v []CypherSearchEdgeDto)`

SetEdges sets Edges field to given value.

### HasEdges

`func (o *CypherSearchResponseDto) HasEdges() bool`

HasEdges returns a boolean if a field has been set.

### GetPageNum

`func (o *CypherSearchResponseDto) GetPageNum() int32`

GetPageNum returns the PageNum field if non-nil, zero value otherwise.

### GetPageNumOk

`func (o *CypherSearchResponseDto) GetPageNumOk() (*int32, bool)`

GetPageNumOk returns a tuple with the PageNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNum

`func (o *CypherSearchResponseDto) SetPageNum(v int32)`

SetPageNum sets PageNum field to given value.

### HasPageNum

`func (o *CypherSearchResponseDto) HasPageNum() bool`

HasPageNum returns a boolean if a field has been set.

### GetLastPage

`func (o *CypherSearchResponseDto) GetLastPage() bool`

GetLastPage returns the LastPage field if non-nil, zero value otherwise.

### GetLastPageOk

`func (o *CypherSearchResponseDto) GetLastPageOk() (*bool, bool)`

GetLastPageOk returns a tuple with the LastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPage

`func (o *CypherSearchResponseDto) SetLastPage(v bool)`

SetLastPage sets LastPage field to given value.

### HasLastPage

`func (o *CypherSearchResponseDto) HasLastPage() bool`

HasLastPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


