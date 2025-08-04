# ModelMappingRequestErrorDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MetricName** | **string** |  | 
**MetricType** | **string** |  | 
**Errors** | [**[]ModelMappingRequestErrorConditionDto**](ModelMappingRequestErrorConditionDto.md) |  | 

## Methods

### NewModelMappingRequestErrorDto

`func NewModelMappingRequestErrorDto(metricName string, metricType string, errors []ModelMappingRequestErrorConditionDto, ) *ModelMappingRequestErrorDto`

NewModelMappingRequestErrorDto instantiates a new ModelMappingRequestErrorDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingRequestErrorDtoWithDefaults

`func NewModelMappingRequestErrorDtoWithDefaults() *ModelMappingRequestErrorDto`

NewModelMappingRequestErrorDtoWithDefaults instantiates a new ModelMappingRequestErrorDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMetricName

`func (o *ModelMappingRequestErrorDto) GetMetricName() string`

GetMetricName returns the MetricName field if non-nil, zero value otherwise.

### GetMetricNameOk

`func (o *ModelMappingRequestErrorDto) GetMetricNameOk() (*string, bool)`

GetMetricNameOk returns a tuple with the MetricName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricName

`func (o *ModelMappingRequestErrorDto) SetMetricName(v string)`

SetMetricName sets MetricName field to given value.


### GetMetricType

`func (o *ModelMappingRequestErrorDto) GetMetricType() string`

GetMetricType returns the MetricType field if non-nil, zero value otherwise.

### GetMetricTypeOk

`func (o *ModelMappingRequestErrorDto) GetMetricTypeOk() (*string, bool)`

GetMetricTypeOk returns a tuple with the MetricType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricType

`func (o *ModelMappingRequestErrorDto) SetMetricType(v string)`

SetMetricType sets MetricType field to given value.


### GetErrors

`func (o *ModelMappingRequestErrorDto) GetErrors() []ModelMappingRequestErrorConditionDto`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ModelMappingRequestErrorDto) GetErrorsOk() (*[]ModelMappingRequestErrorConditionDto, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ModelMappingRequestErrorDto) SetErrors(v []ModelMappingRequestErrorConditionDto)`

SetErrors sets Errors field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


