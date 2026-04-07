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

## Quality Gate (junk filter)

The X bookmark bot sometimes produces broken or low-value files (scrape failures, hallucinated summaries, noise retweets). Every bookmark that enters the vault MUST pass the quality gate below. `/organize`, `/compile`, and `/lint` all enforce this — they quarantine failing files to `_trash/` (never silently keep them, never hard-delete without the user seeing them first).

### Reject criteria (any one → quarantine)

1. **Broken content**
   - Summary section empty, missing, or under ~200 chars of substance
   - Contains literal `[object Object]`, `undefined`, `null`, `{{...}}`, or other placeholder artifacts
   - Linked Content section is only a bare `t.co/...` URL with no resolved text
   - Frontmatter missing required fields (`author`, `tweet_url`, `tags`, `created`)
   - No `topic/*` tag at all
2. **Zero-value content**
   - Pure motivational / inspirational one-liner with no tool, framework, technique, or concrete insight
   - Generic "I used X and it was great" with no specifics (no repo, no workflow, no reproducible takeaway)
   - Screenshot-only posts where the summary doesn't capture what the screenshot showed
   - Promotional / giveaway / engagement-bait tweets
3. **Duplicates**
   - Same `tweet_id` as an existing file
   - Near-identical summary to an existing bookmark by the same author within 7 days (likely re-bookmark)

### Keep criteria (do NOT reject for)

- Uncompiled status — uncompiled ≠ junk
- Topic not yet in `_topic-map.yml` — goes to `misc/`, still valuable
- Opinion / essay content with substantive argument — keep
- Short content IF it captures a specific tool name, repo, or technique

### Quarantine workflow

- Move failing files to `_trash/YYYY-MM-DD-slug.md` (create folder on demand; it is gitignored-candidate but currently tracked so the user can audit)
- Append one line per quarantined file to `log.md` under the operation entry: `quarantine: <path> — <reason>`
- Never modify the file contents — only move
- The user periodically empties `_trash/` after review

### When in doubt

Prefer keep over quarantine. The gate exists to stop obvious noise, not to gatekeep judgment calls. If a file is borderline, leave it in its topic folder and let `/lint` flag it later.

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
qmd update && qmd embed
```

### Operations

- `/compile` — Build/update the wiki from all bookmarks (incremental), then refresh qmd index
- `/query <question>` — Search with qmd, synthesize answer, save to outputs/
- `/lint` — Health check: find gaps, contradictions, orphans, qmd index freshness
