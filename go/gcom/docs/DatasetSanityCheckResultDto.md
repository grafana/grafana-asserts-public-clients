# DatasetSanityCheckResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckName** | Pointer to **string** |  | [optional] 
**StepResults** | Pointer to [**[]DatasetSanityCheckStepResultDto**](DatasetSanityCheckStepResultDto.md) |  | [optional] 

## Methods

### NewDatasetSanityCheckResultDto

`func NewDatasetSanityCheckResultDto() *DatasetSanityCheckResultDto`

NewDatasetSanityCheckResultDto instantiates a new DatasetSanityCheckResultDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatasetSanityCheckResultDtoWithDefaults

`func NewDatasetSanityCheckResultDtoWithDefaults() *DatasetSanityCheckResultDto`

NewDatasetSanityCheckResultDtoWithDefaults instantiates a new DatasetSanityCheckResultDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckName

`func (o *DatasetSanityCheckResultDto) GetCheckName() string`

GetCheckName returns the CheckName field if non-nil, zero value otherwise.

### GetCheckNameOk

`func (o *DatasetSanityCheckResultDto) GetCheckNameOk() (*string, bool)`

GetCheckNameOk returns a tuple with the CheckName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckName

`func (o *DatasetSanityCheckResultDto) SetCheckName(v string)`

SetCheckName sets CheckName field to given value.

### HasCheckName

`func (o *DatasetSanityCheckResultDto) HasCheckName() bool`

HasCheckName returns a boolean if a field has been set.

### GetStepResults

`func (o *DatasetSanityCheckResultDto) GetStepResults() []DatasetSanityCheckStepResultDto`

GetStepResults returns the StepResults field if non-nil, zero value otherwise.

### GetStepResultsOk

`func (o *DatasetSanityCheckResultDto) GetStepResultsOk() (*[]DatasetSanityCheckStepResultDto, bool)`

GetStepResultsOk returns a tuple with the StepResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStepResults

`func (o *DatasetSanityCheckResultDto) SetStepResults(v []DatasetSanityCheckStepResultDto)`

SetStepResults sets StepResults field to given value.

### HasStepResults

`func (o *DatasetSanityCheckResultDto) HasStepResults() bool`

HasStepResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


