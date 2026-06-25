#!/usr/bin/env bash
set -euo pipefail

# Commits all working-tree changes as a single commit via the GitHub GraphQL
# createCommitOnBranch mutation. Commits created through the API are signed by
# GitHub and show as "Verified", which satisfies the repository's "Signed
# Commits" ruleset. The git-based auto-commit action cannot satisfy that rule
# without a provisioned signing key, so we commit through the API instead.
#
# Required env:
#   TARGET_BRANCH      branch to commit onto (e.g. the PR head or release branch)
#   GH_TOKEN           token with contents:write for `gh api`
#   GITHUB_REPOSITORY  owner/name (provided by GitHub Actions)
# Optional env:
#   COMMIT_MESSAGE     commit headline (default: "Update generated clients")

BRANCH="${TARGET_BRANCH:?TARGET_BRANCH is required}"
MESSAGE="${COMMIT_MESSAGE:-Update generated clients}"
: "${GITHUB_REPOSITORY:?GITHUB_REPOSITORY is required}"

git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
  exit 0
fi

add_file="$(mktemp)"
del_file="$(mktemp)"
body_file="$(mktemp)"
trap 'rm -f "$add_file" "$del_file" "$body_file"' EXIT

# File contents are read with jq --rawfile (not the command line) so neither the
# total payload nor any single large file trips the OS argument-length limit.
# Rename detection is disabled so a rename surfaces as a delete + add, which maps
# cleanly onto the mutation's separate additions/deletions inputs.
git diff --cached --no-renames --name-only --diff-filter=ACM -z \
  | while IFS= read -r -d '' path; do
      jq -n --arg path "$path" --rawfile contents "$path" \
        '{path: $path, contents: ($contents | @base64)}'
    done \
  | jq -s '.' >"$add_file"

git diff --cached --no-renames --name-only --diff-filter=D -z \
  | while IFS= read -r -d '' path; do
      jq -n --arg path "$path" '{path: $path}'
    done \
  | jq -s '.' >"$del_file"

expected_head_oid="$(git rev-parse HEAD)"

echo "Committing $(jq 'length' "$add_file") additions and $(jq 'length' "$del_file") deletions to ${BRANCH} (parent ${expected_head_oid})."

jq -n \
  --arg query 'mutation ($input: CreateCommitOnBranchInput!) { createCommitOnBranch(input: $input) { commit { oid url } } }' \
  --arg repo "$GITHUB_REPOSITORY" \
  --arg branch "$BRANCH" \
  --arg oid "$expected_head_oid" \
  --arg headline "$MESSAGE" \
  --slurpfile additions "$add_file" \
  --slurpfile deletions "$del_file" \
  '{
     query: $query,
     variables: {
       input: {
         branch: { repositoryNameWithOwner: $repo, branchName: $branch },
         message: { headline: $headline },
         expectedHeadOid: $oid,
         fileChanges: { additions: $additions[0], deletions: $deletions[0] }
       }
     }
   }' >"$body_file"

gh api graphql --input "$body_file"
