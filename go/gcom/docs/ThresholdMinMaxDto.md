# ThresholdMinMaxDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LowerBoundQuery** | Pointer to **string** |  | [optional] 
**UpperBoundQuery** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]ThresholdValueMinMaxDto**](ThresholdValueMinMaxDto.md) |  | [optional] 
**FillZeros** | Pointer to **bool** |  | [optional] 

## Methods

### NewThresholdMinMaxDto

`func NewThresholdMinMaxDto() *ThresholdMinMaxDto`

NewThresholdMinMaxDto instantiates a new ThresholdMinMaxDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdMinMaxDtoWithDefaults

`func NewThresholdMinMaxDtoWithDefaults() *ThresholdMinMaxDto`

NewThresholdMinMaxDtoWithDefaults instantiates a new ThresholdMinMaxDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLowerBoundQuery

`func (o *ThresholdMinMaxDto) GetLowerBoundQuery() string`

GetLowerBoundQuery returns the LowerBoundQuery field if non-nil, zero value otherwise.

### GetLowerBoundQueryOk

`func (o *ThresholdMinMaxDto) GetLowerBoundQueryOk() (*string, bool)`

GetLowerBoundQueryOk returns a tuple with the LowerBoundQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLowerBoundQuery

`func (o *ThresholdMinMaxDto) SetLowerBoundQuery(v string)`

SetLowerBoundQuery sets LowerBoundQuery field to given value.

### HasLowerBoundQuery

`func (o *ThresholdMinMaxDto) HasLowerBoundQuery() bool`

HasLowerBoundQuery returns a boolean if a field has been set.

### GetUpperBoundQuery

`func (o *ThresholdMinMaxDto) GetUpperBoundQuery() string`

GetUpperBoundQuery returns the UpperBoundQuery field if non-nil, zero value otherwise.

### GetUpperBoundQueryOk

`func (o *ThresholdMinMaxDto) GetUpperBoundQueryOk() (*string, bool)`

GetUpperBoundQueryOk returns a tuple with the UpperBoundQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpperBoundQuery

`func (o *ThresholdMinMaxDto) SetUpperBoundQuery(v string)`

SetUpperBoundQuery sets UpperBoundQuery field to given value.

### HasUpperBoundQuery

`func (o *ThresholdMinMaxDto) HasUpperBoundQuery() bool`

HasUpperBoundQuery returns a boolean if a field has been set.

### GetValues

`func (o *ThresholdMinMaxDto) GetValues() []ThresholdValueMinMaxDto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *ThresholdMinMaxDto) GetValuesOk() (*[]ThresholdValueMinMaxDto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *ThresholdMinMaxDto) SetValues(v []ThresholdValueMinMaxDto)`

SetValues sets Values field to given value.

### HasValues

`func (o *ThresholdMinMaxDto) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetFillZeros

`func (o *ThresholdMinMaxDto) GetFillZeros() bool`

GetFillZeros returns the FillZeros field if non-nil, zero value otherwise.

### GetFillZerosOk

`func (o *ThresholdMinMaxDto) GetFillZerosOk() (*bool, bool)`

GetFillZerosOk returns a tuple with the FillZeros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillZeros

`func (o *ThresholdMinMaxDto) SetFillZeros(v bool)`

SetFillZeros sets FillZeros field to given value.

### HasFillZeros

`func (o *ThresholdMinMaxDto) HasFillZeros() bool`

HasFillZeros returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


