# CustomAttributeConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SpanKinds** | Pointer to **[]string** |  | [optional] 
**SourceAttributes** | Pointer to **[]string** |  | [optional] 
**Regex** | Pointer to **string** |  | [optional] 
**ValueExpr** | Pointer to **string** |  | [optional] 

## Methods

### NewCustomAttributeConfigDto

`func NewCustomAttributeConfigDto() *CustomAttributeConfigDto`

NewCustomAttributeConfigDto instantiates a new CustomAttributeConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomAttributeConfigDtoWithDefaults

`func NewCustomAttributeConfigDtoWithDefaults() *CustomAttributeConfigDto`

NewCustomAttributeConfigDtoWithDefaults instantiates a new CustomAttributeConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSpanKinds

`func (o *CustomAttributeConfigDto) GetSpanKinds() []string`

GetSpanKinds returns the SpanKinds field if non-nil, zero value otherwise.

### GetSpanKindsOk

`func (o *CustomAttributeConfigDto) GetSpanKindsOk() (*[]string, bool)`

GetSpanKindsOk returns a tuple with the SpanKinds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpanKinds

`func (o *CustomAttributeConfigDto) SetSpanKinds(v []string)`

SetSpanKinds sets SpanKinds field to given value.

### HasSpanKinds

`func (o *CustomAttributeConfigDto) HasSpanKinds() bool`

HasSpanKinds returns a boolean if a field has been set.

### GetSourceAttributes

`func (o *CustomAttributeConfigDto) GetSourceAttributes() []string`

GetSourceAttributes returns the SourceAttributes field if non-nil, zero value otherwise.

### GetSourceAttributesOk

`func (o *CustomAttributeConfigDto) GetSourceAttributesOk() (*[]string, bool)`

GetSourceAttributesOk returns a tuple with the SourceAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributes

`func (o *CustomAttributeConfigDto) SetSourceAttributes(v []string)`

SetSourceAttributes sets SourceAttributes field to given value.

### HasSourceAttributes

`func (o *CustomAttributeConfigDto) HasSourceAttributes() bool`

HasSourceAttributes returns a boolean if a field has been set.

### GetRegex

`func (o *CustomAttributeConfigDto) GetRegex() string`

GetRegex returns the Regex field if non-nil, zero value otherwise.

### GetRegexOk

`func (o *CustomAttributeConfigDto) GetRegexOk() (*string, bool)`

GetRegexOk returns a tuple with the Regex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegex

`func (o *CustomAttributeConfigDto) SetRegex(v string)`

SetRegex sets Regex field to given value.

### HasRegex

`func (o *CustomAttributeConfigDto) HasRegex() bool`

HasRegex returns a boolean if a field has been set.

### GetValueExpr

`func (o *CustomAttributeConfigDto) GetValueExpr() string`

GetValueExpr returns the ValueExpr field if non-nil, zero value otherwise.

### GetValueExprOk

`func (o *CustomAttributeConfigDto) GetValueExprOk() (*string, bool)`

GetValueExprOk returns a tuple with the ValueExpr field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueExpr

`func (o *CustomAttributeConfigDto) SetValueExpr(v string)`

SetValueExpr sets ValueExpr field to given value.

### HasValueExpr

`func (o *CustomAttributeConfigDto) HasValueExpr() bool`

HasValueExpr returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


