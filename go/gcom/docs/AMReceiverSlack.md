# AMReceiverSlack

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Channel** | Pointer to **string** |  | [optional] 
**Username** | Pointer to **string** |  | [optional] 
**Actions** | Pointer to [**[]AMReceiverSlackAction**](AMReceiverSlackAction.md) |  | [optional] 
**Color** | Pointer to **string** |  | [optional] 
**Fallback** | Pointer to **string** |  | [optional] 
**Fields** | Pointer to [**[]AMReceiverSlackField**](AMReceiverSlackField.md) |  | [optional] 
**Footer** | Pointer to **string** |  | [optional] 
**Pretext** | Pointer to **string** |  | [optional] 
**Text** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**HttpConfig** | Pointer to [**AlertManagerHttp**](AlertManagerHttp.md) |  | [optional] 
**SendResolved** | Pointer to **bool** |  | [optional] 
**ApiUrl** | Pointer to **string** |  | [optional] 
**ApiUrlFile** | Pointer to **string** |  | [optional] 
**IconEmoji** | Pointer to **string** |  | [optional] 
**IconUrl** | Pointer to **string** |  | [optional] 
**LinkNames** | Pointer to **bool** |  | [optional] 
**CallbackId** | Pointer to **string** |  | [optional] 
**MrkdwnIn** | Pointer to **string** |  | [optional] 
**ShortFields** | Pointer to **string** |  | [optional] 
**TitleLink** | Pointer to **string** |  | [optional] 
**ImageUrl** | Pointer to **string** |  | [optional] 
**ThumbUrl** | Pointer to **string** |  | [optional] 

## Methods

### NewAMReceiverSlack

`func NewAMReceiverSlack() *AMReceiverSlack`

NewAMReceiverSlack instantiates a new AMReceiverSlack object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAMReceiverSlackWithDefaults

`func NewAMReceiverSlackWithDefaults() *AMReceiverSlack`

NewAMReceiverSlackWithDefaults instantiates a new AMReceiverSlack object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannel

`func (o *AMReceiverSlack) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *AMReceiverSlack) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *AMReceiverSlack) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *AMReceiverSlack) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetUsername

`func (o *AMReceiverSlack) GetUsername() string`

GetUsername returns the Username field if non-nil, zero value otherwise.

### GetUsernameOk

`func (o *AMReceiverSlack) GetUsernameOk() (*string, bool)`

GetUsernameOk returns a tuple with the Username field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsername

`func (o *AMReceiverSlack) SetUsername(v string)`

SetUsername sets Username field to given value.

### HasUsername

`func (o *AMReceiverSlack) HasUsername() bool`

HasUsername returns a boolean if a field has been set.

### GetActions

`func (o *AMReceiverSlack) GetActions() []AMReceiverSlackAction`

GetActions returns the Actions field if non-nil, zero value otherwise.

### GetActionsOk

`func (o *AMReceiverSlack) GetActionsOk() (*[]AMReceiverSlackAction, bool)`

GetActionsOk returns a tuple with the Actions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActions

`func (o *AMReceiverSlack) SetActions(v []AMReceiverSlackAction)`

SetActions sets Actions field to given value.

### HasActions

`func (o *AMReceiverSlack) HasActions() bool`

HasActions returns a boolean if a field has been set.

### GetColor

`func (o *AMReceiverSlack) GetColor() string`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *AMReceiverSlack) GetColorOk() (*string, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *AMReceiverSlack) SetColor(v string)`

SetColor sets Color field to given value.

### HasColor

`func (o *AMReceiverSlack) HasColor() bool`

HasColor returns a boolean if a field has been set.

### GetFallback

`func (o *AMReceiverSlack) GetFallback() string`

GetFallback returns the Fallback field if non-nil, zero value otherwise.

### GetFallbackOk

`func (o *AMReceiverSlack) GetFallbackOk() (*string, bool)`

GetFallbackOk returns a tuple with the Fallback field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallback

`func (o *AMReceiverSlack) SetFallback(v string)`

SetFallback sets Fallback field to given value.

### HasFallback

`func (o *AMReceiverSlack) HasFallback() bool`

HasFallback returns a boolean if a field has been set.

### GetFields

`func (o *AMReceiverSlack) GetFields() []AMReceiverSlackField`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *AMReceiverSlack) GetFieldsOk() (*[]AMReceiverSlackField, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *AMReceiverSlack) SetFields(v []AMReceiverSlackField)`

SetFields sets Fields field to given value.

### HasFields

`func (o *AMReceiverSlack) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetFooter

`func (o *AMReceiverSlack) GetFooter() string`

GetFooter returns the Footer field if non-nil, zero value otherwise.

### GetFooterOk

`func (o *AMReceiverSlack) GetFooterOk() (*string, bool)`

GetFooterOk returns a tuple with the Footer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFooter

`func (o *AMReceiverSlack) SetFooter(v string)`

SetFooter sets Footer field to given value.

### HasFooter

`func (o *AMReceiverSlack) HasFooter() bool`

HasFooter returns a boolean if a field has been set.

### GetPretext

`func (o *AMReceiverSlack) GetPretext() string`

GetPretext returns the Pretext field if non-nil, zero value otherwise.

### GetPretextOk

`func (o *AMReceiverSlack) GetPretextOk() (*string, bool)`

GetPretextOk returns a tuple with the Pretext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPretext

`func (o *AMReceiverSlack) SetPretext(v string)`

SetPretext sets Pretext field to given value.

### HasPretext

`func (o *AMReceiverSlack) HasPretext() bool`

HasPretext returns a boolean if a field has been set.

### GetText

`func (o *AMReceiverSlack) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *AMReceiverSlack) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *AMReceiverSlack) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *AMReceiverSlack) HasText() bool`

HasText returns a boolean if a field has been set.

### GetTitle

`func (o *AMReceiverSlack) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *AMReceiverSlack) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *AMReceiverSlack) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *AMReceiverSlack) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetHttpConfig

`func (o *AMReceiverSlack) GetHttpConfig() AlertManagerHttp`

GetHttpConfig returns the HttpConfig field if non-nil, zero value otherwise.

### GetHttpConfigOk

`func (o *AMReceiverSlack) GetHttpConfigOk() (*AlertManagerHttp, bool)`

GetHttpConfigOk returns a tuple with the HttpConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHttpConfig

`func (o *AMReceiverSlack) SetHttpConfig(v AlertManagerHttp)`

SetHttpConfig sets HttpConfig field to given value.

### HasHttpConfig

`func (o *AMReceiverSlack) HasHttpConfig() bool`

HasHttpConfig returns a boolean if a field has been set.

### GetSendResolved

`func (o *AMReceiverSlack) GetSendResolved() bool`

GetSendResolved returns the SendResolved field if non-nil, zero value otherwise.

### GetSendResolvedOk

`func (o *AMReceiverSlack) GetSendResolvedOk() (*bool, bool)`

GetSendResolvedOk returns a tuple with the SendResolved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendResolved

`func (o *AMReceiverSlack) SetSendResolved(v bool)`

SetSendResolved sets SendResolved field to given value.

### HasSendResolved

`func (o *AMReceiverSlack) HasSendResolved() bool`

HasSendResolved returns a boolean if a field has been set.

### GetApiUrl

`func (o *AMReceiverSlack) GetApiUrl() string`

GetApiUrl returns the ApiUrl field if non-nil, zero value otherwise.

### GetApiUrlOk

`func (o *AMReceiverSlack) GetApiUrlOk() (*string, bool)`

GetApiUrlOk returns a tuple with the ApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrl

`func (o *AMReceiverSlack) SetApiUrl(v string)`

SetApiUrl sets ApiUrl field to given value.

### HasApiUrl

`func (o *AMReceiverSlack) HasApiUrl() bool`

HasApiUrl returns a boolean if a field has been set.

### GetApiUrlFile

`func (o *AMReceiverSlack) GetApiUrlFile() string`

GetApiUrlFile returns the ApiUrlFile field if non-nil, zero value otherwise.

### GetApiUrlFileOk

`func (o *AMReceiverSlack) GetApiUrlFileOk() (*string, bool)`

GetApiUrlFileOk returns a tuple with the ApiUrlFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrlFile

`func (o *AMReceiverSlack) SetApiUrlFile(v string)`

SetApiUrlFile sets ApiUrlFile field to given value.

### HasApiUrlFile

`func (o *AMReceiverSlack) HasApiUrlFile() bool`

HasApiUrlFile returns a boolean if a field has been set.

### GetIconEmoji

`func (o *AMReceiverSlack) GetIconEmoji() string`

GetIconEmoji returns the IconEmoji field if non-nil, zero value otherwise.

### GetIconEmojiOk

`func (o *AMReceiverSlack) GetIconEmojiOk() (*string, bool)`

GetIconEmojiOk returns a tuple with the IconEmoji field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconEmoji

`func (o *AMReceiverSlack) SetIconEmoji(v string)`

SetIconEmoji sets IconEmoji field to given value.

### HasIconEmoji

`func (o *AMReceiverSlack) HasIconEmoji() bool`

HasIconEmoji returns a boolean if a field has been set.

### GetIconUrl

`func (o *AMReceiverSlack) GetIconUrl() string`

GetIconUrl returns the IconUrl field if non-nil, zero value otherwise.

### GetIconUrlOk

`func (o *AMReceiverSlack) GetIconUrlOk() (*string, bool)`

GetIconUrlOk returns a tuple with the IconUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIconUrl

`func (o *AMReceiverSlack) SetIconUrl(v string)`

SetIconUrl sets IconUrl field to given value.

### HasIconUrl

`func (o *AMReceiverSlack) HasIconUrl() bool`

HasIconUrl returns a boolean if a field has been set.

### GetLinkNames

`func (o *AMReceiverSlack) GetLinkNames() bool`

GetLinkNames returns the LinkNames field if non-nil, zero value otherwise.

### GetLinkNamesOk

`func (o *AMReceiverSlack) GetLinkNamesOk() (*bool, bool)`

GetLinkNamesOk returns a tuple with the LinkNames field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkNames

`func (o *AMReceiverSlack) SetLinkNames(v bool)`

SetLinkNames sets LinkNames field to given value.

### HasLinkNames

`func (o *AMReceiverSlack) HasLinkNames() bool`

HasLinkNames returns a boolean if a field has been set.

### GetCallbackId

`func (o *AMReceiverSlack) GetCallbackId() string`

GetCallbackId returns the CallbackId field if non-nil, zero value otherwise.

### GetCallbackIdOk

`func (o *AMReceiverSlack) GetCallbackIdOk() (*string, bool)`

GetCallbackIdOk returns a tuple with the CallbackId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallbackId

`func (o *AMReceiverSlack) SetCallbackId(v string)`

SetCallbackId sets CallbackId field to given value.

### HasCallbackId

`func (o *AMReceiverSlack) HasCallbackId() bool`

HasCallbackId returns a boolean if a field has been set.

### GetMrkdwnIn

`func (o *AMReceiverSlack) GetMrkdwnIn() string`

GetMrkdwnIn returns the MrkdwnIn field if non-nil, zero value otherwise.

### GetMrkdwnInOk

`func (o *AMReceiverSlack) GetMrkdwnInOk() (*string, bool)`

GetMrkdwnInOk returns a tuple with the MrkdwnIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMrkdwnIn

`func (o *AMReceiverSlack) SetMrkdwnIn(v string)`

SetMrkdwnIn sets MrkdwnIn field to given value.

### HasMrkdwnIn

`func (o *AMReceiverSlack) HasMrkdwnIn() bool`

HasMrkdwnIn returns a boolean if a field has been set.

### GetShortFields

`func (o *AMReceiverSlack) GetShortFields() string`

GetShortFields returns the ShortFields field if non-nil, zero value otherwise.

### GetShortFieldsOk

`func (o *AMReceiverSlack) GetShortFieldsOk() (*string, bool)`

GetShortFieldsOk returns a tuple with the ShortFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortFields

`func (o *AMReceiverSlack) SetShortFields(v string)`

SetShortFields sets ShortFields field to given value.

### HasShortFields

`func (o *AMReceiverSlack) HasShortFields() bool`

HasShortFields returns a boolean if a field has been set.

### GetTitleLink

`func (o *AMReceiverSlack) GetTitleLink() string`

GetTitleLink returns the TitleLink field if non-nil, zero value otherwise.

### GetTitleLinkOk

`func (o *AMReceiverSlack) GetTitleLinkOk() (*string, bool)`

GetTitleLinkOk returns a tuple with the TitleLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitleLink

`func (o *AMReceiverSlack) SetTitleLink(v string)`

SetTitleLink sets TitleLink field to given value.

### HasTitleLink

`func (o *AMReceiverSlack) HasTitleLink() bool`

HasTitleLink returns a boolean if a field has been set.

### GetImageUrl

`func (o *AMReceiverSlack) GetImageUrl() string`

GetImageUrl returns the ImageUrl field if non-nil, zero value otherwise.

### GetImageUrlOk

`func (o *AMReceiverSlack) GetImageUrlOk() (*string, bool)`

GetImageUrlOk returns a tuple with the ImageUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImageUrl

`func (o *AMReceiverSlack) SetImageUrl(v string)`

SetImageUrl sets ImageUrl field to given value.

### HasImageUrl

`func (o *AMReceiverSlack) HasImageUrl() bool`

HasImageUrl returns a boolean if a field has been set.

### GetThumbUrl

`func (o *AMReceiverSlack) GetThumbUrl() string`

GetThumbUrl returns the ThumbUrl field if non-nil, zero value otherwise.

### GetThumbUrlOk

`func (o *AMReceiverSlack) GetThumbUrlOk() (*string, bool)`

GetThumbUrlOk returns a tuple with the ThumbUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThumbUrl

`func (o *AMReceiverSlack) SetThumbUrl(v string)`

SetThumbUrl sets ThumbUrl field to given value.

### HasThumbUrl

`func (o *AMReceiverSlack) HasThumbUrl() bool`

HasThumbUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


