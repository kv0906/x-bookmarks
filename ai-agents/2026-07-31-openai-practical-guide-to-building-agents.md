---
type: reference
status: active
tags:
  - type/reference
  - source/web-article
  - topic/ai-agents
  - topic/agent-architecture
  - topic/agent-harness-design
  - topic/ai-orchestration
  - topic/tool-use
  - topic/guardrails
  - topic/human-in-the-loop
created: 2026-07-31
modified: 2026-07-31
author: "OpenAI"
tweet_id: "openai-practical-guide-to-building-agents"
tweet_url: "https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/"
---

# A Practical Guide to Building Agents

## Summary

OpenAI's introductory production guide frames an agent as a model-directed workflow—not merely an LLM feature. Its core advice is conservative: use agents where ambiguity defeats deterministic automation, begin with one capable model plus clear tools and instructions, evaluate before optimizing, and add multi-agent topology only after a single agent fails for identifiable reasons. Reliability comes from bounded execution, layered guardrails, ordinary application security, and explicit human escalation.

## Source Metadata

- **Publisher:** OpenAI
- **Canonical article:** [A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)
- **Official PDF:** [A practical guide to building agents](https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf)
- **Individual author:** Not stated on the official article or PDF.
- **Publication date:** Not stated on the official article or PDF; secondary sources place its release in April 2025, but that date is **unverified** here.

## OpenAI's Claims and Recommendations

### Choose agentic work selectively

OpenAI defines an agent by two properties: an LLM controls workflow execution and completion, and it dynamically selects tools to gather context or take actions within guardrails. A chatbot, classifier, or single-turn generation flow is therefore not automatically an agent.

The guide recommends agents primarily for workflows with:

- nuanced or context-dependent decisions;
- rule sets that have become brittle or too expensive to maintain; or
- substantial unstructured input that deterministic systems handle poorly.

If a stable rule or conventional workflow can solve the problem, OpenAI recommends retaining the deterministic solution.

### Build from model, tools, and instructions

- **Model:** Establish evals, first reach the accuracy target with the strongest suitable model, then replace steps with smaller models where measured quality permits. This orders optimization correctly: capability baseline before cost and latency tuning.
- **Tools:** Standardize, document, test, and reuse tool definitions. Separate data tools (retrieve context), action tools (change external state), and orchestration tools (invoke specialist agents). Legacy UI automation via computer use is an option when APIs do not exist, not a replacement for good APIs.
- **Instructions:** Translate existing policies and operating procedures into small, explicit routines. Each step should name a concrete action or output, and dense tasks should be decomposed to reduce interpretation ambiguity.

### Treat every run as a bounded loop

A single agent typically executes in a loop until it produces final output, calls a designated completion tool, encounters an error, or reaches a turn limit. OpenAI advises maximizing this simple form first because one agent is easier to evaluate and maintain while tools can be added incrementally.

Move to multiple agents when evidence shows that one agent repeatedly mishandles deeply branched instructions or chooses among overlapping tools incorrectly. The guide presents two graph patterns:

| Pattern | Control model | Best fit | Main tradeoff |
|---|---|---|---|
| **Manager** | One user-facing agent calls specialists as tools and synthesizes their results. | A unified interaction needs central control and context. | The manager adds a coordination step and remains responsible for routing and synthesis quality. |
| **Decentralized handoff** | Peer agents transfer execution and conversation state to one another. | A specialist should take over the workflow and interact directly with the user. | Distributed control makes routing, debugging, and consistent user experience harder. |

### Layer safety rather than trusting one filter

OpenAI recommends combining specialized controls such as relevance checks, safety classifiers, rules or regex, moderation, tool safeguards, and output validation. Guardrails supplement—not replace—authentication, authorization, least-privilege access, and standard software security.

Human intervention should be a designed terminal path, especially when retry/action thresholds are exceeded or an action is sensitive, irreversible, or high stakes. The guide recommends retaining oversight for such actions until operational evidence supports more autonomy.

## Synthesis and Tradeoffs

- **The loop is the minimum viable orchestration unit.** This maps directly to [[ai-agents/2026-07-27-master-agent-architecture-unifying-harness-loop-and-graph-engineering|Harness, Loop, and Graph Engineering]]: the OpenAI “run” is the bounded loop; manager and handoff systems add graph topology. The article is lighter on the surrounding harness—state durability, sandboxing, auditability, and deterministic acceptance gates—which remains necessary for production reliability.
- **Multi-agent is a response to measured failure, not a maturity level.** Extra agents improve separation only when specialization offsets more model calls, latency, handoff loss, routing errors, and observability burden. This reinforces [[ai-coding/2026-07-29-the-harness-is-all-you-need-mostly|The Harness Is All You Need (Mostly)]]: master a simple contained workflow before accumulating orchestration.
- **Tool design is an API and security problem.** Clear schemas improve model selection, but action tools also need narrow permissions, idempotency where possible, validation, audit logs, and approval boundaries. These controls should live in code and infrastructure, not only in prompts.
- **Guardrails should be risk-driven and evidence-fed.** Start with privacy, authorization, content safety, and irreversible actions; then turn observed failures into focused controls and regression evals. More filters can increase false positives, latency, and user friction, so each layer needs measurement.
- **Model optimization is empirical.** A smaller model is cheaper only if retries, misroutes, and escalations do not erase the savings. Evaluate end-to-end workflow outcomes rather than isolated response quality.

## Concise Implementation Checklist

- [ ] Confirm the workflow truly needs semantic judgment, adaptable decisions, or unstructured-data handling; otherwise use deterministic automation.
- [ ] Define success, failure, and escalation outcomes before selecting a model or framework.
- [ ] Build an eval set from representative tasks and costly edge cases.
- [ ] Start with one capable agent, a small set of distinct tools, and explicit action-oriented instructions.
- [ ] Give every run exit conditions and limits for turns, retries, time, and/or spend.
- [ ] Keep deterministic validation, authorization, and business invariants outside the model.
- [ ] Scope action tools by permission and risk; require approval for sensitive or irreversible operations.
- [ ] Add layered input, tool, and output controls based on the threat model and observed failures.
- [ ] Instrument tool calls, failures, retries, latency, cost, and human escalations.
- [ ] Introduce manager or handoff agents only after traces show persistent instruction or tool-selection failure.
- [ ] Re-run evals after changing models, tools, instructions, guardrails, or topology.
- [ ] Pilot with real users, review failures, and expand autonomy gradually.

## Related Notes

- [[ai-coding/2026-07-29-the-harness-is-all-you-need-mostly|The Harness Is All You Need (Mostly)]] — contained autonomy and incremental workflow complexity.
- [[ai-agents/2026-07-27-master-agent-architecture-unifying-harness-loop-and-graph-engineering|Master Agent Architecture: Unifying Harness, Loop, and Graph Engineering]] — a fuller runtime model for the guide's loops and multi-agent graphs.
- [[ai-agents/2026-04-06-12-agentic-harness-patterns-from-production-coding-agents|12 Agentic Harness Patterns from Production Coding Agents]] — concrete context, workflow, tool, and permission patterns.
- [[ai-agents/2026-03-25-harness-design-for-long-running-ai-apps-ralph-orchestrator|Harness Design for Long-Running AI Apps & Ralph Orchestrator]] — long-running loops, handoffs, evaluator separation, and runtime control.
- [[wiki/concepts/agent-orchestration|Agent Orchestration]] — compiled overview of orchestration approaches in the vault.

## Search Keywords

OpenAI agent guide, agent architecture, model tools instructions, agent run loop, bounded loop, single-agent system, multi-agent system, manager pattern, agent handoff, orchestration graph, tool design, agent evals, guardrails, human intervention, least privilege, production agents

## Verification Notes

The recommendations above were checked against OpenAI's official article and official PDF. The guide says its practices are distilled from customer deployments but publishes no datasets, comparative measurements, or reproducible benchmarks; treat effectiveness claims as vendor guidance to validate in the target workflow, not as proven universal results.
