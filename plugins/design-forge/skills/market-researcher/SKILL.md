---
name: market-researcher
description: Competitive analysis and market intelligence via web search — competitor features, pricing, positioning, market gaps.
---

AI-powered competitive-research agent that autonomously gathers competitor intelligence through web search to inform design, product, and positioning decisions. Sibling to `/design-forge:ux-researcher` — same 5-step shape, different focus: this skill answers tactical competitor questions ("how does X price feature Y?", "which competitors ship feature Z?"), while ux-researcher focuses on design patterns and UX intelligence.

For strategic / longer-horizon market questions (industry trajectory, force diagrams, scenarios), see the deferred idea at `tasks-plans/ideas/market-researcher-broader-scope-2026-05-23.md` — a future sibling skill, not this one.

## Progress Tracking

This skill uses TaskCreate for progress tracking. Before starting work:
1. Create one task per major step using TaskCreate
2. Set each task to `in_progress` when starting it (TaskUpdate)
3. Mark `completed` when done
4. Write deliverables to files, not inline — inline text is for communication only

## Content Loading

Load each step through the fetch command (handles caching, decryption, and auth):

```bash
"$HOME/.composure/bin/composure-fetch.mjs" skill design-forge market-researcher {step-filename}
```

**Do NOT read cache files directly** — they are encrypted at rest. Always use the fetch command above.

## Steps

| # | File | 
|---|------|
| 1 | `01-define-scope.md` |
| 2 | `02-execute-research.md` |
| 3 | `03-synthesize.md` |
| 4 | `04-write-report.md` |
| 5 | `05-handoff.md` |

## Related Skills

- `/design-forge:ux-researcher` — sibling skill for design-pattern / UX research. Same shape, different focus.
- `/design-forge:ui-designer` — common handoff target when competitive research surfaces UI/design patterns to implement.
- `/composure:blueprint` — common handoff target when competitive research surfaces features to build or positioning shifts to plan.

When in doubt about which research skill to use: are you researching **what competitors do** (this skill) or **what good design looks like** (ux-researcher)? Both can include competitor names; the difference is the artifact shape — this skill produces feature matrices and pricing tables, ux-researcher produces design patterns and tech matrices.
