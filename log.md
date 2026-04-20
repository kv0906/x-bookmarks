# Wiki Log

> Append-only record of wiki operations. Most recent entries at the bottom.

## [2026-04-05] compile | Initial wiki compilation
- Processed 47 bookmarks across 10 folders
- Created 13 concept pages, 3 comparisons, 4 author profiles, 3 synthesis articles
- Updated 0 existing pages (first compile)
- New connections found: Claude Code ecosystem hub (10+ bookmarks), token optimization as cross-cutting concern, terminal renaissance driven by AI agents, retro image tools cluster on same day, Cloudflare vs Vercel as competing agent platforms

## [2026-04-07] compile | Incremental update for 21 new bookmarks (2026-03-30 to 2026-04-06)
- Processed 21 new bookmarks across ai-agents, crypto, web-dev, tools, misc folders
- Created 4 new concept pages: llm-wiki, agent-skills, design-md, openclaw
- Updated 7 existing concept pages: agent-orchestration (+12 harness patterns, harness critique, LLM-as-judge), ai-agent-memory (+agentmemory), browser-automation (+agent-browser chat), dynamic-knowledge-systems (+CLAUDE.md decision engine), claude-code (+visual-explainer, graphify skills), terminal-tools (+yt-dlp)
- Updated 1 author profile (tom_doerr → 12 bookmarks), created 2 new author profiles (Saboo_Shubham_, shannholmberg)
- Dominant theme: Karpathy's LLM Wiki gist triggered a mini-ecosystem (Graphify, idea-file pattern, marketer KB, CLAUDE.md-as-decision-engine) — warranted a new top-level concept
- Notable tension: harness-engineering consensus vs Bedi's "Agent = Model + System" critique — captured in agent-orchestration as a counterpoint
- 1 bookmark (chainlink tokenization) not integrated — crypto-finance topic with no existing concept cluster; remains as raw source

## [2026-04-07] lint | Health 8.5/10. 8 uncompiled bookmarks, 2 broken wikilinks, 0 stale refs, 0 orphans, 0 contradictions. Suggested 2 new concept pages (crypto-tokenization, llm-efficiency-research). Report: outputs/2026-04-07-lint-report.md

## [2026-04-12] organize | Moved 13 bookmarks from root into topic folders, quarantined 1
- ai-agents/: 6 files (scaling-personal-ai-knowledge-bases, context-engineering-evolution, comprehensive-9-layer-production-ai, cloudflare-browser-rendering-cdp, building-claude-managed-agents, fireworks-tech-graph-ai-powered)
- ai-coding/: 1 file (production-grade-engineering-workflows)
- tools/: 2 files (unicode-animations-npm-package, introducing-langserve)
- web-dev/: 1 file (vercel-sandbox-achieves-fastest-microvm)
- misc/: 3 files (ultimate-defi-crypto-wallet-security-checklist, ai-powered-technical-diagram-generation, python-script-for-ascii-art-playing-cards)
- quarantine: _trash/2026-04-09-addy-osmani-s-agent-skills-for-production-grade-ai-coding.md — near-duplicate of production-grade-engineering-workflows (same author @heygurisingh, same day, reply tweet with bare link)
- Unmapped tags routed to misc/: defi-security, crypto-wallets, cybersecurity-checklist, ai-tools, diagram-generation, technical-documentation, natural-language-processing, python, ascii-art, console-games, software-development

## [2026-04-12] compile | Incremental update for 19 uncompiled bookmarks (2026-03-25 to 2026-04-11)
- Processed 19 new bookmarks across ai-agents, ai-coding, ai-research, tools, web-dev, creative, crypto, security, misc folders
- Created 6 new concept pages: context-engineering, fireworks-tech-graph, langserve, llm-pruning, crypto-tokenization, aitm-phishing
- Updated 9 existing concept pages: llm-wiki (+Personal OS movement), agent-skills (+Addy Osmani's Agent Skills), mcp (+Cloudflare Browser Rendering CDP), agent-orchestration (+9-layer architecture, Claude Managed Agents), browser-automation (+Cloudflare CDP), dynamic-knowledge-systems (+context engineering, Personal OS), cloudflare-dynamic-workers (+Browser Rendering), terminal-tools (+unicode-animations, ASCII art), design-md (+Nano Banana AI image gen)
- Updated 1 comparison: cloudflare-vs-vercel-sandboxes (+Vercel Fluid Compute, #1 fastest microVM)
- Updated 1 author profile (CloudflareDev → 3 bookmarks), created 2 new author profiles (PawelHuryn, oliviscusAI)
- Created 1 new synthesis article: context-engineering-personal-ai-os (RAG → Context Engineering → Personal AI OS convergence)
- Updated 1 existing synthesis: agent-infrastructure-stack (+April 2026 update section)
- Dominant theme: context engineering as the successor to RAG, with personal filesystem-based AI OSes as the infrastructure layer
- Previously flagged gaps resolved: crypto-tokenization (tbDEX + Chainlink + DeFi security) and llm-pruning (layer removal research) now have concept pages
- All 72 bookmarks in the vault are now compiled into at least one wiki page
- INDEX.md updated with 23 concepts, 3 comparisons, 8 authors, 4 synthesis articles

## [2026-04-12] cleanup | Removed crypto-tokenization and aitm-phishing concept pages per user request
- Deleted wiki/concepts/crypto-tokenization.md (sources: crypto/tbdex, crypto/chainlink, misc/defi-security-checklist)
- Deleted wiki/concepts/aitm-phishing.md (source: security/aitm-phishing)
- Updated INDEX.md — now 21 concepts

## [2026-04-12] compile | Incremental update for 13 new LLM Foundations notes
- Processed 13 new bookmarks in ai-research/ (all 2026-04-12, user-created first-principles series)
- Quality gate: all 13 pass — substantial educational content with specific concepts, techniques, and PM insights; no quarantines
- Created 5 new concept pages: rag (RAG pipeline + chunking + vector DB + vector search + cosine similarity), attention-mechanism, kv-cache, scaling-laws, embedding
- Updated 1 existing concept page: llm-inference (major rewrite — added 5 sources, expanded GPU/matrix-mult/quantization/prefill-decode sections; was previously an orphan with sources: [])
- Updated 2 existing concept pages with cross-references: llm-pruning (+scaling-laws link), context-engineering (+rag link)
- Created 1 new synthesis article: llm-foundations-pm-guide (learning map across all 13 notes with three knowledge clusters)
- INDEX.md updated: 27 concepts, 3 comparisons, 8 authors, 5 synthesis articles
- All 85 bookmarks in the vault are now compiled into at least one wiki page
- New connections found: RAG as predecessor to context-engineering, scaling-laws as counterpoint to llm-pruning, KV cache as bridge between attention and inference performance

## [2026-04-07] cleanup | fixed 2 wikilinks, deleted 3 junk bookmarks
- unbracketed [[graphify]] in wiki/concepts/llm-wiki.md
- unbracketed [[visual-explainer]] in wiki/concepts/agent-skills.md
- deleted tools/2026-03-26-essential-product-management-metrics-and-kpis-guide.md (bare t.co link, generic filler, [object Object])
- deleted tools/2026-03-27-claude-ai-for-rapid-project-output.md (vague "I used Claude and it was fast", no tool/insight)
- deleted ai-research/2026-03-24-identifying-intelligent-e-acc-voices-on-ai-risk.md (Manifold prediction market curiosity, zero reusable knowledge)

## [2026-04-15] compile | Incremental no-op pass
- Evaluated 4 uncompiled bookmarks across crypto/, misc/, and security/
- Quality gate: all 4 pass — substantive content, no quarantines
- Created 0 pages, updated 0 pages
- Skipped reintegration of 4 bookmarks because their prior wiki destinations were intentionally removed in [2026-04-12] cleanup per user request:
- crypto/2026-03-31-square-s-tbdex-white-paper-decentralized-bitcoin-exchange-pr.md
- crypto/2026-04-04-chainlink-s-role-in-tokenization-of-global-financial-markets.md
- misc/2026-04-08-ultimate-defi-crypto-wallet-security-checklist.md
- security/2026-03-25-sophisticated-aitm-phishing-attack-via-twitter-t-co-links.md
- qmd index refreshed for xbm

## [2026-04-15] lint | Wiki health check
- Health score: 7.9/10
- Issues found: 6 (2 critical, 3 warnings, 1 suggestion)
- Uncompiled bookmarks: 4
- Report: outputs/2026-04-15-lint-report.md

## [2026-04-15] cleanup | Resolved top lint issues
- Created 1 concept page: `wiki/concepts/chunking.md`
- Updated `wiki/concepts/rag.md` and `wiki/INDEX.md` to wire `[[chunking]]` into the wiki graph
- Added `wiki-exclusions.yml` to mark 4 deliberately removed crypto/security bookmarks as intentional exclusions
- Updated compile/lint instructions in `CLAUDE.md`, `.codex/skills/`, and `.claude/commands/` to honor exclusion state

## [2026-04-15] lint | Post-fix validation
- Health score: 8.7/10
- Issues found: 4 (0 critical, 3 warnings, 1 suggestion)
- Uncompiled bookmarks: 0
- Intentional exclusions tracked: 4
- Report: outputs/2026-04-15-lint-report.md

## [2026-04-15] organize | Moved 22 bookmarks from root into topic folders
- ai-agents/: 14 files (codex-0-120-0, mem0-ai, chrome-devtools-mcp, codifying-judgment-lenses, langgraph-course, polishing-agent-uis, ronin-content-engine, memory-in-agent-intelligence, vercel-agent-browser, cloudflare-sandboxes, graph-based-skill-retrieval, karpathy-llm-wiki, cloudflare-sandboxes-ga, bridge-claude-managed-agents-linear)
- web-dev/: 3 files (practical-ui-design-cheatsheet, cloudflare-mesh-workers-vpc, cloudflare-mesh-private-network)
- tools/: 3 files (cli-to-js, rust-terminal-spinners, wterm)
- misc/: 2 files (nimitz-wwii-leadership, x-ai-stories-grok)
- quarantine: 0
- Updated _topic-map.yml with 20 new tag mappings across ai-agents, ai-coding, tools, web-dev

## [2026-04-15] cleanup | Vault purge — removed crypto, misc, low-value content
- Deleted crypto/ folder entirely (2 files → _trash): tbdex, chainlink-tokenization
- Deleted misc/ folder entirely after triage:
  - quarantine: 6 files → _trash (data-science-internship, web3-iexec, generalism-essay, defi-wallet-checklist, nimitz-leadership, x-grok-stories)
  - Moved 6 valuable files to correct folders:
    - tools/: yt-dlp
    - ai-agents/: harness-engineering-critique
    - ai-coding/: design-md, llm-knowledge-bases, fireworks-tech-graph
    - creative/: ascii-art-cards
- Removed crypto section from _topic-map.yml
- Cleaned wiki-exclusions.yml (removed 3 entries for trashed crypto/defi files)
- Remaining folders: ai-agents, ai-coding, ai-media, ai-research, tools, web-dev, creative, security

## [2026-04-20] compile | Incremental update for 26 uncompiled bookmarks
- Processed 26 bookmarks across ai-agents, ai-coding, tools, web-dev, and creative folders
- Quality gate: all 26 pass — substantive tools, architecture, and workflow content; no quarantines
- Created 3 concept pages: `openai-codex`, `cloudflare-sandboxes`, `cloudflare-mesh`
- Updated 10 existing concept pages: `agent-orchestration`, `ai-agent-memory`, `browser-automation`, `agent-skills`, `dynamic-knowledge-systems`, `design-md`, `fireworks-tech-graph`, `llm-wiki`, `mcp`, `terminal-tools`
- Created 4 author pages: `ctatedev`, `addyosmani`, `mem0ai`, `vercel_dev`
- Updated existing author and synthesis pages, and repaired stale source paths left by the 2026-04-15 organize/purge pass
- Updated `wiki/INDEX.md` to 31 concepts, 3 comparisons, 12 authors, 5 synthesis articles
- Attempted qmd refresh, but local `qmd` is currently blocked by a Node ABI mismatch in `better-sqlite3`; wiki content compiled successfully, search index refresh still pending environment repair

## [2026-04-20] compile | Incremental update for latest bookmark
- Processed 1 bookmark from `ai-agents` (Cloudflare Agents Week in Plain English)
- Quality gate: pass — substantial product architecture and workflow detail
- Created 0 concept pages
- Updated 7 existing concept pages: `agent-orchestration`, `ai-agent-memory`, `browser-automation`, `cloudflare-dynamic-workers`, `cloudflare-mesh`, `cloudflare-sandboxes`, `mcp`
- Updated 1 synthesis article: `agent-infrastructure-stack`
- Updated `wiki/INDEX.md` (no new entries; existing index links validated)
- Refreshed `qmd` index and embeddings successfully

## [2026-04-20] compile | Retriever primer integration
- Processed 1 bookmark from `ai-agents` (Retriever Deep Dive: Dense, Sparse, Hybrid)
- Quality gate: pass — substantial retrieval architecture content
- Created 1 concept page: `retrieval`
- Updated 2 existing concept pages: `rag`, `embedding`
- Updated `wiki/INDEX.md` with new `[[concepts/retrieval]]` entry
- Refreshed `qmd` index and embeddings successfully
