---
type: concept
sources:
  - misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md
  - web-dev/2026-04-06-meng-to-s-ai-html-to-figma-design-tool.md
created: 2026-04-07
modified: 2026-04-07
---

# DESIGN.md (Plain-Text Design Systems for AI)

A markdown-native design system format that LLMs understand natively, introduced by Google Stitch. Instead of Figma exports, JSON schemas, or special tooling, a single `DESIGN.md` file describes colors, typography, spacing, components, shadows, and responsive rules in plain text — dropped into a project root so coding agents generate on-brand UI without extra plumbing.

## Key Points
- **The problem**: Claude Code and other agents default to generic "Inter font + purple gradient + card grid" UIs; they can't read Figma
- **awesome-design-md** (VoltAgent) curates DESIGN.md files extracted from 31 real sites — Stripe, Vercel, Notion, Supabase, Linear, NVIDIA, Apple — as ready-to-drop style guides
- **Meng To's HTML-to-Design** inverse-engineers the same format: point it at any URL and it generates a DESIGN.md (and matching Figma file) with ~90% fidelity to the source site
- **Why it works**: design tokens as prose fit naturally in the LLM's context window; no tool-use round-trip needed
- Pairs well with the broader "markdown as primary interface" trend: [[llm-wiki]], AGENTS.md, SOUL.md, lat.md — a family of markdown-first primitives

## Related
- [[claude-code]] — primary consumer of DESIGN.md files for UI generation
- [[llm-wiki]] — same ethos: plain markdown as the universal interface for LLMs
- [[dynamic-knowledge-systems]] — another markdown-first spec file pattern

## Sources
- [[misc/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files]] — awesome-design-md repo, Google Stitch origin
- [[web-dev/2026-04-06-meng-to-s-ai-html-to-figma-design-tool]] — URL → DESIGN.md + Figma converter
