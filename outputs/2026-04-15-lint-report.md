---
type: lint-report
created: 2026-04-15
---

# Wiki Health Report — 2026-04-15

## Summary
- Total wiki pages: 43
- Total bookmarks: 91
- Issues found: 4
- Health score: 8.7/10
- qmd status: in sync (`xbm` indexes 159 non-hidden Markdown files; repo has 159 non-hidden Markdown files)

## Issues

### Critical
- None. The broken `[[chunking]]` link is now resolved via [wiki/concepts/chunking.md](/Users/van/projects/x-bookmarks/wiki/concepts/chunking.md:1), and `wiki-exclusions.yml` now removes the 4 deliberate exclusions from the uncompiled backlog.

### Warnings
- 13 files in `ai-research/2026-04-12-*.md` fail the current bookmark schema gate. Example: [ai-research/2026-04-12-llm-foundations-first-principles.md](/Users/van/projects/x-bookmarks/ai-research/2026-04-12-llm-foundations-first-principles.md:1) uses a note-style frontmatter (`title`, generic `tags`) instead of bookmark fields (`author`, `tweet_url`, `topic/*` tags), and does not contain a `## Summary` block. If these are hand-authored notes, they should be moved out of bookmark folders or exempted from the quality gate; if they are meant to behave like bookmarks, they need schema normalization.
- [misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md](/Users/van/projects/x-bookmarks/misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md:33) contains broken linked content: `- [0](0): [object Object]`. This is a real junk-filter violation in an otherwise valuable bookmark.
- Several wiki pages are only reachable from [wiki/INDEX.md](/Users/van/projects/x-bookmarks/wiki/INDEX.md:1), with no inbound links from other wiki pages. The most important isolated pages are:
  - `[[langserve]]`
  - `[[openclaw]]`
  - `[[scientific-research-agents]]`
  - `[[ai-media-production]]`
  - `[[text-layout-engineering]]`
  All author profiles are also index-only.

### Suggestions
- Weak but salvageable concept pages:
  - [wiki/concepts/langserve.md](/Users/van/projects/x-bookmarks/wiki/concepts/langserve.md:1) has 1 source and no inbound links.
  - [wiki/concepts/llm-pruning.md](/Users/van/projects/x-bookmarks/wiki/concepts/llm-pruning.md:1) has 1 source and depends heavily on a single paper claim.
- Cross-reference opportunities:
  - Link `[[langserve]]` from `[[agent-orchestration]]` or `[[agent-infrastructure-stack]]`.
  - Link `[[scientific-research-agents]]` from `[[agent-orchestration]]`.
  - Link author pages from the concept pages they materially shaped, or add a lightweight `## Related Authors` pattern.
- `wiki-exclusions.yml` now exists; keep it current whenever a topic is intentionally removed so compile/lint continue to treat those absences as deliberate.

## Uncompiled Bookmarks
- None.

## Intentional Exclusions
- `security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links.md` — intentionally excluded in `wiki-exclusions.yml`
- `crypto/2026-03-31-square-s-tbdex-white-paper-decentralized-bitcoin-exchange-pr.md` — intentionally excluded in `wiki-exclusions.yml`
- `crypto/2026-04-04-chainlink-s-role-in-tokenization-of-global-financial-markets.md` — intentionally excluded in `wiki-exclusions.yml`
- `misc/2026-04-08-ultimate-defi-crypto-wallet-security-checklist.md` — intentionally excluded in `wiki-exclusions.yml`

## Missing Concept Pages
- **crypto-tokenization / wallet-security / AITM phishing** — currently absent from the wiki graph because their prior concept pages were removed; treat these as either intentionally excluded or candidates for reintroduction, but decide explicitly

## Quality Gate Violations
- 13 hand-authored `ai-research/2026-04-12-*.md` notes violate the current bookmark-file schema (missing `author`, `tweet_url`, `topic/*`, and `## Summary`).
- `misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md` contains a broken linked-content placeholder: `[object Object]`.

## Recommended Actions
1. Separate hand-authored research notes from X-bookmark sources, or update the quality gate to recognize a second valid note schema.
2. Repair or quarantine `misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md`.
3. Add 3-5 high-value cross-links so isolated pages are reachable outside the index.
4. Keep `wiki-exclusions.yml` in sync whenever a concept page is intentionally removed from the wiki.
