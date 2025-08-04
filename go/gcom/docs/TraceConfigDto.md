# TraceConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Tool** | Pointer to **string** |  | [optional] 
**Url** | Pointer to **string** |  | [optional] 
**LabelToTagMapping** | Pointer to **map[string]string** |  | [optional] 
**ServiceLabel** | Pointer to **string** |  | [optional] 
**OperationLabel** | Pointer to **string** |  | [optional] 
**AssertsCollector** | Pointer to **bool** |  | [optional] 
**AddOutboundContext** | Pointer to **bool** |  | [optional] 
**SuffixServiceWithNamespace** | Pointer to **bool** |  | [optional] 
**IsElasticBackend** | Pointer to **bool** |  | [optional] 
**ProjectName** | Pointer to **string** |  | [optional] 
**IngestedByAgent** | Pointer to **bool** |  | [optional] 
**AwsRegion** | Pointer to **string** |  | [optional] 
**DataSource** | Pointer to **string** |  | [optional] 
**OrgId** | Pointer to **string** |  | [optional] 

## Methods

### NewTraceConfigDto

`func NewTraceConfigDto() *TraceConfigDto`

NewTraceConfigDto instantiates a new TraceConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceConfigDtoWithDefaults

`func NewTraceConfigDtoWithDefaults() *TraceConfigDto`

NewTraceConfigDtoWithDefaults instantiates a new TraceConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTool

`func (o *TraceConfigDto) GetTool() string`

GetTool returns the Tool field if non-nil, zero value otherwise.

### GetToolOk

`func (o *TraceConfigDto) GetToolOk() (*string, bool)`

GetToolOk returns a tuple with the Tool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTool

`func (o *TraceConfigDto) SetTool(v string)`

SetTool sets Tool field to given value.

### HasTool

`func (o *TraceConfigDto) HasTool() bool`

HasTool returns a boolean if a field has been set.

### GetUrl

`func (o *TraceConfigDto) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *TraceConfigDto) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *TraceConfigDto) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *TraceConfigDto) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetLabelToTagMapping

`func (o *TraceConfigDto) GetLabelToTagMapping() map[string]string`

GetLabelToTagMapping returns the LabelToTagMapping field if non-nil, zero value otherwise.

### GetLabelToTagMappingOk

`func (o *TraceConfigDto) GetLabelToTagMappingOk() (*map[string]string, bool)`

GetLabelToTagMappingOk returns a tuple with the LabelToTagMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabelToTagMapping

`func (o *TraceConfigDto) SetLabelToTagMapping(v map[string]string)`

SetLabelToTagMapping sets LabelToTagMapping field to given value.

### HasLabelToTagMapping

`func (o *TraceConfigDto) HasLabelToTagMapping() bool`

HasLabelToTagMapping returns a boolean if a field has been set.

### GetServiceLabel

`func (o *TraceConfigDto) GetServiceLabel() string`

GetServiceLabel returns the ServiceLabel field if non-nil, zero value otherwise.

### GetServiceLabelOk

`func (o *TraceConfigDto) GetServiceLabelOk() (*string, bool)`

GetServiceLabelOk returns a tuple with the ServiceLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceLabel

`func (o *TraceConfigDto) SetServiceLabel(v string)`

SetServiceLabel sets ServiceLabel field to given value.

### HasServiceLabel

`func (o *TraceConfigDto) HasServiceLabel() bool`

HasServiceLabel returns a boolean if a field has been set.

### GetOperationLabel

`func (o *TraceConfigDto) GetOperationLabel() string`

GetOperationLabel returns the OperationLabel field if non-nil, zero value otherwise.

### GetOperationLabelOk

`func (o *TraceConfigDto) GetOperationLabelOk() (*string, bool)`

GetOperationLabelOk returns a tuple with the OperationLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationLabel

`func (o *TraceConfigDto) SetOperationLabel(v string)`

SetOperationLabel sets OperationLabel field to given value.

### HasOperationLabel

`func (o *TraceConfigDto) HasOperationLabel() bool`

HasOperationLabel returns a boolean if a field has been set.

### GetAssertsCollector

`func (o *TraceConfigDto) GetAssertsCollector() bool`

GetAssertsCollector returns the AssertsCollector field if non-nil, zero value otherwise.

### GetAssertsCollectorOk

`func (o *TraceConfigDto) GetAssertsCollectorOk() (*bool, bool)`

GetAssertsCollectorOk returns a tuple with the AssertsCollector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertsCollector

`func (o *TraceConfigDto) SetAssertsCollector(v bool)`

SetAssertsCollector sets AssertsCollector field to given value.

### HasAssertsCollector

`func (o *TraceConfigDto) HasAssertsCollector() bool`

HasAssertsCollector returns a boolean if a field has been set.

### GetAddOutboundContext

`func (o *TraceConfigDto) GetAddOutboundContext() bool`

GetAddOutboundContext returns the AddOutboundContext field if non-nil, zero value otherwise.

### GetAddOutboundContextOk

`func (o *TraceConfigDto) GetAddOutboundContextOk() (*bool, bool)`

GetAddOutboundContextOk returns a tuple with the AddOutboundContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddOutboundContext

`func (o *TraceConfigDto) SetAddOutboundContext(v bool)`

SetAddOutboundContext sets AddOutboundContext field to given value.

### HasAddOutboundContext

`func (o *TraceConfigDto) HasAddOutboundContext() bool`

HasAddOutboundContext returns a boolean if a field has been set.

### GetSuffixServiceWithNamespace

`func (o *TraceConfigDto) GetSuffixServiceWithNamespace() bool`

GetSuffixServiceWithNamespace returns the SuffixServiceWithNamespace field if non-nil, zero value otherwise.

### GetSuffixServiceWithNamespaceOk

`func (o *TraceConfigDto) GetSuffixServiceWithNamespaceOk() (*bool, bool)`

GetSuffixServiceWithNamespaceOk returns a tuple with the SuffixServiceWithNamespace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuffixServiceWithNamespace

`func (o *TraceConfigDto) SetSuffixServiceWithNamespace(v bool)`

SetSuffixServiceWithNamespace sets SuffixServiceWithNamespace field to given value.

### HasSuffixServiceWithNamespace

`func (o *TraceConfigDto) HasSuffixServiceWithNamespace() bool`

HasSuffixServiceWithNamespace returns a boolean if a field has been set.

### GetIsElasticBackend

`func (o *TraceConfigDto) GetIsElasticBackend() bool`

GetIsElasticBackend returns the IsElasticBackend field if non-nil, zero value otherwise.

### GetIsElasticBackendOk

`func (o *TraceConfigDto) GetIsElasticBackendOk() (*bool, bool)`

GetIsElasticBackendOk returns a tuple with the IsElasticBackend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsElasticBackend

`func (o *TraceConfigDto) SetIsElasticBackend(v bool)`

SetIsElasticBackend sets IsElasticBackend field to given value.

### HasIsElasticBackend

`func (o *TraceConfigDto) HasIsElasticBackend() bool`

HasIsElasticBackend returns a boolean if a field has been set.

### GetProjectName

`func (o *TraceConfigDto) GetProjectName() string`

GetProjectName returns the ProjectName field if non-nil, zero value otherwise.

### GetProjectNameOk

`func (o *TraceConfigDto) GetProjectNameOk() (*string, bool)`

GetProjectNameOk returns a tuple with the ProjectName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProjectName

`func (o *TraceConfigDto) SetProjectName(v string)`

SetProjectName sets ProjectName field to given value.

### HasProjectName

`func (o *TraceConfigDto) HasProjectName() bool`

HasProjectName returns a boolean if a field has been set.

### GetIngestedByAgent

`func (o *TraceConfigDto) GetIngestedByAgent() bool`

GetIngestedByAgent returns the IngestedByAgent field if non-nil, zero value otherwise.

### GetIngestedByAgentOk

`func (o *TraceConfigDto) GetIngestedByAgentOk() (*bool, bool)`

GetIngestedByAgentOk returns a tuple with the IngestedByAgent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIngestedByAgent

`func (o *TraceConfigDto) SetIngestedByAgent(v bool)`

SetIngestedByAgent sets IngestedByAgent field to given value.

### HasIngestedByAgent

`func (o *TraceConfigDto) HasIngestedByAgent() bool`

HasIngestedByAgent returns a boolean if a field has been set.

### GetAwsRegion

`func (o *TraceConfigDto) GetAwsRegion() string`

GetAwsRegion returns the AwsRegion field if non-nil, zero value otherwise.

### GetAwsRegionOk

`func (o *TraceConfigDto) GetAwsRegionOk() (*string, bool)`

GetAwsRegionOk returns a tuple with the AwsRegion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsRegion

`func (o *TraceConfigDto) SetAwsRegion(v string)`

SetAwsRegion sets AwsRegion field to given value.

### HasAwsRegion

`func (o *TraceConfigDto) HasAwsRegion() bool`

HasAwsRegion returns a boolean if a field has been set.

### GetDataSource

`func (o *TraceConfigDto) GetDataSource() string`

GetDataSource returns the DataSource field if non-nil, zero value otherwise.

### GetDataSourceOk

`func (o *TraceConfigDto) GetDataSourceOk() (*string, bool)`

GetDataSourceOk returns a tuple with the DataSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSource

`func (o *TraceConfigDto) SetDataSource(v string)`

SetDataSource sets DataSource field to given value.

### HasDataSource

`func (o *TraceConfigDto) HasDataSource() bool`

HasDataSource returns a boolean if a field has been set.

### GetOrgId

`func (o *TraceConfigDto) GetOrgId() string`

GetOrgId returns the OrgId field if non-nil, zero value otherwise.

### GetOrgIdOk

`func (o *TraceConfigDto) GetOrgIdOk() (*string, bool)`

GetOrgIdOk returns a tuple with the OrgId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgId

`func (o *TraceConfigDto) SetOrgId(v string)`

SetOrgId sets OrgId field to given value.

### HasOrgId

`func (o *TraceConfigDto) HasOrgId() bool`

HasOrgId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


