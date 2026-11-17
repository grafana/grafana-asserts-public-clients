# KgQueryResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**[]KgQueryEntityDto**](KgQueryEntityDto.md) |  | [optional] 
**Total** | Pointer to **int64** |  | [optional] 
**Truncated** | Pointer to **bool** | True while more matches exist BEYOND the returned window (offset + returned &lt; total) — page-aware, so \&quot;page until truncated is false\&quot; terminates. Describes the primary selector&#39;s match set only, never edges or expansion fan-out. | [optional] [default to false]
**Pagination** | Pointer to [**PaginationDto**](PaginationDto.md) |  | [optional] 
**GroupableProperties** | Pointer to **[]string** |  | [optional] 
**AppliedTimeCriteria** | Pointer to [**KgTimeWindowDto**](KgTimeWindowDto.md) |  | [optional] 

## Methods

### NewKgQueryResponseDto

`func NewKgQueryResponseDto() *KgQueryResponseDto`

NewKgQueryResponseDto instantiates a new KgQueryResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgQueryResponseDtoWithDefaults

`func NewKgQueryResponseDtoWithDefaults() *KgQueryResponseDto`

NewKgQueryResponseDtoWithDefaults instantiates a new KgQueryResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *KgQueryResponseDto) GetEntities() []KgQueryEntityDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *KgQueryResponseDto) GetEntitiesOk() (*[]KgQueryEntityDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *KgQueryResponseDto) SetEntities(v []KgQueryEntityDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *KgQueryResponseDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetTotal

`func (o *KgQueryResponseDto) GetTotal() int64`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *KgQueryResponseDto) GetTotalOk() (*int64, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *KgQueryResponseDto) SetTotal(v int64)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *KgQueryResponseDto) HasTotal() bool`

HasTotal returns a boolean if a field has been set.

### GetTruncated

`func (o *KgQueryResponseDto) GetTruncated() bool`

GetTruncated returns the Truncated field if non-nil, zero value otherwise.

### GetTruncatedOk

`func (o *KgQueryResponseDto) GetTruncatedOk() (*bool, bool)`

GetTruncatedOk returns a tuple with the Truncated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTruncated

`func (o *KgQueryResponseDto) SetTruncated(v bool)`

SetTruncated sets Truncated field to given value.

### HasTruncated

`func (o *KgQueryResponseDto) HasTruncated() bool`

HasTruncated returns a boolean if a field has been set.

### GetPagination

`func (o *KgQueryResponseDto) GetPagination() PaginationDto`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *KgQueryResponseDto) GetPaginationOk() (*PaginationDto, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *KgQueryResponseDto) SetPagination(v PaginationDto)`

SetPagination sets Pagination field to given value.

### HasPagination

`func (o *KgQueryResponseDto) HasPagination() bool`

HasPagination returns a boolean if a field has been set.

### GetGroupableProperties

`func (o *KgQueryResponseDto) GetGroupableProperties() []string`

GetGroupableProperties returns the GroupableProperties field if non-nil, zero value otherwise.

### GetGroupablePropertiesOk

`func (o *KgQueryResponseDto) GetGroupablePropertiesOk() (*[]string, bool)`

GetGroupablePropertiesOk returns a tuple with the GroupableProperties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupableProperties

`func (o *KgQueryResponseDto) SetGroupableProperties(v []string)`

SetGroupableProperties sets GroupableProperties field to given value.

### HasGroupableProperties

`func (o *KgQueryResponseDto) HasGroupableProperties() bool`

HasGroupableProperties returns a boolean if a field has been set.

### GetAppliedTimeCriteria

`func (o *KgQueryResponseDto) GetAppliedTimeCriteria() KgTimeWindowDto`

GetAppliedTimeCriteria returns the AppliedTimeCriteria field if non-nil, zero value otherwise.

### GetAppliedTimeCriteriaOk

`func (o *KgQueryResponseDto) GetAppliedTimeCriteriaOk() (*KgTimeWindowDto, bool)`

GetAppliedTimeCriteriaOk returns a tuple with the AppliedTimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedTimeCriteria

`func (o *KgQueryResponseDto) SetAppliedTimeCriteria(v KgTimeWindowDto)`

SetAppliedTimeCriteria sets AppliedTimeCriteria field to given value.

### HasAppliedTimeCriteria

`func (o *KgQueryResponseDto) HasAppliedTimeCriteria() bool`

HasAppliedTimeCriteria returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


