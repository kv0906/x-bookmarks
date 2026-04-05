---
type: concept
sources:
  - ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator.md
  - ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag.md
  - ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement.md
  - ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps.md
created: 2026-04-05
modified: 2026-04-05
---

# Agent Orchestration

Patterns and frameworks for running AI agents reliably at scale — covering harness design, optimization, security, and long-running workflows. The field is moving from simple prompt-response to sophisticated architectures with loops, handoffs, evaluation, and runtime control.

## Key Points
- **Anthropic's harness design** principles for long-running AI apps: loops, handoffs, evaluator separation, runtime control, and backpressure
- **ralph-orchestrator** implements the "Ralph Wiggum technique" — planner/generator/evaluator architecture for autonomous agent orchestration with human-in-the-loop checkpoints
- **Microsoft's Agent Lightning** optimizes agents through reinforcement learning, using MDP abstraction to frame agent improvement as a policy optimization problem, working across LangChain, AutoGen, CrewAI
- **Autoresearch** (Karpathy) automates iterative improvement of prompts and agent skills — improved a Claude Code skill from 41% to 92% accuracy in 4 automated rounds
- **Plano** provides a security layer — an AI-native proxy that filters every request/response before agents can act, enabling safe connection to real inboxes, calendars, and APIs

## Related
- [[ai-agent-memory]] — memory enables stateful orchestration
- [[mcp]] — the protocol layer for agent-to-service communication
- [[dynamic-knowledge-systems]] — self-improving agents use orchestration loops
- [[claude-code]] — practical deployment target for orchestrated agents

## Sources
- [[ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator]] — harness design principles and ralph-orchestrator
- [[ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag]] — RL-based agent optimization
- [[ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement]] — automated prompt/skill improvement
- [[ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps]] — agent security proxy
