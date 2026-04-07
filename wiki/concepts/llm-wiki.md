---
type: concept
sources:
  - ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl.md
  - ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base.md
  - ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development.md
  - ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and.md
  - ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-.md
  - misc/2026-04-06-leveraging-llm-powered-knowledge-bases-for-ai-marketers.md
created: 2026-04-07
modified: 2026-04-07
---

# LLM Wiki (Personal Knowledge Base Pattern)

Andrej Karpathy's "LLM Wiki" pattern: instead of retrieving knowledge on every query (RAG), an LLM continuously compiles raw sources into a persistent, interlinked Markdown wiki that compounds over time. Published as a GitHub gist in early April 2026, it reached 5,000+ stars in 48 hours and triggered a wave of derivative tooling. This vault itself follows the pattern.

## Key Points
- **Compile, don't retrieve**: the LLM ingests raw sources once and writes/updates wiki pages (summaries, entity pages, cross-references). Every new source can touch 10-15 wiki pages. RAG re-derives knowledge per query; LLM Wiki compiles it permanently
- **Three layers**: immutable `raw/` sources, LLM-maintained `wiki/` (markdown + backlinks + index), and a `schema` (e.g. CLAUDE.md or AGENTS.md) that tells the agent how to ingest/query/lint
- **Obsidian as IDE**: the human browses raw and compiled content visually; the LLM writes almost everything in the wiki
- **Core operations**: ingest (read source, update pages), query (research against wiki, file answers back), lint (health checks for contradictions, gaps, missing connections)
- **Schema is the decision engine** (Pawel Huryn): CLAUDE.md should tell the LLM *how to think* — knowledge architecture (INDEX routing), decision journal (write-back templates), quality gates (hard rules) — not just store facts
- **Idea file primitive** (Karpathy): share markdown concepts with agents instead of code repos — the agent customizes implementation to the existing system
- **Derivative tools**: Graphify-style tools emerged within 48 hours, generating navigable knowledge graphs from any folder with 71.5x fewer tokens per query vs raw file reading
- **Use cases**: personal research, academic reading, business knowledge (Slack/meetings), fan wikis, marketing swipe files

## Related
- [[dynamic-knowledge-systems]] — the self-evolving knowledge mechanics this pattern depends on
- [[ai-agent-memory]] — wiki is memory externalized at project scope
- [[agent-skills]] — skills.sh Obsidian integration is a concrete tooling layer
- [[claude-code]] — the most common LLM engine for the pattern

## Sources
- [[ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl]] — Karpathy's original workflow description
- [[ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base]] — gist breakdown, compile-vs-retrieve framing
- [[ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development]] — "idea file" primitive and share-ideas-not-repos ethos
- [[ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and]] — CLAUDE.md as decision engine, AGENTS.md schema
- [[ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-]] — Graphify (48-hour derivative, 71.5x token reduction)
- [[misc/2026-04-06-leveraging-llm-powered-knowledge-bases-for-ai-marketers]] — applied to marketer swipe files
