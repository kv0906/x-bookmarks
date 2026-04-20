---
type: concept
sources:
  - ai-agents/2026-04-20-retrievers-dense-sparse-hybrid-first-principles.md
  - ai-research/2026-04-12-vector-search-first-principles.md
  - ai-research/2026-04-12-rag-retrieval-augmented-generation.md
created: 2026-04-20
modified: 2026-04-20
---

# Retrieval

Retrieval is the first-stage filter in RAG pipelines: select a candidate set from a large document corpus before reranking and answer generation. Its task is breadth and recall, not final judgment.

## Key Points

- A retriever does three things: transform data into a queryable form, score match relevance, and return a short top-k candidate set.
- Dense retrieval uses embeddings for **meaning-first** matching and handles paraphrase and semantic similarity.
- Sparse retrieval uses lexical evidence (terms, IDs, keywords, BM25-style weighting) for **exactness-first** matching.
- Hybrid retrieval is usually production-optimal because real queries often mix natural-language intent with exact terms.
- A practical retrieval stack is often “dense + sparse + reranker,” where the retriever provides candidate recall and the reranker sharpens final ordering.

## Related

- [[rag]] — retrieval is the first stage of the RAG pipeline
- [[embedding]] — dense retrieval depends on embedding quality
- [[context-engineering]] — context assembly depends on retrieval precision and shortlist quality
- [[mcp]] — tool protocol layer used for retrieval tooling and integrations

## Sources
- [[ai-agents/2026-04-20-retrievers-dense-sparse-hybrid-first-principles]] — dense vs sparse vs hybrid retrieval decision model and practical tradeoffs
- [[ai-research/2026-04-12-vector-search-first-principles]] — vector-space matching and practical limits of embedding retrieval
- [[ai-research/2026-04-12-rag-retrieval-augmented-generation]] — role of retrieval in RAG system architecture

