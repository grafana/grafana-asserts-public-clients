# EntityAssertionSummaryTimeLineDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssertionName** | Pointer to **string** |  | [optional] 
**Category** | Pointer to **string** |  | [optional] 
**AlertName** | Pointer to **string** |  | [optional] 
**HealthStates** | Pointer to [**[]AssertionStateDto**](AssertionStateDto.md) |  | [optional] 
**Labels** | Pointer to **[]map[string]string** |  | [optional] 

## Methods

### NewEntityAssertionSummaryTimeLineDto

`func NewEntityAssertionSummaryTimeLineDto() *EntityAssertionSummaryTimeLineDto`

NewEntityAssertionSummaryTimeLineDto instantiates a new EntityAssertionSummaryTimeLineDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionSummaryTimeLineDtoWithDefaults

`func NewEntityAssertionSummaryTimeLineDtoWithDefaults() *EntityAssertionSummaryTimeLineDto`

NewEntityAssertionSummaryTimeLineDtoWithDefaults instantiates a new EntityAssertionSummaryTimeLineDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssertionName

`func (o *EntityAssertionSummaryTimeLineDto) GetAssertionName() string`

GetAssertionName returns the AssertionName field if non-nil, zero value otherwise.

### GetAssertionNameOk

`func (o *EntityAssertionSummaryTimeLineDto) GetAssertionNameOk() (*string, bool)`

GetAssertionNameOk returns a tuple with the AssertionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionName

`func (o *EntityAssertionSummaryTimeLineDto) SetAssertionName(v string)`

SetAssertionName sets AssertionName field to given value.

### HasAssertionName

`func (o *EntityAssertionSummaryTimeLineDto) HasAssertionName() bool`

HasAssertionName returns a boolean if a field has been set.

### GetCategory

`func (o *EntityAssertionSummaryTimeLineDto) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *EntityAssertionSummaryTimeLineDto) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *EntityAssertionSummaryTimeLineDto) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *EntityAssertionSummaryTimeLineDto) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetAlertName

`func (o *EntityAssertionSummaryTimeLineDto) GetAlertName() string`

GetAlertName returns the AlertName field if non-nil, zero value otherwise.

### GetAlertNameOk

`func (o *EntityAssertionSummaryTimeLineDto) GetAlertNameOk() (*string, bool)`

GetAlertNameOk returns a tuple with the AlertName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertName

`func (o *EntityAssertionSummaryTimeLineDto) SetAlertName(v string)`

SetAlertName sets AlertName field to given value.

### HasAlertName

`func (o *EntityAssertionSummaryTimeLineDto) HasAlertName() bool`

HasAlertName returns a boolean if a field has been set.

### GetHealthStates

`func (o *EntityAssertionSummaryTimeLineDto) GetHealthStates() []AssertionStateDto`

GetHealthStates returns the HealthStates field if non-nil, zero value otherwise.

### GetHealthStatesOk

`func (o *EntityAssertionSummaryTimeLineDto) GetHealthStatesOk() (*[]AssertionStateDto, bool)`

GetHealthStatesOk returns a tuple with the HealthStates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHealthStates

`func (o *EntityAssertionSummaryTimeLineDto) SetHealthStates(v []AssertionStateDto)`

SetHealthStates sets HealthStates field to given value.

### HasHealthStates

`func (o *EntityAssertionSummaryTimeLineDto) HasHealthStates() bool`

HasHealthStates returns a boolean if a field has been set.

### GetLabels

`func (o *EntityAssertionSummaryTimeLineDto) GetLabels() []map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *EntityAssertionSummaryTimeLineDto) GetLabelsOk() (*[]map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *EntityAssertionSummaryTimeLineDto) SetLabels(v []map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *EntityAssertionSummaryTimeLineDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


