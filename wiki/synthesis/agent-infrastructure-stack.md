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
  - ai-agents/2026-04-11-building-claude-managed-agents-on-vercel-with-secure-integra.md
  - ai-agents/2026-04-13-cloudflare-sandboxes-ga-secure-computing-for-ai-agents.md
  - web-dev/2026-04-14-cloudflare-mesh-workers-vpc-for-private-networking.md
created: 2026-04-05
modified: 2026-04-20
---

# The Emerging Agent Infrastructure Stack

A stack is forming for production AI agents. The recent bookmarks make the layers clearer and add two missing pieces: durable compute and private networking.

## The Stack

```text
Orchestration & Learning   -> ralph-orchestrator, Agent Lightning, managed agents
Memory & Knowledge         -> Mem0, Claude Code memory, dynamic knowledge systems
Security & Observability   -> Plano, Auto Mode-like safety controls, eval loops
Protocol                   -> MCP, WebMCP, Code Mode
Execution                  -> Dynamic Workers, Cloudflare Sandboxes, Vercel Sandboxes
Network & I/O              -> dev-browser, agent-browser, Carbonyl, Cloudflare Mesh
```

## Key Insight: the Stack Is Splitting

- **Cloudflare path** now has two execution layers:
  - [[cloudflare-dynamic-workers]] for fast, stateless, token-efficient execution
  - [[cloudflare-sandboxes]] for stateful shells, filesystems, and background processes
- **Vercel path** remains focused on durable compute and managed operations, with Sandboxes plus Claude Managed Agents

This is a healthier shape than the earlier "fast vs durable" binary. Vendors are starting to offer both ends of the execution spectrum, while differentiating on ergonomics and ecosystem.

## What’s Converging

- **MCP** is winning as the protocol layer
- **Memory** is now a first-class infrastructure concern rather than an application afterthought
- **Managed orchestration** is moving from solo-agent loops into team-facing systems like Linear and Vercel workflows
- **Private networking** is becoming explicit infrastructure through tools like [[cloudflare-mesh]], which lets agents reach private MCP servers, APIs, and databases

## April 2026 Update

- **Cloudflare Sandboxes GA** gives Cloudflare a durable compute layer, not just ultra-fast isolates
- **Cloudflare Mesh + Workers VPC** add a private-network plane for agents, Workers, and Durable Objects
- **Claude Managed Agents on Vercel** keep pushing the "managed runtime for teams" direction
- **Browser Rendering + DevTools MCP** show protocol and I/O layers blending together

## What’s Still Missing

- **Observability standards** across agent frameworks and platforms
- **Portable cost management** across token spend, compute, and tool invocations
- **Agent-to-agent coordination norms** beyond ad hoc orchestration patterns

## Related Concepts
- [[mcp]] — protocol layer
- [[cloudflare-dynamic-workers]] — fast execution layer
- [[cloudflare-sandboxes]] — durable execution layer
- [[cloudflare-mesh]] — private-network layer
- [[agent-orchestration]] — orchestration layer
- [[ai-agent-memory]] — memory layer
- [[comparisons/cloudflare-vs-vercel-sandboxes]] — execution trade-offs
