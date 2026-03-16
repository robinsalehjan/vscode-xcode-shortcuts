const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')
);
const keybindings = pkg.contributes.keybindings;

const readme = fs.readFileSync(
  path.resolve(__dirname, '..', 'README.md'),
  'utf8'
);

describe('Keybinding structure', () => {
  it('every keybinding has key and command', () => {
    for (const binding of keybindings) {
      assert.ok(binding.key, `Missing "key" in binding for ${binding.command}`);
      assert.ok(
        binding.command,
        `Missing "command" in binding with key ${binding.key}`
      );
    }
  });

  it('every keybinding has all three platform keys', () => {
    for (const binding of keybindings) {
      assert.ok(
        binding.mac,
        `Missing "mac" key for ${binding.key} -> ${binding.command}`
      );
      assert.ok(
        binding.win,
        `Missing "win" key for ${binding.key} -> ${binding.command}`
      );
      assert.ok(
        binding.linux,
        `Missing "linux" key for ${binding.key} -> ${binding.command}`
      );
    }
  });

  it('no duplicate keybindings (same key + when clause)', () => {
    const seen = new Set();
    for (const binding of keybindings) {
      const id = `${binding.key}|${binding.when || ''}`;
      assert.ok(
        !seen.has(id),
        `Duplicate keybinding: key="${binding.key}" when="${binding.when || ''}" (command: ${binding.command})`
      );
      seen.add(id);
    }
  });

  it('key field matches mac platform key', () => {
    for (const binding of keybindings) {
      assert.equal(
        binding.key,
        binding.mac,
        `"key" (${binding.key}) does not match "mac" (${binding.mac}) for ${binding.command}`
      );
    }
  });

  it('commands look like valid VS Code command IDs', () => {
    const validPattern = /^[a-zA-Z_][a-zA-Z0-9_.]*$/;
    for (const binding of keybindings) {
      assert.match(
        binding.command,
        validPattern,
        `Invalid command ID: "${binding.command}"`
      );
    }
  });

  it('when clauses use known context keys', () => {
    const knownContextKeys = [
      'editorTextFocus',
      'textInputFocus',
      'inDebugMode',
      'editorReadonly',
      'suggestWidgetVisible',
    ];
    for (const binding of keybindings) {
      if (!binding.when) continue;
      // Extract context keys (strip ! prefix and && operators)
      const keys = binding.when
        .split('&&')
        .map((k) => k.trim().replace(/^!/, ''));
      for (const key of keys) {
        assert.ok(
          knownContextKeys.includes(key),
          `Unknown context key "${key}" in when clause "${binding.when}" for ${binding.command}`
        );
      }
    }
  });
});

describe('README sync', () => {
  // Parse README table rows into command entries
  function parseReadmeTable() {
    const lines = readme.split('\n');
    const tableLines = lines.filter(
      (line) =>
        line.startsWith('|') &&
        !line.includes('---') &&
        !line.includes('Shortcut')
    );
    return tableLines.map((line) => {
      const cells = line
        .split('|')
        .map((c) => c.trim())
        .filter(Boolean);
      // cells: [shortcut, mac, win, linux, command, description]
      return {
        mac: cells[1]?.replace(/`/g, ''),
        win: cells[2]?.replace(/`/g, ''),
        linux: cells[3]?.replace(/`/g, ''),
        command: cells[4]?.replace(/`/g, ''),
      };
    });
  }

  it('every package.json keybinding has a README table row', () => {
    const readmeEntries = parseReadmeTable();
    const readmeCommands = new Set(readmeEntries.map((e) => e.command));

    for (const binding of keybindings) {
      assert.ok(
        readmeCommands.has(binding.command),
        `Command "${binding.command}" (key: ${binding.key}) is in package.json but missing from README`
      );
    }
  });

  it('every README table row has a package.json keybinding', () => {
    const readmeEntries = parseReadmeTable();
    const pkgCommands = new Set(keybindings.map((b) => b.command));

    for (const entry of readmeEntries) {
      assert.ok(
        pkgCommands.has(entry.command),
        `Command "${entry.command}" is in README but missing from package.json`
      );
    }
  });

  it('README platform keys match package.json', () => {
    const readmeEntries = parseReadmeTable();

    for (const binding of keybindings) {
      const readmeEntry = readmeEntries.find(
        (e) => e.command === binding.command && e.mac === binding.mac
      );
      if (!readmeEntry) continue; // covered by other test

      assert.equal(
        readmeEntry.win,
        binding.win,
        `Win key mismatch for ${binding.command}: README="${readmeEntry.win}" vs package.json="${binding.win}"`
      );
      assert.equal(
        readmeEntry.linux,
        binding.linux,
        `Linux key mismatch for ${binding.command}: README="${readmeEntry.linux}" vs package.json="${binding.linux}"`
      );
    }
  });
});
