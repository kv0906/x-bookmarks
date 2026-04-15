---
type: concept
sources:
  - ai-research/2026-04-12-chunking-first-principles.md
created: 2026-04-15
modified: 2026-04-15
---

# Chunking

Chunking is the document-preprocessing step that splits long source material into retrieval-sized units before embedding. In practice, chunk quality is one of the biggest hidden levers in a RAG system: chunks that are too small lose context, while chunks that are too large blur topics and reduce retrieval precision.

## Key Points
- Good chunking balances semantic coherence against token budget: each chunk should be self-contained enough to make sense when retrieved alone
- Common strategies include fixed token windows, sentence/paragraph boundaries, and overlap between neighboring chunks to avoid losing edge context
- Chunk size is not a universal constant; it depends on document structure, embedding model behavior, and the downstream retrieval task
- Poor chunking degrades the whole RAG pipeline even when embeddings, vector search, and prompting are otherwise strong

## Related
- [[rag]] — chunking is the first major preprocessing step in the retrieval pipeline
- [[embedding]] — chunk boundaries shape the vectors the embedding model produces
- [[context-engineering]] — chunking is the static precursor to more adaptive context assembly

## Sources
- [[ai-research/2026-04-12-chunking-first-principles]] — chunk size trade-offs, overlap strategy, and why retrieval quality starts before search
