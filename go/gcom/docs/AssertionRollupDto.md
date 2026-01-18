# AssertionRollupDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Scope** | Pointer to **map[string]interface{}** |  | [optional] 
**Labels** | Pointer to **map[string]string** |  | [optional] 
**AssertionCount** | Pointer to **int32** |  | [optional] 
**WarningCount** | Pointer to **int32** |  | [optional] 
**CriticalCount** | Pointer to **int32** |  | [optional] 
**InfoCount** | Pointer to **int32** |  | [optional] 
**NextLevel** | Pointer to [**[]AssertionRollupDto**](AssertionRollupDto.md) |  | [optional] 
**TimelineIds** | Pointer to **[]int64** |  | [optional] 
**TimelineHashes** | Pointer to **[]string** |  | [optional] 
**PathsToLinkedGroups** | Pointer to **[][]int64** |  | [optional] 
**PathHashesToLinkedGroups** | Pointer to **[][]string** |  | [optional] 

## Methods

### NewAssertionRollupDto

`func NewAssertionRollupDto() *AssertionRollupDto`

NewAssertionRollupDto instantiates a new AssertionRollupDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssertionRollupDtoWithDefaults

`func NewAssertionRollupDtoWithDefaults() *AssertionRollupDto`

NewAssertionRollupDtoWithDefaults instantiates a new AssertionRollupDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AssertionRollupDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AssertionRollupDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AssertionRollupDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AssertionRollupDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *AssertionRollupDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AssertionRollupDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AssertionRollupDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AssertionRollupDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetScope

`func (o *AssertionRollupDto) GetScope() map[string]interface{}`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *AssertionRollupDto) GetScopeOk() (*map[string]interface{}, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *AssertionRollupDto) SetScope(v map[string]interface{})`

SetScope sets Scope field to given value.

### HasScope

`func (o *AssertionRollupDto) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetLabels

`func (o *AssertionRollupDto) GetLabels() map[string]string`

GetLabels returns the Labels field if non-nil, zero value otherwise.

### GetLabelsOk

`func (o *AssertionRollupDto) GetLabelsOk() (*map[string]string, bool)`

GetLabelsOk returns a tuple with the Labels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabels

`func (o *AssertionRollupDto) SetLabels(v map[string]string)`

SetLabels sets Labels field to given value.

### HasLabels

`func (o *AssertionRollupDto) HasLabels() bool`

HasLabels returns a boolean if a field has been set.

### GetAssertionCount

`func (o *AssertionRollupDto) GetAssertionCount() int32`

GetAssertionCount returns the AssertionCount field if non-nil, zero value otherwise.

### GetAssertionCountOk

`func (o *AssertionRollupDto) GetAssertionCountOk() (*int32, bool)`

GetAssertionCountOk returns a tuple with the AssertionCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertionCount

`func (o *AssertionRollupDto) SetAssertionCount(v int32)`

SetAssertionCount sets AssertionCount field to given value.

### HasAssertionCount

`func (o *AssertionRollupDto) HasAssertionCount() bool`

HasAssertionCount returns a boolean if a field has been set.

### GetWarningCount

`func (o *AssertionRollupDto) GetWarningCount() int32`

GetWarningCount returns the WarningCount field if non-nil, zero value otherwise.

### GetWarningCountOk

`func (o *AssertionRollupDto) GetWarningCountOk() (*int32, bool)`

GetWarningCountOk returns a tuple with the WarningCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarningCount

`func (o *AssertionRollupDto) SetWarningCount(v int32)`

SetWarningCount sets WarningCount field to given value.

### HasWarningCount

`func (o *AssertionRollupDto) HasWarningCount() bool`

HasWarningCount returns a boolean if a field has been set.

### GetCriticalCount

`func (o *AssertionRollupDto) GetCriticalCount() int32`

GetCriticalCount returns the CriticalCount field if non-nil, zero value otherwise.

### GetCriticalCountOk

`func (o *AssertionRollupDto) GetCriticalCountOk() (*int32, bool)`

GetCriticalCountOk returns a tuple with the CriticalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriticalCount

`func (o *AssertionRollupDto) SetCriticalCount(v int32)`

SetCriticalCount sets CriticalCount field to given value.

### HasCriticalCount

`func (o *AssertionRollupDto) HasCriticalCount() bool`

HasCriticalCount returns a boolean if a field has been set.

### GetInfoCount

`func (o *AssertionRollupDto) GetInfoCount() int32`

GetInfoCount returns the InfoCount field if non-nil, zero value otherwise.

### GetInfoCountOk

`func (o *AssertionRollupDto) GetInfoCountOk() (*int32, bool)`

GetInfoCountOk returns a tuple with the InfoCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfoCount

`func (o *AssertionRollupDto) SetInfoCount(v int32)`

SetInfoCount sets InfoCount field to given value.

### HasInfoCount

`func (o *AssertionRollupDto) HasInfoCount() bool`

HasInfoCount returns a boolean if a field has been set.

### GetNextLevel

`func (o *AssertionRollupDto) GetNextLevel() []AssertionRollupDto`

GetNextLevel returns the NextLevel field if non-nil, zero value otherwise.

### GetNextLevelOk

`func (o *AssertionRollupDto) GetNextLevelOk() (*[]AssertionRollupDto, bool)`

GetNextLevelOk returns a tuple with the NextLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNextLevel

`func (o *AssertionRollupDto) SetNextLevel(v []AssertionRollupDto)`

SetNextLevel sets NextLevel field to given value.

### HasNextLevel

`func (o *AssertionRollupDto) HasNextLevel() bool`

HasNextLevel returns a boolean if a field has been set.

### GetTimelineIds

`func (o *AssertionRollupDto) GetTimelineIds() []int64`

GetTimelineIds returns the TimelineIds field if non-nil, zero value otherwise.

### GetTimelineIdsOk

`func (o *AssertionRollupDto) GetTimelineIdsOk() (*[]int64, bool)`

GetTimelineIdsOk returns a tuple with the TimelineIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimelineIds

`func (o *AssertionRollupDto) SetTimelineIds(v []int64)`

SetTimelineIds sets TimelineIds field to given value.

### HasTimelineIds

`func (o *AssertionRollupDto) HasTimelineIds() bool`

HasTimelineIds returns a boolean if a field has been set.

### GetTimelineHashes

`func (o *AssertionRollupDto) GetTimelineHashes() []string`

GetTimelineHashes returns the TimelineHashes field if non-nil, zero value otherwise.

### GetTimelineHashesOk

`func (o *AssertionRollupDto) GetTimelineHashesOk() (*[]string, bool)`

GetTimelineHashesOk returns a tuple with the TimelineHashes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimelineHashes

`func (o *AssertionRollupDto) SetTimelineHashes(v []string)`

SetTimelineHashes sets TimelineHashes field to given value.

### HasTimelineHashes

`func (o *AssertionRollupDto) HasTimelineHashes() bool`

HasTimelineHashes returns a boolean if a field has been set.

### GetPathsToLinkedGroups

`func (o *AssertionRollupDto) GetPathsToLinkedGroups() [][]int64`

GetPathsToLinkedGroups returns the PathsToLinkedGroups field if non-nil, zero value otherwise.

### GetPathsToLinkedGroupsOk

`func (o *AssertionRollupDto) GetPathsToLinkedGroupsOk() (*[][]int64, bool)`

GetPathsToLinkedGroupsOk returns a tuple with the PathsToLinkedGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathsToLinkedGroups

`func (o *AssertionRollupDto) SetPathsToLinkedGroups(v [][]int64)`

SetPathsToLinkedGroups sets PathsToLinkedGroups field to given value.

### HasPathsToLinkedGroups

`func (o *AssertionRollupDto) HasPathsToLinkedGroups() bool`

HasPathsToLinkedGroups returns a boolean if a field has been set.

### GetPathHashesToLinkedGroups

`func (o *AssertionRollupDto) GetPathHashesToLinkedGroups() [][]string`

GetPathHashesToLinkedGroups returns the PathHashesToLinkedGroups field if non-nil, zero value otherwise.

### GetPathHashesToLinkedGroupsOk

`func (o *AssertionRollupDto) GetPathHashesToLinkedGroupsOk() (*[][]string, bool)`

GetPathHashesToLinkedGroupsOk returns a tuple with the PathHashesToLinkedGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPathHashesToLinkedGroups

`func (o *AssertionRollupDto) SetPathHashesToLinkedGroups(v [][]string)`

SetPathHashesToLinkedGroups sets PathHashesToLinkedGroups field to given value.

### HasPathHashesToLinkedGroups

`func (o *AssertionRollupDto) HasPathHashesToLinkedGroups() bool`

HasPathHashesToLinkedGroups returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


