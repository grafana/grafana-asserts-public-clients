# KgQueryEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ref** | Pointer to [**EntityRefDto**](EntityRefDto.md) |  | [optional] 
**Anchor** | Pointer to **bool** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewKgQueryEntityDto

`func NewKgQueryEntityDto() *KgQueryEntityDto`

NewKgQueryEntityDto instantiates a new KgQueryEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgQueryEntityDtoWithDefaults

`func NewKgQueryEntityDtoWithDefaults() *KgQueryEntityDto`

NewKgQueryEntityDtoWithDefaults instantiates a new KgQueryEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRef

`func (o *KgQueryEntityDto) GetRef() EntityRefDto`

GetRef returns the Ref field if non-nil, zero value otherwise.

### GetRefOk

`func (o *KgQueryEntityDto) GetRefOk() (*EntityRefDto, bool)`

GetRefOk returns a tuple with the Ref field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRef

`func (o *KgQueryEntityDto) SetRef(v EntityRefDto)`

SetRef sets Ref field to given value.

### HasRef

`func (o *KgQueryEntityDto) HasRef() bool`

HasRef returns a boolean if a field has been set.

### GetAnchor

`func (o *KgQueryEntityDto) GetAnchor() bool`

GetAnchor returns the Anchor field if non-nil, zero value otherwise.

### GetAnchorOk

`func (o *KgQueryEntityDto) GetAnchorOk() (*bool, bool)`

GetAnchorOk returns a tuple with the Anchor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnchor

`func (o *KgQueryEntityDto) SetAnchor(v bool)`

SetAnchor sets Anchor field to given value.

### HasAnchor

`func (o *KgQueryEntityDto) HasAnchor() bool`

HasAnchor returns a boolean if a field has been set.

### GetProperties

`func (o *KgQueryEntityDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *KgQueryEntityDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *KgQueryEntityDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *KgQueryEntityDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


