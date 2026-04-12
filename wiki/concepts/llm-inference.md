---
type: concept
sources: []
created: 2026-04-12
modified: 2026-04-12
---

# LLM Inference & Các Khái Niệm Cơ Bản

## 1. Inference là gì?
**Inference** = quá trình **suy luận** của mô hình AI để đưa ra câu trả lời.

- Không phải huấn luyện (training), mà là **dùng mô hình đã học** để sinh nội dung.
- Ví dụ: Bạn hỏi "Thời tiết hôm nay thế nào?", mô hình suy luận và trả lời → đó là inference.

## 2. CPU Inference vs GPU Inference

| Tiêu chí           | CPU Inference                  | GPU Inference                          |
|--------------------|--------------------------------|----------------------------------------|
| Tốc độ             | Chậm (10–35 tokens/s)          | Nhanh (60–250+ tokens/s)               |
| Phù hợp với        | Model nhỏ, máy không có GPU    | Model lớn, cần chat nhanh              |
| Bộ nhớ             | Dùng RAM hệ thống              | Dùng VRAM của card đồ họa              |
| Ưu điểm            | Rẻ, dễ chạy                    | Siêu nhanh, mượt mà                    |
| Nhược điểm         | Chờ lâu mỗi câu                | Đắt, VRAM hạn chế                      |

**Kết luận**: Muốn inference nhanh → **nên dùng GPU**. CPU vẫn chạy được nhưng sẽ chậm hơn nhiều.

## 3. VRAM là gì?
- VRAM = **bộ nhớ riêng** của card đồ họa (GPU).
- Khác với RAM hệ thống: VRAM nằm ngay trên GPU nên **truy cập rất nhanh**.
- Khi chạy LLM, model weights + KV Cache đều cần nằm trong VRAM.
- Nếu không đủ VRAM → phải offload sang RAM → tốc độ giảm mạnh.

## 4. Tại sao GPU (dùng cho đồ họa) lại chạy được AI?
GPU có **hàng nghìn lõi nhỏ** làm việc **song song** cùng lúc.
LLM cần rất nhiều phép tính giống nhau (nhân ma trận).
GPU làm những phép tính đó **cùng một lúc** → nhanh gấp nhiều lần CPU (CPU chỉ làm lần lượt).

## 5. Tại sao LLM ngốn nhiều RAM/VRAM?
LLM ngốn bộ nhớ vì 2 phần chính:
1. **Model weights** (trọng số): hàng tỷ con số → chiếm phần lớn bộ nhớ.
2. **KV Cache**: bộ nhớ tạm lưu context (càng dài context → càng ngốn nhiều).

Ví dụ: Model 8B gốc cần ~16 GB chỉ để weights.

## 6. Quantization là gì?
**Quantization** = **làm tròn** các con số trong mô hình để model **nhỏ và nhẹ hơn**.

**Ví dụ thực tế (Llama 3.1 8B)**:
- Bản gốc (FP16): ~16 GB
- Sau quantize Q4_K_M: chỉ còn ~4.5 GB
- Vẫn chạy được trên máy 8 GB VRAM, chat nhanh hơn, chất lượng gần như không khác.

Lợi ích:
- Model nhỏ hơn 4–8 lần
- Chạy nhanh hơn
- Dùng ít RAM/VRAM hơn

## 7. Trade-off là gì?
**Trade-off** = **sự đánh đổi**: Bạn được cái này thì phải chấp nhận kém cái kia.

**Ví dụ trong Quantization**:
- Được: model nhỏ + nhanh + chạy trên máy yếu
- Mất: chất lượng câu trả lời giảm **một chút** (model đôi khi kém thông minh hơn, hay lặp từ, hiểu sai).

**Mức khuyến nghị phổ biến**: Q4_K_M hoặc Q5_K_M (đánh đổi rất nhỏ, đáng dùng).

## Ghi chú
- Muốn nhanh → GPU + quantize vừa đủ
- Muốn model lớn trên máy yếu → quantize mạnh + CPU/RAM lớn
- Trade-off luôn tồn tại: nhỏ + nhanh ↔ chất lượng cao

## Related
- [[llm-pruning]] — layer removal is another model size reduction technique
- [[token-optimization]] — reducing token count complements hardware-level optimizations
