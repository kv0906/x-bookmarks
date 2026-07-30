---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-coding
  - topic/agent-harness-design
  - topic/developer-workflow
  - topic/sandboxed-agents
  - topic/human-in-the-loop
  - topic/cross-model-review
created: 2026-07-29
modified: 2026-07-29
author: "@burkeholland"
tweet_id: "the-harness-is-all-you-need-mostly"
tweet_url: "https://ampcode.com/threads/T-019facd0-9874-705d-be98-c0c9234123d8"
---

# The Harness Is All You Need (Mostly)

## Summary

Productivity with coding agents comes less from collecting models, MCP servers, skills, and prompt tricks than from mastering one **agent harness**: the environment that gives a model context, tools, permissions, execution loops, and review mechanisms. Learn one harness deeply and build a simple workflow that repeatedly produces high-quality results; add specialized tooling only when a proven need appears.

## Core Workflow

1. **Prototype** — Generate concrete alternatives early, including visual mocks or diagrams for non-visual systems, to expose ambiguity before implementation.
2. **Plan** — Stay in the same topical session, interrogate constraints and edge cases, and apply human expertise before code is written.
3. **Implement** — Give the harness enough autonomy to execute and verify the plan rather than requiring approval for every step.
4. **Iterate with a human** — Inspect the result, refine it, and reject merely “good enough” output. Human judgment and taste set the quality bar.
5. **Cross-model review** — Ask a different model family to rubber-duck the prototype, plan, or implementation so independent blind spots are more likely to surface.
6. **Ship or reset context** — Finish the task, then open a new session when the next job is no longer topical.

## Key Insights

- **Harness fluency compounds.** Interfaces may differ across CLI, editor, and desktop surfaces, but understanding how the harness manages context, tools, permissions, and loops transfers across them.
- **Autonomy needs containment.** Approval fatigue destroys both productivity and meaningful oversight. Let agents act freely inside an isolated sandbox or development container rather than granting broad autonomy on a sensitive local machine.
- **Prototypes reduce rework.** Cheap, concrete alternatives reveal what the user actually wants and surface nuance before time and tokens are spent implementing the wrong thing.
- **Simplicity improves observability.** A repeatable linear workflow makes it easier to know what each agent is doing, where a task stands, and whether context has drifted.
- **Keep sessions topical.** Unrelated work pollutes limited context and makes behavior harder to reason about; start fresh when the subject changes.
- **Tools are optional leverage, not the foundation.** Skills, MCPs, custom agents, and orchestration can help mature workflows, but they should solve demonstrated problems rather than become prerequisites.
- **Human taste remains the final quality gate.** Models cannot infer unstated intent or decide what excellence means. The operator must guide, critique, and insist on the standard that matters.

## Actionable Checklist

- [ ] Choose one agent harness and learn its context, permission, planning, execution, and review features deeply.
- [ ] Run autonomous/allow-all work only in an isolated sandbox with recoverable state.
- [ ] Start each feature or bug with several concrete prototypes or diagrams.
- [ ] Review and challenge the plan before authorizing implementation.
- [ ] Keep one session focused on one coherent task; reset when the topic changes.
- [ ] Iterate until the result meets a human-defined quality bar, not merely until it runs.
- [ ] Use a different model family for a final rubber-duck review on consequential work.
- [ ] Add new tools, skills, or MCPs only when the basic workflow exposes a recurring gap.

## Search Keywords

agent harness, harness engineering, GitHub Copilot workflow, coding agents, sandbox autonomy, allow-all, YOLO mode, prototype-plan-implement, autopilot loop, human-in-the-loop, human taste, cross-model review, rubber-duck review, topical sessions, context management, simple repeatable workflow

## Source Note

Distilled from Burke Holland's user-provided article, “The harness is all you need (mostly).” The original publication URL and date were not included; `tweet_url` records the source thread for provenance.
