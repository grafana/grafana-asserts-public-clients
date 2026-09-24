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
