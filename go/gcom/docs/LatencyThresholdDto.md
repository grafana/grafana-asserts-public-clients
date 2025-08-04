# LatencyThresholdDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestType** | Pointer to **string** |  | [optional] 
**RequestContext** | Pointer to **string** |  | [optional] 
**UpperThreshold** | Pointer to **float64** |  | [optional] 

## Methods

### NewLatencyThresholdDto

`func NewLatencyThresholdDto() *LatencyThresholdDto`

NewLatencyThresholdDto instantiates a new LatencyThresholdDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLatencyThresholdDtoWithDefaults

`func NewLatencyThresholdDtoWithDefaults() *LatencyThresholdDto`

NewLatencyThresholdDtoWithDefaults instantiates a new LatencyThresholdDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestType

`func (o *LatencyThresholdDto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *LatencyThresholdDto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *LatencyThresholdDto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *LatencyThresholdDto) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### GetRequestContext

`func (o *LatencyThresholdDto) GetRequestContext() string`

GetRequestContext returns the RequestContext field if non-nil, zero value otherwise.

### GetRequestContextOk

`func (o *LatencyThresholdDto) GetRequestContextOk() (*string, bool)`

GetRequestContextOk returns a tuple with the RequestContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestContext

`func (o *LatencyThresholdDto) SetRequestContext(v string)`

SetRequestContext sets RequestContext field to given value.

### HasRequestContext

`func (o *LatencyThresholdDto) HasRequestContext() bool`

HasRequestContext returns a boolean if a field has been set.

### GetUpperThreshold

`func (o *LatencyThresholdDto) GetUpperThreshold() float64`

GetUpperThreshold returns the UpperThreshold field if non-nil, zero value otherwise.

### GetUpperThresholdOk

`func (o *LatencyThresholdDto) GetUpperThresholdOk() (*float64, bool)`

GetUpperThresholdOk returns a tuple with the UpperThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpperThreshold

`func (o *LatencyThresholdDto) SetUpperThreshold(v float64)`

SetUpperThreshold sets UpperThreshold field to given value.

### HasUpperThreshold

`func (o *LatencyThresholdDto) HasUpperThreshold() bool`

HasUpperThreshold returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


