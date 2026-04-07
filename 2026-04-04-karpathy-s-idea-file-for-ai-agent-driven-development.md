---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/idea-files
  - topic/llm-development
  - topic/knowledge-management
created: 2026-04-04
modified: 2026-04-04
author: "@Saboo_Shubham_"
tweet_id: "2040488893431308615"
tweet_url: "https://x.com/Saboo_Shubham_/status/2040488893431308615"
---

# Karpathy's 'Idea File' for AI Agent-Driven Development

## Summary
This tweet introduces Andrej Karpathy's concept of the 'idea file,' advocating for sharing high-level ideas in markdown documents with AI agents instead of distributing code repositories. The author demonstrates this by having their OpenClaw agent, Monica, interpret an idea file to identify missing components in their existing multi-agent setup, specifically recognizing the need for a 'compilation' layer for historical data that their agents currently lack. This approach emphasizes letting agents build customized solutions based on conceptual guidance.

## Key Insights
- The 'idea file' is a new primitive for AI agents, where a markdown document outlines 'what to build' rather than 'how to build it,' enabling agents to autonomously implement solutions.
- Sharing ideas (via idea files) instead of code allows AI agents to customize and integrate solutions into existing systems, tailoring them to specific needs.
- Andrej Karpathy's 'LLM Wiki' pattern, detailed in the referenced idea file, proposes that LLMs should incrementally build and maintain a persistent, structured wiki from raw sources, compiling knowledge rather than merely retrieving it at query time.
- The human's role shifts from programming code to curating sources, guiding inquiry, and designing the 'schema' (configuration file) that dictates the wiki's structure and workflows for the AI agent.

## Content Angles
- Write an article explaining how developers can start using idea files with their own AI agents, providing examples of simple idea file structures.
- Create a tutorial demonstrating how to set up an LLM Wiki based on Karpathy's pattern, highlighting the role of the 'schema' in guiding the agent.

## Linked Content
The linked content is a reference to Andrej Karpathy's 'LLM Wiki' pattern, which he describes as an 'idea file' (a GitHub Gist). This markdown document outlines a system for using LLM agents to build and maintain a persistent, structured wiki from raw documents, focusing on the concept and architecture rather than specific implementation code. The idea file serves as a blueprint for an agent to construct a customized knowledge base.

## Original
> This is the way. Don't share apps, share ideas with AI Agents.
> 
> Karpathy just introduced a new primitive: "the idea file".
> 
> Instead of sharing a repo with code to clone, you share a markdown doc with the idea. What to build, not how to build it. Your agent reads it and figures out the rest.
> 
> I pointed my OpenClaw agent Monica to it.
> 
> Within one session, they read the idea file, compared it against our existing setup (6 agents already coordinating through markdown files on a Mac Mini), identified what we're already doing and what's missing, and started building the parts we don't have.
> 
> Turns out we already had the ingestion layer without knowing it. Our intel agent scans sources twice a day and writes structured signals to a daily file. The raw data gets saved, but nobody ever looks at it again.
> 
> What we were missing: compilation. 60 days of daily signals sitting in files, but no agent turning them into structured knowledge. 
> 
> My agents only see today's intel. They can't say "this is the third local OCR tool this quarter" because that context isn't compiled anywhere.
> 
> Monica caught that gap on her own from the idea file.
> 
> You don't need someone else's code. You need their thinking. Your agents handle the rest, and they'll customize it to what you actually need.
> 
> We are moving from cloning repos to sharing ideas with Agents.
> — @Saboo_Shubham_, 2026-04-04
>
> likes: 262, retweets: 39, replies: 36

---
*Auto-imported from X Bookmarks*
