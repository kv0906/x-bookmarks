---
title: KV Cache – First Principles
tags: [LLM, Inference, Memory, Performance]
created: 2026-04-12
modified: 2026-04-12
---

# KV Cache – First Principles

## KV Cache là gì?
**KV Cache** là "bộ nhớ ngắn hạn" của LLM khi đang suy luận (inference).

Khi model sinh câu trả lời, nó không tính lại toàn bộ câu từ đầu mỗi lần.  
Nó lưu lại **Key (K)** và **Value (V)** của tất cả các token đã xử lý trước đó → gọi là **KV Cache**.

## First Principle đơn giản
- Mỗi lần sinh 1 token mới → model chỉ cần nhìn vào KV Cache + token mới.
- Không có KV Cache → model phải tính lại từ đầu → **rất chậm**.
- Có KV Cache → model chỉ tính thêm phần mới → **nhanh hơn rất nhiều**.

## Ví dụ thực tế
Bạn hỏi: "Giải thích về AI đi"  
Model sinh 10 câu trả lời → KV Cache lưu lại toàn bộ 10 câu đó.  
Bạn hỏi tiếp "Còn về nhược điểm thì sao?" → model chỉ dùng KV Cache để nhớ ngay lập tức, không tính lại từ đầu.

## PM AI cần biết
- Context càng dài → KV Cache càng to → **ngốn VRAM/RAM nhiều**.
- Đây là một trong những lý do latency tăng khi chat dài.
- Trade-off: Context dài = UX tốt hơn nhưng **chi phí & tốc độ kém hơn**.

**See also**: [[Attention]], [[Inference]], [[Quantization]]
