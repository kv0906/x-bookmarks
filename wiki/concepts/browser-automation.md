---
type: concept
sources:
  - tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con.md
  - tools/2026-03-25-carbonyl-chromium-browser-in-your-terminal.md
  - tools/2026-03-28-cli-agents-and-carbonyl-a-terminal-based-chromium-browser.md
  - ai-agents/2026-04-06-agent-browser-chat-ai-agent-web-automation.md
created: 2026-04-05
modified: 2026-04-07
---

# Browser Automation

Tools and standards for AI agents to interact with the web — from controlling real Chrome instances to running full Chromium in the terminal. Two distinct approaches: GUI-based browser control and terminal-based headless browsing.

## Key Points
- **dev-browser** CLI lets agents control your real Chrome instance (not sandboxed) via Playwright API and Chrome remote debugging — agents see what you see
- **WebMCP** is Google's proposed web standard allowing websites to expose structured tools/capabilities to AI agents via Declarative and Imperative APIs
- **Carbonyl** runs Chromium entirely in the terminal with ASCII art rendering — 0% idle CPU, 60fps, WebGL/WebGPU support, sub-second startup
- **Carbonyl + tmux** pattern enables AI agents to browse the web without GUI overhead, useful for CLI-native agent workflows
- The field is splitting between "give agents a real browser" (dev-browser) and "give agents a lightweight browser" (Carbonyl) approaches
- **agent-browser** (Vercel Labs) uses a Rust CLI + Node.js daemon managing Playwright, and its **Snapshot + Refs** system gives agents a compact accessibility tree instead of raw DOM — up to 93% token reduction. The new `agent-browser chat` mode adds one-shot commands, interactive chat, and sub-agent usage; compatible with Claude Code, Cursor, Codex, Gemini

## Related
- [[mcp]] — WebMCP extends MCP concepts to the web
- [[terminal-tools]] — Carbonyl fits into the terminal tool renaissance
- [[claude-code]] — agents that need web access benefit from both approaches

## Sources
- [[tools/2026-03-25-ai-agent-control-real-chrome-with-dev-browser-and-webmcp-con]] — dev-browser and WebMCP standard
- [[tools/2026-03-25-carbonyl-chromium-browser-in-your-terminal]] — Carbonyl standalone
- [[tools/2026-03-28-cli-agents-and-carbonyl-a-terminal-based-chromium-browser]] — Carbonyl + tmux for agents
- [[ai-agents/2026-04-06-agent-browser-chat-ai-agent-web-automation]] — Vercel agent-browser + Snapshot+Refs token-efficient DOM
