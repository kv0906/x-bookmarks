---
title: Attention Mechanism – First Principles
tags: [LLM, Transformer, Core-Concept]
created: 2026-04-12
modified: 2026-04-12
---

# Attention Mechanism – First Principles

## Attention là gì?
**Attention** là cách model "chú ý" vào những từ quan trọng trong câu.

Nó giúp model biết từ nào liên quan đến từ nào, dù cách xa nhau.

## First Principle đơn giản
Model không đọc câu theo thứ tự như con người.  
Nó nhìn **toàn bộ câu cùng lúc** và tự hỏi:  
"Trong câu này, từ 'nó' đang chỉ cái gì? Từ 'vì' đang giải thích điều gì?"

→ Attention tính toán điểm số cho từng cặp từ để quyết định "nên chú ý vào đâu".

## Ví dụ thực tế
Câu: "Tôi thích ăn phở vì nó ngon và ấm bụng."  
Attention giúp model biết:
- "nó" → chỉ "phở"
- "vì" → giải thích lý do thích

Không có Attention → model dễ nhầm lẫn.

## PM AI cần biết
- Attention là "bí quyết" khiến LLM thông minh.
- Nhưng Attention **rất tốn compute** → lý do model lớn chạy chậm và ngốn VRAM.
- Đây là lý do RAG + long-context rất quan trọng cho sản phẩm.

**See also**: [[KV Cache]], [[Transformer]], [[Matrix Multiplication]]
