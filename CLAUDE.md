# x-bookmarks

An Obsidian vault of bookmarks auto-imported from X (Twitter) by xbm-bot.

## Purpose

Personal knowledge base of curated bookmarks — tools, frameworks, tips, GitHub repos — for future reference and search when solving problems.

## Structure

- Bot drops new bookmark files into the repo root as `YYYY-MM-DD-slug.md`
- Run `/organize` to move them into broad topic folders using `_topic-map.yml`
- `_topic-map.yml` maps bot-generated `topic/*` tags to ~10 broad folders
- Fine-grained filtering uses `topic/*` tags in frontmatter (via Obsidian search)

### Folders

| Folder | What goes here |
|---|---|
| `ai-agents/` | Agent frameworks, orchestration, memory, MCP |
| `ai-coding/` | Claude Code, coding assistants, dev workflows, prompting |
| `ai-media/` | AI for music, video, course creation |
| `ai-research/` | LLM papers, safety, ML research |
| `tools/` | CLI tools, productivity, browser automation, terminal UIs |
| `web-dev/` | Frontend, backend, infra, deployment, Cloudflare, Vercel |
| `creative/` | Visual/creative tools, pixel art, shaders, image processing |
| `security/` | Cybersecurity, phishing, social engineering |
| `crypto/` | Bitcoin, DeFi, blockchain |
| `misc/` | Anything that doesn't fit above |

## Bookmark File Format

Each file has YAML frontmatter with:
- `type`: always "reference"
- `status`: always "active"
- `tags`: array including `type/reference`, `source/x-bookmark`, and one or more `topic/*` tags
- `created`, `modified`: dates
- `author`: Twitter handle
- `tweet_id`, `tweet_url`: source tweet

## Conventions

- Never modify bookmark file contents — the bot owns the content
- Folder names are broad categories defined in `_topic-map.yml` — never use raw topic tags as folder names
- Files with no matching tag in the map go to `misc/`
- To add new topic mappings, edit `_topic-map.yml`
- Delete junk bookmarks: unresolvable t.co links, empty/broken content, `[object Object]` placeholders with no real summary
- Remove empty topic folders after deleting their last file

## Second Brain / Wiki Layer

This vault follows the [LLM Wiki pattern](https://x.com/karpathy): bookmarks are the raw source of truth, and the LLM maintains a compiled wiki on top.

### Architecture

```
bookmark folders/    → Raw sources (immutable, bot-owned)
wiki/                → LLM-compiled knowledge (LLM-owned, user reads)
  INDEX.md           → Catalog of all wiki pages
  concepts/          → One page per recurring concept/tool/framework
  comparisons/       → Side-by-side comparison tables
  authors/           → Profiles of authors with multiple bookmarks
  synthesis/         → Cross-cutting theme articles
outputs/             → Generated reports, query answers, analyses
log.md               → Append-only record of all wiki operations
```

### Wiki Rules

- **wiki/ is entirely LLM-maintained** — user reads and browses, LLM writes and updates
- Bookmark files remain immutable — never modify them
- Every wiki page has YAML frontmatter:
  - `type`: concept | comparison | author | synthesis
  - `sources`: list of bookmark file paths that inform the page
  - `created`, `modified`: dates
- Use `[[wikilinks]]` for cross-references between wiki pages
- Use `[[folder/filename]]` to link back to source bookmarks (without .md extension for Obsidian)
- Maintain `wiki/INDEX.md` — update it on every compile
- `log.md` is append-only, one `## [date] operation | description` entry per operation
- `outputs/` stores generated reports with `YYYY-MM-DD-slug.md` naming

### Wiki Page Template

```markdown
---
type: concept
sources:
  - ai-agents/2026-03-25-example.md
created: 2026-04-05
modified: 2026-04-05
---

# Concept Name

One-paragraph summary.

## Key Points
- ...

## Related
- [[other-concept]]

## Sources
- [[ai-agents/2026-03-25-example]] — what this source contributes
```

### Search with qmd

This vault is indexed as a qmd collection (`xbm`) for hybrid keyword + semantic search with LLM re-ranking. Use qmd as the primary search tool — it's faster and more accurate than manual Grep/Glob for finding relevant content.

```bash
# Keyword search (fast)
qmd search "agent framework" -c xbm

# Semantic search (understands meaning)
qmd vsearch "how to build autonomous agents" -c xbm

# Hybrid + reranking (best quality, use for /query)
qmd query "best practices for prompt engineering" -c xbm --json -n 10

# Get full document content
qmd get "wiki/concepts/mcp.md" --full

# After adding/updating files, refresh the index
qmd collection sync xbm && qmd embed
```

### Operations

- `/compile` — Build/update the wiki from all bookmarks (incremental), then refresh qmd index
- `/query <question>` — Search with qmd, synthesize answer, save to outputs/
- `/lint` — Health check: find gaps, contradictions, orphans, qmd index freshness
