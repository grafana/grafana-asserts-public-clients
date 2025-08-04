# AMReceiverWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to **string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**MaxAlerts** | Pointer to **int32** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverWebhook

`func NewAMReceiverWebhook() *AMReceiverWebhook`

NewAMReceiverWebhook instantiates a new AMReceiverWebhook object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverWebhookWithDefaults

`func NewAMReceiverWebhookWithDefaults() *AMReceiverWebhook`

NewAMReceiverWebhookWithDefaults instantiates a new AMReceiverWebhook object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *AMReceiverWebhook) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *AMReceiverWebhook) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *AMReceiverWebhook) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *AMReceiverWebhook) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverWebhook) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverWebhook) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverWebhook) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverWebhook) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetMaxAlerts

`func (o *AMReceiverWebhook) GetMaxAlerts() int32`

GetMaxAlerts returns the MaxAlerts field if non-nil, zero value otherwise.

### GetMaxAlertsOk

`func (o *AMReceiverWebhook) GetMaxAlertsOk() (*int32, bool)`

GetMaxAlertsOk returns a tuple with the MaxAlerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxAlerts

`func (o *AMReceiverWebhook) SetMaxAlerts(v int32)`

SetMaxAlerts sets MaxAlerts field to given value.

### HasMaxAlerts

`func (o *AMReceiverWebhook) HasMaxAlerts() bool`

HasMaxAlerts returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverWebhook) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverWebhook) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverWebhook) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverWebhook) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


