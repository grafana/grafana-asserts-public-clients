# PatternDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] 
**Reason** | Pointer to **string** |  | [optional] 
**IncludedByDefault** | Pointer to **bool** |  | [optional] 
**SrcEntityTypes** | Pointer to **[]string** |  | [optional] 
**RequiredEntityTypes** | Pointer to **[]string** |  | [optional] 
**DstSearch** | **string** |  | 
**Vars** | Pointer to **[]string** |  | [optional] 
**MetricMatches** | Pointer to [**[]MetricMatchDto**](MetricMatchDto.md) |  | [optional] 

## Methods

### NewPatternDto

`func NewPatternDto(name string, dstSearch string, ) *PatternDto`

NewPatternDto instantiates a new PatternDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPatternDtoWithDefaults

`func NewPatternDtoWithDefaults() *PatternDto`

NewPatternDtoWithDefaults instantiates a new PatternDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *PatternDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PatternDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PatternDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *PatternDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PatternDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PatternDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PatternDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetReason

`func (o *PatternDto) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *PatternDto) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *PatternDto) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *PatternDto) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetIncludedByDefault

`func (o *PatternDto) GetIncludedByDefault() bool`

GetIncludedByDefault returns the IncludedByDefault field if non-nil, zero value otherwise.

### GetIncludedByDefaultOk

`func (o *PatternDto) GetIncludedByDefaultOk() (*bool, bool)`

GetIncludedByDefaultOk returns a tuple with the IncludedByDefault field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedByDefault

`func (o *PatternDto) SetIncludedByDefault(v bool)`

SetIncludedByDefault sets IncludedByDefault field to given value.

### HasIncludedByDefault

`func (o *PatternDto) HasIncludedByDefault() bool`

HasIncludedByDefault returns a boolean if a field has been set.

### GetSrcEntityTypes

`func (o *PatternDto) GetSrcEntityTypes() []string`

GetSrcEntityTypes returns the SrcEntityTypes field if non-nil, zero value otherwise.

### GetSrcEntityTypesOk

`func (o *PatternDto) GetSrcEntityTypesOk() (*[]string, bool)`

GetSrcEntityTypesOk returns a tuple with the SrcEntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSrcEntityTypes

`func (o *PatternDto) SetSrcEntityTypes(v []string)`

SetSrcEntityTypes sets SrcEntityTypes field to given value.

### HasSrcEntityTypes

`func (o *PatternDto) HasSrcEntityTypes() bool`

HasSrcEntityTypes returns a boolean if a field has been set.

### GetRequiredEntityTypes

`func (o *PatternDto) GetRequiredEntityTypes() []string`

GetRequiredEntityTypes returns the RequiredEntityTypes field if non-nil, zero value otherwise.

### GetRequiredEntityTypesOk

`func (o *PatternDto) GetRequiredEntityTypesOk() (*[]string, bool)`

GetRequiredEntityTypesOk returns a tuple with the RequiredEntityTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredEntityTypes

`func (o *PatternDto) SetRequiredEntityTypes(v []string)`

SetRequiredEntityTypes sets RequiredEntityTypes field to given value.

### HasRequiredEntityTypes

`func (o *PatternDto) HasRequiredEntityTypes() bool`

HasRequiredEntityTypes returns a boolean if a field has been set.

### GetDstSearch

`func (o *PatternDto) GetDstSearch() string`

GetDstSearch returns the DstSearch field if non-nil, zero value otherwise.

### GetDstSearchOk

`func (o *PatternDto) GetDstSearchOk() (*string, bool)`

GetDstSearchOk returns a tuple with the DstSearch field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDstSearch

`func (o *PatternDto) SetDstSearch(v string)`

SetDstSearch sets DstSearch field to given value.


### GetVars

`func (o *PatternDto) GetVars() []string`

GetVars returns the Vars field if non-nil, zero value otherwise.

### GetVarsOk

`func (o *PatternDto) GetVarsOk() (*[]string, bool)`

GetVarsOk returns a tuple with the Vars field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVars

`func (o *PatternDto) SetVars(v []string)`

SetVars sets Vars field to given value.

### HasVars

`func (o *PatternDto) HasVars() bool`

HasVars returns a boolean if a field has been set.

### GetMetricMatches

`func (o *PatternDto) GetMetricMatches() []MetricMatchDto`

GetMetricMatches returns the MetricMatches field if non-nil, zero value otherwise.

### GetMetricMatchesOk

`func (o *PatternDto) GetMetricMatchesOk() (*[]MetricMatchDto, bool)`

GetMetricMatchesOk returns a tuple with the MetricMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricMatches

`func (o *PatternDto) SetMetricMatches(v []MetricMatchDto)`

SetMetricMatches sets MetricMatches field to given value.

### HasMetricMatches

`func (o *PatternDto) HasMetricMatches() bool`

HasMetricMatches returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


