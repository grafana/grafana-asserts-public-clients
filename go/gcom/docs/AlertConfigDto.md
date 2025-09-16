# AlertConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**MatchLabels** | Pointer to **map[string]string** |  | [optional] 
**AlertLabels** | Pointer to **map[string]string** |  | [optional] 
**Annotations** | Pointer to **map[string]string** |  | [optional] 
**Silenced** | Pointer to **bool** |  | [optional] 
**For** | Pointer to **string** |  | [optional] 

## Methods

### NewAlertConfigDto

`func NewAlertConfigDto() *AlertConfigDto`

NewAlertConfigDto instantiates a new AlertConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlertConfigDtoWithDefaults

`func NewAlertConfigDtoWithDefaults() *AlertConfigDto`

NewAlertConfigDtoWithDefaults instantiates a new AlertConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AlertConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AlertConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AlertConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AlertConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetMatchLabels

`func (o *AlertConfigDto) GetMatchLabels() map[string]string`

GetMatchLabels returns the MatchLabels field if non-nil, zero value otherwise.

### GetMatchLabelsOk

`func (o *AlertConfigDto) GetMatchLabelsOk() (*map[string]string, bool)`

GetMatchLabelsOk returns a tuple with the MatchLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchLabels

`func (o *AlertConfigDto) SetMatchLabels(v map[string]string)`

SetMatchLabels sets MatchLabels field to given value.

### HasMatchLabels

`func (o *AlertConfigDto) HasMatchLabels() bool`

HasMatchLabels returns a boolean if a field has been set.

### GetAlertLabels

`func (o *AlertConfigDto) GetAlertLabels() map[string]string`

GetAlertLabels returns the AlertLabels field if non-nil, zero value otherwise.

### GetAlertLabelsOk

`func (o *AlertConfigDto) GetAlertLabelsOk() (*map[string]string, bool)`

GetAlertLabelsOk returns a tuple with the AlertLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertLabels

`func (o *AlertConfigDto) SetAlertLabels(v map[string]string)`

SetAlertLabels sets AlertLabels field to given value.

### HasAlertLabels

`func (o *AlertConfigDto) HasAlertLabels() bool`

HasAlertLabels returns a boolean if a field has been set.

### GetAnnotations

`func (o *AlertConfigDto) GetAnnotations() map[string]string`

GetAnnotations returns the Annotations field if non-nil, zero value otherwise.

### GetAnnotationsOk

`func (o *AlertConfigDto) GetAnnotationsOk() (*map[string]string, bool)`

GetAnnotationsOk returns a tuple with the Annotations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnnotations

`func (o *AlertConfigDto) SetAnnotations(v map[string]string)`

SetAnnotations sets Annotations field to given value.

### HasAnnotations

`func (o *AlertConfigDto) HasAnnotations() bool`

HasAnnotations returns a boolean if a field has been set.

### GetSilenced

`func (o *AlertConfigDto) GetSilenced() bool`

GetSilenced returns the Silenced field if non-nil, zero value otherwise.

### GetSilencedOk

`func (o *AlertConfigDto) GetSilencedOk() (*bool, bool)`

GetSilencedOk returns a tuple with the Silenced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSilenced

`func (o *AlertConfigDto) SetSilenced(v bool)`

SetSilenced sets Silenced field to given value.

### HasSilenced

`func (o *AlertConfigDto) HasSilenced() bool`

HasSilenced returns a boolean if a field has been set.

### GetFor

`func (o *AlertConfigDto) GetFor() string`

GetFor returns the For field if non-nil, zero value otherwise.

### GetForOk

`func (o *AlertConfigDto) GetForOk() (*string, bool)`

GetForOk returns a tuple with the For field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFor

`func (o *AlertConfigDto) SetFor(v string)`

SetFor sets For field to given value.

### HasFor

`func (o *AlertConfigDto) HasFor() bool`

HasFor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


