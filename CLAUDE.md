# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that maps Xcode keyboard shortcuts to VS Code commands. Published to the Visual Studio Marketplace as `robinsalehjan.xcode-vscode-shortcuts`. This is a **keymap-only extension** — no runtime code shipped with the extension, no build step. All extension logic lives declaratively in `package.json`. (Test files are JS but are not part of the extension.)

## Architecture

The entire extension is defined declaratively in `package.json` under `contributes.keybindings`. Each keybinding entry maps an Xcode shortcut to a VS Code command, with platform-specific variants (`mac`, `win`, `linux`). There is no source code to compile. Minimum VS Code engine: `^1.85.0`.

## Adding a New Shortcut

1. Add a keybinding object to the `contributes.keybindings` array in `package.json`
2. Each entry needs: `key`, `command`, and platform keys (`mac`, `win`, `linux`)
3. Cross-platform key convention: `cmd` (Mac) → `ctrl` (Win/Linux). For keybindings that use `ctrl` on Mac, map to `win` (Win) / `super` (Linux)
4. Use `when` clauses where the command requires specific context (e.g., `editorTextFocus`, `inDebugMode`)
5. Update the shortcut table in `README.md`
6. Update `CHANGELOG.md` with the change (date format: DD.MM.YYYY)

## Testing

```bash
npm test                  # Run all tests
npm run test:structural   # Validate keybinding structure and README sync (node:test, no npm install needed)
npm run test:integration  # Load extension in VS Code and verify commands (npm install required for @vscode/test-electron + mocha)
```

Integration tests require a display server — CI uses `xvfb-run -a` on Linux. CI runs both suites on an **ubuntu + macOS matrix** via a reusable workflow.

## Release Process

- Bump version in `package.json`
- Push a semver tag **without** the `v` prefix (e.g., `1.5.0`, not `v1.5.0`) to trigger the GitHub Actions publish workflow
- The workflow gates on the full test suite passing before deploying via `HaaLeo/publish-vscode-extension@v1` with a `VS_MARKETPLACE_TOKEN` secret
- After pushing the tag, verify the workflow ran successfully in GitHub Actions before announcing the release

## PR Checklist

When opening a PR that adds a shortcut:
- Run `npm test` — structural tests will catch missing platform keys or README drift
- CI runs both test suites automatically on PRs to `main`
