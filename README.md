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

| Shortcut             | Mac             | Win              | Linux            | Command                                             | Description                                                                 |
|----------------------|-----------------|------------------|------------------|-----------------------------------------------------|-----------------------------------------------------------------------------|
| `cmd+e`              | `cmd+e`         | `ctrl+e`         | `ctrl+e`         | `editor.action.addSelectionToNextFindMatch`         | Add selection to next find match                                            |
| `cmd+shift+j`        | `cmd+shift+j`   | `ctrl+shift+j`   | `ctrl+shift+j`   | `workbench.files.action.showActiveFileInExplorer`   | Show active file in explorer                                                |
| `cmd+ctrl+up`        | `cmd+ctrl+up`   | `ctrl+win+up`    | `ctrl+super+up`  | `C_Cpp.SwitchHeaderSource`                         | Switch between header and source file                                       |
| `shift+cmd+]`        | `shift+cmd+]`   | `shift+ctrl+]`   | `shift+ctrl+]`   | `workbench.action.nextEditor`                      | Move to next editor                                                         |
| `shift+cmd+[`        | `shift+cmd+[`   | `shift+ctrl+[`   | `shift+ctrl+[`   | `workbench.action.previousEditor`                  | Move to previous editor                                                     |
| `cmd+shift+y`        | `cmd+shift+y`   | `ctrl+shift+y`   | `ctrl+shift+y`   | `workbench.action.togglePanel`                     | Toggle panel visibility                                                     |
| `cmd+shift+o`        | `cmd+shift+o`   | `ctrl+shift+o`   | `ctrl+shift+o`   | `workbench.action.quickOpen`                       | Quick open files or commands                                                |
| `cmd+ctrl+left`      | `cmd+ctrl+left` | `ctrl+win+left`  | `ctrl+super+left`| `workbench.action.navigateBack`                    | Navigate back                                                               |
| `cmd+ctrl+right`     | `cmd+ctrl+right`| `win+ctrl+right` | `super+ctrl+right`| `workbench.action.navigateForward`                 | Navigate forward                                                            |
| `cmd+1`              | `cmd+1`         | `ctrl+1`         | `ctrl+1`         | `workbench.view.explorer`                          | Open Explorer view                                                          |
| `cmd+2`              | `cmd+2`         | `ctrl+2`         | `ctrl+2`         | `workbench.view.search`                            | Open Search view                                                            |
| `cmd+3`              | `cmd+3`         | `ctrl+3`         | `ctrl+3`         | `workbench.view.scm`                               | Open Source Control view                                                    |
| `cmd+4`              | `cmd+4`         | `ctrl+4`         | `ctrl+4`         | `workbench.view.debug`                             | Open Debug view                                                             |
| `cmd+5`              | `cmd+5`         | `ctrl+5`         | `ctrl+5`         | `workbench.view.extensions`                        | Open Extensions view                                                        |
| `cmd+r`              | `cmd+r`         | `ctrl+r`         | `ctrl+r`         | `workbench.action.debug.start`                     | Start debug (when not in debug mode)                                        |
| `cmd+r`              | `cmd+r`         | `ctrl+r`         | `ctrl+r`         | `workbench.action.debug.restart`                   | Restart debug (when in debug mode)                                          |
| `cmd+.`              | `cmd+.`         | `ctrl+.`         | `ctrl+.`         | `workbench.action.debug.stop`                      | Stop debug (when in debug mode)                                             |
| `cmd+b`              | `cmd+b`         |                  |                  | `workbench.action.tasks.build`                     | Run build task                                                              |
| `cmd+u`              | `cmd+u`         |                  |                  | `workbench.action.tasks.test`                      | Run test task                                                               |
| `cmd+0`              | `cmd+0`         |                  |                  | `workbench.action.toggleSidebarVisibility`         | Toggle sidebar visibility                                                   |
| `ctrl+right`         | `ctrl+right`    | `win+right`      | `super+right`    | `cursorWordPartRight`                              | Move cursor word part right (when text input has focus)                     |
| `shift+ctrl+right`   | `shift+ctrl+right`| `shift+win+right`| `shift+super+right`| `cursorWordPartRightSelect`                    | Select word part right (when text input has focus)                          |
| `ctrl+left`          | `ctrl+left`     | `win+left`       | `super+left`     | `cursorWordPartStartLeft`                          | Move cursor word part start left (when text input has focus)                |
| `shift+ctrl+left`    | `shift+ctrl+left`| `shift+win+left` | `shift+super+left`| `cursorWordPartStartLeftSelect`                  | Select word part start left (when text input has focus)                     |
| `ctrl+backspace`     | `ctrl+backspace`| `win+backspace`  | `super+backspace`| `deleteWordPartLeft`                               | Delete word part left (when text input has focus and editor is not readonly)|
| `shift+ctrl+backspace`| `shift+ctrl+backspace`| `shift+win+backspace`| `shift+super+backspace`| `deleteWordPartRight`                  | Delete word part right (when text input has focus and editor is not readonly)|
| `alt+cmd+left`       |                 |                  |                  | `editor.fold`                                      | Fold code                                                                   |
| `alt+cmd+right`      |                 |                  |                  | `editor.unfold`                                    | Unfold code                                                                 |
| `alt+cmd+[`          |                 |                  |                  | `editor.action.moveLinesUpAction`                  | Move lines up                                                               |
| `alt+cmd+]`          |                 |                  |                  | `editor.action.moveLinesDownAction`                | Move lines down                                                             |
| `alt+up`             | `alt+up`        | `alt+up`         | `alt+up`         | `cursorHome`                                       | Move cursor to start of line (when text input has focus)                    |
| `alt+down`           | `alt+down`      | `alt+down`       | `alt+down`       | `cursorEnd`                                        | Move cursor to end of line (when text input has focus)                      |
| `ctrl+cmd+e`         | `ctrl+cmd+e`    | `win+ctrl+e`     | `super+ctrl+e`   | `editor.action.changeAll`                          | Change all occurrences (when editor has focus and is not readonly)          |
| `enter`              | `enter`         | `enter`          | `enter`          | `acceptSelectedSuggestion`                         | Accept selected suggestion (when suggestion widget is visible and editor has focus)|
| `ctrl+shift+up`      | `ctrl+shift+up` | `win+shift+up`   | `super+shift+up` | `editor.action.insertCursorAbove`                  | Insert cursor above (when editor has focus)                                 |
| `ctrl+shift+down`    | `ctrl+shift+down`| `win+shift+down` | `super+shift+down`| `editor.action.insertCursorBelow`                | Insert cursor below (when editor has focus)                                 |
| `cmd+l`              | `cmd+l`         | `ctrl+l`         | `ctrl+l`         | `workbench.action.gotoLine`                        | Go to specific line (when text input has focus)                             |
| `ctrl+i`             | `ctrl+i`        | `ctrl+i`         | `ctrl+i`         | `editor.action.reindentselectedlines`              | Reindent selected lines (when editor has focus and support for the language)|
| `cmd+d`              | `cmd+d`         | `ctrl+d`         | `ctrl+d`         | `editor.action.duplicateSelection`                 | Duplicate selection (when editor has focus)                                 |
| `cmd+\`            | `cmd+\`        | `ctrl+\`        | `ctrl+\`        | `workbench.action.terminal.newWithCwd`             | Open new terminal at file directory                                         |
