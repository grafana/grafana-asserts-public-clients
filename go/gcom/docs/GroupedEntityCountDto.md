# GroupedEntityCountDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Total** | **int64** |  | 
**WithInsights** | Pointer to **int64** |  | [optional] 
**GroupedBy** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewGroupedEntityCountDto

`func NewGroupedEntityCountDto(total int64, ) *GroupedEntityCountDto`

NewGroupedEntityCountDto instantiates a new GroupedEntityCountDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGroupedEntityCountDtoWithDefaults

`func NewGroupedEntityCountDtoWithDefaults() *GroupedEntityCountDto`

NewGroupedEntityCountDtoWithDefaults instantiates a new GroupedEntityCountDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTotal

`func (o *GroupedEntityCountDto) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *GroupedEntityCountDto) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *GroupedEntityCountDto) SetTotal(v int64)`

SetTotal sets Total field to given value.


### GetWithInsights

`func (o *GroupedEntityCountDto) GetWithInsights() int64`

GetWithInsights returns the WithInsights field if non-nil, zero value otherwise.

### GetWithInsightsOk

`func (o *GroupedEntityCountDto) GetWithInsightsOk() (*int64, bool)`

GetWithInsightsOk returns a tuple with the WithInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWithInsights

`func (o *GroupedEntityCountDto) SetWithInsights(v int64)`

SetWithInsights sets WithInsights field to given value.

### HasWithInsights

`func (o *GroupedEntityCountDto) HasWithInsights() bool`

HasWithInsights returns a boolean if a field has been set.

### GetGroupedBy

`func (o *GroupedEntityCountDto) GetGroupedBy() map[string]string`

GetGroupedBy returns the GroupedBy field if non-nil, zero value otherwise.

### GetGroupedByOk

`func (o *GroupedEntityCountDto) GetGroupedByOk() (*map[string]string, bool)`

GetGroupedByOk returns a tuple with the GroupedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupedBy

`func (o *GroupedEntityCountDto) SetGroupedBy(v map[string]string)`

SetGroupedBy sets GroupedBy field to given value.

### HasGroupedBy

`func (o *GroupedEntityCountDto) HasGroupedBy() bool`

HasGroupedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


