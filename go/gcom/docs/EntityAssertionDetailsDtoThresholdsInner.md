# EntityAssertionDetailsDtoThresholdsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 
**Type** | **string** |  | 
**Query** | Pointer to **string** |  | [optional] 
**Values** | Pointer to [**[]ThresholdValueSingleDto**](ThresholdValueSingleDto.md) |  | [optional] 
**FillZeros** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityAssertionDetailsDtoThresholdsInner

`func NewEntityAssertionDetailsDtoThresholdsInner(type_ string, ) *EntityAssertionDetailsDtoThresholdsInner`

NewEntityAssertionDetailsDtoThresholdsInner instantiates a new EntityAssertionDetailsDtoThresholdsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionDetailsDtoThresholdsInnerWithDefaults

`func NewEntityAssertionDetailsDtoThresholdsInnerWithDefaults() *EntityAssertionDetailsDtoThresholdsInner`

NewEntityAssertionDetailsDtoThresholdsInnerWithDefaults instantiates a new EntityAssertionDetailsDtoThresholdsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityAssertionDetailsDtoThresholdsInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetLabels

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *EntityAssertionDetailsDtoThresholdsInner) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetType

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetType(v string)`

SetType sets Type field to given value.


### GetQuery

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *EntityAssertionDetailsDtoThresholdsInner) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetValues

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetValues() []ThresholdValueSingleDto`

GetValues returns the Values field if non-nil, zero value otherwise.

### GetValuesOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetValuesOk() (*[]ThresholdValueSingleDto, bool)`

GetValuesOk returns a tuple with the Values field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValues

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetValues(v []ThresholdValueSingleDto)`

SetValues sets Values field to given value.

### HasValues

`func (o *EntityAssertionDetailsDtoThresholdsInner) HasValues() bool`

HasValues returns a boolean if a field has been set.

### GetFillZeros

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetFillZeros() bool`

GetFillZeros returns the FillZeros field if non-nil, zero value otherwise.

### GetFillZerosOk

`func (o *EntityAssertionDetailsDtoThresholdsInner) GetFillZerosOk() (*bool, bool)`

GetFillZerosOk returns a tuple with the FillZeros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFillZeros

`func (o *EntityAssertionDetailsDtoThresholdsInner) SetFillZeros(v bool)`

SetFillZeros sets FillZeros field to given value.

### HasFillZeros

`func (o *EntityAssertionDetailsDtoThresholdsInner) HasFillZeros() bool`

HasFillZeros returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


