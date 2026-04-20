---
type: concept
sources:
  - ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl.md
  - ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base.md
  - ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development.md
  - ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and.md
  - ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-.md
  - ai-coding/2026-04-06-leveraging-llm-powered-knowledge-bases-for-ai-marketers.md
  - ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os.md
  - ai-agents/2026-04-13-karpathy-s-llm-wiki-implemented-with-always-on-gemini-agent.md
created: 2026-04-07
modified: 2026-04-20
---

# LLM Wiki (Personal Knowledge Base Pattern)

Andrej Karpathy's "LLM Wiki" pattern: instead of retrieving knowledge on every query, an LLM continuously compiles raw sources into a persistent, interlinked Markdown wiki that compounds over time. The category has already evolved from an idea into a growing ecosystem of tooling and always-on implementations.

## Key Points
- **Compile, don't retrieve**: the LLM ingests raw sources once and writes durable summaries, concepts, backlinks, and syntheses
- **Three layers** keep showing up: immutable raw sources, LLM-maintained wiki pages, and a schema file such as `CLAUDE.md` or `AGENTS.md` that tells the agent how to ingest/query/lint
- **Obsidian as IDE** fits the pattern well because humans browse while the LLM writes
- **Schema as decision engine** matters: Pawel Huryn's framing makes the control file responsible for knowledge architecture, decision journaling, and quality gates
- **Derivative tools** like Graphify emerged almost immediately, compressing wiki queries into much smaller context footprints
- **Applied use cases** now include marketer swipe files, personal research vaults, and filesystem-based personal AI OS workflows
- **The pattern is being operationalized**: always-on Gemini + ADK implementations show LLM Wiki moving from periodic manual compile runs toward continuously running knowledge agents

## Related
- [[dynamic-knowledge-systems]] — the self-evolving mechanics this pattern depends on
- [[ai-agent-memory]] — wiki as externalized project memory
- [[agent-skills]] — Obsidian and markdown skills make the workflow easier to package
- [[claude-code]] — one of the most common engines for this pattern

## Sources
- [[ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl]] — Karpathy's original workflow description
- [[ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base]] — compile-vs-retrieve framing
- [[ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development]] — the "idea file" primitive
- [[ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and]] — CLAUDE.md as decision engine architecture
- [[ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-]] — Graphify as a derivative tool
- [[ai-coding/2026-04-06-leveraging-llm-powered-knowledge-bases-for-ai-marketers]] — applied to marketing knowledge and swipe files
- [[ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os]] — Personal OS and filesystem-as-database framing
- [[ai-agents/2026-04-13-karpathy-s-llm-wiki-implemented-with-always-on-gemini-agent]] — always-on implementation using Gemini + ADK
