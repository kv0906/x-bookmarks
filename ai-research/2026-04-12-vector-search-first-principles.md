---
title: Vector Search – First Principles
tags: [LLM, RAG, Search, VectorDB]
created: 2026-04-12
modified: 2026-04-12
---

# Vector Search – First Principles

## Vector Search là gì?
**Vector Search** là kỹ thuật **tìm kiếm theo độ tương đồng** giữa các vector.

Thay vì tìm "chứa từ khóa", nó tìm "vector nào gần nhất" với vector của câu hỏi người dùng.

## ASCII Diagram: Vector Search hoạt động

    Không gian vector (2D đơn giản hóa):

         ▲ chiều 2
         │
         │     ● "nghỉ phép"
         │    ● "ngày nghỉ"          ← gần nhau = nghĩa giống
         │   ★ Query: "leave policy"
         │
         │                    ● "lập trình Python"
         │                   ● "code JavaScript"
         │
         │  ● "bóng đá"
         │
         └──────────────────────────► chiều 1

    ★ = câu hỏi user (query vector)
    ● = các chunk trong database

    Vector Search tìm ● gần ★ nhất
    → trả về "nghỉ phép" và "ngày nghỉ" (cosine similarity cao)

## First Principle đơn giản
Con người hiểu ý nghĩa → Vector Search cũng hiểu **ý nghĩa** thay vì chỉ chữ cái.  
Nó đo khoảng cách giữa hai vector (thường dùng Cosine Similarity).

## PM AI cần biết
- Đây là bước quan trọng nhất trong RAG → giúp model trả lời chính xác và cập nhật.
- Tốc độ Vector Search quyết định **latency** của toàn bộ chatbot.
- Trade-off: Tìm càng chính xác → càng chậm và tốn tài nguyên hơn.

**See also**: [[Vector Database]], [[RAG]], [[KV Cache]], [[Inference]]
