# Streak Challenge AI — Toán 9 (Submission-ready)
**Trường PTDTBT THCS Mường Đun** · Offline/PWA · Import CSV · Báo cáo 7 ngày

## Chạy ngay
- Mở `index.html` bằng Chrome/Edge.
- Bấm **Tạo dữ liệu demo**.
  - Giáo viên: `gv01 / 123456`
  - Học sinh: `hs001 / 123456`

## Demo 7 ngày để nộp minh chứng
- Đăng nhập Giáo viên → chọn học sinh → **Tạo dữ liệu test 7 ngày**
- **Xem báo cáo** → **In/Lưu PDF**

## Cài như app (PWA)
- Chrome → Add to Home screen (hoặc bấm “Cài app” nếu có)

## Bản v4
- ✅ Giáo viên có nút **➕ Thêm HS** để thêm học sinh thủ công.
- ✅ Giáo viên & học sinh có thể chọn **số câu/ngày** (3/5/7/10/15).


## Import bằng Excel/Word (mới)
- **Danh sách học sinh:** hỗ trợ **.xlsx/.xls** (khuyến nghị) hoặc .csv.
  - Cột tối thiểu: `id, name, class`
  - Nếu muốn tạo tài khoản phụ huynh: thêm `parentId, parentName, parentPhone, parentPw`
- **Ngân hàng câu hỏi:** hỗ trợ **.docx** (khuyến nghị dạng BẢNG) hoặc .csv.
  - Header bảng Word: `subject, skill, diff, text, A, B, C, D, ans, explain, hint1, hint2, hint3`

## Vai trò Phụ huynh (mới)
- Giáo viên có thể **Thêm PH** thủ công và **gán học sinh**.
- Phụ huynh đăng nhập để xem **báo cáo 7 ngày** và **kết quả theo ngày** của học sinh.
