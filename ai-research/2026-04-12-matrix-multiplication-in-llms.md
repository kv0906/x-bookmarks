---
title: Matrix Multiplication in LLMs
tags: [LLM, Math-Foundation, Performance]
created: 2026-04-12
modified: 2026-04-12
---

# Matrix Multiplication in LLMs

## Matrix Multiplication là gì? (Siêu đơn giản)
Đây là phép tính **nhân hai bảng số** với nhau.

Trong LLM, **hầu hết công việc** (tính attention, dự đoán token…) đều là nhân ma trận.

## ASCII Diagram: Matrix Multiplication (ví dụ đơn giản)

    Ma trận A (2×3)       Ma trận B (3×2)       Kết quả C (2×2)
    ┌───┬───┬───┐         ┌───┬───┐             ┌────┬────┐
    │ 1 │ 2 │ 3 │    ×    │ 7 │ 8 │      =      │ 58 │ 64 │
    ├───┼───┼───┤         ├───┼───┤             ├────┼────┤
    │ 4 │ 5 │ 6 │         │ 9 │10 │             │139 │154 │
    └───┴───┴───┘         ├───┼───┤             └────┴────┘
                          │11 │12 │
                          └───┴───┘

    Cách tính ô (1,1): 1×7 + 2×9 + 3×11 = 58

    Trong LLM thật:
    ┌─────────────┐     ┌──────────────┐     ┌──────────────┐
    │ Input tokens │  ×  │   Weights     │  =  │  Output       │
    │ (hàng nghìn) │     │ (hàng tỷ số) │     │ (dự đoán)    │
    └─────────────┘     └──────────────┘     └──────────────┘

## First Principle
Mọi kiến thức, logic, câu trả lời của model đều xuất phát từ **hàng tỷ phép nhân ma trận**.

## Tại sao quan trọng?
- GPU giỏi nhân ma trận → GPU nhanh hơn CPU rất nhiều.
- Model càng lớn → ma trận càng to → cần nhiều VRAM + compute hơn.

## PM AI cần biết
- Latency của sản phẩm chủ yếu đến từ matrix multiplication.
- Quantization = làm tròn số trong ma trận → giảm kích thước nhưng trade-off chất lượng.
- Đây là lý do Scaling Law tồn tại: ma trận càng lớn + càng nhiều data → model càng thông minh.

**See also**: [[GPU in LLM Inference]], [[Attention]], [[Transformer]]
