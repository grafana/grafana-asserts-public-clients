# KpiSummaryRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityKeys** | Pointer to [**[]EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**StartMs** | Pointer to **int64** |  | [optional] 
**EndMs** | Pointer to **int64** |  | [optional] 

## Methods

### NewKpiSummaryRequestDto

`func NewKpiSummaryRequestDto() *KpiSummaryRequestDto`

NewKpiSummaryRequestDto instantiates a new KpiSummaryRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKpiSummaryRequestDtoWithDefaults

`func NewKpiSummaryRequestDtoWithDefaults() *KpiSummaryRequestDto`

NewKpiSummaryRequestDtoWithDefaults instantiates a new KpiSummaryRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityKeys

`func (o *KpiSummaryRequestDto) GetEntityKeys() []EntityKeyDto`

GetEntityKeys returns the EntityKeys field if non-nil, zero value otherwise.

### GetEntityKeysOk

`func (o *KpiSummaryRequestDto) GetEntityKeysOk() (*[]EntityKeyDto, bool)`

GetEntityKeysOk returns a tuple with the EntityKeys field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKeys

`func (o *KpiSummaryRequestDto) SetEntityKeys(v []EntityKeyDto)`

SetEntityKeys sets EntityKeys field to given value.

### HasEntityKeys

`func (o *KpiSummaryRequestDto) HasEntityKeys() bool`

HasEntityKeys returns a boolean if a field has been set.

### GetStartMs

`func (o *KpiSummaryRequestDto) GetStartMs() int64`

GetStartMs returns the StartMs field if non-nil, zero value otherwise.

### GetStartMsOk

`func (o *KpiSummaryRequestDto) GetStartMsOk() (*int64, bool)`

GetStartMsOk returns a tuple with the StartMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartMs

`func (o *KpiSummaryRequestDto) SetStartMs(v int64)`

SetStartMs sets StartMs field to given value.

### HasStartMs

`func (o *KpiSummaryRequestDto) HasStartMs() bool`

HasStartMs returns a boolean if a field has been set.

### GetEndMs

`func (o *KpiSummaryRequestDto) GetEndMs() int64`

GetEndMs returns the EndMs field if non-nil, zero value otherwise.

### GetEndMsOk

`func (o *KpiSummaryRequestDto) GetEndMsOk() (*int64, bool)`

GetEndMsOk returns a tuple with the EndMs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndMs

`func (o *KpiSummaryRequestDto) SetEndMs(v int64)`

SetEndMs sets EndMs field to given value.

### HasEndMs

`func (o *KpiSummaryRequestDto) HasEndMs() bool`

HasEndMs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


