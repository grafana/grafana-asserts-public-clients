#!/usr/bin/env bash
set -euo pipefail

# Sanitizes a generated OpenAPI spec before it is handed to OpenAPI Generator.
# Reads the spec on stdin and writes the cleaned spec to stdout.
#
# Two springdoc-emitted patterns break the generated Go client and are fixed here:
#
# 1. HttpStatus schema: rendered as `allOf` + a `$ref` to `HttpStatusCode`, which
#    the generator can't turn into a usable Go type. Collapse it to a plain
#    `type: string` enum.
#
# 2. `$ref` with sibling keywords: error responses reference `ApiError` via a
#    `$ref` that also carries sibling `additionalProperties`/`default` keys. A
#    `$ref` with sibling constraints is invalid OpenAPI (siblings are ignored
#    unless wrapped in `allOf`), and the Go generator splices the
#    additionalProperties map onto the referenced type name, emitting
#    non-compiling code such as `ApiError[string]interface{}`. Drop those
#    siblings so the reference resolves to the plain `ApiError` type. Only the
#    `additionalProperties`/`default` keys are removed, and only from maps that
#    contain a `$ref`, so legitimate inline `additionalProperties` schemas (e.g.
#    deepObject `scope` params) are left untouched.

awk '
  BEGIN { in_httpstatus = 0 }

  # Start of the HttpStatus schema.
  /[[:space:]]*HttpStatus:/ {
    in_httpstatus = 1
    print
    next
  }

  # Next schema at the same indentation ends the HttpStatus section.
  in_httpstatus && /^    [A-Za-z][A-Za-z0-9]*:/ && !/HttpStatus:/ {
    in_httpstatus = 0
  }

  # Drop the unresolvable allOf / $ref structure.
  in_httpstatus && /allOf:/ { next }
  in_httpstatus && /\$ref.*HttpStatusCode/ { next }

  # Give the enum a concrete scalar type.
  in_httpstatus && /enum:/ {
    print "      type: string"
  }

  { print }
' \
  | yq '(.. | select(tag == "!!map" and has("$ref"))) |= (del(.additionalProperties) | del(.default))'
