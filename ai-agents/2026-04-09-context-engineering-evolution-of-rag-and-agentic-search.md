---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/rag
  - topic/context-engineering
  - topic/llm-agents
created: 2026-04-09
modified: 2026-04-09
author: "@helloiamleonie"
tweet_id: "2042263770047865097"
tweet_url: "https://x.com/helloiamleonie/status/2042263770047865097"
---

# Context Engineering: Evolution of RAG and Agentic Search

## Summary
This tweet discusses the evolution of Retrieval-Augmented Generation (RAG) into 'Agentic Search in Context Engineering,' detailing how Large Language Models (LLMs) are moving from static, one-shot context retrieval to dynamic, agent-driven context building using multiple tools. The linked GitHub repository provides workshop materials, including slides and code, on agentic search, offering practical resources for understanding and implementing these advanced techniques.

## Key Insights
- Traditional RAG (2020-2023) involved one-shot, fixed retrieval pipelines that always retrieved context, regardless of need, and only once.
- Agentic RAG (2023-2024) introduced multi-hop retrieval, where an agent decides if, when, and what context to retrieve using tools and routing to different indexes.
- Context Engineering (2025+) combines multiple retrieval tools, allowing agents to build their context from diverse sources like databases, file systems, web, and memory.
- The core shift is from a 'retrieve once' model to an agent-driven process where the agent dynamically constructs its own context.

## Content Angles
- Develop a technical article or tutorial demonstrating the implementation of Agentic Search using code examples from the linked GitHub repository.
- Explore and present a comparison of the different stages of RAG evolution, highlighting the benefits and complexities of Agentic Search for specific use cases.

## Linked Content
- [https://github.com/iamleonie/workshop-agentic-search](https://github.com/iamleonie/workshop-agentic-search): This GitHub repository contains the slides and code from a workshop titled 'Agentic Search for Context Engineering,' providing practical resources and examples for implementing advanced retrieval techniques for LLMs.

## Original
> Is context engineering the new RAG?
> 
> (Hint: They are both about 𝗯𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝘁𝗵𝗲 𝗟𝗟𝗠’𝘀 𝗰𝗼𝗻𝘁𝗲𝘅𝘁)
> 
> 𝗥𝗔𝗚 (𝟮𝟬𝟮𝟬-𝟮𝟬𝟮𝟯): One-shot retrieval
> • Fixed retrieval pipelie
> • Always retrieve context (whether you need it or not)
> • Retrieve exactly once (even if you need more info)
> 
> 𝗔𝗴𝗲𝗻𝘁𝗶𝗰 𝗥𝗔𝗚 (𝟮𝟬𝟮𝟯-𝟮𝟬𝟮𝟰): Multi-hop retrieval through tool usage
> • Retrieval becomes a tool the agent can choose to use
> • Agent decides: Do I need to retrieve? Is this context even relevant? Do I need more?
> • Can route to different indexes
> 
> 𝗔𝗴𝗲𝗻𝘁𝗶𝗰 𝘀𝗲𝗮𝗿𝗰𝗵 𝗶𝗻 𝗖𝗼𝗻𝘁𝗲𝘅𝘁 𝗘𝗻𝗴𝗶𝗻𝗲𝗲𝗿𝗶𝗻𝗴 (𝟮𝟬𝟮𝟱+): Combine multiple retrieval tools for context engineering 
> • Context is scattered across different context sources (database, filesystem, web, memory)
> • Combine different context retrieval tools
> • Agent builds its own context
> 
> Essentially, we’ve moved from ‘retrieve once’ to ‘the agent builds its own context’.
> 
> Yesterday, I gave a workshop on this topic.
> 
> Find the slides and code on this in my GitHub repo:
> https://t.co/YG6B4DahdL
> — @helloiamleonie, 2026-04-09
>
> likes: 449, retweets: 70, replies: 15

---
*Auto-imported from X Bookmarks*
