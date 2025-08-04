# LlmRcaAssertionTimelineItemDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssertionName** | Pointer to **string** |  | [optional] 
**Category** | Pointer to **string** |  | [optional] 
**AlertName** | Pointer to **string** |  | [optional] 
**HealthStates** | Pointer to [**[]LlmRcaAssertionStateDto**](LlmRcaAssertionStateDto.md) |  | [optional] 
**Labels** | Pointer to **[]map[string]string** |  | [optional] 

## Methods

### NewLlmRcaAssertionTimelineItemDto

`func NewLlmRcaAssertionTimelineItemDto() *LlmRcaAssertionTimelineItemDto`

NewLlmRcaAssertionTimelineItemDto instantiates a new LlmRcaAssertionTimelineItemDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaAssertionTimelineItemDtoWithDefaults

`func NewLlmRcaAssertionTimelineItemDtoWithDefaults() *LlmRcaAssertionTimelineItemDto`

NewLlmRcaAssertionTimelineItemDtoWithDefaults instantiates a new LlmRcaAssertionTimelineItemDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssertionName

`func (o *LlmRcaAssertionTimelineItemDto) GetAssertionName() string`

GetAssertionName returns the AssertionName field if non-nil, zero value otherwise.

### GetAssertionNameOk

`func (o *LlmRcaAssertionTimelineItemDto) GetAssertionNameOk() (*string, bool)`

GetAssertionNameOk returns a tuple with the AssertionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionName

`func (o *LlmRcaAssertionTimelineItemDto) SetAssertionName(v string)`

SetAssertionName sets AssertionName field to given value.

### HasAssertionName

`func (o *LlmRcaAssertionTimelineItemDto) HasAssertionName() bool`

HasAssertionName returns a boolean if a field has been set.

### GetCategory

`func (o *LlmRcaAssertionTimelineItemDto) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *LlmRcaAssertionTimelineItemDto) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *LlmRcaAssertionTimelineItemDto) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *LlmRcaAssertionTimelineItemDto) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetAlertName

`func (o *LlmRcaAssertionTimelineItemDto) GetAlertName() string`

GetAlertName returns the AlertName field if non-nil, zero value otherwise.

### GetAlertNameOk

`func (o *LlmRcaAssertionTimelineItemDto) GetAlertNameOk() (*string, bool)`

GetAlertNameOk returns a tuple with the AlertName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertName

`func (o *LlmRcaAssertionTimelineItemDto) SetAlertName(v string)`

SetAlertName sets AlertName field to given value.

### HasAlertName

`func (o *LlmRcaAssertionTimelineItemDto) HasAlertName() bool`

HasAlertName returns a boolean if a field has been set.

### GetHealthStates

`func (o *LlmRcaAssertionTimelineItemDto) GetHealthStates() []LlmRcaAssertionStateDto`

GetHealthStates returns the HealthStates field if non-nil, zero value otherwise.

### GetHealthStatesOk

`func (o *LlmRcaAssertionTimelineItemDto) GetHealthStatesOk() (*[]LlmRcaAssertionStateDto, bool)`

GetHealthStatesOk returns a tuple with the HealthStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthStates

`func (o *LlmRcaAssertionTimelineItemDto) SetHealthStates(v []LlmRcaAssertionStateDto)`

SetHealthStates sets HealthStates field to given value.

### HasHealthStates

`func (o *LlmRcaAssertionTimelineItemDto) HasHealthStates() bool`

HasHealthStates returns a boolean if a field has been set.

### GetLabels

`func (o *LlmRcaAssertionTimelineItemDto) GetLabels() []map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *LlmRcaAssertionTimelineItemDto) GetLabelsOk() (*[]map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *LlmRcaAssertionTimelineItemDto) SetLabels(v []map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *LlmRcaAssertionTimelineItemDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


