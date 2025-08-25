# ProductActivationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Product** | **string** |  | 
**Enabled** | **bool** |  | 

## Methods

### NewProductActivationDto

`func NewProductActivationDto(product string, enabled bool, ) *ProductActivationDto`

NewProductActivationDto instantiates a new ProductActivationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductActivationDtoWithDefaults

`func NewProductActivationDtoWithDefaults() *ProductActivationDto`

NewProductActivationDtoWithDefaults instantiates a new ProductActivationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProduct

`func (o *ProductActivationDto) GetProduct() string`

GetProduct returns the Product field if non-nil, zero value otherwise.

### GetProductOk

`func (o *ProductActivationDto) GetProductOk() (*string, bool)`

GetProductOk returns a tuple with the Product field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProduct

`func (o *ProductActivationDto) SetProduct(v string)`

SetProduct sets Product field to given value.


### GetEnabled

`func (o *ProductActivationDto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ProductActivationDto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ProductActivationDto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


