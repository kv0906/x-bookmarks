---
type: concept
sources:
  - ai-coding/2026-03-28-dynamic-ai-knowledge-system-with-adaptive-prompting.md
  - ai-coding/2026-03-28-dynamic-claude-instructions-building-a-self-evolving-ai-know.md
  - ai-agents/2026-03-31-claude-code-s-sophisticated-ai-memory-architecture.md
  - ai-agents/2026-04-01-agent-lattice-markdown-based-knowledge-graph-for-codebases.md
  - ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and.md
created: 2026-04-05
modified: 2026-04-07
---

# Dynamic Knowledge Systems

Approaches for making AI instructions and knowledge bases self-evolving — systems where the AI reviews, tests, and refines its own knowledge over time rather than operating from static prompts. This is a step beyond simple memory toward compounding intelligence.

## Key Points
- **Hypothesis-to-rule promotion cycle**: review rules before tasks → test hypotheses during work → promote confirmed hypotheses to rules → demote broken rules → organize in domain folders (knowledge.md, hypotheses.md, rules.md)
- **Compounding CLAUDE.md** approach: Claude extracts insights after each task, tests them, and maintains its own external knowledge system that evolves session over session
- **Agent Lattice (lat.md)** creates a Markdown-based knowledge graph for codebases with CLI management (`lat init/check/search`), pre-commit hooks, and GitHub bot integrations
- **Claude Code's autoDream** rewrites and prunes memory in the background, effectively self-editing its own knowledge base
- **Key insight**: the most effective systems separate observation (what might be true) from conviction (what's been validated) — the promotion step is what prevents knowledge pollution
- **CLAUDE.md as decision engine** (Pawel Huryn): three things make a config file compound into intelligence — knowledge architecture (INDEX routing), decision journal (LLM writes back templates/hypotheses/performance data after each session), and quality gate (hard rules that override instincts)

## Related
- [[ai-agent-memory]] — memory is the infrastructure; knowledge systems are the process
- [[claude-code]] — practical platform for dynamic knowledge approaches
- [[agent-orchestration]] — self-improving agents use orchestration loops for the promote/demote cycle
- [[llm-wiki]] — the Karpathy pattern that elevates these ideas into a full knowledge-base architecture

## Sources
- [[ai-coding/2026-03-28-dynamic-ai-knowledge-system-with-adaptive-prompting]] — hypothesis-to-rule system with Prompt Cowboy
- [[ai-coding/2026-03-28-dynamic-claude-instructions-building-a-self-evolving-ai-know]] — compounding CLAUDE.md approach
- [[ai-agents/2026-03-31-claude-code-s-sophisticated-ai-memory-architecture]] — autoDream background self-editing
- [[ai-agents/2026-04-01-agent-lattice-markdown-based-knowledge-graph-for-codebases]] — lat.md codebase knowledge graph
- [[ai-agents/2026-04-04-evolving-llm-prompts-into-self-managing-decision-engines-and]] — CLAUDE.md as decision engine architecture
