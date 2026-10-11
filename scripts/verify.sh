#!/usr/bin/env bash
set -euo pipefail

root_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root_dir"

printf '\n%s\n' '==> Checking formatting'
npm run format:check

printf '\n%s\n' '==> Running ESLint'
npm run lint

printf '\n%s\n' '==> Running unit tests'
npm run test:ci

printf '\n%s\n' '==> Building production site'
npm run build
