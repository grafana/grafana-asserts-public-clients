# KgSizingDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SchemaVersion** | Pointer to **int32** |  | [optional] 
**PerTenantConstantSeries** | Pointer to **int32** |  | [optional] 
**Denominator** | Pointer to [**KgSizingDenominatorDto**](KgSizingDenominatorDto.md) |  | [optional] 
**Levels** | Pointer to [**[]KgSizingLevelDto**](KgSizingLevelDto.md) |  | [optional] 

## Methods

### NewKgSizingDto

`func NewKgSizingDto() *KgSizingDto`

NewKgSizingDto instantiates a new KgSizingDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKgSizingDtoWithDefaults

`func NewKgSizingDtoWithDefaults() *KgSizingDto`

NewKgSizingDtoWithDefaults instantiates a new KgSizingDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSchemaVersion

`func (o *KgSizingDto) GetSchemaVersion() int32`

GetSchemaVersion returns the SchemaVersion field if non-nil, zero value otherwise.

### GetSchemaVersionOk

`func (o *KgSizingDto) GetSchemaVersionOk() (*int32, bool)`

GetSchemaVersionOk returns a tuple with the SchemaVersion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchemaVersion

`func (o *KgSizingDto) SetSchemaVersion(v int32)`

SetSchemaVersion sets SchemaVersion field to given value.

### HasSchemaVersion

`func (o *KgSizingDto) HasSchemaVersion() bool`

HasSchemaVersion returns a boolean if a field has been set.

### GetPerTenantConstantSeries

`func (o *KgSizingDto) GetPerTenantConstantSeries() int32`

GetPerTenantConstantSeries returns the PerTenantConstantSeries field if non-nil, zero value otherwise.

### GetPerTenantConstantSeriesOk

`func (o *KgSizingDto) GetPerTenantConstantSeriesOk() (*int32, bool)`

GetPerTenantConstantSeriesOk returns a tuple with the PerTenantConstantSeries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerTenantConstantSeries

`func (o *KgSizingDto) SetPerTenantConstantSeries(v int32)`

SetPerTenantConstantSeries sets PerTenantConstantSeries field to given value.

### HasPerTenantConstantSeries

`func (o *KgSizingDto) HasPerTenantConstantSeries() bool`

HasPerTenantConstantSeries returns a boolean if a field has been set.

### GetDenominator

`func (o *KgSizingDto) GetDenominator() KgSizingDenominatorDto`

GetDenominator returns the Denominator field if non-nil, zero value otherwise.

### GetDenominatorOk

`func (o *KgSizingDto) GetDenominatorOk() (*KgSizingDenominatorDto, bool)`

GetDenominatorOk returns a tuple with the Denominator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenominator

`func (o *KgSizingDto) SetDenominator(v KgSizingDenominatorDto)`

SetDenominator sets Denominator field to given value.

### HasDenominator

`func (o *KgSizingDto) HasDenominator() bool`

HasDenominator returns a boolean if a field has been set.

### GetLevels

`func (o *KgSizingDto) GetLevels() []KgSizingLevelDto`

GetLevels returns the Levels field if non-nil, zero value otherwise.

### GetLevelsOk

`func (o *KgSizingDto) GetLevelsOk() (*[]KgSizingLevelDto, bool)`

GetLevelsOk returns a tuple with the Levels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevels

`func (o *KgSizingDto) SetLevels(v []KgSizingLevelDto)`

SetLevels sets Levels field to given value.

### HasLevels

`func (o *KgSizingDto) HasLevels() bool`

HasLevels returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


