/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ApiError
 */
export interface ApiError {
    /**
     * HTTP status, e.g. NOT_FOUND
     * @type {string}
     * @memberof ApiError
     */
    status?: string;
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
     * Stable machine-readable error code, present only for errors that define one
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
 * @type ApiErrorSubErrorsInner
 * 
 * @export
 */
export type ApiErrorSubErrorsInner = { type: 'ApiQuerySyntaxError' } & ApiQuerySyntaxError | { type: 'ApiSubError' } & ApiSubError | { type: 'ApiValidationError' } & ApiValidationError;
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
    /**
     * 
     * @type {ApiQuerySyntaxErrorType}
     * @memberof ApiQuerySyntaxError
     */
    type: ApiQuerySyntaxErrorType;
}

/**
 * 
 * @export
 */
export const ApiQuerySyntaxErrorType = {
    ApiQuerySyntaxError: 'ApiQuerySyntaxError'
} as const;
export type ApiQuerySyntaxErrorType = typeof ApiQuerySyntaxErrorType[keyof typeof ApiQuerySyntaxErrorType];

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
    /**
     * 
     * @type {ApiSubErrorType}
     * @memberof ApiSubError
     */
    type: ApiSubErrorType;
}
/**
 * 
 * @export
 * @interface ApiSubErrorFields
 */
export interface ApiSubErrorFields {
    /**
     * 
     * @type {string}
     * @memberof ApiSubErrorFields
     */
    message?: string;
}

/**
 * 
 * @export
 */
export const ApiSubErrorType = {
    ApiSubError: 'ApiSubError'
} as const;
export type ApiSubErrorType = typeof ApiSubErrorType[keyof typeof ApiSubErrorType];

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
    /**
     * 
     * @type {ApiValidationErrorType}
     * @memberof ApiValidationError
     */
    type: ApiValidationErrorType;
}

/**
 * 
 * @export
 */
export const ApiValidationErrorType = {
    ApiValidationError: 'ApiValidationError'
} as const;
export type ApiValidationErrorType = typeof ApiValidationErrorType[keyof typeof ApiValidationErrorType];

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
 * 
 * @export
 * @interface EntityRefDto
 */
export interface EntityRefDto {
    /**
     * 
     * @type {string}
     * @memberof EntityRefDto
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof EntityRefDto
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof EntityRefDto
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityRefDto
     */
    scope?: { [key: string]: string; };
}
/**
 * 
 * @export
 * @interface EntityWriteRequestDto
 */
export interface EntityWriteRequestDto {
    /**
     * 
     * @type {string}
     * @memberof EntityWriteRequestDto
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof EntityWriteRequestDto
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof EntityWriteRequestDto
     */
    name: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityWriteRequestDto
     */
    scope?: { [key: string]: string; };
    /**
     * Custom properties to store on the entity. Values must be scalars (string, boolean, or number) or arrays of scalars; nested objects, nested arrays, and null values are rejected. Integral numbers are stored as 64-bit signed integers and floating-point numbers as IEEE-754 doubles.
     * @type {{ [key: string]: KgPropertyValue; }}
     * @memberof EntityWriteRequestDto
     */
    properties?: { [key: string]: KgPropertyValue; };
    /**
     * Time-to-live in seconds. Positive values expire the entity after that many seconds, 0 expires it immediately, and negative values mean no expiry.
     * @type {number}
     * @memberof EntityWriteRequestDto
     */
    ttlSeconds: number;
}
/**
 * 
 * @export
 * @interface EntityWriteResponseDto
 */
export interface EntityWriteResponseDto {
    /**
     * 
     * @type {string}
     * @memberof EntityWriteResponseDto
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityWriteResponseDto
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof EntityWriteResponseDto
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EntityWriteResponseDto
     */
    scope?: { [key: string]: string; };
    /**
     * Properties stored on the entity: scalar values (string, boolean, int64, or double) or arrays of scalars.
     * @type {{ [key: string]: KgPropertyValue; }}
     * @memberof EntityWriteResponseDto
     */
    properties?: { [key: string]: KgPropertyValue; };
}
/**
 * Batch of entities and relationships to upsert atomically. At least one of `entities` or `relationships` must be non-empty; an empty request is a 422.
 * @export
 * @interface GraphWriteRequestDto
 */
export interface GraphWriteRequestDto {
    /**
     * 
     * @type {Array<EntityWriteRequestDto>}
     * @memberof GraphWriteRequestDto
     */
    entities?: Array<EntityWriteRequestDto>;
    /**
     * 
     * @type {Array<RelationshipWriteRequestDto>}
     * @memberof GraphWriteRequestDto
     */
    relationships?: Array<RelationshipWriteRequestDto>;
}
/**
 * 
 * @export
 * @interface GraphWriteResponseDto
 */
export interface GraphWriteResponseDto {
    /**
     * Count of entities in the accepted batch (idempotent upsert count, not a created-vs-updated breakdown).
     * @type {number}
     * @memberof GraphWriteResponseDto
     */
    entitiesWritten?: number;
    /**
     * Count of relationships in the accepted batch (idempotent upsert count, not a created-vs-updated breakdown).
     * @type {number}
     * @memberof GraphWriteResponseDto
     */
    relationshipsWritten?: number;
}
/**
 * @type KgPropertyScalar
 * A scalar property value. Integral numbers are stored as 64-bit signed integers and floating-point numbers as IEEE-754 doubles; NaN, Infinity, and integers overflowing 64 bits are rejected.
 * @export
 */
export type KgPropertyScalar = boolean | number | string;
/**
 * @type KgPropertyValue
 * A property value: a scalar, or a (possibly mixed) array of scalars. Nested objects, nested arrays, and null values are rejected.
 * @export
 */
export type KgPropertyValue = Array<KgPropertyScalar> | boolean | number | string;
/**
 * 
 * @export
 * @interface KgSchemaDto
 */
export interface KgSchemaDto {
    /**
     * 
     * @type {SchemaDomainDto}
     * @memberof KgSchemaDto
     */
    domain: SchemaDomainDto;
    /**
     * 
     * @type {Array<SchemaImportDto>}
     * @memberof KgSchemaDto
     */
    imports?: Array<SchemaImportDto>;
    /**
     * 
     * @type {Array<SchemaEntityTypeDto>}
     * @memberof KgSchemaDto
     */
    entityTypes?: Array<SchemaEntityTypeDto>;
    /**
     * 
     * @type {Array<SchemaRelationshipTypeDto>}
     * @memberof KgSchemaDto
     */
    relationshipTypes?: Array<SchemaRelationshipTypeDto>;
    /**
     * 
     * @type {Array<SchemaBindingDto>}
     * @memberof KgSchemaDto
     */
    relationshipTypeBindings?: Array<SchemaBindingDto>;
}
/**
 * 
 * @export
 * @interface KgSchemaListDto
 */
export interface KgSchemaListDto {
    /**
     * 
     * @type {Array<KgSchemaDto>}
     * @memberof KgSchemaListDto
     */
    schemas: Array<KgSchemaDto>;
}
/**
 * 
 * @export
 * @interface RelationshipWriteRequestDto
 */
export interface RelationshipWriteRequestDto {
    /**
     * 
     * @type {string}
     * @memberof RelationshipWriteRequestDto
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipWriteRequestDto
     */
    type: string;
    /**
     * 
     * @type {EntityRefDto}
     * @memberof RelationshipWriteRequestDto
     */
    from: EntityRefDto;
    /**
     * 
     * @type {EntityRefDto}
     * @memberof RelationshipWriteRequestDto
     */
    to: EntityRefDto;
    /**
     * Custom properties to store on the relationship. Values must be scalars (string, boolean, or number) or arrays of scalars; nested objects, nested arrays, and null values are rejected. Integral numbers are stored as 64-bit signed integers and floating-point numbers as IEEE-754 doubles.
     * @type {{ [key: string]: KgPropertyValue; }}
     * @memberof RelationshipWriteRequestDto
     */
    properties?: { [key: string]: KgPropertyValue; };
    /**
     * Time-to-live in seconds. Positive values expire the relationship after that many seconds, 0 expires it immediately, and negative values mean no expiry.
     * @type {number}
     * @memberof RelationshipWriteRequestDto
     */
    ttlSeconds: number;
}
/**
 * 
 * @export
 * @interface RelationshipWriteResponseDto
 */
export interface RelationshipWriteResponseDto {
    /**
     * 
     * @type {string}
     * @memberof RelationshipWriteResponseDto
     */
    domain?: string;
    /**
     * 
     * @type {string}
     * @memberof RelationshipWriteResponseDto
     */
    type?: string;
    /**
     * 
     * @type {EntityRefDto}
     * @memberof RelationshipWriteResponseDto
     */
    from?: EntityRefDto;
    /**
     * 
     * @type {EntityRefDto}
     * @memberof RelationshipWriteResponseDto
     */
    to?: EntityRefDto;
    /**
     * Properties stored on the relationship: scalar values (string, boolean, int64, or double) or arrays of scalars.
     * @type {{ [key: string]: KgPropertyValue; }}
     * @memberof RelationshipWriteResponseDto
     */
    properties?: { [key: string]: KgPropertyValue; };
}
/**
 * 
 * @export
 * @interface SchemaBindingDto
 */
export interface SchemaBindingDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaBindingDto
     */
    name: string;
    /**
     * 
     * @type {SchemaEndpointDto}
     * @memberof SchemaBindingDto
     */
    from: SchemaEndpointDto;
    /**
     * 
     * @type {SchemaEndpointDto}
     * @memberof SchemaBindingDto
     */
    to: SchemaEndpointDto;
}
/**
 * 
 * @export
 * @interface SchemaDomainDto
 */
export interface SchemaDomainDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaDomainDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDomainDto
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaDomainDto
     */
    version: string;
}
/**
 * 
 * @export
 * @interface SchemaEndpointDto
 */
export interface SchemaEndpointDto {
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaEndpointDto
     */
    types: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SchemaEndpointDto
     */
    cardinality?: string;
}
/**
 * 
 * @export
 * @interface SchemaEntityTypeDto
 */
export interface SchemaEntityTypeDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaEntityTypeDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaEntityTypeDto
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof SchemaEntityTypeDto
     */
    retentionDays?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaEntityTypeDto
     */
    aliases?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SchemaEntityTypeDto
     */
    label?: { [key: string]: string; };
    /**
     * 
     * @type {Array<SchemaScopeKeyDto>}
     * @memberof SchemaEntityTypeDto
     */
    scopeKeys?: Array<SchemaScopeKeyDto>;
    /**
     * 
     * @type {Array<SchemaPropertyDto>}
     * @memberof SchemaEntityTypeDto
     */
    properties?: Array<SchemaPropertyDto>;
}
/**
 * 
 * @export
 * @interface SchemaImportDto
 */
export interface SchemaImportDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaImportDto
     */
    domain: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaImportDto
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaImportDto
     */
    alias?: string;
}
/**
 * 
 * @export
 * @interface SchemaPropertyDto
 */
export interface SchemaPropertyDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaPropertyDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaPropertyDto
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaPropertyDto
     */
    elementType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaPropertyDto
     */
    required?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaPropertyDto
     */
    _enum?: Array<string>;
}
/**
 * 
 * @export
 * @interface SchemaRelationshipTypeDto
 */
export interface SchemaRelationshipTypeDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaRelationshipTypeDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaRelationshipTypeDto
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof SchemaRelationshipTypeDto
     */
    retentionDays?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaRelationshipTypeDto
     */
    aliases?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SchemaRelationshipTypeDto
     */
    label?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SchemaRelationshipTypeDto
     */
    inverse?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaRelationshipTypeDto
     */
    characteristics?: Array<string>;
    /**
     * 
     * @type {SchemaEndpointDto}
     * @memberof SchemaRelationshipTypeDto
     */
    from: SchemaEndpointDto;
    /**
     * 
     * @type {SchemaEndpointDto}
     * @memberof SchemaRelationshipTypeDto
     */
    to: SchemaEndpointDto;
    /**
     * 
     * @type {Array<SchemaPropertyDto>}
     * @memberof SchemaRelationshipTypeDto
     */
    properties?: Array<SchemaPropertyDto>;
}
/**
 * 
 * @export
 * @interface SchemaScopeKeyDto
 */
export interface SchemaScopeKeyDto {
    /**
     * 
     * @type {string}
     * @memberof SchemaScopeKeyDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SchemaScopeKeyDto
     */
    type: string;
    /**
     * 
     * @type {boolean}
     * @memberof SchemaScopeKeyDto
     */
    required?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof SchemaScopeKeyDto
     */
    _enum?: Array<string>;
}
