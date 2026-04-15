---
allowed-tools: Bash, Read, Glob, Grep
description: Move unorganized bookmark files from repo root into topic-based folders
---

# Organize Bookmarks

Move unorganized X bookmark files from the repo root into topic-based folders using the topic map.

## Instructions

### 1. Load the Topic Map

Read `_topic-map.yml` from the repo root. This file maps broad folder names to lists of topic tag slugs. Build a lookup: for each tag slug, know which folder it maps to.

### 2. Find Unorganized Bookmarks

Use Glob to find markdown files in the repo root matching the bookmark naming pattern:
- Pattern: `[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]-*.md` in `/Users/van/projects/x-bookmarks/`
- Only match files directly in root (not in subdirectories)
- Exclude `README.md` and `CLAUDE.md`

If no matching files are found, report "All bookmarks are already organized." and stop.

### 2b. Apply the Quality Gate (BEFORE topic routing)

For every candidate file, apply the Quality Gate defined in `CLAUDE.md` → "Quality Gate (junk filter)". Read the file's full content (frontmatter + body) and check all reject criteria: broken content, zero-value content, duplicates (same `tweet_id` as an existing file anywhere in the vault).

For each file that fails the gate:
- `mkdir -p _trash && mv <filename> _trash/`
- Record the filename and one-line reason for the report

Files that pass the gate continue to step 3. When in doubt, prefer keep over quarantine.

### 3. For Each Unorganized File (that passed the gate)

Read the file's YAML frontmatter and extract:
- The `tags` array
- Find **all** tags starting with `topic/` (e.g., `topic/ai-agents`)
- Strip the `topic/` prefix to get tag slugs (e.g., `ai-agents`)

Determine the destination folder:
1. For each topic tag slug (in order), look it up in the topic map
2. Use the **first matching** folder from the map
3. If no tag matches the map, use `misc/` as the folder name

### 4. Move the File

For each file, run:

```bash
mkdir -p <folder> && mv <filename> <folder>/
```

**Important**: Before moving, check if the destination file already exists. If it does, skip and note "already exists, skipped".

### 5. Report Results

After processing all files, output a summary table:

```
Organized N bookmark(s):

  filename-a.md -> ai-agents/
  filename-b.md -> web-dev/

Topic folders: ai-agents, web-dev
```

Also report quarantined files (if any):

```
Quarantined N file(s) to _trash/:
  filename-x.md — empty summary / [object Object]
  filename-y.md — bare t.co link, no resolved content
```

If any tags were not found in the topic map, list them so the user can update `_topic-map.yml`:

```
Unmapped tags (went to misc/): some-new-tag, another-tag
```

## Rules

- Only move files matching the date-slug pattern from root. Never touch files already in subdirectories.
- Never modify file contents — only move them.
- Always use `_topic-map.yml` to determine folders — never use raw topic tags as folder names.
- Create folders on demand. Never pre-create empty folders.
- This command is idempotent — safe to run multiple times.
