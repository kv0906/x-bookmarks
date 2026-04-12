---
type: concept
sources:
  - ai-research/2026-04-12-llm-foundations-first-principles.md
  - ai-research/2026-04-12-gpu-in-llm-inference.md
  - ai-research/2026-04-12-matrix-multiplication-in-llms.md
  - ai-research/2026-04-12-kv-cache-first-principles.md
  - ai-research/2026-04-12-math-concepts-for-llms-generalist.md
created: 2026-04-12
modified: 2026-04-12
---

# LLM Inference & Các Khái Niệm Cơ Bản

Inference is the process of using a trained model to generate output — everything that happens after training, when a user sends a prompt and receives a response. It's the production runtime of every AI product.

## 1. Inference Pipeline

Two-phase process:
1. **Prefill**: process the entire prompt in parallel (fast, compute-bound)
2. **Decode**: generate tokens one at a time autoregressively (slow, memory-bound) — this is where [[kv-cache]] is critical

## 2. CPU Inference vs GPU Inference

| Tiêu chí           | CPU Inference                  | GPU Inference                          |
|--------------------|--------------------------------|----------------------------------------|
| Tốc độ             | Chậm (10–35 tokens/s)          | Nhanh (60–250+ tokens/s)               |
| Phù hợp với        | Model nhỏ, máy không có GPU    | Model lớn, cần chat nhanh              |
| Bộ nhớ             | Dùng RAM hệ thống              | Dùng VRAM của card đồ họa              |
| Ưu điểm            | Rẻ, dễ chạy                    | Siêu nhanh, mượt mà                    |
| Nhược điểm         | Chờ lâu mỗi câu                | Đắt, VRAM hạn chế                      |

**Why GPU wins**: LLM inference is almost entirely matrix multiplication. GPUs have thousands of cores that perform these multiplications in parallel; CPUs have only a few dozen cores and must process sequentially.

## 3. VRAM — The Primary Bottleneck

- VRAM = GPU's dedicated memory, sitting on the GPU die for fast access
- Two consumers: **model weights** (fixed) + **KV Cache** (grows with context length)
- Insufficient VRAM forces offloading to system RAM → massive speed penalty
- Example: Llama 3.1 8B at FP16 needs ~16 GB just for weights, before any KV Cache

## 4. Matrix Multiplication — The Core Operation

Every computation in an LLM (embedding lookup, attention scoring, feed-forward layers, output prediction) is matrix multiplication. This single operation accounts for the vast majority of inference time and is why hardware choice matters so much.

## 5. Quantization

**Quantization** = reducing numerical precision of model weights to shrink model size and speed up inference.

| Mức quant | Dung lượng giảm | Tốc độ | Chất lượng | Khuyến nghị cho PM |
|-----------|------------------|--------|------------|---------------------|
| Q4_K_M    | ~4× nhỏ hơn     | Rất nhanh | Tốt       | Phù hợp sản phẩm user-facing |
| Q5_K_M    | ~3× nhỏ hơn     | Nhanh     | Rất tốt   | Balance tốt nhất |
| FP16      | Gốc              | Chậm      | Tốt nhất  | Chỉ dùng cho backend cao cấp |

Example: Llama 3.1 8B goes from ~16 GB (FP16) to ~4.5 GB (Q4_K_M) — runnable on 8 GB VRAM with minimal quality loss.

## 6. The PM Trade-off Triangle

```
        Quality
         /\
        /  \
       /    \
      /______\
   Speed    Cost
```

Every inference decision sits on this triangle. Quantization trades quality for speed+cost. Bigger models trade cost for quality. GPU trades cost for speed. The PM's job is choosing the right point for the product.

## Related
- [[kv-cache]] — the cache that makes autoregressive decoding feasible
- [[attention-mechanism]] — the most compute-intensive inference operation
- [[scaling-laws]] — why bigger models need more inference resources
- [[embedding]] — the first inference step: tokens → vectors
- [[rag]] — adds a retrieval step before inference
- [[llm-pruning]] — layer removal as model size reduction technique
- [[token-optimization]] — reducing token count complements hardware-level optimizations

## Sources
- [[ai-research/2026-04-12-llm-foundations-first-principles]] — inference pipeline (prefill/decode), quantization table, PM trade-offs
- [[ai-research/2026-04-12-gpu-in-llm-inference]] — GPU vs CPU throughput, VRAM bottleneck, parallel computation
- [[ai-research/2026-04-12-matrix-multiplication-in-llms]] — matrix mult as the core LLM operation, GPU advantage
- [[ai-research/2026-04-12-kv-cache-first-principles]] — KV Cache as inference memory optimization
- [[ai-research/2026-04-12-math-concepts-for-llms-generalist]] — linear algebra and probability as inference foundations
