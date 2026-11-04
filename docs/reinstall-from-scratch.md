# Reinstalling from scratch

Try re-running `pnpm dlx create-composure` first. It's safe to repeat, and it refreshes the install without removing your data.

If you still want a clean install, this removes the Claude Code side of Composure.

## 1. Decide what to keep

`~/.composure/` holds more than the install:

| Path | What it holds |
|---|---|
| `credentials.json` | Your sign-in. Keep it, because the installer treats a machine without this file as a first install and stops until you've signed in. |
| `cortex/` | Composure's memory |
| `sessions/` | Session history |
| `marketplace/` | The installed plugins, which the installer downloads again |

Back up `credentials.json`, `cortex/` and `sessions/` if you want them back. Treat the `credentials.json` copy like a password.

## 2. Remove the plugins

```bash
claude plugin uninstall composure@composure-suite
claude plugin uninstall sentinel@composure-suite
claude plugin uninstall shipyard@composure-suite
claude plugin uninstall testbench@composure-suite
claude plugin uninstall design-forge@composure-suite
claude plugin marketplace remove composure-suite
```

If you also use Composure in Codex or OpenCode, remove it there too.

## 3. Remove the files

Delete `~/.composure/`, leaving anything from step 1 that you want to keep.

## 4. Install again

Check the requirements in the [README](../README.md#install), then run:

```bash
pnpm dlx create-composure
```

Start a new Claude Code session and run `/composure:health`.
