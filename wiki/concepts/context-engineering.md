---
type: concept
sources:
  - ai-agents/2026-04-09-context-engineering-evolution-of-rag-and-agentic-search.md
  - ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os.md
created: 2026-04-12
modified: 2026-04-12
---

# Context Engineering

The evolution beyond prompt engineering: instead of optimizing what you say to an LLM, you optimize what information the LLM has access to and how it assembles that information. Context is scattered across databases, filesystems, web, and memory — the agent's job is to build its own context dynamically from these sources.

## Key Points
- **Three eras of retrieval**: RAG (2020-2023, one-shot fixed retrieval) → Agentic RAG (2023-2024, multi-hop with tool use, agent decides if/when/what to retrieve) → Context Engineering (2025+, agent combines multiple retrieval tools to construct context from diverse sources)
- The core shift is from "retrieve once" to "the agent builds its own context" — the agent decides what sources to query, in what order, and how to synthesize results
- **Practical implication**: context engineering is what makes [[llm-wiki]] and Personal OS patterns work — the filesystem, MCP hooks, voice pipelines, and Chrome extensions are all context sources the agent orchestrates
- The bottleneck has moved from "how to retrieve" to "how to feed" — Koylan's insight that the knowledge transfer pipeline (getting information into the right format, at the right time) is the harder unsolved problem
- Workshop materials and code available from @helloiamleonie's GitHub repo on agentic search

## Related
- [[dynamic-knowledge-systems]] — the self-evolving systems that context engineering enables
- [[llm-wiki]] — a concrete implementation of the context engineering philosophy
- [[ai-agent-memory]] — memory as one of several context sources
- [[agent-orchestration]] — agents need orchestration to manage multiple context sources

## Sources
- [[ai-agents/2026-04-09-context-engineering-evolution-of-rag-and-agentic-search]] — RAG → Agentic RAG → Context Engineering evolution with workshop materials
- [[ai-agents/2026-04-09-scaling-personal-ai-knowledge-bases-filesystem-as-os]] — Personal OS, filesystem-as-database, knowledge transfer pipeline as bottleneck
