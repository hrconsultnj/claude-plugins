<p align="center">
  <img src="assets/hero-ecosystem.png" alt="Composure — code quality, security, testing, CI/CD, and design for Claude Code" width="800">
</p>

# Composure

**A plugin system for Claude Code that catches architecture, security, and quality issues inline — before they reach a commit.**

Claude writes code fast. Composure makes sure it writes it right — enforcement hooks that run outside the model at zero token cost, architecture skills that load current patterns instead of stale training data, and a structural code graph that understands your whole project.

**Docs, account, and full reference → [composure-pro.com](https://composure-pro.com)**

> This repository is the public home for Composure — the showcase, use-cases, and where you file issues and pull requests. The plugins are distributed as a built artifact (see Install); the source lives in a separate maintained repository.

## Install

One command — fresh install or update, macOS / Linux / Windows:

```bash
pnpm dlx create-composure
```

It installs the suite, authenticates your account in the browser, and sets up `~/.composure/`. (`bunx`/`npx create-composure` also work.) Already inside Claude Code? Run `/composure:sync` to bring everything current.

Then initialize in any project:

```
/composure:initialize
```

Detects your stack, builds the code graph, and pulls in the companion plugins your project needs.

## What's in the suite

| Plugin | What it does |
|--------|--------------|
| **Composure** | Code-quality enforcement, architecture skills, the code graph, Cortex memory, and the task queue — the foundation the others build on. |
| **Sentinel** | Security — secret detection on every write, insecure-pattern blocking, dependency CVE auditing, HTTP header analysis. |
| **Testbench** | Convention-aware test generation that reads your existing tests to match style, plus coverage nudges. |
| **Shipyard** | CI/CD generation and validation — GitHub Actions / GitLab / Bitbucket, Dockerfiles, production-readiness checks. |
| **Design Forge** | Premium web design patterns — components, animations, 3D, accessibility-first. |

Full skill and hook reference lives on the website — this repo stays focused on showing what the suite does, not documenting every internal.

## How it works (three layers)

<p align="center">
  <img src="assets/hook-pipeline.png" alt="Composure's hook enforcement pipeline" width="800">
</p>

- **Hooks — the enforcer.** Shell scripts that fire on every Read/Edit/Write, outside the LLM at zero token cost. The agent can't bypass them.
- **Skills — the playbook.** Slash commands for architecture, security, testing, CI/CD, and audits — each loading current, framework-specific guidance.
- **The graph — the brain.** A multi-language SQLite knowledge graph of your whole project (code, migrations, config, docs) Claude queries for instant structural answers.

<p align="center">
  <img src="assets/multi-language.png" alt="Same enforcement across multiple languages" width="800">
</p>

## See it in action

Real scenarios where Composure does what vanilla Claude Code can't — full write-ups in **[use-cases/](use-cases/)**:

| Use case | What it shows |
|----------|---------------|
| [Code Graph vs Explore Agents](use-cases/graph-vs-explore/) | 30× fewer tokens, 9× faster, zero missed code |
| [Multi-Project Graph at Scale](use-cases/multi-project-graph/) | 15 projects, 100K nodes, 90× faster discovery |
| [12-Minute Vulnerability Resolution](use-cases/vulnerability-resolution/) | 4 CVEs patched in one session |
| [Blueprint vs Plan Mode](use-cases/blueprint-vs-plan-mode/) | 2.75× fewer tokens, higher-quality plans |
| [From Idea to Production](use-cases/full-organism-from-idea-to-production/) | One sentence → shipped feature |

→ **[Browse all use-cases](use-cases/)**

## Contributing & issues

Issues and pull requests are welcome here. See [CONTRIBUTING.md](CONTRIBUTING.md) and [CODEOWNERS](CODEOWNERS).

## Licensing

[PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0/) — see [LICENSE](LICENSE), [COMMERCIAL-LICENSE.md](COMMERCIAL-LICENSE.md), and [PRIVACY.md](PRIVACY.md). Plans and commercial licensing are on [composure-pro.com](https://composure-pro.com).
