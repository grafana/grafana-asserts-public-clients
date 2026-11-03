/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AffectedEntityDetailDto
 */
export interface AffectedEntityDetailDto {
    /**
     * 
     * @type {string}
     * @memberof AffectedEntityDetailDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AffectedEntityDetailDto
     */
    extraLabels?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface AffectedEntityDetailsDto
 */
export interface AffectedEntityDetailsDto {
    /**
     * 
     * @type {Array<AffectedEntityDetailDto>}
     * @memberof AffectedEntityDetailsDto
     */
    entities?: Array<AffectedEntityDetailDto>;
    /**
     * 
     * @type {number}
     * @memberof AffectedEntityDetailsDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface AffectedEntityNamesDto
 */
export interface AffectedEntityNamesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof AffectedEntityNamesDto
     */
    entityNames?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof AffectedEntityNamesDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface AlertConfigDto
 */
export interface AlertConfigDto {
    /**
     * 
     * @type {string}
     * @memberof AlertConfigDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AlertConfigDto
     */
    matchLabels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AlertConfigDto
     */
    alertLabels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AlertConfigDto
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof AlertConfigDto
     */
    silenced?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AlertConfigDto
     */
    managedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof AlertConfigDto
     */
    _for?: string;
}
/**
 * 
 * @export
 * @interface AlertConfigsDto
 */
export interface AlertConfigsDto {
    /**
     * 
     * @type {Array<AlertConfigDto>}
     * @memberof AlertConfigsDto
     */
    alertConfigs?: Array<AlertConfigDto>;
}
/**
 * 
 * @export
 * @interface AllRulesDto
 */
export interface AllRulesDto {
    /**
     * 
     * @type {VersionedRulesPayload}
     * @memberof AllRulesDto
     */
    all?: VersionedRulesPayload;
    /**
     * 
     * @type {VersionedMimirRelabelRulesPayload}
     * @memberof AllRulesDto
     */
    relabel?: VersionedMimirRelabelRulesPayload;
}
/**
 * 
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * 
     * @type {ApiErrorStatus}
     * @memberof ApiError
     */
    status?: ApiErrorStatus;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    requestId?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiError
     */
    timestamp?: number;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    debugMessage?: string;
    /**
     * 
     * @type {Array<ApiErrorSubErrorsInner>}
     * @memberof ApiError
     */
    subErrors?: Array<ApiErrorSubErrorsInner>;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    trace_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiError
     */
    span_id?: string;
}
/**
 * @type ApiErrorStatus
 * 
 * @export
 */
export type ApiErrorStatus = DefaultHttpStatusCode | HttpStatus;
/**
 * @type ApiErrorSubErrorsInner
 * 
 * @export
 */
export type ApiErrorSubErrorsInner = ApiQuerySyntaxError | ApiSubError | ApiValidationError;
/**
 * 
 * @export
 * @interface ApiQuerySyntaxError
 */
export interface ApiQuerySyntaxError {
    /**
     * 
     * @type {string}
     * @memberof ApiQuerySyntaxError
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof ApiQuerySyntaxError
     */
    line?: number;
    /**
     * 
     * @type {number}
     * @memberof ApiQuerySyntaxError
     */
    column?: number;
}
/**
 * 
 * @export
 * @interface ApiSubError
 */
export interface ApiSubError {
    /**
     * 
     * @type {string}
     * @memberof ApiSubError
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface ApiValidationError
 */
export interface ApiValidationError {
    /**
     * 
     * @type {string}
     * @memberof ApiValidationError
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof ApiValidationError
     */
    field?: string;
    /**
     * 
     * @type {any}
     * @memberof ApiValidationError
     */
    rejectedValue?: any | null;
}
/**
 * 
 * @export
 * @interface AssertionClusterDto
 */
export interface AssertionClusterDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionClusterDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionClusterDto
     */
    end?: number;
    /**
     * 
     * @type {Array<AssertionSummaryDto>}
     * @memberof AssertionClusterDto
     */
    assertionSummaries?: Array<AssertionSummaryDto>;
}
/**
 * 
 * @export
 * @interface AssertionInfoDto
 */
export interface AssertionInfoDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoDto
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoDto
     */
    expression?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoDto
     */
    interval?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssertionInfoDto
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {Array<AssertionMetricDetailDto>}
     * @memberof AssertionInfoDto
     */
    metrics?: Array<AssertionMetricDetailDto>;
}
/**
 * 
 * @export
 * @interface AssertionInfoRequestDto
 */
export interface AssertionInfoRequestDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionInfoRequestDto
     */
    assertionName?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssertionInfoRequestDto
     */
    labels?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface AssertionMetricDetailDto
 */
export interface AssertionMetricDetailDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionMetricDetailDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionMetricDetailDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionMetricDetailDto
     */
    help?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionMetricDetailDto
     */
    unit?: string;
}
/**
 * 
 * @export
 * @interface AssertionRollupDto
 */
export interface AssertionRollupDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionRollupDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionRollupDto
     */
    type?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof AssertionRollupDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssertionRollupDto
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof AssertionRollupDto
     */
    assertionCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionRollupDto
     */
    warningCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionRollupDto
     */
    criticalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionRollupDto
     */
    infoCount?: number;
    /**
     * 
     * @type {Array<AssertionRollupDto>}
     * @memberof AssertionRollupDto
     */
    nextLevel?: Array<AssertionRollupDto>;
    /**
     * 
     * @type {Set<number>}
     * @memberof AssertionRollupDto
     */
    timelineIds?: Set<number>;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionRollupDto
     */
    timelineHashes?: Set<string>;
    /**
     * 
     * @type {Set<Array<number>>}
     * @memberof AssertionRollupDto
     */
    pathsToLinkedGroups?: Set<Array<number>>;
    /**
     * 
     * @type {Set<Array<string>>}
     * @memberof AssertionRollupDto
     */
    pathHashesToLinkedGroups?: Set<Array<string>>;
}
/**
 * 
 * @export
 * @interface AssertionScoreRequestDto
 */
export interface AssertionScoreRequestDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionScoreRequestDto
     */
    startMs?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionScoreRequestDto
     */
    endMs?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionScoreRequestDto
     */
    hideAssertionsOlderThanNHours?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionScoreRequestDto
     */
    alertCategories?: Set<string>;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof AssertionScoreRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof AssertionScoreRequestDto
     */
    hideAssertionsPresentMoreThanPercentageOfTime?: number;
}
/**
 * 
 * @export
 * @interface AssertionScoresDto
 */
export interface AssertionScoresDto {
    /**
     * 
     * @type {TimeWindowDto}
     * @memberof AssertionScoresDto
     */
    timeWindow?: TimeWindowDto;
    /**
     * 
     * @type {number}
     * @memberof AssertionScoresDto
     */
    timeStepIntervalMs?: number;
    /**
     * 
     * @type {EntityAssertionScoresDto}
     * @memberof AssertionScoresDto
     */
    assertionScoresForRootEntity?: EntityAssertionScoresDto;
    /**
     * 
     * @type {Array<EntityAssertionScoresDto>}
     * @memberof AssertionScoresDto
     */
    assertionScoresForTopNEntities?: Array<EntityAssertionScoresDto>;
    /**
     * 
     * @type {Array<AssertionRollupDto>}
     * @memberof AssertionScoresDto
     */
    assertionRollupDto?: Array<AssertionRollupDto>;
    /**
     * 
     * @type {any}
     * @memberof AssertionScoresDto
     */
    graphData?: any | null;
}
/**
 * 
 * @export
 * @interface AssertionSearchRequestDto
 */
export interface AssertionSearchRequestDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionSearchRequestDto
     */
    definitionId?: number;
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof AssertionSearchRequestDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof AssertionSearchRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof AssertionSearchRequestDto
     */
    pageNum?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssertionSearchRequestDto
     */
    bindings?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof AssertionSearchRequestDto
     */
    filterCriteria?: Array<EntityMatcherDto>;
    /**
     * 
     * @type {number}
     * @memberof AssertionSearchRequestDto
     */
    hideAssertionsOlderThanNHours?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionSearchRequestDto
     */
    alertCategories?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionSearchRequestDto
     */
    severityFilter?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof AssertionSearchRequestDto
     */
    query?: string;
    /**
     * 
     * @type {number}
     * @memberof AssertionSearchRequestDto
     */
    currentWBEntityCount?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionSearchRequestDto
     */
    hideAssertionsPresentMoreThanPercentageOfTime?: number;
}
/**
 * 
 * @export
 * @interface AssertionSourceMetricLabelDto
 */
export interface AssertionSourceMetricLabelDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricLabelDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricLabelDto
     */
    op?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricLabelDto
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface AssertionSourceMetricRequestDto
 */
export interface AssertionSourceMetricRequestDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionSourceMetricRequestDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionSourceMetricRequestDto
     */
    endTime?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AssertionSourceMetricRequestDto
     */
    labels?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface AssertionSourceMetricResponseDto
 */
export interface AssertionSourceMetricResponseDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricResponseDto
     */
    metricName?: string;
    /**
     * 
     * @type {Array<AssertionSourceMetricLabelDto>}
     * @memberof AssertionSourceMetricResponseDto
     */
    labels?: Array<AssertionSourceMetricLabelDto>;
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricResponseDto
     */
    metricType?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricResponseDto
     */
    customRateInterval?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionSourceMetricResponseDto
     */
    customFunction?: string;
}
/**
 * 
 * @export
 * @interface AssertionStateDto
 */
export interface AssertionStateDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionStateDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionStateDto
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof AssertionStateDto
     */
    severity?: string;
    /**
     * 
     * @type {Array<AssertionSummaryDto>}
     * @memberof AssertionStateDto
     */
    assertionSummaries?: Array<AssertionSummaryDto>;
}
/**
 * 
 * @export
 * @interface AssertionSummaryDto
 */
export interface AssertionSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof AssertionSummaryDto
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof AssertionSummaryDto
     */
    summary?: string;
}
/**
 * 
 * @export
 * @interface AssertionsRequestDto
 */
export interface AssertionsRequestDto {
    /**
     * 
     * @type {number}
     * @memberof AssertionsRequestDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionsRequestDto
     */
    endTime?: number;
    /**
     * 
     * @type {Set<EntityKeyDto>}
     * @memberof AssertionsRequestDto
     */
    entityKeys?: Set<EntityKeyDto>;
    /**
     * 
     * @type {boolean}
     * @memberof AssertionsRequestDto
     */
    includeConnectedAssertions?: boolean;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionsRequestDto
     */
    alertCategories?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof AssertionsRequestDto
     */
    severities?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof AssertionsRequestDto
     */
    hideAssertionsOlderThanNHours?: number;
    /**
     * 
     * @type {number}
     * @memberof AssertionsRequestDto
     */
    hideAssertionsPresentMoreThanPercentageOfTime?: number;
}
/**
 * 
 * @export
 * @interface AutoCompleteItemDto
 */
export interface AutoCompleteItemDto {
    /**
     * 
     * @type {string}
     * @memberof AutoCompleteItemDto
     */
    string?: string;
    /**
     * 
     * @type {string}
     * @memberof AutoCompleteItemDto
     */
    payload?: string;
}
/**
 * 
 * @export
 * @interface AutoCompleteResponseDto
 */
export interface AutoCompleteResponseDto {
    /**
     * 
     * @type {string}
     * @memberof AutoCompleteResponseDto
     */
    index?: string;
    /**
     * 
     * @type {number}
     * @memberof AutoCompleteResponseDto
     */
    maxResults?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AutoCompleteResponseDto
     */
    fuzzy?: boolean;
    /**
     * 
     * @type {Array<AutoCompleteItemDto>}
     * @memberof AutoCompleteResponseDto
     */
    items?: Array<AutoCompleteItemDto>;
}
/**
 * 
 * @export
 * @interface ComplianceWindowDto
 */
export interface ComplianceWindowDto {
    /**
     * 
     * @type {string}
     * @memberof ComplianceWindowDto
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof ComplianceWindowDto
     */
    numDays?: number;
}
/**
 * 
 * @export
 * @interface ConfigImportResultDto
 */
export interface ConfigImportResultDto {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ConfigImportResultDto
     */
    failedConfigs?: { [key: string]: Array<string>; };
}
/**
 * 
 * @export
 * @interface ConfigValidationResponseDto
 */
export interface ConfigValidationResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ConfigValidationResponseDto
     */
    state?: ConfigValidationResponseDtoStateEnum;
    /**
     * 
     * @type {string}
     * @memberof ConfigValidationResponseDto
     */
    jobId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConfigValidationResponseDto
     */
    errors?: Array<string>;
}


/**
 * @export
 */
export const ConfigValidationResponseDtoStateEnum = {
    Success: 'success',
    Failure: 'failure',
    Processing: 'processing',
    Aborted: 'aborted',
    Timeout: 'timeout'
} as const;
export type ConfigValidationResponseDtoStateEnum = typeof ConfigValidationResponseDtoStateEnum[keyof typeof ConfigValidationResponseDtoStateEnum];

/**
 * 
 * @export
 * @interface ConnectedEntitiesResponseDto
 */
export interface ConnectedEntitiesResponseDto {
    /**
     * 
     * @type {Array<EntityReadResponseDto>}
     * @memberof ConnectedEntitiesResponseDto
     */
    items?: Array<EntityReadResponseDto>;
    /**
     * 
     * @type {number}
     * @memberof ConnectedEntitiesResponseDto
     */
    limit?: number;
    /**
     * 
     * @type {number}
     * @memberof ConnectedEntitiesResponseDto
     */
    offset?: number;
}
/**
 * 
 * @export
 * @interface CustomDashConfigDto
 */
export interface CustomDashConfigDto {
    /**
     * 
     * @type {string}
     * @memberof CustomDashConfigDto
     */
    dashboardUri?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDashConfigDto
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDashConfigDto
     */
    query?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CustomDashConfigDto
     */
    dashParams?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof CustomDashConfigDto
     */
    dataSourceParam?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CustomDashConfigDto
     */
    alertCategory?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDashConfigDto
     */
    overrideEntityUri?: boolean;
    /**
     * 
     * @type {Array<PropertyMatcherDto>}
     * @memberof CustomDashConfigDto
     */
    propertyMatchers?: Array<PropertyMatcherDto>;
}
/**
 * 
 * @export
 * @interface CustomDashConfigsDto
 */
export interface CustomDashConfigsDto {
    /**
     * 
     * @type {string}
     * @memberof CustomDashConfigsDto
     */
    entityType?: string;
    /**
     * 
     * @type {Array<CustomDashConfigDto>}
     * @memberof CustomDashConfigsDto
     */
    dashConfigDto?: Array<CustomDashConfigDto>;
}
/**
 * 
 * @export
 * @interface CustomKpiDashConfigDto
 */
export interface CustomKpiDashConfigDto {
    /**
     * 
     * @type {Array<CustomDashConfigsDto>}
     * @memberof CustomKpiDashConfigDto
     */
    kpiDashConfigs?: Array<CustomDashConfigsDto>;
}
/**
 * 
 * @export
 * @interface CustomerMetricRequestDto
 */
export interface CustomerMetricRequestDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof CustomerMetricRequestDto
     */
    metrics?: Set<string>;
}
/**
 * 
 * @export
 * @interface CustomerMetricResponseDto
 */
export interface CustomerMetricResponseDto {
    /**
     * 
     * @type {MetricSetsDto}
     * @memberof CustomerMetricResponseDto
     */
    hosted?: MetricSetsDto;
    /**
     * 
     * @type {MetricSetsDto}
     * @memberof CustomerMetricResponseDto
     */
    client?: MetricSetsDto;
}
/**
 * 
 * @export
 * @interface CypherSearchEdgeDto
 */
export interface CypherSearchEdgeDto {
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEdgeDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEdgeDto
     */
    sourceName?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEdgeDto
     */
    sourceType?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CypherSearchEdgeDto
     */
    sourceScope?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEdgeDto
     */
    destinationName?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEdgeDto
     */
    destinationType?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CypherSearchEdgeDto
     */
    destinationScope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CypherSearchEdgeDto
     */
    properties?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface CypherSearchEntityDto
 */
export interface CypherSearchEntityDto {
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEntityDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchEntityDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CypherSearchEntityDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CypherSearchEntityDto
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {Array<CypherSearchInsightDto>}
     * @memberof CypherSearchEntityDto
     */
    insights?: Array<CypherSearchInsightDto>;
    /**
     * 
     * @type {Array<CypherSearchInsightDto>}
     * @memberof CypherSearchEntityDto
     */
    connectedInsights?: Array<CypherSearchInsightDto>;
}
/**
 * 
 * @export
 * @interface CypherSearchInsightDto
 */
export interface CypherSearchInsightDto {
    /**
     * 
     * @type {string}
     * @memberof CypherSearchInsightDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchInsightDto
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof CypherSearchInsightDto
     */
    category?: string;
}
/**
 * 
 * @export
 * @interface CypherSearchRequestDto
 */
export interface CypherSearchRequestDto {
    /**
     * 
     * @type {string}
     * @memberof CypherSearchRequestDto
     */
    cypherQuery: string;
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof CypherSearchRequestDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof CypherSearchRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof CypherSearchRequestDto
     */
    pageNum?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CypherSearchRequestDto
     */
    withInsights?: boolean;
}
/**
 * 
 * @export
 * @interface CypherSearchResponseDto
 */
export interface CypherSearchResponseDto {
    /**
     * 
     * @type {Array<CypherSearchEntityDto>}
     * @memberof CypherSearchResponseDto
     */
    entities?: Array<CypherSearchEntityDto>;
    /**
     * 
     * @type {Array<CypherSearchEdgeDto>}
     * @memberof CypherSearchResponseDto
     */
    edges?: Array<CypherSearchEdgeDto>;
    /**
     * 
     * @type {number}
     * @memberof CypherSearchResponseDto
     */
    pageNum?: number;
    /**
     * 
     * @type {number}
     * @memberof CypherSearchResponseDto
     */
    pageSize?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CypherSearchResponseDto
     */
    lastPage?: boolean;
}
/**
 * 
 * @export
 * @interface DataSourcePromDto
 */
export interface DataSourcePromDto {
    /**
     * 
     * @type {string}
     * @memberof DataSourcePromDto
     */
    promDatasourceName?: string;
}
/**
 * 
 * @export
 * @interface DatasetSanityCheckResultDto
 */
export interface DatasetSanityCheckResultDto {
    /**
     * 
     * @type {string}
     * @memberof DatasetSanityCheckResultDto
     */
    checkName?: string;
    /**
     * 
     * @type {Array<DatasetSanityCheckStepResultDto>}
     * @memberof DatasetSanityCheckResultDto
     */
    stepResults?: Array<DatasetSanityCheckStepResultDto>;
}
/**
 * 
 * @export
 * @interface DatasetSanityCheckStepResultDto
 */
export interface DatasetSanityCheckStepResultDto {
    /**
     * 
     * @type {string}
     * @memberof DatasetSanityCheckStepResultDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetSanityCheckStepResultDto
     */
    troubleshoot?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetSanityCheckStepResultDto
     */
    blockers?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetSanityCheckStepResultDto
     */
    warnings?: Array<string>;
}
/**
 * 
 * @export
 * @interface DatasetSanityChecksDto
 */
export interface DatasetSanityChecksDto {
    /**
     * 
     * @type {Array<DatasetSanityCheckResultDto>}
     * @memberof DatasetSanityChecksDto
     */
    stepResults?: Array<DatasetSanityCheckResultDto>;
}
/**
 * 
 * @export
 * @interface DatasetSummaryDto
 */
export interface DatasetSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof DatasetSummaryDto
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetSummaryDto
     */
    detected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetSummaryDto
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetSummaryDto
     */
    configured?: boolean;
}
/**
 * 
 * @export
 * @interface DatasetVendorDto
 */
export interface DatasetVendorDto {
    /**
     * 
     * @type {boolean}
     * @memberof DatasetVendorDto
     */
    detected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DatasetVendorDto
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DatasetVendorDto
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface DatasetVendorsDto
 */
export interface DatasetVendorsDto {
    /**
     * 
     * @type {Array<DatasetVendorDto>}
     * @memberof DatasetVendorsDto
     */
    items?: Array<DatasetVendorDto>;
}
/**
 * 
 * @export
 * @interface DatasetsDto
 */
export interface DatasetsDto {
    /**
     * 
     * @type {Array<DatasetSummaryDto>}
     * @memberof DatasetsDto
     */
    items?: Array<DatasetSummaryDto>;
}
/**
 * 
 * @export
 * @interface DatasetsSanityChecksDto
 */
export interface DatasetsSanityChecksDto {
    /**
     * 
     * @type {{ [key: string]: DatasetSanityChecksDto; }}
     * @memberof DatasetsSanityChecksDto
     */
    sanityChecks?: { [key: string]: DatasetSanityChecksDto; };
}
/**
 * 
 * @export
 * @interface DefaultHttpStatusCode
 */
export interface DefaultHttpStatusCode {
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    error?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    is3xxRedirection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    is5xxServerError?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    is4xxClientError?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    is2xxSuccessful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DefaultHttpStatusCode
     */
    is1xxInformational?: boolean;
}
/**
 * Base class for relation definitions
 * @export
 * @interface DefinedByDto
 */
export interface DefinedByDto {
    /**
     * Static properties to attach to the relation
     * @type {{ [key: string]: any; }}
     * @memberof DefinedByDto
     */
    staticProperties?: { [key: string]: any; };
    /**
     * KG domain the start entity must be in. Omit to address the default telemetry domain — omitting the field is the only spelling for it, so the reserved telemetry domain values are rejected here rather than treated as the default. Set this to bind entities written through the KG Write API, which can never live in the default domain. Required when the endpoint type is declared only by a published kg schema and not by any entity rule, since without it the rule would be accepted and then match nothing. PROPERTY_MATCH only — rejected on a METRICS relation.
     * @type {string}
     * @memberof DefinedByDto
     */
    startDomain?: string;
    /**
     * KG domain the end entity must be in. Same semantics as startDomain.
     * @type {string}
     * @memberof DefinedByDto
     */
    endDomain?: string;
    /**
     * 
     * @type {string}
     * @memberof DefinedByDto
     */
    source: string;
}
/**
 * Metrics-based relation definition
 * @export
 * @interface DefinedByMetricsDto
 */
export interface DefinedByMetricsDto extends DefinedByDto {
    /**
     * PromQL pattern to match metrics
     * @type {string}
     * @memberof DefinedByMetricsDto
     */
    pattern: string;
    /**
     * Label matchers for start entity
     * @type {{ [key: string]: string; }}
     * @memberof DefinedByMetricsDto
     */
    startEntityMatchers?: { [key: string]: string; };
    /**
     * Label matchers for end entity
     * @type {{ [key: string]: string; }}
     * @memberof DefinedByMetricsDto
     */
    endEntityMatchers?: { [key: string]: string; };
}
/**
 * Property-match based relation definition
 * @export
 * @interface DefinedByPropertyMatchDto
 */
export interface DefinedByPropertyMatchDto extends DefinedByDto {
    /**
     * Properties from start entity to match
     * @type {Array<string>}
     * @memberof DefinedByPropertyMatchDto
     */
    startEntityProperties?: Array<string>;
    /**
     * Properties from end entity to match
     * @type {Array<string>}
     * @memberof DefinedByPropertyMatchDto
     */
    endEntityProperties?: Array<string>;
}
/**
 * 
 * @export
 * @interface DisabledAlertConfigDto
 */
export interface DisabledAlertConfigDto {
    /**
     * 
     * @type {string}
     * @memberof DisabledAlertConfigDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DisabledAlertConfigDto
     */
    matchLabels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DisabledAlertConfigDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface DisabledAlertConfigsDto
 */
export interface DisabledAlertConfigsDto {
    /**
     * 
     * @type {Array<DisabledAlertConfigDto>}
     * @memberof DisabledAlertConfigsDto
     */
    disabledAlertConfigs?: Array<DisabledAlertConfigDto>;
}
/**
 * 
 * @export
 * @interface DisabledRulesDto
 */
export interface DisabledRulesDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof DisabledRulesDto
     */
    disabled?: Set<string>;
}
/**
 * 
 * @export
 * @interface DrilldownConfigMigrationDto
 */
export interface DrilldownConfigMigrationDto {
    /**
     * 
     * @type {boolean}
     * @memberof DrilldownConfigMigrationDto
     */
    dryRun?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DrilldownConfigMigrationDto
     */
    recreateDefaultConfigs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DrilldownConfigMigrationDto
     */
    recreateOtelLogConfig?: boolean;
}
/**
 * 
 * @export
 * @interface EdgeDisplayConfigDto
 */
export interface EdgeDisplayConfigDto {
    /**
     * 
     * @type {string}
     * @memberof EdgeDisplayConfigDto
     */
    color?: string;
}
/**
 * 
 * @export
 * @interface EntityAssertionDetailsDto
 */
export interface EntityAssertionDetailsDto {
    /**
     * 
     * @type {TimeWindowDto}
     * @memberof EntityAssertionDetailsDto
     */
    timeWindow?: TimeWindowDto;
    /**
     * 
     * @type {number}
     * @memberof EntityAssertionDetailsDto
     */
    timeStepIntervalMs?: number;
    /**
     * 
     * @type {Array<EntityAssertionDetailsDtoThresholdsInner>}
     * @memberof EntityAssertionDetailsDto
     */
    thresholds?: Array<EntityAssertionDetailsDtoThresholdsInner>;
    /**
     * 
     * @type {Array<MetricDto>}
     * @memberof EntityAssertionDetailsDto
     */
    metrics?: Array<MetricDto>;
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionDetailsDto
     */
    notificationRuleName?: string;
}
/**
 * @type EntityAssertionDetailsDtoThresholdsInner
 * 
 * @export
 */
export type EntityAssertionDetailsDtoThresholdsInner = ThresholdMinMaxDto | ThresholdSingleDto;
/**
 * 
 * @export
 * @interface EntityAssertionMetricRequestDto
 */
export interface EntityAssertionMetricRequestDto {
    /**
     * 
     * @type {number}
     * @memberof EntityAssertionMetricRequestDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityAssertionMetricRequestDto
     */
    endTime?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityAssertionMetricRequestDto
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof EntityAssertionMetricRequestDto
     */
    referenceForThreshold?: boolean;
}
/**
 * 
 * @export
 * @interface EntityAssertionScoresDto
 */
export interface EntityAssertionScoresDto {
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionScoresDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionScoresDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityAssertionScoresDto
     */
    typeLabels?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EntityAssertionScoresDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {Array<MetricDto>}
     * @memberof EntityAssertionScoresDto
     */
    metrics?: Array<MetricDto>;
    /**
     * 
     * @type {number}
     * @memberof EntityAssertionScoresDto
     */
    totalScore?: number;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof EntityAssertionScoresDto
     */
    severityWiseTotalScores?: { [key: string]: number; };
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionScoresDto
     */
    percentage?: string;
    /**
     * 
     * @type {Array<AssertionClusterDto>}
     * @memberof EntityAssertionScoresDto
     */
    assertionClusters?: Array<AssertionClusterDto>;
    /**
     * 
     * @type {boolean}
     * @memberof EntityAssertionScoresDto
     */
    inboundClientErrorBreached?: boolean;
}
/**
 * 
 * @export
 * @interface EntityAssertionSummariesDto
 */
export interface EntityAssertionSummariesDto {
    /**
     * 
     * @type {Array<EntityAssertionSummaryDto>}
     * @memberof EntityAssertionSummariesDto
     */
    summaries?: Array<EntityAssertionSummaryDto>;
    /**
     * 
     * @type {TimeWindowDto}
     * @memberof EntityAssertionSummariesDto
     */
    timeWindow?: TimeWindowDto;
    /**
     * 
     * @type {number}
     * @memberof EntityAssertionSummariesDto
     */
    timeStepIntervalMs?: number;
    /**
     * 
     * @type {EntityAssertionScoresDto}
     * @memberof EntityAssertionSummariesDto
     */
    aggregateAssertionScores?: EntityAssertionScoresDto;
    /**
     * 
     * @type {Array<EntityAssertionScoresDto>}
     * @memberof EntityAssertionSummariesDto
     */
    assertionScores?: Array<EntityAssertionScoresDto>;
    /**
     * 
     * @type {any}
     * @memberof EntityAssertionSummariesDto
     */
    graphData?: any | null;
}
/**
 * 
 * @export
 * @interface EntityAssertionSummaryDto
 */
export interface EntityAssertionSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionSummaryDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionSummaryDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EntityAssertionSummaryDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {Array<EntityAssertionSummaryTimeLineDto>}
     * @memberof EntityAssertionSummaryDto
     */
    timeLines?: Array<EntityAssertionSummaryTimeLineDto>;
}
/**
 * 
 * @export
 * @interface EntityAssertionSummaryTimeLineDto
 */
export interface EntityAssertionSummaryTimeLineDto {
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    alertName?: string;
    /**
     * 
     * @type {Array<AssertionStateDto>}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    healthStates?: Array<AssertionStateDto>;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    labels?: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {Array<EntityAssertionSummaryTimeLineDto>}
     * @memberof EntityAssertionSummaryTimeLineDto
     */
    nestedSummaries?: Array<EntityAssertionSummaryTimeLineDto>;
}
/**
 * 
 * @export
 * @interface EntityAssertionsGraphDto
 */
export interface EntityAssertionsGraphDto {
    /**
     * 
     * @type {string}
     * @memberof EntityAssertionsGraphDto
     */
    type?: string;
    /**
     * 
     * @type {TimeWindowDto}
     * @memberof EntityAssertionsGraphDto
     */
    timeCriteria?: TimeWindowDto;
    /**
     * 
     * @type {any}
     * @memberof EntityAssertionsGraphDto
     */
    data?: any | null;
}
/**
 * 
 * @export
 * @interface EntityCountDto
 */
export interface EntityCountDto {
    /**
     * 
     * @type {number}
     * @memberof EntityCountDto
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof EntityCountDto
     */
    withInsights?: number;
    /**
     * 
     * @type {Array<GroupedEntityCountDto>}
     * @memberof EntityCountDto
     */
    groupBy?: Array<GroupedEntityCountDto>;
}
/**
 * 
 * @export
 * @interface EntityCountRequestDto
 */
export interface EntityCountRequestDto {
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof EntityCountRequestDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof EntityCountRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {Array<PropertyMatcherDto>}
     * @memberof EntityCountRequestDto
     */
    propertyMatchers?: Array<PropertyMatcherDto>;
    /**
     * 
     * @type {MatcherTreeDto}
     * @memberof EntityCountRequestDto
     */
    matcherTree?: MatcherTreeDto;
}
/**
 * 
 * @export
 * @interface EntityDisplayConfigDto
 */
export interface EntityDisplayConfigDto {
    /**
     * 
     * @type {string}
     * @memberof EntityDisplayConfigDto
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityDisplayConfigDto
     */
    shape?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityDisplayConfigDto
     */
    icon?: string;
}
/**
 * 
 * @export
 * @interface EntityEventsDto
 */
export interface EntityEventsDto {
    /**
     * 
     * @type {string}
     * @memberof EntityEventsDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityEventsDto
     */
    entityName?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityEventsDto
     */
    scope?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof EntityEventsDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityEventsDto
     */
    endTime?: number;
    /**
     * 
     * @type {Array<InfraEventDto>}
     * @memberof EntityEventsDto
     */
    events?: Array<InfraEventDto>;
    /**
     * 
     * @type {number}
     * @memberof EntityEventsDto
     */
    totalCount?: number;
}
/**
 * 
 * @export
 * @interface EntityKeyDto
 */
export interface EntityKeyDto {
    /**
     * 
     * @type {string}
     * @memberof EntityKeyDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityKeyDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof EntityKeyDto
     */
    scope?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface EntityKpiScopeDto
 */
export interface EntityKpiScopeDto {
    /**
     * 
     * @type {string}
     * @memberof EntityKpiScopeDto
     */
    type?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntityKpiScopeDto
     */
    kpis?: Array<string>;
}
/**
 * 
 * @export
 * @interface EntityMatcherDto
 */
export interface EntityMatcherDto {
    /**
     * 
     * @type {string}
     * @memberof EntityMatcherDto
     */
    entityType: string;
    /**
     * 
     * @type {Array<PropertyMatcherDto>}
     * @memberof EntityMatcherDto
     */
    propertyMatchers?: Array<PropertyMatcherDto>;
    /**
     * 
     * @type {MatcherTreeDto}
     * @memberof EntityMatcherDto
     */
    matcherTree?: MatcherTreeDto;
    /**
     * 
     * @type {Set<string>}
     * @memberof EntityMatcherDto
     */
    connectToEntityTypes?: Set<string>;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMatcherDto
     */
    havingAssertion?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMatcherDto
     */
    havingPropagatedAssertions?: boolean;
}
/**
 * 
 * @export
 * @interface EntityMonitoringStatusDto
 */
export interface EntityMonitoringStatusDto {
    /**
     * 
     * @type {EntityKeyDto}
     * @memberof EntityMonitoringStatusDto
     */
    entityKey?: EntityKeyDto;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMonitoringStatusDto
     */
    resource?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMonitoringStatusDto
     */
    traffic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EntityMonitoringStatusDto
     */
    latency?: boolean;
}
/**
 * 
 * @export
 * @interface EntityPropertyDto
 */
export interface EntityPropertyDto {
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyDto
     */
    uom?: EntityPropertyDtoUomEnum;
}


/**
 * @export
 */
export const EntityPropertyDtoUomEnum = {
    Mb: 'MB',
    Gb: 'GB',
    Percent: '%'
} as const;
export type EntityPropertyDtoUomEnum = typeof EntityPropertyDtoUomEnum[keyof typeof EntityPropertyDtoUomEnum];

/**
 * 
 * @export
 * @interface EntityPropertyValuesDto
 */
export interface EntityPropertyValuesDto {
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyValuesDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyValuesDto
     */
    propertyName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntityPropertyValuesDto
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface EntityPropertyValuesRequestDto
 */
export interface EntityPropertyValuesRequestDto {
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyValuesRequestDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyValuesRequestDto
     */
    propertyName?: string;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof EntityPropertyValuesRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {Array<PropertyMatcherDto>}
     * @memberof EntityPropertyValuesRequestDto
     */
    propertyMatchers?: Array<PropertyMatcherDto>;
    /**
     * 
     * @type {MatcherTreeDto}
     * @memberof EntityPropertyValuesRequestDto
     */
    matcherTree?: MatcherTreeDto;
    /**
     * 
     * @type {string}
     * @memberof EntityPropertyValuesRequestDto
     */
    prefix?: string;
    /**
     * 
     * @type {number}
     * @memberof EntityPropertyValuesRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityPropertyValuesRequestDto
     */
    end?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityPropertyValuesRequestDto
     */
    limit?: number;
}
/**
 * 
 * @export
 * @interface EntityReadResponseDto
 */
export interface EntityReadResponseDto {
    /**
     * 
     * @type {string}
     * @memberof EntityReadResponseDto
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityReadResponseDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityReadResponseDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityReadResponseDto
     */
    scope?: { [key: string]: string; };
    /**
     * Whether the entity is currently active (not expired).
     * @type {boolean}
     * @memberof EntityReadResponseDto
     */
    active?: boolean;
    /**
     * Properties stored on the entity: scalar values (string, boolean, int64, or double) or arrays of scalars.
     * @type {{ [key: string]: any; }}
     * @memberof EntityReadResponseDto
     */
    properties?: { [key: string]: any; };
    /**
     * Entity types this entity has at least one relationship to; useful for building follow-up /entities/connected queries.
     * @type {Array<string>}
     * @memberof EntityReadResponseDto
     */
    connectedTypes?: Array<string>;
}
/**
 * Entity type rule definition
 * @export
 * @interface EntityRuleDto
 */
export interface EntityRuleDto {
    /**
     * Domain for entities produced by this rule. Omit for the default domain.
     * @type {string}
     * @memberof EntityRuleDto
     */
    domain?: string;
    /**
     * Entity type name (e.g., 'Service', 'Pod', 'Jvm')
     * @type {string}
     * @memberof EntityRuleDto
     */
    type: string;
    /**
     * Entity name pattern
     * @type {string}
     * @memberof EntityRuleDto
     */
    name: string;
    /**
     * Scope definitions for the entity
     * @type {{ [key: string]: string; }}
     * @memberof EntityRuleDto
     */
    scope?: { [key: string]: string; };
    /**
     * Lookup mappings
     * @type {{ [key: string]: string; }}
     * @memberof EntityRuleDto
     */
    lookup?: { [key: string]: string; };
    /**
     * Query/metric definitions that define this entity
     * @type {Array<PropertyRuleDto>}
     * @memberof EntityRuleDto
     */
    definedBy?: Array<PropertyRuleDto>;
    /**
     * Enrichment rules for this entity
     * @type {Array<PropertyRuleDto>}
     * @memberof EntityRuleDto
     */
    enrichedBy?: Array<PropertyRuleDto>;
    /**
     * Literal entity records that create and keep this type alive (mutually exclusive with definedBy)
     * @type {Array<StaticEntityDto>}
     * @memberof EntityRuleDto
     */
    definedStatically?: Array<StaticEntityDto>;
    /**
     * Literal enrichment records that patch existing entities of this type without keeping them alive
     * @type {Array<StaticEnrichmentDto>}
     * @memberof EntityRuleDto
     */
    enrichedStatically?: Array<StaticEnrichmentDto>;
    /**
     * Whether this entity rule is disabled
     * @type {boolean}
     * @memberof EntityRuleDto
     */
    disabled?: boolean;
}
/**
 * 
 * @export
 * @interface EntityScopesRequestDto
 */
export interface EntityScopesRequestDto {
    /**
     * 
     * @type {number}
     * @memberof EntityScopesRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityScopesRequestDto
     */
    end?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EntityScopesRequestDto
     */
    conditions?: { [key: string]: Array<string>; };
}
/**
 * 
 * @export
 * @interface EntityScopesResponseDto
 */
export interface EntityScopesResponseDto {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EntityScopesResponseDto
     */
    scopeValues?: { [key: string]: Array<string>; };
}
/**
 * 
 * @export
 * @interface EntityScopesV2ResponseDto
 */
export interface EntityScopesV2ResponseDto {
    /**
     * 
     * @type {{ [key: string]: Array<ScopeValueDto>; }}
     * @memberof EntityScopesV2ResponseDto
     */
    scopeValues?: { [key: string]: Array<ScopeValueDto>; };
}
/**
 * 
 * @export
 * @interface EntityTypeDto
 */
export interface EntityTypeDto {
    /**
     * 
     * @type {string}
     * @memberof EntityTypeDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityTypeDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityTypeDto
     */
    lookup?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EntityPropertyDto>}
     * @memberof EntityTypeDto
     */
    properties?: Array<EntityPropertyDto>;
    /**
     * 
     * @type {number}
     * @memberof EntityTypeDto
     */
    created?: number;
    /**
     * 
     * @type {number}
     * @memberof EntityTypeDto
     */
    updated?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EntityTypeDto
     */
    active?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof EntityTypeDto
     */
    connectedEntityTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EntityTypeDto
     */
    definitionMode?: string;
}
/**
 * 
 * @export
 * @interface EntityTypesDto
 */
export interface EntityTypesDto {
    /**
     * 
     * @type {Array<EntityTypeDto>}
     * @memberof EntityTypesDto
     */
    entities?: Array<EntityTypeDto>;
}
/**
 * 
 * @export
 * @interface EnvironmentDto
 */
export interface EnvironmentDto {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentDto
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof EnvironmentDto
     */
    envsForLog?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof EnvironmentDto
     */
    sitesForLog?: Set<string>;
    /**
     * 
     * @type {LogConfigDto}
     * @memberof EnvironmentDto
     */
    logConfig?: LogConfigDto;
    /**
     * 
     * @type {boolean}
     * @memberof EnvironmentDto
     */
    defaultConfig?: boolean;
}
/**
 * 
 * @export
 * @interface ExternalLoggingRequestDto
 */
export interface ExternalLoggingRequestDto {
    /**
     * 
     * @type {number}
     * @memberof ExternalLoggingRequestDto
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof ExternalLoggingRequestDto
     */
    end: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ExternalLoggingRequestDto
     */
    properties?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface ExternalLoggingResponseDto
 */
export interface ExternalLoggingResponseDto {
    /**
     * 
     * @type {string}
     * @memberof ExternalLoggingResponseDto
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface GraphAssertion
 */
export interface GraphAssertion {
    /**
     * 
     * @type {string}
     * @memberof GraphAssertion
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof GraphAssertion
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof GraphAssertion
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof GraphAssertion
     */
    entityType?: string;
}
/**
 * 
 * @export
 * @interface GraphAssertionSummary
 */
export interface GraphAssertionSummary {
    /**
     * 
     * @type {string}
     * @memberof GraphAssertionSummary
     */
    severity?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GraphAssertionSummary
     */
    amend?: boolean;
    /**
     * 
     * @type {Array<GraphAssertion>}
     * @memberof GraphAssertionSummary
     */
    assertions?: Array<GraphAssertion>;
}
/**
 * 
 * @export
 * @interface GraphDisplayConfigDto
 */
export interface GraphDisplayConfigDto {
    /**
     * 
     * @type {{ [key: string]: EntityDisplayConfigDto; }}
     * @memberof GraphDisplayConfigDto
     */
    entities?: { [key: string]: EntityDisplayConfigDto; };
    /**
     * 
     * @type {{ [key: string]: EdgeDisplayConfigDto; }}
     * @memberof GraphDisplayConfigDto
     */
    edges?: { [key: string]: EdgeDisplayConfigDto; };
}
/**
 * 
 * @export
 * @interface GraphEntity
 */
export interface GraphEntity {
    /**
     * 
     * @type {number}
     * @memberof GraphEntity
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GraphEntity
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof GraphEntity
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GraphEntity
     */
    active?: boolean;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof GraphEntity
     */
    connectedEntityTypes?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof GraphEntity
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof GraphEntity
     */
    propertyMatcher?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof GraphEntity
     */
    scopeNames?: { [key: string]: any; };
    /**
     * 
     * @type {GraphEntityScope}
     * @memberof GraphEntity
     */
    scope?: GraphEntityScope;
    /**
     * 
     * @type {string}
     * @memberof GraphEntity
     */
    domain?: string;
    /**
     * 
     * @type {GraphAssertionSummary}
     * @memberof GraphEntity
     */
    assertion?: GraphAssertionSummary;
    /**
     * 
     * @type {GraphAssertionSummary}
     * @memberof GraphEntity
     */
    connectedAssertion?: GraphAssertionSummary;
    /**
     * 
     * @type {number}
     * @memberof GraphEntity
     */
    assertionCount?: number;
    /**
     * 
     * @type {KGEntityKey}
     * @memberof GraphEntity
     */
    key?: KGEntityKey;
}
/**
 * 
 * @export
 * @interface GraphEntityKpiValue
 */
export interface GraphEntityKpiValue {
    /**
     * 
     * @type {number}
     * @memberof GraphEntityKpiValue
     */
    kpiValue?: number;
    /**
     * 
     * @type {GraphAssertionSummary}
     * @memberof GraphEntityKpiValue
     */
    assertionSummary?: GraphAssertionSummary;
}
/**
 * 
 * @export
 * @interface GraphEntityScope
 */
export interface GraphEntityScope {
    [key: string]: any | any;
    /**
     * 
     * @type {boolean}
     * @memberof GraphEntityScope
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface GroupedEntityCountDto
 */
export interface GroupedEntityCountDto {
    /**
     * 
     * @type {number}
     * @memberof GroupedEntityCountDto
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof GroupedEntityCountDto
     */
    withInsights?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof GroupedEntityCountDto
     */
    groupedBy?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface HealthThresholdV2Dto
 */
export interface HealthThresholdV2Dto {
    /**
     * 
     * @type {string}
     * @memberof HealthThresholdV2Dto
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthThresholdV2Dto
     */
    expression?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthThresholdV2Dto
     */
    alertCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthThresholdV2Dto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof HealthThresholdV2Dto
     */
    managedBy?: string;
}

/**
 * 
 * @export
 */
export const HttpStatus = {
    _100Continue: '100 CONTINUE',
    _101SwitchingProtocols: '101 SWITCHING_PROTOCOLS',
    _102Processing: '102 PROCESSING',
    _103EarlyHints: '103 EARLY_HINTS',
    _103Checkpoint: '103 CHECKPOINT',
    _200Ok: '200 OK',
    _201Created: '201 CREATED',
    _202Accepted: '202 ACCEPTED',
    _203NonAuthoritativeInformation: '203 NON_AUTHORITATIVE_INFORMATION',
    _204NoContent: '204 NO_CONTENT',
    _205ResetContent: '205 RESET_CONTENT',
    _206PartialContent: '206 PARTIAL_CONTENT',
    _207MultiStatus: '207 MULTI_STATUS',
    _208AlreadyReported: '208 ALREADY_REPORTED',
    _226ImUsed: '226 IM_USED',
    _300MultipleChoices: '300 MULTIPLE_CHOICES',
    _301MovedPermanently: '301 MOVED_PERMANENTLY',
    _302Found: '302 FOUND',
    _302MovedTemporarily: '302 MOVED_TEMPORARILY',
    _303SeeOther: '303 SEE_OTHER',
    _304NotModified: '304 NOT_MODIFIED',
    _305UseProxy: '305 USE_PROXY',
    _307TemporaryRedirect: '307 TEMPORARY_REDIRECT',
    _308PermanentRedirect: '308 PERMANENT_REDIRECT',
    _400BadRequest: '400 BAD_REQUEST',
    _401Unauthorized: '401 UNAUTHORIZED',
    _402PaymentRequired: '402 PAYMENT_REQUIRED',
    _403Forbidden: '403 FORBIDDEN',
    _404NotFound: '404 NOT_FOUND',
    _405MethodNotAllowed: '405 METHOD_NOT_ALLOWED',
    _406NotAcceptable: '406 NOT_ACCEPTABLE',
    _407ProxyAuthenticationRequired: '407 PROXY_AUTHENTICATION_REQUIRED',
    _408RequestTimeout: '408 REQUEST_TIMEOUT',
    _409Conflict: '409 CONFLICT',
    _410Gone: '410 GONE',
    _411LengthRequired: '411 LENGTH_REQUIRED',
    _412PreconditionFailed: '412 PRECONDITION_FAILED',
    _413PayloadTooLarge: '413 PAYLOAD_TOO_LARGE',
    _413RequestEntityTooLarge: '413 REQUEST_ENTITY_TOO_LARGE',
    _414UriTooLong: '414 URI_TOO_LONG',
    _414RequestUriTooLong: '414 REQUEST_URI_TOO_LONG',
    _415UnsupportedMediaType: '415 UNSUPPORTED_MEDIA_TYPE',
    _416RequestedRangeNotSatisfiable: '416 REQUESTED_RANGE_NOT_SATISFIABLE',
    _417ExpectationFailed: '417 EXPECTATION_FAILED',
    _418IAmATeapot: '418 I_AM_A_TEAPOT',
    _419InsufficientSpaceOnResource: '419 INSUFFICIENT_SPACE_ON_RESOURCE',
    _420MethodFailure: '420 METHOD_FAILURE',
    _421DestinationLocked: '421 DESTINATION_LOCKED',
    _422UnprocessableEntity: '422 UNPROCESSABLE_ENTITY',
    _423Locked: '423 LOCKED',
    _424FailedDependency: '424 FAILED_DEPENDENCY',
    _425TooEarly: '425 TOO_EARLY',
    _426UpgradeRequired: '426 UPGRADE_REQUIRED',
    _428PreconditionRequired: '428 PRECONDITION_REQUIRED',
    _429TooManyRequests: '429 TOO_MANY_REQUESTS',
    _431RequestHeaderFieldsTooLarge: '431 REQUEST_HEADER_FIELDS_TOO_LARGE',
    _451UnavailableForLegalReasons: '451 UNAVAILABLE_FOR_LEGAL_REASONS',
    _500InternalServerError: '500 INTERNAL_SERVER_ERROR',
    _501NotImplemented: '501 NOT_IMPLEMENTED',
    _502BadGateway: '502 BAD_GATEWAY',
    _503ServiceUnavailable: '503 SERVICE_UNAVAILABLE',
    _504GatewayTimeout: '504 GATEWAY_TIMEOUT',
    _505HttpVersionNotSupported: '505 HTTP_VERSION_NOT_SUPPORTED',
    _506VariantAlsoNegotiates: '506 VARIANT_ALSO_NEGOTIATES',
    _507InsufficientStorage: '507 INSUFFICIENT_STORAGE',
    _508LoopDetected: '508 LOOP_DETECTED',
    _509BandwidthLimitExceeded: '509 BANDWIDTH_LIMIT_EXCEEDED',
    _510NotExtended: '510 NOT_EXTENDED',
    _511NetworkAuthenticationRequired: '511 NETWORK_AUTHENTICATION_REQUIRED'
} as const;
export type HttpStatus = typeof HttpStatus[keyof typeof HttpStatus];

/**
 * 
 * @export
 * @interface HttpStatusCode
 */
export interface HttpStatusCode {
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    error?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    is3xxRedirection?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    is5xxServerError?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    is4xxClientError?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    is2xxSuccessful?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof HttpStatusCode
     */
    is1xxInformational?: boolean;
}
/**
 * 
 * @export
 * @interface ImmutableMapStringString
 */
export interface ImmutableMapStringString {
    [key: string]: string | any;
    /**
     * 
     * @type {boolean}
     * @memberof ImmutableMapStringString
     */
    empty?: boolean;
}
/**
 * 
 * @export
 * @interface IncidentDto
 */
export interface IncidentDto {
    /**
     * 
     * @type {number}
     * @memberof IncidentDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof IncidentDto
     */
    endTime?: number;
    /**
     * 
     * @type {string}
     * @memberof IncidentDto
     */
    severity?: string;
}
/**
 * 
 * @export
 * @interface IncidentGroupDetailDto
 */
export interface IncidentGroupDetailDto {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IncidentGroupDetailDto
     */
    scope?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface IncidentGroupDto
 */
export interface IncidentGroupDto {
    /**
     * 
     * @type {string}
     * @memberof IncidentGroupDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof IncidentGroupDto
     */
    type?: IncidentGroupDtoTypeEnum;
    /**
     * 
     * @type {IncidentGroupDetailDto}
     * @memberof IncidentGroupDto
     */
    detail?: IncidentGroupDetailDto;
    /**
     * 
     * @type {Array<IncidentDto>}
     * @memberof IncidentGroupDto
     */
    incidents?: Array<IncidentDto>;
}


/**
 * @export
 */
export const IncidentGroupDtoTypeEnum = {
    AssertionAlert: 'assertion_alert',
    SloAlert: 'slo_alert'
} as const;
export type IncidentGroupDtoTypeEnum = typeof IncidentGroupDtoTypeEnum[keyof typeof IncidentGroupDtoTypeEnum];

/**
 * 
 * @export
 * @interface IncidentGroupListDto
 */
export interface IncidentGroupListDto {
    /**
     * 
     * @type {Array<IncidentGroupDto>}
     * @memberof IncidentGroupListDto
     */
    incidentGroups?: Array<IncidentGroupDto>;
    /**
     * 
     * @type {string}
     * @memberof IncidentGroupListDto
     */
    chartName?: string;
}
/**
 * 
 * @export
 * @interface IncidentRequestDto
 */
export interface IncidentRequestDto {
    /**
     * 
     * @type {number}
     * @memberof IncidentRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof IncidentRequestDto
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof IncidentRequestDto
     */
    search?: string;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof IncidentRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {string}
     * @memberof IncidentRequestDto
     */
    sloSource?: string;
}
/**
 * 
 * @export
 * @interface IncidentSummaryDto
 */
export interface IncidentSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof IncidentSummaryDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof IncidentSummaryDto
     */
    type?: IncidentSummaryDtoTypeEnum;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof IncidentSummaryDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {number}
     * @memberof IncidentSummaryDto
     */
    incidents?: number;
    /**
     * 
     * @type {boolean}
     * @memberof IncidentSummaryDto
     */
    status?: boolean;
}


/**
 * @export
 */
export const IncidentSummaryDtoTypeEnum = {
    AssertionAlert: 'assertion_alert',
    SloAlert: 'slo_alert'
} as const;
export type IncidentSummaryDtoTypeEnum = typeof IncidentSummaryDtoTypeEnum[keyof typeof IncidentSummaryDtoTypeEnum];

/**
 * 
 * @export
 * @interface IncidentSummaryListDto
 */
export interface IncidentSummaryListDto {
    /**
     * 
     * @type {Array<IncidentSummaryDto>}
     * @memberof IncidentSummaryListDto
     */
    incidentSummaries?: Array<IncidentSummaryDto>;
}
/**
 * 
 * @export
 * @interface IndexMappingDto
 */
export interface IndexMappingDto {
    /**
     * 
     * @type {string}
     * @memberof IndexMappingDto
     */
    index?: string;
    /**
     * 
     * @type {{ [key: string]: Set<string>; }}
     * @memberof IndexMappingDto
     */
    labelMatchValues?: { [key: string]: Set<string>; };
}
/**
 * 
 * @export
 * @interface InfraEventDto
 */
export interface InfraEventDto {
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    timestamp?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    entityName?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    verb?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    details?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    changeCategory?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    cluster?: string;
    /**
     * 
     * @type {string}
     * @memberof InfraEventDto
     */
    namespace?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof InfraEventDto
     */
    labels?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface InsightCriteriaDto
 */
export interface InsightCriteriaDto {
    /**
     * 
     * @type {string}
     * @memberof InsightCriteriaDto
     */
    insightSource: InsightCriteriaDtoInsightSourceEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof InsightCriteriaDto
     */
    alertCategories?: Array<InsightCriteriaDtoAlertCategoriesEnum>;
}


/**
 * @export
 */
export const InsightCriteriaDtoInsightSourceEnum = {
    Self: 'SELF',
    Propagated: 'PROPAGATED',
    SelfOrPropagated: 'SELF_OR_PROPAGATED'
} as const;
export type InsightCriteriaDtoInsightSourceEnum = typeof InsightCriteriaDtoInsightSourceEnum[keyof typeof InsightCriteriaDtoInsightSourceEnum];

/**
 * @export
 */
export const InsightCriteriaDtoAlertCategoriesEnum = {
    Saturation: 'saturation',
    Anomaly: 'anomaly',
    Amend: 'amend',
    Failure: 'failure',
    Error: 'error'
} as const;
export type InsightCriteriaDtoAlertCategoriesEnum = typeof InsightCriteriaDtoAlertCategoriesEnum[keyof typeof InsightCriteriaDtoAlertCategoriesEnum];

/**
 * 
 * @export
 * @interface KGEntityKey
 */
export interface KGEntityKey {
    /**
     * 
     * @type {string}
     * @memberof KGEntityKey
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof KGEntityKey
     */
    name?: string;
    /**
     * 
     * @type {KGScope}
     * @memberof KGEntityKey
     */
    kgScope?: KGScope;
    /**
     * 
     * @type {string}
     * @memberof KGEntityKey
     */
    domain?: string;
}
/**
 * 
 * @export
 * @interface KGScope
 */
export interface KGScope {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof KGScope
     */
    propertyMatcher?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof KGScope
     */
    scopeNames?: { [key: string]: any; };
    /**
     * 
     * @type {GraphEntityScope}
     * @memberof KGScope
     */
    scope?: GraphEntityScope;
}
/**
 * 
 * @export
 * @interface KgSizingDenominatorDto
 */
export interface KgSizingDenominatorDto {
    /**
     * 
     * @type {string}
     * @memberof KgSizingDenominatorDto
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof KgSizingDenominatorDto
     */
    datasource?: string;
    /**
     * 
     * @type {string}
     * @memberof KgSizingDenominatorDto
     */
    description?: string;
}
/**
 * 
 * @export
 * @interface KgSizingDto
 */
export interface KgSizingDto {
    /**
     * 
     * @type {number}
     * @memberof KgSizingDto
     */
    schemaVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof KgSizingDto
     */
    perTenantConstantSeries?: number;
    /**
     * 
     * @type {KgSizingDenominatorDto}
     * @memberof KgSizingDto
     */
    denominator?: KgSizingDenominatorDto;
    /**
     * 
     * @type {Array<KgSizingLevelDto>}
     * @memberof KgSizingDto
     */
    levels?: Array<KgSizingLevelDto>;
}
/**
 * 
 * @export
 * @interface KgSizingLevelDto
 */
export interface KgSizingLevelDto {
    /**
     * 
     * @type {string}
     * @memberof KgSizingLevelDto
     */
    dimension?: string;
    /**
     * 
     * @type {string}
     * @memberof KgSizingLevelDto
     */
    vendor?: string;
    /**
     * 
     * @type {number}
     * @memberof KgSizingLevelDto
     */
    seriesPerEntity?: number;
    /**
     * 
     * @type {string}
     * @memberof KgSizingLevelDto
     */
    footprintWindow?: string;
    /**
     * 
     * @type {string}
     * @memberof KgSizingLevelDto
     */
    footprintQuery?: string;
}
/**
 * 
 * @export
 * @interface KpiDisplayConfigDto
 */
export interface KpiDisplayConfigDto {
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    defaultDashboard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    additionalDashboard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    frameworkDashboard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    runtimeDashboard?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    k8sAppView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    appO11yAppView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    frontendO11yAppView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    awsAppView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    logsView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    tracesView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    profilesView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    propertiesView?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof KpiDisplayConfigDto
     */
    metricsView?: boolean;
}
/**
 * 
 * @export
 * @interface KpiGroupDto
 */
export interface KpiGroupDto {
    /**
     * 
     * @type {string}
     * @memberof KpiGroupDto
     */
    name?: string;
    /**
     * 
     * @type {Array<KpiNameDto>}
     * @memberof KpiGroupDto
     */
    kpis?: Array<KpiNameDto>;
}
/**
 * 
 * @export
 * @interface KpiListDto
 */
export interface KpiListDto {
    /**
     * 
     * @type {Array<KpiGroupDto>}
     * @memberof KpiListDto
     */
    kpiGroups?: Array<KpiGroupDto>;
    /**
     * 
     * @type {Array<EntityKpiScopeDto>}
     * @memberof KpiListDto
     */
    kpisByEntityType?: Array<EntityKpiScopeDto>;
}
/**
 * 
 * @export
 * @interface KpiNameDto
 */
export interface KpiNameDto {
    /**
     * 
     * @type {string}
     * @memberof KpiNameDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof KpiNameDto
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof KpiNameDto
     */
    unit?: string;
}
/**
 * 
 * @export
 * @interface KpiSummaryRequestDto
 */
export interface KpiSummaryRequestDto {
    /**
     * 
     * @type {Set<EntityKeyDto>}
     * @memberof KpiSummaryRequestDto
     */
    entityKeys?: Set<EntityKeyDto>;
    /**
     * 
     * @type {number}
     * @memberof KpiSummaryRequestDto
     */
    startMs?: number;
    /**
     * 
     * @type {number}
     * @memberof KpiSummaryRequestDto
     */
    endMs?: number;
}
/**
 * 
 * @export
 * @interface LatencyThresholdDto
 */
export interface LatencyThresholdDto {
    /**
     * 
     * @type {string}
     * @memberof LatencyThresholdDto
     */
    requestType?: string;
    /**
     * 
     * @type {string}
     * @memberof LatencyThresholdDto
     */
    requestContext?: string;
    /**
     * 
     * @type {number}
     * @memberof LatencyThresholdDto
     */
    upperThreshold?: number;
}
/**
 * 
 * @export
 * @interface LatencyThresholdsDto
 */
export interface LatencyThresholdsDto {
    /**
     * 
     * @type {EntityKeyDto}
     * @memberof LatencyThresholdsDto
     */
    entityKey?: EntityKeyDto;
    /**
     * 
     * @type {Array<LatencyThresholdDto>}
     * @memberof LatencyThresholdsDto
     */
    latencyThresholds?: Array<LatencyThresholdDto>;
}
/**
 * 
 * @export
 * @interface LlmRcaAssertionStateDto
 */
export interface LlmRcaAssertionStateDto {
    /**
     * 
     * @type {number}
     * @memberof LlmRcaAssertionStateDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaAssertionStateDto
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionStateDto
     */
    severity?: string;
}
/**
 * 
 * @export
 * @interface LlmRcaAssertionSummaryDto
 */
export interface LlmRcaAssertionSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionSummaryDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionSummaryDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LlmRcaAssertionSummaryDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {Array<LlmRcaAssertionTimelineItemDto>}
     * @memberof LlmRcaAssertionSummaryDto
     */
    timeLines?: Array<LlmRcaAssertionTimelineItemDto>;
}
/**
 * 
 * @export
 * @interface LlmRcaAssertionTimelineItemDto
 */
export interface LlmRcaAssertionTimelineItemDto {
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    alertName?: string;
    /**
     * 
     * @type {Array<LlmRcaAssertionStateDto>}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    healthStates?: Array<LlmRcaAssertionStateDto>;
    /**
     * 
     * @type {Array<{ [key: string]: string; }>}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    labels?: Array<{ [key: string]: string; }>;
    /**
     * 
     * @type {Array<LlmRcaAssertionTimelineItemDto>}
     * @memberof LlmRcaAssertionTimelineItemDto
     */
    nestedTimelines?: Array<LlmRcaAssertionTimelineItemDto>;
}
/**
 * 
 * @export
 * @interface LlmRcaGraphEntityDto
 */
export interface LlmRcaGraphEntityDto {
    /**
     * 
     * @type {number}
     * @memberof LlmRcaGraphEntityDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaGraphEntityDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaGraphEntityDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LlmRcaGraphEntityDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LlmRcaGraphEntityDto
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: Array<EntityKeyDto>; }}
     * @memberof LlmRcaGraphEntityDto
     */
    relations?: { [key: string]: Array<EntityKeyDto>; };
}
/**
 * 
 * @export
 * @interface LlmRcaPatternDto
 */
export interface LlmRcaPatternDto {
    /**
     * 
     * @type {string}
     * @memberof LlmRcaPatternDto
     */
    name?: string;
}
/**
 * 
 * @export
 * @interface LlmRcaSuggestionDto
 */
export interface LlmRcaSuggestionDto {
    /**
     * 
     * @type {string}
     * @memberof LlmRcaSuggestionDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaSuggestionDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LlmRcaSuggestionDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof LlmRcaSuggestionDto
     */
    properties?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof LlmRcaSuggestionDto
     */
    reason?: string;
}
/**
 * 
 * @export
 * @interface LlmRcaSummariesDto
 */
export interface LlmRcaSummariesDto {
    /**
     * 
     * @type {Array<LlmRcaAssertionSummaryDto>}
     * @memberof LlmRcaSummariesDto
     */
    summaries?: Array<LlmRcaAssertionSummaryDto>;
    /**
     * 
     * @type {Array<LlmRcaGraphEntityDto>}
     * @memberof LlmRcaSummariesDto
     */
    graphData?: Array<LlmRcaGraphEntityDto>;
    /**
     * 
     * @type {Array<LlmRcaSuggestionDto>}
     * @memberof LlmRcaSummariesDto
     */
    suggestions?: Array<LlmRcaSuggestionDto>;
    /**
     * 
     * @type {Array<LlmRcaPatternDto>}
     * @memberof LlmRcaSummariesDto
     */
    rcaPatterns?: Array<LlmRcaPatternDto>;
}
/**
 * 
 * @export
 * @interface LlmRcaSummaryReqDto
 */
export interface LlmRcaSummaryReqDto {
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummaryReqDto
     */
    startTime?: number;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummaryReqDto
     */
    endTime?: number;
    /**
     * 
     * @type {Set<EntityKeyDto>}
     * @memberof LlmRcaSummaryReqDto
     */
    entityKeys: Set<EntityKeyDto>;
    /**
     * 
     * @type {Set<EntityKeyDto>}
     * @memberof LlmRcaSummaryReqDto
     */
    suggestionSrcEntities?: Set<EntityKeyDto>;
    /**
     * 
     * @type {Set<string>}
     * @memberof LlmRcaSummaryReqDto
     */
    alertCategories?: Set<string>;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummaryReqDto
     */
    hideAssertionsOlderThanNHours?: number;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummaryReqDto
     */
    hideAssertionsPresentMoreThanPercentageOfTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LlmRcaSummaryReqDto
     */
    includeSuggestions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LlmRcaSummaryReqDto
     */
    includeRcaPatterns?: boolean;
}
/**
 * 
 * @export
 * @interface LlmRcaSummarySearchReqDto
 */
export interface LlmRcaSummarySearchReqDto {
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummarySearchReqDto
     */
    definitionId?: number;
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof LlmRcaSummarySearchReqDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof LlmRcaSummarySearchReqDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummarySearchReqDto
     */
    pageNum?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LlmRcaSummarySearchReqDto
     */
    bindings?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof LlmRcaSummarySearchReqDto
     */
    filterCriteria?: Array<EntityMatcherDto>;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummarySearchReqDto
     */
    hideAssertionsOlderThanNHours?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof LlmRcaSummarySearchReqDto
     */
    alertCategories?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof LlmRcaSummarySearchReqDto
     */
    severityFilter?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof LlmRcaSummarySearchReqDto
     */
    query?: string;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummarySearchReqDto
     */
    currentWBEntityCount?: number;
    /**
     * 
     * @type {number}
     * @memberof LlmRcaSummarySearchReqDto
     */
    hideAssertionsPresentMoreThanPercentageOfTime?: number;
    /**
     * 
     * @type {boolean}
     * @memberof LlmRcaSummarySearchReqDto
     */
    includeSuggestions?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LlmRcaSummarySearchReqDto
     */
    includeRcaPatterns?: boolean;
}
/**
 * 
 * @export
 * @interface LogConfigDto
 */
export interface LogConfigDto {
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    tool?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    dateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    correlationLabels?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogConfigDto
     */
    labelToLogFieldMapping?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    defaultSearchText?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    errorFilter?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof LogConfigDto
     */
    columns?: Array<string>;
    /**
     * 
     * @type {Array<{ [key: string]: any; }>}
     * @memberof LogConfigDto
     */
    filters?: Array<{ [key: string]: any; }>;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    index?: string;
    /**
     * 
     * @type {Array<IndexMappingDto>}
     * @memberof LogConfigDto
     */
    indexMappings?: Array<IndexMappingDto>;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    interval?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogConfigDto
     */
    query?: { [key: string]: string; };
    /**
     * 
     * @type {Array<string>}
     * @memberof LogConfigDto
     */
    sort?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    httpResponseCodeField?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    orgId?: string;
    /**
     * 
     * @type {string}
     * @memberof LogConfigDto
     */
    dataSource?: string;
}
/**
 * 
 * @export
 * @interface LogDrilldownConfigDto
 */
export interface LogDrilldownConfigDto {
    /**
     * 
     * @type {string}
     * @memberof LogDrilldownConfigDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof LogDrilldownConfigDto
     */
    priority?: number;
    /**
     * 
     * @type {Array<PropertyMatchEntryDto>}
     * @memberof LogDrilldownConfigDto
     */
    match?: Array<PropertyMatchEntryDto>;
    /**
     * 
     * @type {boolean}
     * @memberof LogDrilldownConfigDto
     */
    defaultConfig?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogDrilldownConfigDto
     */
    dataSourceUid?: string;
    /**
     * 
     * @type {string}
     * @memberof LogDrilldownConfigDto
     */
    errorLabel?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LogDrilldownConfigDto
     */
    entityPropertyToLogLabelMapping?: { [key: string]: string; };
    /**
     * 
     * @type {boolean}
     * @memberof LogDrilldownConfigDto
     */
    filterBySpanId?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LogDrilldownConfigDto
     */
    filterByTraceId?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LogDrilldownConfigDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface MatcherTreeDto
 */
export interface MatcherTreeDto {
    /**
     * 
     * @type {PropertyMatcherDto}
     * @memberof MatcherTreeDto
     */
    matcher?: PropertyMatcherDto;
    /**
     * 
     * @type {string}
     * @memberof MatcherTreeDto
     */
    op?: MatcherTreeDtoOpEnum;
    /**
     * 
     * @type {Array<MatcherTreeDto>}
     * @memberof MatcherTreeDto
     */
    children?: Array<MatcherTreeDto>;
}


/**
 * @export
 */
export const MatcherTreeDtoOpEnum = {
    And: 'AND',
    Or: 'OR'
} as const;
export type MatcherTreeDtoOpEnum = typeof MatcherTreeDtoOpEnum[keyof typeof MatcherTreeDtoOpEnum];

/**
 * 
 * @export
 * @interface MetricDrilldownConfigDto
 */
export interface MetricDrilldownConfigDto {
    /**
     * 
     * @type {string}
     * @memberof MetricDrilldownConfigDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof MetricDrilldownConfigDto
     */
    priority?: number;
    /**
     * 
     * @type {Array<PropertyMatchEntryDto>}
     * @memberof MetricDrilldownConfigDto
     */
    match?: Array<PropertyMatchEntryDto>;
    /**
     * 
     * @type {boolean}
     * @memberof MetricDrilldownConfigDto
     */
    defaultConfig?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MetricDrilldownConfigDto
     */
    dataSourceUid?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MetricDrilldownConfigDto
     */
    entityPropertyToMetricLabelMapping?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof MetricDrilldownConfigDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface MetricDto
 */
export interface MetricDto {
    /**
     * 
     * @type {string}
     * @memberof MetricDto
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricDto
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricDto
     */
    fillZeros?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof MetricDto
     */
    metric?: { [key: string]: string; };
    /**
     * 
     * @type {Array<MetricValueDto>}
     * @memberof MetricDto
     */
    values?: Array<MetricValueDto>;
}
/**
 * 
 * @export
 * @interface MetricMatchDto
 */
export interface MetricMatchDto {
    /**
     * 
     * @type {string}
     * @memberof MetricMatchDto
     */
    metric?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricMatchDto
     */
    match?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricMatchDto
     */
    matchScope?: boolean;
}
/**
 * 
 * @export
 * @interface MetricSanityCheckResult
 */
export interface MetricSanityCheckResult {
    /**
     * 
     * @type {string}
     * @memberof MetricSanityCheckResult
     */
    checkName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MetricSanityCheckResult
     */
    dataPresent?: boolean;
    /**
     * 
     * @type {Array<MetricSanityCheckStepResult>}
     * @memberof MetricSanityCheckResult
     */
    stepResults?: Array<MetricSanityCheckStepResult>;
}
/**
 * 
 * @export
 * @interface MetricSanityCheckStepResult
 */
export interface MetricSanityCheckStepResult {
    /**
     * 
     * @type {string}
     * @memberof MetricSanityCheckStepResult
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MetricSanityCheckStepResult
     */
    troubleshoot?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricSanityCheckStepResult
     */
    blockers?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MetricSanityCheckStepResult
     */
    warnings?: Array<string>;
}
/**
 * 
 * @export
 * @interface MetricSetsDto
 */
export interface MetricSetsDto {
    /**
     * 
     * @type {number}
     * @memberof MetricSetsDto
     */
    total?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof MetricSetsDto
     */
    metricNames?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof MetricSetsDto
     */
    regexPatterns?: Set<string>;
}
/**
 * 
 * @export
 * @interface MetricValueDto
 */
export interface MetricValueDto {
    /**
     * 
     * @type {number}
     * @memberof MetricValueDto
     */
    time?: number;
    /**
     * 
     * @type {number}
     * @memberof MetricValueDto
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface MimirRelabelRule
 */
export interface MimirRelabelRule {
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    selector?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    replacement?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MimirRelabelRule
     */
    drop?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRule
     */
    join_labels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    join_separator?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRule
     */
    ranked_choice?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    transform_label?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    transform_operation?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    transform_arg?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRule
     */
    target_label?: string;
}
/**
 * 
 * @export
 * @interface MimirRelabelRuleDto
 */
export interface MimirRelabelRuleDto {
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    selector?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    replacement?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MimirRelabelRuleDto
     */
    drop?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRuleDto
     */
    join_labels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    join_separator?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRuleDto
     */
    ranked_choice?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    transform_label?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    transform_operation?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    transform_arg?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleDto
     */
    target_label?: string;
}
/**
 * 
 * @export
 * @interface MimirRelabelRuleGroup
 */
export interface MimirRelabelRuleGroup {
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroup
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof MimirRelabelRuleGroup
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroup
     */
    selector?: string;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroup
     */
    dataset?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MimirRelabelRuleGroup
     */
    base?: boolean;
    /**
     * 
     * @type {Array<MimirRelabelRule>}
     * @memberof MimirRelabelRuleGroup
     */
    rules?: Array<MimirRelabelRule>;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroup
     */
    vendor_lookup_query?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRuleGroup
     */
    metric_regex?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MimirRelabelRuleGroup
     */
    sanity_metric_regex?: Array<string>;
}
/**
 * 
 * @export
 * @interface MimirRelabelRuleGroupDto
 */
export interface MimirRelabelRuleGroupDto {
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroupDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof MimirRelabelRuleGroupDto
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof MimirRelabelRuleGroupDto
     */
    selector?: string;
    /**
     * 
     * @type {Array<MimirRelabelRuleDto>}
     * @memberof MimirRelabelRuleGroupDto
     */
    rules?: Array<MimirRelabelRuleDto>;
}
/**
 * 
 * @export
 * @interface ModelMappingDto
 */
export interface ModelMappingDto {
    /**
     * 
     * @type {Array<ModelMappingEntityDto>}
     * @memberof ModelMappingDto
     */
    entities: Array<ModelMappingEntityDto>;
}
/**
 * 
 * @export
 * @interface ModelMappingEntityDto
 */
export interface ModelMappingEntityDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingEntityDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingEntityDto
     */
    entityType: string;
    /**
     * 
     * @type {Array<ModelMappingEntityDtoSignalsInner>}
     * @memberof ModelMappingEntityDto
     */
    signals: Array<ModelMappingEntityDtoSignalsInner>;
}
/**
 * @type ModelMappingEntityDtoSignalsInner
 * 
 * @export
 */
export type ModelMappingEntityDtoSignalsInner = ModelMappingHistogramDto | ModelMappingLatencyAverageDto | ModelMappingLatencyQuantileDto | ModelMappingRequestErrorDto | ModelMappingRequestRateDto;
/**
 * 
 * @export
 * @interface ModelMappingHistogramDto
 */
export interface ModelMappingHistogramDto extends ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingHistogramDto
     */
    metricName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingHistogramDto
     */
    metricUnit?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ModelMappingHistogramDto
     */
    quantiles?: Array<number>;
    /**
     * 
     * @type {Array<ModelMappingRequestErrorConditionDto>}
     * @memberof ModelMappingHistogramDto
     */
    errors?: Array<ModelMappingRequestErrorConditionDto>;
}
/**
 * 
 * @export
 * @interface ModelMappingLatencyAverageDto
 */
export interface ModelMappingLatencyAverageDto extends ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    latencyAverageType: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    sumMetricName?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    sumMetricUnit?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    countMetricName?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    gaugeMetricName?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyAverageDto
     */
    gaugeMetricUnit?: string;
}
/**
 * 
 * @export
 * @interface ModelMappingLatencyQuantileDto
 */
export interface ModelMappingLatencyQuantileDto extends ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyQuantileDto
     */
    histogramMetricName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingLatencyQuantileDto
     */
    histogramMetricUnit: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof ModelMappingLatencyQuantileDto
     */
    quantiles: Array<number>;
}
/**
 * 
 * @export
 * @interface ModelMappingRequestErrorConditionDto
 */
export interface ModelMappingRequestErrorConditionDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorConditionDto
     */
    errorType: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorConditionDto
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorConditionDto
     */
    comparator?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorConditionDto
     */
    value?: string;
}
/**
 * 
 * @export
 * @interface ModelMappingRequestErrorDto
 */
export interface ModelMappingRequestErrorDto extends ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorDto
     */
    metricName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestErrorDto
     */
    metricType: string;
    /**
     * 
     * @type {Array<ModelMappingRequestErrorConditionDto>}
     * @memberof ModelMappingRequestErrorDto
     */
    errors: Array<ModelMappingRequestErrorConditionDto>;
}
/**
 * 
 * @export
 * @interface ModelMappingRequestRateDto
 */
export interface ModelMappingRequestRateDto extends ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestRateDto
     */
    metricName: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingRequestRateDto
     */
    metricType: string;
}
/**
 * 
 * @export
 * @interface ModelMappingSignalDto
 */
export interface ModelMappingSignalDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    entityNameLabel: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    metricSource: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    requestType: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelMappingSignalDto
     */
    requestContext?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    requestContextJoin?: string;
    /**
     * 
     * @type {Array<ModelMappingSignalFilterDto>}
     * @memberof ModelMappingSignalDto
     */
    filters?: Array<ModelMappingSignalFilterDto>;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalDto
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface ModelMappingSignalFilterDto
 */
export interface ModelMappingSignalFilterDto {
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalFilterDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ModelMappingSignalFilterDto
     */
    operator?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelMappingSignalFilterDto
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface ModelRuleNamesDto
 */
export interface ModelRuleNamesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelRuleNamesDto
     */
    ruleNames?: Array<string>;
}
/**
 * Model rules configuration defining entities and their relationships
 * @export
 * @interface ModelRulesDto
 */
export interface ModelRulesDto {
    /**
     * Configuration name
     * @type {string}
     * @memberof ModelRulesDto
     */
    name: string;
    /**
     * Entity type definitions
     * @type {Array<EntityRuleDto>}
     * @memberof ModelRulesDto
     */
    entities?: Array<EntityRuleDto>;
    /**
     * Relationship rules between entities
     * @type {Array<RelationRuleDto>}
     * @memberof ModelRulesDto
     */
    relations?: Array<RelationRuleDto>;
    /**
     * Management source: 'terraform' for Terraform-managed, null for UI-managed
     * @type {string}
     * @memberof ModelRulesDto
     */
    managedBy?: string;
}
/**
 * A single model rule search match
 * @export
 * @interface ModelRulesSearchMatchDto
 */
export interface ModelRulesSearchMatchDto {
    /**
     * Rule identifier: builtin rules use the file name (e.g., entities_awsapp_sqs.yml), custom rules use the config name (e.g., my_custom_redis)
     * @type {string}
     * @memberof ModelRulesSearchMatchDto
     */
    fileName?: string;
    /**
     * Source of the rule: 'builtin' or 'custom'
     * @type {string}
     * @memberof ModelRulesSearchMatchDto
     */
    source?: string;
    /**
     * Entity types referenced in this rule (from entity definitions and relationship start/end types)
     * @type {Array<string>}
     * @memberof ModelRulesSearchMatchDto
     */
    entityTypes?: Array<string>;
    /**
     * Vendor keywords from the 'when' clause
     * @type {Array<string>}
     * @memberof ModelRulesSearchMatchDto
     */
    vendors?: Array<string>;
    /**
     * 
     * @type {ModelRulesDto}
     * @memberof ModelRulesSearchMatchDto
     */
    rules?: ModelRulesDto;
}
/**
 * Search results for model rules matching a keyword query
 * @export
 * @interface ModelRulesSearchResultDto
 */
export interface ModelRulesSearchResultDto {
    /**
     * The search query that was used
     * @type {string}
     * @memberof ModelRulesSearchResultDto
     */
    query?: string;
    /**
     * List of matching model rule files
     * @type {Array<ModelRulesSearchMatchDto>}
     * @memberof ModelRulesSearchResultDto
     */
    results?: Array<ModelRulesSearchMatchDto>;
}
/**
 * 
 * @export
 * @interface MonitoringStatusRequestDto
 */
export interface MonitoringStatusRequestDto {
    /**
     * 
     * @type {Set<EntityKeyDto>}
     * @memberof MonitoringStatusRequestDto
     */
    entityKeys?: Set<EntityKeyDto>;
    /**
     * 
     * @type {number}
     * @memberof MonitoringStatusRequestDto
     */
    instantMs?: number;
    /**
     * 
     * @type {boolean}
     * @memberof MonitoringStatusRequestDto
     */
    reportOnlyMissing?: boolean;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof MonitoringStatusRequestDto
     */
    scopeCriteriaDto?: ScopeCriteriaDto;
}
/**
 * 
 * @export
 * @interface MonitoringStatusResponseDto
 */
export interface MonitoringStatusResponseDto {
    /**
     * 
     * @type {Array<EntityMonitoringStatusDto>}
     * @memberof MonitoringStatusResponseDto
     */
    entityStatus?: Array<EntityMonitoringStatusDto>;
}
/**
 * 
 * @export
 * @interface OccurrenceSliConfigDto
 */
export interface OccurrenceSliConfigDto extends SliConfigDto {
    /**
     * 
     * @type {string}
     * @memberof OccurrenceSliConfigDto
     */
    measurement?: string;
    /**
     * 
     * @type {string}
     * @memberof OccurrenceSliConfigDto
     */
    thresholdComparator?: string;
}
/**
 * 
 * @export
 * @interface PatternDto
 */
export interface PatternDto {
    /**
     * 
     * @type {string}
     * @memberof PatternDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PatternDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PatternDto
     */
    reason?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatternDto
     */
    includedByDefault?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatternDto
     */
    srcEntityTypes?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatternDto
     */
    requiredEntityTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PatternDto
     */
    dstSearch: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PatternDto
     */
    vars?: Array<string>;
    /**
     * 
     * @type {Array<MetricMatchDto>}
     * @memberof PatternDto
     */
    metricMatches?: Array<MetricMatchDto>;
}
/**
 * 
 * @export
 * @interface PinnedFiltersConfig
 */
export interface PinnedFiltersConfig {
    /**
     * 
     * @type {Array<string>}
     * @memberof PinnedFiltersConfig
     */
    filters?: Array<string>;
}
/**
 * 
 * @export
 * @interface ProductActivationDto
 */
export interface ProductActivationDto {
    /**
     * 
     * @type {string}
     * @memberof ProductActivationDto
     */
    product: ProductActivationDtoProductEnum;
    /**
     * 
     * @type {boolean}
     * @memberof ProductActivationDto
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProductActivationDto
     */
    createdAt?: string;
}


/**
 * @export
 */
export const ProductActivationDtoProductEnum = {
    Appo11y: 'appo11y',
    K8so11y: 'k8so11y',
    Hosto11y: 'hosto11y',
    Dbo11y: 'dbo11y'
} as const;
export type ProductActivationDtoProductEnum = typeof ProductActivationDtoProductEnum[keyof typeof ProductActivationDtoProductEnum];

/**
 * 
 * @export
 * @interface ProfileDrilldownConfigDto
 */
export interface ProfileDrilldownConfigDto {
    /**
     * 
     * @type {string}
     * @memberof ProfileDrilldownConfigDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ProfileDrilldownConfigDto
     */
    priority?: number;
    /**
     * 
     * @type {Array<PropertyMatchEntryDto>}
     * @memberof ProfileDrilldownConfigDto
     */
    match?: Array<PropertyMatchEntryDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ProfileDrilldownConfigDto
     */
    defaultConfig?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ProfileDrilldownConfigDto
     */
    dataSourceUid?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ProfileDrilldownConfigDto
     */
    entityPropertyToProfileLabelMapping?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ProfileDrilldownConfigDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface PrometheusRule
 */
export interface PrometheusRule {
    /**
     * 
     * @type {string}
     * @memberof PrometheusRule
     */
    record?: string;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRule
     */
    alert?: string;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRule
     */
    expr?: string;
    /**
     * 
     * @type {PrometheusRuleAnnotations}
     * @memberof PrometheusRule
     */
    annotations?: PrometheusRuleAnnotations;
    /**
     * 
     * @type {ImmutableMapStringString}
     * @memberof PrometheusRule
     */
    labels?: ImmutableMapStringString;
    /**
     * 
     * @type {Array<string>}
     * @memberof PrometheusRule
     */
    disableInGroups?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRule
     */
    _for?: string;
}
/**
 * 
 * @export
 * @interface PrometheusRuleAnnotations
 */
export interface PrometheusRuleAnnotations {
    [key: string]: string | any;
    /**
     * 
     * @type {boolean}
     * @memberof PrometheusRuleAnnotations
     */
    empty?: boolean;
}
/**
 * A Prometheus alert or recording rule
 * @export
 * @interface PrometheusRuleDto
 */
export interface PrometheusRuleDto {
    /**
     * Whether this rule is active
     * @type {boolean}
     * @memberof PrometheusRuleDto
     */
    active?: boolean;
    /**
     * Metric name for recording rules (mutually exclusive with 'alert')
     * @type {string}
     * @memberof PrometheusRuleDto
     */
    record?: string;
    /**
     * Alert name for alert rules (mutually exclusive with 'record')
     * @type {string}
     * @memberof PrometheusRuleDto
     */
    alert?: string;
    /**
     * PromQL expression to evaluate
     * @type {string}
     * @memberof PrometheusRuleDto
     */
    expr: string;
    /**
     * Annotations for alert rules (e.g., summary, description)
     * @type {{ [key: string]: string; }}
     * @memberof PrometheusRuleDto
     */
    annotations?: { [key: string]: string; };
    /**
     * Labels to attach to the alert/metric. For alerts, must include 'asserts_severity' and 'asserts_alert_category'
     * @type {{ [key: string]: string; }}
     * @memberof PrometheusRuleDto
     */
    labels?: { [key: string]: string; };
    /**
     * List of rule groups where this rule should be disabled
     * @type {Array<string>}
     * @memberof PrometheusRuleDto
     */
    disableInGroups?: Array<string>;
    /**
     * Duration the expression must be true before firing (alert rules only)
     * @type {string}
     * @memberof PrometheusRuleDto
     */
    _for?: string;
}
/**
 * 
 * @export
 * @interface PrometheusRuleGroup
 */
export interface PrometheusRuleGroup {
    /**
     * 
     * @type {string}
     * @memberof PrometheusRuleGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRuleGroup
     */
    interval?: string;
    /**
     * 
     * @type {Array<PrometheusRule>}
     * @memberof PrometheusRuleGroup
     */
    rules?: Array<PrometheusRule>;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRuleGroup
     */
    query_offset?: string;
}
/**
 * A group of related Prometheus rules
 * @export
 * @interface PrometheusRuleGroupDto
 */
export interface PrometheusRuleGroupDto {
    /**
     * Group name
     * @type {string}
     * @memberof PrometheusRuleGroupDto
     */
    name: string;
    /**
     * Evaluation interval (e.g., '30s', '1m')
     * @type {string}
     * @memberof PrometheusRuleGroupDto
     */
    interval?: string;
    /**
     * List of alert and recording rules in this group
     * @type {Array<PrometheusRuleDto>}
     * @memberof PrometheusRuleGroupDto
     */
    rules: Array<PrometheusRuleDto>;
}
/**
 * 
 * @export
 * @interface PrometheusRules
 */
export interface PrometheusRules {
    /**
     * 
     * @type {Array<PrometheusRuleGroup>}
     * @memberof PrometheusRules
     */
    groups?: Array<PrometheusRuleGroup>;
    /**
     * 
     * @type {string}
     * @memberof PrometheusRules
     */
    managedBy?: string;
}
/**
 * Prometheus rules configuration containing alert and recording rules
 * @export
 * @interface PrometheusRulesDto
 */
export interface PrometheusRulesDto {
    /**
     * Whether this configuration is active
     * @type {boolean}
     * @memberof PrometheusRulesDto
     */
    active?: boolean;
    /**
     * Configuration name for the Prometheus rule file
     * @type {string}
     * @memberof PrometheusRulesDto
     */
    name: string;
    /**
     * List of rule groups containing alert and recording rules
     * @type {Array<PrometheusRuleGroupDto>}
     * @memberof PrometheusRulesDto
     */
    groups: Array<PrometheusRuleGroupDto>;
    /**
     * Management source: 'terraform' for Terraform-managed, null for UI-managed
     * @type {string}
     * @memberof PrometheusRulesDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface PropertyMatchEntryDto
 */
export interface PropertyMatchEntryDto {
    /**
     * 
     * @type {string}
     * @memberof PropertyMatchEntryDto
     */
    property?: string;
    /**
     * 
     * @type {string}
     * @memberof PropertyMatchEntryDto
     */
    op?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PropertyMatchEntryDto
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface PropertyMatcherDto
 */
export interface PropertyMatcherDto {
    /**
     * 
     * @type {string}
     * @memberof PropertyMatcherDto
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof PropertyMatcherDto
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof PropertyMatcherDto
     */
    op: string;
    /**
     * 
     * @type {string}
     * @memberof PropertyMatcherDto
     */
    uom?: PropertyMatcherDtoUomEnum;
}


/**
 * @export
 */
export const PropertyMatcherDtoUomEnum = {
    Mb: 'MB',
    Gb: 'GB',
    Percent: '%'
} as const;
export type PropertyMatcherDtoUomEnum = typeof PropertyMatcherDtoUomEnum[keyof typeof PropertyMatcherDtoUomEnum];

/**
 * 
 * @export
 * @interface PropertyRuleDto
 */
export interface PropertyRuleDto {
    /**
     * 
     * @type {string}
     * @memberof PropertyRuleDto
     */
    query?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PropertyRuleDto
     */
    labelValues?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PropertyRuleDto
     */
    literals?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof PropertyRuleDto
     */
    metricValue?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PropertyRuleDto
     */
    disabled?: boolean;
}
/**
 * 
 * @export
 * @interface RcaPatternListRequestDto
 */
export interface RcaPatternListRequestDto {
    /**
     * 
     * @type {string}
     * @memberof RcaPatternListRequestDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternListRequestDto
     */
    entityName?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternListRequestDto
     */
    env?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternListRequestDto
     */
    site?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternListRequestDto
     */
    namespace?: string;
}
/**
 * 
 * @export
 * @interface RcaPatternSearchRequestDto
 */
export interface RcaPatternSearchRequestDto {
    /**
     * 
     * @type {string}
     * @memberof RcaPatternSearchRequestDto
     */
    entityType?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternSearchRequestDto
     */
    entityName?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternSearchRequestDto
     */
    env?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternSearchRequestDto
     */
    site?: string;
    /**
     * 
     * @type {string}
     * @memberof RcaPatternSearchRequestDto
     */
    namespace?: string;
    /**
     * 
     * @type {number}
     * @memberof RcaPatternSearchRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof RcaPatternSearchRequestDto
     */
    end?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof RcaPatternSearchRequestDto
     */
    patterns?: Array<string>;
}
/**
 * 
 * @export
 * @interface RcaPatternSearchResponseDto
 */
export interface RcaPatternSearchResponseDto {
    /**
     * 
     * @type {Array<EntityKeyDto>}
     * @memberof RcaPatternSearchResponseDto
     */
    entities?: Array<EntityKeyDto>;
}
/**
 * Relationship rule definition between entities
 * @export
 * @interface RelationRuleDto
 */
export interface RelationRuleDto {
    /**
     * Relation type (e.g., 'CALLS', 'HOSTS', 'ROUTES')
     * @type {string}
     * @memberof RelationRuleDto
     */
    type: string;
    /**
     * Source entity type
     * @type {string}
     * @memberof RelationRuleDto
     */
    startEntityType: string;
    /**
     * Target entity type
     * @type {string}
     * @memberof RelationRuleDto
     */
    endEntityType: string;
    /**
     * 
     * @type {RelationRuleDtoDefinedBy}
     * @memberof RelationRuleDto
     */
    definedBy: RelationRuleDtoDefinedBy;
}
/**
 * @type RelationRuleDtoDefinedBy
 * Relation definition (polymorphic: METRICS or PROPERTY_MATCH)
 * @export
 */
export type RelationRuleDtoDefinedBy = DefinedByMetricsDto | DefinedByPropertyMatchDto;
/**
 * 
 * @export
 * @interface RequestSliConfigDto
 */
export interface RequestSliConfigDto extends SliConfigDto {
    /**
     * 
     * @type {string}
     * @memberof RequestSliConfigDto
     */
    badEventCount?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestSliConfigDto
     */
    totalEventCount?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RequestSliConfigDto
     */
    gauge?: boolean;
}
/**
 * 
 * @export
 * @interface RequestThresholdV2Dto
 */
export interface RequestThresholdV2Dto {
    /**
     * 
     * @type {string}
     * @memberof RequestThresholdV2Dto
     */
    entityName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestThresholdV2Dto
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestThresholdV2Dto
     */
    requestType?: string;
    /**
     * 
     * @type {string}
     * @memberof RequestThresholdV2Dto
     */
    requestContext?: string;
    /**
     * 
     * @type {number}
     * @memberof RequestThresholdV2Dto
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof RequestThresholdV2Dto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface ResourceThresholdV2Dto
 */
export interface ResourceThresholdV2Dto {
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    assertionName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    resourceType?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    containerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    severity?: string;
    /**
     * 
     * @type {number}
     * @memberof ResourceThresholdV2Dto
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof ResourceThresholdV2Dto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface RetainedLabelConfig
 */
export interface RetainedLabelConfig {
    /**
     * 
     * @type {Array<string>}
     * @memberof RetainedLabelConfig
     */
    retainedLabels?: Array<string>;
}
/**
 * 
 * @export
 * @interface RuleCreationSpecDto
 */
export interface RuleCreationSpecDto {
    /**
     * 
     * @type {string}
     * @memberof RuleCreationSpecDto
     */
    metricRegExp?: string;
    /**
     * 
     * @type {Array<RuleDto>}
     * @memberof RuleCreationSpecDto
     */
    rules?: Array<RuleDto>;
}
/**
 * 
 * @export
 * @interface RuleDto
 */
export interface RuleDto {
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    ruleGroup?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RuleDto
     */
    generateDefaultRules?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    assertsRuleName?: string;
    /**
     * 
     * @type {string}
     * @memberof RuleDto
     */
    ruleExpr?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RuleDto
     */
    labelsTemplate?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface RuleGenerationRequestDto
 */
export interface RuleGenerationRequestDto {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RuleGenerationRequestDto
     */
    metricMatchConditions?: { [key: string]: string; };
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof RuleGenerationRequestDto
     */
    sourceMappings?: { [key: string]: string; };
    /**
     * 
     * @type {Array<RuleCreationSpecDto>}
     * @memberof RuleGenerationRequestDto
     */
    ruleCreationSpecs?: Array<RuleCreationSpecDto>;
}
/**
 * 
 * @export
 * @interface RuleGenerationResponseDto
 */
export interface RuleGenerationResponseDto {
    /**
     * 
     * @type {PrometheusRules}
     * @memberof RuleGenerationResponseDto
     */
    prometheusRules?: PrometheusRules;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedCpuMetrics?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedMemoryMetrics?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedBytesMetric?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedHistograms?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedSummaries?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof RuleGenerationResponseDto
     */
    unmappedMetrics?: Set<string>;
}
/**
 * 
 * @export
 * @interface RuleNamesDto
 */
export interface RuleNamesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof RuleNamesDto
     */
    ruleNames?: Array<string>;
}
/**
 * 
 * @export
 * @interface SampleEntityDto
 */
export interface SampleEntityDto {
    /**
     * 
     * @type {string}
     * @memberof SampleEntityDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SampleEntityDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SampleEntityDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SampleEntityDto
     */
    properties?: { [key: string]: any; };
}
/**
 * 
 * @export
 * @interface SampleSearchRequestDto
 */
export interface SampleSearchRequestDto {
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof SampleSearchRequestDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof SampleSearchRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof SampleSearchRequestDto
     */
    filterCriteria: Array<EntityMatcherDto>;
    /**
     * 
     * @type {number}
     * @memberof SampleSearchRequestDto
     */
    sampleSize?: number;
}
/**
 * 
 * @export
 * @interface SampleSearchResponseDto
 */
export interface SampleSearchResponseDto {
    /**
     * 
     * @type {Array<SampleEntityDto>}
     * @memberof SampleSearchResponseDto
     */
    entities?: Array<SampleEntityDto>;
}
/**
 * 
 * @export
 * @interface ScopeCriteriaDto
 */
export interface ScopeCriteriaDto {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ScopeCriteriaDto
     */
    nameAndValues?: { [key: string]: Array<string>; };
    /**
     * 
     * @type {{ [key: string]: Set<string>; }}
     * @memberof ScopeCriteriaDto
     */
    scopeCriteriaMap?: { [key: string]: Set<string>; };
}
/**
 * 
 * @export
 * @interface ScopeValueDto
 */
export interface ScopeValueDto {
    /**
     * 
     * @type {string}
     * @memberof ScopeValueDto
     */
    value?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScopeValueDto
     */
    sources?: Array<string>;
}
/**
 * 
 * @export
 * @interface SearchCountRequestDto
 */
export interface SearchCountRequestDto {
    /**
     * 
     * @type {Array<SearchCountRequestEntryDto>}
     * @memberof SearchCountRequestDto
     */
    items: Array<SearchCountRequestEntryDto>;
    /**
     * 
     * @type {SearchCountRequestDtoTimeCriteria}
     * @memberof SearchCountRequestDto
     */
    timeCriteria: SearchCountRequestDtoTimeCriteria;
    /**
     * 
     * @type {SearchCountRequestDtoScopeCriteria}
     * @memberof SearchCountRequestDto
     */
    scopeCriteria?: SearchCountRequestDtoScopeCriteria;
}
/**
 * 
 * @export
 * @interface SearchCountRequestDtoScopeCriteria
 */
export interface SearchCountRequestDtoScopeCriteria {
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SearchCountRequestDtoScopeCriteria
     */
    nameAndValues?: { [key: string]: Array<string>; };
}
/**
 * 
 * @export
 * @interface SearchCountRequestDtoTimeCriteria
 */
export interface SearchCountRequestDtoTimeCriteria {
    /**
     * 
     * @type {number}
     * @memberof SearchCountRequestDtoTimeCriteria
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof SearchCountRequestDtoTimeCriteria
     */
    end: number;
}
/**
 * 
 * @export
 * @interface SearchCountRequestEntryDto
 */
export interface SearchCountRequestEntryDto {
    /**
     * 
     * @type {string}
     * @memberof SearchCountRequestEntryDto
     */
    entityType: string;
    /**
     * 
     * @type {SearchCountRequestEntryDtoNameMatcher}
     * @memberof SearchCountRequestEntryDto
     */
    nameMatcher?: SearchCountRequestEntryDtoNameMatcher;
    /**
     * 
     * @type {InsightCriteriaDto}
     * @memberof SearchCountRequestEntryDto
     */
    withInsights?: InsightCriteriaDto;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchCountRequestEntryDto
     */
    groupBy?: Array<string>;
}
/**
 * 
 * @export
 * @interface SearchCountRequestEntryDtoNameMatcher
 */
export interface SearchCountRequestEntryDtoNameMatcher {
    /**
     * 
     * @type {string}
     * @memberof SearchCountRequestEntryDtoNameMatcher
     */
    name: string;
    /**
     * 
     * @type {any}
     * @memberof SearchCountRequestEntryDtoNameMatcher
     */
    value?: any | null;
    /**
     * 
     * @type {string}
     * @memberof SearchCountRequestEntryDtoNameMatcher
     */
    op: SearchCountRequestEntryDtoNameMatcherOpEnum;
}


/**
 * @export
 */
export const SearchCountRequestEntryDtoNameMatcherOpEnum = {
    Equals: 'EQUALS',
    NotEquals: 'NOT_EQUALS',
    LessThan: 'LESS_THAN',
    GreaterThan: 'GREATER_THAN',
    LessThanEqual: 'LESS_THAN_EQUAL',
    GreaterThanEqual: 'GREATER_THAN_EQUAL',
    IsNull: 'IS_NULL',
    IsNotNull: 'IS_NOT_NULL',
    StartsWith: 'STARTS_WITH',
    EndsWith: 'ENDS_WITH',
    Contains: 'CONTAINS',
    In: 'IN'
} as const;
export type SearchCountRequestEntryDtoNameMatcherOpEnum = typeof SearchCountRequestEntryDtoNameMatcherOpEnum[keyof typeof SearchCountRequestEntryDtoNameMatcherOpEnum];

/**
 * 
 * @export
 * @interface SearchDefinitionBindingDto
 */
export interface SearchDefinitionBindingDto {
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionBindingDto
     */
    query?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionBindingDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionBindingDto
     */
    subType?: string;
}
/**
 * 
 * @export
 * @interface SearchDefinitionDto
 */
export interface SearchDefinitionDto {
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionDto
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchDefinitionDto
     */
    indexed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionDto
     */
    describedQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionDto
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionDto
     */
    rawQuery?: string;
    /**
     * 
     * @type {{ [key: string]: SearchDefinitionBindingDto; }}
     * @memberof SearchDefinitionDto
     */
    bindings?: { [key: string]: SearchDefinitionBindingDto; };
    /**
     * 
     * @type {SearchDefinitionTypeDetailsDto}
     * @memberof SearchDefinitionDto
     */
    typeDetails?: SearchDefinitionTypeDetailsDto;
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof SearchDefinitionDto
     */
    filterCriteria?: Array<EntityMatcherDto>;
}
/**
 * 
 * @export
 * @interface SearchDefinitionItemDto
 */
export interface SearchDefinitionItemDto {
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionItemDto
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionItemDto
     */
    score?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionItemDto
     */
    definitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionItemDto
     */
    boundDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionItemDto
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SearchDefinitionItemDto
     */
    bindings?: { [key: string]: any; };
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof SearchDefinitionItemDto
     */
    filterCriteria?: Array<EntityMatcherDto>;
}
/**
 * 
 * @export
 * @interface SearchDefinitionResponseDto
 */
export interface SearchDefinitionResponseDto {
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionResponseDto
     */
    totalResults?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionResponseDto
     */
    pageResults?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionResponseDto
     */
    maxResults?: number;
    /**
     * 
     * @type {number}
     * @memberof SearchDefinitionResponseDto
     */
    offset?: number;
    /**
     * 
     * @type {Array<SearchDefinitionItemDto>}
     * @memberof SearchDefinitionResponseDto
     */
    items?: Array<SearchDefinitionItemDto>;
}
/**
 * 
 * @export
 * @interface SearchDefinitionTypeDetailsDto
 */
export interface SearchDefinitionTypeDetailsDto {
    /**
     * 
     * @type {string}
     * @memberof SearchDefinitionTypeDetailsDto
     */
    type?: string;
}
/**
 * 
 * @export
 * @interface SearchRequestDto
 */
export interface SearchRequestDto {
    /**
     * 
     * @type {number}
     * @memberof SearchRequestDto
     */
    definitionId?: number;
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof SearchRequestDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof SearchRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof SearchRequestDto
     */
    pageNum?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SearchRequestDto
     */
    bindings?: { [key: string]: string; };
    /**
     * 
     * @type {Array<EntityMatcherDto>}
     * @memberof SearchRequestDto
     */
    filterCriteria?: Array<EntityMatcherDto>;
}
/**
 * 
 * @export
 * @interface SearchResponseDto
 */
export interface SearchResponseDto {
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDto
     */
    type?: SearchResponseDtoTypeEnum;
    /**
     * 
     * @type {TimeCriteriaDto}
     * @memberof SearchResponseDto
     */
    timeCriteria?: TimeCriteriaDto;
    /**
     * 
     * @type {string}
     * @memberof SearchResponseDto
     */
    stepDuration?: string;
    /**
     * 
     * @type {any}
     * @memberof SearchResponseDto
     */
    data?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof SearchResponseDto
     */
    adjustedTimeCriteria?: boolean;
}


/**
 * @export
 */
export const SearchResponseDtoTypeEnum = {
    Timeseries: 'timeseries',
    Graph: 'graph'
} as const;
export type SearchResponseDtoTypeEnum = typeof SearchResponseDtoTypeEnum[keyof typeof SearchResponseDtoTypeEnum];

/**
 * 
 * @export
 * @interface SliConfigDto
 */
export interface SliConfigDto {
    /**
     * 
     * @type {string}
     * @memberof SliConfigDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SliConfigDto
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface SloCalendarWindowConfigDto
 */
export interface SloCalendarWindowConfigDto extends SloWindowConfigDto {
}
/**
 * 
 * @export
 * @interface SloChartRequestDto
 */
export interface SloChartRequestDto {
    /**
     * 
     * @type {string}
     * @memberof SloChartRequestDto
     */
    chartName?: string;
    /**
     * 
     * @type {string}
     * @memberof SloChartRequestDto
     */
    sloName?: string;
    /**
     * 
     * @type {string}
     * @memberof SloChartRequestDto
     */
    targetName?: string;
    /**
     * 
     * @type {number}
     * @memberof SloChartRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof SloChartRequestDto
     */
    end?: number;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof SloChartRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {string}
     * @memberof SloChartRequestDto
     */
    sloSource?: string;
}
/**
 * 
 * @export
 * @interface SloChartResponseDto
 */
export interface SloChartResponseDto {
    /**
     * 
     * @type {string}
     * @memberof SloChartResponseDto
     */
    title?: string;
    /**
     * 
     * @type {Array<MetricDto>}
     * @memberof SloChartResponseDto
     */
    metrics?: Array<MetricDto>;
    /**
     * 
     * @type {Array<ThresholdSingleDto>}
     * @memberof SloChartResponseDto
     */
    thresholds?: Array<ThresholdSingleDto>;
    /**
     * 
     * @type {number}
     * @memberof SloChartResponseDto
     */
    startTimeMs?: number;
    /**
     * 
     * @type {number}
     * @memberof SloChartResponseDto
     */
    endTimeMs?: number;
    /**
     * 
     * @type {number}
     * @memberof SloChartResponseDto
     */
    stepMs?: number;
    /**
     * 
     * @type {string}
     * @memberof SloChartResponseDto
     */
    badEventQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof SloChartResponseDto
     */
    totalEventQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof SloChartResponseDto
     */
    measurementQuery?: string;
}
/**
 * 
 * @export
 * @interface SloConfigDto
 */
export interface SloConfigDto {
    /**
     * 
     * @type {string}
     * @memberof SloConfigDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof SloConfigDto
     */
    ratio?: number;
    /**
     * 
     * @type {number}
     * @memberof SloConfigDto
     */
    value?: number;
    /**
     * 
     * @type {SloConfigDtoWindow}
     * @memberof SloConfigDto
     */
    window?: SloConfigDtoWindow;
}
/**
 * @type SloConfigDtoWindow
 * 
 * @export
 */
export type SloConfigDtoWindow = SloCalendarWindowConfigDto | SloRollingWindowConfigDto;
/**
 * 
 * @export
 * @interface SloConfigRequestDto
 */
export interface SloConfigRequestDto {
    /**
     * 
     * @type {string}
     * @memberof SloConfigRequestDto
     */
    apiVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof SloConfigRequestDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SloConfigRequestDto
     */
    entitySearch?: string;
    /**
     * 
     * @type {SloConfigRequestDtoIndicator}
     * @memberof SloConfigRequestDto
     */
    indicator?: SloConfigRequestDtoIndicator;
    /**
     * 
     * @type {Array<SloConfigDto>}
     * @memberof SloConfigRequestDto
     */
    objectives?: Array<SloConfigDto>;
}
/**
 * @type SloConfigRequestDtoIndicator
 * 
 * @export
 */
export type SloConfigRequestDtoIndicator = OccurrenceSliConfigDto | RequestSliConfigDto;
/**
 * 
 * @export
 * @interface SloConfigResponseDto
 */
export interface SloConfigResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof SloConfigResponseDto
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SloConfigResponseDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SloConfigResponseDto
     */
    status?: string;
    /**
     * 
     * @type {SloConfigRequestDtoIndicator}
     * @memberof SloConfigResponseDto
     */
    indicator?: SloConfigRequestDtoIndicator;
    /**
     * 
     * @type {Array<SloConfigDto>}
     * @memberof SloConfigResponseDto
     */
    objectives?: Array<SloConfigDto>;
    /**
     * 
     * @type {string}
     * @memberof SloConfigResponseDto
     */
    entitySearch?: string;
}
/**
 * 
 * @export
 * @interface SloDto
 */
export interface SloDto {
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof SloDto
     */
    scope?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    action?: string;
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    badEventQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    totalEventQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof SloDto
     */
    measurementQuery?: string;
    /**
     * 
     * @type {Array<SloTargetDto>}
     * @memberof SloDto
     */
    sloTargetDtos?: Array<SloTargetDto>;
    /**
     * 
     * @type {boolean}
     * @memberof SloDto
     */
    noData?: boolean;
}
/**
 * 
 * @export
 * @interface SloIncidentListDto
 */
export interface SloIncidentListDto {
    /**
     * 
     * @type {Array<IncidentDto>}
     * @memberof SloIncidentListDto
     */
    incidents?: Array<IncidentDto>;
}
/**
 * 
 * @export
 * @interface SloIncidentRequestDto
 */
export interface SloIncidentRequestDto {
    /**
     * 
     * @type {number}
     * @memberof SloIncidentRequestDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof SloIncidentRequestDto
     */
    end?: number;
    /**
     * 
     * @type {string}
     * @memberof SloIncidentRequestDto
     */
    sloName?: string;
    /**
     * 
     * @type {string}
     * @memberof SloIncidentRequestDto
     */
    targetName?: string;
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof SloIncidentRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {string}
     * @memberof SloIncidentRequestDto
     */
    sloSource?: string;
}
/**
 * 
 * @export
 * @interface SloListDto
 */
export interface SloListDto {
    /**
     * 
     * @type {Array<SloDto>}
     * @memberof SloListDto
     */
    slos?: Array<SloDto>;
    /**
     * 
     * @type {Set<string>}
     * @memberof SloListDto
     */
    chartNames?: Set<string>;
}
/**
 * 
 * @export
 * @interface SloListRequestDto
 */
export interface SloListRequestDto {
    /**
     * 
     * @type {ScopeCriteriaDto}
     * @memberof SloListRequestDto
     */
    scopeCriteria?: ScopeCriteriaDto;
    /**
     * 
     * @type {number}
     * @memberof SloListRequestDto
     */
    endTime?: number;
    /**
     * 
     * @type {string}
     * @memberof SloListRequestDto
     */
    sloSource?: string;
}
/**
 * 
 * @export
 * @interface SloRollingWindowConfigDto
 */
export interface SloRollingWindowConfigDto extends SloWindowConfigDto {
}
/**
 * 
 * @export
 * @interface SloTargetDto
 */
export interface SloTargetDto {
    /**
     * 
     * @type {string}
     * @memberof SloTargetDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof SloTargetDto
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    targetSli?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    actualSli?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    threshold?: number;
    /**
     * 
     * @type {ComplianceWindowDto}
     * @memberof SloTargetDto
     */
    complianceWindowDto?: ComplianceWindowDto;
    /**
     * 
     * @type {string}
     * @memberof SloTargetDto
     */
    status?: string;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    fastBurnViolatingSince?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    slowBurnViolatingSince?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    fastBurnThreshold?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    slowBurnThreshold?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    incidentCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    errorBudget?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    oneHourErrorBudget?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    badCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    errorBudgetBalance?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    totalCount?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    recentBurnRate?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    oneHourBurnRate?: number;
    /**
     * 
     * @type {number}
     * @memberof SloTargetDto
     */
    sixHourBurnRate?: number;
    /**
     * 
     * @type {string}
     * @memberof SloTargetDto
     */
    incidentTriggerDescription?: string;
}
/**
 * 
 * @export
 * @interface SloWindowConfigDto
 */
export interface SloWindowConfigDto {
    /**
     * 
     * @type {number}
     * @memberof SloWindowConfigDto
     */
    days?: number;
    /**
     * 
     * @type {string}
     * @memberof SloWindowConfigDto
     */
    kind: string;
}
/**
 * 
 * @export
 * @interface StackDatasetDto
 */
export interface StackDatasetDto {
    /**
     * 
     * @type {string}
     * @memberof StackDatasetDto
     */
    datasetType: StackDatasetDtoDatasetTypeEnum;
    /**
     * 
     * @type {Set<string>}
     * @memberof StackDatasetDto
     */
    disabledVendors?: Set<string>;
    /**
     * 
     * @type {Array<StackFilterGroupDto>}
     * @memberof StackDatasetDto
     */
    filterGroups?: Array<StackFilterGroupDto>;
}


/**
 * @export
 */
export const StackDatasetDtoDatasetTypeEnum = {
    Kubernetes: 'kubernetes',
    Prometheus: 'prometheus',
    Otel: 'otel',
    Hosto11y: 'hosto11y',
    Feo11y: 'feo11y',
    Aws: 'aws',
    Azure: 'azure',
    Gcp: 'gcp',
    Custom: 'custom'
} as const;
export type StackDatasetDtoDatasetTypeEnum = typeof StackDatasetDtoDatasetTypeEnum[keyof typeof StackDatasetDtoDatasetTypeEnum];

/**
 * 
 * @export
 * @interface StackDetailDto
 */
export interface StackDetailDto {
    /**
     * 
     * @type {number}
     * @memberof StackDetailDto
     */
    stackId?: number;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof StackDetailDto
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    orgSlug?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    gcomToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    mimirToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    assertionDetectorToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    grafanaToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    lokiToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    pyroscopeToken?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackDetailDto
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackDetailDto
     */
    alertManagerConfigured?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackDetailDto
     */
    graphInstanceCreated?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackDetailDto
     */
    useGrafanaManagedAlerts?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDetailDto
     */
    disabledTime?: string;
    /**
     * 
     * @type {number}
     * @memberof StackDetailDto
     */
    version?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StackDetailDto
     */
    allowLargeTenantOnboarding?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StackDetailDto
     */
    currentActiveSeries?: number;
    /**
     * 
     * @type {Array<StackDatasetDto>}
     * @memberof StackDetailDto
     */
    stackDatasets?: Array<StackDatasetDto>;
}
/**
 * 
 * @export
 * @interface StackDto
 */
export interface StackDto {
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    gcomToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    mimirToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    assertionDetectorToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    grafanaToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    lokiToken?: string;
    /**
     * 
     * @type {string}
     * @memberof StackDto
     */
    pyroscopeToken?: string;
}
/**
 * 
 * @export
 * @interface StackEnableDto
 */
export interface StackEnableDto {
    /**
     * 
     * @type {Set<string>}
     * @memberof StackEnableDto
     */
    vendors?: Set<string>;
    /**
     * 
     * @type {Array<StackFilterGroupDto>}
     * @memberof StackEnableDto
     */
    groups?: Array<StackFilterGroupDto>;
}
/**
 * 
 * @export
 * @interface StackFilterDto
 */
export interface StackFilterDto {
    /**
     * 
     * @type {string}
     * @memberof StackFilterDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof StackFilterDto
     */
    operator?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof StackFilterDto
     */
    values?: Array<string>;
}
/**
 * 
 * @export
 * @interface StackFilterGroupDto
 */
export interface StackFilterGroupDto {
    /**
     * 
     * @type {string}
     * @memberof StackFilterGroupDto
     */
    envLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof StackFilterGroupDto
     */
    envName?: string;
    /**
     * 
     * @type {string}
     * @memberof StackFilterGroupDto
     */
    siteLabel?: string;
    /**
     * 
     * @type {Array<StackFilterDto>}
     * @memberof StackFilterGroupDto
     */
    filters?: Array<StackFilterDto>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StackFilterGroupDto
     */
    envLabelValues?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof StackFilterGroupDto
     */
    siteLabelValues?: Array<string>;
}
/**
 * 
 * @export
 * @interface StackStatusDto
 */
export interface StackStatusDto {
    /**
     * 
     * @type {string}
     * @memberof StackStatusDto
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof StackStatusDto
     */
    disabledTime?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    alertManagerConfigured?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    graphInstanceCreated?: boolean;
    /**
     * 
     * @type {Array<MetricSanityCheckResult>}
     * @memberof StackStatusDto
     */
    sanityCheckResults?: Array<MetricSanityCheckResult>;
    /**
     * 
     * @type {number}
     * @memberof StackStatusDto
     */
    version?: number;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    useGrafanaManagedAlerts?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    otelNative?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof StackStatusDto
     */
    blockedOnManualIntervention?: boolean;
    /**
     * 
     * @type {string}
     * @memberof StackStatusDto
     */
    blockedReason?: string;
}
/**
 * 
 * @export
 * @interface StackUpdateBucketDto
 */
export interface StackUpdateBucketDto {
    /**
     * 
     * @type {number}
     * @memberof StackUpdateBucketDto
     */
    bucket?: number;
    /**
     * 
     * @type {string}
     * @memberof StackUpdateBucketDto
     */
    startDay?: string;
    /**
     * 
     * @type {string}
     * @memberof StackUpdateBucketDto
     */
    durationFromStart?: string;
    /**
     * 
     * @type {string}
     * @memberof StackUpdateBucketDto
     */
    startTime?: string;
    /**
     * 
     * @type {string}
     * @memberof StackUpdateBucketDto
     */
    zoneOffset?: string;
    /**
     * 
     * @type {string}
     * @memberof StackUpdateBucketDto
     */
    timestamp?: string;
}
/**
 * Literal enrichment record contributed by 'enrichedStatically'. Patches an existing entity but does not create or keep it alive.
 * @export
 * @interface StaticEnrichmentDto
 */
export interface StaticEnrichmentDto {
    /**
     * Literal value used to match the target entity's name property
     * @type {string}
     * @memberof StaticEnrichmentDto
     */
    name: string;
    /**
     * Literal scope label values used to match the target entity
     * @type {{ [key: string]: string; }}
     * @memberof StaticEnrichmentDto
     */
    scope?: { [key: string]: string; };
    /**
     * Literal property keys and values to patch onto the target entity
     * @type {{ [key: string]: string; }}
     * @memberof StaticEnrichmentDto
     */
    properties?: { [key: string]: string; };
}
/**
 * Literal entity record contributed by 'definedStatically'.
 * @export
 * @interface StaticEntityDto
 */
export interface StaticEntityDto {
    /**
     * Literal value for the entity's name property
     * @type {string}
     * @memberof StaticEntityDto
     */
    name: string;
    /**
     * Literal scope label values; may be empty when the type has no scope
     * @type {{ [key: string]: string; }}
     * @memberof StaticEntityDto
     */
    scope?: { [key: string]: string; };
    /**
     * Literal property keys and values to set on the upserted entity
     * @type {{ [key: string]: string; }}
     * @memberof StaticEntityDto
     */
    properties?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface TenantEnvConfigResponseDto
 */
export interface TenantEnvConfigResponseDto {
    /**
     * 
     * @type {Array<EnvironmentDto>}
     * @memberof TenantEnvConfigResponseDto
     */
    environments?: Array<EnvironmentDto>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TenantEnvConfigResponseDto
     */
    supportedLogTools?: Array<string>;
}
/**
 * 
 * @export
 * @interface TenantLogConfigResponseDto
 */
export interface TenantLogConfigResponseDto {
    /**
     * 
     * @type {Array<LogDrilldownConfigDto>}
     * @memberof TenantLogConfigResponseDto
     */
    logDrilldownConfigs?: Array<LogDrilldownConfigDto>;
}
/**
 * 
 * @export
 * @interface TenantMetricConfigResponseDto
 */
export interface TenantMetricConfigResponseDto {
    /**
     * 
     * @type {Array<MetricDrilldownConfigDto>}
     * @memberof TenantMetricConfigResponseDto
     */
    metricDrilldownConfigs?: Array<MetricDrilldownConfigDto>;
}
/**
 * 
 * @export
 * @interface TenantProfileConfigResponseDto
 */
export interface TenantProfileConfigResponseDto {
    /**
     * 
     * @type {Array<ProfileDrilldownConfigDto>}
     * @memberof TenantProfileConfigResponseDto
     */
    profileDrilldownConfigs?: Array<ProfileDrilldownConfigDto>;
}
/**
 * 
 * @export
 * @interface TenantTraceConfigResponseDto
 */
export interface TenantTraceConfigResponseDto {
    /**
     * 
     * @type {Array<TraceDrilldownConfigDto>}
     * @memberof TenantTraceConfigResponseDto
     */
    traceDrilldownConfigs?: Array<TraceDrilldownConfigDto>;
}
/**
 * 
 * @export
 * @interface ThresholdDto
 */
export interface ThresholdDto {
    /**
     * 
     * @type {string}
     * @memberof ThresholdDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ThresholdDto
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ThresholdDto
     */
    type: string;
}
/**
 * 
 * @export
 * @interface ThresholdMinMaxDto
 */
export interface ThresholdMinMaxDto extends ThresholdDto {
    /**
     * 
     * @type {string}
     * @memberof ThresholdMinMaxDto
     */
    lowerBoundQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof ThresholdMinMaxDto
     */
    upperBoundQuery?: string;
    /**
     * 
     * @type {Array<ThresholdValueMinMaxDto>}
     * @memberof ThresholdMinMaxDto
     */
    values?: Array<ThresholdValueMinMaxDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ThresholdMinMaxDto
     */
    fillZeros?: boolean;
}
/**
 * 
 * @export
 * @interface ThresholdRulesDto
 */
export interface ThresholdRulesDto {
    /**
     * 
     * @type {Array<PrometheusRuleDto>}
     * @memberof ThresholdRulesDto
     */
    globalThresholds?: Array<PrometheusRuleDto>;
    /**
     * 
     * @type {Array<PrometheusRuleDto>}
     * @memberof ThresholdRulesDto
     */
    customThresholds?: Array<PrometheusRuleDto>;
}
/**
 * 
 * @export
 * @interface ThresholdSingleDto
 */
export interface ThresholdSingleDto extends ThresholdDto {
    /**
     * 
     * @type {string}
     * @memberof ThresholdSingleDto
     */
    query?: string;
    /**
     * 
     * @type {Array<ThresholdValueSingleDto>}
     * @memberof ThresholdSingleDto
     */
    values?: Array<ThresholdValueSingleDto>;
    /**
     * 
     * @type {boolean}
     * @memberof ThresholdSingleDto
     */
    fillZeros?: boolean;
}
/**
 * 
 * @export
 * @interface ThresholdValueMinMaxDto
 */
export interface ThresholdValueMinMaxDto {
    /**
     * 
     * @type {number}
     * @memberof ThresholdValueMinMaxDto
     */
    time?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof ThresholdValueMinMaxDto
     */
    values?: Array<number>;
}
/**
 * 
 * @export
 * @interface ThresholdValueSingleDto
 */
export interface ThresholdValueSingleDto {
    /**
     * 
     * @type {number}
     * @memberof ThresholdValueSingleDto
     */
    time?: number;
    /**
     * 
     * @type {number}
     * @memberof ThresholdValueSingleDto
     */
    value?: number;
}
/**
 * 
 * @export
 * @interface ThresholdsV2Dto
 */
export interface ThresholdsV2Dto {
    /**
     * 
     * @type {Array<RequestThresholdV2Dto>}
     * @memberof ThresholdsV2Dto
     */
    requestThresholds?: Array<RequestThresholdV2Dto>;
    /**
     * 
     * @type {Array<ResourceThresholdV2Dto>}
     * @memberof ThresholdsV2Dto
     */
    resourceThresholds?: Array<ResourceThresholdV2Dto>;
    /**
     * 
     * @type {Array<HealthThresholdV2Dto>}
     * @memberof ThresholdsV2Dto
     */
    healthThresholds?: Array<HealthThresholdV2Dto>;
}
/**
 * 
 * @export
 * @interface TimeCriteriaDto
 */
export interface TimeCriteriaDto {
    /**
     * 
     * @type {number}
     * @memberof TimeCriteriaDto
     */
    instant?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeCriteriaDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeCriteriaDto
     */
    end?: number;
}
/**
 * 
 * @export
 * @interface TimeWindowDto
 */
export interface TimeWindowDto {
    /**
     * 
     * @type {number}
     * @memberof TimeWindowDto
     */
    start?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeWindowDto
     */
    end?: number;
}
/**
 * 
 * @export
 * @interface TraceConfigDto
 */
export interface TraceConfigDto {
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    tool?: string;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    url?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TraceConfigDto
     */
    labelToTagMapping?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    serviceLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    operationLabel?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TraceConfigDto
     */
    assertsCollector?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TraceConfigDto
     * @deprecated
     */
    addOutboundContext?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TraceConfigDto
     */
    suffixServiceWithNamespace?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TraceConfigDto
     */
    isElasticBackend?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    projectName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TraceConfigDto
     */
    ingestedByAgent?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    awsRegion?: string;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    dataSource?: string;
    /**
     * 
     * @type {string}
     * @memberof TraceConfigDto
     */
    orgId?: string;
}
/**
 * 
 * @export
 * @interface TraceDrilldownConfigDto
 */
export interface TraceDrilldownConfigDto {
    /**
     * 
     * @type {string}
     * @memberof TraceDrilldownConfigDto
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof TraceDrilldownConfigDto
     */
    priority?: number;
    /**
     * 
     * @type {Array<PropertyMatchEntryDto>}
     * @memberof TraceDrilldownConfigDto
     */
    match?: Array<PropertyMatchEntryDto>;
    /**
     * 
     * @type {boolean}
     * @memberof TraceDrilldownConfigDto
     */
    defaultConfig?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TraceDrilldownConfigDto
     */
    dataSourceUid?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TraceDrilldownConfigDto
     */
    entityPropertyToTraceLabelMapping?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof TraceDrilldownConfigDto
     */
    managedBy?: string;
}
/**
 * 
 * @export
 * @interface TraceEnvConfigDto
 */
export interface TraceEnvConfigDto {
    /**
     * 
     * @type {string}
     * @memberof TraceEnvConfigDto
     */
    name?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof TraceEnvConfigDto
     */
    envsForTrace?: Set<string>;
    /**
     * 
     * @type {Set<string>}
     * @memberof TraceEnvConfigDto
     */
    sitesForTrace?: Set<string>;
    /**
     * 
     * @type {TraceConfigDto}
     * @memberof TraceEnvConfigDto
     */
    traceConfig?: TraceConfigDto;
    /**
     * 
     * @type {boolean}
     * @memberof TraceEnvConfigDto
     */
    defaultConfig?: boolean;
}
/**
 * 
 * @export
 * @interface TraceEnvConfigResponseDto
 */
export interface TraceEnvConfigResponseDto {
    /**
     * 
     * @type {Array<TraceEnvConfigDto>}
     * @memberof TraceEnvConfigResponseDto
     */
    traceEnvConfigDtos?: Array<TraceEnvConfigDto>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TraceEnvConfigResponseDto
     */
    supportedTraceTools?: Array<string>;
}
/**
 * 
 * @export
 * @interface TraceIntegrationRequestDto
 */
export interface TraceIntegrationRequestDto {
    /**
     * 
     * @type {number}
     * @memberof TraceIntegrationRequestDto
     */
    start: number;
    /**
     * 
     * @type {number}
     * @memberof TraceIntegrationRequestDto
     */
    end: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof TraceIntegrationRequestDto
     */
    properties?: { [key: string]: string; };
    /**
     * 
     * @type {Array<MetricValueDto>}
     * @memberof TraceIntegrationRequestDto
     */
    values?: Array<MetricValueDto>;
    /**
     * 
     * @type {Array<ThresholdValueMinMaxDto>}
     * @memberof TraceIntegrationRequestDto
     */
    thresholdBands?: Array<ThresholdValueMinMaxDto>;
    /**
     * 
     * @type {number}
     * @memberof TraceIntegrationRequestDto
     */
    singleThreshold?: number;
}
/**
 * 
 * @export
 * @interface TraceIntegrationResponseDto
 */
export interface TraceIntegrationResponseDto {
    /**
     * 
     * @type {string}
     * @memberof TraceIntegrationResponseDto
     */
    url?: string;
}
/**
 * 
 * @export
 * @interface VendorNamesDto
 */
export interface VendorNamesDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof VendorNamesDto
     */
    vendorNames?: Array<string>;
}
/**
 * 
 * @export
 * @interface VersionedMimirRelabelRuleGroup
 */
export interface VersionedMimirRelabelRuleGroup {
    /**
     * 
     * @type {string}
     * @memberof VersionedMimirRelabelRuleGroup
     */
    version?: string;
    /**
     * 
     * @type {MimirRelabelRuleGroup}
     * @memberof VersionedMimirRelabelRuleGroup
     */
    ruleGroup?: MimirRelabelRuleGroup;
}
/**
 * 
 * @export
 * @interface VersionedMimirRelabelRulesPayload
 */
export interface VersionedMimirRelabelRulesPayload {
    /**
     * 
     * @type {VersionedMimirRelabelRuleGroup}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    generated?: VersionedMimirRelabelRuleGroup;
    /**
     * 
     * @type {VersionedMimirRelabelRuleGroup}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    prologue?: VersionedMimirRelabelRuleGroup;
    /**
     * 
     * @type {Array<VersionedMimirRelabelRuleGroup>}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    vendor?: Array<VersionedMimirRelabelRuleGroup>;
    /**
     * 
     * @type {Array<VersionedMimirRelabelRuleGroup>}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    base?: Array<VersionedMimirRelabelRuleGroup>;
    /**
     * 
     * @type {VersionedMimirRelabelRuleGroup}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    epilogue?: VersionedMimirRelabelRuleGroup;
    /**
     * 
     * @type {Array<VersionedMimirRelabelRuleGroup>}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    modelMapped?: Array<VersionedMimirRelabelRuleGroup>;
    /**
     * 
     * @type {Set<string>}
     * @memberof VersionedMimirRelabelRulesPayload
     */
    baseGroups?: Set<string>;
}
/**
 * 
 * @export
 * @interface VersionedRulesPayload
 */
export interface VersionedRulesPayload {
    /**
     * 
     * @type {string}
     * @memberof VersionedRulesPayload
     */
    version?: string;
    /**
     * 
     * @type {Array<PrometheusRules>}
     * @memberof VersionedRulesPayload
     */
    rules?: Array<PrometheusRules>;
}
