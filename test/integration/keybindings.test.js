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

suite('Extension Integration', () => {
  test('extension is recognized by VS Code', () => {
    const ext = vscode.extensions.getExtension(
      `${pkg.publisher}.${pkg.name}`
    );
    assert.ok(
      ext,
      `Extension ${pkg.publisher}.${pkg.name} not found`
    );
  });

  test('extension contributes expected number of keybindings', () => {
    const ext = vscode.extensions.getExtension(
      `${pkg.publisher}.${pkg.name}`
    );
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

    // Commands from other extensions that may not be present
    const optionalCommands = new Set([
      'C_Cpp.SwitchHeaderSource', // Requires C/C++ extension
    ]);

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
