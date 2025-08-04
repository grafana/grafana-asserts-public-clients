# AssertionInfoRequestDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssertionName** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewAssertionInfoRequestDto

`func NewAssertionInfoRequestDto() *AssertionInfoRequestDto`

NewAssertionInfoRequestDto instantiates a new AssertionInfoRequestDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionInfoRequestDtoWithDefaults

`func NewAssertionInfoRequestDtoWithDefaults() *AssertionInfoRequestDto`

NewAssertionInfoRequestDtoWithDefaults instantiates a new AssertionInfoRequestDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssertionName

`func (o *AssertionInfoRequestDto) GetAssertionName() string`

GetAssertionName returns the AssertionName field if non-nil, zero value otherwise.

### GetAssertionNameOk

`func (o *AssertionInfoRequestDto) GetAssertionNameOk() (*string, bool)`

GetAssertionNameOk returns a tuple with the AssertionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionName

`func (o *AssertionInfoRequestDto) SetAssertionName(v string)`

SetAssertionName sets AssertionName field to given value.

### HasAssertionName

`func (o *AssertionInfoRequestDto) HasAssertionName() bool`

HasAssertionName returns a boolean if a field has been set.

### GetLabels

`func (o *AssertionInfoRequestDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *AssertionInfoRequestDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *AssertionInfoRequestDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *AssertionInfoRequestDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


