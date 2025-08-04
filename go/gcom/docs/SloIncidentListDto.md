# SloIncidentListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Incidents** | Pointer to [**[]IncidentDto**](IncidentDto.md) |  | [optional] 

## Methods

### NewSloIncidentListDto

`func NewSloIncidentListDto() *SloIncidentListDto`

NewSloIncidentListDto instantiates a new SloIncidentListDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloIncidentListDtoWithDefaults

`func NewSloIncidentListDtoWithDefaults() *SloIncidentListDto`

NewSloIncidentListDtoWithDefaults instantiates a new SloIncidentListDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncidents

`func (o *SloIncidentListDto) GetIncidents() []IncidentDto`

GetIncidents returns the Incidents field if non-nil, zero value otherwise.

### GetIncidentsOk

`func (o *SloIncidentListDto) GetIncidentsOk() (*[]IncidentDto, bool)`

GetIncidentsOk returns a tuple with the Incidents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidents

`func (o *SloIncidentListDto) SetIncidents(v []IncidentDto)`

SetIncidents sets Incidents field to given value.

### HasIncidents

`func (o *SloIncidentListDto) HasIncidents() bool`

HasIncidents returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


