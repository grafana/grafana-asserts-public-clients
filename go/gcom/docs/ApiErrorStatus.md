# ApiErrorStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **bool** |  | [optional] 
**Is5xxServerError** | Pointer to **bool** |  | [optional] 
**Is2xxSuccessful** | Pointer to **bool** |  | [optional] 
**Is4xxClientError** | Pointer to **bool** |  | [optional] 
**Is1xxInformational** | Pointer to **bool** |  | [optional] 
**Is3xxRedirection** | Pointer to **bool** |  | [optional] 

## Methods

### NewApiErrorStatus

`func NewApiErrorStatus() *ApiErrorStatus`

NewApiErrorStatus instantiates a new ApiErrorStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiErrorStatusWithDefaults

`func NewApiErrorStatusWithDefaults() *ApiErrorStatus`

NewApiErrorStatusWithDefaults instantiates a new ApiErrorStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ApiErrorStatus) GetError() bool`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ApiErrorStatus) GetErrorOk() (*bool, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ApiErrorStatus) SetError(v bool)`

SetError sets Error field to given value.

### HasError

`func (o *ApiErrorStatus) HasError() bool`

HasError returns a boolean if a field has been set.

### GetIs5xxServerError

`func (o *ApiErrorStatus) GetIs5xxServerError() bool`

GetIs5xxServerError returns the Is5xxServerError field if non-nil, zero value otherwise.

### GetIs5xxServerErrorOk

`func (o *ApiErrorStatus) GetIs5xxServerErrorOk() (*bool, bool)`

GetIs5xxServerErrorOk returns a tuple with the Is5xxServerError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIs5xxServerError

`func (o *ApiErrorStatus) SetIs5xxServerError(v bool)`

SetIs5xxServerError sets Is5xxServerError field to given value.

### HasIs5xxServerError

`func (o *ApiErrorStatus) HasIs5xxServerError() bool`

HasIs5xxServerError returns a boolean if a field has been set.

### GetIs2xxSuccessful

`func (o *ApiErrorStatus) GetIs2xxSuccessful() bool`

GetIs2xxSuccessful returns the Is2xxSuccessful field if non-nil, zero value otherwise.

### GetIs2xxSuccessfulOk

`func (o *ApiErrorStatus) GetIs2xxSuccessfulOk() (*bool, bool)`

GetIs2xxSuccessfulOk returns a tuple with the Is2xxSuccessful field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIs2xxSuccessful

`func (o *ApiErrorStatus) SetIs2xxSuccessful(v bool)`

SetIs2xxSuccessful sets Is2xxSuccessful field to given value.

### HasIs2xxSuccessful

`func (o *ApiErrorStatus) HasIs2xxSuccessful() bool`

HasIs2xxSuccessful returns a boolean if a field has been set.

### GetIs4xxClientError

`func (o *ApiErrorStatus) GetIs4xxClientError() bool`

GetIs4xxClientError returns the Is4xxClientError field if non-nil, zero value otherwise.

### GetIs4xxClientErrorOk

`func (o *ApiErrorStatus) GetIs4xxClientErrorOk() (*bool, bool)`

GetIs4xxClientErrorOk returns a tuple with the Is4xxClientError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIs4xxClientError

`func (o *ApiErrorStatus) SetIs4xxClientError(v bool)`

SetIs4xxClientError sets Is4xxClientError field to given value.

### HasIs4xxClientError

`func (o *ApiErrorStatus) HasIs4xxClientError() bool`

HasIs4xxClientError returns a boolean if a field has been set.

### GetIs1xxInformational

`func (o *ApiErrorStatus) GetIs1xxInformational() bool`

GetIs1xxInformational returns the Is1xxInformational field if non-nil, zero value otherwise.

### GetIs1xxInformationalOk

`func (o *ApiErrorStatus) GetIs1xxInformationalOk() (*bool, bool)`

GetIs1xxInformationalOk returns a tuple with the Is1xxInformational field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIs1xxInformational

`func (o *ApiErrorStatus) SetIs1xxInformational(v bool)`

SetIs1xxInformational sets Is1xxInformational field to given value.

### HasIs1xxInformational

`func (o *ApiErrorStatus) HasIs1xxInformational() bool`

HasIs1xxInformational returns a boolean if a field has been set.

### GetIs3xxRedirection

`func (o *ApiErrorStatus) GetIs3xxRedirection() bool`

GetIs3xxRedirection returns the Is3xxRedirection field if non-nil, zero value otherwise.

### GetIs3xxRedirectionOk

`func (o *ApiErrorStatus) GetIs3xxRedirectionOk() (*bool, bool)`

GetIs3xxRedirectionOk returns a tuple with the Is3xxRedirection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIs3xxRedirection

`func (o *ApiErrorStatus) SetIs3xxRedirection(v bool)`

SetIs3xxRedirection sets Is3xxRedirection field to given value.

### HasIs3xxRedirection

`func (o *ApiErrorStatus) HasIs3xxRedirection() bool`

HasIs3xxRedirection returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


