# ApiErrorExceptionCause

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StackTrace** | Pointer to [**[]ApiErrorExceptionCauseStackTraceInner**](ApiErrorExceptionCauseStackTraceInner.md) |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**LocalizedMessage** | Pointer to **string** |  | [optional] 

## Methods

### NewApiErrorExceptionCause

`func NewApiErrorExceptionCause() *ApiErrorExceptionCause`

NewApiErrorExceptionCause instantiates a new ApiErrorExceptionCause object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiErrorExceptionCauseWithDefaults

`func NewApiErrorExceptionCauseWithDefaults() *ApiErrorExceptionCause`

NewApiErrorExceptionCauseWithDefaults instantiates a new ApiErrorExceptionCause object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStackTrace

`func (o *ApiErrorExceptionCause) GetStackTrace() []ApiErrorExceptionCauseStackTraceInner`

GetStackTrace returns the StackTrace field if non-nil, zero value otherwise.

### GetStackTraceOk

`func (o *ApiErrorExceptionCause) GetStackTraceOk() (*[]ApiErrorExceptionCauseStackTraceInner, bool)`

GetStackTraceOk returns a tuple with the StackTrace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackTrace

`func (o *ApiErrorExceptionCause) SetStackTrace(v []ApiErrorExceptionCauseStackTraceInner)`

SetStackTrace sets StackTrace field to given value.

### HasStackTrace

`func (o *ApiErrorExceptionCause) HasStackTrace() bool`

HasStackTrace returns a boolean if a field has been set.

### GetMessage

`func (o *ApiErrorExceptionCause) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiErrorExceptionCause) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiErrorExceptionCause) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiErrorExceptionCause) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetLocalizedMessage

`func (o *ApiErrorExceptionCause) GetLocalizedMessage() string`

GetLocalizedMessage returns the LocalizedMessage field if non-nil, zero value otherwise.

### GetLocalizedMessageOk

`func (o *ApiErrorExceptionCause) GetLocalizedMessageOk() (*string, bool)`

GetLocalizedMessageOk returns a tuple with the LocalizedMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocalizedMessage

`func (o *ApiErrorExceptionCause) SetLocalizedMessage(v string)`

SetLocalizedMessage sets LocalizedMessage field to given value.

### HasLocalizedMessage

`func (o *ApiErrorExceptionCause) HasLocalizedMessage() bool`

HasLocalizedMessage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


