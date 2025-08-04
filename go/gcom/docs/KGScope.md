# KGScope

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyMatcher** | Pointer to **map[string]interface{}** |  | [optional] 
**ScopeNames** | Pointer to **map[string]interface{}** |  | [optional] 
**Scope** | Pointer to [**GraphEntityScope**](GraphEntityScope.md) |  | [optional] 

## Methods

### NewKGScope

`func NewKGScope() *KGScope`

NewKGScope instantiates a new KGScope object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKGScopeWithDefaults

`func NewKGScopeWithDefaults() *KGScope`

NewKGScopeWithDefaults instantiates a new KGScope object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyMatcher

`func (o *KGScope) GetPropertyMatcher() map[string]interface{}`

GetPropertyMatcher returns the PropertyMatcher field if non-nil, zero value otherwise.

### GetPropertyMatcherOk

`func (o *KGScope) GetPropertyMatcherOk() (*map[string]interface{}, bool)`

GetPropertyMatcherOk returns a tuple with the PropertyMatcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatcher

`func (o *KGScope) SetPropertyMatcher(v map[string]interface{})`

SetPropertyMatcher sets PropertyMatcher field to given value.

### HasPropertyMatcher

`func (o *KGScope) HasPropertyMatcher() bool`

HasPropertyMatcher returns a boolean if a field has been set.

### GetScopeNames

`func (o *KGScope) GetScopeNames() map[string]interface{}`

GetScopeNames returns the ScopeNames field if non-nil, zero value otherwise.

### GetScopeNamesOk

`func (o *KGScope) GetScopeNamesOk() (*map[string]interface{}, bool)`

GetScopeNamesOk returns a tuple with the ScopeNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeNames

`func (o *KGScope) SetScopeNames(v map[string]interface{})`

SetScopeNames sets ScopeNames field to given value.

### HasScopeNames

`func (o *KGScope) HasScopeNames() bool`

HasScopeNames returns a boolean if a field has been set.

### GetScope

`func (o *KGScope) GetScope() GraphEntityScope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *KGScope) GetScopeOk() (*GraphEntityScope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *KGScope) SetScope(v GraphEntityScope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *KGScope) HasScope() bool`

HasScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


