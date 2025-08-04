# AssertionStateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**AssertionSummaries** | Pointer to [**[]AssertionSummaryDto**](AssertionSummaryDto.md) |  | [optional] 

## Methods

### NewAssertionStateDto

`func NewAssertionStateDto() *AssertionStateDto`

NewAssertionStateDto instantiates a new AssertionStateDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionStateDtoWithDefaults

`func NewAssertionStateDtoWithDefaults() *AssertionStateDto`

NewAssertionStateDtoWithDefaults instantiates a new AssertionStateDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *AssertionStateDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *AssertionStateDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *AssertionStateDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *AssertionStateDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *AssertionStateDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *AssertionStateDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *AssertionStateDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *AssertionStateDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSeverity

`func (o *AssertionStateDto) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *AssertionStateDto) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *AssertionStateDto) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *AssertionStateDto) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetAssertionSummaries

`func (o *AssertionStateDto) GetAssertionSummaries() []AssertionSummaryDto`

GetAssertionSummaries returns the AssertionSummaries field if non-nil, zero value otherwise.

### GetAssertionSummariesOk

`func (o *AssertionStateDto) GetAssertionSummariesOk() (*[]AssertionSummaryDto, bool)`

GetAssertionSummariesOk returns a tuple with the AssertionSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionSummaries

`func (o *AssertionStateDto) SetAssertionSummaries(v []AssertionSummaryDto)`

SetAssertionSummaries sets AssertionSummaries field to given value.

### HasAssertionSummaries

`func (o *AssertionStateDto) HasAssertionSummaries() bool`

HasAssertionSummaries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


