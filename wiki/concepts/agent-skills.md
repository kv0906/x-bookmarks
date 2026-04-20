---
type: concept
sources:
  - ai-agents/2026-04-02-ai-agent-skills-integration-in-obsidian-via-vercel-skills-sh.md
  - ai-agents/2026-04-05-developer-s-guide-to-building-adk-agents-with-skills.md
  - tools/2026-04-06-visual-explainer-enhanced-diagram-and-code-review-for-agents.md
  - ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-.md
  - ai-coding/2026-04-09-production-grade-engineering-workflows-for-ai-coding-agents.md
  - ai-agents/2026-04-12-polishing-agent-built-uis-with-curated-skills.md
  - ai-agents/2026-04-13-graph-based-agent-skill-retrieval-for-llms-graph-of-skills.md
created: 2026-04-07
modified: 2026-04-20
---

# Agent Skills

An emerging standard for giving AI agents reusable, installable capabilities: discrete skills that can be loaded when needed instead of bloating the base prompt. The category is now splitting into three layers: skill packaging, skill craftsmanship, and skill retrieval.

## Key Points
- **skills.sh** popularized open, command-line-invocable agent skills and gave the category a shared packaging shape
- **Google ADK SkillToolset** broadens the model with inline, file-based, external, and self-extending skill patterns
- **Progressive disclosure** is the core architectural win: skills keep context focused by loading domain expertise only when a task actually needs it
- **Concrete skills in the wild** include visual-explainer, Graphify, and [[fireworks-tech-graph]]
- **Addy Osmani's Agent Skills** turn engineering discipline itself into a skill package, including anti-rationalization tables and production-minded workflows
- **UI-specific skill packs** such as `ui-skills` show that polish can be modularized instead of left to the agent's default taste
- **Graph of Skills (GoS)** adds retrieval discipline for large skill libraries by fetching the relevant skill plus prerequisites instead of dumping an entire catalog into context

## Related
- [[mcp]] — skills are packaged capabilities; MCP is the lower-level protocol
- [[claude-code]] — one of the main host environments for skills today
- [[llm-wiki]] — Obsidian and markdown workflows fit naturally into skills
- [[agent-orchestration]] — skills often get loaded through progressive tool expansion patterns

## Sources
- [[ai-agents/2026-04-02-ai-agent-skills-integration-in-obsidian-via-vercel-skills-sh]] — skills.sh + Obsidian Skills integration
- [[ai-agents/2026-04-05-developer-s-guide-to-building-adk-agents-with-skills]] — ADK skill patterns including self-extending skills
- [[tools/2026-04-06-visual-explainer-enhanced-diagram-and-code-review-for-agents]] — visual-explainer as a concrete installable skill
- [[ai-agents/2026-04-06-graphify-llm-powered-knowledge-graph-tool-for-codebases-and-]] — Graphify distributed as an agent skill
- [[ai-coding/2026-04-09-production-grade-engineering-workflows-for-ai-coding-agents]] — Agent Skills for production engineering workflows
- [[ai-agents/2026-04-12-polishing-agent-built-uis-with-curated-skills]] — `ui-skills` as a practical UI-polish skill pack
- [[ai-agents/2026-04-13-graph-based-agent-skill-retrieval-for-llms-graph-of-skills]] — dependency-aware retrieval for large skill libraries
