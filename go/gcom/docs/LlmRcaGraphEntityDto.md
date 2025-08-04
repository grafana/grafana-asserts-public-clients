# LlmRcaGraphEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 
**Relations** | Pointer to [**map[string][]EntityKeyDto**](array.md) |  | [optional] 

## Methods

### NewLlmRcaGraphEntityDto

`func NewLlmRcaGraphEntityDto() *LlmRcaGraphEntityDto`

NewLlmRcaGraphEntityDto instantiates a new LlmRcaGraphEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLlmRcaGraphEntityDtoWithDefaults

`func NewLlmRcaGraphEntityDtoWithDefaults() *LlmRcaGraphEntityDto`

NewLlmRcaGraphEntityDtoWithDefaults instantiates a new LlmRcaGraphEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LlmRcaGraphEntityDto) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LlmRcaGraphEntityDto) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LlmRcaGraphEntityDto) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *LlmRcaGraphEntityDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *LlmRcaGraphEntityDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LlmRcaGraphEntityDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LlmRcaGraphEntityDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LlmRcaGraphEntityDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *LlmRcaGraphEntityDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LlmRcaGraphEntityDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LlmRcaGraphEntityDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *LlmRcaGraphEntityDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *LlmRcaGraphEntityDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *LlmRcaGraphEntityDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *LlmRcaGraphEntityDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *LlmRcaGraphEntityDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetProperties

`func (o *LlmRcaGraphEntityDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *LlmRcaGraphEntityDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *LlmRcaGraphEntityDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *LlmRcaGraphEntityDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetRelations

`func (o *LlmRcaGraphEntityDto) GetRelations() map[string][]EntityKeyDto`

GetRelations returns the Relations field if non-nil, zero value otherwise.

### GetRelationsOk

`func (o *LlmRcaGraphEntityDto) GetRelationsOk() (*map[string][]EntityKeyDto, bool)`

GetRelationsOk returns a tuple with the Relations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelations

`func (o *LlmRcaGraphEntityDto) SetRelations(v map[string][]EntityKeyDto)`

SetRelations sets Relations field to given value.

### HasRelations

`func (o *LlmRcaGraphEntityDto) HasRelations() bool`

HasRelations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


