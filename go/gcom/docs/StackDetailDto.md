# StackDetailDto

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
**GrafanaToken** | Pointer to **string** |  | [optional] 
**Enabled** | Pointer to **bool** |  | [optional] 
**AlertManagerConfigured** | Pointer to **bool** |  | [optional] 
**GraphInstanceCreated** | Pointer to **bool** |  | [optional] 
**UseGrafanaManagedAlerts** | Pointer to **bool** |  | [optional] 
**ProcessAlertsInEnrichment** | Pointer to **bool** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**DisabledTime** | Pointer to **time.Time** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 

## Methods

### NewStackDetailDto

`func NewStackDetailDto() *StackDetailDto`

NewStackDetailDto instantiates a new StackDetailDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStackDetailDtoWithDefaults

`func NewStackDetailDtoWithDefaults() *StackDetailDto`

NewStackDetailDtoWithDefaults instantiates a new StackDetailDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStackId

`func (o *StackDetailDto) GetStackId() int32`

GetStackId returns the StackId field if non-nil, zero value otherwise.

### GetStackIdOk

`func (o *StackDetailDto) GetStackIdOk() (*int32, bool)`

GetStackIdOk returns a tuple with the StackId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStackId

`func (o *StackDetailDto) SetStackId(v int32)`

SetStackId sets StackId field to given value.

### HasStackId

`func (o *StackDetailDto) HasStackId() bool`

HasStackId returns a boolean if a field has been set.

### GetSlug

`func (o *StackDetailDto) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *StackDetailDto) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *StackDetailDto) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *StackDetailDto) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetOrgId

`func (o *StackDetailDto) GetOrgId() int32`

GetOrgId returns the OrgId field if non-nil, zero value otherwise.

### GetOrgIdOk

`func (o *StackDetailDto) GetOrgIdOk() (*int32, bool)`

GetOrgIdOk returns a tuple with the OrgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgId

`func (o *StackDetailDto) SetOrgId(v int32)`

SetOrgId sets OrgId field to given value.

### HasOrgId

`func (o *StackDetailDto) HasOrgId() bool`

HasOrgId returns a boolean if a field has been set.

### GetOrgSlug

`func (o *StackDetailDto) GetOrgSlug() string`

GetOrgSlug returns the OrgSlug field if non-nil, zero value otherwise.

### GetOrgSlugOk

`func (o *StackDetailDto) GetOrgSlugOk() (*string, bool)`

GetOrgSlugOk returns a tuple with the OrgSlug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgSlug

`func (o *StackDetailDto) SetOrgSlug(v string)`

SetOrgSlug sets OrgSlug field to given value.

### HasOrgSlug

`func (o *StackDetailDto) HasOrgSlug() bool`

HasOrgSlug returns a boolean if a field has been set.

### GetGcomToken

`func (o *StackDetailDto) GetGcomToken() string`

GetGcomToken returns the GcomToken field if non-nil, zero value otherwise.

### GetGcomTokenOk

`func (o *StackDetailDto) GetGcomTokenOk() (*string, bool)`

GetGcomTokenOk returns a tuple with the GcomToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGcomToken

`func (o *StackDetailDto) SetGcomToken(v string)`

SetGcomToken sets GcomToken field to given value.

### HasGcomToken

`func (o *StackDetailDto) HasGcomToken() bool`

HasGcomToken returns a boolean if a field has been set.

### GetMimirToken

`func (o *StackDetailDto) GetMimirToken() string`

GetMimirToken returns the MimirToken field if non-nil, zero value otherwise.

### GetMimirTokenOk

`func (o *StackDetailDto) GetMimirTokenOk() (*string, bool)`

GetMimirTokenOk returns a tuple with the MimirToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMimirToken

`func (o *StackDetailDto) SetMimirToken(v string)`

SetMimirToken sets MimirToken field to given value.

### HasMimirToken

`func (o *StackDetailDto) HasMimirToken() bool`

HasMimirToken returns a boolean if a field has been set.

### GetAssertionDetectorToken

`func (o *StackDetailDto) GetAssertionDetectorToken() string`

GetAssertionDetectorToken returns the AssertionDetectorToken field if non-nil, zero value otherwise.

### GetAssertionDetectorTokenOk

`func (o *StackDetailDto) GetAssertionDetectorTokenOk() (*string, bool)`

GetAssertionDetectorTokenOk returns a tuple with the AssertionDetectorToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionDetectorToken

`func (o *StackDetailDto) SetAssertionDetectorToken(v string)`

SetAssertionDetectorToken sets AssertionDetectorToken field to given value.

### HasAssertionDetectorToken

`func (o *StackDetailDto) HasAssertionDetectorToken() bool`

HasAssertionDetectorToken returns a boolean if a field has been set.

### GetGrafanaToken

`func (o *StackDetailDto) GetGrafanaToken() string`

GetGrafanaToken returns the GrafanaToken field if non-nil, zero value otherwise.

### GetGrafanaTokenOk

`func (o *StackDetailDto) GetGrafanaTokenOk() (*string, bool)`

GetGrafanaTokenOk returns a tuple with the GrafanaToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrafanaToken

`func (o *StackDetailDto) SetGrafanaToken(v string)`

SetGrafanaToken sets GrafanaToken field to given value.

### HasGrafanaToken

`func (o *StackDetailDto) HasGrafanaToken() bool`

HasGrafanaToken returns a boolean if a field has been set.

### GetEnabled

`func (o *StackDetailDto) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *StackDetailDto) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *StackDetailDto) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *StackDetailDto) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetAlertManagerConfigured

`func (o *StackDetailDto) GetAlertManagerConfigured() bool`

GetAlertManagerConfigured returns the AlertManagerConfigured field if non-nil, zero value otherwise.

### GetAlertManagerConfiguredOk

`func (o *StackDetailDto) GetAlertManagerConfiguredOk() (*bool, bool)`

GetAlertManagerConfiguredOk returns a tuple with the AlertManagerConfigured field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertManagerConfigured

`func (o *StackDetailDto) SetAlertManagerConfigured(v bool)`

SetAlertManagerConfigured sets AlertManagerConfigured field to given value.

### HasAlertManagerConfigured

`func (o *StackDetailDto) HasAlertManagerConfigured() bool`

HasAlertManagerConfigured returns a boolean if a field has been set.

### GetGraphInstanceCreated

`func (o *StackDetailDto) GetGraphInstanceCreated() bool`

GetGraphInstanceCreated returns the GraphInstanceCreated field if non-nil, zero value otherwise.

### GetGraphInstanceCreatedOk

`func (o *StackDetailDto) GetGraphInstanceCreatedOk() (*bool, bool)`

GetGraphInstanceCreatedOk returns a tuple with the GraphInstanceCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGraphInstanceCreated

`func (o *StackDetailDto) SetGraphInstanceCreated(v bool)`

SetGraphInstanceCreated sets GraphInstanceCreated field to given value.

### HasGraphInstanceCreated

`func (o *StackDetailDto) HasGraphInstanceCreated() bool`

HasGraphInstanceCreated returns a boolean if a field has been set.

### GetUseGrafanaManagedAlerts

`func (o *StackDetailDto) GetUseGrafanaManagedAlerts() bool`

GetUseGrafanaManagedAlerts returns the UseGrafanaManagedAlerts field if non-nil, zero value otherwise.

### GetUseGrafanaManagedAlertsOk

`func (o *StackDetailDto) GetUseGrafanaManagedAlertsOk() (*bool, bool)`

GetUseGrafanaManagedAlertsOk returns a tuple with the UseGrafanaManagedAlerts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseGrafanaManagedAlerts

`func (o *StackDetailDto) SetUseGrafanaManagedAlerts(v bool)`

SetUseGrafanaManagedAlerts sets UseGrafanaManagedAlerts field to given value.

### HasUseGrafanaManagedAlerts

`func (o *StackDetailDto) HasUseGrafanaManagedAlerts() bool`

HasUseGrafanaManagedAlerts returns a boolean if a field has been set.

### GetProcessAlertsInEnrichment

`func (o *StackDetailDto) GetProcessAlertsInEnrichment() bool`

GetProcessAlertsInEnrichment returns the ProcessAlertsInEnrichment field if non-nil, zero value otherwise.

### GetProcessAlertsInEnrichmentOk

`func (o *StackDetailDto) GetProcessAlertsInEnrichmentOk() (*bool, bool)`

GetProcessAlertsInEnrichmentOk returns a tuple with the ProcessAlertsInEnrichment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessAlertsInEnrichment

`func (o *StackDetailDto) SetProcessAlertsInEnrichment(v bool)`

SetProcessAlertsInEnrichment sets ProcessAlertsInEnrichment field to given value.

### HasProcessAlertsInEnrichment

`func (o *StackDetailDto) HasProcessAlertsInEnrichment() bool`

HasProcessAlertsInEnrichment returns a boolean if a field has been set.

### GetStatus

`func (o *StackDetailDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StackDetailDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StackDetailDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StackDetailDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDisabledTime

`func (o *StackDetailDto) GetDisabledTime() time.Time`

GetDisabledTime returns the DisabledTime field if non-nil, zero value otherwise.

### GetDisabledTimeOk

`func (o *StackDetailDto) GetDisabledTimeOk() (*time.Time, bool)`

GetDisabledTimeOk returns a tuple with the DisabledTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabledTime

`func (o *StackDetailDto) SetDisabledTime(v time.Time)`

SetDisabledTime sets DisabledTime field to given value.

### HasDisabledTime

`func (o *StackDetailDto) HasDisabledTime() bool`

HasDisabledTime returns a boolean if a field has been set.

### GetVersion

`func (o *StackDetailDto) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *StackDetailDto) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *StackDetailDto) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *StackDetailDto) HasVersion() bool`

HasVersion returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


