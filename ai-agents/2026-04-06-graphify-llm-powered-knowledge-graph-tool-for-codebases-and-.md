---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/llm-tools
  - topic/knowledge-graphs
  - topic/code-analysis
  - topic/ai-efficiency
  - topic/open-source
created: 2026-04-06
modified: 2026-04-06
author: "@socialwithaayan"
tweet_id: "2041192946369007924"
tweet_url: "https://x.com/socialwithaayan/status/2041192946369007924"
---

# Graphify: LLM-Powered Knowledge Graph Tool for Codebases and Research

## Summary
This tweet announces the rapid development of Graphify, a tool that generates navigable knowledge graphs from any folder of files, including code, PDFs, and images. It was created in just 48 hours in response to Andrej Karpathy's workflow suggestion for LLM-powered knowledge bases, offering a new paradigm for AI agents to reason over large codebases with significant token efficiency.

## Key Insights
- Graphify transforms folders of various file types (code, PDFs, images, markdown) into interactive knowledge graphs, Obsidian vaults, and wikis.
- It enables plain English Q&A over entire codebases or research folders, allowing queries like 'What calls this function?' or 'What connects these two concepts?'.
- The tool boasts 71.5x fewer tokens per query compared to reading raw files, indicating a major efficiency improvement for LLM agents.
- Graphify operates without a vector database, complex setup, or config files, making it easy to install and use via a single command in environments like Claude Code.
- Andrej Karpathy's original 'LLM Wiki' gist proposed a method for building personal knowledge bases using LLMs to overcome the limitations of traditional RAG systems that constantly re-discover knowledge.

## Content Angles
- A guide on how to integrate and utilize Graphify for developers managing large codebases or researchers organizing extensive documentation.
- An analysis comparing Graphify's approach to traditional RAG systems and other knowledge graph solutions, focusing on its token efficiency and ease of use.

## Linked Content
- [Graphify GitHub Repository (safishamsi/graphify)](Graphify GitHub Repository (safishamsi/graphify)): This repository provides the open-source tool 'Graphify,' an AI coding assistant skill. It converts any folder of code, documents, papers, or images into a queryable knowledge graph. It details the two-pass process: a deterministic AST pass for code structure and parallel Claude subagents for document/image concept extraction. The output includes interactive HTML graphs, queryable JSON, and an audit report. It supports 13 programming languages, PDFs, images (via Claude Vision), and Markdown, significantly reducing tokens per query by using graph-topology-based clustering.
- [Andrej Karpathy's LLM Wiki Gist (karpathy/llm-wiki.md)](Andrej Karpathy's LLM Wiki Gist (karpathy/llm-wiki.md)): This gist outlines Andrej Karpathy's concept for an 'LLM Wiki,' a pattern for building personal knowledge bases using LLMs. The core idea is to move beyond static RAG systems, which constantly re-discover knowledge, towards an accumulated and structured knowledge base that allows LLMs to reason more effectively and synthesize information across multiple documents. It serves as the inspiration for tools like Graphify.

## Original
> 🚨 BREAKING: Someone just built the exact tool Andrej Karpathy said someone should build.
> 
> 48 hours after Karpathy posted his LLM Knowledge Bases workflow, this showed up on GitHub.
> 
> It's called Graphify. One command. Any folder. Full knowledge graph.
> 
> Point it at any folder. Run /graphify inside Claude Code. Walk away.
> 
> Here is what comes out the other side:
> 
> -> A navigable knowledge graph of everything in that folder
> -> An Obsidian vault with backlinked articles
> -> A wiki that starts at index. md and maps every concept cluster
> -> Plain English Q&A over your entire codebase or research folder
> 
> You can ask it things like:
> 
> "What calls this function?"
> "What connects these two concepts?"
> "What are the most important nodes in this project?"
> 
> No vector database. No setup. No config files.
> 
> The token efficiency number is what got me:
> 
> 71.5x fewer tokens per query compared to reading raw files.
> 
> That is not a small improvement. That is a completely different paradigm for how AI agents reason over large codebases.
> 
> What it supports:
> 
> -> Code in 13 programming languages
> -> PDFs
> -> Images via Claude Vision
> -> Markdown files
> 
> Install in one line:
> 
> pip install graphify && graphify install
> 
> Then type /graphify in Claude Code and point it at anything.
> 
> Karpathy asked. Someone delivered in 48 hours.
> 
> That is the pace of 2026.
> 
> Open Source. Free.
> — @socialwithaayan, 2026-04-06
>
> likes: 5870, retweets: 644, replies: 118

---
*Auto-imported from X Bookmarks*
