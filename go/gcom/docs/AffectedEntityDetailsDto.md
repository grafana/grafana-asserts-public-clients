# AffectedEntityDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Entities** | Pointer to [**[]AffectedEntityDetailDto**](AffectedEntityDetailDto.md) |  | [optional] 
**TotalCount** | Pointer to **int32** |  | [optional] 

## Methods

### NewAffectedEntityDetailsDto

`func NewAffectedEntityDetailsDto() *AffectedEntityDetailsDto`

NewAffectedEntityDetailsDto instantiates a new AffectedEntityDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAffectedEntityDetailsDtoWithDefaults

`func NewAffectedEntityDetailsDtoWithDefaults() *AffectedEntityDetailsDto`

NewAffectedEntityDetailsDtoWithDefaults instantiates a new AffectedEntityDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntities

`func (o *AffectedEntityDetailsDto) GetEntities() []AffectedEntityDetailDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *AffectedEntityDetailsDto) GetEntitiesOk() (*[]AffectedEntityDetailDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *AffectedEntityDetailsDto) SetEntities(v []AffectedEntityDetailDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *AffectedEntityDetailsDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.

### GetTotalCount

`func (o *AffectedEntityDetailsDto) GetTotalCount() int32`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *AffectedEntityDetailsDto) GetTotalCountOk() (*int32, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *AffectedEntityDetailsDto) SetTotalCount(v int32)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *AffectedEntityDetailsDto) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


