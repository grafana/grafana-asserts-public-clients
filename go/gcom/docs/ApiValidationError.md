# ApiValidationError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** |  | [optional] 
**Field** | Pointer to **string** |  | [optional] 
**RejectedValue** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewApiValidationError

`func NewApiValidationError() *ApiValidationError`

NewApiValidationError instantiates a new ApiValidationError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiValidationErrorWithDefaults

`func NewApiValidationErrorWithDefaults() *ApiValidationError`

NewApiValidationErrorWithDefaults instantiates a new ApiValidationError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ApiValidationError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiValidationError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiValidationError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiValidationError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetField

`func (o *ApiValidationError) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *ApiValidationError) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *ApiValidationError) SetField(v string)`

SetField sets Field field to given value.

### HasField

`func (o *ApiValidationError) HasField() bool`

HasField returns a boolean if a field has been set.

### GetRejectedValue

`func (o *ApiValidationError) GetRejectedValue() interface{}`

GetRejectedValue returns the RejectedValue field if non-nil, zero value otherwise.

### GetRejectedValueOk

`func (o *ApiValidationError) GetRejectedValueOk() (*interface{}, bool)`

GetRejectedValueOk returns a tuple with the RejectedValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRejectedValue

`func (o *ApiValidationError) SetRejectedValue(v interface{})`

SetRejectedValue sets RejectedValue field to given value.

### HasRejectedValue

`func (o *ApiValidationError) HasRejectedValue() bool`

HasRejectedValue returns a boolean if a field has been set.

### SetRejectedValueNil

`func (o *ApiValidationError) SetRejectedValueNil(b bool)`

 SetRejectedValueNil sets the value for RejectedValue to be an explicit nil

### UnsetRejectedValue
`func (o *ApiValidationError) UnsetRejectedValue()`

UnsetRejectedValue ensures that no value is present for RejectedValue, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


