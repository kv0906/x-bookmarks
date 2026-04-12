---
type: concept
sources:
  - ai-research/2026-04-12-embedding-first-principles.md
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-math-concepts-for-llms-generalist.md
  - ai-research/2026-04-12-vector-database-first-principles.md
created: 2026-04-12
modified: 2026-04-12
---

# Embedding

Embeddings are the bridge between human language and machine computation: a learned mapping that converts text (words, sentences, documents) into dense numerical vectors where semantic similarity is encoded as geometric proximity. Two sentences with similar meaning land near each other in vector space; unrelated sentences land far apart.

## Key Points
- **Dual role in LLMs**: (1) token embeddings inside the model convert input tokens into vectors for the Transformer to process; (2) document embeddings in RAG pipelines convert text chunks into searchable vectors for retrieval
- **Semantic geometry**: "machine learning" and "deep learning" produce vectors that are nearly parallel (cosine similarity ~0.95), while "machine learning" and "cooking recipes" are nearly orthogonal (~0.05)
- **Embedding model choice matters**: stronger embedding models produce more accurate vector representations → better retrieval quality → better RAG answers. This is one of the highest-leverage decisions in a RAG system
- **Dimensionality**: typical embedding vectors are 384–1536 dimensions. Higher dimensions capture more nuance but consume more storage and compute
- **PM trade-off**: embedding quality directly drives product quality in search and retrieval features, but stronger models cost more compute and storage per document

## Related
- [[rag]] — embeddings are the foundation of the RAG retrieval pipeline
- [[attention-mechanism]] — attention operates on embedded token representations
- [[scaling-laws]] — embedding dimensions scale with model size

## Sources
- [[ai-research/2026-04-12-embedding-first-principles]] — text-to-vector conversion, semantic clustering visualization
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — embedding as the first Transformer step
- [[ai-research/2026-04-12-math-concepts-for-llms-generalist]] — vectors and matrices as the mathematical foundation
- [[ai-research/2026-04-12-vector-database-first-principles]] — embeddings stored in VectorDB for similarity search
