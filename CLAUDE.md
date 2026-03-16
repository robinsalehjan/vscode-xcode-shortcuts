# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that maps Xcode keyboard shortcuts to VS Code commands. Published to the Visual Studio Marketplace as `robinsalehjan.xcode-vscode-shortcuts`. This is a **keymap-only extension** — no TypeScript/JavaScript code, no build step, no tests. All logic lives in `package.json`.

## Architecture

The entire extension is defined declaratively in `package.json` under `contributes.keybindings`. Each keybinding entry maps an Xcode shortcut to a VS Code command, with platform-specific variants (`mac`, `win`, `linux`). There is no source code to compile. Minimum VS Code engine: `^1.85.0`.

## Adding a New Shortcut

1. Add a keybinding object to the `contributes.keybindings` array in `package.json`
2. Each entry needs: `key`, `command`, and platform keys (`mac`, `win`, `linux`)
3. Cross-platform key convention: `cmd` (Mac) → `ctrl` (Win/Linux). For keybindings that use `ctrl` on Mac, map to `win` (Win) / `super` (Linux)
4. Use `when` clauses where the command requires specific context (e.g., `editorTextFocus`, `inDebugMode`)
5. Update the shortcut table in `README.md`
6. Update `CHANGELOG.md` with the change (date format: DD.MM.YYYY)

## Release Process

- Bump version in `package.json`
- Push a semver tag (e.g., `v1.4.1`) to trigger the GitHub Actions workflow that publishes to the VS Code Marketplace
- The workflow uses `HaaLeo/publish-vscode-extension@v1` with a `VS_MARKETPLACE_TOKEN` secret

## PR Checklist

When opening a PR that adds a shortcut, ensure the new shortcut is also added to the `README.md` table.
