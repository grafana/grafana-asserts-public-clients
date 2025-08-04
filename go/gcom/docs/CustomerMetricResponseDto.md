# CustomerMetricResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hosted** | Pointer to [**MetricSetsDto**](MetricSetsDto.md) |  | [optional] 
**Client** | Pointer to [**MetricSetsDto**](MetricSetsDto.md) |  | [optional] 

## Methods

### NewCustomerMetricResponseDto

`func NewCustomerMetricResponseDto() *CustomerMetricResponseDto`

NewCustomerMetricResponseDto instantiates a new CustomerMetricResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomerMetricResponseDtoWithDefaults

`func NewCustomerMetricResponseDtoWithDefaults() *CustomerMetricResponseDto`

NewCustomerMetricResponseDtoWithDefaults instantiates a new CustomerMetricResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHosted

`func (o *CustomerMetricResponseDto) GetHosted() MetricSetsDto`

GetHosted returns the Hosted field if non-nil, zero value otherwise.

### GetHostedOk

`func (o *CustomerMetricResponseDto) GetHostedOk() (*MetricSetsDto, bool)`

GetHostedOk returns a tuple with the Hosted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHosted

`func (o *CustomerMetricResponseDto) SetHosted(v MetricSetsDto)`

SetHosted sets Hosted field to given value.

### HasHosted

`func (o *CustomerMetricResponseDto) HasHosted() bool`

HasHosted returns a boolean if a field has been set.

### GetClient

`func (o *CustomerMetricResponseDto) GetClient() MetricSetsDto`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *CustomerMetricResponseDto) GetClientOk() (*MetricSetsDto, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *CustomerMetricResponseDto) SetClient(v MetricSetsDto)`

SetClient sets Client field to given value.

### HasClient

`func (o *CustomerMetricResponseDto) HasClient() bool`

HasClient returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


