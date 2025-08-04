# AlertManagerReceiver

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**EmailConfigs** | Pointer to [**[]AMReceiverEmail**](AMReceiverEmail.md) |  | [optional] 
**OpsgenieConfigs** | Pointer to [**[]AMReceiverOpsGenie**](AMReceiverOpsGenie.md) |  | [optional] 
**PagerdutyConfigs** | Pointer to [**[]AMReceiverPagerDuty**](AMReceiverPagerDuty.md) |  | [optional] 
**PushoverConfigs** | Pointer to [**[]AMReceiverPushOver**](AMReceiverPushOver.md) |  | [optional] 
**SlackConfigs** | Pointer to [**[]AMReceiverSlack**](AMReceiverSlack.md) |  | [optional] 
**SnsConfigs** | Pointer to [**[]AMReceiverSNS**](AMReceiverSNS.md) |  | [optional] 
**VictoropsConfigs** | Pointer to [**[]AMReceiverVictorOps**](AMReceiverVictorOps.md) |  | [optional] 
**WebhookConfigs** | Pointer to [**[]AMReceiverWebhook**](AMReceiverWebhook.md) |  | [optional] 
**WechatConfigs** | Pointer to [**[]AMReceiverWebhook**](AMReceiverWebhook.md) |  | [optional] 
**TelegramConfigs** | Pointer to [**[]AMReceiverWebhook**](AMReceiverWebhook.md) |  | [optional] 
**WebexConfigs** | Pointer to [**[]AMReceiverWebhook**](AMReceiverWebhook.md) |  | [optional] 

## Methods

### NewAlertManagerReceiver

`func NewAlertManagerReceiver() *AlertManagerReceiver`

NewAlertManagerReceiver instantiates a new AlertManagerReceiver object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerReceiverWithDefaults

`func NewAlertManagerReceiverWithDefaults() *AlertManagerReceiver`

NewAlertManagerReceiverWithDefaults instantiates a new AlertManagerReceiver object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AlertManagerReceiver) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AlertManagerReceiver) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AlertManagerReceiver) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AlertManagerReceiver) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmailConfigs

`func (o *AlertManagerReceiver) GetEmailConfigs() []AMReceiverEmail`

GetEmailConfigs returns the EmailConfigs field if non-nil, zero value otherwise.

### GetEmailConfigsOk

`func (o *AlertManagerReceiver) GetEmailConfigsOk() (*[]AMReceiverEmail, bool)`

GetEmailConfigsOk returns a tuple with the EmailConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailConfigs

`func (o *AlertManagerReceiver) SetEmailConfigs(v []AMReceiverEmail)`

SetEmailConfigs sets EmailConfigs field to given value.

### HasEmailConfigs

`func (o *AlertManagerReceiver) HasEmailConfigs() bool`

HasEmailConfigs returns a boolean if a field has been set.

### GetOpsgenieConfigs

`func (o *AlertManagerReceiver) GetOpsgenieConfigs() []AMReceiverOpsGenie`

GetOpsgenieConfigs returns the OpsgenieConfigs field if non-nil, zero value otherwise.

### GetOpsgenieConfigsOk

`func (o *AlertManagerReceiver) GetOpsgenieConfigsOk() (*[]AMReceiverOpsGenie, bool)`

GetOpsgenieConfigsOk returns a tuple with the OpsgenieConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOpsgenieConfigs

`func (o *AlertManagerReceiver) SetOpsgenieConfigs(v []AMReceiverOpsGenie)`

SetOpsgenieConfigs sets OpsgenieConfigs field to given value.

### HasOpsgenieConfigs

`func (o *AlertManagerReceiver) HasOpsgenieConfigs() bool`

HasOpsgenieConfigs returns a boolean if a field has been set.

### GetPagerdutyConfigs

`func (o *AlertManagerReceiver) GetPagerdutyConfigs() []AMReceiverPagerDuty`

GetPagerdutyConfigs returns the PagerdutyConfigs field if non-nil, zero value otherwise.

### GetPagerdutyConfigsOk

`func (o *AlertManagerReceiver) GetPagerdutyConfigsOk() (*[]AMReceiverPagerDuty, bool)`

GetPagerdutyConfigsOk returns a tuple with the PagerdutyConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagerdutyConfigs

`func (o *AlertManagerReceiver) SetPagerdutyConfigs(v []AMReceiverPagerDuty)`

SetPagerdutyConfigs sets PagerdutyConfigs field to given value.

### HasPagerdutyConfigs

`func (o *AlertManagerReceiver) HasPagerdutyConfigs() bool`

HasPagerdutyConfigs returns a boolean if a field has been set.

### GetPushoverConfigs

`func (o *AlertManagerReceiver) GetPushoverConfigs() []AMReceiverPushOver`

GetPushoverConfigs returns the PushoverConfigs field if non-nil, zero value otherwise.

### GetPushoverConfigsOk

`func (o *AlertManagerReceiver) GetPushoverConfigsOk() (*[]AMReceiverPushOver, bool)`

GetPushoverConfigsOk returns a tuple with the PushoverConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPushoverConfigs

`func (o *AlertManagerReceiver) SetPushoverConfigs(v []AMReceiverPushOver)`

SetPushoverConfigs sets PushoverConfigs field to given value.

### HasPushoverConfigs

`func (o *AlertManagerReceiver) HasPushoverConfigs() bool`

HasPushoverConfigs returns a boolean if a field has been set.

### GetSlackConfigs

`func (o *AlertManagerReceiver) GetSlackConfigs() []AMReceiverSlack`

GetSlackConfigs returns the SlackConfigs field if non-nil, zero value otherwise.

### GetSlackConfigsOk

`func (o *AlertManagerReceiver) GetSlackConfigsOk() (*[]AMReceiverSlack, bool)`

GetSlackConfigsOk returns a tuple with the SlackConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlackConfigs

`func (o *AlertManagerReceiver) SetSlackConfigs(v []AMReceiverSlack)`

SetSlackConfigs sets SlackConfigs field to given value.

### HasSlackConfigs

`func (o *AlertManagerReceiver) HasSlackConfigs() bool`

HasSlackConfigs returns a boolean if a field has been set.

### GetSnsConfigs

`func (o *AlertManagerReceiver) GetSnsConfigs() []AMReceiverSNS`

GetSnsConfigs returns the SnsConfigs field if non-nil, zero value otherwise.

### GetSnsConfigsOk

`func (o *AlertManagerReceiver) GetSnsConfigsOk() (*[]AMReceiverSNS, bool)`

GetSnsConfigsOk returns a tuple with the SnsConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnsConfigs

`func (o *AlertManagerReceiver) SetSnsConfigs(v []AMReceiverSNS)`

SetSnsConfigs sets SnsConfigs field to given value.

### HasSnsConfigs

`func (o *AlertManagerReceiver) HasSnsConfigs() bool`

HasSnsConfigs returns a boolean if a field has been set.

### GetVictoropsConfigs

`func (o *AlertManagerReceiver) GetVictoropsConfigs() []AMReceiverVictorOps`

GetVictoropsConfigs returns the VictoropsConfigs field if non-nil, zero value otherwise.

### GetVictoropsConfigsOk

`func (o *AlertManagerReceiver) GetVictoropsConfigsOk() (*[]AMReceiverVictorOps, bool)`

GetVictoropsConfigsOk returns a tuple with the VictoropsConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVictoropsConfigs

`func (o *AlertManagerReceiver) SetVictoropsConfigs(v []AMReceiverVictorOps)`

SetVictoropsConfigs sets VictoropsConfigs field to given value.

### HasVictoropsConfigs

`func (o *AlertManagerReceiver) HasVictoropsConfigs() bool`

HasVictoropsConfigs returns a boolean if a field has been set.

### GetWebhookConfigs

`func (o *AlertManagerReceiver) GetWebhookConfigs() []AMReceiverWebhook`

GetWebhookConfigs returns the WebhookConfigs field if non-nil, zero value otherwise.

### GetWebhookConfigsOk

`func (o *AlertManagerReceiver) GetWebhookConfigsOk() (*[]AMReceiverWebhook, bool)`

GetWebhookConfigsOk returns a tuple with the WebhookConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebhookConfigs

`func (o *AlertManagerReceiver) SetWebhookConfigs(v []AMReceiverWebhook)`

SetWebhookConfigs sets WebhookConfigs field to given value.

### HasWebhookConfigs

`func (o *AlertManagerReceiver) HasWebhookConfigs() bool`

HasWebhookConfigs returns a boolean if a field has been set.

### GetWechatConfigs

`func (o *AlertManagerReceiver) GetWechatConfigs() []AMReceiverWebhook`

GetWechatConfigs returns the WechatConfigs field if non-nil, zero value otherwise.

### GetWechatConfigsOk

`func (o *AlertManagerReceiver) GetWechatConfigsOk() (*[]AMReceiverWebhook, bool)`

GetWechatConfigsOk returns a tuple with the WechatConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWechatConfigs

`func (o *AlertManagerReceiver) SetWechatConfigs(v []AMReceiverWebhook)`

SetWechatConfigs sets WechatConfigs field to given value.

### HasWechatConfigs

`func (o *AlertManagerReceiver) HasWechatConfigs() bool`

HasWechatConfigs returns a boolean if a field has been set.

### GetTelegramConfigs

`func (o *AlertManagerReceiver) GetTelegramConfigs() []AMReceiverWebhook`

GetTelegramConfigs returns the TelegramConfigs field if non-nil, zero value otherwise.

### GetTelegramConfigsOk

`func (o *AlertManagerReceiver) GetTelegramConfigsOk() (*[]AMReceiverWebhook, bool)`

GetTelegramConfigsOk returns a tuple with the TelegramConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelegramConfigs

`func (o *AlertManagerReceiver) SetTelegramConfigs(v []AMReceiverWebhook)`

SetTelegramConfigs sets TelegramConfigs field to given value.

### HasTelegramConfigs

`func (o *AlertManagerReceiver) HasTelegramConfigs() bool`

HasTelegramConfigs returns a boolean if a field has been set.

### GetWebexConfigs

`func (o *AlertManagerReceiver) GetWebexConfigs() []AMReceiverWebhook`

GetWebexConfigs returns the WebexConfigs field if non-nil, zero value otherwise.

### GetWebexConfigsOk

`func (o *AlertManagerReceiver) GetWebexConfigsOk() (*[]AMReceiverWebhook, bool)`

GetWebexConfigsOk returns a tuple with the WebexConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebexConfigs

`func (o *AlertManagerReceiver) SetWebexConfigs(v []AMReceiverWebhook)`

SetWebexConfigs sets WebexConfigs field to given value.

### HasWebexConfigs

`func (o *AlertManagerReceiver) HasWebexConfigs() bool`

HasWebexConfigs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


