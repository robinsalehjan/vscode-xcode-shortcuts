# How to add a new shortcut

> Browse the full list of existing shortcuts in [`docs/SHORTCUTS.md`](SHORTCUTS.md) before adding a new one.

To add a new keyboard shortcut to this extension, follow these steps:

1. **Identify the VS Code Command**
   Decide which VS Code command you want your shortcut to trigger. You can browse available commands in the [VS Code Key Bindings documentation](https://code.visualstudio.com/docs/getstarted/keybindings#_basic-editing).

2. **Open `package.json`**
   Locate and open the `package.json` file in the root of this repository.

3. **Find the Keybindings Section**
   Scroll to the `contributes.keybindings` array inside `package.json`. It looks like this:
   ```json
   "contributes": {
     "keybindings": [
       // ...existing keybindings...
     ]
   }
   ```

4. **Add Your Shortcut**
   Add a new object to the `keybindings` array with your desired key combination and command. Every entry must include platform-specific keys for `mac`, `win`, and `linux`. For example:
   ```json
   {
     "key": "cmd+shift+f",
     "mac": "cmd+shift+f",
     "win": "ctrl+shift+f",
     "linux": "ctrl+shift+f",
     "command": "editor.action.formatDocument"
   }
   ```
   - Cross-platform key convention: `cmd` (Mac) → `ctrl` (Win/Linux). For keybindings that use `ctrl` on Mac, map to `win` (Win) / `super` (Linux).
   - Add a `when` clause if the command only makes sense in a specific context (e.g., `editorTextFocus`, `inDebugMode`).

5. **Update `docs/SHORTCUTS.md`**
   Add a row to the shortcuts table documenting the new keybinding.

6. **Update `CHANGELOG.md`**
   Add an entry describing the new shortcut (date format: DD.MM.YYYY).

7. **Run the tests**
   ```bash
   npm test
   ```
   Structural tests will catch missing platform keys or drift between `package.json` and `docs/SHORTCUTS.md`.
