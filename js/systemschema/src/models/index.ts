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
/**
 * 
 * @export
 * @interface SystemKgSchemaBundleDto
 */
export interface SystemKgSchemaBundleDto {
    /**
     * 
     * @type {SchemaDomainDto}
     * @memberof SystemKgSchemaBundleDto
     */
    domain: SchemaDomainDto;
    /**
     * 
     * @type {Array<SchemaImportDto>}
     * @memberof SystemKgSchemaBundleDto
     */
    imports?: Array<SchemaImportDto>;
    /**
     * 
     * @type {Array<SchemaEntityTypeDto>}
     * @memberof SystemKgSchemaBundleDto
     */
    entityTypes: Array<SchemaEntityTypeDto>;
    /**
     * 
     * @type {Array<SchemaRelationshipTypeDto>}
     * @memberof SystemKgSchemaBundleDto
     */
    relationshipTypes: Array<SchemaRelationshipTypeDto>;
    /**
     * 
     * @type {Array<SchemaBindingDto>}
     * @memberof SystemKgSchemaBundleDto
     */
    relationshipTypeBindings?: Array<SchemaBindingDto>;
}
/**
 * 
 * @export
 * @interface SystemKgSchemaRefListDto
 */
export interface SystemKgSchemaRefListDto {
    /**
     * 
     * @type {Array<SchemaDomainDto>}
     * @memberof SystemKgSchemaRefListDto
     */
    schemas?: Array<SchemaDomainDto>;
}
