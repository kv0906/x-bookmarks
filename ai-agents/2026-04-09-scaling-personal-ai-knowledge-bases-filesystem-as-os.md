---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/personal-knowledge-management
  - topic/ai-agents
  - topic/filesystem
  - topic/llm-knowledge-bases
  - topic/context-engineering
created: 2026-04-09
modified: 2026-04-09
author: "@koylanai"
tweet_id: "2042103064585294328"
tweet_url: "https://x.com/koylanai/status/2042103064585294328"
---

# Scaling Personal AI Knowledge Bases: Filesystem as OS

## Summary
Muratcan Koylan's tweet discusses the evolution of personal LLM knowledge bases from a niche concept to a mainstream topic, emphasizing that while the architecture of a personal OS is becoming easier, the challenge lies in consistently feeding and curating knowledge into it. The linked article, "The File System Is the New Database: How I Built a Personal OS for AI Agents," details his approach to building a personal operating system for AI agents that uses a filesystem as its core, addressing limitations of traditional databases and focusing on portability and version control for AI's memory.

## Key Insights
- Personal LLM knowledge bases have moved from a niche idea to a significant topic in AI, with concepts like 'filesystem as a database' gaining independent validation from figures like Andrej Karpathy.
- The primary challenge in building effective personal AI operating systems is not scaling the storage ('vault') or designing the architecture, but rather the 'knowledge transfer pipeline' – getting diverse information (decision patterns, life details, half-formed thoughts) into the system in the right format and at the right time.
- A file-system-based Personal OS offers benefits such as full portability (being a Git repository), version control for all changes, and enabling AI agents to trace knowledge graphs via cross-module references.
- Practical tools and methods for knowledge ingestion include a Chrome extension (Feed2Context) for web content, voice pipelines (OpenHome assistant), Readwise CLI for diverse sources (X, LinkedIn, arXiv), and potential future use of Zapier CLI and Triggers API to automate feeding the system.
- The core principle is 'context engineering' over 'prompt engineering': focusing on structuring information for the AI to make sound judgments rather than just optimizing individual prompts.

## Content Angles
- Guide: How to architect and implement a personal AI operating system using a filesystem-centric approach, drawing lessons from Muratcan Koylan and Andrej Karpathy.
- Analysis: Explore the current bottlenecks in AI personal knowledge management, focusing on data ingestion and curation strategies, and comparing different tools and techniques mentioned.

## Linked Content
- [https://t.co/7kZ0k7nbxI](https://t.co/7kZ0k7nbxI): Muratcan Koylan's article, 'The File System Is the New Database: How I Built a Personal OS for AI Agents,' describes his personal AI operating system architecture. It outlines how a simple filesystem, combined with agents, acts as a persistent and portable memory for AI, solving the 'context problem' for long-term interactions by structuring information rather than relying solely on prompt engineering. He details modular design, cross-module referencing, and tools he built for automated ingestion.

## Original
> Since I posted my Personal OS / filesystem article, LLM personal knowledge bases have turned into a real topic in the AI world. I’ve been building this system in Cursor for almost two years, but I wasn’t expecting to end up talking with people like a YouTube co-founder, a NASCAR driver, or some of the AI leaders I respect most because of that post. For me it was the first signal that this wasn’t niche anymore.
> 
> The biggest pushback on the article was whether a filesystem is enough or scalable for something like this. Scaling the vault is easy; scaling curation and placement is not. Karpathy’s LLM Wiki published soon after with same thesis and it was an independent validation for me. "LLM incrementally builds and maintains a persistent wiki structured, interlinked markdown between you and the raw sources." Now there are tons of similar projects, different takes on the same idea. That’s good, I’m also evolving my own stack from what’s out in the open, and honestly, reframing the personal filesystem as a wiki is a smart move.
> 
> I’m posting this because I think the harder problem is still the knowledge transfer pipeline. Designing a Personal OS (aka personal knowledge base) is the easy part. The architecture only starts to pay off when you fill it for years -not just posts you liked, but decision patterns, career and life details, half-formed thoughts, writing, the messy stuff. Getting all of that into the right markdown file, at the right time, in the right shape is still the bottleneck. 
> 
> I built a Chrome extension (Feed2Context, details in the article) that grabs a post with my notes from my feed, drops it into the filesystem, and my agents synthesize and route it. I also built OpenHome assistant as a voice pipeline from my room into the wiki. Plus a bunch of MCP hooks into my accounts. But orchestrating all these helpers gets exhausting.
> 
> A lot of people suggested Obsidian but I'm mostly on Readwise CLI to pull from X, LinkedIn, arXiv, books, and news. It works well on mobile, and because it’s a CLI, agents can find what they need and push it into the filesystem. Skill registries help a lot, in the videos I’ve got flows like Readwise CLI + alphaXiv MCP for research papers: save a paper, agent pulls the full text, analyzes it, teaches me back. I’m also testing Zapier CLI, and waiting for especially the Triggers API, between things like Yutori or plain cron, keeping a personal wiki alive is still hard; nobody wants to be the cron job for their own life, so triggers might be part of the answer.
> 
> TL;DR: A personal filesystem you control isn’t optional if you don’t want to rent your memory from one AI company. The open problem is keeping it fed and current. What I actually want is one solution that can watch my screen, hear my voice, read my accounts, and write into my Personal OS without me acting as the integration layer forever.
> — @koylanai, 2026-04-09
>
> likes: 144, retweets: 6, replies: 5

---
*Auto-imported from X Bookmarks*
