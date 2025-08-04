# ModelMappingSignalDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**EntityNameLabel** | **string** |  | 
**MetricSource** | **string** |  | 
**RequestType** | **string** |  | 
**RequestContext** | Pointer to **[]string** |  | [optional] 
**RequestContextJoin** | Pointer to **string** |  | [optional] 
**Filters** | Pointer to [**[]ModelMappingSignalFilterDto**](ModelMappingSignalFilterDto.md) |  | [optional] 
**Kind** | **string** |  | 

## Methods

### NewModelMappingSignalDto

`func NewModelMappingSignalDto(entityNameLabel string, metricSource string, requestType string, kind string, ) *ModelMappingSignalDto`

NewModelMappingSignalDto instantiates a new ModelMappingSignalDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewModelMappingSignalDtoWithDefaults

`func NewModelMappingSignalDtoWithDefaults() *ModelMappingSignalDto`

NewModelMappingSignalDtoWithDefaults instantiates a new ModelMappingSignalDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ModelMappingSignalDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ModelMappingSignalDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ModelMappingSignalDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ModelMappingSignalDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetEntityNameLabel

`func (o *ModelMappingSignalDto) GetEntityNameLabel() string`

GetEntityNameLabel returns the EntityNameLabel field if non-nil, zero value otherwise.

### GetEntityNameLabelOk

`func (o *ModelMappingSignalDto) GetEntityNameLabelOk() (*string, bool)`

GetEntityNameLabelOk returns a tuple with the EntityNameLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityNameLabel

`func (o *ModelMappingSignalDto) SetEntityNameLabel(v string)`

SetEntityNameLabel sets EntityNameLabel field to given value.


### GetMetricSource

`func (o *ModelMappingSignalDto) GetMetricSource() string`

GetMetricSource returns the MetricSource field if non-nil, zero value otherwise.

### GetMetricSourceOk

`func (o *ModelMappingSignalDto) GetMetricSourceOk() (*string, bool)`

GetMetricSourceOk returns a tuple with the MetricSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricSource

`func (o *ModelMappingSignalDto) SetMetricSource(v string)`

SetMetricSource sets MetricSource field to given value.


### GetRequestType

`func (o *ModelMappingSignalDto) GetRequestType() string`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *ModelMappingSignalDto) GetRequestTypeOk() (*string, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *ModelMappingSignalDto) SetRequestType(v string)`

SetRequestType sets RequestType field to given value.


### GetRequestContext

`func (o *ModelMappingSignalDto) GetRequestContext() []string`

GetRequestContext returns the RequestContext field if non-nil, zero value otherwise.

### GetRequestContextOk

`func (o *ModelMappingSignalDto) GetRequestContextOk() (*[]string, bool)`

GetRequestContextOk returns a tuple with the RequestContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestContext

`func (o *ModelMappingSignalDto) SetRequestContext(v []string)`

SetRequestContext sets RequestContext field to given value.

### HasRequestContext

`func (o *ModelMappingSignalDto) HasRequestContext() bool`

HasRequestContext returns a boolean if a field has been set.

### GetRequestContextJoin

`func (o *ModelMappingSignalDto) GetRequestContextJoin() string`

GetRequestContextJoin returns the RequestContextJoin field if non-nil, zero value otherwise.

### GetRequestContextJoinOk

`func (o *ModelMappingSignalDto) GetRequestContextJoinOk() (*string, bool)`

GetRequestContextJoinOk returns a tuple with the RequestContextJoin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestContextJoin

`func (o *ModelMappingSignalDto) SetRequestContextJoin(v string)`

SetRequestContextJoin sets RequestContextJoin field to given value.

### HasRequestContextJoin

`func (o *ModelMappingSignalDto) HasRequestContextJoin() bool`

HasRequestContextJoin returns a boolean if a field has been set.

### GetFilters

`func (o *ModelMappingSignalDto) GetFilters() []ModelMappingSignalFilterDto`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *ModelMappingSignalDto) GetFiltersOk() (*[]ModelMappingSignalFilterDto, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *ModelMappingSignalDto) SetFilters(v []ModelMappingSignalFilterDto)`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *ModelMappingSignalDto) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetKind

`func (o *ModelMappingSignalDto) GetKind() string`

GetKind returns the Kind field if non-nil, zero value otherwise.

### GetKindOk

`func (o *ModelMappingSignalDto) GetKindOk() (*string, bool)`

GetKindOk returns a tuple with the Kind field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKind

`func (o *ModelMappingSignalDto) SetKind(v string)`

SetKind sets Kind field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


