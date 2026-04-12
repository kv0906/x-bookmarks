---
title: GPU in LLM Inference
tags: [Hardware, Inference, Performance]
created: 2026-04-12
modified: 2026-04-12
---

# GPU trong LLM Inference

## GPU làm gì trong LLM?
GPU là "bộ não tính toán song song" giúp chạy inference nhanh.

## ASCII Diagram: GPU vs CPU

    CPU (vài chục lõi – làm lần lượt):
    ┌────┐
    │Core│→ phép tính 1 → phép tính 2 → phép tính 3 → ...
    │ 1  │
    ├────┤
    │Core│→ phép tính 4 → phép tính 5 → phép tính 6 → ...
    │ 2  │
    └────┘   (chỉ 2–16 lõi, xử lý tuần tự)

    GPU (hàng nghìn lõi – làm cùng lúc):
    ┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
    │C1│C2│C3│C4│C5│C6│C7│C8│C9│..│..│Cn│
    └──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
     ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓  ↓
     1  2  3  4  5  6  7  8  9 .. .. N   ← tất cả cùng lúc!

    Kết quả:
    CPU: ████████████████████████████░░░  10–35 tok/s
    GPU: ████░                            60–250+ tok/s

## First Principle
LLM cần nhân rất nhiều ma trận cùng lúc.  
GPU có hàng nghìn lõi nhỏ → làm được tất cả cùng một lúc.  
CPU chỉ có vài chục lõi → làm lần lượt → chậm.

## So sánh thực tế
- CPU: 10–35 tokens/s (chờ lâu)
- GPU: 60–250+ tokens/s (chat mượt như ChatGPT)

## PM AI cần biết
- Muốn sản phẩm nhanh → **ưu tiên GPU**.
- VRAM của GPU là bottleneck lớn nhất (không đủ VRAM → phải quantize hoặc offload → chậm).
- Trade-off: GPU đắt nhưng cho UX tốt. CPU rẻ nhưng latency cao → user dễ bỏ.

**See also**: [[Matrix Multiplication]], [[KV Cache]], [[Quantization]]
