---
title: Vector Database – First Principles
tags: [LLM, RAG, VectorDB, Search]
created: 2026-04-12
modified: 2026-04-12
---

# Vector Database – First Principles

## Vector Database (VectorDB) là gì?
**VectorDB** là một loại cơ sở dữ liệu **chuyên lưu trữ vector** (các vector số đại diện cho ý nghĩa của text, hình ảnh…).

Thay vì lưu text thông thường như MySQL hay MongoDB, VectorDB lưu **vector embedding** để tìm kiếm theo **độ tương đồng** (similarity) thay vì tìm theo từ khóa.

## ASCII Diagram: VectorDB hoạt động

    Lưu trữ truyền thống (MySQL):
    ┌────────────┬───────────────────────┐
    │ ID         │ Text                  │
    ├────────────┼───────────────────────┤
    │ 1          │ "chính sách nghỉ phép"│  ← tìm bằng từ khóa
    │ 2          │ "quy trình onboard"   │
    └────────────┴───────────────────────┘

    Vector Database (Pinecone, Weaviate...):
    ┌────────────┬───────────────────────────────────┐
    │ ID         │ Vector Embedding                  │
    ├────────────┼───────────────────────────────────┤
    │ 1          │ [0.23, 0.87, -0.12, 0.45, ...]   │  ← tìm bằng
    │ 2          │ [0.21, 0.85, -0.10, 0.43, ...]   │    độ tương đồng
    │ 3          │ [-0.5, 0.12, 0.90, -0.33, ...]   │
    └────────────┴───────────────────────────────────┘

    Query: "ngày nghỉ" → [0.22, 0.86, -0.11, 0.44, ...]
                              ↓
    Kết quả: ID 1 (gần nhất), ID 2 (gần), ID 3 (xa) ✗

## First Principle đơn giản
Mọi thứ trong VectorDB đều dựa trên ý tưởng:  
**Những ý nghĩa giống nhau sẽ có vector nằm gần nhau trong không gian số.**

## PM AI cần biết
- VectorDB là "bộ não tìm kiếm" của RAG.
- Giúp sản phẩm AI của bạn **biết thông tin nội bộ công ty** (hợp đồng, tài liệu, FAQ…).
- Trade-off: Thêm chi phí lưu trữ + latency nhỏ, nhưng giảm hallucination rất mạnh.

**See also**: [[RAG]], [[Vector Search]], [[Inference]]
