# Step 3: Synthesize Findings into Market Artifacts

Consolidate all research from Step 2 into four named artifacts before writing the report. Each artifact has a specific shape and purpose — the report assembles them; this step produces them.

## Synthesis Process

```yaml
synthesis_process:
  - Normalize feature naming across competitors (they use different words for the same thing)
  - Verify pricing freshness (pricing pages change; flag any stale-cache source)
  - Cluster reviewer complaints by theme (don't list 47 individual review quotes)
  - Pick positioning axes from the business question (Step 1) — not arbitrary
  - Surface market gaps explicitly — these are the report's most actionable output
```

## Artifact 1: Feature Matrix

A table with **rows = features under study**, **columns = competitors**, **cells = support level**.

| Feature | Competitor A | Competitor B | Competitor C |
|---|---|---|---|
| Feature X | ✓ (note: tier 2+ only) | ✓ | ✗ |
| Feature Y | ✓ | Partial (no Z) | ✓ |
| Feature Z | ✗ | ✓ | Beta |

Cells use: `✓` (full support), `✗` (no support), `Partial` (with one-liner what's missing), `Beta` (with link if available). Always include the **note one-liner** when there's nuance — a bare ✓ that's actually "tier-3-only" is misleading.

## Artifact 2: Pricing Table

A table with **rows = pricing tiers**, **columns = competitors**, **cells = price + key inclusions**.

| Tier | Competitor A | Competitor B | Competitor C |
|---|---|---|---|
| Free / Trial | 14-day trial | Free tier (5 users) | No free option |
| Entry | $20/user/mo | $15/user/mo | $30/user/mo |
| Mid | $50/user/mo | $40/user/mo | $75/user/mo |
| Enterprise | Contact sales | Contact sales | $200/user/mo published |

Always include:
- **Freshness footnote** — "Pricing accurate as of {date} per {source}; competitor pricing changes ~quarterly"
- **Contract assumption** — most competitors price monthly but offer annual discount; note the assumption explicitly
- **Hidden costs** — onboarding fees, per-seat minimums, usage overages

## Artifact 3: Positioning Quadrant

A 2-axis chart with competitors plotted as dots. Axes come from the **business question identified in Step 1** — not from a generic template. Common axis pairs by question type:

| Business question | Likely X-axis | Likely Y-axis |
|---|---|---|
| "Where do we fit?" | Ease of use ←→ Power/depth | Self-serve ←→ Sales-led |
| "Who do we threaten?" | Price (low ←→ high) | Feature breadth (narrow ←→ broad) |
| "Where's the white space?" | Target segment (SMB ←→ enterprise) | Workflow scope (point-tool ←→ platform) |

Render as a text-based quadrant in the report:

```
              High Power
                 │
   Competitor A  │  Competitor B
                 │
─────────────────┼─────────────────
                 │
   Competitor C  │  Competitor D
                 │
              Low Power
   Easy ←─────────────────→ Hard
```

Always note which axes were chosen and **why** (tie back to the Step 1 business question).

## Artifact 4: Market Gap List

The most actionable output. Each gap should:
- State the unmet need (from reviewer complaints, founder interviews, or absent-feature analysis)
- Cite 2+ sources (don't make a gap call from a single reviewer)
- Note which competitor is closest to addressing it (often the answer is "none — that's why it's a gap")
- Suggest a one-line implication for design / product / positioning

Example:

> **Gap: No competitor in this segment offers offline-first sync.**
> Sources: 14+ G2 reviews mentioning "wish it worked offline" across A and B; founder of C explicitly said offline is "not on roadmap" in 2026-03 podcast; D pivoted away from offline last year.
> Closest: A has a read-only PWA mode but writes require online.
> Implication: offline-first could be a positioning wedge for SMB/field-work segments.

## Checklist

Before proceeding to the report, verify:

1. **Feature matrix is complete** — every cell filled (use ✗ explicitly, never blank)
2. **Pricing table has freshness footnote** — stale pricing is worse than no pricing
3. **Positioning quadrant axes are justified** — tied to the Step 1 business question
4. **Market gap list has 3-5 gaps** — not 1 (probably missed signals) and not 15 (probably padding)
5. **Every gap has 2+ sources** — single-source gaps are anecdotes
6. **Sourcing audit** — every claim in every artifact traces to a URL in the research corpus

## Quality Gate

Before writing the report, verify you have:
- **Specific competitor data** (named tiers, named features, dated changelogs)
- **Numeric or categorical comparisons** (not vibes — "Competitor A is good at" is not synthesis)
- **Source URLs for every claim** (no untracked assertions)
- **Gaps backed by reviewer evidence** (not just absence-of-feature analysis)
- **A clear positioning story** (where the user's product fits relative to the plotted competitors)

If any of these are missing, go back to Step 2 and fill the gaps.

---

**Next:** Read `steps/04-write-report.md`
