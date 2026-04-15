---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agents
  - topic/linear-integration
  - topic/anthropic-claude
  - topic/workflow-automation
created: 2026-04-15
modified: 2026-04-15
author: "@tom_doerr"
tweet_id: "2044267852098658735"
tweet_url: "https://x.com/tom_doerr/status/2044267852098658735"
---

# Bridge Claude Managed Agents with Linear for Enhanced Team Collaboration

## Summary
This bookmarked tweet links to a GitHub repository demonstrating an integration between Anthropic's Claude Managed Agents and Linear's Agents SDK. The project showcases how to build an internal knowledge agent on Vercel, enabling teams to leverage Claude's capabilities to query and process information across platforms like GitHub, Notion, and Slack. It exemplifies how Claude can function as an autonomous agent within Linear workflows, facilitating advanced tool use and improving team productivity.

## Key Insights
- Anthropic's Claude Managed Agents offer a fully managed agent runtime, allowing Claude to autonomously read files, execute commands, browse the web, and interact with MCP servers without needing custom agent loop development.
- The integration uses a 'durable Workflow' on Vercel, which polls Anthropic's API and streams real-time agent events via Server-Sent Events (SSE) to enable dynamic and continuous interaction.
- Per-user credential vaults are utilized to allow the Claude agent to securely make calls to MCP servers on behalf of individual users, maintaining data privacy and access control.
- Linear can act as an effective control plane for AI agents, treating them as virtual team members who can be assigned issues, create comments, and collaborate on projects, similar to human teammates.

## Content Angles
- A practical guide or tutorial for developers on integrating advanced AI agents like Claude with project management platforms such as Linear.
- An exploration of how AI-powered internal knowledge bases, built with LLMs and workflow automation, can transform team collaboration and information retrieval.

## Linked Content
- [https://github.com/linear/claude-managed-agents-demo](https://github.com/linear/claude-managed-agents-demo): A GitHub repository providing an example and guide for connecting Linear's Agents SDK with Claude Managed Agents to build an internal knowledge agent. This agent can be hosted on Vercel and is designed to query information across platforms such as GitHub, Notion, and Slack.

## Original
> Bridge for Claude Managed Agents in Linear
> 
> https://t.co/FfcK4w0jMl https://t.co/OSN7trLPTe
> — @tom_doerr, 2026-04-15
>
> likes: 9, retweets: 3, replies: 0

---
*Auto-imported from X Bookmarks*
