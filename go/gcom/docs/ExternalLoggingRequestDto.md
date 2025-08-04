# ExternalLoggingRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | **int64** |  | 
**End** | **int64** |  | 
**Properties** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewExternalLoggingRequestDto

`func NewExternalLoggingRequestDto(start int64, end int64, ) *ExternalLoggingRequestDto`

NewExternalLoggingRequestDto instantiates a new ExternalLoggingRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExternalLoggingRequestDtoWithDefaults

`func NewExternalLoggingRequestDtoWithDefaults() *ExternalLoggingRequestDto`

NewExternalLoggingRequestDtoWithDefaults instantiates a new ExternalLoggingRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *ExternalLoggingRequestDto) GetStart() int64`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ExternalLoggingRequestDto) GetStartOk() (*int64, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ExternalLoggingRequestDto) SetStart(v int64)`

SetStart sets Start field to given value.


### GetEnd

`func (o *ExternalLoggingRequestDto) GetEnd() int64`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ExternalLoggingRequestDto) GetEndOk() (*int64, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ExternalLoggingRequestDto) SetEnd(v int64)`

SetEnd sets End field to given value.


### GetProperties

`func (o *ExternalLoggingRequestDto) GetProperties() map[string]string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *ExternalLoggingRequestDto) GetPropertiesOk() (*map[string]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *ExternalLoggingRequestDto) SetProperties(v map[string]string)`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *ExternalLoggingRequestDto) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


