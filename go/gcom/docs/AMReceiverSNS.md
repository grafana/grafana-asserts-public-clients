# AMReceiverSNS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sigv4** | Pointer to [**AMReceiverSNSSigV4**](AMReceiverSNSSigV4.md) |  | [optional] 
**Subject** | Pointer to **string** |  | [optional] 
**Message** | Pointer to **string** |  | [optional] 
**Attributes** | Pointer to **map[string]string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**ApiUrl** | Pointer to **string** |  | [optional] 
**TopicArn** | Pointer to **string** |  | [optional] 
**PhoneNumber** | Pointer to **string** |  | [optional] 
**TargetArn** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverSNS

`func NewAMReceiverSNS() *AMReceiverSNS`

NewAMReceiverSNS instantiates a new AMReceiverSNS object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverSNSWithDefaults

`func NewAMReceiverSNSWithDefaults() *AMReceiverSNS`

NewAMReceiverSNSWithDefaults instantiates a new AMReceiverSNS object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSigv4

`func (o *AMReceiverSNS) GetSigv4() AMReceiverSNSSigV4`

GetSigv4 returns the Sigv4 field if non-nil, zero value otherwise.

### GetSigv4Ok

`func (o *AMReceiverSNS) GetSigv4Ok() (*AMReceiverSNSSigV4, bool)`

GetSigv4Ok returns a tuple with the Sigv4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigv4

`func (o *AMReceiverSNS) SetSigv4(v AMReceiverSNSSigV4)`

SetSigv4 sets Sigv4 field to given value.

### HasSigv4

`func (o *AMReceiverSNS) HasSigv4() bool`

HasSigv4 returns a boolean if a field has been set.

### GetSubject

`func (o *AMReceiverSNS) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *AMReceiverSNS) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *AMReceiverSNS) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *AMReceiverSNS) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetMessage

`func (o *AMReceiverSNS) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *AMReceiverSNS) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *AMReceiverSNS) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *AMReceiverSNS) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetAttributes

`func (o *AMReceiverSNS) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AMReceiverSNS) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AMReceiverSNS) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AMReceiverSNS) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverSNS) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverSNS) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverSNS) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverSNS) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetApiUrl

`func (o *AMReceiverSNS) GetApiUrl() string`

GetApiUrl returns the ApiUrl field if non-nil, zero value otherwise.

### GetApiUrlOk

`func (o *AMReceiverSNS) GetApiUrlOk() (*string, bool)`

GetApiUrlOk returns a tuple with the ApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrl

`func (o *AMReceiverSNS) SetApiUrl(v string)`

SetApiUrl sets ApiUrl field to given value.

### HasApiUrl

`func (o *AMReceiverSNS) HasApiUrl() bool`

HasApiUrl returns a boolean if a field has been set.

### GetTopicArn

`func (o *AMReceiverSNS) GetTopicArn() string`

GetTopicArn returns the TopicArn field if non-nil, zero value otherwise.

### GetTopicArnOk

`func (o *AMReceiverSNS) GetTopicArnOk() (*string, bool)`

GetTopicArnOk returns a tuple with the TopicArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTopicArn

`func (o *AMReceiverSNS) SetTopicArn(v string)`

SetTopicArn sets TopicArn field to given value.

### HasTopicArn

`func (o *AMReceiverSNS) HasTopicArn() bool`

HasTopicArn returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *AMReceiverSNS) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *AMReceiverSNS) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *AMReceiverSNS) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *AMReceiverSNS) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetTargetArn

`func (o *AMReceiverSNS) GetTargetArn() string`

GetTargetArn returns the TargetArn field if non-nil, zero value otherwise.

### GetTargetArnOk

`func (o *AMReceiverSNS) GetTargetArnOk() (*string, bool)`

GetTargetArnOk returns a tuple with the TargetArn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetArn

`func (o *AMReceiverSNS) SetTargetArn(v string)`

SetTargetArn sets TargetArn field to given value.

### HasTargetArn

`func (o *AMReceiverSNS) HasTargetArn() bool`

HasTargetArn returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverSNS) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverSNS) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverSNS) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverSNS) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


