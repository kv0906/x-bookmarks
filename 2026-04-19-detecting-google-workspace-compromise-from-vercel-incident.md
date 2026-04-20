---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/google-workspace-security
  - topic/oauth-compromise
  - topic/supply-chain-attack
  - topic/vercel-incident
created: 2026-04-19
modified: 2026-04-19
author: "@BrendanFalk"
tweet_id: "2045953132770025769"
tweet_url: "https://x.com/BrendanFalk/status/2045953132770025769"
---

# Detecting Google Workspace Compromise from Vercel Incident

## Summary
This tweet provides actionable steps for Google Workspace administrators to check if their organization has been compromised by the same third-party AI tool that led to the Vercel security incident. The instructions involve navigating to the Google Admin Console's API Controls and filtering for a specific OAuth application ID. The linked content confirms that this specific OAuth app ID was an Indicator of Compromise (IoC) in the Vercel breach, originating from a compromised third-party AI tool called Context.ai, which affected numerous Google Workspace users.

## Key Insights
- The Vercel security incident (April 2026) was caused by the compromise of a third-party AI tool (Context.ai) that had Google Workspace OAuth access.
- Google Workspace administrators can check for potential compromise by navigating to `Google Admin Console > Security > Access and Data Control > API Controls > Manage app access > Accessed Apps`.
- The specific OAuth App ID to filter for is `110671459871-30f1spbu0hptbs60cb4vsmv79i7bbvqj.apps.googleusercontent.com`. Its presence indicates potential exposure.
- Vercel advised affected users and organizations to rotate non-sensitive environment variables and check activity logs for suspicious activity.

## Content Angles
- Create a detailed security guide for Google Workspace admins on proactive OAuth app auditing and incident response strategies following third-party compromises.
- Develop a checklist for companies using AI tools or third-party integrations with Google Workspace, emphasizing the importance of reviewing OAuth permissions and understanding potential attack vectors.

## Linked Content
- [https://admin.google.com/ac/owl/list?tab=apps](https://admin.google.com/ac/owl/list?tab=apps): This URL directs to the 'Accessed Apps' section within the Google Admin Console's API Controls, which allows administrators to manage and review third-party applications that have access to Google Workspace data.
- [http://110671459871-30f1spbu0hptbs60cb4vsmv79i7bbvqj.apps.googleusercontent.com](http://110671459871-30f1spbu0hptbs60cb4vsmv79i7bbvqj.apps.googleusercontent.com): This is the specific OAuth client ID identified as an Indicator of Compromise (IoC) related to the Vercel security incident, stemming from a compromised third-party AI tool (Context.ai) that had access to Google Workspace accounts.

## Original
> To check if your Google Workspace has been compromised by the same tool that compromised Vercel:
> 
> 1. Go to https://t.co/TpuIOW5Fwg
>     - This is Google Admin Console > Security > Access and Data Control > API Controls > Manage app access > Accessed Apps
> 2. Filter by ID = https://t.co/uqJnCqp5Ah 
>     - This is the ID of the compromised OAuth app
> 
> If you see an app after filtering, you have potentially been compromised
> — @BrendanFalk, 2026-04-19
>
> likes: 2756, retweets: 481, replies: 40

---
*Auto-imported from X Bookmarks*
