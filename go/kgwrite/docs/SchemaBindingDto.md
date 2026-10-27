# SchemaBindingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**From** | [**SchemaEndpointDto**](SchemaEndpointDto.md) |  | 
**To** | [**SchemaEndpointDto**](SchemaEndpointDto.md) |  | 

## Methods

### NewSchemaBindingDto

`func NewSchemaBindingDto(name string, from SchemaEndpointDto, to SchemaEndpointDto, ) *SchemaBindingDto`

NewSchemaBindingDto instantiates a new SchemaBindingDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSchemaBindingDtoWithDefaults

`func NewSchemaBindingDtoWithDefaults() *SchemaBindingDto`

NewSchemaBindingDtoWithDefaults instantiates a new SchemaBindingDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SchemaBindingDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SchemaBindingDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SchemaBindingDto) SetName(v string)`

SetName sets Name field to given value.


### GetFrom

`func (o *SchemaBindingDto) GetFrom() SchemaEndpointDto`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *SchemaBindingDto) GetFromOk() (*SchemaEndpointDto, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *SchemaBindingDto) SetFrom(v SchemaEndpointDto)`

SetFrom sets From field to given value.


### GetTo

`func (o *SchemaBindingDto) GetTo() SchemaEndpointDto`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *SchemaBindingDto) GetToOk() (*SchemaEndpointDto, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *SchemaBindingDto) SetTo(v SchemaEndpointDto)`

SetTo sets To field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


