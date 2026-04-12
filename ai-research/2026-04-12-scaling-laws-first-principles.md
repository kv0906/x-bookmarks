---
title: Scaling Laws – First Principles
tags: [LLM, Scaling, Performance, Product-Strategy]
created: 2026-04-12
modified: 2026-04-12
---

# Scaling Laws – First Principles

## Scaling Laws là gì?
**Scaling Laws** là quy luật tự nhiên của LLM:  
**Càng làm model lớn hơn (nhiều parameters + nhiều dữ liệu + nhiều compute) thì model sẽ thông minh hơn theo một cách có thể dự đoán được.**

Đây không phải là "càng lớn càng tốt ngẫu nhiên", mà là một **luật toán học** (power-law) – giống như quy luật vật lý.

## ASCII Diagram: Scaling Laws hoạt động

              Performance (chất lượng model)
                     ▲
                     │
               High  │          ● 405B
                     │       ●
                     │    ●
            Medium   │  ●
                     │●
              Low    │●─────────────►
                     └──────────────────────────────
                       Small     Medium     Huge
                     7B params   70B        405B+

           ↑ Parameters
           ↑ Training Data (triệu tỷ token)
           ↑ Compute (số GPU × thời gian)

Mỗi lần bạn **tăng gấp 10 lần** parameters + data + compute → performance tăng theo một đường cong dự đoán được.

## First Principle đơn giản
- Model không "thông minh ngẫu nhiên".
- Nó chỉ giỏi hơn khi được **cho nhiều nguyên liệu hơn** (parameters = não bộ, data = kiến thức, compute = thời gian học).
- Đây là lý do OpenAI, Google, xAI liên tục làm model lớn hơn: vì họ biết chính xác nó sẽ cải thiện bao nhiêu.

## Ví dụ thực tế
- Model 7B (nhỏ) → trả lời cơ bản, hay sai.
- Model 70B → thông minh hơn rõ rệt.
- Model 405B (như Llama 3.1) → gần mức chuyên gia ở nhiều task.

Mọi công ty đều biết trước kết quả nhờ Scaling Laws.

## PM AI cần biết (Insight quan trọng)
- **Ưu điểm**: Bạn có thể dự báo được chất lượng sản phẩm khi scale model.
- **Trade-off lớn**: Chi phí tăng **cấp số nhân** (training 405B tốn hàng trăm triệu USD).
- Quyết định sản phẩm: 
  - Dùng model nhỏ + RAG/Quantization → rẻ và nhanh.
  - Dùng model lớn → chất lượng cao nhưng đắt và chậm hơn.
- Scaling Laws đang là "kim chỉ nam" để các công ty AI cạnh tranh (ai scale nhanh hơn thì thắng).

**See also**: [[Matrix Multiplication in LLMs]], [[GPU in LLM Inference]], [[Quantization]], [[RAG]], [[KV Cache]]
