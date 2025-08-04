# EntityAssertionSummariesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Summaries** | Pointer to [**[]EntityAssertionSummaryDto**](EntityAssertionSummaryDto.md) |  | [optional] 
**TimeWindow** | Pointer to [**TimeWindowDto**](TimeWindowDto.md) |  | [optional] 
**TimeStepIntervalMs** | Pointer to **int64** |  | [optional] 
**AggregateAssertionScores** | Pointer to [**EntityAssertionScoresDto**](EntityAssertionScoresDto.md) |  | [optional] 
**AssertionScores** | Pointer to [**[]EntityAssertionScoresDto**](EntityAssertionScoresDto.md) |  | [optional] 
**GraphData** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewEntityAssertionSummariesDto

`func NewEntityAssertionSummariesDto() *EntityAssertionSummariesDto`

NewEntityAssertionSummariesDto instantiates a new EntityAssertionSummariesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionSummariesDtoWithDefaults

`func NewEntityAssertionSummariesDtoWithDefaults() *EntityAssertionSummariesDto`

NewEntityAssertionSummariesDtoWithDefaults instantiates a new EntityAssertionSummariesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSummaries

`func (o *EntityAssertionSummariesDto) GetSummaries() []EntityAssertionSummaryDto`

GetSummaries returns the Summaries field if non-nil, zero value otherwise.

### GetSummariesOk

`func (o *EntityAssertionSummariesDto) GetSummariesOk() (*[]EntityAssertionSummaryDto, bool)`

GetSummariesOk returns a tuple with the Summaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaries

`func (o *EntityAssertionSummariesDto) SetSummaries(v []EntityAssertionSummaryDto)`

SetSummaries sets Summaries field to given value.

### HasSummaries

`func (o *EntityAssertionSummariesDto) HasSummaries() bool`

HasSummaries returns a boolean if a field has been set.

### GetTimeWindow

`func (o *EntityAssertionSummariesDto) GetTimeWindow() TimeWindowDto`

GetTimeWindow returns the TimeWindow field if non-nil, zero value otherwise.

### GetTimeWindowOk

`func (o *EntityAssertionSummariesDto) GetTimeWindowOk() (*TimeWindowDto, bool)`

GetTimeWindowOk returns a tuple with the TimeWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeWindow

`func (o *EntityAssertionSummariesDto) SetTimeWindow(v TimeWindowDto)`

SetTimeWindow sets TimeWindow field to given value.

### HasTimeWindow

`func (o *EntityAssertionSummariesDto) HasTimeWindow() bool`

HasTimeWindow returns a boolean if a field has been set.

### GetTimeStepIntervalMs

`func (o *EntityAssertionSummariesDto) GetTimeStepIntervalMs() int64`

GetTimeStepIntervalMs returns the TimeStepIntervalMs field if non-nil, zero value otherwise.

### GetTimeStepIntervalMsOk

`func (o *EntityAssertionSummariesDto) GetTimeStepIntervalMsOk() (*int64, bool)`

GetTimeStepIntervalMsOk returns a tuple with the TimeStepIntervalMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeStepIntervalMs

`func (o *EntityAssertionSummariesDto) SetTimeStepIntervalMs(v int64)`

SetTimeStepIntervalMs sets TimeStepIntervalMs field to given value.

### HasTimeStepIntervalMs

`func (o *EntityAssertionSummariesDto) HasTimeStepIntervalMs() bool`

HasTimeStepIntervalMs returns a boolean if a field has been set.

### GetAggregateAssertionScores

`func (o *EntityAssertionSummariesDto) GetAggregateAssertionScores() EntityAssertionScoresDto`

GetAggregateAssertionScores returns the AggregateAssertionScores field if non-nil, zero value otherwise.

### GetAggregateAssertionScoresOk

`func (o *EntityAssertionSummariesDto) GetAggregateAssertionScoresOk() (*EntityAssertionScoresDto, bool)`

GetAggregateAssertionScoresOk returns a tuple with the AggregateAssertionScores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAggregateAssertionScores

`func (o *EntityAssertionSummariesDto) SetAggregateAssertionScores(v EntityAssertionScoresDto)`

SetAggregateAssertionScores sets AggregateAssertionScores field to given value.

### HasAggregateAssertionScores

`func (o *EntityAssertionSummariesDto) HasAggregateAssertionScores() bool`

HasAggregateAssertionScores returns a boolean if a field has been set.

### GetAssertionScores

`func (o *EntityAssertionSummariesDto) GetAssertionScores() []EntityAssertionScoresDto`

GetAssertionScores returns the AssertionScores field if non-nil, zero value otherwise.

### GetAssertionScoresOk

`func (o *EntityAssertionSummariesDto) GetAssertionScoresOk() (*[]EntityAssertionScoresDto, bool)`

GetAssertionScoresOk returns a tuple with the AssertionScores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionScores

`func (o *EntityAssertionSummariesDto) SetAssertionScores(v []EntityAssertionScoresDto)`

SetAssertionScores sets AssertionScores field to given value.

### HasAssertionScores

`func (o *EntityAssertionSummariesDto) HasAssertionScores() bool`

HasAssertionScores returns a boolean if a field has been set.

### GetGraphData

`func (o *EntityAssertionSummariesDto) GetGraphData() interface{}`

GetGraphData returns the GraphData field if non-nil, zero value otherwise.

### GetGraphDataOk

`func (o *EntityAssertionSummariesDto) GetGraphDataOk() (*interface{}, bool)`

GetGraphDataOk returns a tuple with the GraphData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphData

`func (o *EntityAssertionSummariesDto) SetGraphData(v interface{})`

SetGraphData sets GraphData field to given value.

### HasGraphData

`func (o *EntityAssertionSummariesDto) HasGraphData() bool`

HasGraphData returns a boolean if a field has been set.

### SetGraphDataNil

`func (o *EntityAssertionSummariesDto) SetGraphDataNil(b bool)`

 SetGraphDataNil sets the value for GraphData to be an explicit nil

### UnsetGraphData
`func (o *EntityAssertionSummariesDto) UnsetGraphData()`

UnsetGraphData ensures that no value is present for GraphData, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


