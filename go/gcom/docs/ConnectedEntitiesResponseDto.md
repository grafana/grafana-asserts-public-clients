# ConnectedEntitiesResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]EntityReadResponseDto**](EntityReadResponseDto.md) |  | [optional] 
**Limit** | Pointer to **int32** |  | [optional] 
**Offset** | Pointer to **int32** |  | [optional] 

## Methods

### NewConnectedEntitiesResponseDto

`func NewConnectedEntitiesResponseDto() *ConnectedEntitiesResponseDto`

NewConnectedEntitiesResponseDto instantiates a new ConnectedEntitiesResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConnectedEntitiesResponseDtoWithDefaults

`func NewConnectedEntitiesResponseDtoWithDefaults() *ConnectedEntitiesResponseDto`

NewConnectedEntitiesResponseDtoWithDefaults instantiates a new ConnectedEntitiesResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ConnectedEntitiesResponseDto) GetItems() []EntityReadResponseDto`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ConnectedEntitiesResponseDto) GetItemsOk() (*[]EntityReadResponseDto, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ConnectedEntitiesResponseDto) SetItems(v []EntityReadResponseDto)`

SetItems sets Items field to given value.

### HasItems

`func (o *ConnectedEntitiesResponseDto) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetLimit

`func (o *ConnectedEntitiesResponseDto) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ConnectedEntitiesResponseDto) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ConnectedEntitiesResponseDto) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ConnectedEntitiesResponseDto) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *ConnectedEntitiesResponseDto) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ConnectedEntitiesResponseDto) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ConnectedEntitiesResponseDto) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ConnectedEntitiesResponseDto) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


