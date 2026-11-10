# CypherQueryStatsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RowCount** | Pointer to **int32** |  | [optional] 
**ColumnCount** | Pointer to **int32** |  | [optional] 
**ElapsedMs** | Pointer to **int64** |  | [optional] 

## Methods

### NewCypherQueryStatsDto

`func NewCypherQueryStatsDto() *CypherQueryStatsDto`

NewCypherQueryStatsDto instantiates a new CypherQueryStatsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCypherQueryStatsDtoWithDefaults

`func NewCypherQueryStatsDtoWithDefaults() *CypherQueryStatsDto`

NewCypherQueryStatsDtoWithDefaults instantiates a new CypherQueryStatsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRowCount

`func (o *CypherQueryStatsDto) GetRowCount() int32`

GetRowCount returns the RowCount field if non-nil, zero value otherwise.

### GetRowCountOk

`func (o *CypherQueryStatsDto) GetRowCountOk() (*int32, bool)`

GetRowCountOk returns a tuple with the RowCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRowCount

`func (o *CypherQueryStatsDto) SetRowCount(v int32)`

SetRowCount sets RowCount field to given value.

### HasRowCount

`func (o *CypherQueryStatsDto) HasRowCount() bool`

HasRowCount returns a boolean if a field has been set.

### GetColumnCount

`func (o *CypherQueryStatsDto) GetColumnCount() int32`

GetColumnCount returns the ColumnCount field if non-nil, zero value otherwise.

### GetColumnCountOk

`func (o *CypherQueryStatsDto) GetColumnCountOk() (*int32, bool)`

GetColumnCountOk returns a tuple with the ColumnCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumnCount

`func (o *CypherQueryStatsDto) SetColumnCount(v int32)`

SetColumnCount sets ColumnCount field to given value.

### HasColumnCount

`func (o *CypherQueryStatsDto) HasColumnCount() bool`

HasColumnCount returns a boolean if a field has been set.

### GetElapsedMs

`func (o *CypherQueryStatsDto) GetElapsedMs() int64`

GetElapsedMs returns the ElapsedMs field if non-nil, zero value otherwise.

### GetElapsedMsOk

`func (o *CypherQueryStatsDto) GetElapsedMsOk() (*int64, bool)`

GetElapsedMsOk returns a tuple with the ElapsedMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedMs

`func (o *CypherQueryStatsDto) SetElapsedMs(v int64)`

SetElapsedMs sets ElapsedMs field to given value.

### HasElapsedMs

`func (o *CypherQueryStatsDto) HasElapsedMs() bool`

HasElapsedMs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


