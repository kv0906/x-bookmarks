---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/vercel-sandboxes
  - topic/cloud-development
  - topic/state-management
  - topic/microvms
created: 2026-03-26
modified: 2026-03-26
author: "@vercel_dev"
tweet_id: "2037295348000100649"
tweet_url: "https://x.com/vercel_dev/status/2037295348000100649"
---

# Vercel Sandbox Automatic Persistence Beta

## Summary
Vercel Sandboxes now feature an automatic persistence capability, currently in beta, which allows them to save their entire filesystem state when stopped and restore it precisely when resumed. This new functionality removes the need for manual snapshots, enabling developers to maintain the state of their sandboxes for continuous agent workflows or long-running tasks without losing progress.

## Key Insights
- Vercel Sandboxes, which are isolated Linux microVMs designed for securely executing arbitrary or untrusted code, now offer automatic persistence of their filesystem state.
- This beta feature eliminates the need for manual snapshotting, ensuring that sandboxes can seamlessly resume execution from where they last stopped, which is particularly beneficial for agent workflows.
- The persistence mechanism works by separating storage from compute; when a sandbox stops, its compute session ends, but its filesystem is automatically snapshotted. Upon resumption, a new compute session boots from this stored snapshot.
- Automatic persistence is enabled by default when using the beta SDK and CLI, and importantly, users are not charged for the storage of the saved state, only for the active compute time.

## Content Angles
- Guide on implementing Vercel Sandbox persistent state for developing and testing AI agents.
- Technical deep-dive comparing Vercel Sandbox's new persistence with other serverless state management solutions.

## Linked Content
- [https://vercel.com/changelog/vercel-sandbox-persistent-sandboxes-beta](https://vercel.com/changelog/vercel-sandbox-persistent-sandboxes-beta): This Vercel changelog entry announces the beta release of automatic persistence for Vercel Sandboxes, detailing how the feature works, its advantages for managing durable sandboxes and agent workflows, and providing instructions for developers to use the beta SDK and CLI to enable it.

## Original
> Vercel Sandboxes can now automatically save their filesystem state when stopped and restore it when resumed.
> 
> Automated persistence enable your sandboxes to continue where agents left off, without manually snapshotting.
> 
> Available in beta ↓
> https://t.co/69CWhI4GDl
> — @vercel_dev, 2026-03-26
>
> likes: 125, retweets: 7, replies: 3

---
*Auto-imported from X Bookmarks*
