---
type: synthesis
sources:
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-kv-cache-first-principles.md
  - ai-research/2026-04-12-attention-mechanism-first-principles.md
  - ai-research/2026-04-12-matrix-multiplication-in-llms.md
  - ai-research/2026-04-12-gpu-in-llm-inference.md
  - ai-research/2026-04-12-rag-retrieval-augmented-generation.md
  - ai-research/2026-04-12-vector-database-first-principles.md
  - ai-research/2026-04-12-vector-search-first-principles.md
  - ai-research/2026-04-12-embedding-first-principles.md
  - ai-research/2026-04-12-chunking-first-principles.md
  - ai-research/2026-04-12-cosine-similarity-first-principles.md
  - ai-research/2026-04-12-scaling-laws-first-principles.md
  - ai-research/2026-04-12-math-concepts-for-llms-generalist.md
created: 2026-04-12
modified: 2026-04-12
---

# LLM Foundations: The AI Product Manager's First-Principles Guide

A collection of 13 interconnected first-principles notes that build up LLM understanding from zero — designed for AI Product Managers who need to reason about cost, speed, quality, and UX trade-offs without needing to write code or solve equations.

## The Learning Map

The notes form two knowledge clusters that converge on product decisions:

```
                    ┌─────────────────┐
                    │  LLM Foundations │ (master overview)
                    └────────┬────────┘
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
    ┌──────────────┐  ┌────────────┐  ┌──────────────┐
    │  How LLMs    │  │  How LLMs  │  │  How LLMs    │
    │  Think       │  │  Run       │  │  Learn       │
    └──────┬───────┘  └─────┬──────┘  └──────┬───────┘
           │                │                │
    ┌──────┴───────┐  ┌─────┴──────┐  ┌──────┴───────┐
    │ Attention    │  │ GPU/CPU    │  │ Scaling Laws │
    │ Embedding    │  │ KV Cache   │  │ Math Concepts│
    │              │  │ Matrix Mul │  │              │
    └──────┬───────┘  └─────┬──────┘  └──────┬───────┘
           │                │                │
           └────────────────┼────────────────┘
                            ▼
                    ┌──────────────┐
                    │  RAG Stack   │ (applied technique)
                    │  Chunking    │
                    │  VectorDB    │
                    │  VectorSearch│
                    │  Cosine Sim  │
                    └──────────────┘
```

## Three Clusters

### 1. How LLMs Think (Architecture)
**[[attention-mechanism]]** is the core innovation — letting the model see the entire input simultaneously and focus on what matters. **[[embedding]]** converts text into numerical vectors that attention operates on. Together, they explain why LLMs can understand language: similar meanings cluster in vector space, and attention computes which clusters matter for the current prediction.

### 2. How LLMs Run (Inference)
**[[llm-inference]]** covers the production runtime: the prefill/decode pipeline, GPU vs CPU trade-offs, VRAM bottlenecks, quantization, and matrix multiplication as the dominant operation. **[[kv-cache]]** explains why conversations get slower as they get longer — the key-value cache grows linearly with context. The GPU note quantifies the difference: 10-35 tok/s (CPU) vs 60-250+ tok/s (GPU).

### 3. How LLMs Improve (Scaling & Learning)
**[[scaling-laws]]** are the power-law relationships that let labs predict model quality before training begins. The math concepts note distills the five mathematical pillars (linear algebra, probability, softmax, gradient descent, information theory) to the level a generalist needs — enough to reason about trade-offs without solving equations.

## The RAG Bridge

The RAG cluster connects LLM fundamentals to production AI products. It traces a complete pipeline: documents → [[chunking]] → [[embedding]] → vector database → vector search (cosine similarity) → prompt assembly → LLM generation. This pipeline is how AI products "know" things the model wasn't trained on — and it's the single most important architecture pattern for AI PMs to understand.

## The PM Decision Framework

Every note surfaces the same core tension:

| Lever | Improve | At the cost of |
|-------|---------|-----------------|
| Bigger model | Quality | Cost, latency |
| Quantization | Speed, cost | Slight quality loss |
| Longer context | UX (remembers more) | VRAM, latency |
| RAG | Accuracy, freshness | Latency, infra cost |
| Better embeddings | Search quality | Compute per document |

The PM's job is choosing where on the trade-off curve to operate for their product — and these 13 notes provide the first-principles understanding to make those decisions with confidence.

## Related Concepts
- [[llm-inference]] — the production runtime
- [[rag]] — the applied technique
- [[scaling-laws]] — the industry compass
- [[context-engineering]] — RAG's evolution into agentic context assembly
- [[llm-pruning]] — challenging scaling laws by finding redundant parameters

## Sources
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — master overview: tokens, training, transformer, inference, quantization
- [[ai-research/2026-04-12-attention-mechanism-first-principles]] — attention score visualization
- [[ai-research/2026-04-12-kv-cache-first-principles]] — with/without cache comparison
- [[ai-research/2026-04-12-matrix-multiplication-in-llms]] — core LLM operation
- [[ai-research/2026-04-12-gpu-in-llm-inference]] — GPU vs CPU parallelism
- [[ai-research/2026-04-12-rag-retrieval-augmented-generation]] — RAG pipeline overview
- [[ai-research/2026-04-12-vector-database-first-principles]] — VectorDB for similarity storage
- [[ai-research/2026-04-12-vector-search-first-principles]] — similarity search in vector space
- [[ai-research/2026-04-12-embedding-first-principles]] — text-to-vector representations
- [[ai-research/2026-04-12-chunking-first-principles]] — document splitting strategies
- [[ai-research/2026-04-12-cosine-similarity-first-principles]] — distance metric for vectors
- [[ai-research/2026-04-12-scaling-laws-first-principles]] — power-law performance prediction
- [[ai-research/2026-04-12-math-concepts-for-llms-generalist]] — five math pillars for PM generalists
