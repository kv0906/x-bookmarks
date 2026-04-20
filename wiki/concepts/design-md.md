---
type: concept
sources:
  - ai-coding/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files.md
  - web-dev/2026-04-06-meng-to-s-ai-html-to-figma-design-tool.md
  - creative/2026-03-29-ai-generated-hero-section-design-with-google-s-nano-banana.md
  - web-dev/2026-04-11-practical-ui-design-cheatsheet-for-product-development.md
created: 2026-04-07
modified: 2026-04-20
---

# DESIGN.md (Plain-Text Design Systems for AI)

A markdown-native design system format that LLMs understand natively. Instead of exports, schemas, or visual tools, a single `DESIGN.md` file captures colors, typography, spacing, components, shadows, and responsive rules in plain text so coding agents can generate on-brand UI directly from context.

## Key Points
- **The problem**: coding agents often default to generic UI because they cannot reliably interpret design tools
- **awesome-design-md** shows the pattern at scale, curating DESIGN.md files extracted from real production sites
- **Meng To's HTML-to-Design** demonstrates the reverse direction: URL to DESIGN.md plus matching Figma file
- **Why it works**: prose-based design tokens fit naturally inside the context window without extra tool round-trips
- **Nano Banana** complements the text-spec layer with fast visual concept generation for hero sections and other web design ideas
- **Practical UI cheatsheets** add the taste layer DESIGN.md often needs: typography scales, spacing, radii, colors, and icon rules can be encoded as simple heuristics

## Related
- [[claude-code]] — a primary consumer of DESIGN.md files for UI generation
- [[llm-wiki]] — same markdown-first philosophy applied to knowledge
- [[dynamic-knowledge-systems]] — another markdown-first specification pattern

## Sources
- [[ai-coding/2026-04-05-improving-ai-generated-ui-with-plain-text-design-md-files]] — awesome-design-md repo and DESIGN.md framing
- [[web-dev/2026-04-06-meng-to-s-ai-html-to-figma-design-tool]] — URL to DESIGN.md plus Figma conversion
- [[creative/2026-03-29-ai-generated-hero-section-design-with-google-s-nano-banana]] — AI-generated visual concepting for web sections
- [[web-dev/2026-04-11-practical-ui-design-cheatsheet-for-product-development]] — battle-tested UI heuristics for typography, spacing, colors, radii, and icons
