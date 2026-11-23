# KgQueryRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Select** | [**KgSelectDto**](KgSelectDto.md) |  | 
**TimeCriteria** | Pointer to [**KgTimeCriteriaDto**](KgTimeCriteriaDto.md) |  | [optional] 
**Limit** | Pointer to **int32** | Maximum entities to return. Omitted means min(300, configured maximum). The default maximum is 2000; a tenant ceiling also applies. | [optional] 
**Offset** | Pointer to **int32** | Rows of the ordered match to skip before the window: offset&#x3D;300, limit&#x3D;300 is the second page. Omitted means 0. Ordering is the server-fixed identity order, so the same offset means the same window on replay. Page until the response&#39;s truncated is false. Entities identical on every ordering key have no defined relative order across a page boundary. | [optional] 
**ValidateOnly** | Pointer to **bool** | Validate and compile the request without executing it against the graph. | [optional] [default to false]

## Methods

### NewKgQueryRequestDto

`func NewKgQueryRequestDto(select_ KgSelectDto, ) *KgQueryRequestDto`

NewKgQueryRequestDto instantiates a new KgQueryRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgQueryRequestDtoWithDefaults

`func NewKgQueryRequestDtoWithDefaults() *KgQueryRequestDto`

NewKgQueryRequestDtoWithDefaults instantiates a new KgQueryRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSelect

`func (o *KgQueryRequestDto) GetSelect() KgSelectDto`

GetSelect returns the Select field if non-nil, zero value otherwise.

### GetSelectOk

`func (o *KgQueryRequestDto) GetSelectOk() (*KgSelectDto, bool)`

GetSelectOk returns a tuple with the Select field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelect

`func (o *KgQueryRequestDto) SetSelect(v KgSelectDto)`

SetSelect sets Select field to given value.


### GetTimeCriteria

`func (o *KgQueryRequestDto) GetTimeCriteria() KgTimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *KgQueryRequestDto) GetTimeCriteriaOk() (*KgTimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *KgQueryRequestDto) SetTimeCriteria(v KgTimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *KgQueryRequestDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetLimit

`func (o *KgQueryRequestDto) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *KgQueryRequestDto) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *KgQueryRequestDto) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *KgQueryRequestDto) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *KgQueryRequestDto) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *KgQueryRequestDto) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *KgQueryRequestDto) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *KgQueryRequestDto) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetValidateOnly

`func (o *KgQueryRequestDto) GetValidateOnly() bool`

GetValidateOnly returns the ValidateOnly field if non-nil, zero value otherwise.

### GetValidateOnlyOk

`func (o *KgQueryRequestDto) GetValidateOnlyOk() (*bool, bool)`

GetValidateOnlyOk returns a tuple with the ValidateOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateOnly

`func (o *KgQueryRequestDto) SetValidateOnly(v bool)`

SetValidateOnly sets ValidateOnly field to given value.

### HasValidateOnly

`func (o *KgQueryRequestDto) HasValidateOnly() bool`

HasValidateOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


