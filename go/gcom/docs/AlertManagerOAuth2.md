# AlertManagerOAuth2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Scopes** | Pointer to **[]string** |  | [optional] 
**ClientId** | Pointer to **string** |  | [optional] 
**ClientSecret** | Pointer to **string** |  | [optional] 
**ClientSecretFile** | Pointer to **string** |  | [optional] 
**TokenUrl** | Pointer to **string** |  | [optional] 
**EndpointParams** | Pointer to **map[string]string** |  | [optional] 
**TlsConfig** | Pointer to [**AlertManagerTls**](AlertManagerTls.md) |  | [optional] 
**ProxyUrl** | Pointer to **string** |  | [optional] 

## Methods

### NewAlertManagerOAuth2

`func NewAlertManagerOAuth2() *AlertManagerOAuth2`

NewAlertManagerOAuth2 instantiates a new AlertManagerOAuth2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerOAuth2WithDefaults

`func NewAlertManagerOAuth2WithDefaults() *AlertManagerOAuth2`

NewAlertManagerOAuth2WithDefaults instantiates a new AlertManagerOAuth2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScopes

`func (o *AlertManagerOAuth2) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *AlertManagerOAuth2) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *AlertManagerOAuth2) SetScopes(v []string)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *AlertManagerOAuth2) HasScopes() bool`

HasScopes returns a boolean if a field has been set.

### GetClientId

`func (o *AlertManagerOAuth2) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *AlertManagerOAuth2) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *AlertManagerOAuth2) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *AlertManagerOAuth2) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *AlertManagerOAuth2) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *AlertManagerOAuth2) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *AlertManagerOAuth2) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *AlertManagerOAuth2) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetClientSecretFile

`func (o *AlertManagerOAuth2) GetClientSecretFile() string`

GetClientSecretFile returns the ClientSecretFile field if non-nil, zero value otherwise.

### GetClientSecretFileOk

`func (o *AlertManagerOAuth2) GetClientSecretFileOk() (*string, bool)`

GetClientSecretFileOk returns a tuple with the ClientSecretFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecretFile

`func (o *AlertManagerOAuth2) SetClientSecretFile(v string)`

SetClientSecretFile sets ClientSecretFile field to given value.

### HasClientSecretFile

`func (o *AlertManagerOAuth2) HasClientSecretFile() bool`

HasClientSecretFile returns a boolean if a field has been set.

### GetTokenUrl

`func (o *AlertManagerOAuth2) GetTokenUrl() string`

GetTokenUrl returns the TokenUrl field if non-nil, zero value otherwise.

### GetTokenUrlOk

`func (o *AlertManagerOAuth2) GetTokenUrlOk() (*string, bool)`

GetTokenUrlOk returns a tuple with the TokenUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTokenUrl

`func (o *AlertManagerOAuth2) SetTokenUrl(v string)`

SetTokenUrl sets TokenUrl field to given value.

### HasTokenUrl

`func (o *AlertManagerOAuth2) HasTokenUrl() bool`

HasTokenUrl returns a boolean if a field has been set.

### GetEndpointParams

`func (o *AlertManagerOAuth2) GetEndpointParams() map[string]string`

GetEndpointParams returns the EndpointParams field if non-nil, zero value otherwise.

### GetEndpointParamsOk

`func (o *AlertManagerOAuth2) GetEndpointParamsOk() (*map[string]string, bool)`

GetEndpointParamsOk returns a tuple with the EndpointParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndpointParams

`func (o *AlertManagerOAuth2) SetEndpointParams(v map[string]string)`

SetEndpointParams sets EndpointParams field to given value.

### HasEndpointParams

`func (o *AlertManagerOAuth2) HasEndpointParams() bool`

HasEndpointParams returns a boolean if a field has been set.

### GetTlsConfig

`func (o *AlertManagerOAuth2) GetTlsConfig() AlertManagerTls`

GetTlsConfig returns the TlsConfig field if non-nil, zero value otherwise.

### GetTlsConfigOk

`func (o *AlertManagerOAuth2) GetTlsConfigOk() (*AlertManagerTls, bool)`

GetTlsConfigOk returns a tuple with the TlsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsConfig

`func (o *AlertManagerOAuth2) SetTlsConfig(v AlertManagerTls)`

SetTlsConfig sets TlsConfig field to given value.

### HasTlsConfig

`func (o *AlertManagerOAuth2) HasTlsConfig() bool`

HasTlsConfig returns a boolean if a field has been set.

### GetProxyUrl

`func (o *AlertManagerOAuth2) GetProxyUrl() string`

GetProxyUrl returns the ProxyUrl field if non-nil, zero value otherwise.

### GetProxyUrlOk

`func (o *AlertManagerOAuth2) GetProxyUrlOk() (*string, bool)`

GetProxyUrlOk returns a tuple with the ProxyUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProxyUrl

`func (o *AlertManagerOAuth2) SetProxyUrl(v string)`

SetProxyUrl sets ProxyUrl field to given value.

### HasProxyUrl

`func (o *AlertManagerOAuth2) HasProxyUrl() bool`

HasProxyUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


