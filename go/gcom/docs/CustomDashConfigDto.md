# CustomDashConfigDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DashboardUri** | Pointer to **string** |  | [optional] 
**Uid** | Pointer to **string** |  | [optional] 
**Query** | Pointer to **string** |  | [optional] 
**DashParams** | Pointer to **map[string]string** |  | [optional] 
**DataSourceParam** | Pointer to **string** |  | [optional] 
**AlertCategory** | Pointer to **[]string** |  | [optional] 
**OverrideEntityUri** | Pointer to **bool** |  | [optional] 
**PropertyMatchers** | Pointer to [**[]PropertyMatcherDto**](PropertyMatcherDto.md) |  | [optional] 

## Methods

### NewCustomDashConfigDto

`func NewCustomDashConfigDto() *CustomDashConfigDto`

NewCustomDashConfigDto instantiates a new CustomDashConfigDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomDashConfigDtoWithDefaults

`func NewCustomDashConfigDtoWithDefaults() *CustomDashConfigDto`

NewCustomDashConfigDtoWithDefaults instantiates a new CustomDashConfigDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDashboardUri

`func (o *CustomDashConfigDto) GetDashboardUri() string`

GetDashboardUri returns the DashboardUri field if non-nil, zero value otherwise.

### GetDashboardUriOk

`func (o *CustomDashConfigDto) GetDashboardUriOk() (*string, bool)`

GetDashboardUriOk returns a tuple with the DashboardUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDashboardUri

`func (o *CustomDashConfigDto) SetDashboardUri(v string)`

SetDashboardUri sets DashboardUri field to given value.

### HasDashboardUri

`func (o *CustomDashConfigDto) HasDashboardUri() bool`

HasDashboardUri returns a boolean if a field has been set.

### GetUid

`func (o *CustomDashConfigDto) GetUid() string`

GetUid returns the Uid field if non-nil, zero value otherwise.

### GetUidOk

`func (o *CustomDashConfigDto) GetUidOk() (*string, bool)`

GetUidOk returns a tuple with the Uid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUid

`func (o *CustomDashConfigDto) SetUid(v string)`

SetUid sets Uid field to given value.

### HasUid

`func (o *CustomDashConfigDto) HasUid() bool`

HasUid returns a boolean if a field has been set.

### GetQuery

`func (o *CustomDashConfigDto) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *CustomDashConfigDto) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *CustomDashConfigDto) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *CustomDashConfigDto) HasQuery() bool`

HasQuery returns a boolean if a field has been set.

### GetDashParams

`func (o *CustomDashConfigDto) GetDashParams() map[string]string`

GetDashParams returns the DashParams field if non-nil, zero value otherwise.

### GetDashParamsOk

`func (o *CustomDashConfigDto) GetDashParamsOk() (*map[string]string, bool)`

GetDashParamsOk returns a tuple with the DashParams field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDashParams

`func (o *CustomDashConfigDto) SetDashParams(v map[string]string)`

SetDashParams sets DashParams field to given value.

### HasDashParams

`func (o *CustomDashConfigDto) HasDashParams() bool`

HasDashParams returns a boolean if a field has been set.

### GetDataSourceParam

`func (o *CustomDashConfigDto) GetDataSourceParam() string`

GetDataSourceParam returns the DataSourceParam field if non-nil, zero value otherwise.

### GetDataSourceParamOk

`func (o *CustomDashConfigDto) GetDataSourceParamOk() (*string, bool)`

GetDataSourceParamOk returns a tuple with the DataSourceParam field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataSourceParam

`func (o *CustomDashConfigDto) SetDataSourceParam(v string)`

SetDataSourceParam sets DataSourceParam field to given value.

### HasDataSourceParam

`func (o *CustomDashConfigDto) HasDataSourceParam() bool`

HasDataSourceParam returns a boolean if a field has been set.

### GetAlertCategory

`func (o *CustomDashConfigDto) GetAlertCategory() []string`

GetAlertCategory returns the AlertCategory field if non-nil, zero value otherwise.

### GetAlertCategoryOk

`func (o *CustomDashConfigDto) GetAlertCategoryOk() (*[]string, bool)`

GetAlertCategoryOk returns a tuple with the AlertCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategory

`func (o *CustomDashConfigDto) SetAlertCategory(v []string)`

SetAlertCategory sets AlertCategory field to given value.

### HasAlertCategory

`func (o *CustomDashConfigDto) HasAlertCategory() bool`

HasAlertCategory returns a boolean if a field has been set.

### GetOverrideEntityUri

`func (o *CustomDashConfigDto) GetOverrideEntityUri() bool`

GetOverrideEntityUri returns the OverrideEntityUri field if non-nil, zero value otherwise.

### GetOverrideEntityUriOk

`func (o *CustomDashConfigDto) GetOverrideEntityUriOk() (*bool, bool)`

GetOverrideEntityUriOk returns a tuple with the OverrideEntityUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideEntityUri

`func (o *CustomDashConfigDto) SetOverrideEntityUri(v bool)`

SetOverrideEntityUri sets OverrideEntityUri field to given value.

### HasOverrideEntityUri

`func (o *CustomDashConfigDto) HasOverrideEntityUri() bool`

HasOverrideEntityUri returns a boolean if a field has been set.

### GetPropertyMatchers

`func (o *CustomDashConfigDto) GetPropertyMatchers() []PropertyMatcherDto`

GetPropertyMatchers returns the PropertyMatchers field if non-nil, zero value otherwise.

### GetPropertyMatchersOk

`func (o *CustomDashConfigDto) GetPropertyMatchersOk() (*[]PropertyMatcherDto, bool)`

GetPropertyMatchersOk returns a tuple with the PropertyMatchers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyMatchers

`func (o *CustomDashConfigDto) SetPropertyMatchers(v []PropertyMatcherDto)`

SetPropertyMatchers sets PropertyMatchers field to given value.

### HasPropertyMatchers

`func (o *CustomDashConfigDto) HasPropertyMatchers() bool`

HasPropertyMatchers returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


