---
type: concept
sources:
  - ai-research/2026-04-12-rag-retrieval-augmented-generation.md
  - ai-research/2026-04-12-vector-database-first-principles.md
  - ai-research/2026-04-12-vector-search-first-principles.md
  - ai-research/2026-04-12-chunking-first-principles.md
  - ai-research/2026-04-12-cosine-similarity-first-principles.md
  - ai-research/2026-04-12-llm-foundations-first-principles.md
created: 2026-04-12
modified: 2026-04-12
---

# RAG (Retrieval-Augmented Generation)

RAG lets an LLM consult external documents before answering, bridging the gap between the model's training cutoff and real-time knowledge. Instead of relying solely on memorized parameters, the system retrieves relevant chunks from a vector database and injects them into the prompt — dramatically reducing hallucination and enabling domain-specific answers.

## Key Points
- **Core pipeline**: User query → embedding → vector search → top-k chunks → prompt assembly → LLM generation
- **Chunking** is a critical preprocessing step: documents must be split into pieces (256–1024 tokens) that are short enough for accurate embedding but long enough to preserve context
- **Embedding models** convert text into high-dimensional vectors where semantic similarity maps to geometric proximity — choosing the right embedding model is a key quality lever
- **Vector databases** (Pinecone, Weaviate, Chroma) store these embeddings and enable sub-second similarity search at scale, replacing traditional keyword-based retrieval
- **Cosine similarity** is the dominant distance metric: it measures the angle between two vectors (0–1 scale), ignoring magnitude — fast and effective for text
- **Trade-offs for PMs**: RAG adds latency (retrieval step) and cost (vector DB infrastructure) but is the most proven technique for reducing hallucination in production AI products
- RAG is the predecessor to [[context-engineering]] — a fixed, one-shot retrieval pipeline that evolved into agentic multi-source context assembly

## The RAG Pipeline (Visual)

```
Document → Chunk → Embed → Store in VectorDB
                                    ↓
User Query → Embed → Vector Search → Top-K Chunks → Prompt + LLM → Answer
```

## Related
- [[embedding]] — the representation layer that makes RAG work
- [[context-engineering]] — RAG's evolution: agents building their own context from multiple sources
- [[llm-inference]] — RAG adds a retrieval step before inference
- [[llm-wiki]] — an alternative to RAG: compile knowledge once instead of retrieving per query

## Sources
- [[ai-research/2026-04-12-rag-retrieval-augmented-generation]] — RAG pipeline overview, PM trade-offs
- [[ai-research/2026-04-12-vector-database-first-principles]] — VectorDB vs traditional DB, similarity storage
- [[ai-research/2026-04-12-vector-search-first-principles]] — similarity search in vector space, latency impact
- [[ai-research/2026-04-12-chunking-first-principles]] — document splitting strategies and size trade-offs
- [[ai-research/2026-04-12-cosine-similarity-first-principles]] — angle-based distance metric for vector matching
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — RAG mentioned as key technique to counter hallucination
