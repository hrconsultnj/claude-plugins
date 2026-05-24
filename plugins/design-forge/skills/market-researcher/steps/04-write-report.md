# Step 4: Write Report

**MANDATORY: Write the full report to a file. Never output the full report into the conversation.**

## File Output

1. Create `tasks-plans/research/` directory if it doesn't exist
2. Write the full report to `tasks-plans/research/market-{topic}-{YYYY-MM-DD}.md`
3. Use kebab-case for the topic slug (e.g., `market-linear-vs-jira-2026-05-23.md`, `market-time-tracking-pricing-2026-05-23.md`)
4. Prefix the filename with `market-` to distinguish from `ux-researcher` outputs in the same directory
5. Include open action items as `- [ ]` checklist near the top (after summary) so backlog can scan them

## Report Template

```markdown
# Market Research: {Topic}

**Date:** {YYYY-MM-DD}
**Research Type:** {Competitor Deep-Dive | Feature Matrix Audit | Pricing Intelligence | Positioning Study | Market Gap Hunt}
**Competitors Studied:** {comma-separated list}
**Business Question:** {one sentence — the decision this informs}

## Classification

- segment: {smb | mid-market | enterprise | prosumer | regulated}
- market_maturity: {emerging | growing | mature | consolidating}
- competitive_intensity: {low | moderate | high | hyper-competitive}
- pricing_model_dominant: {per-seat | usage-based | flat | freemium-to-paid | tiered}

## Action Items

- [ ] {Concrete action #1 implied by the gap list}
- [ ] {Concrete action #2}
- [ ] {Concrete action #3}

## Executive Summary

{3-5 sentences. The business question, the strongest 1-2 findings, and the implication.
No vibes, no "this is interesting" — only what changes a decision.}

## Feature Matrix

{Artifact 1 from Step 3 — full table with notes.}

## Pricing Table

{Artifact 2 from Step 3 — full table with freshness footnote and contract assumptions.}

## Positioning Quadrant

{Artifact 3 from Step 3 — ASCII or markdown rendering with axis justification.}

## Market Gaps

{Artifact 4 from Step 3 — 3-5 named gaps, each with sources, closest-competitor, and implication.}

## Per-Competitor Summaries

{One subsection per competitor, ~150 words each.
Stage / size / funding signal, target customer in their own words,
unique strengths, observed weaknesses (sourced), recent direction (last 12 months).}

### {Competitor A}
{...}

### {Competitor B}
{...}

## Sources

{Bulleted list of every URL the report draws from, grouped by competitor + reviewer/community.
Include access date for any cache/archive.org links. This is the audit trail for the report.}

## Open Questions

{What the research couldn't conclusively answer and why. These are honest gaps —
they're the prompts for the next research cycle, not weaknesses in this one.}
```

## Classification Block (Required)

Every report MUST include the `## Classification` block shown in the template above. This bridges market-research output into downstream skill routing (so `/composure:blueprint` and `/design-forge:ui-designer` can both consume it).

Determine values from your research:
- **segment**: who the studied competitors target — match the dominant pattern across the set
- **market_maturity**: emerging (most competitors <3 years old, no clear leader) → consolidating (dominant 1-2 players, M&A happening)
- **competitive_intensity**: count credible competitors in segment; <3 = low, 3-8 = moderate, 8-15 = high, 15+ = hyper-competitive
- **pricing_model_dominant**: which pricing model >50% of competitors use

## Pro Tips for Report Quality

1. **Name names** — "a major competitor" is useless; "Linear" is useful
2. **Cite sources inline** — every claim earns a footnote or parenthetical URL
3. **Date pricing claims** — pricing rots fast; always include "as of {date}"
4. **Normalize feature names** — "task lists" vs "to-dos" vs "items" all mean the same; pick one and translate
5. **Surface ranges, not points** — "Competitor pricing $15-$200/user/mo, mode $30" beats "around $30"
6. **Flag your uncertainty** — "Inferred from job posting, not confirmed in product" is a strength, not a weakness
7. **Make gaps actionable** — every gap closes a decision; if it doesn't, why is it in the report?
8. **Bias recent** — last 12 months > all-time, unless Step 1 specified all-time
9. **Avoid "competitor X is bad"** — "Competitor X scored 3.2/5 on G2 (n=147) with churn cited in 21% of negative reviews" is sourced; "bad" is a vibe
10. **Write for the decision** — re-read the Step 1 business question before finishing the executive summary; if your summary doesn't answer it, rewrite

---

**Next:** Read `steps/05-handoff.md`


## Signature

Append this line at the bottom of any research report:

```
📊 Market research by [Design Forge](https://composure-pro.com)
```
