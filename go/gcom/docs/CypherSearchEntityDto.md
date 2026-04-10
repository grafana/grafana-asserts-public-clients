# CypherSearchEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 
**Insights** | Pointer to [**[]CypherSearchInsightDto**](CypherSearchInsightDto.md) |  | [optional] 
**ConnectedInsights** | Pointer to [**[]CypherSearchInsightDto**](CypherSearchInsightDto.md) |  | [optional] 

## Methods

### NewCypherSearchEntityDto

`func NewCypherSearchEntityDto() *CypherSearchEntityDto`

NewCypherSearchEntityDto instantiates a new CypherSearchEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCypherSearchEntityDtoWithDefaults

`func NewCypherSearchEntityDtoWithDefaults() *CypherSearchEntityDto`

NewCypherSearchEntityDtoWithDefaults instantiates a new CypherSearchEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CypherSearchEntityDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CypherSearchEntityDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CypherSearchEntityDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CypherSearchEntityDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *CypherSearchEntityDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CypherSearchEntityDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CypherSearchEntityDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CypherSearchEntityDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *CypherSearchEntityDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *CypherSearchEntityDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *CypherSearchEntityDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *CypherSearchEntityDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetProperties

`func (o *CypherSearchEntityDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *CypherSearchEntityDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *CypherSearchEntityDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *CypherSearchEntityDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetInsights

`func (o *CypherSearchEntityDto) GetInsights() []CypherSearchInsightDto`

GetInsights returns the Insights field if non-nil, zero value otherwise.

### GetInsightsOk

`func (o *CypherSearchEntityDto) GetInsightsOk() (*[]CypherSearchInsightDto, bool)`

GetInsightsOk returns a tuple with the Insights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsights

`func (o *CypherSearchEntityDto) SetInsights(v []CypherSearchInsightDto)`

SetInsights sets Insights field to given value.

### HasInsights

`func (o *CypherSearchEntityDto) HasInsights() bool`

HasInsights returns a boolean if a field has been set.

### GetConnectedInsights

`func (o *CypherSearchEntityDto) GetConnectedInsights() []CypherSearchInsightDto`

GetConnectedInsights returns the ConnectedInsights field if non-nil, zero value otherwise.

### GetConnectedInsightsOk

`func (o *CypherSearchEntityDto) GetConnectedInsightsOk() (*[]CypherSearchInsightDto, bool)`

GetConnectedInsightsOk returns a tuple with the ConnectedInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedInsights

`func (o *CypherSearchEntityDto) SetConnectedInsights(v []CypherSearchInsightDto)`

SetConnectedInsights sets ConnectedInsights field to given value.

### HasConnectedInsights

`func (o *CypherSearchEntityDto) HasConnectedInsights() bool`

HasConnectedInsights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


