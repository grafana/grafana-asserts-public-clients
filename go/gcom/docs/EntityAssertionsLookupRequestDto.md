# EntityAssertionsLookupRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StartTime** | Pointer to **int64** |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**EntityKeys** | Pointer to [**[]EntityAssertionsLookupKeyDto**](EntityAssertionsLookupKeyDto.md) |  | [optional] 
**IncludeConnected** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityAssertionsLookupRequestDto

`func NewEntityAssertionsLookupRequestDto() *EntityAssertionsLookupRequestDto`

NewEntityAssertionsLookupRequestDto instantiates a new EntityAssertionsLookupRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionsLookupRequestDtoWithDefaults

`func NewEntityAssertionsLookupRequestDtoWithDefaults() *EntityAssertionsLookupRequestDto`

NewEntityAssertionsLookupRequestDtoWithDefaults instantiates a new EntityAssertionsLookupRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStartTime

`func (o *EntityAssertionsLookupRequestDto) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *EntityAssertionsLookupRequestDto) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *EntityAssertionsLookupRequestDto) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *EntityAssertionsLookupRequestDto) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *EntityAssertionsLookupRequestDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *EntityAssertionsLookupRequestDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *EntityAssertionsLookupRequestDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *EntityAssertionsLookupRequestDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetEntityKeys

`func (o *EntityAssertionsLookupRequestDto) GetEntityKeys() []EntityAssertionsLookupKeyDto`

GetEntityKeys returns the EntityKeys field if non-nil, zero value otherwise.

### GetEntityKeysOk

`func (o *EntityAssertionsLookupRequestDto) GetEntityKeysOk() (*[]EntityAssertionsLookupKeyDto, bool)`

GetEntityKeysOk returns a tuple with the EntityKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKeys

`func (o *EntityAssertionsLookupRequestDto) SetEntityKeys(v []EntityAssertionsLookupKeyDto)`

SetEntityKeys sets EntityKeys field to given value.

### HasEntityKeys

`func (o *EntityAssertionsLookupRequestDto) HasEntityKeys() bool`

HasEntityKeys returns a boolean if a field has been set.

### GetIncludeConnected

`func (o *EntityAssertionsLookupRequestDto) GetIncludeConnected() bool`

GetIncludeConnected returns the IncludeConnected field if non-nil, zero value otherwise.

### GetIncludeConnectedOk

`func (o *EntityAssertionsLookupRequestDto) GetIncludeConnectedOk() (*bool, bool)`

GetIncludeConnectedOk returns a tuple with the IncludeConnected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeConnected

`func (o *EntityAssertionsLookupRequestDto) SetIncludeConnected(v bool)`

SetIncludeConnected sets IncludeConnected field to given value.

### HasIncludeConnected

`func (o *EntityAssertionsLookupRequestDto) HasIncludeConnected() bool`

HasIncludeConnected returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


