# SloConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Ratio** | Pointer to **float64** |  | [optional] 
**Value** | Pointer to **float64** |  | [optional] 
**Window** | Pointer to [**SloConfigDtoWindow**](SloConfigDtoWindow.md) |  | [optional] 

## Methods

### NewSloConfigDto

`func NewSloConfigDto() *SloConfigDto`

NewSloConfigDto instantiates a new SloConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloConfigDtoWithDefaults

`func NewSloConfigDtoWithDefaults() *SloConfigDto`

NewSloConfigDtoWithDefaults instantiates a new SloConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SloConfigDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SloConfigDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SloConfigDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SloConfigDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetRatio

`func (o *SloConfigDto) GetRatio() float64`

GetRatio returns the Ratio field if non-nil, zero value otherwise.

### GetRatioOk

`func (o *SloConfigDto) GetRatioOk() (*float64, bool)`

GetRatioOk returns a tuple with the Ratio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatio

`func (o *SloConfigDto) SetRatio(v float64)`

SetRatio sets Ratio field to given value.

### HasRatio

`func (o *SloConfigDto) HasRatio() bool`

HasRatio returns a boolean if a field has been set.

### GetValue

`func (o *SloConfigDto) GetValue() float64`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SloConfigDto) GetValueOk() (*float64, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SloConfigDto) SetValue(v float64)`

SetValue sets Value field to given value.

### HasValue

`func (o *SloConfigDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetWindow

`func (o *SloConfigDto) GetWindow() SloConfigDtoWindow`

GetWindow returns the Window field if non-nil, zero value otherwise.

### GetWindowOk

`func (o *SloConfigDto) GetWindowOk() (*SloConfigDtoWindow, bool)`

GetWindowOk returns a tuple with the Window field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindow

`func (o *SloConfigDto) SetWindow(v SloConfigDtoWindow)`

SetWindow sets Window field to given value.

### HasWindow

`func (o *SloConfigDto) HasWindow() bool`

HasWindow returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


