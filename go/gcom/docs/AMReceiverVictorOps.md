# AMReceiverVictorOps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SendResolved** | Pointer to **bool** |  | [optional] 
**ApiKey** | Pointer to **string** |  | [optional] 
**ApiKeyFile** | Pointer to **string** |  | [optional] 
**ApiUrl** | Pointer to **string** |  | [optional] 
**RoutingKey** | Pointer to **string** |  | [optional] 
**MessageType** | Pointer to **string** |  | [optional] 
**EntityDisplayName** | Pointer to **string** |  | [optional] 
**StateMessage** | Pointer to **string** |  | [optional] 
**MonitoringTool** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverVictorOps

`func NewAMReceiverVictorOps() *AMReceiverVictorOps`

NewAMReceiverVictorOps instantiates a new AMReceiverVictorOps object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverVictorOpsWithDefaults

`func NewAMReceiverVictorOpsWithDefaults() *AMReceiverVictorOps`

NewAMReceiverVictorOpsWithDefaults instantiates a new AMReceiverVictorOps object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSendResolved

`func (o *AMReceiverVictorOps) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverVictorOps) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverVictorOps) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverVictorOps) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetApiKey

`func (o *AMReceiverVictorOps) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *AMReceiverVictorOps) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *AMReceiverVictorOps) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.

### HasApiKey

`func (o *AMReceiverVictorOps) HasApiKey() bool`

HasApiKey returns a boolean if a field has been set.

### GetApiKeyFile

`func (o *AMReceiverVictorOps) GetApiKeyFile() string`

GetApiKeyFile returns the ApiKeyFile field if non-nil, zero value otherwise.

### GetApiKeyFileOk

`func (o *AMReceiverVictorOps) GetApiKeyFileOk() (*string, bool)`

GetApiKeyFileOk returns a tuple with the ApiKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKeyFile

`func (o *AMReceiverVictorOps) SetApiKeyFile(v string)`

SetApiKeyFile sets ApiKeyFile field to given value.

### HasApiKeyFile

`func (o *AMReceiverVictorOps) HasApiKeyFile() bool`

HasApiKeyFile returns a boolean if a field has been set.

### GetApiUrl

`func (o *AMReceiverVictorOps) GetApiUrl() string`

GetApiUrl returns the ApiUrl field if non-nil, zero value otherwise.

### GetApiUrlOk

`func (o *AMReceiverVictorOps) GetApiUrlOk() (*string, bool)`

GetApiUrlOk returns a tuple with the ApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrl

`func (o *AMReceiverVictorOps) SetApiUrl(v string)`

SetApiUrl sets ApiUrl field to given value.

### HasApiUrl

`func (o *AMReceiverVictorOps) HasApiUrl() bool`

HasApiUrl returns a boolean if a field has been set.

### GetRoutingKey

`func (o *AMReceiverVictorOps) GetRoutingKey() string`

GetRoutingKey returns the RoutingKey field if non-nil, zero value otherwise.

### GetRoutingKeyOk

`func (o *AMReceiverVictorOps) GetRoutingKeyOk() (*string, bool)`

GetRoutingKeyOk returns a tuple with the RoutingKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingKey

`func (o *AMReceiverVictorOps) SetRoutingKey(v string)`

SetRoutingKey sets RoutingKey field to given value.

### HasRoutingKey

`func (o *AMReceiverVictorOps) HasRoutingKey() bool`

HasRoutingKey returns a boolean if a field has been set.

### GetMessageType

`func (o *AMReceiverVictorOps) GetMessageType() string`

GetMessageType returns the MessageType field if non-nil, zero value otherwise.

### GetMessageTypeOk

`func (o *AMReceiverVictorOps) GetMessageTypeOk() (*string, bool)`

GetMessageTypeOk returns a tuple with the MessageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageType

`func (o *AMReceiverVictorOps) SetMessageType(v string)`

SetMessageType sets MessageType field to given value.

### HasMessageType

`func (o *AMReceiverVictorOps) HasMessageType() bool`

HasMessageType returns a boolean if a field has been set.

### GetEntityDisplayName

`func (o *AMReceiverVictorOps) GetEntityDisplayName() string`

GetEntityDisplayName returns the EntityDisplayName field if non-nil, zero value otherwise.

### GetEntityDisplayNameOk

`func (o *AMReceiverVictorOps) GetEntityDisplayNameOk() (*string, bool)`

GetEntityDisplayNameOk returns a tuple with the EntityDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityDisplayName

`func (o *AMReceiverVictorOps) SetEntityDisplayName(v string)`

SetEntityDisplayName sets EntityDisplayName field to given value.

### HasEntityDisplayName

`func (o *AMReceiverVictorOps) HasEntityDisplayName() bool`

HasEntityDisplayName returns a boolean if a field has been set.

### GetStateMessage

`func (o *AMReceiverVictorOps) GetStateMessage() string`

GetStateMessage returns the StateMessage field if non-nil, zero value otherwise.

### GetStateMessageOk

`func (o *AMReceiverVictorOps) GetStateMessageOk() (*string, bool)`

GetStateMessageOk returns a tuple with the StateMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStateMessage

`func (o *AMReceiverVictorOps) SetStateMessage(v string)`

SetStateMessage sets StateMessage field to given value.

### HasStateMessage

`func (o *AMReceiverVictorOps) HasStateMessage() bool`

HasStateMessage returns a boolean if a field has been set.

### GetMonitoringTool

`func (o *AMReceiverVictorOps) GetMonitoringTool() string`

GetMonitoringTool returns the MonitoringTool field if non-nil, zero value otherwise.

### GetMonitoringToolOk

`func (o *AMReceiverVictorOps) GetMonitoringToolOk() (*string, bool)`

GetMonitoringToolOk returns a tuple with the MonitoringTool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonitoringTool

`func (o *AMReceiverVictorOps) SetMonitoringTool(v string)`

SetMonitoringTool sets MonitoringTool field to given value.

### HasMonitoringTool

`func (o *AMReceiverVictorOps) HasMonitoringTool() bool`

HasMonitoringTool returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverVictorOps) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverVictorOps) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverVictorOps) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverVictorOps) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


