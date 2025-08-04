# EntityMonitoringStatusDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityKey** | Pointer to [**EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**Resource** | Pointer to **bool** |  | [optional] 
**Traffic** | Pointer to **bool** |  | [optional] 
**Latency** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityMonitoringStatusDto

`func NewEntityMonitoringStatusDto() *EntityMonitoringStatusDto`

NewEntityMonitoringStatusDto instantiates a new EntityMonitoringStatusDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityMonitoringStatusDtoWithDefaults

`func NewEntityMonitoringStatusDtoWithDefaults() *EntityMonitoringStatusDto`

NewEntityMonitoringStatusDtoWithDefaults instantiates a new EntityMonitoringStatusDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityKey

`func (o *EntityMonitoringStatusDto) GetEntityKey() EntityKeyDto`

GetEntityKey returns the EntityKey field if non-nil, zero value otherwise.

### GetEntityKeyOk

`func (o *EntityMonitoringStatusDto) GetEntityKeyOk() (*EntityKeyDto, bool)`

GetEntityKeyOk returns a tuple with the EntityKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKey

`func (o *EntityMonitoringStatusDto) SetEntityKey(v EntityKeyDto)`

SetEntityKey sets EntityKey field to given value.

### HasEntityKey

`func (o *EntityMonitoringStatusDto) HasEntityKey() bool`

HasEntityKey returns a boolean if a field has been set.

### GetResource

`func (o *EntityMonitoringStatusDto) GetResource() bool`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *EntityMonitoringStatusDto) GetResourceOk() (*bool, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *EntityMonitoringStatusDto) SetResource(v bool)`

SetResource sets Resource field to given value.

### HasResource

`func (o *EntityMonitoringStatusDto) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetTraffic

`func (o *EntityMonitoringStatusDto) GetTraffic() bool`

GetTraffic returns the Traffic field if non-nil, zero value otherwise.

### GetTrafficOk

`func (o *EntityMonitoringStatusDto) GetTrafficOk() (*bool, bool)`

GetTrafficOk returns a tuple with the Traffic field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraffic

`func (o *EntityMonitoringStatusDto) SetTraffic(v bool)`

SetTraffic sets Traffic field to given value.

### HasTraffic

`func (o *EntityMonitoringStatusDto) HasTraffic() bool`

HasTraffic returns a boolean if a field has been set.

### GetLatency

`func (o *EntityMonitoringStatusDto) GetLatency() bool`

GetLatency returns the Latency field if non-nil, zero value otherwise.

### GetLatencyOk

`func (o *EntityMonitoringStatusDto) GetLatencyOk() (*bool, bool)`

GetLatencyOk returns a tuple with the Latency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatency

`func (o *EntityMonitoringStatusDto) SetLatency(v bool)`

SetLatency sets Latency field to given value.

### HasLatency

`func (o *EntityMonitoringStatusDto) HasLatency() bool`

HasLatency returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


