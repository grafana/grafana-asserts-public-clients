# KpiDisplayConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultDashboard** | Pointer to **bool** |  | [optional] 
**AdditionalDashboard** | Pointer to **bool** |  | [optional] 
**FrameworkDashboard** | Pointer to **bool** |  | [optional] 
**RuntimeDashboard** | Pointer to **bool** |  | [optional] 
**K8sAppView** | Pointer to **bool** |  | [optional] 
**AppO11yAppView** | Pointer to **bool** |  | [optional] 
**FrontendO11yAppView** | Pointer to **bool** |  | [optional] 
**AwsAppView** | Pointer to **bool** |  | [optional] 
**LogsView** | Pointer to **bool** |  | [optional] 
**TracesView** | Pointer to **bool** |  | [optional] 
**PropertiesView** | Pointer to **bool** |  | [optional] 
**MetricsView** | Pointer to **bool** |  | [optional] 

## Methods

### NewKpiDisplayConfigDto

`func NewKpiDisplayConfigDto() *KpiDisplayConfigDto`

NewKpiDisplayConfigDto instantiates a new KpiDisplayConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKpiDisplayConfigDtoWithDefaults

`func NewKpiDisplayConfigDtoWithDefaults() *KpiDisplayConfigDto`

NewKpiDisplayConfigDtoWithDefaults instantiates a new KpiDisplayConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultDashboard

`func (o *KpiDisplayConfigDto) GetDefaultDashboard() bool`

GetDefaultDashboard returns the DefaultDashboard field if non-nil, zero value otherwise.

### GetDefaultDashboardOk

`func (o *KpiDisplayConfigDto) GetDefaultDashboardOk() (*bool, bool)`

GetDefaultDashboardOk returns a tuple with the DefaultDashboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultDashboard

`func (o *KpiDisplayConfigDto) SetDefaultDashboard(v bool)`

SetDefaultDashboard sets DefaultDashboard field to given value.

### HasDefaultDashboard

`func (o *KpiDisplayConfigDto) HasDefaultDashboard() bool`

HasDefaultDashboard returns a boolean if a field has been set.

### GetAdditionalDashboard

`func (o *KpiDisplayConfigDto) GetAdditionalDashboard() bool`

GetAdditionalDashboard returns the AdditionalDashboard field if non-nil, zero value otherwise.

### GetAdditionalDashboardOk

`func (o *KpiDisplayConfigDto) GetAdditionalDashboardOk() (*bool, bool)`

GetAdditionalDashboardOk returns a tuple with the AdditionalDashboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalDashboard

`func (o *KpiDisplayConfigDto) SetAdditionalDashboard(v bool)`

SetAdditionalDashboard sets AdditionalDashboard field to given value.

### HasAdditionalDashboard

`func (o *KpiDisplayConfigDto) HasAdditionalDashboard() bool`

HasAdditionalDashboard returns a boolean if a field has been set.

### GetFrameworkDashboard

`func (o *KpiDisplayConfigDto) GetFrameworkDashboard() bool`

GetFrameworkDashboard returns the FrameworkDashboard field if non-nil, zero value otherwise.

### GetFrameworkDashboardOk

`func (o *KpiDisplayConfigDto) GetFrameworkDashboardOk() (*bool, bool)`

GetFrameworkDashboardOk returns a tuple with the FrameworkDashboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrameworkDashboard

`func (o *KpiDisplayConfigDto) SetFrameworkDashboard(v bool)`

SetFrameworkDashboard sets FrameworkDashboard field to given value.

### HasFrameworkDashboard

`func (o *KpiDisplayConfigDto) HasFrameworkDashboard() bool`

HasFrameworkDashboard returns a boolean if a field has been set.

### GetRuntimeDashboard

`func (o *KpiDisplayConfigDto) GetRuntimeDashboard() bool`

GetRuntimeDashboard returns the RuntimeDashboard field if non-nil, zero value otherwise.

### GetRuntimeDashboardOk

`func (o *KpiDisplayConfigDto) GetRuntimeDashboardOk() (*bool, bool)`

GetRuntimeDashboardOk returns a tuple with the RuntimeDashboard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRuntimeDashboard

`func (o *KpiDisplayConfigDto) SetRuntimeDashboard(v bool)`

SetRuntimeDashboard sets RuntimeDashboard field to given value.

### HasRuntimeDashboard

`func (o *KpiDisplayConfigDto) HasRuntimeDashboard() bool`

HasRuntimeDashboard returns a boolean if a field has been set.

### GetK8sAppView

`func (o *KpiDisplayConfigDto) GetK8sAppView() bool`

GetK8sAppView returns the K8sAppView field if non-nil, zero value otherwise.

### GetK8sAppViewOk

`func (o *KpiDisplayConfigDto) GetK8sAppViewOk() (*bool, bool)`

GetK8sAppViewOk returns a tuple with the K8sAppView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetK8sAppView

`func (o *KpiDisplayConfigDto) SetK8sAppView(v bool)`

SetK8sAppView sets K8sAppView field to given value.

### HasK8sAppView

`func (o *KpiDisplayConfigDto) HasK8sAppView() bool`

HasK8sAppView returns a boolean if a field has been set.

### GetAppO11yAppView

`func (o *KpiDisplayConfigDto) GetAppO11yAppView() bool`

GetAppO11yAppView returns the AppO11yAppView field if non-nil, zero value otherwise.

### GetAppO11yAppViewOk

`func (o *KpiDisplayConfigDto) GetAppO11yAppViewOk() (*bool, bool)`

GetAppO11yAppViewOk returns a tuple with the AppO11yAppView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppO11yAppView

`func (o *KpiDisplayConfigDto) SetAppO11yAppView(v bool)`

SetAppO11yAppView sets AppO11yAppView field to given value.

### HasAppO11yAppView

`func (o *KpiDisplayConfigDto) HasAppO11yAppView() bool`

HasAppO11yAppView returns a boolean if a field has been set.

### GetFrontendO11yAppView

`func (o *KpiDisplayConfigDto) GetFrontendO11yAppView() bool`

GetFrontendO11yAppView returns the FrontendO11yAppView field if non-nil, zero value otherwise.

### GetFrontendO11yAppViewOk

`func (o *KpiDisplayConfigDto) GetFrontendO11yAppViewOk() (*bool, bool)`

GetFrontendO11yAppViewOk returns a tuple with the FrontendO11yAppView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontendO11yAppView

`func (o *KpiDisplayConfigDto) SetFrontendO11yAppView(v bool)`

SetFrontendO11yAppView sets FrontendO11yAppView field to given value.

### HasFrontendO11yAppView

`func (o *KpiDisplayConfigDto) HasFrontendO11yAppView() bool`

HasFrontendO11yAppView returns a boolean if a field has been set.

### GetAwsAppView

`func (o *KpiDisplayConfigDto) GetAwsAppView() bool`

GetAwsAppView returns the AwsAppView field if non-nil, zero value otherwise.

### GetAwsAppViewOk

`func (o *KpiDisplayConfigDto) GetAwsAppViewOk() (*bool, bool)`

GetAwsAppViewOk returns a tuple with the AwsAppView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwsAppView

`func (o *KpiDisplayConfigDto) SetAwsAppView(v bool)`

SetAwsAppView sets AwsAppView field to given value.

### HasAwsAppView

`func (o *KpiDisplayConfigDto) HasAwsAppView() bool`

HasAwsAppView returns a boolean if a field has been set.

### GetLogsView

`func (o *KpiDisplayConfigDto) GetLogsView() bool`

GetLogsView returns the LogsView field if non-nil, zero value otherwise.

### GetLogsViewOk

`func (o *KpiDisplayConfigDto) GetLogsViewOk() (*bool, bool)`

GetLogsViewOk returns a tuple with the LogsView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogsView

`func (o *KpiDisplayConfigDto) SetLogsView(v bool)`

SetLogsView sets LogsView field to given value.

### HasLogsView

`func (o *KpiDisplayConfigDto) HasLogsView() bool`

HasLogsView returns a boolean if a field has been set.

### GetTracesView

`func (o *KpiDisplayConfigDto) GetTracesView() bool`

GetTracesView returns the TracesView field if non-nil, zero value otherwise.

### GetTracesViewOk

`func (o *KpiDisplayConfigDto) GetTracesViewOk() (*bool, bool)`

GetTracesViewOk returns a tuple with the TracesView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTracesView

`func (o *KpiDisplayConfigDto) SetTracesView(v bool)`

SetTracesView sets TracesView field to given value.

### HasTracesView

`func (o *KpiDisplayConfigDto) HasTracesView() bool`

HasTracesView returns a boolean if a field has been set.

### GetPropertiesView

`func (o *KpiDisplayConfigDto) GetPropertiesView() bool`

GetPropertiesView returns the PropertiesView field if non-nil, zero value otherwise.

### GetPropertiesViewOk

`func (o *KpiDisplayConfigDto) GetPropertiesViewOk() (*bool, bool)`

GetPropertiesViewOk returns a tuple with the PropertiesView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertiesView

`func (o *KpiDisplayConfigDto) SetPropertiesView(v bool)`

SetPropertiesView sets PropertiesView field to given value.

### HasPropertiesView

`func (o *KpiDisplayConfigDto) HasPropertiesView() bool`

HasPropertiesView returns a boolean if a field has been set.

### GetMetricsView

`func (o *KpiDisplayConfigDto) GetMetricsView() bool`

GetMetricsView returns the MetricsView field if non-nil, zero value otherwise.

### GetMetricsViewOk

`func (o *KpiDisplayConfigDto) GetMetricsViewOk() (*bool, bool)`

GetMetricsViewOk returns a tuple with the MetricsView field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetricsView

`func (o *KpiDisplayConfigDto) SetMetricsView(v bool)`

SetMetricsView sets MetricsView field to given value.

### HasMetricsView

`func (o *KpiDisplayConfigDto) HasMetricsView() bool`

HasMetricsView returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


