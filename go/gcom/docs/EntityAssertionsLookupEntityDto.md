# EntityAssertionsLookupEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**AssertionsSupported** | Pointer to **bool** |  | [optional] 
**Assertion** | Pointer to [**GraphAssertionSummary**](GraphAssertionSummary.md) |  | [optional] 
**ConnectedAssertion** | Pointer to [**GraphAssertionSummary**](GraphAssertionSummary.md) |  | [optional] 
**InvalidReason** | Pointer to **string** |  | [optional] 

## Methods

### NewEntityAssertionsLookupEntityDto

`func NewEntityAssertionsLookupEntityDto() *EntityAssertionsLookupEntityDto`

NewEntityAssertionsLookupEntityDto instantiates a new EntityAssertionsLookupEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionsLookupEntityDtoWithDefaults

`func NewEntityAssertionsLookupEntityDtoWithDefaults() *EntityAssertionsLookupEntityDto`

NewEntityAssertionsLookupEntityDtoWithDefaults instantiates a new EntityAssertionsLookupEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *EntityAssertionsLookupEntityDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *EntityAssertionsLookupEntityDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *EntityAssertionsLookupEntityDto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *EntityAssertionsLookupEntityDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetType

`func (o *EntityAssertionsLookupEntityDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityAssertionsLookupEntityDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityAssertionsLookupEntityDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityAssertionsLookupEntityDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityAssertionsLookupEntityDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityAssertionsLookupEntityDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityAssertionsLookupEntityDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityAssertionsLookupEntityDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetScope

`func (o *EntityAssertionsLookupEntityDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityAssertionsLookupEntityDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityAssertionsLookupEntityDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityAssertionsLookupEntityDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetAssertionsSupported

`func (o *EntityAssertionsLookupEntityDto) GetAssertionsSupported() bool`

GetAssertionsSupported returns the AssertionsSupported field if non-nil, zero value otherwise.

### GetAssertionsSupportedOk

`func (o *EntityAssertionsLookupEntityDto) GetAssertionsSupportedOk() (*bool, bool)`

GetAssertionsSupportedOk returns a tuple with the AssertionsSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionsSupported

`func (o *EntityAssertionsLookupEntityDto) SetAssertionsSupported(v bool)`

SetAssertionsSupported sets AssertionsSupported field to given value.

### HasAssertionsSupported

`func (o *EntityAssertionsLookupEntityDto) HasAssertionsSupported() bool`

HasAssertionsSupported returns a boolean if a field has been set.

### GetAssertion

`func (o *EntityAssertionsLookupEntityDto) GetAssertion() GraphAssertionSummary`

GetAssertion returns the Assertion field if non-nil, zero value otherwise.

### GetAssertionOk

`func (o *EntityAssertionsLookupEntityDto) GetAssertionOk() (*GraphAssertionSummary, bool)`

GetAssertionOk returns a tuple with the Assertion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertion

`func (o *EntityAssertionsLookupEntityDto) SetAssertion(v GraphAssertionSummary)`

SetAssertion sets Assertion field to given value.

### HasAssertion

`func (o *EntityAssertionsLookupEntityDto) HasAssertion() bool`

HasAssertion returns a boolean if a field has been set.

### GetConnectedAssertion

`func (o *EntityAssertionsLookupEntityDto) GetConnectedAssertion() GraphAssertionSummary`

GetConnectedAssertion returns the ConnectedAssertion field if non-nil, zero value otherwise.

### GetConnectedAssertionOk

`func (o *EntityAssertionsLookupEntityDto) GetConnectedAssertionOk() (*GraphAssertionSummary, bool)`

GetConnectedAssertionOk returns a tuple with the ConnectedAssertion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectedAssertion

`func (o *EntityAssertionsLookupEntityDto) SetConnectedAssertion(v GraphAssertionSummary)`

SetConnectedAssertion sets ConnectedAssertion field to given value.

### HasConnectedAssertion

`func (o *EntityAssertionsLookupEntityDto) HasConnectedAssertion() bool`

HasConnectedAssertion returns a boolean if a field has been set.

### GetInvalidReason

`func (o *EntityAssertionsLookupEntityDto) GetInvalidReason() string`

GetInvalidReason returns the InvalidReason field if non-nil, zero value otherwise.

### GetInvalidReasonOk

`func (o *EntityAssertionsLookupEntityDto) GetInvalidReasonOk() (*string, bool)`

GetInvalidReasonOk returns a tuple with the InvalidReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvalidReason

`func (o *EntityAssertionsLookupEntityDto) SetInvalidReason(v string)`

SetInvalidReason sets InvalidReason field to given value.

### HasInvalidReason

`func (o *EntityAssertionsLookupEntityDto) HasInvalidReason() bool`

HasInvalidReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


