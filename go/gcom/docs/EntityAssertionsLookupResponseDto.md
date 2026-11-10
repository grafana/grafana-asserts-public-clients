# EntityAssertionsLookupResponseDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeCriteria** | Pointer to [**TimeWindowDto**](TimeWindowDto.md) |  | [optional] 
**Entities** | Pointer to [**[]EntityAssertionsLookupEntityDto**](EntityAssertionsLookupEntityDto.md) |  | [optional] 

## Methods

### NewEntityAssertionsLookupResponseDto

`func NewEntityAssertionsLookupResponseDto() *EntityAssertionsLookupResponseDto`

NewEntityAssertionsLookupResponseDto instantiates a new EntityAssertionsLookupResponseDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionsLookupResponseDtoWithDefaults

`func NewEntityAssertionsLookupResponseDtoWithDefaults() *EntityAssertionsLookupResponseDto`

NewEntityAssertionsLookupResponseDtoWithDefaults instantiates a new EntityAssertionsLookupResponseDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeCriteria

`func (o *EntityAssertionsLookupResponseDto) GetTimeCriteria() TimeWindowDto`

GetTimeCriteria returns the TimeCriteria field if non-nil, zero value otherwise.

### GetTimeCriteriaOk

`func (o *EntityAssertionsLookupResponseDto) GetTimeCriteriaOk() (*TimeWindowDto, bool)`

GetTimeCriteriaOk returns a tuple with the TimeCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeCriteria

`func (o *EntityAssertionsLookupResponseDto) SetTimeCriteria(v TimeWindowDto)`

SetTimeCriteria sets TimeCriteria field to given value.

### HasTimeCriteria

`func (o *EntityAssertionsLookupResponseDto) HasTimeCriteria() bool`

HasTimeCriteria returns a boolean if a field has been set.

### GetEntities

`func (o *EntityAssertionsLookupResponseDto) GetEntities() []EntityAssertionsLookupEntityDto`

GetEntities returns the Entities field if non-nil, zero value otherwise.

### GetEntitiesOk

`func (o *EntityAssertionsLookupResponseDto) GetEntitiesOk() (*[]EntityAssertionsLookupEntityDto, bool)`

GetEntitiesOk returns a tuple with the Entities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntities

`func (o *EntityAssertionsLookupResponseDto) SetEntities(v []EntityAssertionsLookupEntityDto)`

SetEntities sets Entities field to given value.

### HasEntities

`func (o *EntityAssertionsLookupResponseDto) HasEntities() bool`

HasEntities returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


