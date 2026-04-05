---
type: synthesis
sources:
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
  - ai-agents/2026-03-25-typescript-sdk-for-model-context-protocol-for-llm-integratio.md
  - ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator.md
  - ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps.md
  - ai-agents/2026-03-27-mem0-universal-memory-layer-for-ai-agents.md
  - ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag.md
  - ai-agents/2026-03-31-claude-code-s-sophisticated-ai-memory-architecture.md
  - web-dev/2026-03-24-cloudflare-dynamic-workers-faster-lighter-serverless-sandbox.md
  - web-dev/2026-03-26-vercel-sandbox-automatic-persistence-beta.md
  - tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con.md
created: 2026-04-05
modified: 2026-04-05
---

# The Emerging Agent Infrastructure Stack

A stack is forming for production AI agents. Synthesizing 10+ bookmarks reveals distinct layers, each with competing solutions:

## The Stack

```
┌─────────────────────────────────────┐
│  Orchestration & Learning           │  ralph-orchestrator, Agent Lightning
│  (loops, eval, RL optimization)     │  autoresearch
├───────���─────────────────────────────┤
│  Memory & Knowledge                 │  Mem0, Claude Code memory,
│  (persistence, context, learning)   │  dynamic knowledge systems
├──────────────────��──────────────────┤
│  Security & Observability           │  Plano proxy, Auto Mode classifiers
│  (filtering, auditing, safety)      │
├─��────────────────────────────��──────┤
│  Protocol                           │  MCP, WebMCP, Code Mode
│  (tool calling, service discovery)  │
├─────────────────────────────────────┤
│  Execution                          │  Cloudflare Dynamic Workers,
│  (sandboxes, isolates, VMs)         │  Vercel Sandboxes, V8 isolates
├─────��──────────────────────────���────┤
│  I/O                                │  dev-browser, Carbonyl, agent-browser
│  (browser, terminal, APIs)          │
└─────────────────────────────────────┘
```

## Key Insight: Speed vs Durability Trade-off

The stack splits on a fundamental tension:
- **Cloudflare path**: fast, stateless, token-efficient (V8 isolates, Code Mode, Markdown for Agents)
- **Vercel path**: durable, stateful, flexible (microVMs, filesystem persistence, full Linux)

Most production agents will need both — fast execution for API calls, durable state for long-running workflows.

## What's Converging

- **MCP** is winning as the protocol layer — adopted by both Claude Code and Codex
- **Memory** is becoming a first-class infrastructure concern, not an afterthought
- **Security** is moving from "permission prompts" to "AI-classified safety" (Auto Mode, Plano proxy)
- **Optimization** is becoming automated — Agent Lightning and autoresearch both use iterative loops to improve agent performance without human tuning

## What's Still Missing

- **Observability standards** — each tool has its own logging/monitoring approach
- **Agent-to-agent communication** — current stack assumes single-agent architectures
- **Cost management** — no standard way to budget and track token/compute costs across the stack

## Related Concepts
- [[mcp]] — protocol layer
- [[cloudflare-dynamic-workers]] — execution layer
- [[agent-orchestration]] — orchestration layer
- [[ai-agent-memory]] — memory layer
- [[comparisons/cloudflare-vs-vercel-sandboxes]] �� execution layer comparison
- [[comparisons/token-optimization-tools]] — cost management approaches
