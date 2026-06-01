# Contributing to Composure

Thanks for helping improve Composure. Please read this first — **how you contribute depends on what you're changing.**

## This repository is the public face, not the source

This repo is the public home for Composure — the README showcase, the [use-cases/](use-cases/), and where the community files **issues and pull requests**. The plugins themselves (skills, hooks, MCP servers, patterns) are built and distributed as a signed payload via `create-composure` and `/composure:sync`; their source is maintained separately. That means **code does not ship from this repo** — so where a change can land depends on its type.

## Two contribution paths

### ✅ Pull requests — for shell content only

Open a PR directly against this repo for:

- **README** fixes and improvements
- **Use-cases** — new write-ups in [use-cases/](use-cases/), or improvements to existing ones (and their images in `assets/`)
- **Docs** — typos, clarity, broken links
- **`.github/`** templates

These are the things this repo actually contains, so a PR here is reviewed and merged here. Use the PR template.

### 💡 Issues — for plugin / skill / hook / code changes

For anything that changes how the plugins *behave* — a skill, a hook, an enforcement rule, a new language, a bug in the installed product — **open an issue, don't open a code PR.** A code PR against this repo can't be merged into the product (the source lives elsewhere), so it would sit unmergeable.

In your issue, include:

- **What** you'd change and **why** (the problem it solves)
- A concrete example — the pattern, the rule, the repro for a bug
- For bug reports: Claude Code version, plugin version (`/composure:health`), steps to reproduce, expected vs. actual

A maintainer takes it from there: the change is implemented in the maintained source, shipped in the next payload release, and your issue is closed with a link to the release that carries it. You get the fix in the product even though the code didn't merge here.

> **Why issues for code?** The product source is private to protect the licensed pattern catalog. That keeps the public repo lean and the install path signed — and means the public contribution path for behavior is *idea-first* (issue), with the maintainer as the bridge to the shipping pipeline.

## Reporting bugs

Open an issue (see above) — bugs in the installed plugins are the **issue** path, not a PR, for the same reason.

## Code of Conduct

Be respectful. Focus on technical merit. Help others learn.

## License

By contributing, you agree your contributions are licensed under [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/).
