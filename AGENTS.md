# AGENTS.md — Angular Todo (legacy learning archive)

Read `README.md`, `docs/ANGULAR_CLI_ORIGINAL.md` and
`docs/CHATGPT_PROJECT_HISTORY.md` before changing code.

## Boundaries

- Educational Angular 8.2.x / Angular CLI 8.3.12 application; JSONPlaceholder is a demo dependency, not a production service.
- Preserve the historic `package-lock.json` and dependency provenance. Do not run `npm audit fix` or a framework migration in place without a dedicated plan, compatibility tests and explicit approval.
- Never commit `node_modules/`, tokens, local settings or user data.
- Modern Node compatibility and test execution are **not** verified. Report commands actually run, not assumed results.

## Coordination with Codex

- Changes from the multi-repository ChatGPT pass of 2026-10-24 live only on `chatgpt/review-20261024`. Do not force-push or merge to `master` automatically.
- This is a distinct legacy codebase. Do not rewrite it as Angular 19+ just to satisfy a dependency alert; preserve functionality and separate migration work.
- Update `docs/CHATGPT_PROJECT_HISTORY.md` at each intervention; distinguish exact user/assistant messages, reconstructed summaries and unattested timestamps.
- Any PR opened from this branch is an optional handoff, not an instruction to deploy.
