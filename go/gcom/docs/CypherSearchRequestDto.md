# CypherSearchRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CypherQuery** | **string** |  | 
**TimeCriteria** | Pointer to [**TimeCriteriaDto**](TimeCriteriaDto.md) |  | [optional] 
**ScopeCriteria** | Pointer to [**ScopeCriteriaDto**](ScopeCriteriaDto.md) |  | [optional] 
**PageNum** | Pointer to **int32** |  | [optional] 
**WithInsights** | Pointer to **bool** |  | [optional] 

## Methods

### NewCypherSearchRequestDto

`func NewCypherSearchRequestDto(cypherQuery string, ) *CypherSearchRequestDto`

NewCypherSearchRequestDto instantiates a new CypherSearchRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCypherSearchRequestDtoWithDefaults

`func NewCypherSearchRequestDtoWithDefaults() *CypherSearchRequestDto`

NewCypherSearchRequestDtoWithDefaults instantiates a new CypherSearchRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCypherQuery

`func (o *CypherSearchRequestDto) GetCypherQuery() string`

GetCypherQuery returns the CypherQuery field if non-nil, zero value otherwise.

### GetCypherQueryOk

`func (o *CypherSearchRequestDto) GetCypherQueryOk() (*string, bool)`

GetCypherQueryOk returns a tuple with the CypherQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCypherQuery

`func (o *CypherSearchRequestDto) SetCypherQuery(v string)`

SetCypherQuery sets CypherQuery field to given value.


### GetTimeCriteria

`func (o *CypherSearchRequestDto) GetTimeCriteria() TimeCriteriaDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *CypherSearchRequestDto) GetTimeCriteriaOk() (*TimeCriteriaDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *CypherSearchRequestDto) SetTimeCriteria(v TimeCriteriaDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *CypherSearchRequestDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetScopeCriteria

`func (o *CypherSearchRequestDto) GetScopeCriteria() ScopeCriteriaDto`

GetScopeCriteria returns the ScopeCriteria field if non-nil, zero value otherwise.

### GetScopeCriteriaOk

`func (o *CypherSearchRequestDto) GetScopeCriteriaOk() (*ScopeCriteriaDto, bool)`

GetScopeCriteriaOk returns a tuple with the ScopeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopeCriteria

`func (o *CypherSearchRequestDto) SetScopeCriteria(v ScopeCriteriaDto)`

SetScopeCriteria sets ScopeCriteria field to given value.

### HasScopeCriteria

`func (o *CypherSearchRequestDto) HasScopeCriteria() bool`

HasScopeCriteria returns a boolean if a field has been set.

### GetPageNum

`func (o *CypherSearchRequestDto) GetPageNum() int32`

GetPageNum returns the PageNum field if non-nil, zero value otherwise.

### GetPageNumOk

`func (o *CypherSearchRequestDto) GetPageNumOk() (*int32, bool)`

GetPageNumOk returns a tuple with the PageNum field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageNum

`func (o *CypherSearchRequestDto) SetPageNum(v int32)`

SetPageNum sets PageNum field to given value.

### HasPageNum

`func (o *CypherSearchRequestDto) HasPageNum() bool`

HasPageNum returns a boolean if a field has been set.

### GetWithInsights

`func (o *CypherSearchRequestDto) GetWithInsights() bool`

GetWithInsights returns the WithInsights field if non-nil, zero value otherwise.

### GetWithInsightsOk

`func (o *CypherSearchRequestDto) GetWithInsightsOk() (*bool, bool)`

GetWithInsightsOk returns a tuple with the WithInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithInsights

`func (o *CypherSearchRequestDto) SetWithInsights(v bool)`

SetWithInsights sets WithInsights field to given value.

### HasWithInsights

`func (o *CypherSearchRequestDto) HasWithInsights() bool`

HasWithInsights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


