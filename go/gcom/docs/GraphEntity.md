# GraphEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int64** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Active** | Pointer to **bool** |  | [optional] 
**ConnectedEntityTypes** | Pointer to **map[string]int32** |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 
**PropertyMatcher** | Pointer to **map[string]interface{}** |  | [optional] 
**ScopeNames** | Pointer to **map[string]interface{}** |  | [optional] 
**Scope** | Pointer to [**GraphEntityScope**](GraphEntityScope.md) |  | [optional] 
**Assertion** | Pointer to [**GraphAssertionSummary**](GraphAssertionSummary.md) |  | [optional] 
**ConnectedAssertion** | Pointer to [**GraphAssertionSummary**](GraphAssertionSummary.md) |  | [optional] 
**AssertionCount** | Pointer to **int32** |  | [optional] 
**Key** | Pointer to [**KGEntityKey**](KGEntityKey.md) |  | [optional] 

## Methods

### NewGraphEntity

`func NewGraphEntity() *GraphEntity`

NewGraphEntity instantiates a new GraphEntity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphEntityWithDefaults

`func NewGraphEntityWithDefaults() *GraphEntity`

NewGraphEntityWithDefaults instantiates a new GraphEntity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *GraphEntity) GetId() int64`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *GraphEntity) GetIdOk() (*int64, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *GraphEntity) SetId(v int64)`

SetId sets Id field to given value.

### HasId

`func (o *GraphEntity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *GraphEntity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *GraphEntity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *GraphEntity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *GraphEntity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *GraphEntity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *GraphEntity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *GraphEntity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *GraphEntity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetActive

`func (o *GraphEntity) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *GraphEntity) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *GraphEntity) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *GraphEntity) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetConnectedEntityTypes

`func (o *GraphEntity) GetConnectedEntityTypes() map[string]int32`

GetConnectedEntityTypes returns the ConnectedEntityTypes field if non-nil, zero value otherwise.

### GetConnectedEntityTypesOk

`func (o *GraphEntity) GetConnectedEntityTypesOk() (*map[string]int32, bool)`

GetConnectedEntityTypesOk returns a tuple with the ConnectedEntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedEntityTypes

`func (o *GraphEntity) SetConnectedEntityTypes(v map[string]int32)`

SetConnectedEntityTypes sets ConnectedEntityTypes field to given value.

### HasConnectedEntityTypes

`func (o *GraphEntity) HasConnectedEntityTypes() bool`

HasConnectedEntityTypes returns a boolean if a field has been set.

### GetProperties

`func (o *GraphEntity) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *GraphEntity) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *GraphEntity) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *GraphEntity) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetPropertyMatcher

`func (o *GraphEntity) GetPropertyMatcher() map[string]interface{}`

GetPropertyMatcher returns the PropertyMatcher field if non-nil, zero value otherwise.

### GetPropertyMatcherOk

`func (o *GraphEntity) GetPropertyMatcherOk() (*map[string]interface{}, bool)`

GetPropertyMatcherOk returns a tuple with the PropertyMatcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatcher

`func (o *GraphEntity) SetPropertyMatcher(v map[string]interface{})`

SetPropertyMatcher sets PropertyMatcher field to given value.

### HasPropertyMatcher

`func (o *GraphEntity) HasPropertyMatcher() bool`

HasPropertyMatcher returns a boolean if a field has been set.

### GetScopeNames

`func (o *GraphEntity) GetScopeNames() map[string]interface{}`

GetScopeNames returns the ScopeNames field if non-nil, zero value otherwise.

### GetScopeNamesOk

`func (o *GraphEntity) GetScopeNamesOk() (*map[string]interface{}, bool)`

GetScopeNamesOk returns a tuple with the ScopeNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeNames

`func (o *GraphEntity) SetScopeNames(v map[string]interface{})`

SetScopeNames sets ScopeNames field to given value.

### HasScopeNames

`func (o *GraphEntity) HasScopeNames() bool`

HasScopeNames returns a boolean if a field has been set.

### GetScope

`func (o *GraphEntity) GetScope() GraphEntityScope`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *GraphEntity) GetScopeOk() (*GraphEntityScope, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *GraphEntity) SetScope(v GraphEntityScope)`

SetScope sets Scope field to given value.

### HasScope

`func (o *GraphEntity) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetAssertion

`func (o *GraphEntity) GetAssertion() GraphAssertionSummary`

GetAssertion returns the Assertion field if non-nil, zero value otherwise.

### GetAssertionOk

`func (o *GraphEntity) GetAssertionOk() (*GraphAssertionSummary, bool)`

GetAssertionOk returns a tuple with the Assertion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertion

`func (o *GraphEntity) SetAssertion(v GraphAssertionSummary)`

SetAssertion sets Assertion field to given value.

### HasAssertion

`func (o *GraphEntity) HasAssertion() bool`

HasAssertion returns a boolean if a field has been set.

### GetConnectedAssertion

`func (o *GraphEntity) GetConnectedAssertion() GraphAssertionSummary`

GetConnectedAssertion returns the ConnectedAssertion field if non-nil, zero value otherwise.

### GetConnectedAssertionOk

`func (o *GraphEntity) GetConnectedAssertionOk() (*GraphAssertionSummary, bool)`

GetConnectedAssertionOk returns a tuple with the ConnectedAssertion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedAssertion

`func (o *GraphEntity) SetConnectedAssertion(v GraphAssertionSummary)`

SetConnectedAssertion sets ConnectedAssertion field to given value.

### HasConnectedAssertion

`func (o *GraphEntity) HasConnectedAssertion() bool`

HasConnectedAssertion returns a boolean if a field has been set.

### GetAssertionCount

`func (o *GraphEntity) GetAssertionCount() int32`

GetAssertionCount returns the AssertionCount field if non-nil, zero value otherwise.

### GetAssertionCountOk

`func (o *GraphEntity) GetAssertionCountOk() (*int32, bool)`

GetAssertionCountOk returns a tuple with the AssertionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionCount

`func (o *GraphEntity) SetAssertionCount(v int32)`

SetAssertionCount sets AssertionCount field to given value.

### HasAssertionCount

`func (o *GraphEntity) HasAssertionCount() bool`

HasAssertionCount returns a boolean if a field has been set.

### GetKey

`func (o *GraphEntity) GetKey() KGEntityKey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *GraphEntity) GetKeyOk() (*KGEntityKey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *GraphEntity) SetKey(v KGEntityKey)`

SetKey sets Key field to given value.

### HasKey

`func (o *GraphEntity) HasKey() bool`

HasKey returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


