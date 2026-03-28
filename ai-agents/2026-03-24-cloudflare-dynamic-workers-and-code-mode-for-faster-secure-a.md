---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/code-execution
  - topic/cloud-infrastructure
  - topic/sandboxing
  - topic/llm-tools
created: 2026-03-24
modified: 2026-03-24
author: "@jpschroeder"
tweet_id: "2036448259724423482"
tweet_url: "https://x.com/jpschroeder/status/2036448259724423482"
---

# Cloudflare Dynamic Workers and Code Mode for Faster, Secure AI Agents

## Summary
This tweet highlights the significance of Cloudflare's Dynamic Workers, which enable AI agents to execute code generated on-the-fly in highly efficient and secure sandboxes. This approach, known as 'Code Mode,' addresses the limitations of traditional AI agent tool calling by allowing models to write code (like TypeScript) against APIs, rather than relying on numerous individual tool definitions, significantly reducing token usage and improving agent capability. Cloudflare's Dynamic Workers provide the necessary secure and performant execution environment, starting in milliseconds and being 100 times faster than traditional containers.

## Key Insights
- Traditional AI agents face challenges with scaling tool use, as a large number of tools can overload the context window and degrade the agent's ability to select the appropriate tool.
- Cloudflare's 'Code Mode' shifts the paradigm by having AI agents generate and execute code (e.g., TypeScript) to interact with APIs, rather than making discrete tool calls, leading to up to 81% reduction in token usage for complex operations.
- Dynamic Workers offer a secure, lightweight, and fast execution environment for AI-generated code, utilizing V8 isolates that start in milliseconds and are 100x faster and 10-100x more memory efficient than traditional containers.
- This technology allows for the creation of more effective and scalable AI agents capable of handling complex, multi-step operations by safely composing API calls within isolated environments.

## Content Angles
- A deep dive into the technical implementation of Code Mode and Dynamic Workers for developers building agentic AI applications.
- A comparative analysis of Cloudflare's approach versus other AI agent sandboxing and tool orchestration methods, focusing on performance, security, and cost.

## Linked Content
- [https://t.co/brec28Wsmm](https://t.co/brec28Wsmm): The Cloudflare blog post 'Sandboxing AI agents, 100x faster' introduces Dynamic Workers and how they enable Code Mode. It explains that Code Mode allows AI agents to write and execute code (e.g., TypeScript) against APIs within secure, lightweight V8 isolates, dramatically improving efficiency and scalability over traditional tool calling and container-based sandboxes. The article details the architecture, benefits like reduced token usage, and the open-sourcing of a Code Mode SDK.
- [https://t.co/c36Vkb7i0R](https://t.co/c36Vkb7i0R): This link refers to the announcement of Cloudflare's Dynamic Workers. It details how Dynamic Workers allow the execution of AI-generated code in secure, lightweight isolates, providing millisecond startup times and being 100 times faster than traditional containers. The content emphasizes their utility for securely sandboxing untrusted code from LLMs, enabling 'Code Mode' where agents can write and execute code against APIs directly, and highlights features like configurable bindings and controlled network access.

## Original
> This is a much bigger deal than most people realize. If you don't know why, let me explain.
> 
> Agents perform "work" right now by calling "tools". These are just pieces of context shoved into the context window saying "if you think you the next thing you should do falls into one of these categories, then respond with this format" — that format is the "tool" a JSONSchema response which a harness then uses to call a function.
> 
> MCP, is best thought of as a way to shove more tools and context into your context window (it has a lot of shortcomings imo). The agent then has to pick which tool out of all the available tools it should call. So the more tools you have, the worse it selects the tools.
> 
> @threepointone and @KentonVarda have an excellent article (https://t.co/brec28Wsmm) where they introduced the idea of exposing the MCP tools as an SDK, so to call tools and compose them, the AI just does what it is ALREADY good at: write some code.
> 
> The question, as always, is where do you run that code safely. Many have proposed sandboxes and containers as a possible solution, but these are hella slow and make the experience untenable.
> 
> Thats what makes this announcement SO important, it allows you to run agent-written code in a matter of milliseconds with the explicit execution environment you specify pulled in (like a database, kv store, etc. Cloudflare calls these "bindings" btw).
> 
> In practice, this means people can start building MUCH more effective agents that can *do* a lot more, because they can be exposed to more tools.
> 
> Anyway, huge deal. Congrats to the CF team.
> — @jpschroeder, 2026-03-24
>
> likes: 1971, retweets: 116, replies: 58

---
*Auto-imported from X Bookmarks*
