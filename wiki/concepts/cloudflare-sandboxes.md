---
type: concept
sources:
  - ai-agents/2026-04-13-cloudflare-sandboxes-ga-secure-computing-for-ai-agents.md
  - ai-agents/2026-04-13-cloudflare-sandboxes-persistent-environments-for-ai-agents.md
created: 2026-04-20
modified: 2026-04-20
---

# Cloudflare Sandboxes

Cloudflare's durable compute environment for AI agents: isolated workspaces with a real shell, filesystem, and background processes that can pause and resume. Unlike [[cloudflare-dynamic-workers]], Sandboxes are for engineering loops that need state, not just ultra-fast request handling.

## Key Points
- **Persistent compute** lets agents clone repos, run tests, install tools, and resume later without losing state
- **Isolation model** gives Cloudflare a secure place for AI-generated or untrusted code to execute with machine-like context
- **Human-like engineering loop** becomes possible inside Cloudflare's stack: clone, run, inspect, fix, repeat
- Sandboxes close an important gap in the platform: Cloudflare now has both fast stateless isolates and durable stateful compute for agents

## Related
- [[cloudflare-dynamic-workers]] — Cloudflare's fast stateless execution layer
- [[comparisons/cloudflare-vs-vercel-sandboxes]] — execution-model trade-offs across platforms
- [[agent-orchestration]] — durable environments make longer-running orchestration practical

## Sources
- [[ai-agents/2026-04-13-cloudflare-sandboxes-ga-secure-computing-for-ai-agents]] — GA announcement and secure-agent-compute positioning
- [[ai-agents/2026-04-13-cloudflare-sandboxes-persistent-environments-for-ai-agents]] — persistent environment details and engineering-loop framing
