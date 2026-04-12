---
type: concept
sources:
  - ai-research/2026-04-12-scaling-laws-first-principles.md
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-math-concepts-for-llms-generalist.md
created: 2026-04-12
modified: 2026-04-12
---

# Scaling Laws

Scaling Laws are the empirically discovered power-law relationships showing that LLM performance improves predictably as you increase parameters, training data, and compute. This isn't random — it follows a mathematical curve, letting labs forecast model quality before training begins.

## Key Points
- **Three scaling axes**: parameters (model size), training data (token count), and compute (GPU-hours). All three must scale together — over-investing in one while starving another yields diminishing returns (Chinchilla insight)
- **Power-law relationship**: 10× more resources yields a predictable, sub-linear improvement. Performance curves are smooth and forecastable, which is why labs can justify hundred-million-dollar training runs
- **Practical benchmarks**: 7B → basic capability, 70B → significant quality jump, 405B+ → near-expert on many tasks. Each tier comes with exponentially higher training cost
- **PM strategic implications**: scaling laws are the "kim chỉ nam" (compass) of the AI industry. Companies that scale faster win — but cost grows exponentially while improvement grows logarithmically
- **The efficiency counterplay**: [[llm-pruning]], [[rag]], and quantization let you achieve "big model quality" with smaller models + smart architecture — the PM's job is choosing where on the cost-quality curve to operate

## Related
- [[llm-inference]] — quantization trades model precision for inference speed, operating on the cost side of the scaling curve
- [[llm-pruning]] — pruning discovers that not all scaled parameters are necessary
- [[attention-mechanism]] — more attention heads/layers is how scaling manifests architecturally
- [[kv-cache]] — larger models = larger KV caches = more VRAM per inference

## Sources
- [[ai-research/2026-04-12-scaling-laws-first-principles]] — power-law diagram, 7B/70B/405B benchmarks, PM strategy
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — scaling laws as natural law of LLMs, cost implications
- [[ai-research/2026-04-12-math-concepts-for-llms-generalist]] — gradient descent and information theory as the math behind scaling
