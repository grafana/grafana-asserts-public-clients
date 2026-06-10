# MatcherTreeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Matcher** | Pointer to [**PropertyMatcherDto**](PropertyMatcherDto.md) |  | [optional] 
**Op** | Pointer to **string** |  | [optional] 
**Children** | Pointer to [**[]MatcherTreeDto**](MatcherTreeDto.md) |  | [optional] 

## Methods

### NewMatcherTreeDto

`func NewMatcherTreeDto() *MatcherTreeDto`

NewMatcherTreeDto instantiates a new MatcherTreeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatcherTreeDtoWithDefaults

`func NewMatcherTreeDtoWithDefaults() *MatcherTreeDto`

NewMatcherTreeDtoWithDefaults instantiates a new MatcherTreeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMatcher

`func (o *MatcherTreeDto) GetMatcher() PropertyMatcherDto`

GetMatcher returns the Matcher field if non-nil, zero value otherwise.

### GetMatcherOk

`func (o *MatcherTreeDto) GetMatcherOk() (*PropertyMatcherDto, bool)`

GetMatcherOk returns a tuple with the Matcher field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatcher

`func (o *MatcherTreeDto) SetMatcher(v PropertyMatcherDto)`

SetMatcher sets Matcher field to given value.

### HasMatcher

`func (o *MatcherTreeDto) HasMatcher() bool`

HasMatcher returns a boolean if a field has been set.

### GetOp

`func (o *MatcherTreeDto) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *MatcherTreeDto) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *MatcherTreeDto) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *MatcherTreeDto) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetChildren

`func (o *MatcherTreeDto) GetChildren() []MatcherTreeDto`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *MatcherTreeDto) GetChildrenOk() (*[]MatcherTreeDto, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *MatcherTreeDto) SetChildren(v []MatcherTreeDto)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *MatcherTreeDto) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


