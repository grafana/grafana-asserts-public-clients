# SchemaPropertyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Type** | **string** |  | 
**ElementType** | Pointer to **string** |  | [optional] 
**Required** | Pointer to **bool** |  | [optional] 
**Enum** | Pointer to **[]string** |  | [optional] 

## Methods

### NewSchemaPropertyDto

`func NewSchemaPropertyDto(name string, type_ string, ) *SchemaPropertyDto`

NewSchemaPropertyDto instantiates a new SchemaPropertyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaPropertyDtoWithDefaults

`func NewSchemaPropertyDtoWithDefaults() *SchemaPropertyDto`

NewSchemaPropertyDtoWithDefaults instantiates a new SchemaPropertyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaPropertyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaPropertyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaPropertyDto) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SchemaPropertyDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SchemaPropertyDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SchemaPropertyDto) SetType(v string)`

SetType sets Type field to given value.


### GetElementType

`func (o *SchemaPropertyDto) GetElementType() string`

GetElementType returns the ElementType field if non-nil, zero value otherwise.

### GetElementTypeOk

`func (o *SchemaPropertyDto) GetElementTypeOk() (*string, bool)`

GetElementTypeOk returns a tuple with the ElementType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementType

`func (o *SchemaPropertyDto) SetElementType(v string)`

SetElementType sets ElementType field to given value.

### HasElementType

`func (o *SchemaPropertyDto) HasElementType() bool`

HasElementType returns a boolean if a field has been set.

### GetRequired

`func (o *SchemaPropertyDto) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SchemaPropertyDto) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SchemaPropertyDto) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *SchemaPropertyDto) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetEnum

`func (o *SchemaPropertyDto) GetEnum() []string`

GetEnum returns the Enum field if non-nil, zero value otherwise.

### GetEnumOk

`func (o *SchemaPropertyDto) GetEnumOk() (*[]string, bool)`

GetEnumOk returns a tuple with the Enum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnum

`func (o *SchemaPropertyDto) SetEnum(v []string)`

SetEnum sets Enum field to given value.

### HasEnum

`func (o *SchemaPropertyDto) HasEnum() bool`

HasEnum returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


