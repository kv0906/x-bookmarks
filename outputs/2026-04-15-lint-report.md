---
type: lint-report
created: 2026-04-15
---

# Wiki Health Report — 2026-04-15

## Summary
- Total wiki pages: 43 (27 concepts, 3 comparisons, 8 authors, 5 synthesis)
- Total bookmarks: 105 (across 8 topic folders)
- Intentional exclusions: 4 (1 valid, 3 stale)
- Compiled bookmarks: 78
- Uncompiled bookmarks: 20 truly new + 6 moved (need path updates)
- Issues found: 15 (5 critical, 7 warnings, 3 suggestions)
- Health score: 7.1/10
- qmd status: 2 files need embedding

## Issues

### Critical

1. **12 stale source references after directory reorganization** — `crypto/` and `misc/` directories were deleted; files were moved to proper topic folders or `_trash/`. 10 wiki pages still reference old `misc/` paths in their `sources` frontmatter.

   **Moves (8 refs across 7 wiki pages — update source paths):**
   | Wiki Page | Old Source | New Location |
   |---|---|---|
   | `concepts/agent-orchestration` | `misc/...critique-of-harness...` | `ai-agents/...` |
   | `concepts/design-md` | `misc/...improving-ai-generated-ui...` | `ai-coding/...` |
   | `concepts/fireworks-tech-graph` | `misc/...ai-powered-technical-diagram...` | `ai-coding/...` |
   | `concepts/llm-wiki` | `misc/...leveraging-llm-powered-knowledge...` | `ai-coding/...` |
   | `concepts/terminal-tools` | `misc/...yt-dlp...` | `tools/...` |
   | `concepts/terminal-tools` | `misc/...python-script-for-ascii-art...` | `creative/...` |
   | `authors/oliviscusAI` | `misc/...yt-dlp...` | `tools/...` |
   | `authors/shannholmberg` | `misc/...leveraging-llm-powered-knowledge...` | `ai-coding/...` |

   **Deletions (4 refs across 4 wiki pages — remove or note as archived):**
   | Wiki Page | Deleted Source | Status |
   |---|---|---|
   | `concepts/claude-code` | `tools/2026-03-27-claude-ai-for-rapid-project-output.md` | Deleted (junk, 2026-04-07 cleanup) |
   | `authors/_avichawla` | `misc/...guide-to-securing-your-first-data-science-internship.md` | In `_trash/` |
   | `authors/shannholmberg` | `misc/...decentralized-ai-agents-and-web3...` | In `_trash/` |
   | `synthesis/context-engineering-personal-ai-os` | `misc/...the-power-of-generalism...` | In `_trash/` |

2. **3 stale exclusion entries** — `wiki-exclusions.yml` references files in deleted `crypto/` and `misc/` directories. These files are now in `_trash/`:
   - `crypto/2026-03-31-square-s-tbdex-white-paper-decentralized-bitcoin-exchange-pr.md`
   - `crypto/2026-04-04-chainlink-s-role-in-tokenization-of-global-financial-markets.md`
   - `misc/2026-04-08-ultimate-defi-crypto-wallet-security-checklist.md`

3. **20 truly new uncompiled bookmarks** — added 2026-04-11 through 2026-04-15, not yet absorbed by the wiki.

4. **CLAUDE.md folder table is now stale** — `crypto/` and `misc/` removed from Folders table, but wiki content still references those paths.

5. **Broken wikilink** — `concepts/openclaw` uses `[[llm-wiki|idea file]]` (pipe alias syntax) which may not resolve in all renderers.

### Warnings

1. **6 bookmark files contain `[object Object]` in Linked Content:**
   - `ai-agents/2026-04-11-codex-0-120-0-release-enhanced-agent-streaming-and-tui-featu.md`
   - `ai-agents/2026-04-13-cloudflare-sandboxes-persistent-environments-for-ai-agents.md` (also a duplicate — see Quality Gate)
   - `ai-agents/2026-04-13-karpathy-s-llm-wiki-implemented-with-always-on-gemini-agent.md`
   - `ai-coding/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md`
   - `tools/2026-04-11-cli-to-js-turn-clis-into-typed-javascript-apis.md`
   - `tools/2026-04-11-rust-terminal-spinners-with-rattles.md`

   Per quality gate, `[object Object]` is a reject criterion. However, all 6 files have substantive summaries that capture the core content. Strict enforcement would quarantine them; pragmatic approach is to keep files where the summary compensates and only quarantine true junk.

2. **17 wiki pages with zero inbound wikilinks** (only reachable via INDEX.md):
   - All 8 author pages (expected — leaf nodes)
   - 4 concept pages: `ai-media-production`, `langserve`, `openclaw`, `scientific-research-agents`, `text-layout-engineering`
   - 4 synthesis pages: `agent-infrastructure-stack`, `ai-coding-assistant-ecosystem`, `llm-foundations-pm-guide`, `terminal-renaissance`

3. **13 page pairs share 2+ sources but no wikilink between them** — most are author↔concept pairs. Top opportunities:
   - `authors/tom_doerr` ↔ `concepts/claude-code` (share 5 sources)
   - `authors/CloudflareDev` ↔ `concepts/cloudflare-dynamic-workers` (share 3 sources)
   - `authors/tom_doerr` ↔ `synthesis/ai-coding-assistant-ecosystem` (share 4 sources)
   - `comparisons/token-optimization-tools` ↔ `synthesis/ai-coding-assistant-ecosystem` (share 2 sources)

4. **1 weak page** — `authors/oliviscusAI` (454 chars, 2 sources, no Related section). One source now moved from `misc/` to `tools/`.

5. **13 ai-research user-created study notes** lack standard bookmark frontmatter (missing `author`, `tweet_url`, `topic/*` tags). These are hand-authored, not bot-generated — NOT a quality gate violation, but the schema divergence should be documented or the quality gate should explicitly exempt them.

6. **qmd index** — 2 files need embedding. Run `qmd embed` to sync.

7. **`_trash/` has 9 files** — periodic review recommended:
   - 3 crypto/finance bookmarks (excluded from wiki)
   - 3 misc bookmarks trashed during reorg
   - 1 near-duplicate (addy-osmani agent skills)
   - 1 WWII leadership (no dev relevance)
   - 1 X/Grok stories (platform news)

### Suggestions

1. **Cross-reference opportunities:**
   - Link `[[langserve]]` from `[[agent-orchestration]]` or `[[agent-infrastructure-stack]]`
   - Link `[[scientific-research-agents]]` from `[[agent-orchestration]]`
   - Link author pages from concept pages they shaped (e.g., `[[authors/tom_doerr]]` from `[[claude-code]]`)
   - Link `[[token-optimization]]` from `[[agent-infrastructure-stack]]`

2. **New concept page candidates** from uncompiled bookmarks:
   - **Cloudflare Sandboxes** — 2 bookmarks covering GA announcement (persistent environments, shell/filesystem, clone/run/fix loop)
   - **LangGraph** — hands-on course for production LLM agents (Agentic RAG, ReAct, Reflexion)
   - **Graph of Skills** — graph-based skill retrieval with Personalized PageRank (43.6% reward improvement)

3. **Author profile updates** — `@tom_doerr` likely has new bookmarks since last profile update (currently at 12, may have more).

## Quality Gate Violations

### Recommend Quarantine (2 files)

1. **`ai-agents/2026-04-13-cloudflare-sandboxes-persistent-environments-for-ai-agents.md`**
   - Near-duplicate of `ai-agents/2026-04-13-cloudflare-sandboxes-ga-secure-computing-for-ai-agents.md` (same product, same date)
   - Also has `[object Object]` in Linked Content
   - The GA file (@Cloudflare) is richer and should be kept

2. **`web-dev/2026-04-14-cloudflare-mesh-for-secure-private-network-access.md`**
   - Near-duplicate of `web-dev/2026-04-14-cloudflare-mesh-workers-vpc-for-private-networking.md` (same product, same date)
   - Source tweet is a thin event-day promotional tweet ("Day 2 - here we come!")
   - The Workers VPC file (@thomasgauvin) has richer content (50 nodes/50 users free tier, Durable Objects connectivity)

### Borderline (keep but flag — 4 files)

- `tools/2026-04-11-rust-terminal-spinners-with-rattles.md` — thin source tweet + `[object Object]` + generic summary, but names specific Rust library
- `ai-agents/2026-04-11-codex-0-120-0-release-enhanced-agent-streaming-and-tui-featu.md` — `[object Object]` in Linked Content but solid summary
- `ai-agents/2026-04-13-karpathy-s-llm-wiki-implemented-with-always-on-gemini-agent.md` — `[object Object]` in Linked Content but thorough summary
- `tools/2026-04-11-cli-to-js-turn-clis-into-typed-javascript-apis.md` — `[object Object]` in Linked Content but npm package captured

## Uncompiled Bookmarks (20 new)

| File | Topic |
|---|---|
| `ai-agents/2026-04-11-codex-0-120-0-release-enhanced-agent-streaming-and-tui-featu.md` | Codex release |
| `ai-agents/2026-04-11-mem0-ai-open-source-weekly-updates-universal-memory-layer-pr.md` | Mem0 updates |
| `ai-agents/2026-04-12-chrome-devtools-mcp-enhancements-for-ai-agents.md` | Chrome DevTools MCP |
| `ai-agents/2026-04-12-codifying-personal-judgment-for-ai-agents-the-lenses-concept.md` | Agent "lenses" concept |
| `ai-agents/2026-04-12-hands-on-langgraph-course-for-production-grade-llm-agents.md` | LangGraph course |
| `ai-agents/2026-04-12-polishing-agent-built-uis-with-curated-skills.md` | UI skills curation |
| `ai-agents/2026-04-12-ronin-ai-content-engine-with-markdown-files-for-social-media.md` | AI content engine |
| `ai-agents/2026-04-12-the-crucial-role-of-memory-in-ai-agent-intelligence.md` | Agent memory patterns |
| `ai-agents/2026-04-12-vercel-s-agent-browser-cli-for-ai-powered-web-automation.md` | Agent Browser CLI |
| `ai-agents/2026-04-13-cloudflare-sandboxes-ga-secure-computing-for-ai-agents.md` | Cloudflare Sandboxes GA |
| `ai-agents/2026-04-13-graph-based-agent-skill-retrieval-for-llms-graph-of-skills.md` | Graph of Skills |
| `ai-agents/2026-04-13-karpathy-s-llm-wiki-implemented-with-always-on-gemini-agent.md` | LLM Wiki on Gemini |
| `ai-agents/2026-04-15-bridge-claude-managed-agents-with-linear-for-enhanced-team-c.md` | Claude + Linear integration |
| `tools/2026-04-11-cli-to-js-turn-clis-into-typed-javascript-apis.md` | CLI-to-JS tool |
| `tools/2026-04-11-rust-terminal-spinners-with-rattles.md` | Rust terminal spinners |
| `tools/2026-04-15-wterm-a-web-terminal-emulator-with-dom-rendering-and-zig-was.md` | wterm web terminal |
| `web-dev/2026-04-11-practical-ui-design-cheatsheet-for-product-development.md` | UI design cheatsheet |
| `web-dev/2026-04-14-cloudflare-mesh-workers-vpc-for-private-networking.md` | Cloudflare Mesh VPC |
| `ai-agents/2026-04-13-cloudflare-sandboxes-persistent-environments-for-ai-agents.md` | *duplicate — quarantine candidate* |
| `web-dev/2026-04-14-cloudflare-mesh-for-secure-private-network-access.md` | *duplicate — quarantine candidate* |

## Intentional Exclusions
- `security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links.md` — valid, file exists
- `crypto/2026-03-31-square-s-tbdex-white-paper-decentralized-bitcoin-exchange-pr.md` — **STALE**: file in `_trash/`, not at this path
- `crypto/2026-04-04-chainlink-s-role-in-tokenization-of-global-financial-markets.md` — **STALE**: file in `_trash/`, not at this path
- `misc/2026-04-08-ultimate-defi-crypto-wallet-security-checklist.md` — **STALE**: file in `_trash/`, not at this path

## Recommended Actions

1. **Fix stale source paths** — update 8 source references in 7 wiki pages to point to new file locations after `misc/` reorganization. Remove 4 references to deleted/trashed files.
2. **Clean up `wiki-exclusions.yml`** — remove 3 stale entries pointing to deleted `crypto/` and `misc/` paths. These files are now in `_trash/` and no longer need exclusion tracking.
3. **Run `/compile`** to absorb 18 new uncompiled bookmarks (20 minus 2 quarantine candidates).
4. **Quarantine 2 duplicate bookmarks** to `_trash/`.
5. **Run `qmd embed`** to sync 2 pending files.
6. **Add cross-references** — especially link `[[langserve]]`, `[[openclaw]]`, and `[[scientific-research-agents]]` from related concept/synthesis pages.
7. **Decide on 6 `[object Object]` files** — strict gate says quarantine; pragmatically they have good summaries. Recommend keeping but documenting the exception.
8. **Review `_trash/`** — 9 files accumulated, consider permanent deletion.
