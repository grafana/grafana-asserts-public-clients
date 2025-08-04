# MetricSanityCheckDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FailedSanityCheckSteps** | Pointer to [**[]MetricSanityCheckResult**](MetricSanityCheckResult.md) |  | [optional] 

## Methods

### NewMetricSanityCheckDto

`func NewMetricSanityCheckDto() *MetricSanityCheckDto`

NewMetricSanityCheckDto instantiates a new MetricSanityCheckDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricSanityCheckDtoWithDefaults

`func NewMetricSanityCheckDtoWithDefaults() *MetricSanityCheckDto`

NewMetricSanityCheckDtoWithDefaults instantiates a new MetricSanityCheckDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFailedSanityCheckSteps

`func (o *MetricSanityCheckDto) GetFailedSanityCheckSteps() []MetricSanityCheckResult`

GetFailedSanityCheckSteps returns the FailedSanityCheckSteps field if non-nil, zero value otherwise.

### GetFailedSanityCheckStepsOk

`func (o *MetricSanityCheckDto) GetFailedSanityCheckStepsOk() (*[]MetricSanityCheckResult, bool)`

GetFailedSanityCheckStepsOk returns a tuple with the FailedSanityCheckSteps field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailedSanityCheckSteps

`func (o *MetricSanityCheckDto) SetFailedSanityCheckSteps(v []MetricSanityCheckResult)`

SetFailedSanityCheckSteps sets FailedSanityCheckSteps field to given value.

### HasFailedSanityCheckSteps

`func (o *MetricSanityCheckDto) HasFailedSanityCheckSteps() bool`

HasFailedSanityCheckSteps returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


