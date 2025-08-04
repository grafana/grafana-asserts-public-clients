# PropertyMatcherDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Value** | Pointer to **interface{}** |  | [optional] 
**Op** | **string** |  | 
**Uom** | Pointer to **string** |  | [optional] 

## Methods

### NewPropertyMatcherDto

`func NewPropertyMatcherDto(name string, op string, ) *PropertyMatcherDto`

NewPropertyMatcherDto instantiates a new PropertyMatcherDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyMatcherDtoWithDefaults

`func NewPropertyMatcherDtoWithDefaults() *PropertyMatcherDto`

NewPropertyMatcherDtoWithDefaults instantiates a new PropertyMatcherDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PropertyMatcherDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PropertyMatcherDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PropertyMatcherDto) SetName(v string)`

SetName sets Name field to given value.


### GetValue

`func (o *PropertyMatcherDto) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *PropertyMatcherDto) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *PropertyMatcherDto) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *PropertyMatcherDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *PropertyMatcherDto) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *PropertyMatcherDto) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetOp

`func (o *PropertyMatcherDto) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *PropertyMatcherDto) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *PropertyMatcherDto) SetOp(v string)`

SetOp sets Op field to given value.


### GetUom

`func (o *PropertyMatcherDto) GetUom() string`

GetUom returns the Uom field if non-nil, zero value otherwise.

### GetUomOk

`func (o *PropertyMatcherDto) GetUomOk() (*string, bool)`

GetUomOk returns a tuple with the Uom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUom

`func (o *PropertyMatcherDto) SetUom(v string)`

SetUom sets Uom field to given value.

### HasUom

`func (o *PropertyMatcherDto) HasUom() bool`

HasUom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


