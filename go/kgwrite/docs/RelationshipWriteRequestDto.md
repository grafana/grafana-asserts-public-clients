# RelationshipWriteRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Domain** | **string** |  | 
**Type** | **string** |  | 
**From** | [**EntityRefDto**](EntityRefDto.md) |  | 
**To** | [**EntityRefDto**](EntityRefDto.md) |  | 
**Properties** | Pointer to **map[string]string** |  | [optional] 
**TtlSeconds** | **int64** |  | 

## Methods

### NewRelationshipWriteRequestDto

`func NewRelationshipWriteRequestDto(domain string, type_ string, from EntityRefDto, to EntityRefDto, ttlSeconds int64, ) *RelationshipWriteRequestDto`

NewRelationshipWriteRequestDto instantiates a new RelationshipWriteRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelationshipWriteRequestDtoWithDefaults

`func NewRelationshipWriteRequestDtoWithDefaults() *RelationshipWriteRequestDto`

NewRelationshipWriteRequestDtoWithDefaults instantiates a new RelationshipWriteRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDomain

`func (o *RelationshipWriteRequestDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *RelationshipWriteRequestDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *RelationshipWriteRequestDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetType

`func (o *RelationshipWriteRequestDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RelationshipWriteRequestDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RelationshipWriteRequestDto) SetType(v string)`

SetType sets Type field to given value.


### GetFrom

`func (o *RelationshipWriteRequestDto) GetFrom() EntityRefDto`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *RelationshipWriteRequestDto) GetFromOk() (*EntityRefDto, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *RelationshipWriteRequestDto) SetFrom(v EntityRefDto)`

SetFrom sets From field to given value.


### GetTo

`func (o *RelationshipWriteRequestDto) GetTo() EntityRefDto`

GetTo returns the To field if non-nil, zero value otherwise.

### GetToOk

`func (o *RelationshipWriteRequestDto) GetToOk() (*EntityRefDto, bool)`

GetToOk returns a tuple with the To field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTo

`func (o *RelationshipWriteRequestDto) SetTo(v EntityRefDto)`

SetTo sets To field to given value.


### GetProperties

`func (o *RelationshipWriteRequestDto) GetProperties() map[string]string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *RelationshipWriteRequestDto) GetPropertiesOk() (*map[string]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *RelationshipWriteRequestDto) SetProperties(v map[string]string)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *RelationshipWriteRequestDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.

### GetTtlSeconds

`func (o *RelationshipWriteRequestDto) GetTtlSeconds() int64`

GetTtlSeconds returns the TtlSeconds field if non-nil, zero value otherwise.

### GetTtlSecondsOk

`func (o *RelationshipWriteRequestDto) GetTtlSecondsOk() (*int64, bool)`

GetTtlSecondsOk returns a tuple with the TtlSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTtlSeconds

`func (o *RelationshipWriteRequestDto) SetTtlSeconds(v int64)`

SetTtlSeconds sets TtlSeconds field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


