---
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
description: Build/update the wiki from all bookmarks (incremental)
---

# Compile Wiki

Read all bookmarks and compile/update the wiki layer with concept pages, comparisons, author profiles, synthesis articles, and an index.

## Instructions

### 1. Read All Bookmarks

Use Glob to find all `.md` files in the topic folders: `ai-agents/`, `ai-coding/`, `ai-media/`, `ai-research/`, `tools/`, `web-dev/`, `creative/`, `security/`, `crypto/`, `misc/`.

Read each bookmark file — extract frontmatter (tags, author, created date) and content (summary, key insights).

### 2. Read Existing Wiki State

Read `wiki/INDEX.md` and any existing wiki pages. Check the `sources` frontmatter field in each wiki page to identify which bookmarks have already been compiled. This enables incremental updates.

### 3. Identify Concepts

Analyze all bookmarks to extract recurring concepts, tools, frameworks, and patterns. A concept qualifies for its own page when:
- It appears in 2+ bookmarks
- OR it's a significant tool/framework worth tracking even from a single bookmark

Examples: "MCP (Model Context Protocol)", "Claude Code", "Vibe Coding", "Edge Functions", "RAG", "Prompt Engineering"

### 4. Create/Update Concept Pages

For each concept, create or update `wiki/concepts/<slug>.md`:

```markdown
---
type: concept
sources:
  - ai-agents/2026-03-25-example.md
  - ai-coding/2026-03-20-another.md
created: YYYY-MM-DD
modified: YYYY-MM-DD
---

# Concept Name

One-paragraph summary synthesizing what the bookmarks collectively say about this concept.

## Key Points
- Bullet points distilling the most important information
- Include specific tools, techniques, or insights mentioned

## Related
- [[other-concept]] — how they relate
- [[comparison-name]] — if a comparison exists

## Sources
- [[folder/bookmark-name]] — what this specific source contributes
```

If the page already exists, update it: add new sources, revise the summary, add new key points. Update the `modified` date.

### 5. Create Comparison Tables

When multiple bookmarks cover competing or complementary tools/approaches in the same space, create `wiki/comparisons/<slug>.md`:

```markdown
---
type: comparison
sources:
  - tools/2026-03-25-tool-a.md
  - tools/2026-03-26-tool-b.md
created: YYYY-MM-DD
modified: YYYY-MM-DD
---

# Tool A vs Tool B

One-paragraph context for the comparison.

| Aspect | Tool A | Tool B |
|--------|--------|--------|
| Use case | ... | ... |
| Strengths | ... | ... |
| Weaknesses | ... | ... |

## Sources
- [[tools/2026-03-25-tool-a]] — ...
- [[tools/2026-03-26-tool-b]] — ...
```

### 6. Create Author Profiles

For authors (`@handle`) who appear in 2+ bookmarks, create `wiki/authors/<handle>.md`:

```markdown
---
type: author
sources:
  - ai-agents/2026-03-25-their-post.md
created: YYYY-MM-DD
modified: YYYY-MM-DD
---

# @handle

Brief profile based on their bookmarked content — what topics they cover, what they're known for.

## Bookmarked Content
- [[folder/bookmark]] — topic/insight
```

### 7. Create Synthesis Articles

Write 1-3 synthesis articles in `wiki/synthesis/` that identify cross-cutting themes across the entire bookmark collection. These are the most valuable wiki pages — they surface connections the user might not have noticed.

Example themes: "The Rise of AI Coding Assistants", "CLI Tools Renaissance", "Agent Architecture Patterns"

### 8. Update INDEX.md

Rewrite `wiki/INDEX.md` with a complete catalog:

```markdown
# Wiki Index

Last updated: YYYY-MM-DD

## Concepts
- [[concepts/slug]] — one-line description

## Comparisons
- [[comparisons/slug]] — one-line description

## Authors
- [[authors/handle]] — one-line description

## Synthesis
- [[synthesis/slug]] — one-line description
```

### 9. Update Log

Append to `log.md`:

```markdown
## [YYYY-MM-DD] compile | Wiki compilation
- Processed N bookmarks across M folders
- Created X concept pages, Y comparisons, Z author profiles, W synthesis articles
- Updated A existing pages
- New connections found: [brief list]
```

### 10. Update qmd Index

After writing wiki pages, refresh the qmd search index so new pages are searchable:

```bash
qmd collection sync xbm
qmd embed
```

### 11. Report

Output a summary:
```
Wiki compiled:
  Bookmarks processed: N
  Concepts: X (Y new, Z updated)
  Comparisons: X
  Author profiles: X
  Synthesis articles: X
  INDEX.md updated
  qmd index refreshed
```

## Rules

- Never modify bookmark files — they are immutable source material
- Be incremental: update existing wiki pages rather than replacing them
- Every wiki page must have valid YAML frontmatter with `type`, `sources`, `created`, `modified`
- Use [[wikilinks]] without .md extension (Obsidian convention)
- Keep summaries concise — the value is in synthesis, not repetition of source material
- When in doubt about a concept's significance, include it — it's easy to remove later
