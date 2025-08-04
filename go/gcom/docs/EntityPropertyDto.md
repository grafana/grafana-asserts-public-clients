# EntityPropertyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Uom** | Pointer to **string** |  | [optional] 

## Methods

### NewEntityPropertyDto

`func NewEntityPropertyDto() *EntityPropertyDto`

NewEntityPropertyDto instantiates a new EntityPropertyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityPropertyDtoWithDefaults

`func NewEntityPropertyDtoWithDefaults() *EntityPropertyDto`

NewEntityPropertyDtoWithDefaults instantiates a new EntityPropertyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EntityPropertyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityPropertyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityPropertyDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityPropertyDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *EntityPropertyDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityPropertyDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityPropertyDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityPropertyDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUom

`func (o *EntityPropertyDto) GetUom() string`

GetUom returns the Uom field if non-nil, zero value otherwise.

### GetUomOk

`func (o *EntityPropertyDto) GetUomOk() (*string, bool)`

GetUomOk returns a tuple with the Uom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUom

`func (o *EntityPropertyDto) SetUom(v string)`

SetUom sets Uom field to given value.

### HasUom

`func (o *EntityPropertyDto) HasUom() bool`

HasUom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


