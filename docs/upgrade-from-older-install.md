# Upgrading from an older install

Composure's install path has changed several times. If you installed an earlier version, you don't need to delete anything first. The current installer handles fresh installs and updates.

## How you may have installed it

- `claude plugin marketplace add hrconsultnj/claude-plugins`, then `claude plugin install composure@my-claude-plugins` (the marketplace was renamed to `composure-suite` in April 2026)
- `claude plugin marketplace add hrconsultnj/claude-plugins`, then `claude plugin install composure@composure-suite`
- `curl -fsSL https://composure-pro.com/install.sh | sh`
- `/plugin marketplace add hrconsultnj/composure-pro`

## Upgrade

1. See what's installed:
   ```bash
   claude plugin list
   claude plugin marketplace list
   ```
2. Check that you meet the requirements in the [README](../README.md#install).
3. Run the installer:
   ```bash
   pnpm dlx create-composure
   ```
   If you can already run Composure commands in Claude Code, `/composure:sync` also brings everything current.
4. If step 1 showed the old `my-claude-plugins` name, remove it. The installer adds `composure-suite` but doesn't remove other marketplaces.
   ```bash
   claude plugin uninstall composure@my-claude-plugins
   claude plugin marketplace remove my-claude-plugins
   ```
   Repeat the first command for any other plugin listed under that name.
5. In each project that has `.claude/no-bandaids.json`, run `/composure:sync` to move the config to `.composure/`.
6. Start a new Claude Code session and run `/composure:health`.
