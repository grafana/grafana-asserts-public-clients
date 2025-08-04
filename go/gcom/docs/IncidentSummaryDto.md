# IncidentSummaryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Incidents** | Pointer to **int32** |  | [optional] 
**Status** | Pointer to **bool** |  | [optional] 

## Methods

### NewIncidentSummaryDto

`func NewIncidentSummaryDto() *IncidentSummaryDto`

NewIncidentSummaryDto instantiates a new IncidentSummaryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentSummaryDtoWithDefaults

`func NewIncidentSummaryDtoWithDefaults() *IncidentSummaryDto`

NewIncidentSummaryDtoWithDefaults instantiates a new IncidentSummaryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *IncidentSummaryDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IncidentSummaryDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IncidentSummaryDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IncidentSummaryDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *IncidentSummaryDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IncidentSummaryDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IncidentSummaryDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IncidentSummaryDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetScope

`func (o *IncidentSummaryDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *IncidentSummaryDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *IncidentSummaryDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *IncidentSummaryDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetIncidents

`func (o *IncidentSummaryDto) GetIncidents() int32`

GetIncidents returns the Incidents field if non-nil, zero value otherwise.

### GetIncidentsOk

`func (o *IncidentSummaryDto) GetIncidentsOk() (*int32, bool)`

GetIncidentsOk returns a tuple with the Incidents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidents

`func (o *IncidentSummaryDto) SetIncidents(v int32)`

SetIncidents sets Incidents field to given value.

### HasIncidents

`func (o *IncidentSummaryDto) HasIncidents() bool`

HasIncidents returns a boolean if a field has been set.

### GetStatus

`func (o *IncidentSummaryDto) GetStatus() bool`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IncidentSummaryDto) GetStatusOk() (*bool, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IncidentSummaryDto) SetStatus(v bool)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *IncidentSummaryDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


