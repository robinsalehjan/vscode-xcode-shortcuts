# Repository Instructions

## Architecture

This is a keymap-only VS Code extension published as `robinsalehjan.xcode-vscode-shortcuts`. Its shipped behavior is defined declaratively in `package.json` under `contributes.keybindings`; test files are not part of the extension. Do not add runtime source, an extension entry point, activation events, runtime dependencies, or a build step unless the user explicitly requests an architectural change.

The minimum VS Code engine is `^1.85.0`.

## Changing Shortcuts

When adding or modifying a keybinding:

1. Update `contributes.keybindings` in `package.json`.
2. Include `key`, `command`, `mac`, `win`, and `linux`; keep `key` equal to `mac`.
3. Map macOS `cmd` to Windows/Linux `ctrl`. Map macOS `ctrl` to Windows `win` and Linux `super`.
4. Add the narrowest appropriate `when` clause when the command requires context, such as `editorTextFocus` or `inDebugMode`.
5. Keep `docs/SHORTCUTS.md` synchronized with `package.json`.
6. Add a `CHANGELOG.md` entry using the date format `DD.MM.YYYY`.

## Validation

- Run `npm run test:structural` after keybinding or shortcut-documentation changes. It validates keybinding structure, platform mappings, and `docs/SHORTCUTS.md` synchronization without requiring `npm install`.
- Run `npm test` before submitting shortcut changes when integration-test dependencies and a graphical environment are available.
- Integration tests require `npm install`. On headless Linux, run them with `xvfb-run -a npm run test:integration`.
- CI runs structural and integration suites on Ubuntu and macOS for pull requests to `main`.

## Releases

Do not bump versions, create or push tags, or publish the extension unless the user explicitly requests a release.

For an authorized release:

1. Keep the versions in `package.json` and `package-lock.json` synchronized.
2. Push a semver tag without a `v` prefix, such as `1.5.9`.
3. Confirm the publishing workflow passes its Ubuntu and macOS test matrix.
4. Confirm publication to the Visual Studio Marketplace and, when `OPEN_VSX_TOKEN` is configured, the Open VSX Registry. The workflow packages once with pinned `@vscode/vsce` and publishes the same `.vsix` through `vsce` and `ovsx`.
