# AMReceiverEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**To** | Pointer to **string** |  | [optional] 
**From** | Pointer to **string** |  | [optional] 
**Smarthost** | Pointer to **string** |  | [optional] 
**Hello** | Pointer to **string** |  | [optional] 
**Html** | Pointer to **string** |  | [optional] 
**Text** | Pointer to **string** |  | [optional] 
**Headers** | Pointer to **map[string]string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**AuthUsername** | Pointer to **string** |  | [optional] 
**AuthPassword** | Pointer to **string** |  | [optional] 
**AuthPasswordFile** | Pointer to **string** |  | [optional] 
**AuthSecret** | Pointer to **string** |  | [optional] 
**AuthIdentity** | Pointer to **string** |  | [optional] 
**RequireTls** | Pointer to **bool** |  | [optional] 
**TlsConfig** | Pointer to [**AlertManagerTls**](AlertManagerTls.md) |  | [optional] 

## Methods

### NewAMReceiverEmail

`func NewAMReceiverEmail() *AMReceiverEmail`

NewAMReceiverEmail instantiates a new AMReceiverEmail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverEmailWithDefaults

`func NewAMReceiverEmailWithDefaults() *AMReceiverEmail`

NewAMReceiverEmailWithDefaults instantiates a new AMReceiverEmail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTo

`func (o *AMReceiverEmail) GetTo() string`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *AMReceiverEmail) GetToOk() (*string, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *AMReceiverEmail) SetTo(v string)`

SetTo sets To field to given value.

### HasTo

`func (o *AMReceiverEmail) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetFrom

`func (o *AMReceiverEmail) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *AMReceiverEmail) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *AMReceiverEmail) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *AMReceiverEmail) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetSmarthost

`func (o *AMReceiverEmail) GetSmarthost() string`

GetSmarthost returns the Smarthost field if non-nil, zero value otherwise.

### GetSmarthostOk

`func (o *AMReceiverEmail) GetSmarthostOk() (*string, bool)`

GetSmarthostOk returns a tuple with the Smarthost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmarthost

`func (o *AMReceiverEmail) SetSmarthost(v string)`

SetSmarthost sets Smarthost field to given value.

### HasSmarthost

`func (o *AMReceiverEmail) HasSmarthost() bool`

HasSmarthost returns a boolean if a field has been set.

### GetHello

`func (o *AMReceiverEmail) GetHello() string`

GetHello returns the Hello field if non-nil, zero value otherwise.

### GetHelloOk

`func (o *AMReceiverEmail) GetHelloOk() (*string, bool)`

GetHelloOk returns a tuple with the Hello field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHello

`func (o *AMReceiverEmail) SetHello(v string)`

SetHello sets Hello field to given value.

### HasHello

`func (o *AMReceiverEmail) HasHello() bool`

HasHello returns a boolean if a field has been set.

### GetHtml

`func (o *AMReceiverEmail) GetHtml() string`

GetHtml returns the Html field if non-nil, zero value otherwise.

### GetHtmlOk

`func (o *AMReceiverEmail) GetHtmlOk() (*string, bool)`

GetHtmlOk returns a tuple with the Html field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHtml

`func (o *AMReceiverEmail) SetHtml(v string)`

SetHtml sets Html field to given value.

### HasHtml

`func (o *AMReceiverEmail) HasHtml() bool`

HasHtml returns a boolean if a field has been set.

### GetText

`func (o *AMReceiverEmail) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *AMReceiverEmail) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *AMReceiverEmail) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *AMReceiverEmail) HasText() bool`

HasText returns a boolean if a field has been set.

### GetHeaders

`func (o *AMReceiverEmail) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *AMReceiverEmail) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *AMReceiverEmail) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *AMReceiverEmail) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverEmail) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverEmail) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverEmail) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverEmail) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetAuthUsername

`func (o *AMReceiverEmail) GetAuthUsername() string`

GetAuthUsername returns the AuthUsername field if non-nil, zero value otherwise.

### GetAuthUsernameOk

`func (o *AMReceiverEmail) GetAuthUsernameOk() (*string, bool)`

GetAuthUsernameOk returns a tuple with the AuthUsername field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthUsername

`func (o *AMReceiverEmail) SetAuthUsername(v string)`

SetAuthUsername sets AuthUsername field to given value.

### HasAuthUsername

`func (o *AMReceiverEmail) HasAuthUsername() bool`

HasAuthUsername returns a boolean if a field has been set.

### GetAuthPassword

`func (o *AMReceiverEmail) GetAuthPassword() string`

GetAuthPassword returns the AuthPassword field if non-nil, zero value otherwise.

### GetAuthPasswordOk

`func (o *AMReceiverEmail) GetAuthPasswordOk() (*string, bool)`

GetAuthPasswordOk returns a tuple with the AuthPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthPassword

`func (o *AMReceiverEmail) SetAuthPassword(v string)`

SetAuthPassword sets AuthPassword field to given value.

### HasAuthPassword

`func (o *AMReceiverEmail) HasAuthPassword() bool`

HasAuthPassword returns a boolean if a field has been set.

### GetAuthPasswordFile

`func (o *AMReceiverEmail) GetAuthPasswordFile() string`

GetAuthPasswordFile returns the AuthPasswordFile field if non-nil, zero value otherwise.

### GetAuthPasswordFileOk

`func (o *AMReceiverEmail) GetAuthPasswordFileOk() (*string, bool)`

GetAuthPasswordFileOk returns a tuple with the AuthPasswordFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthPasswordFile

`func (o *AMReceiverEmail) SetAuthPasswordFile(v string)`

SetAuthPasswordFile sets AuthPasswordFile field to given value.

### HasAuthPasswordFile

`func (o *AMReceiverEmail) HasAuthPasswordFile() bool`

HasAuthPasswordFile returns a boolean if a field has been set.

### GetAuthSecret

`func (o *AMReceiverEmail) GetAuthSecret() string`

GetAuthSecret returns the AuthSecret field if non-nil, zero value otherwise.

### GetAuthSecretOk

`func (o *AMReceiverEmail) GetAuthSecretOk() (*string, bool)`

GetAuthSecretOk returns a tuple with the AuthSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthSecret

`func (o *AMReceiverEmail) SetAuthSecret(v string)`

SetAuthSecret sets AuthSecret field to given value.

### HasAuthSecret

`func (o *AMReceiverEmail) HasAuthSecret() bool`

HasAuthSecret returns a boolean if a field has been set.

### GetAuthIdentity

`func (o *AMReceiverEmail) GetAuthIdentity() string`

GetAuthIdentity returns the AuthIdentity field if non-nil, zero value otherwise.

### GetAuthIdentityOk

`func (o *AMReceiverEmail) GetAuthIdentityOk() (*string, bool)`

GetAuthIdentityOk returns a tuple with the AuthIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthIdentity

`func (o *AMReceiverEmail) SetAuthIdentity(v string)`

SetAuthIdentity sets AuthIdentity field to given value.

### HasAuthIdentity

`func (o *AMReceiverEmail) HasAuthIdentity() bool`

HasAuthIdentity returns a boolean if a field has been set.

### GetRequireTls

`func (o *AMReceiverEmail) GetRequireTls() bool`

GetRequireTls returns the RequireTls field if non-nil, zero value otherwise.

### GetRequireTlsOk

`func (o *AMReceiverEmail) GetRequireTlsOk() (*bool, bool)`

GetRequireTlsOk returns a tuple with the RequireTls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireTls

`func (o *AMReceiverEmail) SetRequireTls(v bool)`

SetRequireTls sets RequireTls field to given value.

### HasRequireTls

`func (o *AMReceiverEmail) HasRequireTls() bool`

HasRequireTls returns a boolean if a field has been set.

### GetTlsConfig

`func (o *AMReceiverEmail) GetTlsConfig() AlertManagerTls`

GetTlsConfig returns the TlsConfig field if non-nil, zero value otherwise.

### GetTlsConfigOk

`func (o *AMReceiverEmail) GetTlsConfigOk() (*AlertManagerTls, bool)`

GetTlsConfigOk returns a tuple with the TlsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsConfig

`func (o *AMReceiverEmail) SetTlsConfig(v AlertManagerTls)`

SetTlsConfig sets TlsConfig field to given value.

### HasTlsConfig

`func (o *AMReceiverEmail) HasTlsConfig() bool`

HasTlsConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


