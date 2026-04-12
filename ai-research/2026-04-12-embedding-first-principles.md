---
title: Embedding – First Principles
tags: [LLM, RAG, Vector, Embedding]
created: 2026-04-12
modified: 2026-04-12
---

# Embedding – First Principles

## Embedding là gì?
**Embedding** là cách biến **text** (chữ) thành **vector số** (một dãy số) để máy tính hiểu được ý nghĩa của câu.

Mỗi câu, mỗi từ, mỗi đoạn văn đều được chuyển thành một điểm trong không gian số.

## ASCII Diagram: Embedding hoạt động

    Text                    Embedding Model           Vector
    ┌─────────────────┐     ┌─────────────┐     ┌──────────────────┐
    │ "Tôi thích AI"  │ ──► │  Transformer │ ──► │ [0.82, 0.15, ...│
    └─────────────────┘     │  (encode)    │     │  0.43, -0.21]   │
                            └─────────────┘     └──────────────────┘

    Ý nghĩa giống → vector gần:
    "Tôi thích AI"     → [0.82, 0.15, 0.43, -0.21]
    "AI rất thú vị"    → [0.80, 0.18, 0.41, -0.19]  ← gần!
    "Hôm nay trời mưa" → [-0.3, 0.72, 0.05, 0.88]  ← xa!

    Khoảng cách trong không gian vector:
         ▲
         │  ● "AI rất thú vị"
         │  ● "Tôi thích AI"         ← cụm AI
         │
         │              ● "trời mưa" ← cụm thời tiết
         └──────────────────────►

## First Principle đơn giản
Con người hiểu **ý nghĩa** của câu.  
Embedding giúp máy tính cũng "hiểu ý nghĩa" bằng cách đặt những câu có nghĩa giống nhau gần nhau trong không gian vector.

## PM AI cần biết
- Embedding là nền tảng của RAG và Vector Search.
- Chọn embedding model tốt → tìm kiếm chính xác hơn → sản phẩm AI thông minh hơn.
- Trade-off: Model embedding mạnh thường tốn nhiều compute và dung lượng.

**See also**: [[Vector Search]], [[Vector Database]], [[RAG]], [[Chunking]]
