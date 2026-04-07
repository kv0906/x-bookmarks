---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/llm-knowledge-management
  - topic/rag-alternatives
  - topic/ai-agents
  - topic/personal-knowledge-management
created: 2026-04-06
modified: 2026-04-06
author: "@heynavtoor"
tweet_id: "2041140052949090417"
tweet_url: "https://x.com/heynavtoor/status/2041140052949090417"
---

# Andrej Karpathy's LLM Wiki: Persistent Knowledge Base

## Summary
This bookmarked tweet by Nav Toor introduces Andrej Karpathy's 'LLM Wiki,' a novel approach to knowledge management that aims to replace traditional RAG (Retrieval-Augmented Generation) systems. Instead of re-discovering information for each query, LLM Wiki builds and maintains a persistent, compounding knowledge base by having an AI continuously read, extract, and synthesize information from new sources. The core idea, detailed in Karpathy's GitHub Gist, is for an LLM to act as a knowledge engineer, updating an interlinked wiki of markdown files as new data is ingested, creating a 'compiled' and evolving understanding of a domain.

## Key Insights
- LLM Wiki proposes a 'compile-first' approach to knowledge, where an LLM continuously processes raw sources into a structured, evolving wiki, rather than performing retrieval on demand.
- The system operates with three layers: immutable 'raw sources' (articles, papers), an LLM-generated and maintained 'wiki' (markdown pages with summaries, entities, cross-references), and a 'schema' that guides the LLM on structuring the wiki.
- Key operations include 'Ingest' (LLM reads sources and updates wiki pages), 'Query' (asking questions against the compiled wiki), and 'Lint' (LLM health checks for inconsistencies or gaps).
- The wiki can be applied to diverse use cases like personal goal tracking, academic research, book fan wikis, and business knowledge management, automating the maintenance burden often associated with keeping information current.

## Content Angles
- Exploring how LLM Wiki could revolutionize personal and organizational knowledge bases, contrasting its continuous compilation with RAG's episodic retrieval.
- Developing practical implementations or tutorials for setting up an LLM Wiki using existing tools like Obsidian and LLM agents (e.g., Claude Code), demonstrating its potential for specific use cases.

## Linked Content
- [Andrej Karpathy's LLM Wiki GitHub Gist](Andrej Karpathy's LLM Wiki GitHub Gist): This GitHub Gist by Andrej Karpathy, titled 'LLM Wiki', describes a pattern for using Large Language Models to build persistent, compounding knowledge bases. It outlines a conceptual architecture where an LLM incrementally 'compiles' raw source documents (like articles, papers, or notes) into a structured wiki of interlinked markdown files. The Gist details the ingestion process, how the LLM maintains and updates entity and concept pages, flags contradictions, and synthesizes knowledge. It also discusses querying the wiki and the compounding nature of the knowledge base, where good answers can be filed back as new pages, emphasizing that the LLM acts as the primary author and maintainer of the wiki.

## Original
> 🚨 Andrej Karpathy thinks RAG is broken. He published the replacement 2 days ago. 5,000 stars in 48 hours.
> 
> It's called LLM Wiki.
> 
> A pattern where your AI doesn't retrieve information from scratch every time. It builds and maintains a persistent, compounding knowledge base. Automatically.
> 
> RAG re-discovers knowledge on every question. LLM Wiki compiles it once and keeps it current.
> 
> Here's the difference:
> 
> RAG: You ask a question. AI searches your documents. Finds fragments. Pieces them together. Forgets everything. Starts over next time.
> 
> LLM Wiki: You add a source. AI reads it, extracts key information, updates entity pages, revises topic summaries, flags contradictions, strengthens the synthesis. The knowledge compounds. Every source makes the wiki smarter. Permanently.
> 
> Here's how it works:
> 
> → Drop a source into your raw collection. Article, paper, transcript, notes.
> → AI reads it, writes a summary, updates the index
> → Updates every relevant entity and concept page across the wiki
> → One source can touch 10 to 15 wiki pages simultaneously
> → Cross-references are built automatically
> → Contradictions between sources get flagged
> → Ask questions against the wiki. Good answers get filed back as new pages.
> → Your explorations compound in the knowledge base. Nothing disappears into chat history.
> 
> Here's the wildest part:
> 
> Karpathy's use case examples:
> 
> → Personal: track goals, health, psychology. File journal entries and articles. Build a structured picture of yourself over time.
> → Research: read papers for months. Build a comprehensive wiki with an evolving thesis.
> → Reading a book: build a fan wiki as you read. Characters, themes, plot threads. All cross-referenced.
> → Business: feed it Slack threads, meeting transcripts, customer calls. The wiki stays current because the AI does the maintenance nobody wants to do.
> 
> Think of it like this: Obsidian is the IDE. The LLM is the programmer. The wiki is the codebase. You never write the wiki yourself. You source, explore, and ask questions. The AI does all the grunt work.
> 
> NotebookLM, ChatGPT file uploads, and most RAG systems re-derive knowledge on every query. This compiles it once and builds on it forever.
> 
> 5,000+ stars. 1,294 forks. Published by Andrej Karpathy. 2 days ago.
> 
> 100% Open Source.
> — @heynavtoor, 2026-04-06
>
> likes: 2023, retweets: 238, replies: 83

---
*Auto-imported from X Bookmarks*
