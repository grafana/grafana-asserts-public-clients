# StackInfoDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StackId** | Pointer to **int32** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**OrgId** | Pointer to **int32** |  | [optional] 
**OrgSlug** | Pointer to **string** |  | [optional] 
**GcomToken** | Pointer to **string** |  | [optional] 
**MimirToken** | Pointer to **string** |  | [optional] 
**AssertionDetectorToken** | Pointer to **string** |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] 
**Dormant** | Pointer to **bool** |  | [optional] 
**AlertManagerConfigured** | Pointer to **bool** |  | [optional] 
**GraphInstanceCreated** | Pointer to **bool** |  | [optional] 
**UseGrafanaManagedAlerts** | Pointer to **bool** |  | [optional] 
**ProcessAlertsInEnrichment** | Pointer to **bool** |  | [optional] 
**ContactPointUID** | Pointer to **string** |  | [optional] 

## Methods

### NewStackInfoDto

`func NewStackInfoDto() *StackInfoDto`

NewStackInfoDto instantiates a new StackInfoDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackInfoDtoWithDefaults

`func NewStackInfoDtoWithDefaults() *StackInfoDto`

NewStackInfoDtoWithDefaults instantiates a new StackInfoDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStackId

`func (o *StackInfoDto) GetStackId() int32`

GetStackId returns the StackId field if non-nil, zero value otherwise.

### GetStackIdOk

`func (o *StackInfoDto) GetStackIdOk() (*int32, bool)`

GetStackIdOk returns a tuple with the StackId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackId

`func (o *StackInfoDto) SetStackId(v int32)`

SetStackId sets StackId field to given value.

### HasStackId

`func (o *StackInfoDto) HasStackId() bool`

HasStackId returns a boolean if a field has been set.

### GetSlug

`func (o *StackInfoDto) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *StackInfoDto) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *StackInfoDto) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *StackInfoDto) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetOrgId

`func (o *StackInfoDto) GetOrgId() int32`

GetOrgId returns the OrgId field if non-nil, zero value otherwise.

### GetOrgIdOk

`func (o *StackInfoDto) GetOrgIdOk() (*int32, bool)`

GetOrgIdOk returns a tuple with the OrgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgId

`func (o *StackInfoDto) SetOrgId(v int32)`

SetOrgId sets OrgId field to given value.

### HasOrgId

`func (o *StackInfoDto) HasOrgId() bool`

HasOrgId returns a boolean if a field has been set.

### GetOrgSlug

`func (o *StackInfoDto) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *StackInfoDto) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *StackInfoDto) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *StackInfoDto) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.

### GetGcomToken

`func (o *StackInfoDto) GetGcomToken() string`

GetGcomToken returns the GcomToken field if non-nil, zero value otherwise.

### GetGcomTokenOk

`func (o *StackInfoDto) GetGcomTokenOk() (*string, bool)`

GetGcomTokenOk returns a tuple with the GcomToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGcomToken

`func (o *StackInfoDto) SetGcomToken(v string)`

SetGcomToken sets GcomToken field to given value.

### HasGcomToken

`func (o *StackInfoDto) HasGcomToken() bool`

HasGcomToken returns a boolean if a field has been set.

### GetMimirToken

`func (o *StackInfoDto) GetMimirToken() string`

GetMimirToken returns the MimirToken field if non-nil, zero value otherwise.

### GetMimirTokenOk

`func (o *StackInfoDto) GetMimirTokenOk() (*string, bool)`

GetMimirTokenOk returns a tuple with the MimirToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMimirToken

`func (o *StackInfoDto) SetMimirToken(v string)`

SetMimirToken sets MimirToken field to given value.

### HasMimirToken

`func (o *StackInfoDto) HasMimirToken() bool`

HasMimirToken returns a boolean if a field has been set.

### GetAssertionDetectorToken

`func (o *StackInfoDto) GetAssertionDetectorToken() string`

GetAssertionDetectorToken returns the AssertionDetectorToken field if non-nil, zero value otherwise.

### GetAssertionDetectorTokenOk

`func (o *StackInfoDto) GetAssertionDetectorTokenOk() (*string, bool)`

GetAssertionDetectorTokenOk returns a tuple with the AssertionDetectorToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionDetectorToken

`func (o *StackInfoDto) SetAssertionDetectorToken(v string)`

SetAssertionDetectorToken sets AssertionDetectorToken field to given value.

### HasAssertionDetectorToken

`func (o *StackInfoDto) HasAssertionDetectorToken() bool`

HasAssertionDetectorToken returns a boolean if a field has been set.

### GetEnabled

`func (o *StackInfoDto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *StackInfoDto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *StackInfoDto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *StackInfoDto) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDormant

`func (o *StackInfoDto) GetDormant() bool`

GetDormant returns the Dormant field if non-nil, zero value otherwise.

### GetDormantOk

`func (o *StackInfoDto) GetDormantOk() (*bool, bool)`

GetDormantOk returns a tuple with the Dormant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDormant

`func (o *StackInfoDto) SetDormant(v bool)`

SetDormant sets Dormant field to given value.

### HasDormant

`func (o *StackInfoDto) HasDormant() bool`

HasDormant returns a boolean if a field has been set.

### GetAlertManagerConfigured

`func (o *StackInfoDto) GetAlertManagerConfigured() bool`

GetAlertManagerConfigured returns the AlertManagerConfigured field if non-nil, zero value otherwise.

### GetAlertManagerConfiguredOk

`func (o *StackInfoDto) GetAlertManagerConfiguredOk() (*bool, bool)`

GetAlertManagerConfiguredOk returns a tuple with the AlertManagerConfigured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertManagerConfigured

`func (o *StackInfoDto) SetAlertManagerConfigured(v bool)`

SetAlertManagerConfigured sets AlertManagerConfigured field to given value.

### HasAlertManagerConfigured

`func (o *StackInfoDto) HasAlertManagerConfigured() bool`

HasAlertManagerConfigured returns a boolean if a field has been set.

### GetGraphInstanceCreated

`func (o *StackInfoDto) GetGraphInstanceCreated() bool`

GetGraphInstanceCreated returns the GraphInstanceCreated field if non-nil, zero value otherwise.

### GetGraphInstanceCreatedOk

`func (o *StackInfoDto) GetGraphInstanceCreatedOk() (*bool, bool)`

GetGraphInstanceCreatedOk returns a tuple with the GraphInstanceCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphInstanceCreated

`func (o *StackInfoDto) SetGraphInstanceCreated(v bool)`

SetGraphInstanceCreated sets GraphInstanceCreated field to given value.

### HasGraphInstanceCreated

`func (o *StackInfoDto) HasGraphInstanceCreated() bool`

HasGraphInstanceCreated returns a boolean if a field has been set.

### GetUseGrafanaManagedAlerts

`func (o *StackInfoDto) GetUseGrafanaManagedAlerts() bool`

GetUseGrafanaManagedAlerts returns the UseGrafanaManagedAlerts field if non-nil, zero value otherwise.

### GetUseGrafanaManagedAlertsOk

`func (o *StackInfoDto) GetUseGrafanaManagedAlertsOk() (*bool, bool)`

GetUseGrafanaManagedAlertsOk returns a tuple with the UseGrafanaManagedAlerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseGrafanaManagedAlerts

`func (o *StackInfoDto) SetUseGrafanaManagedAlerts(v bool)`

SetUseGrafanaManagedAlerts sets UseGrafanaManagedAlerts field to given value.

### HasUseGrafanaManagedAlerts

`func (o *StackInfoDto) HasUseGrafanaManagedAlerts() bool`

HasUseGrafanaManagedAlerts returns a boolean if a field has been set.

### GetProcessAlertsInEnrichment

`func (o *StackInfoDto) GetProcessAlertsInEnrichment() bool`

GetProcessAlertsInEnrichment returns the ProcessAlertsInEnrichment field if non-nil, zero value otherwise.

### GetProcessAlertsInEnrichmentOk

`func (o *StackInfoDto) GetProcessAlertsInEnrichmentOk() (*bool, bool)`

GetProcessAlertsInEnrichmentOk returns a tuple with the ProcessAlertsInEnrichment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessAlertsInEnrichment

`func (o *StackInfoDto) SetProcessAlertsInEnrichment(v bool)`

SetProcessAlertsInEnrichment sets ProcessAlertsInEnrichment field to given value.

### HasProcessAlertsInEnrichment

`func (o *StackInfoDto) HasProcessAlertsInEnrichment() bool`

HasProcessAlertsInEnrichment returns a boolean if a field has been set.

### GetContactPointUID

`func (o *StackInfoDto) GetContactPointUID() string`

GetContactPointUID returns the ContactPointUID field if non-nil, zero value otherwise.

### GetContactPointUIDOk

`func (o *StackInfoDto) GetContactPointUIDOk() (*string, bool)`

GetContactPointUIDOk returns a tuple with the ContactPointUID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactPointUID

`func (o *StackInfoDto) SetContactPointUID(v string)`

SetContactPointUID sets ContactPointUID field to given value.

### HasContactPointUID

`func (o *StackInfoDto) HasContactPointUID() bool`

HasContactPointUID returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


