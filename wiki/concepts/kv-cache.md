---
type: concept
sources:
  - ai-research/2026-04-12-kv-cache-first-principles.md
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-gpu-in-llm-inference.md
created: 2026-04-12
modified: 2026-04-12
---

# KV Cache

The Key-Value Cache is inference's "short-term memory": during autoregressive decoding, the model stores computed Key and Value tensors for all previously generated tokens so it only needs to compute the new token's attention against the cache — not reprocess the entire sequence from scratch.

## Key Points
- **Without KV Cache**: each new token requires recomputing attention for the entire sequence — O(n²) per step, making generation prohibitively slow
- **With KV Cache**: only the new token's Q/K/V are computed; previous K/V pairs are read from cache — inference becomes O(n) per step
- **VRAM is the bottleneck**: KV Cache grows linearly with sequence length and model depth. For large models with long contexts, the cache can consume more VRAM than the model weights themselves
- This is one of the main reasons **latency increases as conversations get longer** — the cache grows, consuming more memory and bandwidth
- **PM trade-off**: longer context window = better UX (remembers more history) but higher VRAM cost and slower response times. This directly affects infrastructure sizing and pricing

## Related
- [[attention-mechanism]] — KV Cache stores the K and V matrices that attention computes
- [[llm-inference]] — KV Cache is a core optimization in the inference pipeline
- [[scaling-laws]] — larger models have bigger KV caches per layer

## Sources
- [[ai-research/2026-04-12-kv-cache-first-principles]] — with/without cache comparison, VRAM growth dynamics
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — KV Cache as key inference concept for PMs
- [[ai-research/2026-04-12-gpu-in-llm-inference]] — VRAM as the primary KV Cache bottleneck
