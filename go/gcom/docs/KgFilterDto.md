# KgFilterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Prop** | **string** |  | 
**Op** | **string** |  | 
**Value** | Pointer to **interface{}** |  | [optional] 
**CaseInsensitive** | Pointer to **bool** | Use case-insensitive string comparison. Valid only with string operands on EQ, NEQ, IN, CONTAINS, STARTS_WITH, or ENDS_WITH. | [optional] [default to false]
**All** | [**[]KgFilterDto**](KgFilterDto.md) |  | 
**Any** | [**[]KgFilterDto**](KgFilterDto.md) |  | 
**Not** | [**KgFilterDto**](KgFilterDto.md) |  | 

## Methods

### NewKgFilterDto

`func NewKgFilterDto(prop string, op string, all []KgFilterDto, any []KgFilterDto, not KgFilterDto, ) *KgFilterDto`

NewKgFilterDto instantiates a new KgFilterDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgFilterDtoWithDefaults

`func NewKgFilterDtoWithDefaults() *KgFilterDto`

NewKgFilterDtoWithDefaults instantiates a new KgFilterDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProp

`func (o *KgFilterDto) GetProp() string`

GetProp returns the Prop field if non-nil, zero value otherwise.

### GetPropOk

`func (o *KgFilterDto) GetPropOk() (*string, bool)`

GetPropOk returns a tuple with the Prop field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProp

`func (o *KgFilterDto) SetProp(v string)`

SetProp sets Prop field to given value.


### GetOp

`func (o *KgFilterDto) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *KgFilterDto) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *KgFilterDto) SetOp(v string)`

SetOp sets Op field to given value.


### GetValue

`func (o *KgFilterDto) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *KgFilterDto) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *KgFilterDto) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *KgFilterDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *KgFilterDto) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *KgFilterDto) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetCaseInsensitive

`func (o *KgFilterDto) GetCaseInsensitive() bool`

GetCaseInsensitive returns the CaseInsensitive field if non-nil, zero value otherwise.

### GetCaseInsensitiveOk

`func (o *KgFilterDto) GetCaseInsensitiveOk() (*bool, bool)`

GetCaseInsensitiveOk returns a tuple with the CaseInsensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseInsensitive

`func (o *KgFilterDto) SetCaseInsensitive(v bool)`

SetCaseInsensitive sets CaseInsensitive field to given value.

### HasCaseInsensitive

`func (o *KgFilterDto) HasCaseInsensitive() bool`

HasCaseInsensitive returns a boolean if a field has been set.

### GetAll

`func (o *KgFilterDto) GetAll() []KgFilterDto`

GetAll returns the All field if non-nil, zero value otherwise.

### GetAllOk

`func (o *KgFilterDto) GetAllOk() (*[]KgFilterDto, bool)`

GetAllOk returns a tuple with the All field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAll

`func (o *KgFilterDto) SetAll(v []KgFilterDto)`

SetAll sets All field to given value.


### GetAny

`func (o *KgFilterDto) GetAny() []KgFilterDto`

GetAny returns the Any field if non-nil, zero value otherwise.

### GetAnyOk

`func (o *KgFilterDto) GetAnyOk() (*[]KgFilterDto, bool)`

GetAnyOk returns a tuple with the Any field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAny

`func (o *KgFilterDto) SetAny(v []KgFilterDto)`

SetAny sets Any field to given value.


### GetNot

`func (o *KgFilterDto) GetNot() KgFilterDto`

GetNot returns the Not field if non-nil, zero value otherwise.

### GetNotOk

`func (o *KgFilterDto) GetNotOk() (*KgFilterDto, bool)`

GetNotOk returns a tuple with the Not field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNot

`func (o *KgFilterDto) SetNot(v KgFilterDto)`

SetNot sets Not field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


