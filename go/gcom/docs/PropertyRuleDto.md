# PropertyRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** |  | [optional] 
**LabelValues** | Pointer to **map[string]string** |  | [optional] 
**Literals** | Pointer to **map[string]string** |  | [optional] 
**MetricValue** | Pointer to **string** |  | [optional] 
**Disabled** | Pointer to **bool** |  | [optional] 
**Source** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**File** | Pointer to **string** |  | [optional] 
**Headers** | Pointer to **map[string]string** |  | [optional] 
**ResponseMapping** | Pointer to **string** |  | [optional] 
**RefreshInterval** | Pointer to **string** |  | [optional] 

## Methods

### NewPropertyRuleDto

`func NewPropertyRuleDto() *PropertyRuleDto`

NewPropertyRuleDto instantiates a new PropertyRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyRuleDtoWithDefaults

`func NewPropertyRuleDtoWithDefaults() *PropertyRuleDto`

NewPropertyRuleDtoWithDefaults instantiates a new PropertyRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *PropertyRuleDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *PropertyRuleDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *PropertyRuleDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *PropertyRuleDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetLabelValues

`func (o *PropertyRuleDto) GetLabelValues() map[string]string`

GetLabelValues returns the LabelValues field if non-nil, zero value otherwise.

### GetLabelValuesOk

`func (o *PropertyRuleDto) GetLabelValuesOk() (*map[string]string, bool)`

GetLabelValuesOk returns a tuple with the LabelValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelValues

`func (o *PropertyRuleDto) SetLabelValues(v map[string]string)`

SetLabelValues sets LabelValues field to given value.

### HasLabelValues

`func (o *PropertyRuleDto) HasLabelValues() bool`

HasLabelValues returns a boolean if a field has been set.

### GetLiterals

`func (o *PropertyRuleDto) GetLiterals() map[string]string`

GetLiterals returns the Literals field if non-nil, zero value otherwise.

### GetLiteralsOk

`func (o *PropertyRuleDto) GetLiteralsOk() (*map[string]string, bool)`

GetLiteralsOk returns a tuple with the Literals field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLiterals

`func (o *PropertyRuleDto) SetLiterals(v map[string]string)`

SetLiterals sets Literals field to given value.

### HasLiterals

`func (o *PropertyRuleDto) HasLiterals() bool`

HasLiterals returns a boolean if a field has been set.

### GetMetricValue

`func (o *PropertyRuleDto) GetMetricValue() string`

GetMetricValue returns the MetricValue field if non-nil, zero value otherwise.

### GetMetricValueOk

`func (o *PropertyRuleDto) GetMetricValueOk() (*string, bool)`

GetMetricValueOk returns a tuple with the MetricValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricValue

`func (o *PropertyRuleDto) SetMetricValue(v string)`

SetMetricValue sets MetricValue field to given value.

### HasMetricValue

`func (o *PropertyRuleDto) HasMetricValue() bool`

HasMetricValue returns a boolean if a field has been set.

### GetDisabled

`func (o *PropertyRuleDto) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *PropertyRuleDto) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *PropertyRuleDto) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *PropertyRuleDto) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetSource

`func (o *PropertyRuleDto) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *PropertyRuleDto) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *PropertyRuleDto) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *PropertyRuleDto) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetUrl

`func (o *PropertyRuleDto) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *PropertyRuleDto) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *PropertyRuleDto) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *PropertyRuleDto) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetFile

`func (o *PropertyRuleDto) GetFile() string`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *PropertyRuleDto) GetFileOk() (*string, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *PropertyRuleDto) SetFile(v string)`

SetFile sets File field to given value.

### HasFile

`func (o *PropertyRuleDto) HasFile() bool`

HasFile returns a boolean if a field has been set.

### GetHeaders

`func (o *PropertyRuleDto) GetHeaders() map[string]string`

GetHeaders returns the Headers field if non-nil, zero value otherwise.

### GetHeadersOk

`func (o *PropertyRuleDto) GetHeadersOk() (*map[string]string, bool)`

GetHeadersOk returns a tuple with the Headers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeaders

`func (o *PropertyRuleDto) SetHeaders(v map[string]string)`

SetHeaders sets Headers field to given value.

### HasHeaders

`func (o *PropertyRuleDto) HasHeaders() bool`

HasHeaders returns a boolean if a field has been set.

### GetResponseMapping

`func (o *PropertyRuleDto) GetResponseMapping() string`

GetResponseMapping returns the ResponseMapping field if non-nil, zero value otherwise.

### GetResponseMappingOk

`func (o *PropertyRuleDto) GetResponseMappingOk() (*string, bool)`

GetResponseMappingOk returns a tuple with the ResponseMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseMapping

`func (o *PropertyRuleDto) SetResponseMapping(v string)`

SetResponseMapping sets ResponseMapping field to given value.

### HasResponseMapping

`func (o *PropertyRuleDto) HasResponseMapping() bool`

HasResponseMapping returns a boolean if a field has been set.

### GetRefreshInterval

`func (o *PropertyRuleDto) GetRefreshInterval() string`

GetRefreshInterval returns the RefreshInterval field if non-nil, zero value otherwise.

### GetRefreshIntervalOk

`func (o *PropertyRuleDto) GetRefreshIntervalOk() (*string, bool)`

GetRefreshIntervalOk returns a tuple with the RefreshInterval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshInterval

`func (o *PropertyRuleDto) SetRefreshInterval(v string)`

SetRefreshInterval sets RefreshInterval field to given value.

### HasRefreshInterval

`func (o *PropertyRuleDto) HasRefreshInterval() bool`

HasRefreshInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


