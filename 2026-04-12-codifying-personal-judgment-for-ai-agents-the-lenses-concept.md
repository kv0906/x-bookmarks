---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/human-computer-interaction
  - topic/decision-making
  - topic/software-architecture
created: 2026-04-12
modified: 2026-04-12
author: "@PawelHuryn"
tweet_id: "2043186885867020498"
tweet_url: "https://x.com/PawelHuryn/status/2043186885867020498"
---

# Codifying Personal Judgment for AI Agents: The 'Lenses' Concept

## Summary
This tweet introduces the concept of 'lenses' as a way to codify personal judgment, beliefs, and thinking processes for AI agents. It argues that while agents have access to facts, strategy, and architecture, they lack the nuanced human approach to risk, delegation, and 'good enough' thresholds. Bookmarking this tweet highlights an interest in improving AI agent decision-making beyond mere data retrieval, by embedding qualitative human judgment.

## Key Insights
- AI agents often lack codified human judgment, including beliefs, risk approach, and personal thresholds, which are crucial for decision-making.
- These personal decision-making frameworks are termed 'lenses': pre-built theses with triggers that guide how a person thinks in specific situations.
- Lenses allow agents to make decisions aligned with human intent (e.g., prioritizing security architecturally) rather than generic tradeoffs or default behaviors (e.g., using LLM calls for every step).
- The benefit of lenses is not in retrieving answers but in filtering options through a specific point of view, essentially codifying human judgment.
- This approach differentiates agents that merely process data from those that can truly reflect human judgment without constant human intervention.

## Content Angles
- Write an article exploring methods to codify tacit knowledge and personal judgment for AI systems, using 'lenses' as a core example.
- Develop a framework or tool design for implementing 'lenses' within an AI agent's reasoning engine, demonstrating how it can influence outcomes.

## Original
> Your agent has your docs. Your strategy. Your architecture decisions. Your context.
> 
> The thing it's missing is how you think.
> 
> Not facts — beliefs. Your approach to risk. Your delegation instincts. When you push back vs. when you trust. Your threshold for "good enough."
> 
> These shape every decision you make. But they live in your head, not in any artifact. No document type captures them — they're not strategy (too granular), not process (too opinionated), not architecture (too personal).
> 
> I call them lenses. Pre-built theses with triggers. Not "here's a fact" but "when this situation comes up, here's how I think about it."
> 
> Example: Your agent is choosing between adding a new feature or hardening the existing one. Without a lens, it weighs generic tradeoffs. With a lens — "security is architectural, not a feature you bolt on later" — it makes the call you would have made.
> 
> Another: Your agent is building a pipeline. Without a lens, it defaults to LLM calls for every step. With "orchestration > autonomy" loaded, it uses code for deterministic logic and saves cognition for when reasoning is actually needed.
> 
> The agent doesn't look lenses up. It reasons through them — not retrieving an answer, but filtering options through a point of view.
> 
> Your agents don't need more facts or instructions. They need your judgment — codified.
> 
> The difference is whether your agent stops to ask you what to do with the data.
> — @PawelHuryn, 2026-04-12
>
> likes: 50, retweets: 4, replies: 9

---
*Auto-imported from X Bookmarks*
