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

## [2026-04-07] cleanup | fixed 2 wikilinks, deleted 3 junk bookmarks
- unbracketed [[graphify]] in wiki/concepts/llm-wiki.md
- unbracketed [[visual-explainer]] in wiki/concepts/agent-skills.md
- deleted tools/2026-03-26-essential-product-management-metrics-and-kpis-guide.md (bare t.co link, generic filler, [object Object])
- deleted tools/2026-03-27-claude-ai-for-rapid-project-output.md (vague "I used Claude and it was fast", no tool/insight)
- deleted ai-research/2026-03-24-identifying-intelligent-e-acc-voices-on-ai-risk.md (Manifold prediction market curiosity, zero reusable knowledge)
