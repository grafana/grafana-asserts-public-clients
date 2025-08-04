# SpanAttributeConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Namespace** | Pointer to **string** |  | [optional] 
**Service** | Pointer to **string** |  | [optional] 
**Rules** | Pointer to [**[]CustomAttributeConfigDto**](CustomAttributeConfigDto.md) |  | [optional] 

## Methods

### NewSpanAttributeConfigDto

`func NewSpanAttributeConfigDto() *SpanAttributeConfigDto`

NewSpanAttributeConfigDto instantiates a new SpanAttributeConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpanAttributeConfigDtoWithDefaults

`func NewSpanAttributeConfigDtoWithDefaults() *SpanAttributeConfigDto`

NewSpanAttributeConfigDtoWithDefaults instantiates a new SpanAttributeConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNamespace

`func (o *SpanAttributeConfigDto) GetNamespace() string`

GetNamespace returns the Namespace field if non-nil, zero value otherwise.

### GetNamespaceOk

`func (o *SpanAttributeConfigDto) GetNamespaceOk() (*string, bool)`

GetNamespaceOk returns a tuple with the Namespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamespace

`func (o *SpanAttributeConfigDto) SetNamespace(v string)`

SetNamespace sets Namespace field to given value.

### HasNamespace

`func (o *SpanAttributeConfigDto) HasNamespace() bool`

HasNamespace returns a boolean if a field has been set.

### GetService

`func (o *SpanAttributeConfigDto) GetService() string`

GetService returns the Service field if non-nil, zero value otherwise.

### GetServiceOk

`func (o *SpanAttributeConfigDto) GetServiceOk() (*string, bool)`

GetServiceOk returns a tuple with the Service field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetService

`func (o *SpanAttributeConfigDto) SetService(v string)`

SetService sets Service field to given value.

### HasService

`func (o *SpanAttributeConfigDto) HasService() bool`

HasService returns a boolean if a field has been set.

### GetRules

`func (o *SpanAttributeConfigDto) GetRules() []CustomAttributeConfigDto`

GetRules returns the Rules field if non-nil, zero value otherwise.

### GetRulesOk

`func (o *SpanAttributeConfigDto) GetRulesOk() (*[]CustomAttributeConfigDto, bool)`

GetRulesOk returns a tuple with the Rules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRules

`func (o *SpanAttributeConfigDto) SetRules(v []CustomAttributeConfigDto)`

SetRules sets Rules field to given value.

### HasRules

`func (o *SpanAttributeConfigDto) HasRules() bool`

HasRules returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


