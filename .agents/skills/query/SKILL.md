---
allowed-tools: Bash, Read, Write, Edit, Glob, Grep
description: Ask questions against the knowledge base and save answers
---

# Query Knowledge Base

Answer a question by researching the wiki and source bookmarks, then save the answer.

The user's question: $ARGUMENTS

## Instructions

### 1. Research

1. **Use qmd to find relevant documents** — run `qmd query "<question>" -c xbm --json -n 10` to get the most relevant wiki pages and bookmarks ranked by relevance. This is faster and more accurate than manually reading INDEX.md.
2. Read the top-ranked results returned by qmd
3. If you need more context on a specific document, use `qmd get "<path>" --full` to retrieve it
4. If qmd results aren't sufficient, fall back to reading `wiki/INDEX.md` and scanning with Grep

### 2. Synthesize Answer

Write a thorough answer grounded in the knowledge base:
- Cite specific sources using [[wikilinks]]
- Include concrete details, tools, and techniques from the bookmarks
- Note any gaps — things the knowledge base doesn't cover well
- If bookmarks contain contradictory information, note the disagreement

### 3. Save to Outputs

Save the answer to `outputs/YYYY-MM-DD-<slug>.md`:

```markdown
---
type: query-answer
question: "The original question"
sources:
  - wiki/concepts/relevant-concept.md
  - ai-agents/2026-03-25-source-bookmark.md
created: YYYY-MM-DD
---

# Question Title

[The synthesized answer with [[wikilinks]] to sources]

## Sources Consulted
- [[wiki/concepts/x]] — what it contributed
- [[folder/bookmark]] — what it contributed

## Knowledge Gaps
- [Topics the knowledge base doesn't cover well related to this question]
```

### 4. Optionally Update Wiki

If the research revealed new connections or insights:
- Update relevant concept pages with new cross-references
- Note any concepts that should exist but don't (suggest running `/compile`)

### 5. Update Log

Append to `log.md`:

```markdown
## [YYYY-MM-DD] query | <short question summary>
- Answer saved to outputs/YYYY-MM-DD-slug.md
- Sources consulted: N wiki pages, M bookmarks
- Knowledge gaps identified: [brief list or "none"]
```

### 6. Display Answer

Output the answer directly to the user (don't just say "saved to file" — show the answer).

## Rules

- Ground all claims in the knowledge base — don't invent information not in the bookmarks or wiki
- If the knowledge base genuinely can't answer the question, say so clearly
- Always save the answer to outputs/ even for simple questions — this makes explorations compound
- Use [[wikilinks]] in the saved file for Obsidian navigation
