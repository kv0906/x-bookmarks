---
type: concept
sources:
  - ai-coding/2026-03-29-optimizing-claude-code-token-usage-by-60.md
  - ai-coding/2026-03-29-reduce-claude-code-tokens-60-90-with-rust-token-killer-rtk.md
  - ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai.md
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
  - ai-agents/2026-03-27-mem0-universal-memory-layer-for-ai-agents.md
created: 2026-04-05
modified: 2026-04-05
---

# Token Optimization

A recurring concern across AI coding and agent workflows — reducing token consumption to stay within subscription limits, cut costs, and improve response speed. Multiple approaches exist at different layers of the stack.

## Key Points
- **RTK (Rust Token Killer)** is a CLI proxy that sits between shell and AI assistants, filtering/compressing command outputs for 60-90% token savings with zero workflow changes
- **Workflow optimization** techniques can cut Claude Code token usage by 60% through better prompting and task decomposition
- **Cloudflare Code Mode** achieves 81% fewer tokens vs sequential tool calls by letting agents write code instead of calling tools one at a time
- **Markdown for Agents** (Cloudflare) converts HTML to Markdown at the edge, reducing token usage by up to 80% for web content
- **Mem0** optimizes tokens by providing persistent memory so agents don't re-derive context from scratch each conversation

## Related
- [[claude-code]] — token optimization is critical for Claude Code users
- [[cloudflare-dynamic-workers]] — Code Mode and Markdown for Agents
- [[comparisons/token-optimization-tools]] — detailed comparison of approaches

## Sources
- [[ai-coding/2026-03-29-reduce-claude-code-tokens-60-90-with-rust-token-killer-rtk]] — RTK CLI proxy
- [[ai-coding/2026-03-29-optimizing-claude-code-token-usage-by-60]] — workflow optimization
- [[ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai]] — Markdown for Agents
- [[ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a]] — Code Mode token savings
- [[ai-agents/2026-03-27-mem0-universal-memory-layer-for-ai-agents]] — memory-based optimization
