# SloTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**TargetSli** | Pointer to **float64** |  | [optional] 
**ActualSli** | Pointer to **float64** |  | [optional] 
**Threshold** | Pointer to **float64** |  | [optional] 
**ComplianceWindowDto** | Pointer to [**ComplianceWindowDto**](ComplianceWindowDto.md) |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**FastBurnViolatingSince** | Pointer to **int64** |  | [optional] 
**SlowBurnViolatingSince** | Pointer to **int64** |  | [optional] 
**FastBurnThreshold** | Pointer to **float64** |  | [optional] 
**SlowBurnThreshold** | Pointer to **float64** |  | [optional] 
**IncidentCount** | Pointer to **int32** |  | [optional] 
**ErrorBudget** | Pointer to **float64** |  | [optional] 
**OneHourErrorBudget** | Pointer to **float64** |  | [optional] 
**BadCount** | Pointer to **float64** |  | [optional] 
**ErrorBudgetBalance** | Pointer to **float64** |  | [optional] 
**TotalCount** | Pointer to **float64** |  | [optional] 
**RecentBurnRate** | Pointer to **float64** |  | [optional] 
**OneHourBurnRate** | Pointer to **float64** |  | [optional] 
**SixHourBurnRate** | Pointer to **float64** |  | [optional] 
**IncidentTriggerDescription** | Pointer to **string** |  | [optional] 

## Methods

### NewSloTargetDto

`func NewSloTargetDto() *SloTargetDto`

NewSloTargetDto instantiates a new SloTargetDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSloTargetDtoWithDefaults

`func NewSloTargetDtoWithDefaults() *SloTargetDto`

NewSloTargetDtoWithDefaults instantiates a new SloTargetDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *SloTargetDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SloTargetDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SloTargetDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SloTargetDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *SloTargetDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SloTargetDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SloTargetDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SloTargetDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTargetSli

`func (o *SloTargetDto) GetTargetSli() float64`

GetTargetSli returns the TargetSli field if non-nil, zero value otherwise.

### GetTargetSliOk

`func (o *SloTargetDto) GetTargetSliOk() (*float64, bool)`

GetTargetSliOk returns a tuple with the TargetSli field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetSli

`func (o *SloTargetDto) SetTargetSli(v float64)`

SetTargetSli sets TargetSli field to given value.

### HasTargetSli

`func (o *SloTargetDto) HasTargetSli() bool`

HasTargetSli returns a boolean if a field has been set.

### GetActualSli

`func (o *SloTargetDto) GetActualSli() float64`

GetActualSli returns the ActualSli field if non-nil, zero value otherwise.

### GetActualSliOk

`func (o *SloTargetDto) GetActualSliOk() (*float64, bool)`

GetActualSliOk returns a tuple with the ActualSli field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualSli

`func (o *SloTargetDto) SetActualSli(v float64)`

SetActualSli sets ActualSli field to given value.

### HasActualSli

`func (o *SloTargetDto) HasActualSli() bool`

HasActualSli returns a boolean if a field has been set.

### GetThreshold

`func (o *SloTargetDto) GetThreshold() float64`

GetThreshold returns the Threshold field if non-nil, zero value otherwise.

### GetThresholdOk

`func (o *SloTargetDto) GetThresholdOk() (*float64, bool)`

GetThresholdOk returns a tuple with the Threshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreshold

`func (o *SloTargetDto) SetThreshold(v float64)`

SetThreshold sets Threshold field to given value.

### HasThreshold

`func (o *SloTargetDto) HasThreshold() bool`

HasThreshold returns a boolean if a field has been set.

### GetComplianceWindowDto

`func (o *SloTargetDto) GetComplianceWindowDto() ComplianceWindowDto`

GetComplianceWindowDto returns the ComplianceWindowDto field if non-nil, zero value otherwise.

### GetComplianceWindowDtoOk

`func (o *SloTargetDto) GetComplianceWindowDtoOk() (*ComplianceWindowDto, bool)`

GetComplianceWindowDtoOk returns a tuple with the ComplianceWindowDto field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComplianceWindowDto

`func (o *SloTargetDto) SetComplianceWindowDto(v ComplianceWindowDto)`

SetComplianceWindowDto sets ComplianceWindowDto field to given value.

### HasComplianceWindowDto

`func (o *SloTargetDto) HasComplianceWindowDto() bool`

HasComplianceWindowDto returns a boolean if a field has been set.

### GetStatus

`func (o *SloTargetDto) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SloTargetDto) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SloTargetDto) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SloTargetDto) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetFastBurnViolatingSince

`func (o *SloTargetDto) GetFastBurnViolatingSince() int64`

GetFastBurnViolatingSince returns the FastBurnViolatingSince field if non-nil, zero value otherwise.

### GetFastBurnViolatingSinceOk

`func (o *SloTargetDto) GetFastBurnViolatingSinceOk() (*int64, bool)`

GetFastBurnViolatingSinceOk returns a tuple with the FastBurnViolatingSince field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFastBurnViolatingSince

`func (o *SloTargetDto) SetFastBurnViolatingSince(v int64)`

SetFastBurnViolatingSince sets FastBurnViolatingSince field to given value.

### HasFastBurnViolatingSince

`func (o *SloTargetDto) HasFastBurnViolatingSince() bool`

HasFastBurnViolatingSince returns a boolean if a field has been set.

### GetSlowBurnViolatingSince

`func (o *SloTargetDto) GetSlowBurnViolatingSince() int64`

GetSlowBurnViolatingSince returns the SlowBurnViolatingSince field if non-nil, zero value otherwise.

### GetSlowBurnViolatingSinceOk

`func (o *SloTargetDto) GetSlowBurnViolatingSinceOk() (*int64, bool)`

GetSlowBurnViolatingSinceOk returns a tuple with the SlowBurnViolatingSince field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlowBurnViolatingSince

`func (o *SloTargetDto) SetSlowBurnViolatingSince(v int64)`

SetSlowBurnViolatingSince sets SlowBurnViolatingSince field to given value.

### HasSlowBurnViolatingSince

`func (o *SloTargetDto) HasSlowBurnViolatingSince() bool`

HasSlowBurnViolatingSince returns a boolean if a field has been set.

### GetFastBurnThreshold

`func (o *SloTargetDto) GetFastBurnThreshold() float64`

GetFastBurnThreshold returns the FastBurnThreshold field if non-nil, zero value otherwise.

### GetFastBurnThresholdOk

`func (o *SloTargetDto) GetFastBurnThresholdOk() (*float64, bool)`

GetFastBurnThresholdOk returns a tuple with the FastBurnThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFastBurnThreshold

`func (o *SloTargetDto) SetFastBurnThreshold(v float64)`

SetFastBurnThreshold sets FastBurnThreshold field to given value.

### HasFastBurnThreshold

`func (o *SloTargetDto) HasFastBurnThreshold() bool`

HasFastBurnThreshold returns a boolean if a field has been set.

### GetSlowBurnThreshold

`func (o *SloTargetDto) GetSlowBurnThreshold() float64`

GetSlowBurnThreshold returns the SlowBurnThreshold field if non-nil, zero value otherwise.

### GetSlowBurnThresholdOk

`func (o *SloTargetDto) GetSlowBurnThresholdOk() (*float64, bool)`

GetSlowBurnThresholdOk returns a tuple with the SlowBurnThreshold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlowBurnThreshold

`func (o *SloTargetDto) SetSlowBurnThreshold(v float64)`

SetSlowBurnThreshold sets SlowBurnThreshold field to given value.

### HasSlowBurnThreshold

`func (o *SloTargetDto) HasSlowBurnThreshold() bool`

HasSlowBurnThreshold returns a boolean if a field has been set.

### GetIncidentCount

`func (o *SloTargetDto) GetIncidentCount() int32`

GetIncidentCount returns the IncidentCount field if non-nil, zero value otherwise.

### GetIncidentCountOk

`func (o *SloTargetDto) GetIncidentCountOk() (*int32, bool)`

GetIncidentCountOk returns a tuple with the IncidentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentCount

`func (o *SloTargetDto) SetIncidentCount(v int32)`

SetIncidentCount sets IncidentCount field to given value.

### HasIncidentCount

`func (o *SloTargetDto) HasIncidentCount() bool`

HasIncidentCount returns a boolean if a field has been set.

### GetErrorBudget

`func (o *SloTargetDto) GetErrorBudget() float64`

GetErrorBudget returns the ErrorBudget field if non-nil, zero value otherwise.

### GetErrorBudgetOk

`func (o *SloTargetDto) GetErrorBudgetOk() (*float64, bool)`

GetErrorBudgetOk returns a tuple with the ErrorBudget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorBudget

`func (o *SloTargetDto) SetErrorBudget(v float64)`

SetErrorBudget sets ErrorBudget field to given value.

### HasErrorBudget

`func (o *SloTargetDto) HasErrorBudget() bool`

HasErrorBudget returns a boolean if a field has been set.

### GetOneHourErrorBudget

`func (o *SloTargetDto) GetOneHourErrorBudget() float64`

GetOneHourErrorBudget returns the OneHourErrorBudget field if non-nil, zero value otherwise.

### GetOneHourErrorBudgetOk

`func (o *SloTargetDto) GetOneHourErrorBudgetOk() (*float64, bool)`

GetOneHourErrorBudgetOk returns a tuple with the OneHourErrorBudget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOneHourErrorBudget

`func (o *SloTargetDto) SetOneHourErrorBudget(v float64)`

SetOneHourErrorBudget sets OneHourErrorBudget field to given value.

### HasOneHourErrorBudget

`func (o *SloTargetDto) HasOneHourErrorBudget() bool`

HasOneHourErrorBudget returns a boolean if a field has been set.

### GetBadCount

`func (o *SloTargetDto) GetBadCount() float64`

GetBadCount returns the BadCount field if non-nil, zero value otherwise.

### GetBadCountOk

`func (o *SloTargetDto) GetBadCountOk() (*float64, bool)`

GetBadCountOk returns a tuple with the BadCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBadCount

`func (o *SloTargetDto) SetBadCount(v float64)`

SetBadCount sets BadCount field to given value.

### HasBadCount

`func (o *SloTargetDto) HasBadCount() bool`

HasBadCount returns a boolean if a field has been set.

### GetErrorBudgetBalance

`func (o *SloTargetDto) GetErrorBudgetBalance() float64`

GetErrorBudgetBalance returns the ErrorBudgetBalance field if non-nil, zero value otherwise.

### GetErrorBudgetBalanceOk

`func (o *SloTargetDto) GetErrorBudgetBalanceOk() (*float64, bool)`

GetErrorBudgetBalanceOk returns a tuple with the ErrorBudgetBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorBudgetBalance

`func (o *SloTargetDto) SetErrorBudgetBalance(v float64)`

SetErrorBudgetBalance sets ErrorBudgetBalance field to given value.

### HasErrorBudgetBalance

`func (o *SloTargetDto) HasErrorBudgetBalance() bool`

HasErrorBudgetBalance returns a boolean if a field has been set.

### GetTotalCount

`func (o *SloTargetDto) GetTotalCount() float64`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *SloTargetDto) GetTotalCountOk() (*float64, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *SloTargetDto) SetTotalCount(v float64)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *SloTargetDto) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.

### GetRecentBurnRate

`func (o *SloTargetDto) GetRecentBurnRate() float64`

GetRecentBurnRate returns the RecentBurnRate field if non-nil, zero value otherwise.

### GetRecentBurnRateOk

`func (o *SloTargetDto) GetRecentBurnRateOk() (*float64, bool)`

GetRecentBurnRateOk returns a tuple with the RecentBurnRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecentBurnRate

`func (o *SloTargetDto) SetRecentBurnRate(v float64)`

SetRecentBurnRate sets RecentBurnRate field to given value.

### HasRecentBurnRate

`func (o *SloTargetDto) HasRecentBurnRate() bool`

HasRecentBurnRate returns a boolean if a field has been set.

### GetOneHourBurnRate

`func (o *SloTargetDto) GetOneHourBurnRate() float64`

GetOneHourBurnRate returns the OneHourBurnRate field if non-nil, zero value otherwise.

### GetOneHourBurnRateOk

`func (o *SloTargetDto) GetOneHourBurnRateOk() (*float64, bool)`

GetOneHourBurnRateOk returns a tuple with the OneHourBurnRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOneHourBurnRate

`func (o *SloTargetDto) SetOneHourBurnRate(v float64)`

SetOneHourBurnRate sets OneHourBurnRate field to given value.

### HasOneHourBurnRate

`func (o *SloTargetDto) HasOneHourBurnRate() bool`

HasOneHourBurnRate returns a boolean if a field has been set.

### GetSixHourBurnRate

`func (o *SloTargetDto) GetSixHourBurnRate() float64`

GetSixHourBurnRate returns the SixHourBurnRate field if non-nil, zero value otherwise.

### GetSixHourBurnRateOk

`func (o *SloTargetDto) GetSixHourBurnRateOk() (*float64, bool)`

GetSixHourBurnRateOk returns a tuple with the SixHourBurnRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSixHourBurnRate

`func (o *SloTargetDto) SetSixHourBurnRate(v float64)`

SetSixHourBurnRate sets SixHourBurnRate field to given value.

### HasSixHourBurnRate

`func (o *SloTargetDto) HasSixHourBurnRate() bool`

HasSixHourBurnRate returns a boolean if a field has been set.

### GetIncidentTriggerDescription

`func (o *SloTargetDto) GetIncidentTriggerDescription() string`

GetIncidentTriggerDescription returns the IncidentTriggerDescription field if non-nil, zero value otherwise.

### GetIncidentTriggerDescriptionOk

`func (o *SloTargetDto) GetIncidentTriggerDescriptionOk() (*string, bool)`

GetIncidentTriggerDescriptionOk returns a tuple with the IncidentTriggerDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncidentTriggerDescription

`func (o *SloTargetDto) SetIncidentTriggerDescription(v string)`

SetIncidentTriggerDescription sets IncidentTriggerDescription field to given value.

### HasIncidentTriggerDescription

`func (o *SloTargetDto) HasIncidentTriggerDescription() bool`

HasIncidentTriggerDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


