# ApiQuerySyntaxError

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** |  | [optional] 
**Line** | Pointer to **int32** |  | [optional] 
**Column** | Pointer to **int32** |  | [optional] 
**Type** | [**ApiQuerySyntaxErrorType**](ApiQuerySyntaxErrorType.md) |  | 

## Methods

### NewApiQuerySyntaxError

`func NewApiQuerySyntaxError(type_ ApiQuerySyntaxErrorType, ) *ApiQuerySyntaxError`

NewApiQuerySyntaxError instantiates a new ApiQuerySyntaxError object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiQuerySyntaxErrorWithDefaults

`func NewApiQuerySyntaxErrorWithDefaults() *ApiQuerySyntaxError`

NewApiQuerySyntaxErrorWithDefaults instantiates a new ApiQuerySyntaxError object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ApiQuerySyntaxError) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ApiQuerySyntaxError) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ApiQuerySyntaxError) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ApiQuerySyntaxError) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetLine

`func (o *ApiQuerySyntaxError) GetLine() int32`

GetLine returns the Line field if non-nil, zero value otherwise.

### GetLineOk

`func (o *ApiQuerySyntaxError) GetLineOk() (*int32, bool)`

GetLineOk returns a tuple with the Line field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine

`func (o *ApiQuerySyntaxError) SetLine(v int32)`

SetLine sets Line field to given value.

### HasLine

`func (o *ApiQuerySyntaxError) HasLine() bool`

HasLine returns a boolean if a field has been set.

### GetColumn

`func (o *ApiQuerySyntaxError) GetColumn() int32`

GetColumn returns the Column field if non-nil, zero value otherwise.

### GetColumnOk

`func (o *ApiQuerySyntaxError) GetColumnOk() (*int32, bool)`

GetColumnOk returns a tuple with the Column field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumn

`func (o *ApiQuerySyntaxError) SetColumn(v int32)`

SetColumn sets Column field to given value.

### HasColumn

`func (o *ApiQuerySyntaxError) HasColumn() bool`

HasColumn returns a boolean if a field has been set.

### GetType

`func (o *ApiQuerySyntaxError) GetType() ApiQuerySyntaxErrorType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApiQuerySyntaxError) GetTypeOk() (*ApiQuerySyntaxErrorType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApiQuerySyntaxError) SetType(v ApiQuerySyntaxErrorType)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


