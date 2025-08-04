# AllRulesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**All** | Pointer to [**VersionedRulesPayload**](VersionedRulesPayload.md) |  | [optional] 
**Relabel** | Pointer to [**VersionedMimirRelabelRulesPayload**](VersionedMimirRelabelRulesPayload.md) |  | [optional] 

## Methods

### NewAllRulesDto

`func NewAllRulesDto() *AllRulesDto`

NewAllRulesDto instantiates a new AllRulesDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllRulesDtoWithDefaults

`func NewAllRulesDtoWithDefaults() *AllRulesDto`

NewAllRulesDtoWithDefaults instantiates a new AllRulesDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAll

`func (o *AllRulesDto) GetAll() VersionedRulesPayload`

GetAll returns the All field if non-nil, zero value otherwise.

### GetAllOk

`func (o *AllRulesDto) GetAllOk() (*VersionedRulesPayload, bool)`

GetAllOk returns a tuple with the All field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAll

`func (o *AllRulesDto) SetAll(v VersionedRulesPayload)`

SetAll sets All field to given value.

### HasAll

`func (o *AllRulesDto) HasAll() bool`

HasAll returns a boolean if a field has been set.

### GetRelabel

`func (o *AllRulesDto) GetRelabel() VersionedMimirRelabelRulesPayload`

GetRelabel returns the Relabel field if non-nil, zero value otherwise.

### GetRelabelOk

`func (o *AllRulesDto) GetRelabelOk() (*VersionedMimirRelabelRulesPayload, bool)`

GetRelabelOk returns a tuple with the Relabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelabel

`func (o *AllRulesDto) SetRelabel(v VersionedMimirRelabelRulesPayload)`

SetRelabel sets Relabel field to given value.

### HasRelabel

`func (o *AllRulesDto) HasRelabel() bool`

HasRelabel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


