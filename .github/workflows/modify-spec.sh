#!/usr/bin/env bash
set -euo pipefail

# Read the input spec and fix the HttpStatus schema
# Remove the problematic allOf structure and add type: string
cat | awk '
BEGIN { in_httpstatus = 0 }

# Start of HttpStatus section (with proper spacing)
/[[:space:]]*HttpStatus:/ { 
    in_httpstatus = 1
    print
    next 
}

# End of HttpStatus section (next schema at same indentation level)
in_httpstatus && /^    [A-Za-z][A-Za-z0-9]*:/ && !/HttpStatus:/ { 
    in_httpstatus = 0 
}

# Skip problematic lines in HttpStatus section
in_httpstatus && /allOf:/ { next }
in_httpstatus && /\$ref.*HttpStatusCode/ { next }

# Add type: string before enum in HttpStatus section
in_httpstatus && /enum:/ { 
    print "      type: string"
}

# Print all other lines
{ print }
'