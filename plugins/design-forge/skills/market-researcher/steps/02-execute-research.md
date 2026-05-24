# Step 2: Execute Web Research

Uses **WebSearch** and **WebFetch** to gather competitor intelligence from product pages, pricing pages, docs, changelogs, reviews, and community signal. This is the step where the skill's value lives — the difference between shallow and deep market research is the willingness to keep digging when the obvious source is paywalled or sparse.

## Search Strategy

```yaml
search_strategy:
  primary_sources: "Competitor's own site, docs, changelog, pricing"
  reviewer_sources: "G2, Capterra, TrustRadius, Reddit, Hacker News, podcast transcripts"
  signal_sources: "Job postings, LinkedIn employee posts, press releases, conference talks"
  freshness: "Bias toward last 12 months unless 'all-time' was specified in Step 1"
```

## Research Phases

Execute the relevant phases based on the research type identified in Step 1.

### Phase A: Per-Competitor Primary-Source Pass

For each named competitor, fetch:

1. **Home / landing page** — taglines, primary CTAs, target-customer signaling
2. **Pricing page** — tiers, included features, gated features, contract terms, free trial / freemium presence
3. **Features / product pages** — feature list, integrations, supported platforms
4. **Docs** — depth of coverage indicates engineering maturity; pricing-page promises vs. doc reality often diverge
5. **Changelog / release notes / blog** — last 6-12 months of shipping cadence and direction
6. **About / team / careers** — company stage signal (Series A vs. public-co), hiring patterns

```yaml
per_competitor:
  - Fetch: <competitor>.com (home)
  - Fetch: <competitor>.com/pricing
  - Fetch: <competitor>.com/features (or product/)
  - Fetch: docs.<competitor>.com (depth indicates maturity)
  - Fetch: <competitor>.com/changelog or /blog (recent direction)
```

### Phase B: Reviewer / Community Signal

Reviews surface what marketing pages hide — common complaints, missing features, churn drivers.

```yaml
reviewer_signal:
  - Search: "<competitor> review g2"
  - Search: "<competitor> review capterra"
  - Search: "<competitor> vs <alternative>" (this query alone surfaces 80% of common comparisons)
  - Search: "<competitor> alternative" / "best alternative to <competitor>"
  - Search: "site:reddit.com <competitor>" (Reddit threads are gold for unfiltered opinion)
  - Search: "site:news.ycombinator.com <competitor>"
```

### Phase C: Founder / Insider Signal (when public-marketing is thin)

Smaller competitors or recently launched products have sparse public sources. Founder content fills the gap.

```yaml
founder_signal:
  - Search: "<competitor founder name> interview"
  - Search: "<competitor founder name> podcast"
  - Search: "<competitor> indie hackers" (for indie/bootstrapped competitors)
  - Search: "<competitor> launch" (Product Hunt launch posts have detailed feature lists)
  - Search: "<competitor> series A" / "<competitor> raised" (funding announcements include positioning quotes)
```

## Wall-Jumping Fallback Chain (CRITICAL)

When a primary source is blocked, do NOT give up. Apply the chain in order until something works:

```yaml
fallback_chain:
  1_paywall_or_404:
    - try: "web.archive.org/web/*/<url>"   # Wayback Machine has snapshots of most paywalled / removed pages
    - try: "cache:<url>" via Google         # Google's cached copy survives ~30 days past page change
    - try: cachedview.com / Bing cache       # alternate cache sources
  2_auth_wall:
    - try: search Twitter/X for the article title + competitor name (often the founder quote-tweeted the gated content)
    - try: search LinkedIn for the article title (gated articles often re-posted by employees)
    - try: search for a podcast or YouTube interview covering the same content
  3_no_public_source:
    - try: founder's blog / personal site (often more candid than the company site)
    - try: conference talk recordings (talks predate marketing-page copy)
    - try: hiring posts on careers page (job descriptions leak feature plans and tech stack)
    - try: GitHub orgs (open-source side projects from competitor employees signal direction)
  4_pricing_specifically:
    - try: search "<competitor> pricing site:reddit.com" — users often paste actual quotes received
    - try: archived versions of the pricing page (pricing changes are tracked by archive.org)
```

This chain is the reason design-forge research feels strong — most agents stop at the first paywall. Don't.

## Stopping Conditions

Stop researching when one of:
- Every competitor in the Step 1 list has primary-source data for every dimension under study
- 6-8 reviewer-signal sources per competitor have been gathered with diminishing returns (the same complaints keep surfacing)
- Two more searches per phase return no novel information

Do NOT stop because "I've gathered enough" — stop because the signal saturated.

---

**Next:** Read `steps/03-synthesize.md`
