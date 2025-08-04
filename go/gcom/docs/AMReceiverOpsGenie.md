# AMReceiverOpsGenie

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Source** | Pointer to **string** |  | [optional] 
**Details** | Pointer to **map[string]string** |  | [optional] 
**Responders** | Pointer to [**[]AlertManagerResponder**](AlertManagerResponder.md) |  | [optional] 
**Tags** | Pointer to **string** |  | [optional] 
**Note** | Pointer to **string** |  | [optional] 
**Priority** | Pointer to **string** |  | [optional] 
**Entity** | Pointer to **string** |  | [optional] 
**Actions** | Pointer to **string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**ApiKey** | Pointer to **string** |  | [optional] 
**ApiKeyFile** | Pointer to **string** |  | [optional] 
**ApiUrl** | Pointer to **string** |  | [optional] 
**UpdateAlerts** | Pointer to **bool** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverOpsGenie

`func NewAMReceiverOpsGenie() *AMReceiverOpsGenie`

NewAMReceiverOpsGenie instantiates a new AMReceiverOpsGenie object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverOpsGenieWithDefaults

`func NewAMReceiverOpsGenieWithDefaults() *AMReceiverOpsGenie`

NewAMReceiverOpsGenieWithDefaults instantiates a new AMReceiverOpsGenie object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *AMReceiverOpsGenie) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *AMReceiverOpsGenie) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *AMReceiverOpsGenie) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *AMReceiverOpsGenie) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDescription

`func (o *AMReceiverOpsGenie) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AMReceiverOpsGenie) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AMReceiverOpsGenie) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AMReceiverOpsGenie) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSource

`func (o *AMReceiverOpsGenie) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AMReceiverOpsGenie) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AMReceiverOpsGenie) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *AMReceiverOpsGenie) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDetails

`func (o *AMReceiverOpsGenie) GetDetails() map[string]string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *AMReceiverOpsGenie) GetDetailsOk() (*map[string]string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *AMReceiverOpsGenie) SetDetails(v map[string]string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *AMReceiverOpsGenie) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetResponders

`func (o *AMReceiverOpsGenie) GetResponders() []AlertManagerResponder`

GetResponders returns the Responders field if non-nil, zero value otherwise.

### GetRespondersOk

`func (o *AMReceiverOpsGenie) GetRespondersOk() (*[]AlertManagerResponder, bool)`

GetRespondersOk returns a tuple with the Responders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponders

`func (o *AMReceiverOpsGenie) SetResponders(v []AlertManagerResponder)`

SetResponders sets Responders field to given value.

### HasResponders

`func (o *AMReceiverOpsGenie) HasResponders() bool`

HasResponders returns a boolean if a field has been set.

### GetTags

`func (o *AMReceiverOpsGenie) GetTags() string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *AMReceiverOpsGenie) GetTagsOk() (*string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *AMReceiverOpsGenie) SetTags(v string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *AMReceiverOpsGenie) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetNote

`func (o *AMReceiverOpsGenie) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *AMReceiverOpsGenie) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *AMReceiverOpsGenie) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *AMReceiverOpsGenie) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetPriority

`func (o *AMReceiverOpsGenie) GetPriority() string`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *AMReceiverOpsGenie) GetPriorityOk() (*string, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *AMReceiverOpsGenie) SetPriority(v string)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *AMReceiverOpsGenie) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetEntity

`func (o *AMReceiverOpsGenie) GetEntity() string`

GetEntity returns the Entity field if non-nil, zero value otherwise.

### GetEntityOk

`func (o *AMReceiverOpsGenie) GetEntityOk() (*string, bool)`

GetEntityOk returns a tuple with the Entity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntity

`func (o *AMReceiverOpsGenie) SetEntity(v string)`

SetEntity sets Entity field to given value.

### HasEntity

`func (o *AMReceiverOpsGenie) HasEntity() bool`

HasEntity returns a boolean if a field has been set.

### GetActions

`func (o *AMReceiverOpsGenie) GetActions() string`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *AMReceiverOpsGenie) GetActionsOk() (*string, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *AMReceiverOpsGenie) SetActions(v string)`

SetActions sets Actions field to given value.

### HasActions

`func (o *AMReceiverOpsGenie) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverOpsGenie) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverOpsGenie) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverOpsGenie) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverOpsGenie) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetApiKey

`func (o *AMReceiverOpsGenie) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *AMReceiverOpsGenie) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *AMReceiverOpsGenie) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *AMReceiverOpsGenie) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetApiKeyFile

`func (o *AMReceiverOpsGenie) GetApiKeyFile() string`

GetApiKeyFile returns the ApiKeyFile field if non-nil, zero value otherwise.

### GetApiKeyFileOk

`func (o *AMReceiverOpsGenie) GetApiKeyFileOk() (*string, bool)`

GetApiKeyFileOk returns a tuple with the ApiKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKeyFile

`func (o *AMReceiverOpsGenie) SetApiKeyFile(v string)`

SetApiKeyFile sets ApiKeyFile field to given value.

### HasApiKeyFile

`func (o *AMReceiverOpsGenie) HasApiKeyFile() bool`

HasApiKeyFile returns a boolean if a field has been set.

### GetApiUrl

`func (o *AMReceiverOpsGenie) GetApiUrl() string`

GetApiUrl returns the ApiUrl field if non-nil, zero value otherwise.

### GetApiUrlOk

`func (o *AMReceiverOpsGenie) GetApiUrlOk() (*string, bool)`

GetApiUrlOk returns a tuple with the ApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrl

`func (o *AMReceiverOpsGenie) SetApiUrl(v string)`

SetApiUrl sets ApiUrl field to given value.

### HasApiUrl

`func (o *AMReceiverOpsGenie) HasApiUrl() bool`

HasApiUrl returns a boolean if a field has been set.

### GetUpdateAlerts

`func (o *AMReceiverOpsGenie) GetUpdateAlerts() bool`

GetUpdateAlerts returns the UpdateAlerts field if non-nil, zero value otherwise.

### GetUpdateAlertsOk

`func (o *AMReceiverOpsGenie) GetUpdateAlertsOk() (*bool, bool)`

GetUpdateAlertsOk returns a tuple with the UpdateAlerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateAlerts

`func (o *AMReceiverOpsGenie) SetUpdateAlerts(v bool)`

SetUpdateAlerts sets UpdateAlerts field to given value.

### HasUpdateAlerts

`func (o *AMReceiverOpsGenie) HasUpdateAlerts() bool`

HasUpdateAlerts returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverOpsGenie) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverOpsGenie) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverOpsGenie) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverOpsGenie) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


