## How to add a new shortcut

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
   Add a new object to the `keybindings` array with your desired key combination and command. For example:
   ```json
   {
     "key": "command+my-awesome-hotkey",
     "command": "editor.action.addSelectionToNextFindMatch"
   }
   ```
   - Replace `"command+my-awesome-hotkey"` with your preferred key combination.
   - Replace `"editor.action.addSelectionToNextFindMatch"` with the command you want to use.
