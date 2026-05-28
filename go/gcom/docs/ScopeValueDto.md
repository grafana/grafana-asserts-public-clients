# ScopeValueDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** |  | [optional] 
**Sources** | Pointer to **[]string** |  | [optional] 

## Methods

### NewScopeValueDto

`func NewScopeValueDto() *ScopeValueDto`

NewScopeValueDto instantiates a new ScopeValueDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScopeValueDtoWithDefaults

`func NewScopeValueDtoWithDefaults() *ScopeValueDto`

NewScopeValueDtoWithDefaults instantiates a new ScopeValueDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *ScopeValueDto) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ScopeValueDto) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ScopeValueDto) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ScopeValueDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSources

`func (o *ScopeValueDto) GetSources() []string`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *ScopeValueDto) GetSourcesOk() (*[]string, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *ScopeValueDto) SetSources(v []string)`

SetSources sets Sources field to given value.

### HasSources

`func (o *ScopeValueDto) HasSources() bool`

HasSources returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


