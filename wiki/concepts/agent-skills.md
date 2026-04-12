---
type: concept
sources:
  - ai-agents/2026-04-02-ai-agent-skills-integration-in-obsidian-via-vercel-skills-sh.md
  - ai-agents/2026-04-05-developer-s-guide-to-building-adk-agents-with-skills.md
  - tools/2026-04-06-visual-explainer-enhanced-diagram-and-code-review-for-agents.md
  - ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-.md
  - ai-coding/2026-04-09-production-grade-engineering-workflows-for-ai-coding-agents.md
created: 2026-04-07
modified: 2026-04-12
---

# Agent Skills

An emerging standard for giving AI agents reusable, installable capabilities — discrete command-line "skills" that expand an agent's abilities at runtime without bloating the system prompt. Two major ecosystems are forming: Vercel's skills.sh (open ecosystem directory) and Google ADK's SkillToolset. The unifying principle is **progressive disclosure** — load domain expertise only when needed.

## Key Points
- **skills.sh** (Vercel): open-source ecosystem and directory for standardized, command-line-invocable agent skills. Promotes predictable, auditable actions
- **Obsidian Skills** package uses skills.sh to teach agents about Obsidian Markdown (wikilinks, embeds), Bases (structured data), and JSON Canvas — a pattern tool vendors are following for deep vertical integrations
- **Google ADK SkillToolset** defines four skill patterns: Inline (hardcoded), File-Based (external instructions), External (community repos), and **Self-extending Meta Skill** (skills that write new skills at runtime)
- **Progressive disclosure** is the architectural win: instead of a monolithic system prompt, the agent loads context only when a task requires it — better efficiency, cleaner reasoning
- **Concrete skills in the wild**: visual-explainer replaces ASCII diagrams with interactive HTML pages (Mermaid with zoom/pan, dark/light themes); Graphify ships as a Claude Code skill installable via `pip install graphify && graphify install`; [[fireworks-tech-graph]] generates production-quality technical diagrams from natural language
- **Addy Osmani's "Agent Skills"** (open-source, MIT): production-grade engineering workflows as Markdown files that force agents to behave like senior engineers — spec-driven development, plan-mode task breakdown, TDD with Prove-It pattern, 5-axis code review, OWASP security hardening. Each skill includes **anti-rationalization tables** with documented rebuttals for excuses agents use to skip steps. Works across Claude Code, Cursor, Windsurf, Copilot, and Codex
- Skills are the packaging format complementing [[mcp]] (protocol) and [[claude-code]] plugins

## Related
- [[mcp]] — the protocol layer; skills are higher-level packaged capabilities
- [[claude-code]] — primary host platform for skills today
- [[llm-wiki]] — Obsidian skill enables the LLM Wiki workflow end-to-end
- [[agent-orchestration]] — skills are loaded via progressive-tool-expansion harness patterns

## Sources
- [[ai-agents/2026-04-02-ai-agent-skills-integration-in-obsidian-via-vercel-skills-sh]] — skills.sh + Obsidian Skills integration
- [[ai-agents/2026-04-05-developer-s-guide-to-building-adk-agents-with-skills]] — four ADK skill patterns including self-extending
- [[tools/2026-04-06-visual-explainer-enhanced-diagram-and-code-review-for-agents]] — visual-explainer as a concrete installable skill
- [[ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-]] — Graphify distributed as an agent skill
- [[ai-coding/2026-04-09-production-grade-engineering-workflows-for-ai-coding-agents]] — Addy Osmani's Agent Skills with anti-rationalization tables
