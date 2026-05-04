# ModelRulesSearchResultDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | The search query that was used | [optional] [default to ""]
**Results** | Pointer to [**[]ModelRulesSearchMatchDto**](ModelRulesSearchMatchDto.md) | List of matching model rule files | [optional] [default to ]

## Methods

### NewModelRulesSearchResultDto

`func NewModelRulesSearchResultDto() *ModelRulesSearchResultDto`

NewModelRulesSearchResultDto instantiates a new ModelRulesSearchResultDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelRulesSearchResultDtoWithDefaults

`func NewModelRulesSearchResultDtoWithDefaults() *ModelRulesSearchResultDto`

NewModelRulesSearchResultDtoWithDefaults instantiates a new ModelRulesSearchResultDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *ModelRulesSearchResultDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *ModelRulesSearchResultDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *ModelRulesSearchResultDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *ModelRulesSearchResultDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetResults

`func (o *ModelRulesSearchResultDto) GetResults() []ModelRulesSearchMatchDto`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *ModelRulesSearchResultDto) GetResultsOk() (*[]ModelRulesSearchMatchDto, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *ModelRulesSearchResultDto) SetResults(v []ModelRulesSearchMatchDto)`

SetResults sets Results field to given value.

### HasResults

`func (o *ModelRulesSearchResultDto) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


