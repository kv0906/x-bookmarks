---
type: concept
sources:
  - ai-agents/2026-03-25-typescript-sdk-for-model-context-protocol-for-llm-integratio.md
  - ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a.md
  - ai-coding/2026-03-26-openai-codex-launches-plugins-for-enhanced-developer-workflo.md
  - web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development.md
  - tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con.md
  - ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati.md
  - ai-agents/2026-04-12-chrome-devtools-mcp-enhancements-for-ai-agents.md
created: 2026-04-05
modified: 2026-04-20
---

# MCP (Model Context Protocol)

Anthropic's open protocol for connecting LLMs to external tools and data sources, increasingly behaving like the default interoperability layer for agent systems. MCP is no longer just about generic tool calling; it is starting to host domain-specific operational surfaces.

## Key Points
- **TypeScript SDK** is the main official implementation and helped make MCP practical across Node.js, Bun, and Deno
- **Cloudflare's Code Mode** builds on MCP by moving agents from sequential tool calls to executable TypeScript against APIs
- **OpenAI Codex** adopted MCP for plugins, broadening the protocol beyond Anthropic-centric tooling
- **Cloudflare's Codex plugin** exposes thousands of APIs through a search-and-execute pattern over MCP
- **WebMCP** extends the idea toward the browser itself exposing structured capabilities
- **Cloudflare Browser Rendering** and **Chrome DevTools MCP** show the next step: MCP servers can encapsulate rich operational workflows such as audits, performance debugging, screenshots, and browser control
- MCP is evolving from a tool-calling format into a broader agent infrastructure layer

## Related
- [[claude-code]] — primary MCP client
- [[openai-codex]] — another major MCP client and plugin host
- [[cloudflare-dynamic-workers]] — Code Mode as an evolution of MCP tool calling
- [[browser-automation]] — browser-oriented MCP surfaces are becoming important

## Sources
- [[ai-agents/2026-03-25-typescript-sdk-for-model-context-protocol-for-llm-integratio]] — official TypeScript SDK details
- [[ai-agents/2026-03-24-cloudflare-dynamic-workers-and-code-mode-for-faster-secure-a]] — Code Mode as MCP evolution
- [[ai-coding/2026-03-26-openai-codex-launches-plugins-for-enhanced-developer-workflo]] — Codex plugin launch via MCP
- [[web-dev/2026-03-27-cloudflare-plugin-for-openai-codex-enhanced-ai-development]] — Cloudflare Codex plugin via MCP
- [[tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con]] — WebMCP web standard
- [[ai-agents/2026-04-10-cloudflare-browser-rendering-cdp-for-remote-browser-automati]] — Browser Rendering CDP + MCP integration
- [[ai-agents/2026-04-12-chrome-devtools-mcp-enhancements-for-ai-agents]] — DevTools MCP for Lighthouse, accessibility, memory, and performance workflows
