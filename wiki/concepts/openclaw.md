---
type: concept
sources:
  - ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development.md
  - ai-agents/2026-04-06-enhancing-ai-agent-personality-with-openclaw-s-molty-soul-up.md
created: 2026-04-07
modified: 2026-04-07
---

# OpenClaw

A file-first cognitive architecture for AI agents where Markdown files provide persistent identity, memory, and coordination across sessions. Used by small personal agent fleets (e.g. six agents coordinating on a Mac Mini via shared markdown files). The distinguishing feature is giving agents explicit **personality** via `SOUL.md`, separate from operational rules.

## Key Points
- **File-first architecture**: identity, memory, and state live in version-controlled markdown — sessions can drop and resume without state loss
- **SOUL.md** defines voice, tone, opinions, humor, and behavioral boundaries — distinct from `CLAUDE.md`-style operational rules or role prompts
- **Molty prompt**: a rewrite prompt that transforms a bland SOUL.md into one with stronger opinions, less corporate jargon, enforced brevity, and permitted humor — aligns with OpenAI's prompt guidance on high-priority instruction layers
- **Agent coordination pattern**: multiple named agents (e.g. "Monica") share markdown files as an async coordination substrate — intel agents write daily signals, other agents read them
- **Gap recognition**: agents can read an [[llm-wiki|idea file]], compare it to their current setup, and identify missing layers (e.g. noticing a compilation layer is absent between ingestion and querying)

## Related
- [[llm-wiki]] — Karpathy's idea file pattern drives OpenClaw's self-improvement loop
- [[dynamic-knowledge-systems]] — markdown files as self-evolving persistent state
- [[ai-agent-memory]] — file-first approach to cross-session memory

## Sources
- [[ai-agents/2026-04-04-karpathy-s-idea-file-for-ai-agent-driven-development]] — Monica agent reading an idea file to find gaps
- [[ai-agents/2026-04-06-enhancing-ai-agent-personality-with-openclaw-s-molty-soul-up]] — SOUL.md and the Molty personality upgrade prompt
