# InfraEventDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Timestamp** | Pointer to **time.Time** |  | [optional] 
**EntityType** | Pointer to **string** |  | [optional] 
**EntityName** | Pointer to **string** |  | [optional] 
**Verb** | Pointer to **string** |  | [optional] 
**ResourceType** | Pointer to **string** |  | [optional] 
**Summary** | Pointer to **string** |  | [optional] 
**Details** | Pointer to **string** |  | [optional] 
**ChangeCategory** | Pointer to **string** |  | [optional] 
**Severity** | Pointer to **string** |  | [optional] 
**Source** | Pointer to **string** |  | [optional] 
**Cluster** | Pointer to **string** |  | [optional] 
**Namespace** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewInfraEventDto

`func NewInfraEventDto() *InfraEventDto`

NewInfraEventDto instantiates a new InfraEventDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInfraEventDtoWithDefaults

`func NewInfraEventDtoWithDefaults() *InfraEventDto`

NewInfraEventDtoWithDefaults instantiates a new InfraEventDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *InfraEventDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *InfraEventDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *InfraEventDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *InfraEventDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTimestamp

`func (o *InfraEventDto) GetTimestamp() time.Time`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *InfraEventDto) GetTimestampOk() (*time.Time, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *InfraEventDto) SetTimestamp(v time.Time)`

SetTimestamp sets Timestamp field to given value.

### HasTimestamp

`func (o *InfraEventDto) HasTimestamp() bool`

HasTimestamp returns a boolean if a field has been set.

### GetEntityType

`func (o *InfraEventDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *InfraEventDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *InfraEventDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *InfraEventDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetEntityName

`func (o *InfraEventDto) GetEntityName() string`

GetEntityName returns the EntityName field if non-nil, zero value otherwise.

### GetEntityNameOk

`func (o *InfraEventDto) GetEntityNameOk() (*string, bool)`

GetEntityNameOk returns a tuple with the EntityName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityName

`func (o *InfraEventDto) SetEntityName(v string)`

SetEntityName sets EntityName field to given value.

### HasEntityName

`func (o *InfraEventDto) HasEntityName() bool`

HasEntityName returns a boolean if a field has been set.

### GetVerb

`func (o *InfraEventDto) GetVerb() string`

GetVerb returns the Verb field if non-nil, zero value otherwise.

### GetVerbOk

`func (o *InfraEventDto) GetVerbOk() (*string, bool)`

GetVerbOk returns a tuple with the Verb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerb

`func (o *InfraEventDto) SetVerb(v string)`

SetVerb sets Verb field to given value.

### HasVerb

`func (o *InfraEventDto) HasVerb() bool`

HasVerb returns a boolean if a field has been set.

### GetResourceType

`func (o *InfraEventDto) GetResourceType() string`

GetResourceType returns the ResourceType field if non-nil, zero value otherwise.

### GetResourceTypeOk

`func (o *InfraEventDto) GetResourceTypeOk() (*string, bool)`

GetResourceTypeOk returns a tuple with the ResourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceType

`func (o *InfraEventDto) SetResourceType(v string)`

SetResourceType sets ResourceType field to given value.

### HasResourceType

`func (o *InfraEventDto) HasResourceType() bool`

HasResourceType returns a boolean if a field has been set.

### GetSummary

`func (o *InfraEventDto) GetSummary() string`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *InfraEventDto) GetSummaryOk() (*string, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *InfraEventDto) SetSummary(v string)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *InfraEventDto) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetDetails

`func (o *InfraEventDto) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *InfraEventDto) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *InfraEventDto) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *InfraEventDto) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetChangeCategory

`func (o *InfraEventDto) GetChangeCategory() string`

GetChangeCategory returns the ChangeCategory field if non-nil, zero value otherwise.

### GetChangeCategoryOk

`func (o *InfraEventDto) GetChangeCategoryOk() (*string, bool)`

GetChangeCategoryOk returns a tuple with the ChangeCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeCategory

`func (o *InfraEventDto) SetChangeCategory(v string)`

SetChangeCategory sets ChangeCategory field to given value.

### HasChangeCategory

`func (o *InfraEventDto) HasChangeCategory() bool`

HasChangeCategory returns a boolean if a field has been set.

### GetSeverity

`func (o *InfraEventDto) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *InfraEventDto) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *InfraEventDto) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *InfraEventDto) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetSource

`func (o *InfraEventDto) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *InfraEventDto) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *InfraEventDto) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *InfraEventDto) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetCluster

`func (o *InfraEventDto) GetCluster() string`

GetCluster returns the Cluster field if non-nil, zero value otherwise.

### GetClusterOk

`func (o *InfraEventDto) GetClusterOk() (*string, bool)`

GetClusterOk returns a tuple with the Cluster field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCluster

`func (o *InfraEventDto) SetCluster(v string)`

SetCluster sets Cluster field to given value.

### HasCluster

`func (o *InfraEventDto) HasCluster() bool`

HasCluster returns a boolean if a field has been set.

### GetNamespace

`func (o *InfraEventDto) GetNamespace() string`

GetNamespace returns the Namespace field if non-nil, zero value otherwise.

### GetNamespaceOk

`func (o *InfraEventDto) GetNamespaceOk() (*string, bool)`

GetNamespaceOk returns a tuple with the Namespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamespace

`func (o *InfraEventDto) SetNamespace(v string)`

SetNamespace sets Namespace field to given value.

### HasNamespace

`func (o *InfraEventDto) HasNamespace() bool`

HasNamespace returns a boolean if a field has been set.

### GetLabels

`func (o *InfraEventDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *InfraEventDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *InfraEventDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *InfraEventDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


