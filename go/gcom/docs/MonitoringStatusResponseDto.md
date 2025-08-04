# MonitoringStatusResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityStatus** | Pointer to [**[]EntityMonitoringStatusDto**](EntityMonitoringStatusDto.md) |  | [optional] 

## Methods

### NewMonitoringStatusResponseDto

`func NewMonitoringStatusResponseDto() *MonitoringStatusResponseDto`

NewMonitoringStatusResponseDto instantiates a new MonitoringStatusResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonitoringStatusResponseDtoWithDefaults

`func NewMonitoringStatusResponseDtoWithDefaults() *MonitoringStatusResponseDto`

NewMonitoringStatusResponseDtoWithDefaults instantiates a new MonitoringStatusResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityStatus

`func (o *MonitoringStatusResponseDto) GetEntityStatus() []EntityMonitoringStatusDto`

GetEntityStatus returns the EntityStatus field if non-nil, zero value otherwise.

### GetEntityStatusOk

`func (o *MonitoringStatusResponseDto) GetEntityStatusOk() (*[]EntityMonitoringStatusDto, bool)`

GetEntityStatusOk returns a tuple with the EntityStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityStatus

`func (o *MonitoringStatusResponseDto) SetEntityStatus(v []EntityMonitoringStatusDto)`

SetEntityStatus sets EntityStatus field to given value.

### HasEntityStatus

`func (o *MonitoringStatusResponseDto) HasEntityStatus() bool`

HasEntityStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


