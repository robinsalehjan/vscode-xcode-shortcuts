const assert = require('assert');
const vscode = require('vscode');
const path = require('path');
const fs = require('fs');

const pkg = JSON.parse(
  fs.readFileSync(
    path.resolve(__dirname, '../../package.json'),
    'utf8'
  )
);
const keybindings = pkg.contributes.keybindings;
const extensionId = `${pkg.publisher}.${pkg.name}`;

// Commands from third-party extensions are not available during testing because
// VS Code is launched with --disable-extensions (see run.js). The extension under
// test is still loaded via extensionDevelopmentPath, but third-party dependencies
// like C/C++ are not.
const optionalCommands = new Set([
  'C_Cpp.SwitchHeaderSource',
]);

suite('Extension Integration', () => {
  test('extension is recognized by VS Code', () => {
    const ext = vscode.extensions.getExtension(extensionId);
    assert.ok(ext, `Extension ${extensionId} not found`);
  });

  test('extension contributes expected number of keybindings', () => {
    const ext = vscode.extensions.getExtension(extensionId);
    const contributed = ext.packageJSON.contributes.keybindings;
    assert.strictEqual(
      contributed.length,
      keybindings.length,
      `Expected ${keybindings.length} keybindings, got ${contributed.length}`
    );
  });

  test('all keybinding commands exist in VS Code', async () => {
    const allCommands = await vscode.commands.getCommands(true);
    const commandSet = new Set(allCommands);

    const missing = [];
    for (const binding of keybindings) {
      if (optionalCommands.has(binding.command)) continue;
      if (!commandSet.has(binding.command)) {
        missing.push(binding.command);
      }
    }

    assert.deepStrictEqual(
      missing,
      [],
      `Commands not found in VS Code: ${missing.join(', ')}`
    );
  });
});

suite('Keybinding Contributions', () => {
  test('each contributed keybinding matches expected key, command, and when clause', () => {
    const ext = vscode.extensions.getExtension(extensionId);
    const contributed = ext.packageJSON.contributes.keybindings;

    for (const expected of keybindings) {
      const match = contributed.find(
        (c) => c.command === expected.command && c.key === expected.key
      );
      assert.ok(
        match,
        `Missing contribution: key="${expected.key}" command="${expected.command}"`
      );
      assert.strictEqual(
        match.when || undefined,
        expected.when || undefined,
        `"when" mismatch for ${expected.command}: expected "${expected.when}", got "${match.when}"`
      );
      assert.strictEqual(
        match.mac,
        expected.mac,
        `"mac" mismatch for ${expected.command}: expected "${expected.mac}", got "${match.mac}"`
      );
      assert.strictEqual(
        match.win,
        expected.win,
        `"win" mismatch for ${expected.command}: expected "${expected.win}", got "${match.win}"`
      );
      assert.strictEqual(
        match.linux,
        expected.linux,
        `"linux" mismatch for ${expected.command}: expected "${expected.linux}", got "${match.linux}"`
      );
    }
  });
});

suite('Command Execution', () => {
  // Commands that are safe to execute without specific editor/debug state
  const safeCommands = [
    'workbench.view.explorer',
    'workbench.view.search',
    'workbench.view.scm',
    'workbench.view.debug',
    'workbench.view.extensions',
    'workbench.action.togglePanel',
    'workbench.action.toggleSidebarVisibility',
    'workbench.action.quickOpen',
    'workbench.action.gotoSymbol',
  ];

  for (const command of safeCommands) {
    test(`command executes without error: ${command}`, async () => {
      await vscode.commands.executeCommand(command);
    });
  }

  // Commands that require an open editor -- suiteSetup below opens one before
  // all tests in this suite. The safeCommands above tolerate the open editor harmlessly.
  const editorCommands = [
    'workbench.action.gotoLine',
    'editor.action.quickFix',
  ];

  let editor;

  suiteSetup(async () => {
    try {
      const doc = await vscode.workspace.openTextDocument({
        content: 'test content\nline two\nline three',
        language: 'plaintext',
      });
      editor = await vscode.window.showTextDocument(doc);
      assert.ok(editor, 'showTextDocument returned falsy');
    } catch (err) {
      throw new Error(
        `suiteSetup failed to open a text document; all tests in this suite will fail. ` +
        `Original error: ${err?.message ?? err}`
      );
    }
  });

  for (const command of editorCommands) {
    test(`command executes without error: ${command}`, async () => {
      assert.ok(editor, 'No editor available — suiteSetup failed');
      await vscode.commands.executeCommand(command);
    });
  }
});
