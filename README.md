# hello-express

[![Node CI](https://github.com/lizc-au/hello-express/actions/workflows/ci.yml/badge.svg)](https://github.com/lizc-au/hello-express/actions/workflows/ci.yml)

[![Latest release](https://img.shields.io/github/v/release/lizc-au/hello-express?include_prereleases&sort=semver&t=1756832235)](https://github.com/lizc-au/hello-express/releases)

> Minimal Express demo. For a fuller template (more tests, workflows, docs), see **my-node-app**. This repo stays lean on purpose.

**Run:** npm run dev

**Env:** PORT=4000 in .env

## API endpoints

Example routes served by the template app.

- GET / -> Hello
- GET /api/health -> { ok: true }
- POST /api/echo -> echoes JSON body

## Testing

- npm test
- npm run test:watch
- npm run test:coverage
- npm run coverage:open

## References

- Coverage & thresholds: [github.com/lizc-au/dev-cheatsheets/blob/main/docs/coverage-cheatsheet.md](https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/coverage-cheatsheet.md)
- Git PR workflow (protected main): [github.com/lizc-au/dev-cheatsheets/blob/main/docs/git-pr-workflow.md](https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/git-pr-workflow.md)
- YAML via Base64 (CRLF + 2/4/6): [github.com/lizc-au/dev-cheatsheets/blob/main/docs/yaml-base64-template.md](https://github.com/lizc-au/dev-cheatsheets/blob/main/docs/yaml-base64-template.md)
   <!-- ruleset-v2 -->
   <!-- ruleset-smoke -->

## Branch rules

- Required checks: CodeQL, build
- Strict up-to-date: ON
- Do not require on create: ON
- Ruleset JSON: [docs/ruleset-main.json](./docs/ruleset-main.json)

## Docs

- [GitHub cheat sheet](docs/github-cheatsheet.md)
- [Testing cheat sheet](docs/testing-cheatsheet.md)

## Releases

- See **Releases**: [github.com/lizc-au/hello-express/releases](https://github.com/lizc-au/hello-express/releases)
