# InsightCriteriaDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InsightSource** | **string** |  | 
**AlertCategories** | Pointer to **[]string** |  | [optional] 

## Methods

### NewInsightCriteriaDto

`func NewInsightCriteriaDto(insightSource string, ) *InsightCriteriaDto`

NewInsightCriteriaDto instantiates a new InsightCriteriaDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInsightCriteriaDtoWithDefaults

`func NewInsightCriteriaDtoWithDefaults() *InsightCriteriaDto`

NewInsightCriteriaDtoWithDefaults instantiates a new InsightCriteriaDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInsightSource

`func (o *InsightCriteriaDto) GetInsightSource() string`

GetInsightSource returns the InsightSource field if non-nil, zero value otherwise.

### GetInsightSourceOk

`func (o *InsightCriteriaDto) GetInsightSourceOk() (*string, bool)`

GetInsightSourceOk returns a tuple with the InsightSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsightSource

`func (o *InsightCriteriaDto) SetInsightSource(v string)`

SetInsightSource sets InsightSource field to given value.


### GetAlertCategories

`func (o *InsightCriteriaDto) GetAlertCategories() []string`

GetAlertCategories returns the AlertCategories field if non-nil, zero value otherwise.

### GetAlertCategoriesOk

`func (o *InsightCriteriaDto) GetAlertCategoriesOk() (*[]string, bool)`

GetAlertCategoriesOk returns a tuple with the AlertCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlertCategories

`func (o *InsightCriteriaDto) SetAlertCategories(v []string)`

SetAlertCategories sets AlertCategories field to given value.

### HasAlertCategories

`func (o *InsightCriteriaDto) HasAlertCategories() bool`

HasAlertCategories returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


