---
allowed-tools: Bash, Read, Glob, Grep
description: Move unorganized bookmark files from repo root into topic-based folders
---

# Organize Bookmarks

Move unorganized X bookmark files from the repo root into topic-based folders based on their frontmatter tags.

## Instructions

### 1. Find Unorganized Bookmarks

Use Glob to find markdown files in the repo root matching the bookmark naming pattern:
- Pattern: `[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md` in `/Users/van/projects/x-bookmarks/`
- Only match files directly in root (not in subdirectories)
- Exclude `README.md` and `CLAUDE.md`

If no matching files are found, report "All bookmarks are already organized." and stop.

### 2. For Each Unorganized File

Read the file's YAML frontmatter and extract:
- The `tags` array
- Find the **first** tag starting with `topic/` (e.g., `topic/ai-agents`)
- Strip the `topic/` prefix to get the folder name (e.g., `ai-agents`)

If no `topic/*` tag is found, use `uncategorized` as the folder name.

### 3. Move the File

For each file, run:

```bash
mkdir -p <topic-folder> && mv <filename> <topic-folder>/
```

**Important**: Before moving, check if the destination file already exists. If it does, skip and note "already exists, skipped".

### 4. Report Results

After processing all files, output a summary table:

```
Organized N bookmark(s):

  filename-a.md -> ai-agents/
  filename-b.md -> cloudflare/

Topic folders: ai-agents, cloudflare
```

## Rules

- Only move files matching the date-slug pattern from root. Never touch files already in subdirectories.
- Never modify file contents — only move them.
- The primary topic is always the FIRST `topic/*` tag in the frontmatter tags array.
- Create folders on demand. Never pre-create empty folders.
- This command is idempotent — safe to run multiple times.
