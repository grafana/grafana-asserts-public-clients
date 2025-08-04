# IndexMappingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Index** | Pointer to **string** |  | [optional] 
**LabelMatchValues** | Pointer to **map[string][]string** |  | [optional] 

## Methods

### NewIndexMappingDto

`func NewIndexMappingDto() *IndexMappingDto`

NewIndexMappingDto instantiates a new IndexMappingDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIndexMappingDtoWithDefaults

`func NewIndexMappingDtoWithDefaults() *IndexMappingDto`

NewIndexMappingDtoWithDefaults instantiates a new IndexMappingDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndex

`func (o *IndexMappingDto) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *IndexMappingDto) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *IndexMappingDto) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *IndexMappingDto) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetLabelMatchValues

`func (o *IndexMappingDto) GetLabelMatchValues() map[string][]string`

GetLabelMatchValues returns the LabelMatchValues field if non-nil, zero value otherwise.

### GetLabelMatchValuesOk

`func (o *IndexMappingDto) GetLabelMatchValuesOk() (*map[string][]string, bool)`

GetLabelMatchValuesOk returns a tuple with the LabelMatchValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelMatchValues

`func (o *IndexMappingDto) SetLabelMatchValues(v map[string][]string)`

SetLabelMatchValues sets LabelMatchValues field to given value.

### HasLabelMatchValues

`func (o *IndexMappingDto) HasLabelMatchValues() bool`

HasLabelMatchValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


