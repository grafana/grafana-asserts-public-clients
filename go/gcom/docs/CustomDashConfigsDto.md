# CustomDashConfigsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | Pointer to **string** |  | [optional] 
**DashConfigDto** | Pointer to [**[]CustomDashConfigDto**](CustomDashConfigDto.md) |  | [optional] 

## Methods

### NewCustomDashConfigsDto

`func NewCustomDashConfigsDto() *CustomDashConfigsDto`

NewCustomDashConfigsDto instantiates a new CustomDashConfigsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomDashConfigsDtoWithDefaults

`func NewCustomDashConfigsDtoWithDefaults() *CustomDashConfigsDto`

NewCustomDashConfigsDtoWithDefaults instantiates a new CustomDashConfigsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEntityType

`func (o *CustomDashConfigsDto) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *CustomDashConfigsDto) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *CustomDashConfigsDto) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *CustomDashConfigsDto) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetDashConfigDto

`func (o *CustomDashConfigsDto) GetDashConfigDto() []CustomDashConfigDto`

GetDashConfigDto returns the DashConfigDto field if non-nil, zero value otherwise.

### GetDashConfigDtoOk

`func (o *CustomDashConfigsDto) GetDashConfigDtoOk() (*[]CustomDashConfigDto, bool)`

GetDashConfigDtoOk returns a tuple with the DashConfigDto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDashConfigDto

`func (o *CustomDashConfigsDto) SetDashConfigDto(v []CustomDashConfigDto)`

SetDashConfigDto sets DashConfigDto field to given value.

### HasDashConfigDto

`func (o *CustomDashConfigsDto) HasDashConfigDto() bool`

HasDashConfigDto returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


