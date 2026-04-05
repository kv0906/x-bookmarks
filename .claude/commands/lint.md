---
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
description: Health check the wiki for gaps, contradictions, and orphans
---

# Lint Wiki

Run a health check on the wiki to find issues and suggest improvements.

## Instructions

### 1. Load Everything

- Read `wiki/INDEX.md`
- Read all wiki pages across `wiki/concepts/`, `wiki/comparisons/`, `wiki/authors/`, `wiki/synthesis/`
- Use Glob to list all bookmark files across topic folders
- Run `qmd status` to check if the qmd index is in sync (file count matches)

### 2. Check for Issues

Run these checks and collect findings:

**Orphan wiki pages** — pages in wiki/ not listed in INDEX.md, or pages with zero inbound [[wikilinks]] from other wiki pages.

**Missing pages** — [[wikilinks]] that point to pages that don't exist yet.

**Uncompiled bookmarks** — bookmark files not referenced in any wiki page's `sources` frontmatter. These are raw sources the wiki hasn't absorbed yet.

**Stale references** — wiki pages whose `sources` list files that no longer exist (deleted or moved bookmarks).

**Contradictions** — cases where two wiki pages make conflicting claims about the same topic. Read pages carefully and flag anything that seems inconsistent.

**Weak pages** — wiki pages with very short content, only one source, or no Related links. These might need enrichment.

**Missing concepts** — important concepts, tools, or frameworks mentioned in bookmarks but lacking their own wiki page.

**Missing cross-references** — wiki pages that should link to each other based on topic overlap but don't.

**qmd index stale** — check if the qmd collection file count matches actual file count. If out of sync, recommend running `qmd collection sync xbm && qmd embed`.

### 3. Generate Report

Save to `outputs/YYYY-MM-DD-lint-report.md`:

```markdown
---
type: lint-report
created: YYYY-MM-DD
---

# Wiki Health Report — YYYY-MM-DD

## Summary
- Total wiki pages: N
- Total bookmarks: N
- Issues found: N
- Health score: X/10

## Issues

### Critical
- [Issues that affect wiki accuracy or completeness]

### Warnings
- [Issues that reduce wiki quality but aren't blocking]

### Suggestions
- [Nice-to-have improvements]

## Uncompiled Bookmarks
- `folder/filename.md` — not referenced by any wiki page

## Missing Concept Pages
- **Concept Name** — mentioned in N bookmarks but has no wiki page

## Recommended Actions
1. Run `/compile` to absorb N uncompiled bookmarks
2. Create wiki page for [concept]
3. Add cross-references between [[page-a]] and [[page-b]]
4. [Other specific suggestions]
```

### 4. Update Log

Append to `log.md`:

```markdown
## [YYYY-MM-DD] lint | Wiki health check
- Health score: X/10
- Issues found: N (C critical, W warnings, S suggestions)
- Uncompiled bookmarks: N
```

### 5. Display Summary

Show the user a concise summary of findings and recommended actions. Don't just say "saved to file" — highlight the most important issues.

## Rules

- Be specific — name the exact files, pages, and concepts involved
- Prioritize actionable findings over exhaustive reporting
- The health score should reflect real quality, not be inflated
- Don't auto-fix issues — just report them. The user decides what to act on.
