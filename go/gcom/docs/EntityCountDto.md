# EntityCountDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int64** |  | 
**WithInsights** | Pointer to **int64** |  | [optional] 
**GroupBy** | Pointer to [**[]GroupedEntityCountDto**](GroupedEntityCountDto.md) |  | [optional] 

## Methods

### NewEntityCountDto

`func NewEntityCountDto(total int64, ) *EntityCountDto`

NewEntityCountDto instantiates a new EntityCountDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityCountDtoWithDefaults

`func NewEntityCountDtoWithDefaults() *EntityCountDto`

NewEntityCountDtoWithDefaults instantiates a new EntityCountDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *EntityCountDto) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *EntityCountDto) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *EntityCountDto) SetTotal(v int64)`

SetTotal sets Total field to given value.


### GetWithInsights

`func (o *EntityCountDto) GetWithInsights() int64`

GetWithInsights returns the WithInsights field if non-nil, zero value otherwise.

### GetWithInsightsOk

`func (o *EntityCountDto) GetWithInsightsOk() (*int64, bool)`

GetWithInsightsOk returns a tuple with the WithInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithInsights

`func (o *EntityCountDto) SetWithInsights(v int64)`

SetWithInsights sets WithInsights field to given value.

### HasWithInsights

`func (o *EntityCountDto) HasWithInsights() bool`

HasWithInsights returns a boolean if a field has been set.

### GetGroupBy

`func (o *EntityCountDto) GetGroupBy() []GroupedEntityCountDto`

GetGroupBy returns the GroupBy field if non-nil, zero value otherwise.

### GetGroupByOk

`func (o *EntityCountDto) GetGroupByOk() (*[]GroupedEntityCountDto, bool)`

GetGroupByOk returns a tuple with the GroupBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupBy

`func (o *EntityCountDto) SetGroupBy(v []GroupedEntityCountDto)`

SetGroupBy sets GroupBy field to given value.

### HasGroupBy

`func (o *EntityCountDto) HasGroupBy() bool`

HasGroupBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


