const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const pkg = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '..', 'package.json'), 'utf8')
);
const keybindings = pkg.contributes.keybindings;

const shortcutsDoc = fs.readFileSync(
  path.resolve(__dirname, '..', 'docs', 'SHORTCUTS.md'),
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

  it('no duplicate keybindings (same key + when clause) on any platform', () => {
    for (const platform of ['key', 'mac', 'win', 'linux']) {
      const seen = new Set();
      for (const binding of keybindings) {
        const id = `${binding[platform]}|${binding.when || ''}`;
        assert.ok(
          !seen.has(id),
          `Duplicate ${platform} keybinding: "${binding[platform]}" when="${binding.when || ''}" (command: ${binding.command})`
        );
        seen.add(id);
      }
    }
  });

  it('no duplicate command + when clause (same command accidentally on different keys)', () => {
    const seen = new Set();
    for (const binding of keybindings) {
      const id = `${binding.command}|${binding.when || ''}`;
      assert.ok(
        !seen.has(id),
        `Duplicate command mapping: "${binding.command}" when="${binding.when || ''}" is bound to multiple keys`
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

  it('cross-platform key convention: cmd→ctrl, ctrl→win/super', () => {
    for (const binding of keybindings) {
      const mac = binding.mac;
      const win = binding.win;
      const linux = binding.linux;

      // Skip bindings identical across all platforms (e.g., ctrl+i where ctrl is used
      // literally on every OS, not as a platform-adaptive modifier substitute for cmd)
      if (mac === win && mac === linux) continue;

      const macParts = mac.split('+');
      const winParts = win.split('+');
      const linuxParts = linux.split('+');

      // Verify the base key (non-modifier final segment) is identical across platforms
      const macBase = macParts[macParts.length - 1];
      const winBase = winParts[winParts.length - 1];
      const linuxBase = linuxParts[linuxParts.length - 1];
      assert.equal(
        winBase,
        macBase,
        `Base key mismatch: mac="${mac}" ends with "${macBase}" but win="${win}" ends with "${winBase}" for ${binding.command}`
      );
      assert.equal(
        linuxBase,
        macBase,
        `Base key mismatch: mac="${mac}" ends with "${macBase}" but linux="${linux}" ends with "${linuxBase}" for ${binding.command}`
      );

      for (const part of macParts) {
        if (part === 'cmd') {
          assert.ok(
            winParts.includes('ctrl'),
            `"cmd" on Mac should map to "ctrl" on Win for ${binding.command} (mac="${mac}" win="${win}")`
          );
          assert.ok(
            linuxParts.includes('ctrl'),
            `"cmd" on Mac should map to "ctrl" on Linux for ${binding.command} (mac="${mac}" linux="${linux}")`
          );
        }
        if (part === 'ctrl') {
          assert.ok(
            winParts.includes('win'),
            `"ctrl" on Mac should map to "win" on Win for ${binding.command} (mac="${mac}" win="${win}")`
          );
          assert.ok(
            linuxParts.includes('super'),
            `"ctrl" on Mac should map to "super" on Linux for ${binding.command} (mac="${mac}" linux="${linux}")`
          );
        }
      }
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
      // Splits on && and strips leading !. The guard below rejects any when-clause
      // containing |, =, or ~ characters (catches ||, ==, !=, =~ operators). The regex
      // is intentionally broad to catch any unsupported operator syntax.
      // Extend the parser when those operators are first needed.
      assert.ok(
        !/[|=~]/.test(binding.when),
        `When-clause parser does not support operators in "${binding.when}" for ${binding.command}. ` +
        `Extend the parser to handle this syntax.`
      );
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

describe('SHORTCUTS.md sync', () => {
  function parseShortcutsTable() {
    const lines = shortcutsDoc.split('\n');
    const headerLine = lines.find(
      (line) => line.startsWith('|') && line.includes('Shortcut')
    );
    assert.ok(headerLine, 'SHORTCUTS.md table header row not found');
    const headerCells = headerLine
      .split('|')
      .map((c) => c.trim())
      .filter(Boolean);
    assert.equal(headerCells[0], 'Shortcut', 'SHORTCUTS.md table column 0 should be "Shortcut"');
    assert.equal(headerCells[4], 'Command', 'SHORTCUTS.md table column 4 should be "Command"');

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
      // cells: [shortcut, mac, win, linux, command, description] -- must match SHORTCUTS.md table column order.
      // Only mac/win/linux/command are extracted; shortcut is redundant with mac
      // (enforced by the 'key field matches mac platform key' test), description is not validated.
      assert.ok(
        cells.length >= 5,
        `SHORTCUTS.md table row has ${cells.length} columns, expected at least 5: "${line}"`
      );
      return {
        mac: cells[1].replace(/`/g, ''),
        win: cells[2].replace(/`/g, ''),
        linux: cells[3].replace(/`/g, ''),
        command: cells[4].replace(/`/g, ''),
      };
    });
  }

  const shortcutsEntries = parseShortcutsTable();

  it('every package.json keybinding has a SHORTCUTS.md table row', () => {
    // Match on command only; backtick keys (cmd+`) can't be represented faithfully
    // in markdown code spans, so mac-key matching would produce false negatives.
    // This is safe because the structural test above ensures no duplicate command+when pairs exist.
    const shortcutsCommands = new Set(shortcutsEntries.map((e) => e.command));

    for (const binding of keybindings) {
      assert.ok(
        shortcutsCommands.has(binding.command),
        `Command "${binding.command}" (key: ${binding.key}) is in package.json but missing from SHORTCUTS.md`
      );
    }
  });

  it('every SHORTCUTS.md table row has a package.json keybinding', () => {
    const pkgCommands = new Set(keybindings.map((b) => b.command));

    for (const entry of shortcutsEntries) {
      assert.ok(
        pkgCommands.has(entry.command),
        `Command "${entry.command}" is in SHORTCUTS.md but missing from package.json`
      );
    }
  });

  it('SHORTCUTS.md platform keys match package.json', () => {
    // Commands whose keys contain backtick (`) cannot be compared because the
    // backtick breaks markdown code span parsing, producing garbled cell values.
    const backtickCommands = new Set(['workbench.action.terminal.newWithCwd']);

    for (const binding of keybindings) {
      if (backtickCommands.has(binding.command)) continue;

      const shortcutsEntry = shortcutsEntries.find(
        (e) => e.command === binding.command
      );
      assert.ok(
        shortcutsEntry,
        `No SHORTCUTS.md entry found for command="${binding.command}" — cannot verify platform keys`
      );

      assert.equal(
        shortcutsEntry.mac,
        binding.mac,
        `Mac key mismatch for ${binding.command}: SHORTCUTS.md="${shortcutsEntry.mac}" vs package.json="${binding.mac}"`
      );
      assert.equal(
        shortcutsEntry.win,
        binding.win,
        `Win key mismatch for ${binding.command}: SHORTCUTS.md="${shortcutsEntry.win}" vs package.json="${binding.win}"`
      );
      assert.equal(
        shortcutsEntry.linux,
        binding.linux,
        `Linux key mismatch for ${binding.command}: SHORTCUTS.md="${shortcutsEntry.linux}" vs package.json="${binding.linux}"`
      );
    }
  });
});
