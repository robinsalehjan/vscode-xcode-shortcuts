# [Xcode Shortcuts](https://marketplace.visualstudio.com/items?itemName=robinsalehjan.xcode-vscode-shortcuts)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/robinsalehjan/vscode-xcode-shortcuts/publish-extension-from-tag.yml)
![GitHub License](https://img.shields.io/github/license/robinsalehjan/vscode-xcode-shortcuts)
![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/robinsalehjan.xcode-vscode-shortcuts)
![GitHub Release](https://img.shields.io/github/v/release/robinsalehjan/vscode-xcode-shortcuts)

This extension adds your favorite `Xcode` keyboard shortcuts to Visual Studio Code!

## Request
### 🐛 [Found a bug](https://github.com/robinsalehjan/vscode-xcode-shortcuts/issues/new?assignees=&labels=bug&template=bug_report.md&title=)

### 💘 [Missing a shortcut](https://github.com/robinsalehjan/vscode-xcode-shortcuts/issues/new?assignees=&labels=feature+request&template=feature_request.md&title=)

## Contribute
### 💡 [How to create a new shortcut](docs/HOW-TO-CREATE-NEW-SHORTCUT.md)

##

| Shortcut           | Description                                                    | Command                                            |
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
| `ctrl+i`        | Reindent selected lines (when editor has focus and support for the language)                 | `editor.action.reindentselectedlines`                |
| `ctrl+cmd+j`    | Reveal definition (when editor has definition provider and focus)| `editor.action.revealDefinition`                     |
