# LatencyThresholdsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityKey** | Pointer to [**EntityKeyDto**](EntityKeyDto.md) |  | [optional] 
**LatencyThresholds** | Pointer to [**[]LatencyThresholdDto**](LatencyThresholdDto.md) |  | [optional] 

## Methods

### NewLatencyThresholdsDto

`func NewLatencyThresholdsDto() *LatencyThresholdsDto`

NewLatencyThresholdsDto instantiates a new LatencyThresholdsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLatencyThresholdsDtoWithDefaults

`func NewLatencyThresholdsDtoWithDefaults() *LatencyThresholdsDto`

NewLatencyThresholdsDtoWithDefaults instantiates a new LatencyThresholdsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityKey

`func (o *LatencyThresholdsDto) GetEntityKey() EntityKeyDto`

GetEntityKey returns the EntityKey field if non-nil, zero value otherwise.

### GetEntityKeyOk

`func (o *LatencyThresholdsDto) GetEntityKeyOk() (*EntityKeyDto, bool)`

GetEntityKeyOk returns a tuple with the EntityKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityKey

`func (o *LatencyThresholdsDto) SetEntityKey(v EntityKeyDto)`

SetEntityKey sets EntityKey field to given value.

### HasEntityKey

`func (o *LatencyThresholdsDto) HasEntityKey() bool`

HasEntityKey returns a boolean if a field has been set.

### GetLatencyThresholds

`func (o *LatencyThresholdsDto) GetLatencyThresholds() []LatencyThresholdDto`

GetLatencyThresholds returns the LatencyThresholds field if non-nil, zero value otherwise.

### GetLatencyThresholdsOk

`func (o *LatencyThresholdsDto) GetLatencyThresholdsOk() (*[]LatencyThresholdDto, bool)`

GetLatencyThresholdsOk returns a tuple with the LatencyThresholds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatencyThresholds

`func (o *LatencyThresholdsDto) SetLatencyThresholds(v []LatencyThresholdDto)`

SetLatencyThresholds sets LatencyThresholds field to given value.

### HasLatencyThresholds

`func (o *LatencyThresholdsDto) HasLatencyThresholds() bool`

HasLatencyThresholds returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


