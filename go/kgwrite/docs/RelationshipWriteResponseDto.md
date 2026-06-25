# RelationshipWriteResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**From** | Pointer to [**EntityRefDto**](EntityRefDto.md) |  | [optional] 
**To** | Pointer to [**EntityRefDto**](EntityRefDto.md) |  | [optional] 
**Properties** | Pointer to **map[string]interface{}** |  | [optional] 

## Methods

### NewRelationshipWriteResponseDto

`func NewRelationshipWriteResponseDto() *RelationshipWriteResponseDto`

NewRelationshipWriteResponseDto instantiates a new RelationshipWriteResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipWriteResponseDtoWithDefaults

`func NewRelationshipWriteResponseDtoWithDefaults() *RelationshipWriteResponseDto`

NewRelationshipWriteResponseDtoWithDefaults instantiates a new RelationshipWriteResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *RelationshipWriteResponseDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RelationshipWriteResponseDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RelationshipWriteResponseDto) SetDomain(v string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *RelationshipWriteResponseDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetType

`func (o *RelationshipWriteResponseDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RelationshipWriteResponseDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RelationshipWriteResponseDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RelationshipWriteResponseDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetFrom

`func (o *RelationshipWriteResponseDto) GetFrom() EntityRefDto`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *RelationshipWriteResponseDto) GetFromOk() (*EntityRefDto, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *RelationshipWriteResponseDto) SetFrom(v EntityRefDto)`

SetFrom sets From field to given value.

### HasFrom

`func (o *RelationshipWriteResponseDto) HasFrom() bool`

HasFrom returns a boolean if a field has been set.

### GetTo

`func (o *RelationshipWriteResponseDto) GetTo() EntityRefDto`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *RelationshipWriteResponseDto) GetToOk() (*EntityRefDto, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *RelationshipWriteResponseDto) SetTo(v EntityRefDto)`

SetTo sets To field to given value.

### HasTo

`func (o *RelationshipWriteResponseDto) HasTo() bool`

HasTo returns a boolean if a field has been set.

### GetProperties

`func (o *RelationshipWriteResponseDto) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *RelationshipWriteResponseDto) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *RelationshipWriteResponseDto) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *RelationshipWriteResponseDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


