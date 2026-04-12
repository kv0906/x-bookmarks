---
title: Chunking – First Principles
tags: [LLM, RAG, Preprocessing, Vector]
created: 2026-04-12
modified: 2026-04-12
---

# Chunking – First Principles

## Chunking là gì?
**Chunking** là kỹ thuật **chia nhỏ** tài liệu dài thành các đoạn nhỏ (chunk) trước khi chuyển thành vector.

Mục tiêu: mỗi chunk vừa đủ ngắn để embedding model hiểu hết, nhưng vẫn giữ đủ ý nghĩa.

## First Principle đơn giản
Nếu đưa cả tài liệu dài vào một lần → model dễ bị "quên" hoặc lẫn lộn.  
Chia nhỏ → model hiểu rõ từng phần → tìm kiếm và trả lời chính xác hơn.

## PM AI cần biết
- Chunking ảnh hưởng trực tiếp đến chất lượng RAG.
- Chunk quá nhỏ → mất ngữ cảnh. Chunk quá lớn → tìm kiếm kém chính xác.
- Trade-off phổ biến: Cần thử nhiều kích thước chunk (256–1024 token) để tìm điểm cân bằng.

**See also**: [[Embedding]], [[Vector Search]], [[RAG]]
