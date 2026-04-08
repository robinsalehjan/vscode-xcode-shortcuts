# Running tests

```bash
npm install
npm test                  # Run all tests
npm run test:structural   # Validate keybinding structure and SHORTCUTS.md sync (node:test, works without npm install)
npm run test:integration  # Load extension in VS Code and verify commands (@vscode/test-electron + mocha)
```

**Structural tests** validate that every keybinding has required fields, platform keys, no duplicates, correct cross-platform key convention (`cmd`→`ctrl`, `ctrl`→`win`/`super`), and that the `docs/SHORTCUTS.md` table stays in sync with `package.json`.

**Integration tests** launch VS Code with the extension loaded and verify that all contributed keybindings match their expected key/command/when mappings, all referenced commands exist, and safe commands execute without errors.

Both test suites run automatically on PRs to `main`. They also run as part of the publish workflow, where they must pass before deployment to the VS Code Marketplace.
