# AMReceiverPushOver

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **string** |  | [optional] 
**Retry** | Pointer to **string** |  | [optional] 
**Expire** | Pointer to **string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**UserKey** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverPushOver

`func NewAMReceiverPushOver() *AMReceiverPushOver`

NewAMReceiverPushOver instantiates a new AMReceiverPushOver object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverPushOverWithDefaults

`func NewAMReceiverPushOverWithDefaults() *AMReceiverPushOver`

NewAMReceiverPushOverWithDefaults instantiates a new AMReceiverPushOver object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *AMReceiverPushOver) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *AMReceiverPushOver) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *AMReceiverPushOver) SetToken(v string)`

SetToken sets Token field to given value.

### HasToken

`func (o *AMReceiverPushOver) HasToken() bool`

HasToken returns a boolean if a field has been set.

### GetTitle

`func (o *AMReceiverPushOver) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *AMReceiverPushOver) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *AMReceiverPushOver) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *AMReceiverPushOver) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetMessage

`func (o *AMReceiverPushOver) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *AMReceiverPushOver) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *AMReceiverPushOver) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *AMReceiverPushOver) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetUrl

`func (o *AMReceiverPushOver) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *AMReceiverPushOver) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *AMReceiverPushOver) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *AMReceiverPushOver) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetPriority

`func (o *AMReceiverPushOver) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *AMReceiverPushOver) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *AMReceiverPushOver) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *AMReceiverPushOver) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetRetry

`func (o *AMReceiverPushOver) GetRetry() string`

GetRetry returns the Retry field if non-nil, zero value otherwise.

### GetRetryOk

`func (o *AMReceiverPushOver) GetRetryOk() (*string, bool)`

GetRetryOk returns a tuple with the Retry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetry

`func (o *AMReceiverPushOver) SetRetry(v string)`

SetRetry sets Retry field to given value.

### HasRetry

`func (o *AMReceiverPushOver) HasRetry() bool`

HasRetry returns a boolean if a field has been set.

### GetExpire

`func (o *AMReceiverPushOver) GetExpire() string`

GetExpire returns the Expire field if non-nil, zero value otherwise.

### GetExpireOk

`func (o *AMReceiverPushOver) GetExpireOk() (*string, bool)`

GetExpireOk returns a tuple with the Expire field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpire

`func (o *AMReceiverPushOver) SetExpire(v string)`

SetExpire sets Expire field to given value.

### HasExpire

`func (o *AMReceiverPushOver) HasExpire() bool`

HasExpire returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverPushOver) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverPushOver) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverPushOver) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverPushOver) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetUserKey

`func (o *AMReceiverPushOver) GetUserKey() string`

GetUserKey returns the UserKey field if non-nil, zero value otherwise.

### GetUserKeyOk

`func (o *AMReceiverPushOver) GetUserKeyOk() (*string, bool)`

GetUserKeyOk returns a tuple with the UserKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserKey

`func (o *AMReceiverPushOver) SetUserKey(v string)`

SetUserKey sets UserKey field to given value.

### HasUserKey

`func (o *AMReceiverPushOver) HasUserKey() bool`

HasUserKey returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverPushOver) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverPushOver) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverPushOver) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverPushOver) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


