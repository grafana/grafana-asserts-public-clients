# CypherQueryRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** |  | 
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**Parameters** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewCypherQueryRequestDto

`func NewCypherQueryRequestDto(query string, ) *CypherQueryRequestDto`

NewCypherQueryRequestDto instantiates a new CypherQueryRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCypherQueryRequestDtoWithDefaults

`func NewCypherQueryRequestDtoWithDefaults() *CypherQueryRequestDto`

NewCypherQueryRequestDtoWithDefaults instantiates a new CypherQueryRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *CypherQueryRequestDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CypherQueryRequestDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CypherQueryRequestDto) SetQuery(v string)`

SetQuery sets Query field to given value.


### GetStart

`func (o *CypherQueryRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *CypherQueryRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *CypherQueryRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *CypherQueryRequestDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *CypherQueryRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *CypherQueryRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *CypherQueryRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *CypherQueryRequestDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetParameters

`func (o *CypherQueryRequestDto) GetParameters() map[string]interface{}`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *CypherQueryRequestDto) GetParametersOk() (*map[string]interface{}, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *CypherQueryRequestDto) SetParameters(v map[string]interface{})`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *CypherQueryRequestDto) HasParameters() bool`

HasParameters returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


