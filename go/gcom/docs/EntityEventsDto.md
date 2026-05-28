# EntityEventsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** |  | [optional] 
**EntityName** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]string** |  | [optional] 
**StartTime** | Pointer to **int64** |  | [optional] 
**EndTime** | Pointer to **int64** |  | [optional] 
**Events** | Pointer to [**[]InfraEventDto**](InfraEventDto.md) |  | [optional] 
**TotalCount** | Pointer to **int32** |  | [optional] 

## Methods

### NewEntityEventsDto

`func NewEntityEventsDto() *EntityEventsDto`

NewEntityEventsDto instantiates a new EntityEventsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityEventsDtoWithDefaults

`func NewEntityEventsDtoWithDefaults() *EntityEventsDto`

NewEntityEventsDtoWithDefaults instantiates a new EntityEventsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *EntityEventsDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *EntityEventsDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *EntityEventsDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *EntityEventsDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetEntityName

`func (o *EntityEventsDto) GetEntityName() string`

GetEntityName returns the EntityName field if non-nil, zero value otherwise.

### GetEntityNameOk

`func (o *EntityEventsDto) GetEntityNameOk() (*string, bool)`

GetEntityNameOk returns a tuple with the EntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityName

`func (o *EntityEventsDto) SetEntityName(v string)`

SetEntityName sets EntityName field to given value.

### HasEntityName

`func (o *EntityEventsDto) HasEntityName() bool`

HasEntityName returns a boolean if a field has been set.

### GetScope

`func (o *EntityEventsDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityEventsDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityEventsDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityEventsDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetStartTime

`func (o *EntityEventsDto) GetStartTime() int64`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *EntityEventsDto) GetStartTimeOk() (*int64, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *EntityEventsDto) SetStartTime(v int64)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *EntityEventsDto) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetEndTime

`func (o *EntityEventsDto) GetEndTime() int64`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *EntityEventsDto) GetEndTimeOk() (*int64, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *EntityEventsDto) SetEndTime(v int64)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *EntityEventsDto) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetEvents

`func (o *EntityEventsDto) GetEvents() []InfraEventDto`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *EntityEventsDto) GetEventsOk() (*[]InfraEventDto, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *EntityEventsDto) SetEvents(v []InfraEventDto)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *EntityEventsDto) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetTotalCount

`func (o *EntityEventsDto) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *EntityEventsDto) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *EntityEventsDto) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *EntityEventsDto) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


