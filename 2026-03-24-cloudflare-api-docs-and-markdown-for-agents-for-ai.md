---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/api-documentation
  - topic/cloudflare
  - topic/markdown
  - topic/llms
created: 2026-03-24
modified: 2026-03-24
author: "@CloudflareDev"
tweet_id: "2036500047894810854"
tweet_url: "https://x.com/CloudflareDev/status/2036500047894810854"
---

# Cloudflare API Docs and 'Markdown for Agents' for AI

## Summary
Cloudflare has introduced 'Markdown for Agents,' a feature that allows websites, including their API documentation, to serve content in Markdown format to AI agents. By setting the `Accept: text/markdown` header in a request, Cloudflare's edge network automatically converts the original HTML content to Markdown in real-time. This aims to make web content significantly more machine-friendly for AI systems, reducing token usage and improving the efficiency of AI processing.

## Key Insights
- Cloudflare's 'Markdown for Agents' automatically converts HTML pages to Markdown when requested by AI agents using the `Accept: text/markdown` HTTP header, facilitating easier AI consumption of web content.
- This conversion drastically reduces token usage for AI models (up to 80% savings compared to HTML), leading to lower inference costs and more efficient data processing for Large Language Models (LLMs).
- The feature relies on standard HTTP content negotiation, eliminating the need for changes to origin servers or separate Markdown endpoints for Cloudflare-powered sites.
- Converted responses include an `x-markdown-tokens` header for estimated token count and a `Content-Signal` header (e.g., `ai-train=yes`) to communicate content usage policies to AI systems.

## Content Angles
- A 'how-to' guide for developers on enabling and leveraging 'Markdown for Agents' when building AI applications that scrape or consume web data.
- An analysis of the performance and cost benefits for AI systems processing web content served as Markdown versus traditional HTML, using Cloudflare's new feature as a case study.

## Linked Content
- [https://developers.cloudflare.com/api/](https://developers.cloudflare.com/api/): Cloudflare's comprehensive API documentation portal, which exposes the entire Cloudflare infrastructure via a RESTful API with JSON responses. This site, and other Cloudflare-powered websites, can now dynamically serve content in Markdown format to AI agents via the 'Markdown for Agents' feature.

## Original
> Your AI agent shouldn't have to parse HTML to understand an API.  Our API docs now natively return Markdown. Just set the Accept header.
> 
> https://t.co/vGpx9IxElb https://t.co/FrEiep5k68
> — @CloudflareDev, 2026-03-24
>
> likes: 307, retweets: 27, replies: 8

---
*Auto-imported from X Bookmarks*
