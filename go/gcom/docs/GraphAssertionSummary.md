# GraphAssertionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Severity** | Pointer to **string** |  | [optional] 
**Amend** | Pointer to **bool** |  | [optional] 
**Assertions** | Pointer to [**[]GraphAssertion**](GraphAssertion.md) |  | [optional] 

## Methods

### NewGraphAssertionSummary

`func NewGraphAssertionSummary() *GraphAssertionSummary`

NewGraphAssertionSummary instantiates a new GraphAssertionSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGraphAssertionSummaryWithDefaults

`func NewGraphAssertionSummaryWithDefaults() *GraphAssertionSummary`

NewGraphAssertionSummaryWithDefaults instantiates a new GraphAssertionSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSeverity

`func (o *GraphAssertionSummary) GetSeverity() string`

GetSeverity returns the Severity field if non-nil, zero value otherwise.

### GetSeverityOk

`func (o *GraphAssertionSummary) GetSeverityOk() (*string, bool)`

GetSeverityOk returns a tuple with the Severity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeverity

`func (o *GraphAssertionSummary) SetSeverity(v string)`

SetSeverity sets Severity field to given value.

### HasSeverity

`func (o *GraphAssertionSummary) HasSeverity() bool`

HasSeverity returns a boolean if a field has been set.

### GetAmend

`func (o *GraphAssertionSummary) GetAmend() bool`

GetAmend returns the Amend field if non-nil, zero value otherwise.

### GetAmendOk

`func (o *GraphAssertionSummary) GetAmendOk() (*bool, bool)`

GetAmendOk returns a tuple with the Amend field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmend

`func (o *GraphAssertionSummary) SetAmend(v bool)`

SetAmend sets Amend field to given value.

### HasAmend

`func (o *GraphAssertionSummary) HasAmend() bool`

HasAmend returns a boolean if a field has been set.

### GetAssertions

`func (o *GraphAssertionSummary) GetAssertions() []GraphAssertion`

GetAssertions returns the Assertions field if non-nil, zero value otherwise.

### GetAssertionsOk

`func (o *GraphAssertionSummary) GetAssertionsOk() (*[]GraphAssertion, bool)`

GetAssertionsOk returns a tuple with the Assertions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssertions

`func (o *GraphAssertionSummary) SetAssertions(v []GraphAssertion)`

SetAssertions sets Assertions field to given value.

### HasAssertions

`func (o *GraphAssertionSummary) HasAssertions() bool`

HasAssertions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


