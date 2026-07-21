#! /usr/bin/env bash
set -euo pipefail

# openapi-generator's Go api template (v7.7.0, still unfixed upstream) drops
# the HTTP status from GenericOpenAPIError when an error-response body fails
# to decode: `newErr.error = err.Error()` overwrites the previously-set
# `localVarHTTPResponse.Status`. The generate-openapi-clients action has no
# template-override input, so patch the generated code after generation to
# keep the status prefixed. Idempotent: the anchored pattern no longer matches
# once rewritten.

find go -name 'api_*.go' -print0 | xargs -0 perl -pi -e \
  's/^(\s*)newErr\.error = err\.Error\(\)$/$1newErr.error = localVarHTTPResponse.Status + ": " + err.Error()/'
