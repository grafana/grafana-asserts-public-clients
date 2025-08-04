# SloDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Action** | Pointer to **string** |  | [optional] 
**BadEventQuery** | Pointer to **string** |  | [optional] 
**TotalEventQuery** | Pointer to **string** |  | [optional] 
**MeasurementQuery** | Pointer to **string** |  | [optional] 
**SloTargetDtos** | Pointer to [**[]SloTargetDto**](SloTargetDto.md) |  | [optional] 
**NoData** | Pointer to **bool** |  | [optional] 

## Methods

### NewSloDto

`func NewSloDto() *SloDto`

NewSloDto instantiates a new SloDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloDtoWithDefaults

`func NewSloDtoWithDefaults() *SloDto`

NewSloDtoWithDefaults instantiates a new SloDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SloDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SloDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SloDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SloDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *SloDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *SloDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *SloDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *SloDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetType

`func (o *SloDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SloDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SloDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SloDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAction

`func (o *SloDto) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *SloDto) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *SloDto) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *SloDto) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetBadEventQuery

`func (o *SloDto) GetBadEventQuery() string`

GetBadEventQuery returns the BadEventQuery field if non-nil, zero value otherwise.

### GetBadEventQueryOk

`func (o *SloDto) GetBadEventQueryOk() (*string, bool)`

GetBadEventQueryOk returns a tuple with the BadEventQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBadEventQuery

`func (o *SloDto) SetBadEventQuery(v string)`

SetBadEventQuery sets BadEventQuery field to given value.

### HasBadEventQuery

`func (o *SloDto) HasBadEventQuery() bool`

HasBadEventQuery returns a boolean if a field has been set.

### GetTotalEventQuery

`func (o *SloDto) GetTotalEventQuery() string`

GetTotalEventQuery returns the TotalEventQuery field if non-nil, zero value otherwise.

### GetTotalEventQueryOk

`func (o *SloDto) GetTotalEventQueryOk() (*string, bool)`

GetTotalEventQueryOk returns a tuple with the TotalEventQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalEventQuery

`func (o *SloDto) SetTotalEventQuery(v string)`

SetTotalEventQuery sets TotalEventQuery field to given value.

### HasTotalEventQuery

`func (o *SloDto) HasTotalEventQuery() bool`

HasTotalEventQuery returns a boolean if a field has been set.

### GetMeasurementQuery

`func (o *SloDto) GetMeasurementQuery() string`

GetMeasurementQuery returns the MeasurementQuery field if non-nil, zero value otherwise.

### GetMeasurementQueryOk

`func (o *SloDto) GetMeasurementQueryOk() (*string, bool)`

GetMeasurementQueryOk returns a tuple with the MeasurementQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeasurementQuery

`func (o *SloDto) SetMeasurementQuery(v string)`

SetMeasurementQuery sets MeasurementQuery field to given value.

### HasMeasurementQuery

`func (o *SloDto) HasMeasurementQuery() bool`

HasMeasurementQuery returns a boolean if a field has been set.

### GetSloTargetDtos

`func (o *SloDto) GetSloTargetDtos() []SloTargetDto`

GetSloTargetDtos returns the SloTargetDtos field if non-nil, zero value otherwise.

### GetSloTargetDtosOk

`func (o *SloDto) GetSloTargetDtosOk() (*[]SloTargetDto, bool)`

GetSloTargetDtosOk returns a tuple with the SloTargetDtos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSloTargetDtos

`func (o *SloDto) SetSloTargetDtos(v []SloTargetDto)`

SetSloTargetDtos sets SloTargetDtos field to given value.

### HasSloTargetDtos

`func (o *SloDto) HasSloTargetDtos() bool`

HasSloTargetDtos returns a boolean if a field has been set.

### GetNoData

`func (o *SloDto) GetNoData() bool`

GetNoData returns the NoData field if non-nil, zero value otherwise.

### GetNoDataOk

`func (o *SloDto) GetNoDataOk() (*bool, bool)`

GetNoDataOk returns a tuple with the NoData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoData

`func (o *SloDto) SetNoData(v bool)`

SetNoData sets NoData field to given value.

### HasNoData

`func (o *SloDto) HasNoData() bool`

HasNoData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


