# ApiError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to [**ApiErrorStatus**](ApiErrorStatus.md) |  | [optional] 
**RequestId** | Pointer to **string** |  | [optional] 
**Timestamp** | Pointer to **int64** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**DebugMessage** | Pointer to **string** |  | [optional] 
**SubErrors** | Pointer to [**[]ApiErrorSubErrorsInner**](ApiErrorSubErrorsInner.md) |  | [optional] 
**TraceId** | Pointer to **string** |  | [optional] 
**SpanId** | Pointer to **string** |  | [optional] 

## Methods

### NewApiError

`func NewApiError() *ApiError`

NewApiError instantiates a new ApiError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiErrorWithDefaults

`func NewApiErrorWithDefaults() *ApiError`

NewApiErrorWithDefaults instantiates a new ApiError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *ApiError) GetStatus() ApiErrorStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ApiError) GetStatusOk() (*ApiErrorStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ApiError) SetStatus(v ApiErrorStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ApiError) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetRequestId

`func (o *ApiError) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *ApiError) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *ApiError) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *ApiError) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### GetTimestamp

`func (o *ApiError) GetTimestamp() int64`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ApiError) GetTimestampOk() (*int64, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ApiError) SetTimestamp(v int64)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *ApiError) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetMessage

`func (o *ApiError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDebugMessage

`func (o *ApiError) GetDebugMessage() string`

GetDebugMessage returns the DebugMessage field if non-nil, zero value otherwise.

### GetDebugMessageOk

`func (o *ApiError) GetDebugMessageOk() (*string, bool)`

GetDebugMessageOk returns a tuple with the DebugMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebugMessage

`func (o *ApiError) SetDebugMessage(v string)`

SetDebugMessage sets DebugMessage field to given value.

### HasDebugMessage

`func (o *ApiError) HasDebugMessage() bool`

HasDebugMessage returns a boolean if a field has been set.

### GetSubErrors

`func (o *ApiError) GetSubErrors() []ApiErrorSubErrorsInner`

GetSubErrors returns the SubErrors field if non-nil, zero value otherwise.

### GetSubErrorsOk

`func (o *ApiError) GetSubErrorsOk() (*[]ApiErrorSubErrorsInner, bool)`

GetSubErrorsOk returns a tuple with the SubErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubErrors

`func (o *ApiError) SetSubErrors(v []ApiErrorSubErrorsInner)`

SetSubErrors sets SubErrors field to given value.

### HasSubErrors

`func (o *ApiError) HasSubErrors() bool`

HasSubErrors returns a boolean if a field has been set.

### GetTraceId

`func (o *ApiError) GetTraceId() string`

GetTraceId returns the TraceId field if non-nil, zero value otherwise.

### GetTraceIdOk

`func (o *ApiError) GetTraceIdOk() (*string, bool)`

GetTraceIdOk returns a tuple with the TraceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceId

`func (o *ApiError) SetTraceId(v string)`

SetTraceId sets TraceId field to given value.

### HasTraceId

`func (o *ApiError) HasTraceId() bool`

HasTraceId returns a boolean if a field has been set.

### GetSpanId

`func (o *ApiError) GetSpanId() string`

GetSpanId returns the SpanId field if non-nil, zero value otherwise.

### GetSpanIdOk

`func (o *ApiError) GetSpanIdOk() (*string, bool)`

GetSpanIdOk returns a tuple with the SpanId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpanId

`func (o *ApiError) SetSpanId(v string)`

SetSpanId sets SpanId field to given value.

### HasSpanId

`func (o *ApiError) HasSpanId() bool`

HasSpanId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


