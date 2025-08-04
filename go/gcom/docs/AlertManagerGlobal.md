# AlertManagerGlobal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SmtpSmarthost** | Pointer to **string** |  | [optional] 
**SmtpFrom** | Pointer to **string** |  | [optional] 
**SmtpHello** | Pointer to **string** |  | [optional] 
**SmtpAuthUsername** | Pointer to **string** |  | [optional] 
**SmtpAuthPassword** | Pointer to **string** |  | [optional] 
**SmtpAuthPasswordFile** | Pointer to **string** |  | [optional] 
**SmtpAuthIdentity** | Pointer to **string** |  | [optional] 
**SmtpAuthSecret** | Pointer to **string** |  | [optional] 
**SmtpRequireTls** | Pointer to **bool** |  | [optional] 
**SlackApiUrl** | Pointer to **string** |  | [optional] 
**SlackApiUrlFile** | Pointer to **string** |  | [optional] 
**VictoropsApiKey** | Pointer to **string** |  | [optional] 
**VictoropsApiKeyFile** | Pointer to **string** |  | [optional] 
**VictoropsApiUrl** | Pointer to **string** |  | [optional] 
**PagerdutyUrl** | Pointer to **string** |  | [optional] 
**OpsgenieApiKey** | Pointer to **string** |  | [optional] 
**OpsgenieApiKeyFile** | Pointer to **string** |  | [optional] 
**OpsgenieApiUrl** | Pointer to **string** |  | [optional] 
**WechatApiUrl** | Pointer to **string** |  | [optional] 
**WechatApiSecret** | Pointer to **string** |  | [optional] 
**WechatApiCorpId** | Pointer to **string** |  | [optional] 
**TelegramApiUrl** | Pointer to **string** |  | [optional] 
**WebexApiUrl** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 
**ResolveTimeout** | Pointer to **string** |  | [optional] 

## Methods

### NewAlertManagerGlobal

`func NewAlertManagerGlobal() *AlertManagerGlobal`

NewAlertManagerGlobal instantiates a new AlertManagerGlobal object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerGlobalWithDefaults

`func NewAlertManagerGlobalWithDefaults() *AlertManagerGlobal`

NewAlertManagerGlobalWithDefaults instantiates a new AlertManagerGlobal object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSmtpSmarthost

`func (o *AlertManagerGlobal) GetSmtpSmarthost() string`

GetSmtpSmarthost returns the SmtpSmarthost field if non-nil, zero value otherwise.

### GetSmtpSmarthostOk

`func (o *AlertManagerGlobal) GetSmtpSmarthostOk() (*string, bool)`

GetSmtpSmarthostOk returns a tuple with the SmtpSmarthost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpSmarthost

`func (o *AlertManagerGlobal) SetSmtpSmarthost(v string)`

SetSmtpSmarthost sets SmtpSmarthost field to given value.

### HasSmtpSmarthost

`func (o *AlertManagerGlobal) HasSmtpSmarthost() bool`

HasSmtpSmarthost returns a boolean if a field has been set.

### GetSmtpFrom

`func (o *AlertManagerGlobal) GetSmtpFrom() string`

GetSmtpFrom returns the SmtpFrom field if non-nil, zero value otherwise.

### GetSmtpFromOk

`func (o *AlertManagerGlobal) GetSmtpFromOk() (*string, bool)`

GetSmtpFromOk returns a tuple with the SmtpFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpFrom

`func (o *AlertManagerGlobal) SetSmtpFrom(v string)`

SetSmtpFrom sets SmtpFrom field to given value.

### HasSmtpFrom

`func (o *AlertManagerGlobal) HasSmtpFrom() bool`

HasSmtpFrom returns a boolean if a field has been set.

### GetSmtpHello

`func (o *AlertManagerGlobal) GetSmtpHello() string`

GetSmtpHello returns the SmtpHello field if non-nil, zero value otherwise.

### GetSmtpHelloOk

`func (o *AlertManagerGlobal) GetSmtpHelloOk() (*string, bool)`

GetSmtpHelloOk returns a tuple with the SmtpHello field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpHello

`func (o *AlertManagerGlobal) SetSmtpHello(v string)`

SetSmtpHello sets SmtpHello field to given value.

### HasSmtpHello

`func (o *AlertManagerGlobal) HasSmtpHello() bool`

HasSmtpHello returns a boolean if a field has been set.

### GetSmtpAuthUsername

`func (o *AlertManagerGlobal) GetSmtpAuthUsername() string`

GetSmtpAuthUsername returns the SmtpAuthUsername field if non-nil, zero value otherwise.

### GetSmtpAuthUsernameOk

`func (o *AlertManagerGlobal) GetSmtpAuthUsernameOk() (*string, bool)`

GetSmtpAuthUsernameOk returns a tuple with the SmtpAuthUsername field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpAuthUsername

`func (o *AlertManagerGlobal) SetSmtpAuthUsername(v string)`

SetSmtpAuthUsername sets SmtpAuthUsername field to given value.

### HasSmtpAuthUsername

`func (o *AlertManagerGlobal) HasSmtpAuthUsername() bool`

HasSmtpAuthUsername returns a boolean if a field has been set.

### GetSmtpAuthPassword

`func (o *AlertManagerGlobal) GetSmtpAuthPassword() string`

GetSmtpAuthPassword returns the SmtpAuthPassword field if non-nil, zero value otherwise.

### GetSmtpAuthPasswordOk

`func (o *AlertManagerGlobal) GetSmtpAuthPasswordOk() (*string, bool)`

GetSmtpAuthPasswordOk returns a tuple with the SmtpAuthPassword field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpAuthPassword

`func (o *AlertManagerGlobal) SetSmtpAuthPassword(v string)`

SetSmtpAuthPassword sets SmtpAuthPassword field to given value.

### HasSmtpAuthPassword

`func (o *AlertManagerGlobal) HasSmtpAuthPassword() bool`

HasSmtpAuthPassword returns a boolean if a field has been set.

### GetSmtpAuthPasswordFile

`func (o *AlertManagerGlobal) GetSmtpAuthPasswordFile() string`

GetSmtpAuthPasswordFile returns the SmtpAuthPasswordFile field if non-nil, zero value otherwise.

### GetSmtpAuthPasswordFileOk

`func (o *AlertManagerGlobal) GetSmtpAuthPasswordFileOk() (*string, bool)`

GetSmtpAuthPasswordFileOk returns a tuple with the SmtpAuthPasswordFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpAuthPasswordFile

`func (o *AlertManagerGlobal) SetSmtpAuthPasswordFile(v string)`

SetSmtpAuthPasswordFile sets SmtpAuthPasswordFile field to given value.

### HasSmtpAuthPasswordFile

`func (o *AlertManagerGlobal) HasSmtpAuthPasswordFile() bool`

HasSmtpAuthPasswordFile returns a boolean if a field has been set.

### GetSmtpAuthIdentity

`func (o *AlertManagerGlobal) GetSmtpAuthIdentity() string`

GetSmtpAuthIdentity returns the SmtpAuthIdentity field if non-nil, zero value otherwise.

### GetSmtpAuthIdentityOk

`func (o *AlertManagerGlobal) GetSmtpAuthIdentityOk() (*string, bool)`

GetSmtpAuthIdentityOk returns a tuple with the SmtpAuthIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpAuthIdentity

`func (o *AlertManagerGlobal) SetSmtpAuthIdentity(v string)`

SetSmtpAuthIdentity sets SmtpAuthIdentity field to given value.

### HasSmtpAuthIdentity

`func (o *AlertManagerGlobal) HasSmtpAuthIdentity() bool`

HasSmtpAuthIdentity returns a boolean if a field has been set.

### GetSmtpAuthSecret

`func (o *AlertManagerGlobal) GetSmtpAuthSecret() string`

GetSmtpAuthSecret returns the SmtpAuthSecret field if non-nil, zero value otherwise.

### GetSmtpAuthSecretOk

`func (o *AlertManagerGlobal) GetSmtpAuthSecretOk() (*string, bool)`

GetSmtpAuthSecretOk returns a tuple with the SmtpAuthSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpAuthSecret

`func (o *AlertManagerGlobal) SetSmtpAuthSecret(v string)`

SetSmtpAuthSecret sets SmtpAuthSecret field to given value.

### HasSmtpAuthSecret

`func (o *AlertManagerGlobal) HasSmtpAuthSecret() bool`

HasSmtpAuthSecret returns a boolean if a field has been set.

### GetSmtpRequireTls

`func (o *AlertManagerGlobal) GetSmtpRequireTls() bool`

GetSmtpRequireTls returns the SmtpRequireTls field if non-nil, zero value otherwise.

### GetSmtpRequireTlsOk

`func (o *AlertManagerGlobal) GetSmtpRequireTlsOk() (*bool, bool)`

GetSmtpRequireTlsOk returns a tuple with the SmtpRequireTls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmtpRequireTls

`func (o *AlertManagerGlobal) SetSmtpRequireTls(v bool)`

SetSmtpRequireTls sets SmtpRequireTls field to given value.

### HasSmtpRequireTls

`func (o *AlertManagerGlobal) HasSmtpRequireTls() bool`

HasSmtpRequireTls returns a boolean if a field has been set.

### GetSlackApiUrl

`func (o *AlertManagerGlobal) GetSlackApiUrl() string`

GetSlackApiUrl returns the SlackApiUrl field if non-nil, zero value otherwise.

### GetSlackApiUrlOk

`func (o *AlertManagerGlobal) GetSlackApiUrlOk() (*string, bool)`

GetSlackApiUrlOk returns a tuple with the SlackApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackApiUrl

`func (o *AlertManagerGlobal) SetSlackApiUrl(v string)`

SetSlackApiUrl sets SlackApiUrl field to given value.

### HasSlackApiUrl

`func (o *AlertManagerGlobal) HasSlackApiUrl() bool`

HasSlackApiUrl returns a boolean if a field has been set.

### GetSlackApiUrlFile

`func (o *AlertManagerGlobal) GetSlackApiUrlFile() string`

GetSlackApiUrlFile returns the SlackApiUrlFile field if non-nil, zero value otherwise.

### GetSlackApiUrlFileOk

`func (o *AlertManagerGlobal) GetSlackApiUrlFileOk() (*string, bool)`

GetSlackApiUrlFileOk returns a tuple with the SlackApiUrlFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackApiUrlFile

`func (o *AlertManagerGlobal) SetSlackApiUrlFile(v string)`

SetSlackApiUrlFile sets SlackApiUrlFile field to given value.

### HasSlackApiUrlFile

`func (o *AlertManagerGlobal) HasSlackApiUrlFile() bool`

HasSlackApiUrlFile returns a boolean if a field has been set.

### GetVictoropsApiKey

`func (o *AlertManagerGlobal) GetVictoropsApiKey() string`

GetVictoropsApiKey returns the VictoropsApiKey field if non-nil, zero value otherwise.

### GetVictoropsApiKeyOk

`func (o *AlertManagerGlobal) GetVictoropsApiKeyOk() (*string, bool)`

GetVictoropsApiKeyOk returns a tuple with the VictoropsApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictoropsApiKey

`func (o *AlertManagerGlobal) SetVictoropsApiKey(v string)`

SetVictoropsApiKey sets VictoropsApiKey field to given value.

### HasVictoropsApiKey

`func (o *AlertManagerGlobal) HasVictoropsApiKey() bool`

HasVictoropsApiKey returns a boolean if a field has been set.

### GetVictoropsApiKeyFile

`func (o *AlertManagerGlobal) GetVictoropsApiKeyFile() string`

GetVictoropsApiKeyFile returns the VictoropsApiKeyFile field if non-nil, zero value otherwise.

### GetVictoropsApiKeyFileOk

`func (o *AlertManagerGlobal) GetVictoropsApiKeyFileOk() (*string, bool)`

GetVictoropsApiKeyFileOk returns a tuple with the VictoropsApiKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictoropsApiKeyFile

`func (o *AlertManagerGlobal) SetVictoropsApiKeyFile(v string)`

SetVictoropsApiKeyFile sets VictoropsApiKeyFile field to given value.

### HasVictoropsApiKeyFile

`func (o *AlertManagerGlobal) HasVictoropsApiKeyFile() bool`

HasVictoropsApiKeyFile returns a boolean if a field has been set.

### GetVictoropsApiUrl

`func (o *AlertManagerGlobal) GetVictoropsApiUrl() string`

GetVictoropsApiUrl returns the VictoropsApiUrl field if non-nil, zero value otherwise.

### GetVictoropsApiUrlOk

`func (o *AlertManagerGlobal) GetVictoropsApiUrlOk() (*string, bool)`

GetVictoropsApiUrlOk returns a tuple with the VictoropsApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictoropsApiUrl

`func (o *AlertManagerGlobal) SetVictoropsApiUrl(v string)`

SetVictoropsApiUrl sets VictoropsApiUrl field to given value.

### HasVictoropsApiUrl

`func (o *AlertManagerGlobal) HasVictoropsApiUrl() bool`

HasVictoropsApiUrl returns a boolean if a field has been set.

### GetPagerdutyUrl

`func (o *AlertManagerGlobal) GetPagerdutyUrl() string`

GetPagerdutyUrl returns the PagerdutyUrl field if non-nil, zero value otherwise.

### GetPagerdutyUrlOk

`func (o *AlertManagerGlobal) GetPagerdutyUrlOk() (*string, bool)`

GetPagerdutyUrlOk returns a tuple with the PagerdutyUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagerdutyUrl

`func (o *AlertManagerGlobal) SetPagerdutyUrl(v string)`

SetPagerdutyUrl sets PagerdutyUrl field to given value.

### HasPagerdutyUrl

`func (o *AlertManagerGlobal) HasPagerdutyUrl() bool`

HasPagerdutyUrl returns a boolean if a field has been set.

### GetOpsgenieApiKey

`func (o *AlertManagerGlobal) GetOpsgenieApiKey() string`

GetOpsgenieApiKey returns the OpsgenieApiKey field if non-nil, zero value otherwise.

### GetOpsgenieApiKeyOk

`func (o *AlertManagerGlobal) GetOpsgenieApiKeyOk() (*string, bool)`

GetOpsgenieApiKeyOk returns a tuple with the OpsgenieApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpsgenieApiKey

`func (o *AlertManagerGlobal) SetOpsgenieApiKey(v string)`

SetOpsgenieApiKey sets OpsgenieApiKey field to given value.

### HasOpsgenieApiKey

`func (o *AlertManagerGlobal) HasOpsgenieApiKey() bool`

HasOpsgenieApiKey returns a boolean if a field has been set.

### GetOpsgenieApiKeyFile

`func (o *AlertManagerGlobal) GetOpsgenieApiKeyFile() string`

GetOpsgenieApiKeyFile returns the OpsgenieApiKeyFile field if non-nil, zero value otherwise.

### GetOpsgenieApiKeyFileOk

`func (o *AlertManagerGlobal) GetOpsgenieApiKeyFileOk() (*string, bool)`

GetOpsgenieApiKeyFileOk returns a tuple with the OpsgenieApiKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpsgenieApiKeyFile

`func (o *AlertManagerGlobal) SetOpsgenieApiKeyFile(v string)`

SetOpsgenieApiKeyFile sets OpsgenieApiKeyFile field to given value.

### HasOpsgenieApiKeyFile

`func (o *AlertManagerGlobal) HasOpsgenieApiKeyFile() bool`

HasOpsgenieApiKeyFile returns a boolean if a field has been set.

### GetOpsgenieApiUrl

`func (o *AlertManagerGlobal) GetOpsgenieApiUrl() string`

GetOpsgenieApiUrl returns the OpsgenieApiUrl field if non-nil, zero value otherwise.

### GetOpsgenieApiUrlOk

`func (o *AlertManagerGlobal) GetOpsgenieApiUrlOk() (*string, bool)`

GetOpsgenieApiUrlOk returns a tuple with the OpsgenieApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpsgenieApiUrl

`func (o *AlertManagerGlobal) SetOpsgenieApiUrl(v string)`

SetOpsgenieApiUrl sets OpsgenieApiUrl field to given value.

### HasOpsgenieApiUrl

`func (o *AlertManagerGlobal) HasOpsgenieApiUrl() bool`

HasOpsgenieApiUrl returns a boolean if a field has been set.

### GetWechatApiUrl

`func (o *AlertManagerGlobal) GetWechatApiUrl() string`

GetWechatApiUrl returns the WechatApiUrl field if non-nil, zero value otherwise.

### GetWechatApiUrlOk

`func (o *AlertManagerGlobal) GetWechatApiUrlOk() (*string, bool)`

GetWechatApiUrlOk returns a tuple with the WechatApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWechatApiUrl

`func (o *AlertManagerGlobal) SetWechatApiUrl(v string)`

SetWechatApiUrl sets WechatApiUrl field to given value.

### HasWechatApiUrl

`func (o *AlertManagerGlobal) HasWechatApiUrl() bool`

HasWechatApiUrl returns a boolean if a field has been set.

### GetWechatApiSecret

`func (o *AlertManagerGlobal) GetWechatApiSecret() string`

GetWechatApiSecret returns the WechatApiSecret field if non-nil, zero value otherwise.

### GetWechatApiSecretOk

`func (o *AlertManagerGlobal) GetWechatApiSecretOk() (*string, bool)`

GetWechatApiSecretOk returns a tuple with the WechatApiSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWechatApiSecret

`func (o *AlertManagerGlobal) SetWechatApiSecret(v string)`

SetWechatApiSecret sets WechatApiSecret field to given value.

### HasWechatApiSecret

`func (o *AlertManagerGlobal) HasWechatApiSecret() bool`

HasWechatApiSecret returns a boolean if a field has been set.

### GetWechatApiCorpId

`func (o *AlertManagerGlobal) GetWechatApiCorpId() string`

GetWechatApiCorpId returns the WechatApiCorpId field if non-nil, zero value otherwise.

### GetWechatApiCorpIdOk

`func (o *AlertManagerGlobal) GetWechatApiCorpIdOk() (*string, bool)`

GetWechatApiCorpIdOk returns a tuple with the WechatApiCorpId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWechatApiCorpId

`func (o *AlertManagerGlobal) SetWechatApiCorpId(v string)`

SetWechatApiCorpId sets WechatApiCorpId field to given value.

### HasWechatApiCorpId

`func (o *AlertManagerGlobal) HasWechatApiCorpId() bool`

HasWechatApiCorpId returns a boolean if a field has been set.

### GetTelegramApiUrl

`func (o *AlertManagerGlobal) GetTelegramApiUrl() string`

GetTelegramApiUrl returns the TelegramApiUrl field if non-nil, zero value otherwise.

### GetTelegramApiUrlOk

`func (o *AlertManagerGlobal) GetTelegramApiUrlOk() (*string, bool)`

GetTelegramApiUrlOk returns a tuple with the TelegramApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelegramApiUrl

`func (o *AlertManagerGlobal) SetTelegramApiUrl(v string)`

SetTelegramApiUrl sets TelegramApiUrl field to given value.

### HasTelegramApiUrl

`func (o *AlertManagerGlobal) HasTelegramApiUrl() bool`

HasTelegramApiUrl returns a boolean if a field has been set.

### GetWebexApiUrl

`func (o *AlertManagerGlobal) GetWebexApiUrl() string`

GetWebexApiUrl returns the WebexApiUrl field if non-nil, zero value otherwise.

### GetWebexApiUrlOk

`func (o *AlertManagerGlobal) GetWebexApiUrlOk() (*string, bool)`

GetWebexApiUrlOk returns a tuple with the WebexApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebexApiUrl

`func (o *AlertManagerGlobal) SetWebexApiUrl(v string)`

SetWebexApiUrl sets WebexApiUrl field to given value.

### HasWebexApiUrl

`func (o *AlertManagerGlobal) HasWebexApiUrl() bool`

HasWebexApiUrl returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AlertManagerGlobal) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AlertManagerGlobal) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AlertManagerGlobal) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AlertManagerGlobal) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetResolveTimeout

`func (o *AlertManagerGlobal) GetResolveTimeout() string`

GetResolveTimeout returns the ResolveTimeout field if non-nil, zero value otherwise.

### GetResolveTimeoutOk

`func (o *AlertManagerGlobal) GetResolveTimeoutOk() (*string, bool)`

GetResolveTimeoutOk returns a tuple with the ResolveTimeout field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveTimeout

`func (o *AlertManagerGlobal) SetResolveTimeout(v string)`

SetResolveTimeout sets ResolveTimeout field to given value.

### HasResolveTimeout

`func (o *AlertManagerGlobal) HasResolveTimeout() bool`

HasResolveTimeout returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


