---
title: Cosine Similarity – First Principles
tags: [LLM, RAG, Vector, Similarity]
created: 2026-04-12
modified: 2026-04-12
---

# Cosine Similarity – First Principles

## Cosine Similarity là gì?
**Cosine Similarity** là cách đo **góc** giữa hai vector để xem chúng **gần nhau bao nhiêu**.

Giá trị từ -1 đến 1:
- Gần 1 = rất giống nhau
- Gần 0 = không liên quan
- Gần -1 = ngược nhau hoàn toàn

## ASCII Diagram: Cosine Similarity

              ▲
              │   A
              │  ╱   cos(θ) ≈ 1.0 (rất giống)
              │ ╱ θ nhỏ
              │╱───── B
              │
              │
    ──────────┼──────────►
              │
              │
              │╲
              │ ╲ θ = 90°
              │  ╲   cos(θ) ≈ 0 (không liên quan)
              │   C
              │

    Ví dụ:
    A = "machine learning"  ─┐
    B = "deep learning"      ├── cos(A,B) = 0.95 ← rất giống
                             │
    A = "machine learning"  ─┤
    C = "nấu ăn ngon"       ├── cos(A,C) = 0.05 ← không liên quan
                             │

## First Principle đơn giản
Hai vector càng chỉ cùng hướng → ý nghĩa của chúng càng giống nhau.  
Cosine Similarity chỉ quan tâm **hướng**, không quan tâm **độ dài** vector.

## PM AI cần biết
- Đây là phép đo phổ biến nhất trong Vector Search.
- Quyết định chunk nào sẽ được đưa vào prompt của LLM.
- Trade-off: Cosine Similarity nhanh nhưng đôi khi kém chính xác hơn so với các metric khác (Euclidean, Dot Product) tùy trường hợp.

**See also**: [[Vector Search]], [[Embedding]], [[Vector Database]], [[RAG]]
