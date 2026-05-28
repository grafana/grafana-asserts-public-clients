# StaticEntityDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Literal value for the entity&#39;s name property | [default to ""]
**Scope** | Pointer to **map[string]string** | Literal scope label values; may be empty when the type has no scope | [optional] [default to ]
**Properties** | Pointer to **map[string]string** | Literal property keys and values to set on the upserted entity | [optional] [default to ]

## Methods

### NewStaticEntityDto

`func NewStaticEntityDto(name string, ) *StaticEntityDto`

NewStaticEntityDto instantiates a new StaticEntityDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStaticEntityDtoWithDefaults

`func NewStaticEntityDtoWithDefaults() *StaticEntityDto`

NewStaticEntityDtoWithDefaults instantiates a new StaticEntityDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *StaticEntityDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *StaticEntityDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *StaticEntityDto) SetName(v string)`

SetName sets Name field to given value.


### GetScope

`func (o *StaticEntityDto) GetScope() map[string]string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *StaticEntityDto) GetScopeOk() (*map[string]string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *StaticEntityDto) SetScope(v map[string]string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *StaticEntityDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetProperties

`func (o *StaticEntityDto) GetProperties() map[string]string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *StaticEntityDto) GetPropertiesOk() (*map[string]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *StaticEntityDto) SetProperties(v map[string]string)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *StaticEntityDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


