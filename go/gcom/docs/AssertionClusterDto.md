# AssertionClusterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **int64** |  | [optional] 
**End** | Pointer to **int64** |  | [optional] 
**AssertionSummaries** | Pointer to [**[]AssertionSummaryDto**](AssertionSummaryDto.md) |  | [optional] 

## Methods

### NewAssertionClusterDto

`func NewAssertionClusterDto() *AssertionClusterDto`

NewAssertionClusterDto instantiates a new AssertionClusterDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionClusterDtoWithDefaults

`func NewAssertionClusterDtoWithDefaults() *AssertionClusterDto`

NewAssertionClusterDtoWithDefaults instantiates a new AssertionClusterDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *AssertionClusterDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *AssertionClusterDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *AssertionClusterDto) SetStart(v int64)`

SetStart sets Start field to given value.

### HasStart

`func (o *AssertionClusterDto) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *AssertionClusterDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *AssertionClusterDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *AssertionClusterDto) SetEnd(v int64)`

SetEnd sets End field to given value.

### HasEnd

`func (o *AssertionClusterDto) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetAssertionSummaries

`func (o *AssertionClusterDto) GetAssertionSummaries() []AssertionSummaryDto`

GetAssertionSummaries returns the AssertionSummaries field if non-nil, zero value otherwise.

### GetAssertionSummariesOk

`func (o *AssertionClusterDto) GetAssertionSummariesOk() (*[]AssertionSummaryDto, bool)`

GetAssertionSummariesOk returns a tuple with the AssertionSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionSummaries

`func (o *AssertionClusterDto) SetAssertionSummaries(v []AssertionSummaryDto)`

SetAssertionSummaries sets AssertionSummaries field to given value.

### HasAssertionSummaries

`func (o *AssertionClusterDto) HasAssertionSummaries() bool`

HasAssertionSummaries returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


