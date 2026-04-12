---
title: RAG (Retrieval-Augmented Generation)
tags: [LLM, Advanced-Technique, Product]
created: 2026-04-12
modified: 2026-04-12
---

# RAG – Retrieval-Augmented Generation

## RAG là gì?
RAG = cho LLM "tra cứu tài liệu bên ngoài" trước khi trả lời.

## First Principle
LLM chỉ biết những gì nó đã học trong training (có cutoff date).  
RAG lấy dữ liệu mới nhất (hợp đồng, tài liệu công ty, website…) → đưa vào prompt → model trả lời dựa trên dữ liệu thật.

## Quy trình đơn giản
1. User hỏi
2. Hệ thống tìm tài liệu liên quan (vector search)
3. Đưa tài liệu + câu hỏi vào prompt
4. Model sinh câu trả lời → chính xác và cập nhật hơn.

## PM AI cần biết
- Giảm hallucination rất mạnh.
- Làm sản phẩm "biết về công ty bạn" hoặc "cập nhật real-time".
- Trade-off: Thêm độ trễ (latency) và chi phí (vector database).
- Đây là kỹ thuật quan trọng nhất để build AI product thực tế (chatbot nội bộ, search thông minh…).

**See also**: [[Hallucination]], [[Inference]], [[KV Cache]]
