# KgSelectDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **[]string** | Entity types to match within every selected domain: a string or a list of strings. Omit for any type (heterogeneous result). Multiple types return one result over exactly those types, each entity carrying its own type in its ref. | [optional] 
**Domain** | Pointer to **[]string** | Domains to search. Omit for the default telemetry domain (&#39;metrics&#39;). Multiple domains are returned in one heterogeneous result; each entity&#39;s ref carries the domain it came from. The retired literal &#39;kg&#39; is rejected. Use &#39;metrics&#39; explicitly or omit this field for telemetry entities. | [optional] 
**Where** | Pointer to [**KgFilterDto**](KgFilterDto.md) |  | [optional] 

## Methods

### NewKgSelectDto

`func NewKgSelectDto() *KgSelectDto`

NewKgSelectDto instantiates a new KgSelectDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgSelectDtoWithDefaults

`func NewKgSelectDtoWithDefaults() *KgSelectDto`

NewKgSelectDtoWithDefaults instantiates a new KgSelectDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *KgSelectDto) GetType() []string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *KgSelectDto) GetTypeOk() (*[]string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *KgSelectDto) SetType(v []string)`

SetType sets Type field to given value.

### HasType

`func (o *KgSelectDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDomain

`func (o *KgSelectDto) GetDomain() []string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *KgSelectDto) GetDomainOk() (*[]string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *KgSelectDto) SetDomain(v []string)`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *KgSelectDto) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### GetWhere

`func (o *KgSelectDto) GetWhere() KgFilterDto`

GetWhere returns the Where field if non-nil, zero value otherwise.

### GetWhereOk

`func (o *KgSelectDto) GetWhereOk() (*KgFilterDto, bool)`

GetWhereOk returns a tuple with the Where field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWhere

`func (o *KgSelectDto) SetWhere(v KgFilterDto)`

SetWhere sets Where field to given value.

### HasWhere

`func (o *KgSelectDto) HasWhere() bool`

HasWhere returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


