---
title: GPU in LLM Inference
tags: [Hardware, Inference, Performance]
created: 2026-04-12
modified: 2026-04-12
---

# GPU trong LLM Inference

## GPU làm gì trong LLM?
GPU là "bộ não tính toán song song" giúp chạy inference nhanh.

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
