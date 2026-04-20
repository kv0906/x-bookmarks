---
type: concept
sources:
  - ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator.md
  - ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag.md
  - ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement.md
  - ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps.md
  - ai-agents/2026-04-06-12-agentic-harness-patterns-from-production-coding-agents.md
  - ai-agents/2026-04-05-critique-of-harness-engineering-in-ai-agent-development.md
  - ai-agents/2026-04-05-autonomous-ai-sports-article-writer-using-deepseek-and-llm-j.md
  - ai-agents/2026-04-11-comprehensive-9-layer-production-ai-architecture-breakdown.md
  - ai-agents/2026-04-11-building-claude-managed-agents-on-vercel-with-secure-integra.md
  - ai-agents/2026-04-12-hands-on-langgraph-course-for-production-grade-llm-agents.md
  - ai-agents/2026-04-15-bridge-claude-managed-agents-with-linear-for-enhanced-team-c.md
created: 2026-04-05
modified: 2026-04-20
---

# Agent Orchestration

Patterns and frameworks for running AI agents reliably at scale, covering harness design, optimization, security, and long-running workflows. The field is moving from simple prompt-response loops to layered production systems with memory, evaluation, runtime control, and shared team workflows, while also facing pushback that "harness engineering" undersells the systems work.

## Key Points
- **Anthropic's harness design** principles for long-running AI apps: loops, handoffs, evaluator separation, runtime control, and backpressure
- **ralph-orchestrator** implements the "Ralph Wiggum technique" with planner/generator/evaluator structure and human checkpoints
- **12 production harness patterns** (bibryam, from the leaked Claude Code source) span memory/context, workflow, tool permissions, and automation
- **The harness critique** (Ashpreet Bedi): "Agent = Model + Harness" undersells the 70% of systems work involving multi-tenancy, RBAC, resource isolation, and durable storage. "Agent = Model + System" is the more honest production framing
- **Agent Lightning** (Microsoft) treats agent improvement as RL/MDP optimization across frameworks like LangChain, AutoGen, and CrewAI
- **Autoresearch** automates iterative prompt and skill improvement with compounding eval loops
- **Plano** provides an AI-native security proxy that filters every request and response
- **LLM-as-judge** shows up in production pipelines like SportsWriter, where generation and evaluation are separated explicitly
- **9-layer production architecture** adds concrete structure: services, agents, prompts, security, evaluation, observability, and agent context files as separate concerns
- **LangGraph** is emerging as the practical orchestration runtime many builders learn first: graph-based control flow, Agentic RAG, ReAct, and reflection workflows are now taught as production patterns
- **Managed agents are moving into team systems**: Claude Managed Agents on Vercel and Linear-style integrations turn orchestration into shared operational infrastructure instead of a solo coding workflow

## Related
- [[ai-agent-memory]] — memory enables stateful orchestration
- [[mcp]] — the protocol layer for agent-to-service communication
- [[dynamic-knowledge-systems]] — self-improving agents use orchestration loops
- [[claude-code]] — practical deployment target and source of many patterns
- [[agent-skills]] — progressive tool expansion maps naturally onto skill systems

## Sources
- [[ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator]] — harness design principles and ralph-orchestrator
- [[ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag]] — RL-based agent optimization
- [[ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement]] — automated prompt/skill improvement
- [[ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps]] — agent security proxy
- [[ai-agents/2026-04-06-12-agentic-harness-patterns-from-production-coding-agents]] — 12 harness patterns categorized with trade-offs
- [[ai-agents/2026-04-05-critique-of-harness-engineering-in-ai-agent-development]] — counterpoint: systems framing vs harness framing
- [[ai-agents/2026-04-05-autonomous-ai-sports-article-writer-using-deepseek-and-llm-j]] — LLM-as-judge in a production content pipeline
- [[ai-agents/2026-04-11-comprehensive-9-layer-production-ai-architecture-breakdown]] — 9-layer production AI architecture checklist
- [[ai-agents/2026-04-11-building-claude-managed-agents-on-vercel-with-secure-integra]] — Claude Managed Agents on Vercel with Vaults and Workflow SDK
- [[ai-agents/2026-04-12-hands-on-langgraph-course-for-production-grade-llm-agents]] — LangGraph as a hands-on orchestration framework
- [[ai-agents/2026-04-15-bridge-claude-managed-agents-with-linear-for-enhanced-team-c]] — managed agents plugged into team workflows via Linear
