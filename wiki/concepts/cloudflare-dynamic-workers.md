---
type: concept
sources:
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
  - web-dev/2026-03-24-cloudflare-dynamic-workers-faster-lighter-serverless-sandbox.md
  - ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai.md
  - web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development.md
  - ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati.md
created: 2026-04-05
modified: 2026-04-12
---

# Cloudflare Dynamic Workers

Cloudflare's serverless execution environment for AI agents — V8 isolates that start in 1-5ms, use a few MB of RAM, and cost $0.002/worker/day. Dynamic Workers enable "Code Mode" where agents write TypeScript against APIs instead of making discrete tool calls, significantly reducing token usage.

## Key Points
- **V8 isolates** provide 100x faster startup than containers with much lower memory footprint
- **Code Mode** lets agents write TypeScript code that runs against APIs, achieving 81% fewer tokens vs sequential tool calls
- **Cap'n Web RPC** used for TypeScript API definitions, replacing OpenAPI specs
- **"Markdown for Agents"** feature converts HTML to Markdown at the edge when AI agents send `Accept: text/markdown`, cutting token usage by up to 80%
- **Codex plugin** exposes 2,500+ Cloudflare API endpoints with `search()` and `execute()` functions plus Agent Skills for Workers, Pages, R2, D1, AI, security, and IaC
- **Browser Rendering** now exposes Chrome DevTools Protocol (CDP) via WebSocket — [[mcp]] clients and Puppeteer/Playwright can control remote headless Chrome at the edge for navigation, screenshots, audits, and debugging

## Related
- [[mcp]] — Code Mode extends the MCP tool-calling pattern
- [[token-optimization]] — both Code Mode and Markdown for Agents reduce token usage
- [[comparisons/cloudflare-vs-vercel-sandboxes]] — competing serverless platforms for agents

## Sources
- [[ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a]] — Code Mode architecture
- [[web-dev/2026-03-24-cloudflare-dynamic-workers-faster-lighter-serverless-sandbox]] — technical breakdown and pricing
- [[ai-agents/2026-03-24-cloudflare-api-docs-and-markdown-for-agents-for-ai]] — Markdown for Agents feature
- [[web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development]] — Codex plugin and Agent Skills
- [[ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati]] — Browser Rendering CDP for edge-hosted headless Chrome
