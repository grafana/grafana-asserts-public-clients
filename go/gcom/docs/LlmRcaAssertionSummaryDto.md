# LlmRcaAssertionSummaryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**TimeLines** | Pointer to [**[]LlmRcaAssertionTimelineItemDto**](LlmRcaAssertionTimelineItemDto.md) |  | [optional] 

## Methods

### NewLlmRcaAssertionSummaryDto

`func NewLlmRcaAssertionSummaryDto() *LlmRcaAssertionSummaryDto`

NewLlmRcaAssertionSummaryDto instantiates a new LlmRcaAssertionSummaryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaAssertionSummaryDtoWithDefaults

`func NewLlmRcaAssertionSummaryDtoWithDefaults() *LlmRcaAssertionSummaryDto`

NewLlmRcaAssertionSummaryDtoWithDefaults instantiates a new LlmRcaAssertionSummaryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LlmRcaAssertionSummaryDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LlmRcaAssertionSummaryDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LlmRcaAssertionSummaryDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LlmRcaAssertionSummaryDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LlmRcaAssertionSummaryDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LlmRcaAssertionSummaryDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LlmRcaAssertionSummaryDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LlmRcaAssertionSummaryDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *LlmRcaAssertionSummaryDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *LlmRcaAssertionSummaryDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *LlmRcaAssertionSummaryDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *LlmRcaAssertionSummaryDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetTimeLines

`func (o *LlmRcaAssertionSummaryDto) GetTimeLines() []LlmRcaAssertionTimelineItemDto`

GetTimeLines returns the TimeLines field if non-nil, zero value otherwise.

### GetTimeLinesOk

`func (o *LlmRcaAssertionSummaryDto) GetTimeLinesOk() (*[]LlmRcaAssertionTimelineItemDto, bool)`

GetTimeLinesOk returns a tuple with the TimeLines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeLines

`func (o *LlmRcaAssertionSummaryDto) SetTimeLines(v []LlmRcaAssertionTimelineItemDto)`

SetTimeLines sets TimeLines field to given value.

### HasTimeLines

`func (o *LlmRcaAssertionSummaryDto) HasTimeLines() bool`

HasTimeLines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


