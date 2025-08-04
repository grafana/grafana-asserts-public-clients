# AssertionScoresDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeWindow** | Pointer to [**TimeWindowDto**](TimeWindowDto.md) |  | [optional] 
**TimeStepIntervalMs** | Pointer to **int64** |  | [optional] 
**AssertionScoresForRootEntity** | Pointer to [**EntityAssertionScoresDto**](EntityAssertionScoresDto.md) |  | [optional] 
**AssertionScoresForTopNEntities** | Pointer to [**[]EntityAssertionScoresDto**](EntityAssertionScoresDto.md) |  | [optional] 
**AssertionRollupDto** | Pointer to [**[]AssertionRollupDto**](AssertionRollupDto.md) |  | [optional] 
**GraphData** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewAssertionScoresDto

`func NewAssertionScoresDto() *AssertionScoresDto`

NewAssertionScoresDto instantiates a new AssertionScoresDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionScoresDtoWithDefaults

`func NewAssertionScoresDtoWithDefaults() *AssertionScoresDto`

NewAssertionScoresDtoWithDefaults instantiates a new AssertionScoresDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeWindow

`func (o *AssertionScoresDto) GetTimeWindow() TimeWindowDto`

GetTimeWindow returns the TimeWindow field if non-nil, zero value otherwise.

### GetTimeWindowOk

`func (o *AssertionScoresDto) GetTimeWindowOk() (*TimeWindowDto, bool)`

GetTimeWindowOk returns a tuple with the TimeWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeWindow

`func (o *AssertionScoresDto) SetTimeWindow(v TimeWindowDto)`

SetTimeWindow sets TimeWindow field to given value.

### HasTimeWindow

`func (o *AssertionScoresDto) HasTimeWindow() bool`

HasTimeWindow returns a boolean if a field has been set.

### GetTimeStepIntervalMs

`func (o *AssertionScoresDto) GetTimeStepIntervalMs() int64`

GetTimeStepIntervalMs returns the TimeStepIntervalMs field if non-nil, zero value otherwise.

### GetTimeStepIntervalMsOk

`func (o *AssertionScoresDto) GetTimeStepIntervalMsOk() (*int64, bool)`

GetTimeStepIntervalMsOk returns a tuple with the TimeStepIntervalMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStepIntervalMs

`func (o *AssertionScoresDto) SetTimeStepIntervalMs(v int64)`

SetTimeStepIntervalMs sets TimeStepIntervalMs field to given value.

### HasTimeStepIntervalMs

`func (o *AssertionScoresDto) HasTimeStepIntervalMs() bool`

HasTimeStepIntervalMs returns a boolean if a field has been set.

### GetAssertionScoresForRootEntity

`func (o *AssertionScoresDto) GetAssertionScoresForRootEntity() EntityAssertionScoresDto`

GetAssertionScoresForRootEntity returns the AssertionScoresForRootEntity field if non-nil, zero value otherwise.

### GetAssertionScoresForRootEntityOk

`func (o *AssertionScoresDto) GetAssertionScoresForRootEntityOk() (*EntityAssertionScoresDto, bool)`

GetAssertionScoresForRootEntityOk returns a tuple with the AssertionScoresForRootEntity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionScoresForRootEntity

`func (o *AssertionScoresDto) SetAssertionScoresForRootEntity(v EntityAssertionScoresDto)`

SetAssertionScoresForRootEntity sets AssertionScoresForRootEntity field to given value.

### HasAssertionScoresForRootEntity

`func (o *AssertionScoresDto) HasAssertionScoresForRootEntity() bool`

HasAssertionScoresForRootEntity returns a boolean if a field has been set.

### GetAssertionScoresForTopNEntities

`func (o *AssertionScoresDto) GetAssertionScoresForTopNEntities() []EntityAssertionScoresDto`

GetAssertionScoresForTopNEntities returns the AssertionScoresForTopNEntities field if non-nil, zero value otherwise.

### GetAssertionScoresForTopNEntitiesOk

`func (o *AssertionScoresDto) GetAssertionScoresForTopNEntitiesOk() (*[]EntityAssertionScoresDto, bool)`

GetAssertionScoresForTopNEntitiesOk returns a tuple with the AssertionScoresForTopNEntities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionScoresForTopNEntities

`func (o *AssertionScoresDto) SetAssertionScoresForTopNEntities(v []EntityAssertionScoresDto)`

SetAssertionScoresForTopNEntities sets AssertionScoresForTopNEntities field to given value.

### HasAssertionScoresForTopNEntities

`func (o *AssertionScoresDto) HasAssertionScoresForTopNEntities() bool`

HasAssertionScoresForTopNEntities returns a boolean if a field has been set.

### GetAssertionRollupDto

`func (o *AssertionScoresDto) GetAssertionRollupDto() []AssertionRollupDto`

GetAssertionRollupDto returns the AssertionRollupDto field if non-nil, zero value otherwise.

### GetAssertionRollupDtoOk

`func (o *AssertionScoresDto) GetAssertionRollupDtoOk() (*[]AssertionRollupDto, bool)`

GetAssertionRollupDtoOk returns a tuple with the AssertionRollupDto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionRollupDto

`func (o *AssertionScoresDto) SetAssertionRollupDto(v []AssertionRollupDto)`

SetAssertionRollupDto sets AssertionRollupDto field to given value.

### HasAssertionRollupDto

`func (o *AssertionScoresDto) HasAssertionRollupDto() bool`

HasAssertionRollupDto returns a boolean if a field has been set.

### GetGraphData

`func (o *AssertionScoresDto) GetGraphData() interface{}`

GetGraphData returns the GraphData field if non-nil, zero value otherwise.

### GetGraphDataOk

`func (o *AssertionScoresDto) GetGraphDataOk() (*interface{}, bool)`

GetGraphDataOk returns a tuple with the GraphData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphData

`func (o *AssertionScoresDto) SetGraphData(v interface{})`

SetGraphData sets GraphData field to given value.

### HasGraphData

`func (o *AssertionScoresDto) HasGraphData() bool`

HasGraphData returns a boolean if a field has been set.

### SetGraphDataNil

`func (o *AssertionScoresDto) SetGraphDataNil(b bool)`

 SetGraphDataNil sets the value for GraphData to be an explicit nil

### UnsetGraphData
`func (o *AssertionScoresDto) UnsetGraphData()`

UnsetGraphData ensures that no value is present for GraphData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


