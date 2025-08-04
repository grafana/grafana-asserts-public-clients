# ThresholdSingleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]ThresholdValueSingleDto**](ThresholdValueSingleDto.md) |  | [optional] 
**FillZeros** | Pointer to **bool** |  | [optional] 

## Methods

### NewThresholdSingleDto

`func NewThresholdSingleDto() *ThresholdSingleDto`

NewThresholdSingleDto instantiates a new ThresholdSingleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdSingleDtoWithDefaults

`func NewThresholdSingleDtoWithDefaults() *ThresholdSingleDto`

NewThresholdSingleDtoWithDefaults instantiates a new ThresholdSingleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *ThresholdSingleDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *ThresholdSingleDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *ThresholdSingleDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *ThresholdSingleDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetValues

`func (o *ThresholdSingleDto) GetValues() []ThresholdValueSingleDto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ThresholdSingleDto) GetValuesOk() (*[]ThresholdValueSingleDto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ThresholdSingleDto) SetValues(v []ThresholdValueSingleDto)`

SetValues sets Values field to given value.

### HasValues

`func (o *ThresholdSingleDto) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetFillZeros

`func (o *ThresholdSingleDto) GetFillZeros() bool`

GetFillZeros returns the FillZeros field if non-nil, zero value otherwise.

### GetFillZerosOk

`func (o *ThresholdSingleDto) GetFillZerosOk() (*bool, bool)`

GetFillZerosOk returns a tuple with the FillZeros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillZeros

`func (o *ThresholdSingleDto) SetFillZeros(v bool)`

SetFillZeros sets FillZeros field to given value.

### HasFillZeros

`func (o *ThresholdSingleDto) HasFillZeros() bool`

HasFillZeros returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


