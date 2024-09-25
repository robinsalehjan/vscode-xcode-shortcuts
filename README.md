<div align=center>
  <img src="https://github.com/robinsalehjan/vscode-xcode-shortcuts/blob/main/icon.png" 
     alt="icon"
     height=200 
     width=200>
</div>

# Xcode shortcuts for VSCode

This extension adds your favorite Xcode keyboard shortcuts to Visual Studio Code!

## Shortcuts

| Key           | Description                                                    | Command                                            |
|---------------|----------------------------------------------------------------|----------------------------------------------------|
| `cmd+e`         | Add selection to next find match                               | `editor.action.addSelectionToNextFindMatch`          |
| `cmd+shift+j`   | Show active file in explorer                                   | `workbench.files.action.showActiveFileInExplorer`     |
| `cmd+ctrl+up`   | Switch between header and source file                          | `C_Cpp.SwitchHeaderSource`                           |
| `shift+cmd+]`   | Move to next editor                                            | `workbench.action.nextEditor`                       |
| `shift+cmd+[`   | Move to previous editor                                        | `workbench.action.previousEditor`                    |
| `cmd+shift+y`   | Toggle panel visibility                                        | `workbench.action.togglePanel`                       |
| `cmd+shift+o`   | Quick open files or commands                                   | `workbench.action.quickOpen`                         |
| `ctrl+cmd+left` | Navigate back                                                  | `workbench.action.navigateBack`                      |
| `ctrl+cmd+right`| Navigate forward                                               | `workbench.action.navigateForward`                   |
| `cmd+1`         | Open Explorer view                                             | `workbench.view.explorer`                            |
| `cmd+2`         | Open Search view                                               | `workbench.view.search`                              |
| `cmd+3`        | Open Source Control view                                       | `workbench.view.scm`                                 |
| `cmd+4`         | Open Debug view                                                | `workbench.view.debug`                               |
| `cmd+5`         | Open Extensions view                                           | `workbench.view.extensions`                          |
| `cmd+r`         | Start debug (when not in debug mode)                           | `workbench.action.debug.start`                       |
| `cmd+r`         | Restart debug (when in debug mode)                             | `workbench.action.debug.restart`                     |
| `cmd+.`         | Stop debug (when in debug mode)                                | `workbench.action.debug.stop`                        |
| `cmd+b`         | Run build task                                                 | `workbench.action.tasks.build`                       |
| `cmd+u`         | Run test task                                                  | `workbench.action.tasks.test`                        |
| `cmd+0`         | Toggle sidebar visibility                                      | `workbench.action.toggleSidebarVisibility`           |
| `ctrl+right`    | Move cursor word part right (when text input has focus)         | `cursorWordPartRight`                                |
| `shift+ctrl+right`| Select word part right (when text input has focus)             | `cursorWordPartRightSelect`                          |
| `ctrl+left`     | Move cursor word part start left (when text input has focus)    | `cursorWordPartStartLeft`                            |
| `shift+ctrl+left`| Select word part start left (when text input has focus)         | `cursorWordPartStartLeftSelect`                      |
| `ctrl+backspace`| Delete word part left (when text input has focus and editor is not readonly) | `deleteWordPartLeft`                                 |
| `shift+ctrl+backspace`| Delete word part right (when text input has focus and editor is not readonly) | `deleteWordPartRight`                          |
| `alt+cmd+left`  | Fold code                                                      | `editor.fold`                                        |
| `alt+cmd+right` | Unfold code                                                    | `editor.unfold`                                      |
| `alt+cmd+[`     | Move lines up                                                  | `editor.action.moveLinesUpAction`                    |
| `alt+cmd+]`     | Move lines down                                                | `editor.action.moveLinesDownAction`                  |
| `alt+up`        | Move cursor to start of line (when text input has focus)        | `cursorHome`                                         |
| `alt+down`      | Move cursor to end of line (when text input has focus)          | `cursorEnd`                                          |
| `ctrl+cmd+e`    | Change all occurrences (when editor has focus and is not readonly) | `editor.action.changeAll`                            |
| `enter`         | Accept selected suggestion (when suggestion widget is visible and editor has focus) | `acceptSelectedSuggestion`               |
| `ctrl+shift+up` | Insert cursor above (when editor has focus)                     | `editor.action.insertCursorAbove`                    |
| `ctrl+shift+down`| Insert cursor below (when editor has focus)                     | `editor.action.insertCursorBelow`                    |
| `cmd+l`         | Go to specific line (when text input has focus)                 | `workbench.action.gotoLine`                          |
| `cmd+d`         | Duplicate selection (when editor has focus)                     | `editor.action.duplicateSelection`                   |
| `ctrl+i`        | Reindent selected lines (when editor has focus)                 | `editor.action.reindentselectedlines`                |
| `ctrl+cmd+j`    | Reveal definition (when editor has definition provider and focus)| `editor.action.revealDefinition`                     |

## Is your favorite shortcut missing?

Feel free to contribute by creating a pull request!

1. Go to [GitHub repository](https://github.com/robinsalehjan/vscode-xcode-shortcuts)

2. Open [`package.json`](https://github.com/robinsalehjan/vscode-xcode-shortcuts/blob/master/package.json)

3. Scroll down to `contributes.keybindings`
    ```
        {
                "contributes": {
                    "keybindings": [
                        ...
                    ]
                }

        }
    ```
4. Add your shortcut to `contributes.keybindings` for example:
    ```
        {
            "key": "command+my-awesome-hotkey",
            "command": "editor.action.addSelectionToNextFindMatch"
        }
    ```

    You can read more about what VSCode commands are available to you [here](https://code.visualstudio.com/docs/getstarted/keybindings#_basic-editing)

4. Open a pull request.
