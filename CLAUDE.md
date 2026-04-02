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
