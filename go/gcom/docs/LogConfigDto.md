# LogConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tool** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**DateFormat** | Pointer to **string** |  | [optional] 
**CorrelationLabels** | Pointer to **string** |  | [optional] 
**LabelToLogFieldMapping** | Pointer to **map[string]string** |  | [optional] 
**DefaultSearchText** | Pointer to **string** |  | [optional] 
**ErrorFilter** | Pointer to **string** |  | [optional] 
**Columns** | Pointer to **[]string** |  | [optional] 
**Filters** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Index** | Pointer to **string** |  | [optional] 
**IndexMappings** | Pointer to [**[]IndexMappingDto**](IndexMappingDto.md) |  | [optional] 
**Interval** | Pointer to **string** |  | [optional] 
**Query** | Pointer to **map[string]string** |  | [optional] 
**Sort** | Pointer to **[]string** |  | [optional] 
**HttpResponseCodeField** | Pointer to **string** |  | [optional] 
**OrgId** | Pointer to **string** |  | [optional] 
**DataSource** | Pointer to **string** |  | [optional] 

## Methods

### NewLogConfigDto

`func NewLogConfigDto() *LogConfigDto`

NewLogConfigDto instantiates a new LogConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLogConfigDtoWithDefaults

`func NewLogConfigDtoWithDefaults() *LogConfigDto`

NewLogConfigDtoWithDefaults instantiates a new LogConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTool

`func (o *LogConfigDto) GetTool() string`

GetTool returns the Tool field if non-nil, zero value otherwise.

### GetToolOk

`func (o *LogConfigDto) GetToolOk() (*string, bool)`

GetToolOk returns a tuple with the Tool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTool

`func (o *LogConfigDto) SetTool(v string)`

SetTool sets Tool field to given value.

### HasTool

`func (o *LogConfigDto) HasTool() bool`

HasTool returns a boolean if a field has been set.

### GetUrl

`func (o *LogConfigDto) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *LogConfigDto) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *LogConfigDto) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *LogConfigDto) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetDateFormat

`func (o *LogConfigDto) GetDateFormat() string`

GetDateFormat returns the DateFormat field if non-nil, zero value otherwise.

### GetDateFormatOk

`func (o *LogConfigDto) GetDateFormatOk() (*string, bool)`

GetDateFormatOk returns a tuple with the DateFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateFormat

`func (o *LogConfigDto) SetDateFormat(v string)`

SetDateFormat sets DateFormat field to given value.

### HasDateFormat

`func (o *LogConfigDto) HasDateFormat() bool`

HasDateFormat returns a boolean if a field has been set.

### GetCorrelationLabels

`func (o *LogConfigDto) GetCorrelationLabels() string`

GetCorrelationLabels returns the CorrelationLabels field if non-nil, zero value otherwise.

### GetCorrelationLabelsOk

`func (o *LogConfigDto) GetCorrelationLabelsOk() (*string, bool)`

GetCorrelationLabelsOk returns a tuple with the CorrelationLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrelationLabels

`func (o *LogConfigDto) SetCorrelationLabels(v string)`

SetCorrelationLabels sets CorrelationLabels field to given value.

### HasCorrelationLabels

`func (o *LogConfigDto) HasCorrelationLabels() bool`

HasCorrelationLabels returns a boolean if a field has been set.

### GetLabelToLogFieldMapping

`func (o *LogConfigDto) GetLabelToLogFieldMapping() map[string]string`

GetLabelToLogFieldMapping returns the LabelToLogFieldMapping field if non-nil, zero value otherwise.

### GetLabelToLogFieldMappingOk

`func (o *LogConfigDto) GetLabelToLogFieldMappingOk() (*map[string]string, bool)`

GetLabelToLogFieldMappingOk returns a tuple with the LabelToLogFieldMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelToLogFieldMapping

`func (o *LogConfigDto) SetLabelToLogFieldMapping(v map[string]string)`

SetLabelToLogFieldMapping sets LabelToLogFieldMapping field to given value.

### HasLabelToLogFieldMapping

`func (o *LogConfigDto) HasLabelToLogFieldMapping() bool`

HasLabelToLogFieldMapping returns a boolean if a field has been set.

### GetDefaultSearchText

`func (o *LogConfigDto) GetDefaultSearchText() string`

GetDefaultSearchText returns the DefaultSearchText field if non-nil, zero value otherwise.

### GetDefaultSearchTextOk

`func (o *LogConfigDto) GetDefaultSearchTextOk() (*string, bool)`

GetDefaultSearchTextOk returns a tuple with the DefaultSearchText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultSearchText

`func (o *LogConfigDto) SetDefaultSearchText(v string)`

SetDefaultSearchText sets DefaultSearchText field to given value.

### HasDefaultSearchText

`func (o *LogConfigDto) HasDefaultSearchText() bool`

HasDefaultSearchText returns a boolean if a field has been set.

### GetErrorFilter

`func (o *LogConfigDto) GetErrorFilter() string`

GetErrorFilter returns the ErrorFilter field if non-nil, zero value otherwise.

### GetErrorFilterOk

`func (o *LogConfigDto) GetErrorFilterOk() (*string, bool)`

GetErrorFilterOk returns a tuple with the ErrorFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorFilter

`func (o *LogConfigDto) SetErrorFilter(v string)`

SetErrorFilter sets ErrorFilter field to given value.

### HasErrorFilter

`func (o *LogConfigDto) HasErrorFilter() bool`

HasErrorFilter returns a boolean if a field has been set.

### GetColumns

`func (o *LogConfigDto) GetColumns() []string`

GetColumns returns the Columns field if non-nil, zero value otherwise.

### GetColumnsOk

`func (o *LogConfigDto) GetColumnsOk() (*[]string, bool)`

GetColumnsOk returns a tuple with the Columns field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColumns

`func (o *LogConfigDto) SetColumns(v []string)`

SetColumns sets Columns field to given value.

### HasColumns

`func (o *LogConfigDto) HasColumns() bool`

HasColumns returns a boolean if a field has been set.

### GetFilters

`func (o *LogConfigDto) GetFilters() []map[string]interface{}`

GetFilters returns the Filters field if non-nil, zero value otherwise.

### GetFiltersOk

`func (o *LogConfigDto) GetFiltersOk() (*[]map[string]interface{}, bool)`

GetFiltersOk returns a tuple with the Filters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilters

`func (o *LogConfigDto) SetFilters(v []map[string]interface{})`

SetFilters sets Filters field to given value.

### HasFilters

`func (o *LogConfigDto) HasFilters() bool`

HasFilters returns a boolean if a field has been set.

### GetIndex

`func (o *LogConfigDto) GetIndex() string`

GetIndex returns the Index field if non-nil, zero value otherwise.

### GetIndexOk

`func (o *LogConfigDto) GetIndexOk() (*string, bool)`

GetIndexOk returns a tuple with the Index field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndex

`func (o *LogConfigDto) SetIndex(v string)`

SetIndex sets Index field to given value.

### HasIndex

`func (o *LogConfigDto) HasIndex() bool`

HasIndex returns a boolean if a field has been set.

### GetIndexMappings

`func (o *LogConfigDto) GetIndexMappings() []IndexMappingDto`

GetIndexMappings returns the IndexMappings field if non-nil, zero value otherwise.

### GetIndexMappingsOk

`func (o *LogConfigDto) GetIndexMappingsOk() (*[]IndexMappingDto, bool)`

GetIndexMappingsOk returns a tuple with the IndexMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndexMappings

`func (o *LogConfigDto) SetIndexMappings(v []IndexMappingDto)`

SetIndexMappings sets IndexMappings field to given value.

### HasIndexMappings

`func (o *LogConfigDto) HasIndexMappings() bool`

HasIndexMappings returns a boolean if a field has been set.

### GetInterval

`func (o *LogConfigDto) GetInterval() string`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *LogConfigDto) GetIntervalOk() (*string, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *LogConfigDto) SetInterval(v string)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *LogConfigDto) HasInterval() bool`

HasInterval returns a boolean if a field has been set.

### GetQuery

`func (o *LogConfigDto) GetQuery() map[string]string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *LogConfigDto) GetQueryOk() (*map[string]string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *LogConfigDto) SetQuery(v map[string]string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *LogConfigDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetSort

`func (o *LogConfigDto) GetSort() []string`

GetSort returns the Sort field if non-nil, zero value otherwise.

### GetSortOk

`func (o *LogConfigDto) GetSortOk() (*[]string, bool)`

GetSortOk returns a tuple with the Sort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSort

`func (o *LogConfigDto) SetSort(v []string)`

SetSort sets Sort field to given value.

### HasSort

`func (o *LogConfigDto) HasSort() bool`

HasSort returns a boolean if a field has been set.

### GetHttpResponseCodeField

`func (o *LogConfigDto) GetHttpResponseCodeField() string`

GetHttpResponseCodeField returns the HttpResponseCodeField field if non-nil, zero value otherwise.

### GetHttpResponseCodeFieldOk

`func (o *LogConfigDto) GetHttpResponseCodeFieldOk() (*string, bool)`

GetHttpResponseCodeFieldOk returns a tuple with the HttpResponseCodeField field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpResponseCodeField

`func (o *LogConfigDto) SetHttpResponseCodeField(v string)`

SetHttpResponseCodeField sets HttpResponseCodeField field to given value.

### HasHttpResponseCodeField

`func (o *LogConfigDto) HasHttpResponseCodeField() bool`

HasHttpResponseCodeField returns a boolean if a field has been set.

### GetOrgId

`func (o *LogConfigDto) GetOrgId() string`

GetOrgId returns the OrgId field if non-nil, zero value otherwise.

### GetOrgIdOk

`func (o *LogConfigDto) GetOrgIdOk() (*string, bool)`

GetOrgIdOk returns a tuple with the OrgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgId

`func (o *LogConfigDto) SetOrgId(v string)`

SetOrgId sets OrgId field to given value.

### HasOrgId

`func (o *LogConfigDto) HasOrgId() bool`

HasOrgId returns a boolean if a field has been set.

### GetDataSource

`func (o *LogConfigDto) GetDataSource() string`

GetDataSource returns the DataSource field if non-nil, zero value otherwise.

### GetDataSourceOk

`func (o *LogConfigDto) GetDataSourceOk() (*string, bool)`

GetDataSourceOk returns a tuple with the DataSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSource

`func (o *LogConfigDto) SetDataSource(v string)`

SetDataSource sets DataSource field to given value.

### HasDataSource

`func (o *LogConfigDto) HasDataSource() bool`

HasDataSource returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


