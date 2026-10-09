#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
base_href="${PAGES_BASE_HREF:-/$(basename "$root_dir")/}"
cd "$root_dir"

npm run build -- --base-href "$base_href"
mkdir -p docs
cp -a dist/personal-website/browser/. docs/
printf '\nStatic site staged in docs/ with base href %s\n' "$base_href"
