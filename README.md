# hello-express

Run: npm run dev
Env: PORT=4000 in .env

Endpoints:
GET / -> Hello
GET /api/health -> { ok: true }
POST /api/echo -> echoes JSON body
[![Node CI](https://github.com/lizc-au/hello-express/actions/workflows/ci.yml/badge.svg)](https://github.com/lizc-au/hello-express/actions/workflows/ci.yml)

[![Latest release](https://img.shields.io/github/v/release/lizc-au/hello-express?include_prereleases&sort=semver&t=1756832235)](https://github.com/lizc-au/hello-express/releases)

rnrn## Testingrnrn- npm testrn- npm run test:watchrn- npm run test:coveragern- npm run coverage:open

## References

- Coverage & thresholds: https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/coverage-cheatsheet.md
- Git PR workflow (protected main): https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/git-pr-workflow.md
- YAML via Base64 (CRLF + 2/4/6): https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/yaml-base64-template.md
   <!-- ruleset-v2 -->
   <!-- ruleset-smoke -->
  rn## Branch rulesrn- Required checks: CodeQL, buildrn- Strict up-to-date: ONrn- Do not require on create: ONrn- Ruleset JSON: [docs/ruleset-main.json](./docs/ruleset-main.json)rn
