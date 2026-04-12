---
title: LLM Foundations – First Principles (Dành cho AI Product Manager)
tags: [AI, LLM, Product-Management, First-Principles]
created: 2026-04-12
modified: 2026-04-12
---

# LLM Foundations – First Principles  
*(Hiểu gốc rễ để làm Product Manager AI giỏi hơn)*

Mục tiêu của note này:  
Bạn sẽ hiểu **LLM hoạt động như thế nào từ con số 0**, không cần biết code, không cần toán cao cấp.  
Tất cả giải thích bằng ngôn ngữ đời thường, ví dụ thực tế, và **liên hệ trực tiếp với công việc PM AI** (cost, speed, quality, UX, trade-off).

---

## 1. LLM là gì? (Cốt lõi đơn giản nhất)

**LLM = máy dự đoán từ tiếp theo cực kỳ giỏi.**

- Bạn gõ: "Hôm nay trời"
- Model đoán: "đẹp" hoặc "mưa" hoặc "nắng"… với xác suất cao nhất.
- Nó **không hiểu** gì cả. Nó chỉ học được quy luật từ hàng nghìn tỷ câu trong internet.

**First principle**:  
Mọi thứ LLM làm (viết bài, dịch, trả lời, lập trình…) đều chỉ là **dự đoán token tiếp theo** liên tục.

---

## 2. Token là gì? (Đơn vị cơ bản nhất)

- Model **không đọc chữ**, mà đọc **token** (mảnh nhỏ của từ).
- Ví dụ:
  - "Tôi đang học về AI" → có thể thành 6–7 token.
- 1 token ≈ 4 ký tự tiếng Anh, ≈ 3–4 ký tự tiếng Việt.
- Context window = số token tối đa model nhớ được (ví dụ 128K token ≈ 100.000 từ).

**PM quan tâm**:  
Context càng dài → UX tốt hơn (chat dài, nhớ lịch sử), nhưng **chi phí & latency cao hơn**.

---

## 3. Cách model "học" (Training – 3 giai đoạn chính)

1. **Pre-training** (giai đoạn đầu tiên, tốn kém nhất)
   - Cho model đọc **hàng nghìn tỷ token** từ internet, sách, code…
   - Nhiệm vụ: đoán từ tiếp theo → học được ngữ pháp, kiến thức, logic.
   - Kết quả: model biết rất nhiều, nhưng **chưa biết trả lời lịch sự hay an toàn**.

2. **Fine-tuning / Instruction Tuning**
   - Dùng dữ liệu "hỏi – đáp tốt" để dạy model trả lời theo phong cách con người.

3. **RLHF (Reinforcement Learning from Human Feedback)**
   - Con người vote: câu nào hay hơn.
   - Model học cách trả lời **hữu ích, trung thực, an toàn**.
   - Đây là bước làm ChatGPT trở nên "thông minh và dễ thương".

**PM insight**:  
Pre-training tốn hàng triệu USD.  
Fine-tuning & RLHF quyết định **chất lượng sản phẩm** (cảm giác model thông minh hay ngu).

---

## 4. Transformer – "Bộ não" của LLM (Giải thích siêu đơn giản)

Toàn bộ LLM hiện đại dùng **Transformer**.

- **Embedding**: Biến mỗi token thành một vector số (như tọa độ trong không gian).
- **Attention**: Model học cách **chú ý** vào các từ quan trọng trong câu.
  - Ví dụ: Trong câu "Tôi thích ăn phở vì nó ngon", attention giúp model biết "nó" chỉ phở.
- **Feed-forward**: Tính toán thêm để dự đoán token tiếp theo.

**First principle**:  
Transformer giỏi vì nó cho phép model **nhìn toàn bộ câu cùng lúc** và tập trung vào phần quan trọng.

---

## 5. Inference – Quá trình "suy luận" (Phần bạn đã hỏi nhiều)

Khi bạn chat:
- Model nhận prompt → **Prefill** (tính một lần nhanh).
- Sau đó **Decode** (sinh từng token một) → đây là phần chậm nhất.

**Yếu tố quyết định tốc độ inference**:
- GPU >> CPU (vì tính toán song song).
- VRAM đủ → model chạy full tốc độ.
- Quantization → model nhỏ hơn, nhanh hơn, nhưng chất lượng giảm nhẹ (trade-off).

---

## 6. Quantization & Trade-off (Ôn lại + PM view)

**Quantization** = làm tròn số trong model để model nhẹ hơn.

| Mức quant | Dung lượng giảm | Tốc độ | Chất lượng | Khuyến nghị cho PM |
|-----------|------------------|--------|------------|---------------------|
| Q4_K_M    | Rất nhỏ          | Rất nhanh | Tốt       | Phù hợp sản phẩm user-facing |
| Q5_K_M    | Nhỏ              | Nhanh     | Rất tốt   | Balance tốt nhất |
| Không quant | Lớn             | Chậm      | Tốt nhất  | Chỉ dùng cho backend cao cấp |

**Trade-off cốt lõi cho PM**:  
**Nhỏ + rẻ + nhanh** ↔ **Chất lượng cao**.  
Bạn phải quyết định sản phẩm ưu tiên cái nào.

---

## 7. Các khái niệm quan trọng khác (First Principles)

- **Parameters**: Số con số trong model (7B = 7 tỷ). Càng nhiều → càng thông minh (Scaling Law).
- **KV Cache**: Bộ nhớ tạm giúp model không phải tính lại toàn bộ câu mỗi lần sinh token mới.
- **Hallucination**: Model bịa ra thông tin sai → vì nó chỉ dự đoán, không "biết" thật giả.
- **Temperature**: Điều chỉnh độ "sáng tạo" (cao = sáng tạo, thấp = chắc chắn).
- **MoE (Mixture of Experts)**: Model lớn nhưng chỉ dùng một phần tham số mỗi lần → tiết kiệm chi phí (ví dụ Mixtral, Grok-1).

---

## 8. Scaling Laws – "Luật tự nhiên" của LLM

Càng:
- Nhiều parameters
- Nhiều dữ liệu
- Nhiều compute (GPU)

→ Model càng thông minh (theo quy luật toán học rõ ràng).

**PM insight**:  
Đây là lý do tại sao OpenAI, Google, xAI liên tục làm model lớn hơn. Nhưng chi phí tăng theo cấp số nhân.

---

## 9. Hạn chế cốt lõi của LLM (Bạn cần biết để thiết kế sản phẩm)

- Không có kiến thức thực tế sau ngày cutoff.
- Không có "ý thức" hay hiểu biết thật sự.
- Dễ hallucinate nếu không có RAG (Retrieval-Augmented Generation).
- Context window có giới hạn (dù đã lên 1M+ token).

---

## 10. Tư duy Product Manager AI (Áp dụng ngay)

Khi build sản phẩm:
1. **Quality** vs **Speed** vs **Cost** – Luôn có trade-off.
2. Latency (thời gian trả lời) ảnh hưởng trực tiếp đến UX.
3. Cost per token → quyết định giá sản phẩm.
4. Safety & Alignment → tránh rủi ro pháp lý.
5. Evaluation: Không có metric hoàn hảo, phải test thực tế với user.

**Câu hỏi first-principles bạn nên hỏi khi làm PM**:
- Model này đang làm gì ở mức token prediction?
- Trade-off lớn nhất hiện tại là gì?
- Làm sao giảm cost mà giữ quality?
- User thực sự cần context bao dài?
