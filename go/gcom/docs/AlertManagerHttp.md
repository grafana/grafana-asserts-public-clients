# AlertManagerHttp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Authorization** | Pointer to [**AlertManagerAuthorization**](AlertManagerAuthorization.md) |  | [optional] 
**Oauth2** | Pointer to [**AlertManagerOAuth2**](AlertManagerOAuth2.md) |  | [optional] 
**BasicAuth** | Pointer to [**AlertManagerBasicAuth**](AlertManagerBasicAuth.md) |  | [optional] 
**EnableHttp2** | Pointer to **bool** |  | [optional] 
**ProxyUrl** | Pointer to **string** |  | [optional] 
**FollowRedirects** | Pointer to **bool** |  | [optional] 
**TlsConfig** | Pointer to [**AlertManagerTls**](AlertManagerTls.md) |  | [optional] 

## Methods

### NewAlertManagerHttp

`func NewAlertManagerHttp() *AlertManagerHttp`

NewAlertManagerHttp instantiates a new AlertManagerHttp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertManagerHttpWithDefaults

`func NewAlertManagerHttpWithDefaults() *AlertManagerHttp`

NewAlertManagerHttpWithDefaults instantiates a new AlertManagerHttp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorization

`func (o *AlertManagerHttp) GetAuthorization() AlertManagerAuthorization`

GetAuthorization returns the Authorization field if non-nil, zero value otherwise.

### GetAuthorizationOk

`func (o *AlertManagerHttp) GetAuthorizationOk() (*AlertManagerAuthorization, bool)`

GetAuthorizationOk returns a tuple with the Authorization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorization

`func (o *AlertManagerHttp) SetAuthorization(v AlertManagerAuthorization)`

SetAuthorization sets Authorization field to given value.

### HasAuthorization

`func (o *AlertManagerHttp) HasAuthorization() bool`

HasAuthorization returns a boolean if a field has been set.

### GetOauth2

`func (o *AlertManagerHttp) GetOauth2() AlertManagerOAuth2`

GetOauth2 returns the Oauth2 field if non-nil, zero value otherwise.

### GetOauth2Ok

`func (o *AlertManagerHttp) GetOauth2Ok() (*AlertManagerOAuth2, bool)`

GetOauth2Ok returns a tuple with the Oauth2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOauth2

`func (o *AlertManagerHttp) SetOauth2(v AlertManagerOAuth2)`

SetOauth2 sets Oauth2 field to given value.

### HasOauth2

`func (o *AlertManagerHttp) HasOauth2() bool`

HasOauth2 returns a boolean if a field has been set.

### GetBasicAuth

`func (o *AlertManagerHttp) GetBasicAuth() AlertManagerBasicAuth`

GetBasicAuth returns the BasicAuth field if non-nil, zero value otherwise.

### GetBasicAuthOk

`func (o *AlertManagerHttp) GetBasicAuthOk() (*AlertManagerBasicAuth, bool)`

GetBasicAuthOk returns a tuple with the BasicAuth field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasicAuth

`func (o *AlertManagerHttp) SetBasicAuth(v AlertManagerBasicAuth)`

SetBasicAuth sets BasicAuth field to given value.

### HasBasicAuth

`func (o *AlertManagerHttp) HasBasicAuth() bool`

HasBasicAuth returns a boolean if a field has been set.

### GetEnableHttp2

`func (o *AlertManagerHttp) GetEnableHttp2() bool`

GetEnableHttp2 returns the EnableHttp2 field if non-nil, zero value otherwise.

### GetEnableHttp2Ok

`func (o *AlertManagerHttp) GetEnableHttp2Ok() (*bool, bool)`

GetEnableHttp2Ok returns a tuple with the EnableHttp2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnableHttp2

`func (o *AlertManagerHttp) SetEnableHttp2(v bool)`

SetEnableHttp2 sets EnableHttp2 field to given value.

### HasEnableHttp2

`func (o *AlertManagerHttp) HasEnableHttp2() bool`

HasEnableHttp2 returns a boolean if a field has been set.

### GetProxyUrl

`func (o *AlertManagerHttp) GetProxyUrl() string`

GetProxyUrl returns the ProxyUrl field if non-nil, zero value otherwise.

### GetProxyUrlOk

`func (o *AlertManagerHttp) GetProxyUrlOk() (*string, bool)`

GetProxyUrlOk returns a tuple with the ProxyUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProxyUrl

`func (o *AlertManagerHttp) SetProxyUrl(v string)`

SetProxyUrl sets ProxyUrl field to given value.

### HasProxyUrl

`func (o *AlertManagerHttp) HasProxyUrl() bool`

HasProxyUrl returns a boolean if a field has been set.

### GetFollowRedirects

`func (o *AlertManagerHttp) GetFollowRedirects() bool`

GetFollowRedirects returns the FollowRedirects field if non-nil, zero value otherwise.

### GetFollowRedirectsOk

`func (o *AlertManagerHttp) GetFollowRedirectsOk() (*bool, bool)`

GetFollowRedirectsOk returns a tuple with the FollowRedirects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFollowRedirects

`func (o *AlertManagerHttp) SetFollowRedirects(v bool)`

SetFollowRedirects sets FollowRedirects field to given value.

### HasFollowRedirects

`func (o *AlertManagerHttp) HasFollowRedirects() bool`

HasFollowRedirects returns a boolean if a field has been set.

### GetTlsConfig

`func (o *AlertManagerHttp) GetTlsConfig() AlertManagerTls`

GetTlsConfig returns the TlsConfig field if non-nil, zero value otherwise.

### GetTlsConfigOk

`func (o *AlertManagerHttp) GetTlsConfigOk() (*AlertManagerTls, bool)`

GetTlsConfigOk returns a tuple with the TlsConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTlsConfig

`func (o *AlertManagerHttp) SetTlsConfig(v AlertManagerTls)`

SetTlsConfig sets TlsConfig field to given value.

### HasTlsConfig

`func (o *AlertManagerHttp) HasTlsConfig() bool`

HasTlsConfig returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


