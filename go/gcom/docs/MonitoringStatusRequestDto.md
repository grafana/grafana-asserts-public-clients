# MonitoringStatusRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityKeys** | Pointer to [**[]EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**InstantMs** | Pointer to **int64** |  | [optional] 
**ReportOnlyMissing** | Pointer to **bool** |  | [optional] 
**ScopeCriteriaDto** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 

## Methods

### NewMonitoringStatusRequestDto

`func NewMonitoringStatusRequestDto() *MonitoringStatusRequestDto`

NewMonitoringStatusRequestDto instantiates a new MonitoringStatusRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMonitoringStatusRequestDtoWithDefaults

`func NewMonitoringStatusRequestDtoWithDefaults() *MonitoringStatusRequestDto`

NewMonitoringStatusRequestDtoWithDefaults instantiates a new MonitoringStatusRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityKeys

`func (o *MonitoringStatusRequestDto) GetEntityKeys() []EntityKeyDto`

GetEntityKeys returns the EntityKeys field if non-nil, zero value otherwise.

### GetEntityKeysOk

`func (o *MonitoringStatusRequestDto) GetEntityKeysOk() (*[]EntityKeyDto, bool)`

GetEntityKeysOk returns a tuple with the EntityKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKeys

`func (o *MonitoringStatusRequestDto) SetEntityKeys(v []EntityKeyDto)`

SetEntityKeys sets EntityKeys field to given value.

### HasEntityKeys

`func (o *MonitoringStatusRequestDto) HasEntityKeys() bool`

HasEntityKeys returns a boolean if a field has been set.

### GetInstantMs

`func (o *MonitoringStatusRequestDto) GetInstantMs() int64`

GetInstantMs returns the InstantMs field if non-nil, zero value otherwise.

### GetInstantMsOk

`func (o *MonitoringStatusRequestDto) GetInstantMsOk() (*int64, bool)`

GetInstantMsOk returns a tuple with the InstantMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstantMs

`func (o *MonitoringStatusRequestDto) SetInstantMs(v int64)`

SetInstantMs sets InstantMs field to given value.

### HasInstantMs

`func (o *MonitoringStatusRequestDto) HasInstantMs() bool`

HasInstantMs returns a boolean if a field has been set.

### GetReportOnlyMissing

`func (o *MonitoringStatusRequestDto) GetReportOnlyMissing() bool`

GetReportOnlyMissing returns the ReportOnlyMissing field if non-nil, zero value otherwise.

### GetReportOnlyMissingOk

`func (o *MonitoringStatusRequestDto) GetReportOnlyMissingOk() (*bool, bool)`

GetReportOnlyMissingOk returns a tuple with the ReportOnlyMissing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportOnlyMissing

`func (o *MonitoringStatusRequestDto) SetReportOnlyMissing(v bool)`

SetReportOnlyMissing sets ReportOnlyMissing field to given value.

### HasReportOnlyMissing

`func (o *MonitoringStatusRequestDto) HasReportOnlyMissing() bool`

HasReportOnlyMissing returns a boolean if a field has been set.

### GetScopeCriteriaDto

`func (o *MonitoringStatusRequestDto) GetScopeCriteriaDto() ScopeCriteriaDto`

GetScopeCriteriaDto returns the ScopeCriteriaDto field if non-nil, zero value otherwise.

### GetScopeCriteriaDtoOk

`func (o *MonitoringStatusRequestDto) GetScopeCriteriaDtoOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaDtoOk returns a tuple with the ScopeCriteriaDto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteriaDto

`func (o *MonitoringStatusRequestDto) SetScopeCriteriaDto(v ScopeCriteriaDto)`

SetScopeCriteriaDto sets ScopeCriteriaDto field to given value.

### HasScopeCriteriaDto

`func (o *MonitoringStatusRequestDto) HasScopeCriteriaDto() bool`

HasScopeCriteriaDto returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


