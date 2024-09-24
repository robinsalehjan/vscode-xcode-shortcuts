# Xcode shorts for VSCode

This extension ports Xcode keyboard shortcuts to Visual Studio Code. Once you installed the extension and restarted VSCode your favorite Xcode keyboard shortcuts are now available in VSCode!

## How do I suggest a new shortcut?

If you feel like we're missing a Xcode keyboard shortcut, feel free to contribute by creating a PR 😍

1. Go to [GitHub repository](https://github.com/robinsalehjan/vscode-xcode-shortcuts).

2. Open [`package.json`](https://github.com/robinsalehjan/vscode-xcode-shortcuts/blob/master/package.json).

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
4. Add your Xcode shortcut to `contributes.keybindings`
    ```
        {
            "key": "command+my-awesome-hotkey",
            "command": "editor.action.addSelectionToNextFindMatch"
        }
    ```

    You can read more about what VSCode commands are available to you here [here](https://code.visualstudio.com/docs/getstarted/keybindings#_basic-editing)

4. Open a pull request.

## What keyboard shortcuts are included?

