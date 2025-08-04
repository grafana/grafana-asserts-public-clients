# SpanAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttrName** | Pointer to **string** |  | [optional] 
**AttrConfigs** | Pointer to [**[]SpanAttributeConfigDto**](SpanAttributeConfigDto.md) |  | [optional] 

## Methods

### NewSpanAttributeDto

`func NewSpanAttributeDto() *SpanAttributeDto`

NewSpanAttributeDto instantiates a new SpanAttributeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpanAttributeDtoWithDefaults

`func NewSpanAttributeDtoWithDefaults() *SpanAttributeDto`

NewSpanAttributeDtoWithDefaults instantiates a new SpanAttributeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttrName

`func (o *SpanAttributeDto) GetAttrName() string`

GetAttrName returns the AttrName field if non-nil, zero value otherwise.

### GetAttrNameOk

`func (o *SpanAttributeDto) GetAttrNameOk() (*string, bool)`

GetAttrNameOk returns a tuple with the AttrName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttrName

`func (o *SpanAttributeDto) SetAttrName(v string)`

SetAttrName sets AttrName field to given value.

### HasAttrName

`func (o *SpanAttributeDto) HasAttrName() bool`

HasAttrName returns a boolean if a field has been set.

### GetAttrConfigs

`func (o *SpanAttributeDto) GetAttrConfigs() []SpanAttributeConfigDto`

GetAttrConfigs returns the AttrConfigs field if non-nil, zero value otherwise.

### GetAttrConfigsOk

`func (o *SpanAttributeDto) GetAttrConfigsOk() (*[]SpanAttributeConfigDto, bool)`

GetAttrConfigsOk returns a tuple with the AttrConfigs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttrConfigs

`func (o *SpanAttributeDto) SetAttrConfigs(v []SpanAttributeConfigDto)`

SetAttrConfigs sets AttrConfigs field to given value.

### HasAttrConfigs

`func (o *SpanAttributeDto) HasAttrConfigs() bool`

HasAttrConfigs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


