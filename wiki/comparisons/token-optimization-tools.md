---
type: comparison
sources:
  - ai-coding/2026-03-29-reduce-claude-code-tokens-60-90-with-rust-token-killer-rtk.md
  - ai-coding/2026-03-29-optimizing-claude-code-token-usage-by-60.md
  - ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai.md
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
created: 2026-04-05
modified: 2026-04-05
---

# Token Optimization Approaches

Multiple strategies exist for reducing AI token consumption. They operate at different layers and can be combined.

| Approach | Layer | Token Savings | How It Works |
|----------|-------|---------------|--------------|
| **RTK** (Rust Token Killer) | CLI proxy | 60-90% | Filters/compresses shell command outputs before they reach the LLM |
| **Workflow optimization** | User behavior | ~60% | Better prompting, task decomposition, scoped context |
| **Code Mode** (Cloudflare) | Agent architecture | ~81% | Agents write TypeScript against APIs instead of sequential tool calls |
| **Markdown for Agents** (Cloudflare) | Content delivery | ~80% | Edge conversion of HTML to Markdown for AI consumers |
| **Mem0 / Memory layers** | Context management | Varies | Persistent memory prevents re-derivation of context |

## Key Takeaway
The biggest wins come from **preventing unnecessary tokens from entering the context** (RTK, Markdown for Agents) rather than using fewer tokens per request. Combining approaches is multiplicative — RTK on the CLI + Code Mode on the API + memory for context = dramatically lower token budgets.

## Sources
- [[ai-coding/2026-03-29-reduce-claude-code-tokens-60-90-with-rust-token-killer-rtk]] — RTK details
- [[ai-coding/2026-03-29-optimizing-claude-code-token-usage-by-60]] — workflow approach
- [[ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai]] — Markdown for Agents
- [[ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a]] — Code Mode
