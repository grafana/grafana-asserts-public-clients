# KGEntityKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**KgScope** | Pointer to [**KGScope**](KGScope.md) |  | [optional] 

## Methods

### NewKGEntityKey

`func NewKGEntityKey() *KGEntityKey`

NewKGEntityKey instantiates a new KGEntityKey object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKGEntityKeyWithDefaults

`func NewKGEntityKeyWithDefaults() *KGEntityKey`

NewKGEntityKeyWithDefaults instantiates a new KGEntityKey object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *KGEntityKey) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *KGEntityKey) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *KGEntityKey) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *KGEntityKey) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *KGEntityKey) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *KGEntityKey) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *KGEntityKey) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *KGEntityKey) HasName() bool`

HasName returns a boolean if a field has been set.

### GetKgScope

`func (o *KGEntityKey) GetKgScope() KGScope`

GetKgScope returns the KgScope field if non-nil, zero value otherwise.

### GetKgScopeOk

`func (o *KGEntityKey) GetKgScopeOk() (*KGScope, bool)`

GetKgScopeOk returns a tuple with the KgScope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKgScope

`func (o *KGEntityKey) SetKgScope(v KGScope)`

SetKgScope sets KgScope field to given value.

### HasKgScope

`func (o *KGEntityKey) HasKgScope() bool`

HasKgScope returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


