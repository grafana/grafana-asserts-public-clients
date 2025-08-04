# AMReceiverPagerDuty

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | Pointer to **string** |  | [optional] 
**Client** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Source** | Pointer to **string** |  | [optional] 
**Details** | Pointer to **map[string]string** |  | [optional] 
**Images** | Pointer to [**[]AMReceiverImage**](AMReceiverImage.md) |  | [optional] 
**Links** | Pointer to [**[]AMReceiverLink**](AMReceiverLink.md) |  | [optional] 
**Component** | Pointer to **string** |  | [optional] 
**Group** | Pointer to **string** |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**RoutingKey** | Pointer to **string** |  | [optional] 
**RoutingKeyFile** | Pointer to **string** |  | [optional] 
**ServiceKey** | Pointer to **string** |  | [optional] 
**ServiceKeyFile** | Pointer to **string** |  | [optional] 
**ClientUrl** | Pointer to **string** |  | [optional] 
**Class** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 

## Methods

### NewAMReceiverPagerDuty

`func NewAMReceiverPagerDuty() *AMReceiverPagerDuty`

NewAMReceiverPagerDuty instantiates a new AMReceiverPagerDuty object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverPagerDutyWithDefaults

`func NewAMReceiverPagerDutyWithDefaults() *AMReceiverPagerDuty`

NewAMReceiverPagerDutyWithDefaults instantiates a new AMReceiverPagerDuty object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUrl

`func (o *AMReceiverPagerDuty) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *AMReceiverPagerDuty) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *AMReceiverPagerDuty) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *AMReceiverPagerDuty) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetClient

`func (o *AMReceiverPagerDuty) GetClient() string`

GetClient returns the Client field if non-nil, zero value otherwise.

### GetClientOk

`func (o *AMReceiverPagerDuty) GetClientOk() (*string, bool)`

GetClientOk returns a tuple with the Client field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClient

`func (o *AMReceiverPagerDuty) SetClient(v string)`

SetClient sets Client field to given value.

### HasClient

`func (o *AMReceiverPagerDuty) HasClient() bool`

HasClient returns a boolean if a field has been set.

### GetDescription

`func (o *AMReceiverPagerDuty) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AMReceiverPagerDuty) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AMReceiverPagerDuty) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AMReceiverPagerDuty) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSeverity

`func (o *AMReceiverPagerDuty) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *AMReceiverPagerDuty) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *AMReceiverPagerDuty) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *AMReceiverPagerDuty) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetSource

`func (o *AMReceiverPagerDuty) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AMReceiverPagerDuty) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AMReceiverPagerDuty) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *AMReceiverPagerDuty) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDetails

`func (o *AMReceiverPagerDuty) GetDetails() map[string]string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *AMReceiverPagerDuty) GetDetailsOk() (*map[string]string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *AMReceiverPagerDuty) SetDetails(v map[string]string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *AMReceiverPagerDuty) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetImages

`func (o *AMReceiverPagerDuty) GetImages() []AMReceiverImage`

GetImages returns the Images field if non-nil, zero value otherwise.

### GetImagesOk

`func (o *AMReceiverPagerDuty) GetImagesOk() (*[]AMReceiverImage, bool)`

GetImagesOk returns a tuple with the Images field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImages

`func (o *AMReceiverPagerDuty) SetImages(v []AMReceiverImage)`

SetImages sets Images field to given value.

### HasImages

`func (o *AMReceiverPagerDuty) HasImages() bool`

HasImages returns a boolean if a field has been set.

### GetLinks

`func (o *AMReceiverPagerDuty) GetLinks() []AMReceiverLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AMReceiverPagerDuty) GetLinksOk() (*[]AMReceiverLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AMReceiverPagerDuty) SetLinks(v []AMReceiverLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AMReceiverPagerDuty) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetComponent

`func (o *AMReceiverPagerDuty) GetComponent() string`

GetComponent returns the Component field if non-nil, zero value otherwise.

### GetComponentOk

`func (o *AMReceiverPagerDuty) GetComponentOk() (*string, bool)`

GetComponentOk returns a tuple with the Component field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponent

`func (o *AMReceiverPagerDuty) SetComponent(v string)`

SetComponent sets Component field to given value.

### HasComponent

`func (o *AMReceiverPagerDuty) HasComponent() bool`

HasComponent returns a boolean if a field has been set.

### GetGroup

`func (o *AMReceiverPagerDuty) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *AMReceiverPagerDuty) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *AMReceiverPagerDuty) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *AMReceiverPagerDuty) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverPagerDuty) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverPagerDuty) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverPagerDuty) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverPagerDuty) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetRoutingKey

`func (o *AMReceiverPagerDuty) GetRoutingKey() string`

GetRoutingKey returns the RoutingKey field if non-nil, zero value otherwise.

### GetRoutingKeyOk

`func (o *AMReceiverPagerDuty) GetRoutingKeyOk() (*string, bool)`

GetRoutingKeyOk returns a tuple with the RoutingKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingKey

`func (o *AMReceiverPagerDuty) SetRoutingKey(v string)`

SetRoutingKey sets RoutingKey field to given value.

### HasRoutingKey

`func (o *AMReceiverPagerDuty) HasRoutingKey() bool`

HasRoutingKey returns a boolean if a field has been set.

### GetRoutingKeyFile

`func (o *AMReceiverPagerDuty) GetRoutingKeyFile() string`

GetRoutingKeyFile returns the RoutingKeyFile field if non-nil, zero value otherwise.

### GetRoutingKeyFileOk

`func (o *AMReceiverPagerDuty) GetRoutingKeyFileOk() (*string, bool)`

GetRoutingKeyFileOk returns a tuple with the RoutingKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingKeyFile

`func (o *AMReceiverPagerDuty) SetRoutingKeyFile(v string)`

SetRoutingKeyFile sets RoutingKeyFile field to given value.

### HasRoutingKeyFile

`func (o *AMReceiverPagerDuty) HasRoutingKeyFile() bool`

HasRoutingKeyFile returns a boolean if a field has been set.

### GetServiceKey

`func (o *AMReceiverPagerDuty) GetServiceKey() string`

GetServiceKey returns the ServiceKey field if non-nil, zero value otherwise.

### GetServiceKeyOk

`func (o *AMReceiverPagerDuty) GetServiceKeyOk() (*string, bool)`

GetServiceKeyOk returns a tuple with the ServiceKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceKey

`func (o *AMReceiverPagerDuty) SetServiceKey(v string)`

SetServiceKey sets ServiceKey field to given value.

### HasServiceKey

`func (o *AMReceiverPagerDuty) HasServiceKey() bool`

HasServiceKey returns a boolean if a field has been set.

### GetServiceKeyFile

`func (o *AMReceiverPagerDuty) GetServiceKeyFile() string`

GetServiceKeyFile returns the ServiceKeyFile field if non-nil, zero value otherwise.

### GetServiceKeyFileOk

`func (o *AMReceiverPagerDuty) GetServiceKeyFileOk() (*string, bool)`

GetServiceKeyFileOk returns a tuple with the ServiceKeyFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceKeyFile

`func (o *AMReceiverPagerDuty) SetServiceKeyFile(v string)`

SetServiceKeyFile sets ServiceKeyFile field to given value.

### HasServiceKeyFile

`func (o *AMReceiverPagerDuty) HasServiceKeyFile() bool`

HasServiceKeyFile returns a boolean if a field has been set.

### GetClientUrl

`func (o *AMReceiverPagerDuty) GetClientUrl() string`

GetClientUrl returns the ClientUrl field if non-nil, zero value otherwise.

### GetClientUrlOk

`func (o *AMReceiverPagerDuty) GetClientUrlOk() (*string, bool)`

GetClientUrlOk returns a tuple with the ClientUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientUrl

`func (o *AMReceiverPagerDuty) SetClientUrl(v string)`

SetClientUrl sets ClientUrl field to given value.

### HasClientUrl

`func (o *AMReceiverPagerDuty) HasClientUrl() bool`

HasClientUrl returns a boolean if a field has been set.

### GetClass

`func (o *AMReceiverPagerDuty) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *AMReceiverPagerDuty) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *AMReceiverPagerDuty) SetClass(v string)`

SetClass sets Class field to given value.

### HasClass

`func (o *AMReceiverPagerDuty) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverPagerDuty) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverPagerDuty) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverPagerDuty) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverPagerDuty) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


