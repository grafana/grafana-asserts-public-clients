# SloListDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Slos** | Pointer to [**[]SloDto**](SloDto.md) |  | [optional] 
**ChartNames** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSloListDto

`func NewSloListDto() *SloListDto`

NewSloListDto instantiates a new SloListDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloListDtoWithDefaults

`func NewSloListDtoWithDefaults() *SloListDto`

NewSloListDtoWithDefaults instantiates a new SloListDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSlos

`func (o *SloListDto) GetSlos() []SloDto`

GetSlos returns the Slos field if non-nil, zero value otherwise.

### GetSlosOk

`func (o *SloListDto) GetSlosOk() (*[]SloDto, bool)`

GetSlosOk returns a tuple with the Slos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlos

`func (o *SloListDto) SetSlos(v []SloDto)`

SetSlos sets Slos field to given value.

### HasSlos

`func (o *SloListDto) HasSlos() bool`

HasSlos returns a boolean if a field has been set.

### GetChartNames

`func (o *SloListDto) GetChartNames() []string`

GetChartNames returns the ChartNames field if non-nil, zero value otherwise.

### GetChartNamesOk

`func (o *SloListDto) GetChartNamesOk() (*[]string, bool)`

GetChartNamesOk returns a tuple with the ChartNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChartNames

`func (o *SloListDto) SetChartNames(v []string)`

SetChartNames sets ChartNames field to given value.

### HasChartNames

`func (o *SloListDto) HasChartNames() bool`

HasChartNames returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


