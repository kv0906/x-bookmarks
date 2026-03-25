# x-bookmarks

An Obsidian vault of bookmarks auto-imported from X (Twitter) by xbm-bot.

## Structure

- Bot drops new bookmark files into the repo root as `YYYY-MM-DD-slug.md`
- Run `/organize` to move them into topic folders based on their `topic/*` frontmatter tags
- Topic folders are named after the first `topic/*` tag (e.g., `ai-agents/`, `cloudflare/`)

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
- Folder names match topic tag slugs exactly (lowercase, hyphenated)
- Files with no topic tags go to `uncategorized/`
