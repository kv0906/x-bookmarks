---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/llm-agents
  - topic/knowledge-management
  - topic/ai-workflows
  - topic/decision-making
created: 2026-04-04
modified: 2026-04-04
author: "@PawelHuryn"
tweet_id: "2040491419497058695"
tweet_url: "https://x.com/PawelHuryn/status/2040491419497058695"
---

# Evolving LLM Prompts into Self-Managing Decision Engines and Knowledge Bases

## Summary
This content discusses transforming static LLM configuration files (like CLAUDE.md) into dynamic decision engines. It highlights Andrej Karpathy's 'LLM Knowledge Bases' concept, where LLMs actively compile, maintain, and evolve structured knowledge wikis from raw source material, rather than just serving as a retrieval tool. The core idea is that an LLM can act as a 'research librarian,' managing a personal knowledge base of interlinked Markdown files, making the system smarter with every interaction by employing architectural patterns like indexed knowledge, decision journaling, and quality gates.

## Key Insights
- LLM configurations (e.g., CLAUDE.md) should function as decision engines that dictate 'how to think,' rather than static knowledge repositories.
- Andrej Karpathy's 'LLM Knowledge Bases' approach uses LLMs to compile raw input into a structured, self-maintaining wiki of Markdown files, providing traceability and auditability that traditional RAG systems often lack.
- Effective LLM-driven knowledge management benefits from specific architectural patterns: 'Knowledge architecture' (like INDEX.md for routing), a 'Decision journal' (where the LLM updates based on performance data), and a 'Quality gate' (hard rules for consistency).
- The 'AGENTS.md' specification provides a schema for structuring an LLM-compiled knowledge base, guiding the LLM agent on how to ingest, query, lint, and maintain the knowledge base.

## Content Angles
- A guide on how to implement Karpathy's LLM Knowledge Bases or the AGENTS.md spec for personal or team knowledge management.
- An analysis comparing the benefits and challenges of LLM-compiled wikis versus traditional Retrieval-Augmented Generation (RAG) systems.

## Linked Content
- [https://t.co/4UAmYYFzCw](https://t.co/4UAmYYFzCw): This link refers to Andrej Karpathy's 'LLM Knowledge Bases' concept, which describes a workflow for using LLMs to build and maintain personal knowledge bases as structured, interlinked Markdown wikis. The LLM acts as a compiler and librarian, ingesting raw data, creating articles, establishing backlinks, and performing 'health checks' to ensure consistency. It also encompasses the 'AGENTS.md' schema, a specification for how an LLM agent should manage and interact with such a knowledge base.

## Original
> Your CLAUDE.md is probably a config file. It should be a decision engine.
> 
> Karpathy just published an llm-wiki spec. The key layer isn't the knowledge files — it's what he calls "schema (e.g., CLAUDE.md)." Not where to look. How to think.
> 
> I've been running this pattern with 120+ knowledge files for months. Three things make it compound:
> 
> — Knowledge architecture: INDEX.md routes the LLM to the right files without you pointing
> 
> — Decision journal: the LLM writes back. Templates, hypotheses, performance data update after every session
> 
> — Quality gate: hard rules that override defaults. "When evidence contradicts instinct, trust the evidence"
> 
> Without these, CLAUDE.md is a README. With them, it gets smarter every session
> — @PawelHuryn, 2026-04-04
>
> likes: 339, retweets: 34, replies: 20

---
*Auto-imported from X Bookmarks*
