# EntityAssertionSummaryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**TimeLines** | Pointer to [**[]EntityAssertionSummaryTimeLineDto**](EntityAssertionSummaryTimeLineDto.md) |  | [optional] 

## Methods

### NewEntityAssertionSummaryDto

`func NewEntityAssertionSummaryDto() *EntityAssertionSummaryDto`

NewEntityAssertionSummaryDto instantiates a new EntityAssertionSummaryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionSummaryDtoWithDefaults

`func NewEntityAssertionSummaryDtoWithDefaults() *EntityAssertionSummaryDto`

NewEntityAssertionSummaryDtoWithDefaults instantiates a new EntityAssertionSummaryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntityAssertionSummaryDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityAssertionSummaryDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityAssertionSummaryDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityAssertionSummaryDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityAssertionSummaryDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityAssertionSummaryDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityAssertionSummaryDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityAssertionSummaryDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *EntityAssertionSummaryDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityAssertionSummaryDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityAssertionSummaryDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityAssertionSummaryDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetTimeLines

`func (o *EntityAssertionSummaryDto) GetTimeLines() []EntityAssertionSummaryTimeLineDto`

GetTimeLines returns the TimeLines field if non-nil, zero value otherwise.

### GetTimeLinesOk

`func (o *EntityAssertionSummaryDto) GetTimeLinesOk() (*[]EntityAssertionSummaryTimeLineDto, bool)`

GetTimeLinesOk returns a tuple with the TimeLines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeLines

`func (o *EntityAssertionSummaryDto) SetTimeLines(v []EntityAssertionSummaryTimeLineDto)`

SetTimeLines sets TimeLines field to given value.

### HasTimeLines

`func (o *EntityAssertionSummaryDto) HasTimeLines() bool`

HasTimeLines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


