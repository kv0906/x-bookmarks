---
type: concept
sources:
  - ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator.md
  - ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag.md
  - ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement.md
  - ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps.md
  - ai-agents/2026-04-06-12-agentic-harness-patterns-from-production-coding-agents.md
  - misc/2026-04-05-critique-of-harness-engineering-in-ai-agent-development.md
  - ai-agents/2026-04-05-autonomous-ai-sports-article-writer-using-deepseek-and-llm-j.md
created: 2026-04-05
modified: 2026-04-07
---

# Agent Orchestration

Patterns and frameworks for running AI agents reliably at scale — covering harness design, optimization, security, and long-running workflows. The field is moving from simple prompt-response to sophisticated architectures with loops, handoffs, evaluation, and runtime control — while simultaneously facing pushback that "harness engineering" underserves the real systems work.

## Key Points
- **Anthropic's harness design** principles for long-running AI apps: loops, handoffs, evaluator separation, runtime control, and backpressure
- **ralph-orchestrator** implements the "Ralph Wiggum technique" — planner/generator/evaluator architecture with human-in-the-loop checkpoints
- **12 production harness patterns** (bibryam, from the leaked Claude Code source) across four categories:
  - *Memory & Context*: Persistent Instruction File, Scoped Context, Tiered Memory, Dream Consolidation, Progressive Compaction
  - *Workflow*: Explore-Plan-Act, Context-isolated Subagents, Fork-Join Parallelism
  - *Tools & Permissions*: Progressive Tool Expansion, Command Risk Classification, Single-purpose Tools
  - *Automation*: Deterministic Lifecycle Hooks
- **The harness critique** (Ashpreet Bedi): "Agent = Model + Harness" undersells the 70% of systems work (multi-tenancy, RBAC, resource isolation, durable storage). Filesystem-as-memory is a single-user pattern; virtualized filesystems wrapping databases are solving problems that shouldn't exist. "Agent = Model + System" is a better framing for production products
- **Agent Lightning** (Microsoft) optimizes agents through RL, framing improvement as MDP policy optimization across LangChain, AutoGen, CrewAI
- **Autoresearch** (Karpathy) automates iterative prompt/skill improvement — 41% → 92% in 4 rounds
- **Plano** provides an AI-native security proxy filtering every request/response
- **LLM-as-judge** pattern in practice: SportsWriter uses DeepSeek for generation and an LLM judge for quality assessment — scalable automated eval

## Related
- [[ai-agent-memory]] — memory enables stateful orchestration
- [[mcp]] — the protocol layer for agent-to-service communication
- [[dynamic-knowledge-systems]] — self-improving agents use orchestration loops
- [[claude-code]] — practical deployment target, origin of many patterns
- [[agent-skills]] — progressive tool expansion maps to the skills loading model

## Sources
- [[ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator]] — harness design principles and ralph-orchestrator
- [[ai-agents/2026-03-29-microsoft-s-agent-lightning-reinforcement-learning-for-ai-ag]] — RL-based agent optimization
- [[ai-agents/2026-03-20-autoresearch-for-pms-automating-skill-and-prompt-improvement]] — automated prompt/skill improvement
- [[ai-agents/2026-03-25-plano-secure-ai-native-proxy-for-agentic-apps]] — agent security proxy
- [[ai-agents/2026-04-06-12-agentic-harness-patterns-from-production-coding-agents]] — 12 patterns categorized with trade-offs
- [[misc/2026-04-05-critique-of-harness-engineering-in-ai-agent-development]] — counterpoint: systems vs harness framing
- [[ai-agents/2026-04-05-autonomous-ai-sports-article-writer-using-deepseek-and-llm-j]] — LLM-as-judge in a production content pipeline
