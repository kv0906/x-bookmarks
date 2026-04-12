---
type: concept
sources:
  - ai-research/2026-04-12-attention-mechanism-first-principles.md
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-math-concepts-for-llms-generalist.md
created: 2026-04-12
modified: 2026-04-12
---

# Attention Mechanism

The core innovation of the Transformer architecture: attention lets a model look at the entire input simultaneously and compute relevance scores between every pair of tokens. This is how an LLM knows that "it" in "I like phở because it's delicious" refers to "phở" — by assigning high attention weight between those tokens despite the distance.

## Key Points
- **Self-attention** computes a score for every token pair in the input, producing a weighted representation where each token "attends to" the most relevant others
- Attention operates through three learned projections: **Query**, **Key**, and **Value** (Q, K, V) — the same mechanism that [[kv-cache]] optimizes by caching K and V across decode steps
- Attention is what makes Transformers superior to RNNs: they see the full sequence at once instead of processing left-to-right, enabling parallel training and long-range dependency capture
- **Compute cost scales quadratically** with sequence length (O(n²)) — this is the fundamental reason why long-context models are expensive and why context window limits exist
- For PMs: attention cost is the primary driver of latency and VRAM usage in production. Longer prompts = more attention computation = slower and more expensive

## Related
- [[kv-cache]] — caches attention's K/V matrices to avoid recomputation during decoding
- [[embedding]] — attention operates on embedded token representations
- [[llm-inference]] — attention is the bottleneck in the inference pipeline
- [[scaling-laws]] — more attention heads and layers = better performance (at exponential cost)

## Sources
- [[ai-research/2026-04-12-attention-mechanism-first-principles]] — attention score visualization, PM compute implications
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — Transformer architecture overview with attention as core component
- [[ai-research/2026-04-12-math-concepts-for-llms-generalist]] — attention as matrix multiplication (linear algebra foundation)
