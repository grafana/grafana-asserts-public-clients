# LlmRcaSummariesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Summaries** | Pointer to [**[]LlmRcaAssertionSummaryDto**](LlmRcaAssertionSummaryDto.md) |  | [optional] 
**GraphData** | Pointer to [**[]LlmRcaGraphEntityDto**](LlmRcaGraphEntityDto.md) |  | [optional] 
**Suggestions** | Pointer to [**[]LlmRcaSuggestionDto**](LlmRcaSuggestionDto.md) |  | [optional] 

## Methods

### NewLlmRcaSummariesDto

`func NewLlmRcaSummariesDto() *LlmRcaSummariesDto`

NewLlmRcaSummariesDto instantiates a new LlmRcaSummariesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaSummariesDtoWithDefaults

`func NewLlmRcaSummariesDtoWithDefaults() *LlmRcaSummariesDto`

NewLlmRcaSummariesDtoWithDefaults instantiates a new LlmRcaSummariesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSummaries

`func (o *LlmRcaSummariesDto) GetSummaries() []LlmRcaAssertionSummaryDto`

GetSummaries returns the Summaries field if non-nil, zero value otherwise.

### GetSummariesOk

`func (o *LlmRcaSummariesDto) GetSummariesOk() (*[]LlmRcaAssertionSummaryDto, bool)`

GetSummariesOk returns a tuple with the Summaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaries

`func (o *LlmRcaSummariesDto) SetSummaries(v []LlmRcaAssertionSummaryDto)`

SetSummaries sets Summaries field to given value.

### HasSummaries

`func (o *LlmRcaSummariesDto) HasSummaries() bool`

HasSummaries returns a boolean if a field has been set.

### GetGraphData

`func (o *LlmRcaSummariesDto) GetGraphData() []LlmRcaGraphEntityDto`

GetGraphData returns the GraphData field if non-nil, zero value otherwise.

### GetGraphDataOk

`func (o *LlmRcaSummariesDto) GetGraphDataOk() (*[]LlmRcaGraphEntityDto, bool)`

GetGraphDataOk returns a tuple with the GraphData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphData

`func (o *LlmRcaSummariesDto) SetGraphData(v []LlmRcaGraphEntityDto)`

SetGraphData sets GraphData field to given value.

### HasGraphData

`func (o *LlmRcaSummariesDto) HasGraphData() bool`

HasGraphData returns a boolean if a field has been set.

### GetSuggestions

`func (o *LlmRcaSummariesDto) GetSuggestions() []LlmRcaSuggestionDto`

GetSuggestions returns the Suggestions field if non-nil, zero value otherwise.

### GetSuggestionsOk

`func (o *LlmRcaSummariesDto) GetSuggestionsOk() (*[]LlmRcaSuggestionDto, bool)`

GetSuggestionsOk returns a tuple with the Suggestions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestions

`func (o *LlmRcaSummariesDto) SetSuggestions(v []LlmRcaSuggestionDto)`

SetSuggestions sets Suggestions field to given value.

### HasSuggestions

`func (o *LlmRcaSummariesDto) HasSuggestions() bool`

HasSuggestions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


