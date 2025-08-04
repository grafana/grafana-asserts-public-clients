# SearchDefinitionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Indexed** | Pointer to **bool** |  | [optional] 
**DescribedQuery** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**RawQuery** | Pointer to **string** |  | [optional] 
**Bindings** | Pointer to [**map[string]SearchDefinitionBindingDto**](SearchDefinitionBindingDto.md) |  | [optional] 
**TypeDetails** | Pointer to [**SearchDefinitionTypeDetailsDto**](SearchDefinitionTypeDetailsDto.md) |  | [optional] 
**FilterCriteria** | Pointer to [**[]EntityMatcherDto**](EntityMatcherDto.md) |  | [optional] 

## Methods

### NewSearchDefinitionDto

`func NewSearchDefinitionDto() *SearchDefinitionDto`

NewSearchDefinitionDto instantiates a new SearchDefinitionDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchDefinitionDtoWithDefaults

`func NewSearchDefinitionDtoWithDefaults() *SearchDefinitionDto`

NewSearchDefinitionDtoWithDefaults instantiates a new SearchDefinitionDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SearchDefinitionDto) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SearchDefinitionDto) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SearchDefinitionDto) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *SearchDefinitionDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIndexed

`func (o *SearchDefinitionDto) GetIndexed() bool`

GetIndexed returns the Indexed field if non-nil, zero value otherwise.

### GetIndexedOk

`func (o *SearchDefinitionDto) GetIndexedOk() (*bool, bool)`

GetIndexedOk returns a tuple with the Indexed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndexed

`func (o *SearchDefinitionDto) SetIndexed(v bool)`

SetIndexed sets Indexed field to given value.

### HasIndexed

`func (o *SearchDefinitionDto) HasIndexed() bool`

HasIndexed returns a boolean if a field has been set.

### GetDescribedQuery

`func (o *SearchDefinitionDto) GetDescribedQuery() string`

GetDescribedQuery returns the DescribedQuery field if non-nil, zero value otherwise.

### GetDescribedQueryOk

`func (o *SearchDefinitionDto) GetDescribedQueryOk() (*string, bool)`

GetDescribedQueryOk returns a tuple with the DescribedQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescribedQuery

`func (o *SearchDefinitionDto) SetDescribedQuery(v string)`

SetDescribedQuery sets DescribedQuery field to given value.

### HasDescribedQuery

`func (o *SearchDefinitionDto) HasDescribedQuery() bool`

HasDescribedQuery returns a boolean if a field has been set.

### GetDescription

`func (o *SearchDefinitionDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SearchDefinitionDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SearchDefinitionDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SearchDefinitionDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRawQuery

`func (o *SearchDefinitionDto) GetRawQuery() string`

GetRawQuery returns the RawQuery field if non-nil, zero value otherwise.

### GetRawQueryOk

`func (o *SearchDefinitionDto) GetRawQueryOk() (*string, bool)`

GetRawQueryOk returns a tuple with the RawQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRawQuery

`func (o *SearchDefinitionDto) SetRawQuery(v string)`

SetRawQuery sets RawQuery field to given value.

### HasRawQuery

`func (o *SearchDefinitionDto) HasRawQuery() bool`

HasRawQuery returns a boolean if a field has been set.

### GetBindings

`func (o *SearchDefinitionDto) GetBindings() map[string]SearchDefinitionBindingDto`

GetBindings returns the Bindings field if non-nil, zero value otherwise.

### GetBindingsOk

`func (o *SearchDefinitionDto) GetBindingsOk() (*map[string]SearchDefinitionBindingDto, bool)`

GetBindingsOk returns a tuple with the Bindings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBindings

`func (o *SearchDefinitionDto) SetBindings(v map[string]SearchDefinitionBindingDto)`

SetBindings sets Bindings field to given value.

### HasBindings

`func (o *SearchDefinitionDto) HasBindings() bool`

HasBindings returns a boolean if a field has been set.

### GetTypeDetails

`func (o *SearchDefinitionDto) GetTypeDetails() SearchDefinitionTypeDetailsDto`

GetTypeDetails returns the TypeDetails field if non-nil, zero value otherwise.

### GetTypeDetailsOk

`func (o *SearchDefinitionDto) GetTypeDetailsOk() (*SearchDefinitionTypeDetailsDto, bool)`

GetTypeDetailsOk returns a tuple with the TypeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDetails

`func (o *SearchDefinitionDto) SetTypeDetails(v SearchDefinitionTypeDetailsDto)`

SetTypeDetails sets TypeDetails field to given value.

### HasTypeDetails

`func (o *SearchDefinitionDto) HasTypeDetails() bool`

HasTypeDetails returns a boolean if a field has been set.

### GetFilterCriteria

`func (o *SearchDefinitionDto) GetFilterCriteria() []EntityMatcherDto`

GetFilterCriteria returns the FilterCriteria field if non-nil, zero value otherwise.

### GetFilterCriteriaOk

`func (o *SearchDefinitionDto) GetFilterCriteriaOk() (*[]EntityMatcherDto, bool)`

GetFilterCriteriaOk returns a tuple with the FilterCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilterCriteria

`func (o *SearchDefinitionDto) SetFilterCriteria(v []EntityMatcherDto)`

SetFilterCriteria sets FilterCriteria field to given value.

### HasFilterCriteria

`func (o *SearchDefinitionDto) HasFilterCriteria() bool`

HasFilterCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


