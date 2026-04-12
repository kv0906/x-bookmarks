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

## First Principle đơn giản
Mọi thứ trong VectorDB đều dựa trên ý tưởng:  
**Những ý nghĩa giống nhau sẽ có vector nằm gần nhau trong không gian số.**

## PM AI cần biết
- VectorDB là "bộ não tìm kiếm" của RAG.
- Giúp sản phẩm AI của bạn **biết thông tin nội bộ công ty** (hợp đồng, tài liệu, FAQ…).
- Trade-off: Thêm chi phí lưu trữ + latency nhỏ, nhưng giảm hallucination rất mạnh.

**See also**: [[RAG]], [[Vector Search]], [[Inference]]
