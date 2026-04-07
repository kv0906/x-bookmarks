---
type: reference
status: active
tags:
  - type/reference
  - source/x-bookmark
  - topic/ai-agent-architecture
  - topic/systems-engineering
  - topic/software-development-critique
created: 2026-04-05
modified: 2026-04-05
author: "@ashpreetbedi"
tweet_id: "2040841492860735634"
tweet_url: "https://x.com/ashpreetbedi/status/2040841492860735634"
---

# Critique of 'Harness Engineering' in AI Agent Development

## Summary
Ashpreet Bedi argues that the concept of 'harness engineering' for AI agents, often framed as 'Agent = Model + Harness,' oversimplifies the actual engineering required for production-ready agentic systems. The tweet suggests that focusing too much on the 'harness' (the part interacting directly with the model) leads developers to overlook critical systems engineering challenges like multi-tenancy, RBAC, and robust data storage, which constitute the majority of a successful product.

## Key Insights
- The framing 'Agent = Model + Harness' is misleading; a more accurate representation for production systems is 'Agent = Model + System,' where the harness is merely a component of the larger system.
- Many 'harness engineering' solutions, like using filesystems for memory, address problems that shouldn't exist with proper systems design and often introduce new complexities (e.g., virtualized filesystems to wrap databases).
- Key systems engineering problems ignored by a narrow focus on harness engineering include authentication, multi-tenancy, RBAC, resource isolation, state management, deployment, observability, and durable storage.
- These challenges are not new; they are decades-old software engineering problems that require existing systems engineering solutions rather than inventing new, less robust patterns.
- The patterns promoted by 'harness engineering' are often derived from and best suited for specific, single-user contexts like coding agents running in terminals, and generalizing them to broader agentic products is problematic.

## Content Angles
- A blog post expanding on the critical differences between 'harness' and 'system' in AI product development, offering concrete architectural recommendations.
- A presentation or workshop for developers on common pitfalls of oversimplifying AI agent architecture and how to apply traditional systems engineering principles to build robust AI products.

## Original
> Maybe I'm missing something, but "harness engineering" might be doing more harm than good.
> 
> I've read a couple of posts on harness engineering, filesystem memory, subagent architecture. All real, all important. I've learned a lot from them.
> 
> But I keep coming back to this: the framing of Agent = Model + Harness undersells the actual engineering involved. And as far as I can tell, none of the major agent products work this way.
> 
> Claude, ChatGPT, Devin. These are all systems. They handle authentication, multi-tenancy, deployment, observability, cost controls, state management across sessions and users, RBAC, resource isolation. The "harness" is a subset of the engineering involved in building these products.
> 
> A better framing might be Agent = Model + System. This makes sense because you can't serve a raw API call to users. You need the system around it to turn the model into a product. You could argue Agent = Model + Harness + System, and that's fair. But at that point the harness is just a component of the system. Treat it as one.
> 
> My concern is that when we center the conversation on harness engineering, we train developers to think about the 30% that touches the model and ignore the 70% that makes the thing actually work in the real world. 
> 
> When we look at the problem through the lens of the 30%, we end up with things like virtualized file systems which are solving problems that shouldn't exist in the first place.
> 
> At best, the harness wraps the model. The system is the product. And there's a reason the consensus is that model progress will eventually swallow the harness. Because the harness is a thin layer. The system is not. The system is the product, and that's what developers should be focusing on.
> 
> Another reason to take harness engineering with a grain of salt: it's shaped by coding agents. Coding agents are a very specific form factor which itself is evolving rapidly. Single user. Running in a terminal. Local filesystem. The patterns that emerge from this form factor are useful for this form factor. And I worry that generalizing them to broader agentic systems is damaging to the ecosystem as a whole.
> 
> Here's what I mean. And notice a pattern: many of these are solutions to problems that shouldn't exist in the first place if you start with the right system design.
> 
> 1. Filesystems for memory and storage
> Harness engineering recommends patterns like AGENTS.md files for memory. This works when one developer is running one agent on their laptop. It falls apart the moment you need a real product. There's a reason databases exist. Files don't support concurrent access. They don't support querying. They don't support access control. A filesystem as your memory layer is a single-user solution presented as architecture.
> 
> And now I'm seeing people build "virtualized file systems" that wrap databases into filesystem-like structures to patch over these limitations. At that point, just expose the database. You get SQL as a first-class interface, proper access control, and durable storage without the abstraction gymnastics. And you know what, LLMs are even better at SQL than they are at cat and bash.
> 
> 2. No multi-tenancy or RBAC
> How do 50 engineers on a team share an agent securely? How do you control which users can trigger which actions? That's multi-tenancy, authorization, and access control. No filesystem pattern solves this. You need real RBAC.
> 
> 3. No resource isolation
> How do you stop one tenant's runaway agent from burning through your entire token budget? That's resource isolation. It lives at the system level. A harness has no concept of it. I hear people recommending sandboxes scoped to individual users and it makes 0 sense to me because your costs will eat you alive.
> 
> Btw these problems aren't new. They're the same problems we've been solving in software engineering for decades.
> 
> The instinct to create new terminology comes from a good place. "Harness engineering", "Scaffolding”, "Context engineering". People want to name the new discipline. But every time we mint a new term for a subset of systems engineering, I think we make it harder for developers to recognize that the patterns they need already exist and we shouldn't re-invent the wheel.
> 
> All problems that harness engineering solves, you can solve with systems engineering. Maybe I'm wrong about this, but I'm just seeing harness engineering create more issues than it solves (virtualized file systems???)
> 
> If we want developers to successfully build agentic products, we should encourage them to think in systems. The solutions already exist. We should use them.
> 
> Again, maybe I'm missing something. I'll keep an open mind as I learn more. And maybe the answer is simply that harness engineering applies to coding agents and not to broader agentic products, which makes perfect sense.
> 
> TLDR: Agent = Model + Harness undersells the real problem. Harness engineering is shaped by coding agents (single user, terminal, local filesystem) and ignores the 70% that makes agents work in production: multi-tenancy, RBAC, approval flows, audit logs, resource isolation, durable storage.
> 
> These are systems engineering problems.
> — @ashpreetbedi, 2026-04-05
>
> likes: 385, retweets: 38, replies: 46

---
*Auto-imported from X Bookmarks*
