---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/llms
  - topic/knowledge-management
  - topic/obsidian
  - topic/ai-agents
  - topic/personal-wiki
created: 2026-04-02
modified: 2026-04-02
author: "@karpathy"
tweet_id: "2039805659525644595"
tweet_url: "https://x.com/karpathy/status/2039805659525644595"
---

# Andrej Karpathy's LLM-Powered Personal Knowledge Base Workflow

## Summary
Andrej Karpathy shares his workflow for using Large Language Models (LLMs) to build and maintain personal knowledge bases, shifting his focus from manipulating code to manipulating knowledge. He finds LLMs adept at compiling raw data into a structured Markdown wiki, enabling complex Q&A and continuous enhancement of the knowledge base. This approach highlights the potential for LLMs to act as intelligent agents for information management and synthesis.

## Key Insights
- LLMs can effectively compile diverse raw data (articles, papers, images) into a structured Markdown wiki, including summaries, backlinks, and categorized articles.
- Obsidian serves as an ideal 'IDE' or frontend for viewing and interacting with both raw data and the LLM-generated wiki, with the LLM primarily responsible for content creation and maintenance.
- Once sufficiently large, an LLM-maintained wiki enables complex Q&A, with the LLM agent capable of researching and synthesizing answers from its knowledge base, even auto-maintaining indices for retrieval.
- LLMs can perform 'linting' or health checks on the wiki, identifying inconsistencies, imputing missing data, and suggesting new connections or article topics, leading to a continuously improving knowledge base.

## Content Angles
- A tutorial on how to set up an LLM-driven personal knowledge base using Obsidian and custom scripts, detailing each step from data ingestion to Q&A.
- An exploration of the future of knowledge management, discussing how AI agents like LLMs can transform personal and organizational information synthesis and retrieval.

## Original
> LLM Knowledge Bases
> 
> Something I'm finding very useful recently: using LLMs to build personal knowledge bases for various topics of research interest. In this way, a large fraction of my recent token throughput is going less into manipulating code, and more into manipulating knowledge (stored as markdown and images). The latest LLMs are quite good at it. So:
> 
> Data ingest:
> I index source documents (articles, papers, repos, datasets, images, etc.) into a raw/ directory, then I use an LLM to incrementally "compile" a wiki, which is just a collection of .md files in a directory structure. The wiki includes summaries of all the data in raw/, backlinks, and then it categorizes data into concepts, writes articles for them, and links them all. To convert web articles into .md files I like to use the Obsidian Web Clipper extension, and then I also use a hotkey to download all the related images to local so that my LLM can easily reference them.
> 
> IDE:
> I use Obsidian as the IDE "frontend" where I can view the raw data, the the compiled wiki, and the derived visualizations. Important to note that the LLM writes and maintains all of the data of the wiki, I rarely touch it directly. I've played with a few Obsidian plugins to render and view data in other ways (e.g. Marp for slides).
> 
> Q&A:
> Where things get interesting is that once your wiki is big enough (e.g. mine on some recent research is ~100 articles and ~400K words), you can ask your LLM agent all kinds of complex questions against the wiki, and it will go off, research the answers, etc. I thought I had to reach for fancy RAG, but the LLM has been pretty good about auto-maintaining index files and brief summaries of all the documents and it reads all the important related data fairly easily at this ~small scale.
> 
> Output:
> Instead of getting answers in text/terminal, I like to have it render markdown files for me, or slide shows (Marp format), or matplotlib images, all of which I then view again in Obsidian. You can imagine many other visual output formats depending on the query. Often, I end up "filing" the outputs back into the wiki to enhance it for further queries. So my own explorations and queries always "add up" in the knowledge base.
> 
> Linting:
> I've run some LLM "health checks" over the wiki to e.g. find inconsistent data, impute missing data (with web searchers), find interesting connections for new article candidates, etc., to incrementally clean up the wiki and enhance its overall data integrity. The LLMs are quite good at suggesting further questions to ask and look into.
> 
> Extra tools:
> I find myself developing additional tools to process the data, e.g. I vibe coded a small and naive search engine over the wiki, which I both use directly (in a web ui), but more often I want to hand it off to an LLM via CLI as a tool for larger queries. 
> 
> Further explorations:
> As the repo grows, the natural desire is to also think about synthetic data generation + finetuning to have your LLM "know" the data in its weights instead of just context windows.
> 
> TLDR: raw data from a given number of sources is collected, then compiled by an LLM into a .md wiki, then operated on by various CLIs by the LLM to do Q&A and to incrementally enhance the wiki, and all of it viewable in Obsidian. You rarely ever write or edit the wiki manually, it's the domain of the LLM. I think there is room here for an incredible new product instead of a hacky collection of scripts.
> — @karpathy, 2026-04-02
>
> likes: 50968, retweets: 5964, replies: 2481

---
*Auto-imported from X Bookmarks*
