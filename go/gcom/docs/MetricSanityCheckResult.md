# MetricSanityCheckResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckName** | Pointer to **string** |  | [optional] 
**DataPresent** | Pointer to **bool** |  | [optional] 
**StepResults** | Pointer to [**[]MetricSanityCheckStepResult**](MetricSanityCheckStepResult.md) |  | [optional] 

## Methods

### NewMetricSanityCheckResult

`func NewMetricSanityCheckResult() *MetricSanityCheckResult`

NewMetricSanityCheckResult instantiates a new MetricSanityCheckResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMetricSanityCheckResultWithDefaults

`func NewMetricSanityCheckResultWithDefaults() *MetricSanityCheckResult`

NewMetricSanityCheckResultWithDefaults instantiates a new MetricSanityCheckResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckName

`func (o *MetricSanityCheckResult) GetCheckName() string`

GetCheckName returns the CheckName field if non-nil, zero value otherwise.

### GetCheckNameOk

`func (o *MetricSanityCheckResult) GetCheckNameOk() (*string, bool)`

GetCheckNameOk returns a tuple with the CheckName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckName

`func (o *MetricSanityCheckResult) SetCheckName(v string)`

SetCheckName sets CheckName field to given value.

### HasCheckName

`func (o *MetricSanityCheckResult) HasCheckName() bool`

HasCheckName returns a boolean if a field has been set.

### GetDataPresent

`func (o *MetricSanityCheckResult) GetDataPresent() bool`

GetDataPresent returns the DataPresent field if non-nil, zero value otherwise.

### GetDataPresentOk

`func (o *MetricSanityCheckResult) GetDataPresentOk() (*bool, bool)`

GetDataPresentOk returns a tuple with the DataPresent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataPresent

`func (o *MetricSanityCheckResult) SetDataPresent(v bool)`

SetDataPresent sets DataPresent field to given value.

### HasDataPresent

`func (o *MetricSanityCheckResult) HasDataPresent() bool`

HasDataPresent returns a boolean if a field has been set.

### GetStepResults

`func (o *MetricSanityCheckResult) GetStepResults() []MetricSanityCheckStepResult`

GetStepResults returns the StepResults field if non-nil, zero value otherwise.

### GetStepResultsOk

`func (o *MetricSanityCheckResult) GetStepResultsOk() (*[]MetricSanityCheckStepResult, bool)`

GetStepResultsOk returns a tuple with the StepResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepResults

`func (o *MetricSanityCheckResult) SetStepResults(v []MetricSanityCheckStepResult)`

SetStepResults sets StepResults field to given value.

### HasStepResults

`func (o *MetricSanityCheckResult) HasStepResults() bool`

HasStepResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


