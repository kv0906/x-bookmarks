---
type: concept
sources:
  - ai-agents/2026-03-25-typescript-sdk-for-model-context-protocol-for-llm-integratio.md
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
  - ai-coding/2026-03-26-openai-codex-launches-plugins-for-enhanced-developer-workflo.md
  - web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development.md
  - tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con.md
  - ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati.md
created: 2026-04-05
modified: 2026-04-12
---

# MCP (Model Context Protocol)

Anthropic's open protocol for connecting LLMs to external tools and data sources, analogous to LSP for language servers. MCP defines three primitives — Resources, Tools, and Prompts — and is rapidly becoming the standard interface between AI agents and the services they interact with.

## Key Points
- **TypeScript SDK** is the official implementation, supporting Node.js, Bun, and Deno with full server/client capabilities
- **Cloudflare's "Code Mode"** builds on MCP — instead of discrete tool calls, agents write TypeScript against APIs, achieving 81% fewer tokens vs sequential MCP calls
- **OpenAI Codex** adopted MCP for its plugin system, integrating Slack, Figma, Notion, Gmail
- **Cloudflare Codex plugin** exposes 2,500+ API endpoints via Codemode MCP with `search()` and `execute()` functions
- **WebMCP** is Google's proposed web standard allowing websites to expose structured tools/capabilities to AI agents
- **Cloudflare Browser Rendering** now exposes Chrome DevTools Protocol (CDP) via WebSocket, enabling MCP clients (Claude Desktop, Cursor) and CDP tools (Puppeteer, Playwright) to control remote headless Chrome instances at the edge — navigate pages, take screenshots, run performance audits, debug JavaScript
- MCP is evolving from a tool-calling protocol into a broader agent infrastructure layer

## Related
- [[claude-code]] — primary MCP client
- [[cloudflare-dynamic-workers]] — Code Mode as an evolution of MCP tool calling
- [[agent-orchestration]] — MCP enables agent-to-service communication
- [[browser-automation]] — WebMCP extends the pattern to the web

## Sources
- [[ai-agents/2026-03-25-typescript-sdk-for-model-context-protocol-for-llm-integratio]] — official TypeScript SDK details
- [[ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a]] — Code Mode as MCP evolution
- [[ai-coding/2026-03-26-openai-codex-launches-plugins-for-enhanced-developer-workflo]] — Codex adopting MCP for plugins
- [[web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development]] — Cloudflare Codex plugin via MCP
- [[tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con]] — WebMCP web standard
- [[ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati]] — Cloudflare Browser Rendering CDP + MCP integration
