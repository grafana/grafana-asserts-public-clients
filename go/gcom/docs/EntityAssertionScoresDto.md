# EntityAssertionScoresDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**TypeLabels** | Pointer to **map[string]string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Metrics** | Pointer to [**[]MetricDto**](MetricDto.md) |  | [optional] 
**TotalScore** | Pointer to **float64** |  | [optional] 
**SeverityWiseTotalScores** | Pointer to **map[string]float64** |  | [optional] 
**Percentage** | Pointer to **string** |  | [optional] 
**AssertionClusters** | Pointer to [**[]AssertionClusterDto**](AssertionClusterDto.md) |  | [optional] 
**InboundClientErrorBreached** | Pointer to **bool** |  | [optional] 

## Methods

### NewEntityAssertionScoresDto

`func NewEntityAssertionScoresDto() *EntityAssertionScoresDto`

NewEntityAssertionScoresDto instantiates a new EntityAssertionScoresDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntityAssertionScoresDtoWithDefaults

`func NewEntityAssertionScoresDtoWithDefaults() *EntityAssertionScoresDto`

NewEntityAssertionScoresDtoWithDefaults instantiates a new EntityAssertionScoresDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EntityAssertionScoresDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EntityAssertionScoresDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EntityAssertionScoresDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EntityAssertionScoresDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *EntityAssertionScoresDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EntityAssertionScoresDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EntityAssertionScoresDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EntityAssertionScoresDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetTypeLabels

`func (o *EntityAssertionScoresDto) GetTypeLabels() map[string]string`

GetTypeLabels returns the TypeLabels field if non-nil, zero value otherwise.

### GetTypeLabelsOk

`func (o *EntityAssertionScoresDto) GetTypeLabelsOk() (*map[string]string, bool)`

GetTypeLabelsOk returns a tuple with the TypeLabels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeLabels

`func (o *EntityAssertionScoresDto) SetTypeLabels(v map[string]string)`

SetTypeLabels sets TypeLabels field to given value.

### HasTypeLabels

`func (o *EntityAssertionScoresDto) HasTypeLabels() bool`

HasTypeLabels returns a boolean if a field has been set.

### GetScope

`func (o *EntityAssertionScoresDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *EntityAssertionScoresDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *EntityAssertionScoresDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *EntityAssertionScoresDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetMetrics

`func (o *EntityAssertionScoresDto) GetMetrics() []MetricDto`

GetMetrics returns the Metrics field if non-nil, zero value otherwise.

### GetMetricsOk

`func (o *EntityAssertionScoresDto) GetMetricsOk() (*[]MetricDto, bool)`

GetMetricsOk returns a tuple with the Metrics field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetrics

`func (o *EntityAssertionScoresDto) SetMetrics(v []MetricDto)`

SetMetrics sets Metrics field to given value.

### HasMetrics

`func (o *EntityAssertionScoresDto) HasMetrics() bool`

HasMetrics returns a boolean if a field has been set.

### GetTotalScore

`func (o *EntityAssertionScoresDto) GetTotalScore() float64`

GetTotalScore returns the TotalScore field if non-nil, zero value otherwise.

### GetTotalScoreOk

`func (o *EntityAssertionScoresDto) GetTotalScoreOk() (*float64, bool)`

GetTotalScoreOk returns a tuple with the TotalScore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalScore

`func (o *EntityAssertionScoresDto) SetTotalScore(v float64)`

SetTotalScore sets TotalScore field to given value.

### HasTotalScore

`func (o *EntityAssertionScoresDto) HasTotalScore() bool`

HasTotalScore returns a boolean if a field has been set.

### GetSeverityWiseTotalScores

`func (o *EntityAssertionScoresDto) GetSeverityWiseTotalScores() map[string]float64`

GetSeverityWiseTotalScores returns the SeverityWiseTotalScores field if non-nil, zero value otherwise.

### GetSeverityWiseTotalScoresOk

`func (o *EntityAssertionScoresDto) GetSeverityWiseTotalScoresOk() (*map[string]float64, bool)`

GetSeverityWiseTotalScoresOk returns a tuple with the SeverityWiseTotalScores field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverityWiseTotalScores

`func (o *EntityAssertionScoresDto) SetSeverityWiseTotalScores(v map[string]float64)`

SetSeverityWiseTotalScores sets SeverityWiseTotalScores field to given value.

### HasSeverityWiseTotalScores

`func (o *EntityAssertionScoresDto) HasSeverityWiseTotalScores() bool`

HasSeverityWiseTotalScores returns a boolean if a field has been set.

### GetPercentage

`func (o *EntityAssertionScoresDto) GetPercentage() string`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *EntityAssertionScoresDto) GetPercentageOk() (*string, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *EntityAssertionScoresDto) SetPercentage(v string)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *EntityAssertionScoresDto) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetAssertionClusters

`func (o *EntityAssertionScoresDto) GetAssertionClusters() []AssertionClusterDto`

GetAssertionClusters returns the AssertionClusters field if non-nil, zero value otherwise.

### GetAssertionClustersOk

`func (o *EntityAssertionScoresDto) GetAssertionClustersOk() (*[]AssertionClusterDto, bool)`

GetAssertionClustersOk returns a tuple with the AssertionClusters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionClusters

`func (o *EntityAssertionScoresDto) SetAssertionClusters(v []AssertionClusterDto)`

SetAssertionClusters sets AssertionClusters field to given value.

### HasAssertionClusters

`func (o *EntityAssertionScoresDto) HasAssertionClusters() bool`

HasAssertionClusters returns a boolean if a field has been set.

### GetInboundClientErrorBreached

`func (o *EntityAssertionScoresDto) GetInboundClientErrorBreached() bool`

GetInboundClientErrorBreached returns the InboundClientErrorBreached field if non-nil, zero value otherwise.

### GetInboundClientErrorBreachedOk

`func (o *EntityAssertionScoresDto) GetInboundClientErrorBreachedOk() (*bool, bool)`

GetInboundClientErrorBreachedOk returns a tuple with the InboundClientErrorBreached field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInboundClientErrorBreached

`func (o *EntityAssertionScoresDto) SetInboundClientErrorBreached(v bool)`

SetInboundClientErrorBreached sets InboundClientErrorBreached field to given value.

### HasInboundClientErrorBreached

`func (o *EntityAssertionScoresDto) HasInboundClientErrorBreached() bool`

HasInboundClientErrorBreached returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


