# Step 5: Hand Off — Context-Aware Routing

The research file at `tasks-plans/research/market-{topic}-{date}.md` is the handoff artifact. The NEXT skill depends on what the research surfaced — not every market-research output leads to the same next step.

## 1. Classify the Research Output

Read the report you just wrote. Classify by the PRIMARY content of the gap list and implications:

| Type | Signals in the report | Routes to |
|------|----------------------|-----------|
| **DESIGN** | Gaps in UI / UX patterns, positioning by visual identity, design-language differentiation, screen flows, onboarding patterns | `/design-forge:ui-designer` |
| **ARCHITECTURE** | Missing features competitors don't ship, pricing-model shifts, platform expansion (web→mobile, single-tenant→multi-tenant), integrations, new product surfaces | `/composure:blueprint` |
| **IDEA** | Strategic positioning shifts, unclear-winner decisions, "should we enter this market?" — exploratory, no clear implementation | `/composure:backlog add IDEA: {topic}` |
| **STRATEGIC** | Industry-trajectory or scenario-planning questions surfaced during research that go beyond the focused scope of this skill | See `tasks-plans/ideas/market-researcher-broader-scope-2026-05-23.md` |

**When in doubt:** If the research describes WHAT FEATURE TO BUILD → ARCHITECTURE. If it describes HOW IT SHOULD LOOK or POSITION → DESIGN. If it's exploring WHETHER to enter or shift → IDEA. If it's about WHERE THE MARKET IS HEADING → STRATEGIC (deferred sibling skill).

## 2. Create TaskCreate Entries (MANDATORY)

Before presenting the handoff, **always** create TaskCreate entries that break down what you understood from the research. This gives the user visibility into:

- What Claude extracted as the key competitor findings
- How the user's business question was decomposed into action
- What specific items are now tracked (nothing lost from the prompt)

**For each market gap that maps to a buildable action:**
1. Create a TaskCreate with a clear, actionable subject
2. Description should include: the gap, the source evidence, and the implication
3. Group related items — don't create 20 micro-tasks, aim for 3-7 meaningful ones

**Example for pricing-intelligence research:**
```
Task: "Reprice Pro tier $40→$30 to close gap vs Competitor B's $25 mid-tier"
Task: "Add usage-based add-on (per gap analysis: 11/15 competitors offer overage pricing)"
Task: "Publish enterprise pricing page (only 3/15 competitors hide enterprise pricing — most publish $200-500/seat)"
Task: "A/B test annual-discount % — current 20% trails competitor median 25%"
```

These tasks persist beyond the context window and give the user a concrete checklist.

## 3. Conversation Output

In the conversation, output ONLY:

### For DESIGN classification:
1. Classification summary (segment + research-type in one line)
2. 3-5 line summary of the key positioning / design finding
3. Strongest market gap with one-line implication
4. Path to the full report
5. Tasks created (count)
6. "Read the report and run `/design-forge:ui-designer` to translate findings into design."

### For ARCHITECTURE classification:
1. Classification summary (segment + research-type in one line)
2. 3-5 line summary of what needs to be built
3. Key feature/pricing decision with one-line rationale
4. Path to the full report
5. Tasks created (count)
6. "Read the report and run `/composure:blueprint` to plan implementation."

### For IDEA classification:
1. Classification summary (segment + maturity in one line)
2. 3-5 line summary of what was explored
3. Open questions that need answers before deciding
4. Path to the full report
5. Tasks created (count)
6. "Research captured as exploratory. Run `/composure:blueprint` with a specific feature when ready, or `/composure:backlog add IDEA: {topic}` to defer."

### For STRATEGIC classification:
1. Classification summary noting the research surfaced strategic-horizon questions beyond this skill's focused scope
2. 2-3 sentences on what the strategic questions are
3. Pointer: "These questions are bigger than competitor analysis — they need industry trajectory and scenario work. See the deferred follow-up at `tasks-plans/ideas/market-researcher-broader-scope-2026-05-23.md`; run `/composure:blueprint` against that idea when you're ready to scope the broader skill."

**Example (ARCHITECTURE):**
```
Market Research: Time-Tracking Pricing Landscape (SMB segment)
Classification: smb · mature market · moderate competitive intensity

Recommendation: Reprice Pro tier from $40 to $30 to close the gap vs.
the Competitor B + Competitor C $25-32 cluster. Add per-user overage
pricing (11/15 competitors offer it; we don't). Publish enterprise tier
pricing — only 3/15 competitors hide enterprise, and the opacity is hurting
us in evaluation conversations.

Key gap: no competitor in the SMB segment offers transparent enterprise
pricing — positioning wedge available.

Full report: tasks-plans/research/market-time-tracking-pricing-2026-05-23.md
4 tasks created from research findings.

Read the report and run /composure:blueprint to plan implementation.
```

**Done.**
