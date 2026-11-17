# KgFilterLeafDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Prop** | **string** |  | 
**Op** | **string** |  | 
**Value** | Pointer to **interface{}** |  | [optional] 
**CaseInsensitive** | Pointer to **bool** | Use case-insensitive string comparison. Valid only with string operands on EQ, NEQ, IN, CONTAINS, STARTS_WITH, or ENDS_WITH. | [optional] [default to false]

## Methods

### NewKgFilterLeafDto

`func NewKgFilterLeafDto(prop string, op string, ) *KgFilterLeafDto`

NewKgFilterLeafDto instantiates a new KgFilterLeafDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgFilterLeafDtoWithDefaults

`func NewKgFilterLeafDtoWithDefaults() *KgFilterLeafDto`

NewKgFilterLeafDtoWithDefaults instantiates a new KgFilterLeafDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProp

`func (o *KgFilterLeafDto) GetProp() string`

GetProp returns the Prop field if non-nil, zero value otherwise.

### GetPropOk

`func (o *KgFilterLeafDto) GetPropOk() (*string, bool)`

GetPropOk returns a tuple with the Prop field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProp

`func (o *KgFilterLeafDto) SetProp(v string)`

SetProp sets Prop field to given value.


### GetOp

`func (o *KgFilterLeafDto) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *KgFilterLeafDto) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *KgFilterLeafDto) SetOp(v string)`

SetOp sets Op field to given value.


### GetValue

`func (o *KgFilterLeafDto) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *KgFilterLeafDto) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *KgFilterLeafDto) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *KgFilterLeafDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *KgFilterLeafDto) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *KgFilterLeafDto) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetCaseInsensitive

`func (o *KgFilterLeafDto) GetCaseInsensitive() bool`

GetCaseInsensitive returns the CaseInsensitive field if non-nil, zero value otherwise.

### GetCaseInsensitiveOk

`func (o *KgFilterLeafDto) GetCaseInsensitiveOk() (*bool, bool)`

GetCaseInsensitiveOk returns a tuple with the CaseInsensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseInsensitive

`func (o *KgFilterLeafDto) SetCaseInsensitive(v bool)`

SetCaseInsensitive sets CaseInsensitive field to given value.

### HasCaseInsensitive

`func (o *KgFilterLeafDto) HasCaseInsensitive() bool`

HasCaseInsensitive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


