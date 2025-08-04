# DisabledAlertConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**MatchLabels** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewDisabledAlertConfigDto

`func NewDisabledAlertConfigDto() *DisabledAlertConfigDto`

NewDisabledAlertConfigDto instantiates a new DisabledAlertConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDisabledAlertConfigDtoWithDefaults

`func NewDisabledAlertConfigDtoWithDefaults() *DisabledAlertConfigDto`

NewDisabledAlertConfigDtoWithDefaults instantiates a new DisabledAlertConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *DisabledAlertConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DisabledAlertConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DisabledAlertConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DisabledAlertConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMatchLabels

`func (o *DisabledAlertConfigDto) GetMatchLabels() map[string]string`

GetMatchLabels returns the MatchLabels field if non-nil, zero value otherwise.

### GetMatchLabelsOk

`func (o *DisabledAlertConfigDto) GetMatchLabelsOk() (*map[string]string, bool)`

GetMatchLabelsOk returns a tuple with the MatchLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchLabels

`func (o *DisabledAlertConfigDto) SetMatchLabels(v map[string]string)`

SetMatchLabels sets MatchLabels field to given value.

### HasMatchLabels

`func (o *DisabledAlertConfigDto) HasMatchLabels() bool`

HasMatchLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


