---
title: Math Concepts for LLMs – Generalist Level (First Principles)
tags: [LLM, Math-Foundation, Generalist, Product-Management]
created: 2026-04-12
modified: 2026-04-12
---

# Math Concepts for LLMs – Generalist Level

## Bạn không cần giỏi toán để master LLM
Là **Product Manager AI** (generalist), bạn **không cần tính toán chi tiết** hay viết công thức.  
Bạn chỉ cần hiểu **concept cốt lõi** (first principles) để:
- Hiểu tại sao model hoạt động.
- Đánh giá trade-off (cost, speed, quality).
- Thảo luận với engineer và data scientist.
- Quyết định sản phẩm thông minh.

Dưới đây là **5 khái niệm toán quan trọng nhất** bạn nên nắm (mức generalist).

## ASCII Diagram: 5 trụ cột toán học của LLM

    ┌─────────────────────────────────────────────────────────┐
    │                    LLM hoạt động                        │
    └────────────────────────┬────────────────────────────────┘
                             │
         ┌───────────┬───────┴───────┬───────────┐
         ▼           ▼               ▼           ▼
    ┌─────────┐ ┌──────────┐ ┌───────────┐ ┌──────────┐
    │ Linear  │ │Probability│ │ Gradient  │ │Information│
    │ Algebra │ │    &      │ │ Descent   │ │  Theory  │
    │         │ │ Softmax   │ │           │ │          │
    │ vector, │ │ xác suất, │ │ học bằng  │ │ đo mức   │
    │ ma trận │ │ chọn token│ │ giảm lỗi  │ │ sai/đúng │
    └────┬────┘ └────┬──────┘ └─────┬─────┘ └────┬─────┘
         │           │              │             │
         ▼           ▼              ▼             ▼
    GPU, VRAM    Temperature    Training cost   Evaluation
    latency      creativity     Scaling Laws    Fine-tuning

## 1. Linear Algebra (Vectors & Matrices)
**Concept đơn giản**:  
Mọi thứ trong LLM đều là **vector** (dãy số) và **ma trận** (bảng số).  
Embedding = vector.  
Attention = nhân ma trận.  
Toàn bộ model = hàng tỷ phép nhân ma trận.

**PM Insight**:  
Đây là lý do GPU quan trọng (GPU giỏi nhân ma trận).  
Model càng lớn → ma trận càng to → càng tốn VRAM và tiền.

**See also**: [[Matrix Multiplication in LLMs]], [[Embedding]]

## 2. Probability & Statistics (Xác suất)
**Concept đơn giản**:  
LLM **không trả lời chắc chắn 100%**, mà chỉ **dự đoán xác suất** của từng token tiếp theo.  
Ví dụ: "Hôm nay trời" → 70% là "đẹp", 20% là "mưa", 10% là "nắng".

**PM Insight**:  
- Temperature cao = model sáng tạo hơn (chọn token xác suất thấp).  
- Temperature thấp = model an toàn, trả lời chắc chắn.  
- Hallucination cũng xuất phát từ việc chọn token có xác suất cao nhưng sai sự thật.

**See also**: [[Temperature & Sampling]]

## 3. Softmax (chỉ concept)
**Concept đơn giản**:  
Softmax là công thức biến một đống số thành **xác suất** (tổng bằng 1).  
Nó giúp model chọn token tiếp theo một cách "mềm mại".

**PM Insight**:  
Softmax nằm sau mọi câu trả lời bạn thấy trên ChatGPT.  
Nó quyết định model "tự tin" hay "do dự" khi sinh câu.

## 4. Gradient Descent & Optimization
**Concept đơn giản**:  
Khi huấn luyện, model liên tục **điều chỉnh hàng tỷ con số** (parameters) để giảm lỗi.  
Nó làm theo cách "dốc xuống" (gradient descent) – giống như đi xuống đồi để tìm điểm thấp nhất (lỗi nhỏ nhất).

**PM Insight**:  
- Training càng nhiều compute → model càng giỏi (Scaling Laws).  
- Fine-tuning = gradient descent trên dữ liệu nhỏ và cụ thể hơn.

**See also**: [[Scaling Laws]]

## 5. Information Theory (Entropy & Cross-Entropy)
**Concept đơn giản**:  
- **Entropy** = độ "ngạc nhiên" / không chắc chắn của model.  
- **Cross-entropy** = cách đo model dự đoán sai bao nhiêu so với câu trả lời đúng.

Model được train để **giảm cross-entropy** → càng ngày càng đoán đúng từ tiếp theo.

**PM Insight**:  
Đây là "điểm số" ẩn đằng sau mọi training.  
RLHF cũng dùng concept này để làm model trả lời "thông minh và an toàn" hơn.

## Tóm tắt cho Product Manager AI

| Khái niệm              | Mức độ quan trọng | Bạn chỉ cần hiểu…                  | Ứng dụng thực tế trong sản phẩm |
|------------------------|-------------------|------------------------------------|----------------------------------|
| Vectors & Matrices     | ★★★★★            | Nhân ma trận = cốt lõi của LLM     | GPU, VRAM, latency, cost        |
| Probability            | ★★★★             | Model chỉ dự đoán xác suất         | Temperature, creativity, safety |
| Gradient Descent       | ★★★              | Model học bằng cách giảm lỗi       | Training cost, Scaling Laws     |
| Softmax                | ★★★              | Chuyển số thành xác suất           | Cách model sinh câu trả lời     |
| Entropy / Cross-Entropy| ★★               | Đo mức độ sai của model            | Evaluation & fine-tuning        |

**Kết luận first-principles**:  
Toán trong LLM chỉ xoay quanh **2 thứ lớn**:  
1. Biến chữ thành số (vector + ma trận).  
2. Học cách giảm lỗi (xác suất + gradient).

Bạn nắm được 5 concept trên là đã đủ để **master foundations** như một generalist xuất sắc.

**See also**:  
[[Matrix Multiplication in LLMs]]  
[[Scaling Laws]]  
[[Embedding]]  
[[Attention Mechanism]]  
[[KV Cache]]
