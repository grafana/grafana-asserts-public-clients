# SchemaEndpointDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Types** | **[]string** |  | 
**Cardinality** | Pointer to **string** |  | [optional] 

## Methods

### NewSchemaEndpointDto

`func NewSchemaEndpointDto(types []string, ) *SchemaEndpointDto`

NewSchemaEndpointDto instantiates a new SchemaEndpointDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaEndpointDtoWithDefaults

`func NewSchemaEndpointDtoWithDefaults() *SchemaEndpointDto`

NewSchemaEndpointDtoWithDefaults instantiates a new SchemaEndpointDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTypes

`func (o *SchemaEndpointDto) GetTypes() []string`

GetTypes returns the Types field if non-nil, zero value otherwise.

### GetTypesOk

`func (o *SchemaEndpointDto) GetTypesOk() (*[]string, bool)`

GetTypesOk returns a tuple with the Types field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypes

`func (o *SchemaEndpointDto) SetTypes(v []string)`

SetTypes sets Types field to given value.


### GetCardinality

`func (o *SchemaEndpointDto) GetCardinality() string`

GetCardinality returns the Cardinality field if non-nil, zero value otherwise.

### GetCardinalityOk

`func (o *SchemaEndpointDto) GetCardinalityOk() (*string, bool)`

GetCardinalityOk returns a tuple with the Cardinality field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardinality

`func (o *SchemaEndpointDto) SetCardinality(v string)`

SetCardinality sets Cardinality field to given value.

### HasCardinality

`func (o *SchemaEndpointDto) HasCardinality() bool`

HasCardinality returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


