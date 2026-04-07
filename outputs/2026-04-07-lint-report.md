---
type: lint-report
created: 2026-04-07
modified: 2026-04-07
---

# Wiki Lint Report — 2026-04-07

**Health score: 8.5/10**

68 bookmarks across 10 folders. 29 wiki pages (17 concepts, 3 comparisons, 6 authors, 3 synthesis). qmd index fresh (updated 11m ago, 101 xbm files, 5,155 vectors).

## Summary of Issues

| Category | Count |
|---|---|
| Uncompiled bookmarks | 8 |
| Broken wikilinks | 2 |
| Stale source references | 0 |
| Orphan wiki pages | 0 |
| Missing from INDEX | 0 |
| Weak pages (1 source + no Related) | 0 |
| Contradictions | 0 |
| Missing concept pages | 2 (suggested) |
| Missing cross-references | 1 (suggested) |

## Uncompiled Bookmarks (8)

These bookmark files exist but are not referenced by any wiki page's `sources:` list:

1. `ai-research/2026-03-24-identifying-intelligent-e-acc-voices-on-ai-risk.md` — AI risk / e/acc discourse
2. `ai-research/2026-03-25-llm-deeper-layers-ineffectiveness-pruning-for-efficiency.md` — LLM layer pruning research
3. `creative/2026-03-29-ai-generated-hero-section-design-with-google-s-nano-banana.md` — Nano Banana hero design
4. `crypto/2026-03-31-square-s-tbdex-white-paper-decentralized-bitcoin-exchange-pr.md` — Square tbDEX
5. `crypto/2026-04-04-chainlink-s-role-in-tokenization-of-global-financial-markets.md` — Chainlink tokenization
6. `misc/2026-04-03-the-power-of-generalism-in-a-changing-world.md` — generalism essay
7. `security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links.md` — AiTM phishing via t.co
8. `tools/2026-03-26-essential-product-management-metrics-and-kpis-guide.md` — PM metrics & KPIs

The entire `crypto/`, `security/`, and `ai-research/` folders have **zero** wiki coverage. The wiki is heavily skewed toward AI agents / coding / tools.

## Broken Wikilinks (2)

1. `wiki/concepts/llm-wiki.md` → `[[graphify]]` — no such page; should be `[[agent-skills]]` or a new `[[concepts/graphify]]` (Graphify is currently only mentioned, not its own concept page)
2. `wiki/concepts/agent-skills.md` → `[[visual-explainer]]` — same issue, no page exists

Both look like aspirational links to concept pages that were never created. Either remove the brackets or create stub pages.

## Missing Concept Pages (suggested)

Recurring topics across uncompiled bookmarks suggest two new concept pages would have multi-source support already:

- **`concepts/crypto-tokenization`** — would cover tbDEX + Chainlink tokenization (2 sources)
- **`concepts/llm-efficiency-research`** — could absorb the layer-pruning paper plus token-optimization adjacencies

Single-source orphans that don't merit their own page but could be cross-referenced from existing pages:
- AiTM phishing → could be linked from a future `concepts/agent-security` page (or merged into `agent-orchestration` security section)
- Nano Banana hero design → fits naturally under `concepts/design-md` as another AI-UI generation example
- PM metrics → likely a true outlier; leave in `misc`/`tools`

## Missing Cross-References (1)

- `concepts/design-md` should link to `creative/2026-03-29-ai-generated-hero-section-design-with-google-s-nano-banana` as a complementary AI-driven UI generation source.

## Contradictions

None detected. The harness-engineering critique in `concepts/agent-orchestration` is properly framed as a counterpoint, not an unresolved contradiction.

## Index / qmd Health

- `wiki/INDEX.md` is in sync with all 29 wiki pages.
- qmd `xbm` collection: 101 files, 5,155 vectors, last update 11 minutes ago — fresh, no re-embedding needed.
- All `sources:` references resolve to existing files (0 stale).

## Recommended Actions (priority order)

1. **Fix the 2 broken wikilinks** in `llm-wiki.md` and `agent-skills.md` (delete brackets or create stub pages).
2. **Compile the 8 orphan bookmarks** — at minimum create stub concept coverage for crypto and AI safety/research, even if just one synthesis page each.
3. **Add `nano-banana` source** to `concepts/design-md` and update its sources list.
4. **Consider a `crypto-tokenization` concept page** — two strong sources (tbDEX, Chainlink) already exist.
5. Long-term: the wiki under-covers `security/`, `crypto/`, `ai-research/` — either intentional (focus area) or worth a dedicated synthesis.
