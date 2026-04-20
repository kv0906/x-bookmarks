---
type: synthesis
sources:
  - ai-agents/2026-04-09-context-engineering-evolution-of-rag-and-agentic-search.md
  - ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os.md
  - ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl.md
  - ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base.md
  - ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and.md
  - ai-agents/2026-04-11-comprehensive-9-layer-production-ai-architecture-breakdown.md
  - ai-coding/2026-03-28-dynamic-ai-knowledge-system-with-adaptive-prompting.md
created: 2026-04-12
modified: 2026-04-20
---

# From RAG to Context Engineering: The Personal AI OS Movement

A cross-cutting trend is reshaping how AI systems manage knowledge: the shift from static retrieval to dynamic context construction, and from centralized AI memory to personal, filesystem-based knowledge operating systems.

## The Evolution

**2020-2023: RAG (Retrieve-Augmented Generation)** — fixed retrieval pipelines that always retrieve, usually once. The LLM is a consumer of context someone else assembled.

**2023-2024: Agentic RAG** — the agent decides if, when, and what to retrieve. Multi-hop retrieval and routing mean the model participates in context assembly.

**2025+: Context Engineering** — the agent builds context from multiple sources: databases, filesystems, the web, memory, and tools. Prompt engineering becomes the smaller subproblem.

## The Personal AI OS

In parallel, a movement is forming around **personal knowledge operating systems** built on user-owned files:

- **Karpathy's LLM Wiki** compiles raw sources into a persistent, interlinked markdown wiki
- **Koylan's Personal OS** pushes the filesystem-as-database framing, with Git for portability and versioning
- **This vault** is a working implementation of that pattern: raw bookmarks plus an LLM-maintained wiki

## The Convergence

These trends converge cleanly: context engineering is the *methodology*, and the personal AI OS is the *infrastructure*. The 9-layer production architecture breakdown shows what that looks like at scale, where RAG pipelines, semantic caches, memory layers, and agent context files all serve the same goal of getting the right information to the model at the right time.

## The Unsolved Problem

The bottleneck has moved upstream. It is no longer just "how do I retrieve?" but "how do I feed?" Getting decisions, preferences, half-formed thoughts, and cross-domain observations into the right markdown file at the right time is still too manual.

## What's Next

The missing piece is **ambient ingestion**: systems that watch your screen, hear your voice, read your accounts, and file knowledge into your Personal OS without you acting as the integration layer. Always-on wiki agents suggest that layer is starting to arrive, but it is still early.

## Related Concepts
- [[context-engineering]] — the methodology
- [[llm-wiki]] — Karpathy's foundational pattern
- [[dynamic-knowledge-systems]] — the self-evolving mechanics
- [[agent-orchestration]] — production architecture for context-aware agents

## Sources
- [[ai-agents/2026-04-09-context-engineering-evolution-of-rag-and-agentic-search]] — RAG evolution framework
- [[ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os]] — Personal OS and ingestion bottlenecks
- [[ai-agents/2026-04-02-andrej-karpathy-s-llm-powered-personal-knowledge-base-workfl]] — LLM Wiki origin
- [[ai-agents/2026-04-06-andrej-karpathy-s-llm-wiki-persistent-knowledge-base]] — compile-vs-retrieve framing
- [[ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and]] — CLAUDE.md as decision engine
- [[ai-agents/2026-04-11-comprehensive-9-layer-production-ai-architecture-breakdown]] — production architecture with context layers
- [[ai-coding/2026-03-28-dynamic-ai-knowledge-system-with-adaptive-prompting]] — hypothesis-to-rule knowledge promotion
