---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/llm-context-management
  - topic/knowledge-graphs
  - topic/skill-retrieval
created: 2026-04-13
modified: 2026-04-13
author: "@tom_doerr"
tweet_id: "2043664579482276138"
tweet_url: "https://x.com/tom_doerr/status/2043664579482276138"
---

# Graph-based Agent Skill Retrieval for LLMs (Graph of Skills)

## Summary
This bookmarked tweet highlights the GitHub repository for "Graph of Skills (GoS)," an innovative system designed to enhance AI agent performance by efficiently retrieving relevant skills from extensive libraries. GoS tackles the critical issues of context window saturation and high token costs in large language models by building a dependency-aware skill graph and employing a structural retrieval process, ensuring agents receive only the necessary skills and their prerequisites for a specific task.

## Key Insights
- GoS directly addresses the problem of AI agent context window saturation, which causes increased token costs, higher hallucination rates, and latency when agents access large skill sets.
- The system utilizes a graph structure to capture skill dependencies and prerequisites, enabling a 'dependency-aware' retrieval that provides a more complete and functional skill set compared to simple semantic matching.
- Empirical results show that GoS improves the average reward of AI agents by 43.6% and reduces input tokens by 37.8% compared to baselines that load full skill libraries.
- The retrieval mechanism in GoS combines initial semantic and lexical candidate seeding with graph-based reranking using reverse-weighted Personalized PageRank to effectively identify and prioritize relevant skills.

## Content Angles
- A guide for AI developers on implementing graph-based skill retrieval to optimize LLM agent performance and manage context window limitations.
- An analysis of advanced retrieval-augmented generation (RAG) techniques for AI agents, focusing on the benefits of structural knowledge graphs for skill management.

## Linked Content
- [https://github.com/davidliuk/graph-of-skills](https://github.com/davidliuk/graph-of-skills): The official GitHub repository for 'Graph of Skills' (GoS), providing the implementation, detailed documentation, and a quick-start guide. It outlines how GoS constructs a skill graph from markdown documents offline and performs efficient, dependency-aware skill retrieval during inference, along with instructions for setup and evaluation on benchmarks like SkillsBench and ALFWorld.

## Original
> Graph-based agent skill retrieval
> 
> https://t.co/UDLc6P4kGw https://t.co/S2ie2uWa6R
> — @tom_doerr, 2026-04-13
>
> likes: 232, retweets: 38, replies: 1

---
*Auto-imported from X Bookmarks*
