# IncidentGroupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Detail** | Pointer to [**IncidentGroupDetailDto**](IncidentGroupDetailDto.md) |  | [optional] 
**Incidents** | Pointer to [**[]IncidentDto**](IncidentDto.md) |  | [optional] 

## Methods

### NewIncidentGroupDto

`func NewIncidentGroupDto() *IncidentGroupDto`

NewIncidentGroupDto instantiates a new IncidentGroupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIncidentGroupDtoWithDefaults

`func NewIncidentGroupDtoWithDefaults() *IncidentGroupDto`

NewIncidentGroupDtoWithDefaults instantiates a new IncidentGroupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *IncidentGroupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IncidentGroupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IncidentGroupDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IncidentGroupDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *IncidentGroupDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *IncidentGroupDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *IncidentGroupDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *IncidentGroupDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDetail

`func (o *IncidentGroupDto) GetDetail() IncidentGroupDetailDto`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *IncidentGroupDto) GetDetailOk() (*IncidentGroupDetailDto, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *IncidentGroupDto) SetDetail(v IncidentGroupDetailDto)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *IncidentGroupDto) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetIncidents

`func (o *IncidentGroupDto) GetIncidents() []IncidentDto`

GetIncidents returns the Incidents field if non-nil, zero value otherwise.

### GetIncidentsOk

`func (o *IncidentGroupDto) GetIncidentsOk() (*[]IncidentDto, bool)`

GetIncidentsOk returns a tuple with the Incidents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidents

`func (o *IncidentGroupDto) SetIncidents(v []IncidentDto)`

SetIncidents sets Incidents field to given value.

### HasIncidents

`func (o *IncidentGroupDto) HasIncidents() bool`

HasIncidents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


