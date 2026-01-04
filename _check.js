
if ("serviceWorker" in navigator) window.addEventListener("load", ()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
let deferredPrompt=null; window.addEventListener("beforeinstallprompt",(e)=>{e.preventDefault();deferredPrompt=e;});
document.getElementById("btnInstall").onclick=async()=>{ if(!deferredPrompt){toast("Trình duyệt chưa hỗ trợ hoặc app đã cài.");return;} deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt=null; };

const LS_KEY="MDUN_STREAK_AI_DB_V3_SUBMIT";
const TEST_DAY_OFFSET_KEY="MDUN_TEST_DAY_OFFSET_V3";
const DEFAULT_SKILLS=[{"id": "alg_root", "name": "Đại số: Căn thức & biến đổi"}, {"id": "alg_poly", "name": "Đại số: Đa thức & hằng đẳng thức"}, {"id": "alg_linear_eq", "name": "Đại số: Phương trình bậc nhất"}, {"id": "alg_inequality", "name": "Đại số: Bất phương trình"}, {"id": "alg_system", "name": "Đại số: Hệ phương trình 2 ẩn"}, {"id": "alg_quadratic", "name": "Đại số: Phương trình bậc hai"}, {"id": "alg_function_linear", "name": "Đại số: Hàm số bậc nhất & đồ thị"}, {"id": "alg_statistics", "name": "Đại số: Thống kê cơ bản"}, {"id": "geo_pythag", "name": "Hình học: Định lý Pythagore"}, {"id": "geo_trig", "name": "Hình học: Hệ thức lượng (sin/cos/tan)"}, {"id": "geo_similarity", "name": "Hình học: Tam giác đồng dạng"}, {"id": "geo_circle_length_area", "name": "Hình học: Đường tròn (chu vi/diện tích)"}, {"id": "geo_circle_angles", "name": "Hình học: Góc trong đường tròn"}, {"id": "geo_circle_tangent", "name": "Hình học: Tiếp tuyến & dây cung"}, {"id": "geo_coordinate", "name": "Hình học: Tọa độ phẳng"}];
const DEFAULT_QUESTIONS=[{"id": "qseed_000", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √36", "A": "5", "B": "36", "C": "7", "D": "6", "ans": "D", "explain": "√(k²)=|k|, với k=6>0 ⇒ 6.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_001", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √49", "A": "49", "B": "6", "C": "8", "D": "7", "ans": "D", "explain": "√(k²)=|k|, với k=7>0 ⇒ 7.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_002", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √9", "A": "9", "B": "4", "C": "2", "D": "3", "ans": "D", "explain": "√(k²)=|k|, với k=3>0 ⇒ 3.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_003", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √4", "A": "2", "B": "1", "C": "3", "D": "4", "ans": "A", "explain": "√(k²)=|k|, với k=2>0 ⇒ 2.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_004", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √5184", "A": "5184", "B": "71", "C": "72", "D": "73", "ans": "C", "explain": "√(k²)=|k|, với k=72>0 ⇒ 72.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_005", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √400", "A": "400", "B": "19", "C": "20", "D": "21", "ans": "C", "explain": "√(k²)=|k|, với k=20>0 ⇒ 20.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_006", "subject": "Toán 9", "skill": "alg_root", "diff": 1, "text": "Rút gọn: √400", "A": "21", "B": "400", "C": "19", "D": "20", "ans": "D", "explain": "√(k²)=|k|, với k=20>0 ⇒ 20.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_007", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √576", "A": "23", "B": "576", "C": "24", "D": "25", "ans": "C", "explain": "√(k²)=|k|, với k=24>0 ⇒ 24.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_008", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √729", "A": "26", "B": "729", "C": "28", "D": "27", "ans": "D", "explain": "√(k²)=|k|, với k=27>0 ⇒ 27.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_009", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √576", "A": "23", "B": "24", "C": "25", "D": "576", "ans": "B", "explain": "√(k²)=|k|, với k=24>0 ⇒ 24.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_010", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √144", "A": "144", "B": "11", "C": "12", "D": "13", "ans": "C", "explain": "√(k²)=|k|, với k=12>0 ⇒ 12.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_011", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √729", "A": "27", "B": "26", "C": "729", "D": "28", "ans": "A", "explain": "√(k²)=|k|, với k=27>0 ⇒ 27.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_012", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √576", "A": "24", "B": "23", "C": "25", "D": "576", "ans": "A", "explain": "√(k²)=|k|, với k=24>0 ⇒ 24.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_013", "subject": "Toán 9", "skill": "alg_root", "diff": 2, "text": "Rút gọn: √25", "A": "4", "B": "5", "C": "6", "D": "25", "ans": "B", "explain": "√(k²)=|k|, với k=5>0 ⇒ 5.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_014", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √729", "A": "729", "B": "27", "C": "26", "D": "28", "ans": "B", "explain": "√(k²)=|k|, với k=27>0 ⇒ 27.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_015", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √9", "A": "4", "B": "2", "C": "3", "D": "9", "ans": "C", "explain": "√(k²)=|k|, với k=3>0 ⇒ 3.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_016", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √25", "A": "5", "B": "4", "C": "6", "D": "25", "ans": "A", "explain": "√(k²)=|k|, với k=5>0 ⇒ 5.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_017", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √2025", "A": "45", "B": "2025", "C": "46", "D": "44", "ans": "A", "explain": "√(k²)=|k|, với k=45>0 ⇒ 45.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_018", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √49", "A": "7", "B": "6", "C": "8", "D": "49", "ans": "A", "explain": "√(k²)=|k|, với k=7>0 ⇒ 7.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_019", "subject": "Toán 9", "skill": "alg_root", "diff": 3, "text": "Rút gọn: √784", "A": "29", "B": "28", "C": "784", "D": "27", "ans": "B", "explain": "√(k²)=|k|, với k=28>0 ⇒ 28.", "hint1": "Nhớ: √(a²)=|a|.", "hint2": "Ở đây k>0 nên |k|=k.", "hint3": "Kết luận."}, {"id": "qseed_020", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (4x + 9)² bằng", "A": "16x² + 36x + 81", "B": "4x² + 72x + 81", "C": "16x² + 72x + 81", "D": "16x² - 72x + 81", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_021", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (4x + 3)² bằng", "A": "16x² + 12x + 9", "B": "16x² + 24x + 9", "C": "4x² + 24x + 9", "D": "16x² - 24x + 9", "ans": "B", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_022", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (9x + 9)² bằng", "A": "81x² + 81x + 81", "B": "81x² + 162x + 81", "C": "81x² - 162x + 81", "D": "9x² + 162x + 81", "ans": "B", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_023", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (3x + 9)² bằng", "A": "9x² + 54x + 81", "B": "9x² + 27x + 81", "C": "9x² - 54x + 81", "D": "3x² + 54x + 81", "ans": "A", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_024", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (8x + 3)² bằng", "A": "8x² + 48x + 9", "B": "64x² + 24x + 9", "C": "64x² + 48x + 9", "D": "64x² - 48x + 9", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_025", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (4x + 9)² bằng", "A": "16x² - 72x + 81", "B": "16x² + 36x + 81", "C": "4x² + 72x + 81", "D": "16x² + 72x + 81", "ans": "D", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_026", "subject": "Toán 9", "skill": "alg_poly", "diff": 1, "text": "Khai triển: (5x + 3)² bằng", "A": "25x² + 15x + 9", "B": "25x² - 30x + 9", "C": "25x² + 30x + 9", "D": "5x² + 30x + 9", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_027", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (9x + 1)² bằng", "A": "81x² - 18x + 1", "B": "9x² + 18x + 1", "C": "81x² + 9x + 1", "D": "81x² + 18x + 1", "ans": "D", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_028", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (5x + 2)² bằng", "A": "25x² - 20x + 4", "B": "25x² + 10x + 4", "C": "5x² + 20x + 4", "D": "25x² + 20x + 4", "ans": "D", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_029", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (4x + 3)² bằng", "A": "16x² + 12x + 9", "B": "16x² + 24x + 9", "C": "4x² + 24x + 9", "D": "16x² - 24x + 9", "ans": "B", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_030", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (8x + 4)² bằng", "A": "64x² + 64x + 16", "B": "64x² - 64x + 16", "C": "8x² + 64x + 16", "D": "64x² + 32x + 16", "ans": "A", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_031", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (7x + 8)² bằng", "A": "49x² + 56x + 64", "B": "7x² + 112x + 64", "C": "49x² + 112x + 64", "D": "49x² - 112x + 64", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_032", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (7x + 1)² bằng", "A": "49x² - 14x + 1", "B": "49x² + 14x + 1", "C": "7x² + 14x + 1", "D": "49x² + 7x + 1", "ans": "B", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_033", "subject": "Toán 9", "skill": "alg_poly", "diff": 2, "text": "Khai triển: (2x + 4)² bằng", "A": "2x² + 16x + 16", "B": "4x² + 8x + 16", "C": "4x² - 16x + 16", "D": "4x² + 16x + 16", "ans": "D", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_034", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (5x + 5)² bằng", "A": "25x² + 25x + 25", "B": "5x² + 50x + 25", "C": "25x² + 50x + 25", "D": "25x² - 50x + 25", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_035", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (9x + 4)² bằng", "A": "9x² + 72x + 16", "B": "81x² + 72x + 16", "C": "81x² + 36x + 16", "D": "81x² - 72x + 16", "ans": "B", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_036", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (8x + 6)² bằng", "A": "64x² + 96x + 36", "B": "8x² + 96x + 36", "C": "64x² + 48x + 36", "D": "64x² - 96x + 36", "ans": "A", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_037", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (2x + 2)² bằng", "A": "4x² - 8x + 4", "B": "2x² + 8x + 4", "C": "4x² + 4x + 4", "D": "4x² + 8x + 4", "ans": "D", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_038", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (3x + 4)² bằng", "A": "3x² + 24x + 16", "B": "9x² - 24x + 16", "C": "9x² + 24x + 16", "D": "9x² + 12x + 16", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_039", "subject": "Toán 9", "skill": "alg_poly", "diff": 3, "text": "Khai triển: (4x + 5)² bằng", "A": "16x² + 20x + 25", "B": "4x² + 40x + 25", "C": "16x² + 40x + 25", "D": "16x² - 40x + 25", "ans": "C", "explain": "(ax+b)² = a²x² + 2abx + b².", "hint1": "Dùng hằng đẳng thức (u+v)².", "hint2": "u=ax, v=b.", "hint3": "Tính 2uv."}, {"id": "qseed_040", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 3x + (24) = 0", "A": "-7", "B": "-9", "C": "-6", "D": "-8", "ans": "D", "explain": "3x = -24 ⇒ x = -24/3 = -8.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_041", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 9x + (-54) = 0", "A": "5", "B": "6", "C": "8", "D": "7", "ans": "B", "explain": "9x = 54 ⇒ x = 54/9 = 6.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_042", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 2x + (-6) = 0", "A": "3", "B": "5", "C": "4", "D": "2", "ans": "A", "explain": "2x = 6 ⇒ x = 6/2 = 3.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_043", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 9x + (45) = 0", "A": "-6", "B": "-5", "C": "-3", "D": "-4", "ans": "B", "explain": "9x = -45 ⇒ x = -45/9 = -5.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_044", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 2x + (-2) = 0", "A": "0", "B": "2", "C": "3", "D": "1", "ans": "D", "explain": "2x = 2 ⇒ x = 2/2 = 1.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_045", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 4x + (32) = 0", "A": "-7", "B": "-9", "C": "-6", "D": "-8", "ans": "D", "explain": "4x = -32 ⇒ x = -32/4 = -8.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_046", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 1, "text": "Giải phương trình: 5x + (-15) = 0", "A": "4", "B": "5", "C": "2", "D": "3", "ans": "D", "explain": "5x = 15 ⇒ x = 15/5 = 3.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia cả hai vế cho hệ số của x.", "hint3": "Kiểm tra lại bằng thế vào phương trình."}, {"id": "qseed_047", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 2x + 9 = -1", "A": "-5", "B": "-4", "C": "-6", "D": "5", "ans": "A", "explain": "2x = -1-9 = -10 ⇒ x = -5.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_048", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 5x + 0 = -15", "A": "3", "B": "-3", "C": "-2", "D": "-4", "ans": "B", "explain": "5x = -15-0 = -15 ⇒ x = -3.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_049", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 6x + 4 = -2", "A": "-2", "B": "0", "C": "1", "D": "-1", "ans": "D", "explain": "6x = -2-4 = -6 ⇒ x = -1.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_050", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 3x + -8 = -2", "A": "2", "B": "-2", "C": "1", "D": "3", "ans": "A", "explain": "3x = -2--8 = 6 ⇒ x = 2.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_051", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 7x + -8 = -29", "A": "3", "B": "-3", "C": "-2", "D": "-4", "ans": "B", "explain": "7x = -29--8 = -21 ⇒ x = -3.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_052", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 6x + 9 = 45", "A": "-6", "B": "7", "C": "5", "D": "6", "ans": "D", "explain": "6x = 45-9 = 36 ⇒ x = 6.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_053", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 2, "text": "Giải phương trình: 3x + -6 = -12", "A": "-1", "B": "-3", "C": "2", "D": "-2", "ans": "D", "explain": "3x = -12--6 = -6 ⇒ x = -2.", "hint1": "Đưa {b} sang vế phải: {a}x = {c}-{b}.", "hint2": "Tính vế phải.", "hint3": "Chia cho {a}."}, {"id": "qseed_054", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 6(x + -2) = 3x + -12", "A": "0", "B": "1", "C": "-1", "D": "-1", "ans": "A", "explain": "Khai triển: 6x + -12 = 3x + -12 ⇒ 3x = 0 ⇒ x = 0.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_055", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 2(x + 5) = 2x + 10", "A": "6", "B": "-6", "C": "5", "D": "4", "ans": "C", "explain": "Khai triển: 2x + 10 = 2x + 10 ⇒ 0x = 0 ⇒ x = 5.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_056", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 3(x + 6) = 4x + 21", "A": "-2", "B": "-3", "C": "-4", "D": "2", "ans": "B", "explain": "Khai triển: 3x + 18 = 4x + 21 ⇒ -1x = 3 ⇒ x = -3.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_057", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 3(x + 3) = 6x + 24", "A": "-6", "B": "-5", "C": "4", "D": "-4", "ans": "B", "explain": "Khai triển: 3x + 9 = 6x + 24 ⇒ -3x = 15 ⇒ x = -5.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_058", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 4(x + -2) = 2x + -8", "A": "-1", "B": "0", "C": "-1", "D": "1", "ans": "B", "explain": "Khai triển: 4x + -8 = 2x + -8 ⇒ 2x = 0 ⇒ x = 0.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_059", "subject": "Toán 9", "skill": "alg_linear_eq", "diff": 3, "text": "Giải phương trình: 6(x + -4) = 5x + -20", "A": "-5", "B": "3", "C": "4", "D": "5", "ans": "C", "explain": "Khai triển: 6x + -24 = 5x + -20 ⇒ 1x = 4 ⇒ x = 4.", "hint1": "Khai triển vế trái: a(x+b)=ax+ab.", "hint2": "Chuyển các hạng tử chứa x về một vế.", "hint3": "Chia cho hệ số của x."}, {"id": "qseed_060", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 2x + 0 < -6", "A": "x > -3", "B": "x < -3", "C": "x ≤ -3", "D": "x ≥ -3", "ans": "B", "explain": "2x < -6-0 = -6 ⇒ x < -3.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_061", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 3x + -9 < -6", "A": "x > 1", "B": "x ≤ 1", "C": "x < 1", "D": "x ≥ 1", "ans": "C", "explain": "3x < -6--9 = 3 ⇒ x < 1.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_062", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 9x + -1 < -1", "A": "x ≥ 0", "B": "x ≤ 0", "C": "x < 0", "D": "x > 0", "ans": "C", "explain": "9x < -1--1 = 0 ⇒ x < 0.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_063", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 8x + -2 < -2", "A": "x ≥ 0", "B": "x ≤ 0", "C": "x > 0", "D": "x < 0", "ans": "D", "explain": "8x < -2--2 = 0 ⇒ x < 0.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_064", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 8x + 7 < 47", "A": "x > 5", "B": "x ≥ 5", "C": "x < 5", "D": "x ≤ 5", "ans": "C", "explain": "8x < 47-7 = 40 ⇒ x < 5.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_065", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 6x + 8 < -10", "A": "x > -3", "B": "x ≥ -3", "C": "x < -3", "D": "x ≤ -3", "ans": "C", "explain": "6x < -10-8 = -18 ⇒ x < -3.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_066", "subject": "Toán 9", "skill": "alg_inequality", "diff": 1, "text": "Giải bất phương trình: 7x + 0 < 42", "A": "x > 6", "B": "x < 6", "C": "x ≤ 6", "D": "x ≥ 6", "ans": "B", "explain": "7x < 42-0 = 42 ⇒ x < 6.", "hint1": "Chuyển hằng số sang vế phải.", "hint2": "Chia hai vế cho số dương thì chiều không đổi.", "hint3": "Viết tập nghiệm theo dạng bất đẳng thức."}, {"id": "qseed_067", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 5x - -1 ≥ -31", "A": "x ≤ -6", "B": "x > -6", "C": "x ≥ -6", "D": "x < -6", "ans": "C", "explain": "5x ≥ -31+-1 = -30 ⇒ x ≥ -6.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_068", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 3x - 1 ≥ 10", "A": "x ≤ 3", "B": "x ≥ 3", "C": "x < 3", "D": "x > 3", "ans": "B", "explain": "3x ≥ 10+1 = 9 ⇒ x ≥ 3.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_069", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 6x - 7 ≥ -5", "A": "x ≥ -2", "B": "x > -2", "C": "x ≤ -2", "D": "x < -2", "ans": "A", "explain": "6x ≥ -5+7 = -12 ⇒ x ≥ -2.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_070", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 4x - -3 ≥ -3", "A": "x ≤ 0", "B": "x ≥ 0", "C": "x > 0", "D": "x < 0", "ans": "B", "explain": "4x ≥ -3+-3 = 0 ⇒ x ≥ 0.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_071", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 6x - 3 ≥ 15", "A": "x < 2", "B": "x > 2", "C": "x ≤ 2", "D": "x ≥ 2", "ans": "D", "explain": "6x ≥ 15+3 = 12 ⇒ x ≥ 2.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_072", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 7x - 5 ≥ 12", "A": "x ≤ 1", "B": "x ≥ 1", "C": "x > 1", "D": "x < 1", "ans": "B", "explain": "7x ≥ 12+5 = 7 ⇒ x ≥ 1.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_073", "subject": "Toán 9", "skill": "alg_inequality", "diff": 2, "text": "Giải bất phương trình: 4x - -7 ≥ -15", "A": "x ≤ -2", "B": "x < -2", "C": "x ≥ -2", "D": "x > -2", "ans": "C", "explain": "4x ≥ -15+-7 = -8 ⇒ x ≥ -2.", "hint1": "Đưa -b sang vế phải: ax ≥ c + b.", "hint2": "Tính c + b.", "hint3": "Chia hai vế cho a > 0."}, {"id": "qseed_074", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -3x + -5 > -2", "A": "x > -1", "B": "x ≤ -1", "C": "x ≥ -1", "D": "x < -1", "ans": "D", "explain": "-3x > -2--5 = 3. Chia cho -3 (<0) nên đổi chiều ⇒ x < -1.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}, {"id": "qseed_075", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -6x + 5 > 23", "A": "x > -3", "B": "x < -3", "C": "x ≤ -3", "D": "x ≥ -3", "ans": "B", "explain": "-6x > 23-5 = 18. Chia cho -6 (<0) nên đổi chiều ⇒ x < -3.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}, {"id": "qseed_076", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -5x + 3 > -12", "A": "x ≥ 3", "B": "x ≤ 3", "C": "x < 3", "D": "x > 3", "ans": "C", "explain": "-5x > -12-3 = -15. Chia cho -5 (<0) nên đổi chiều ⇒ x < 3.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}, {"id": "qseed_077", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -2x + -2 > -6", "A": "x < 2", "B": "x ≥ 2", "C": "x ≤ 2", "D": "x > 2", "ans": "A", "explain": "-2x > -6--2 = -4. Chia cho -2 (<0) nên đổi chiều ⇒ x < 2.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}, {"id": "qseed_078", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -3x + 5 > 14", "A": "x < -3", "B": "x ≤ -3", "C": "x ≥ -3", "D": "x > -3", "ans": "A", "explain": "-3x > 14-5 = 9. Chia cho -3 (<0) nên đổi chiều ⇒ x < -3.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}, {"id": "qseed_079", "subject": "Toán 9", "skill": "alg_inequality", "diff": 3, "text": "Giải bất phương trình: -5x + 7 > -18", "A": "x < 5", "B": "x > 5", "C": "x ≤ 5", "D": "x ≥ 5", "ans": "A", "explain": "-5x > -18-7 = -25. Chia cho -5 (<0) nên đổi chiều ⇒ x < 5.", "hint1": "Chuyển b sang vế phải: ax > c-b.", "hint2": "Nhận xét a < 0 nên khi chia phải đổi chiều.", "hint3": "Kết luận nghiệm dạng x < ..."}];

function $(id){return document.getElementById(id);}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toast._tm);toast._tm=setTimeout(()=>t.classList.remove("show"),2400);}


/* ====== STUDENT GAME (Quest) ====== */
const GAME_HTML_B64 = "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9InZpIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSIgLz4KPHRpdGxlPlF1ZXN0IEjhu41jIFThuq1wIOKAlCBUcuG6r25nIFhhbmgg4oCiIFPGsHUgdOG6p20gTmjDom4gVuG6rXQ8L3RpdGxlPgoKPHN0eWxlPgogIDpyb290ewogICAgLyogV2hpdGUgKyBPY2VhbiBCbHVlIFRoZW1lICovCiAgICAtLWJnOiNmNGZiZmY7CiAgICAtLXBhbmVsOiNmZmZmZmY7CiAgICAtLWxpbmU6cmdiYSg3LCA5NCwgMTc3LCAuMTgpOwogICAgLS10ZXh0OiMwYjFiMmU7CiAgICAtLW11dGVkOiMzZDZmYTY7CgogICAgLS1hY2NlbnQ6IzBiNzRmZjsKICAgIC0tYWNjZW50MjojMjJjN2ZmOwoKICAgIC0tZ29vZDojMTBiOTgxOwogICAgLS1iYWQ6I2VmNDQ0NDsKICAgIC0tZ29sZDojZjU5ZTBiOwoKICAgIC0tcjoxOHB4OwogICAgLS1zaGFkb3c6IDAgMThweCA2MHB4IHJnYmEoMiwgMjgsIDU1LCAuMTIpOwogIH0KCiAgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9CiAgYm9keXsKICAgIG1hcmdpbjowOyBtaW4taGVpZ2h0OjEwMHZoOyBkaXNwbGF5OmdyaWQ7IHBsYWNlLWl0ZW1zOmNlbnRlcjsKICAgIGJhY2tncm91bmQ6CiAgICAgIHJhZGlhbC1ncmFkaWVudCgxMTAwcHggNjAwcHggYXQgMjAlIDEwJSwgcmdiYSgzNCwxOTksMjU1LC4yMiksIHRyYW5zcGFyZW50IDU1JSksCiAgICAgIHJhZGlhbC1ncmFkaWVudCg5MDBweCA2MDBweCBhdCA4MCUgMTUlLCByZ2JhKDExLDExNiwyNTUsLjE4KSwgdHJhbnNwYXJlbnQgNjAlKSwKICAgICAgcmFkaWFsLWdyYWRpZW50KDEyMDBweCA3MDBweCBhdCA1MCUgMTIwJSwgcmdiYSgxNiwxODUsMTI5LC4xMCksIHRyYW5zcGFyZW50IDYwJSksCiAgICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYsIHZhcigtLWJnKSk7CiAgICBjb2xvcjp2YXIoLS10ZXh0KTsKICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIFNlZ29lIFVJLCBSb2JvdG8sIEFyaWFsOwogICAgcGFkZGluZzoxNnB4OwogICAgb3ZlcmZsb3cteDpoaWRkZW47CiAgfQoKICAuc3RhcnN7CiAgICBwb3NpdGlvbjpmaXhlZDsgaW5zZXQ6LTQwJSAtNDAlOwogICAgb3BhY2l0eTouMzU7IHBvaW50ZXItZXZlbnRzOm5vbmU7CiAgICBiYWNrZ3JvdW5kOgogICAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMzAlLCByZ2JhKDExLDExNiwyNTUsLjE4KSwgdHJhbnNwYXJlbnQgNTUlKSwKICAgICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgNzAlIDIwJSwgcmdiYSgzNCwxOTksMjU1LC4xNiksIHRyYW5zcGFyZW50IDU1JSksCiAgICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDQwJSA3NSUsIHJnYmEoMTEsMTE2LDI1NSwuMTQpLCB0cmFuc3BhcmVudCA1NSUpLAogICAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA1NSUgNTUlLCByZ2JhKDIsMjgsNTUsLjEwKSwgdHJhbnNwYXJlbnQgNTUlKSwKICAgICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTUlIDgwJSwgcmdiYSgyLDI4LDU1LC4wOCksIHRyYW5zcGFyZW50IDU1JSk7CiAgICBhbmltYXRpb246IGRyaWZ0IDE4cyBsaW5lYXIgaW5maW5pdGU7CiAgfQogIEBrZXlmcmFtZXMgZHJpZnR7MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKX0xMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgxMjBweCw4MHB4LDApfX0KICBjYW52YXMjZnh7cG9zaXRpb246Zml4ZWQ7IGluc2V0OjA7IHBvaW50ZXItZXZlbnRzOm5vbmU7IHotaW5kZXg6NDA7fQoKICAuYXBwe3dpZHRoOm1pbigxMTYwcHgsMTAwJSk7IGRpc3BsYXk6Z3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjEuMzVmciAuNjVmcjsgZ2FwOjE0cHg7IHBvc2l0aW9uOnJlbGF0aXZlOyB6LWluZGV4OjI7fQogIEBtZWRpYSAobWF4LXdpZHRoOjkyMHB4KXsuYXBwe2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9fQoKICAuY2FyZHsKICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMzQsMTk5LDI1NSwuMTApLCByZ2JhKDI1NSwyNTUsMjU1LC45NSkgNDIlKSwgdmFyKC0tcGFuZWwpOwogICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTsKICAgIGJvcmRlci1yYWRpdXM6dmFyKC0tcik7CiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpOwogICAgb3ZlcmZsb3c6aGlkZGVuOwogICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7CiAgfQogIC5oZWFkewogICAgcGFkZGluZzoxNHB4IDE2cHg7CiAgICBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxMHB4OwogICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tbGluZSk7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDExLDExNiwyNTUsLjA4KSwgcmdiYSgyNTUsMjU1LDI1NSwuODApKTsKICB9CiAgLmJyYW5ke2Rpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MTBweDsgbWluLXdpZHRoOjB9CiAgLmRvdHsKICAgIHdpZHRoOjEwcHg7aGVpZ2h0OjEwcHg7Ym9yZGVyLXJhZGl1czo1MCU7CiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDMwJSAzMCUsIHZhcigtLWFjY2VudDIpLCB2YXIoLS1hY2NlbnQpKTsKICAgIGJveC1zaGFkb3c6IDAgMCAxOHB4IHJnYmEoMTEsMTE2LDI1NSwuMjgpOwogIH0KICAuYnJhbmQgYnt3aGl0ZS1zcGFjZTpub3dyYXA7IG92ZXJmbG93OmhpZGRlbjsgdGV4dC1vdmVyZmxvdzplbGxpcHNpczsgZm9udC13ZWlnaHQ6MTEwMDt9CiAgLnN1Yntjb2xvcjp2YXIoLS1tdXRlZCk7IGZvbnQtc2l6ZToxMnB4OyB3aGl0ZS1zcGFjZTpub3dyYXB9CiAgLnBpbGx7CiAgICBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDoxMHB4OwogICAgcGFkZGluZzo4cHggMTBweDsgYm9yZGVyLXJhZGl1czo5OTlweDsKICAgIGJvcmRlcjoxcHggc29saWQgdmFyKC0tbGluZSk7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43MCk7CiAgICBmb250LXNpemU6MTJweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyB3aGl0ZS1zcGFjZTpub3dyYXA7CiAgfQoKICAubWFpbntwYWRkaW5nOjE2cHg7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MTJweDt9CiAgLmFyZW5hewogICAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1saW5lKTsKICAgIGJvcmRlci1yYWRpdXM6MTZweDsKICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMzQsMTk5LDI1NSwuMTIpLCByZ2JhKDI1NSwyNTUsMjU1LC45MikgNTUlKTsKICAgIHBhZGRpbmc6MTRweDsKICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBvdmVyZmxvdzpoaWRkZW47CiAgfQogIC5yb3d7ZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MTBweDsgZmxleC13cmFwOndyYXA7fQogIC5taW5pe2Rpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MTBweDsgZmxleC13cmFwOndyYXA7fQoKICAuaGVhcnRze2Rpc3BsYXk6ZmxleDsgZ2FwOjZweDsgYWxpZ24taXRlbXM6Y2VudGVyO30KICAuaGVhcnR7CiAgICB3aWR0aDoxOHB4O2hlaWdodDoxOHB4O2JvcmRlci1yYWRpdXM6NXB4OwogICAgYmFja2dyb3VuZDogcmdiYSgxMSwxMTYsMjU1LC4wOCk7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgcG9zaXRpb246cmVsYXRpdmU7IHRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpOwogIH0KICAuaGVhcnQ6OmJlZm9yZSwuaGVhcnQ6OmFmdGVyewogICAgY29udGVudDoiIjsgcG9zaXRpb246YWJzb2x1dGU7IHdpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7Ym9yZGVyLXJhZGl1czo1MCU7CiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0OyBib3JkZXI6IGluaGVyaXQ7CiAgfQogIC5oZWFydDo6YmVmb3Jle2xlZnQ6LTlweDsgdG9wOjB9CiAgLmhlYXJ0OjphZnRlcntsZWZ0OjA7IHRvcDotOXB4fQogIC5oZWFydC5vbntiYWNrZ3JvdW5kOiByZ2JhKDIzOSw2OCw2OCwuMjIpOyBib3JkZXItY29sb3I6IHJnYmEoMjM5LDY4LDY4LC4yOCk7fQoKICAuYmFyV3JhcHsKICAgIHdpZHRoOjI2MHB4OyBtYXgtd2lkdGg6MTAwJTsKICAgIGhlaWdodDoxMHB4OyBib3JkZXItcmFkaXVzOjk5OXB4OwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsMTE2LDI1NSwuMDgpOwogICAgb3ZlcmZsb3c6aGlkZGVuOwogIH0KICAuYmFyewogICAgaGVpZ2h0OjEwMCU7IHdpZHRoOjAlOwogICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1hY2NlbnQpLCB2YXIoLS1hY2NlbnQyKSk7CiAgICBib3JkZXItcmFkaXVzOjk5OXB4OwogICAgdHJhbnNpdGlvbjp3aWR0aCAuMjVzIGVhc2U7CiAgfQoKICAuYm9zc1dyYXB7ZGlzcGxheTpub25lOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDoxMHB4O30KICAuYm9zc1RhZ3sKICAgIGZvbnQtd2VpZ2h0OjExMDA7IHBhZGRpbmc6NnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6OTk5cHg7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMjQ1LDE1OCwxMSwuMjgpOwogICAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLC4xNCk7CiAgICBjb2xvcjogIzhhNGIwMDsKICB9CiAgLmhwV3JhcHsKICAgIHdpZHRoOjE0MHB4O2hlaWdodDoxMHB4O2JvcmRlci1yYWRpdXM6OTk5cHg7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYmFja2dyb3VuZDogcmdiYSgxMSwxMTYsMjU1LC4wOCk7CiAgICBvdmVyZmxvdzpoaWRkZW47CiAgfQogIC5ocHtoZWlnaHQ6MTAwJTsgd2lkdGg6MTAwJTsgYmFja2dyb3VuZDogcmdiYSgyNDUsMTU4LDExLC40NSk7IHRyYW5zaXRpb246d2lkdGggLjIycyBlYXNlO30KCiAgLmNvbWJvRmxhbWV7CiAgICBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDo2cHg7CiAgICBwYWRkaW5nOjZweCAxMHB4OyBib3JkZXItcmFkaXVzOjk5OXB4OwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjY1KTsKICAgIGZvbnQtd2VpZ2h0OjExMDA7IGNvbG9yOnZhcigtLW11dGVkKTsKICB9CiAgLmNvbWJvRmxhbWUuaG90ewogICAgY29sb3I6IzhhNGIwMDsKICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU4LDExLC4yNik7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjEyKTsKICAgIGJveC1zaGFkb3c6IDAgMCAwIDZweCByZ2JhKDI0NSwxNTgsMTEsLjEwKTsKICAgIGFuaW1hdGlvbjpwdWxzZSAxLjJzIGVhc2UtaW4tb3V0IGluZmluaXRlOwogIH0KICBAa2V5ZnJhbWVzIHB1bHNlezAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0xcHgpfX0KCiAgLnRhZ3sKICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjhweDsKICAgIHBhZGRpbmc6NnB4IDEwcHg7IGJvcmRlci1yYWRpdXM6OTk5cHg7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNjUpOwogICAgY29sb3I6dmFyKC0tbXV0ZWQpOwogICAgZm9udC13ZWlnaHQ6MTEwMDsgZm9udC1zaXplOjEycHg7CiAgfQogIC50YWcuZ29sZHsKICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNDUsMTU4LDExLC4yOCk7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwxNTgsMTEsLjEyKTsKICAgIGNvbG9yOiM4YTRiMDA7CiAgfQoKICAucWJveHsKICAgIG1hcmdpbi10b3A6MTBweDsKICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgxMSwxMTYsMjU1LC4xOCk7CiAgICBib3JkZXItcmFkaXVzOjE2cHg7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC44NSk7CiAgICBwYWRkaW5nOjE0cHg7CiAgfQogIC5xdGV4dHttYXJnaW46MDsgZm9udC1zaXplOjE2cHg7IGxpbmUtaGVpZ2h0OjEuMzU7IGZvbnQtd2VpZ2h0OjExMDA7IGNvbG9yOnZhcigtLXRleHQpO30KCiAgLmFuc3dlcnN7bWFyZ2luLXRvcDoxMnB4OyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyOyBnYXA6MTBweDt9CiAgQG1lZGlhIChtYXgtd2lkdGg6NTIwcHgpey5hbnN3ZXJze2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9fQoKICAuYnRuewogICAgYXBwZWFyYW5jZTpub25lOwogICAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjIwKTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjkyKTsKICAgIGNvbG9yOiB2YXIoLS10ZXh0KTsKICAgIGJvcmRlci1yYWRpdXM6MTRweDsKICAgIHBhZGRpbmc6MTJweDsKICAgIHRleHQtYWxpZ246bGVmdDsKICAgIGN1cnNvcjpwb2ludGVyOwogICAgdXNlci1zZWxlY3Q6bm9uZTsKICAgIHRyYW5zaXRpb246LjEycyBlYXNlOwogICAgZm9udC13ZWlnaHQ6MTEwMDsKICAgIGRpc3BsYXk6ZmxleDsgZ2FwOjEwcHg7IGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7CiAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgb3ZlcmZsb3c6aGlkZGVuOwogIH0KICAuYnRuOmhvdmVyewogICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTFweCk7CiAgICBiYWNrZ3JvdW5kOiNmZmZmZmY7CiAgICBib3JkZXItY29sb3I6IHJnYmEoMTEsMTE2LDI1NSwuMzUpOwogICAgYm94LXNoYWRvdzogMCAxMHB4IDI0cHggcmdiYSgxMSwxMTYsMjU1LC4xMCk7CiAgfQogIC5idG46YWN0aXZle3RyYW5zZm9ybTpzY2FsZSguOTkpfQogIC5idG5bZGlzYWJsZWRde29wYWNpdHk6LjU1OyBjdXJzb3I6bm90LWFsbG93ZWR9CgogIC5rZXl7CiAgICB3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JvcmRlci1yYWRpdXM6MTBweDsKICAgIGRpc3BsYXk6Z3JpZDsgcGxhY2UtaXRlbXM6Y2VudGVyOwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjIwKTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsMTE2LDI1NSwuMDgpOwogICAgY29sb3I6IHZhcigtLWFjY2VudCk7CiAgICBmbGV4OjAgMCBhdXRvOwogIH0KCiAgLmJ0bi5jb3JyZWN0eyBib3JkZXItY29sb3I6IHJnYmEoMTYsMTg1LDEyOSwuNDApOyBiYWNrZ3JvdW5kOiByZ2JhKDE2LDE4NSwxMjksLjEwKTsgfQogIC5idG4ud3Jvbmd7IGJvcmRlci1jb2xvcjogcmdiYSgyMzksNjgsNjgsLjQwKTsgYmFja2dyb3VuZDogcmdiYSgyMzksNjgsNjgsLjEwKTsgfQoKICAubm90ZXsKICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgxMSwxMTYsMjU1LC4xOCk7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43OCk7CiAgICBib3JkZXItcmFkaXVzOjE0cHg7CiAgICBwYWRkaW5nOjEycHg7CiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpOwogICAgbGluZS1oZWlnaHQ6MS40OwogICAgZm9udC1zaXplOjEzcHg7CiAgICB3aGl0ZS1zcGFjZTpwcmUtbGluZTsKICB9CgogIC5mb290ZXJCdG5ze2Rpc3BsYXk6ZmxleDsgZ2FwOjEwcHg7IGZsZXgtd3JhcDp3cmFwO30KICAuc21hbGxCdG57CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNzApOwogICAgY29sb3I6IHZhcigtLXRleHQpOwogICAgcGFkZGluZzoxMHB4IDEycHg7CiAgICBib3JkZXItcmFkaXVzOjE0cHg7CiAgICBjdXJzb3I6cG9pbnRlcjsKICAgIHVzZXItc2VsZWN0Om5vbmU7CiAgICBmb250LXdlaWdodDoxMTAwOwogICAgdHJhbnNpdGlvbjouMTJzIGVhc2U7CiAgfQogIC5zbWFsbEJ0bjpob3ZlcnsKICAgIGJhY2tncm91bmQ6I2ZmZmZmZjsKICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0xcHgpOwogICAgYm94LXNoYWRvdzogMCAxMHB4IDIycHggcmdiYSgxMSwxMTYsMjU1LC4xMCk7CiAgfQogIC5zbWFsbEJ0bjphY3RpdmV7dHJhbnNmb3JtOnNjYWxlKC45OSl9CgogIC5zaWRle3BhZGRpbmc6MTRweDsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDoxMnB4O30KICAuZ3JpZDJ7ZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjsgZ2FwOjEwcHg7fQogIC5rcGl7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYm9yZGVyLXJhZGl1czoxNnB4OwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNzgpOwogICAgcGFkZGluZzoxMnB4OwogIH0KICAua3BpIC5udW17Zm9udC1zaXplOjE4cHg7IGZvbnQtd2VpZ2h0OjExMDA7IGNvbG9yOnZhcigtLXRleHQpO30KICAua3BpIC5sYWJ7Zm9udC1zaXplOjEycHg7IGNvbG9yOnZhcigtLW11dGVkKTt9CgogIC5ib3h7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYm9yZGVyLXJhZGl1czoxNnB4OwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuNzgpOwogICAgcGFkZGluZzoxMnB4OwogIH0KICAuYm94IGgze21hcmdpbjowIDAgMTBweDsgZm9udC1zaXplOjE0cHg7IGNvbG9yOnZhcigtLXRleHQpO30KICAubXV0ZWR7Y29sb3I6dmFyKC0tbXV0ZWQpOyBmb250LXNpemU6MTJweDsgbGluZS1oZWlnaHQ6MS40O30KCiAgLmJhZGdlUm93e2Rpc3BsYXk6ZmxleDsgZ2FwOjhweDsgZmxleC13cmFwOndyYXA7IG1hcmdpbi10b3A6MTBweDt9CiAgLmJhZGdlewogICAgcGFkZGluZzo2cHggMTBweDsgYm9yZGVyLXJhZGl1czo5OTlweDsKICAgIGJvcmRlcjoxcHggc29saWQgcmdiYSgxMSwxMTYsMjU1LC4xOCk7CiAgICBiYWNrZ3JvdW5kOiByZ2JhKDExLDExNiwyNTUsLjA4KTsKICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7CiAgICBmb250LXdlaWdodDoxMTAwOyBmb250LXNpemU6MTJweDsKICB9CiAgLmJhZGdlLm9uewogICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsLjI4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMTIpOwogICAgY29sb3I6IzhhNGIwMDsKICB9CgogIC50b2FzdHsKICAgIHBvc2l0aW9uOmZpeGVkOyBsZWZ0OjUwJTsgYm90dG9tOjE4cHg7IHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpOwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuOTIpOwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGNvbG9yOiB2YXIoLS10ZXh0KTsKICAgIHBhZGRpbmc6MTBweCAxMnB4OwogICAgYm9yZGVyLXJhZGl1czoxNHB4OwogICAgYm94LXNoYWRvdzogMCAxOHB4IDYwcHggcmdiYSgyLCAyOCwgNTUsIC4xOCk7CiAgICBvcGFjaXR5OjA7IHBvaW50ZXItZXZlbnRzOm5vbmU7IHRyYW5zaXRpb246LjIycyBlYXNlOwogICAgbWF4LXdpZHRoOm1pbig3MjBweCwgY2FsYygxMDB2dyAtIDI0cHgpKTsKICAgIHRleHQtYWxpZ246Y2VudGVyOyBmb250LXdlaWdodDoxMTAwOyB6LWluZGV4OjYwOwogIH0KICAudG9hc3Qub257b3BhY2l0eToxOyB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC02cHgpO30KCiAgLm92ZXJsYXl7cG9zaXRpb246Zml4ZWQ7IGluc2V0OjA7IGJhY2tncm91bmQ6IHJnYmEoMiwgMjgsIDU1LCAuMzUpOyBkaXNwbGF5Om5vbmU7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgei1pbmRleDo3MDsgcGFkZGluZzoxNnB4O30KICAubW9kYWx7CiAgICB3aWR0aDptaW4oODgwcHgsIDEwMCUpOwogICAgYm9yZGVyLXJhZGl1czoyMHB4OwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjkyKTsKICAgIGJveC1zaGFkb3c6IDAgMjRweCA5MHB4IHJnYmEoMiwgMjgsIDU1LCAuMjIpOwogICAgb3ZlcmZsb3c6aGlkZGVuOwogIH0KICAubW9kYWxIZWFkewogICAgcGFkZGluZzoxNHB4IDE2cHg7CiAgICBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxMHB4OwogICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgxMSwxMTYsMjU1LC4xOCk7CiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDM0LDE5OSwyNTUsLjE4KSwgcmdiYSgyNTUsMjU1LDI1NSwuOTIpKTsKICB9CiAgLm1vZGFsQm9keXtwYWRkaW5nOjE2cHg7fQoKICAuZ3JpZDN7ZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMWZyIC45ZnI7IGdhcDoxMnB4O30KICBAbWVkaWEobWF4LXdpZHRoOjgyMHB4KXsgLmdyaWQze2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9IH0KCiAgLmNoYXJHcmlkewogICAgZGlzcGxheTpncmlkOwogICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsKICAgIGdhcDoxMHB4OwogIH0KICBAbWVkaWEobWF4LXdpZHRoOjUyMHB4KXsgLmNoYXJHcmlke2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnJ9IH0KCiAgLmNoYXJDYXJkewogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGJvcmRlci1yYWRpdXM6MTZweDsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjc4KTsKICAgIHBhZGRpbmc6MTJweDsKICAgIGRpc3BsYXk6ZmxleDsgZ2FwOjEwcHg7IGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7CiAgfQogIC5jaGFySWNvbnsKICAgIHdpZHRoOjQycHg7aGVpZ2h0OjQycHg7Ym9yZGVyLXJhZGl1czoxNHB4OwogICAgYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMTEsMTE2LDI1NSwuMDgpOwogICAgZGlzcGxheTpncmlkOyBwbGFjZS1pdGVtczpjZW50ZXI7CiAgICBmb250LXNpemU6MjJweDsKICAgIGZsZXg6MCAwIGF1dG87CiAgfQogIC5jaGFyQ2FyZCBie2ZvbnQtd2VpZ2h0OjExMDB9CiAgLnJhcntmb250LXNpemU6MTFweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyBtYXJnaW4tdG9wOjJweH0KICAuZGVzY3tmb250LXNpemU6MTJweDsgY29sb3I6dmFyKC0tbXV0ZWQpOyBsaW5lLWhlaWdodDoxLjM1OyBtYXJnaW4tdG9wOjZweH0KICAubWluaVJvd3tkaXNwbGF5OmZsZXg7IGdhcDo4cHg7IGZsZXgtd3JhcDp3cmFwOyBtYXJnaW4tdG9wOjhweDsgYWxpZ24taXRlbXM6Y2VudGVyfQoKICAuYnRuVGlueXsKICAgIHBhZGRpbmc6N3B4IDEwcHg7IGJvcmRlci1yYWRpdXM6MTJweDsgY3Vyc29yOnBvaW50ZXI7CiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOwogICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuODUpOwogICAgY29sb3I6IHZhcigtLXRleHQpOwogICAgZm9udC13ZWlnaHQ6MTAwMDsKICB9CiAgLmJ0blRpbnk6aG92ZXJ7YmFja2dyb3VuZDojZmZmOyBib3gtc2hhZG93OiAwIDEwcHggMjJweCByZ2JhKDExLDExNiwyNTUsLjEwKX0KICAuYnRuVGlueS5nb2xkewogICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0NSwxNTgsMTEsLjI4KTsKICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LDE1OCwxMSwuMTIpOwogICAgY29sb3I6IzhhNGIwMDsKICB9CgogIC5zZWxlY3RlZHsgb3V0bGluZTogMnB4IHNvbGlkIHJnYmEoMzQsMTk5LDI1NSwuNDUpOyB9CgogIC5zaGFrZXthbmltYXRpb246c2hha2UgLjI4cyBlYXNlO30KICBAa2V5ZnJhbWVzIHNoYWtlezAle3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfTI1JXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNnB4KX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoNnB4KX03NSV7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTNweCl9MTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlWCgwKX19CiAgLmZsYXNoR29vZHtib3gtc2hhZG93OjAgMCAwIDEwcHggcmdiYSgxNiwxODUsMTI5LC4wOCkgaW5zZXQ7fQogIC5mbGFzaEJhZHtib3gtc2hhZG93OjAgMCAwIDEwcHggcmdiYSgyMzksNjgsNjgsLjA4KSBpbnNldDt9Cjwvc3R5bGU+CjwvaGVhZD4KCjxib2R5Pgo8ZGl2IGNsYXNzPSJzdGFycyI+PC9kaXY+CjxjYW52YXMgaWQ9ImZ4Ij48L2NhbnZhcz4KCjxkaXYgY2xhc3M9ImFwcCI+CiAgPHNlY3Rpb24gY2xhc3M9ImNhcmQiPgogICAgPGRpdiBjbGFzcz0iaGVhZCI+CiAgICAgIDxkaXYgY2xhc3M9ImJyYW5kIj4KICAgICAgICA8c3BhbiBjbGFzcz0iZG90Ij48L3NwYW4+CiAgICAgICAgPGRpdiBzdHlsZT0ibWluLXdpZHRoOjAiPgogICAgICAgICAgPGIgaWQ9InRpdGxlIj5RdWVzdCBI4buNYyBU4bqtcCDigJQgVHLhuq9uZyBYYW5oPC9iPgogICAgICAgICAgPGRpdiBjbGFzcz0ic3ViIiBpZD0ic3ViVGl0bGUiPlPGsHUgdOG6p20gbmjDom4gduG6rXQg4oCiIEJ1ZmYg4oCiIFbDsm5nIHF1YXkg4oCiIFN0cmVhazwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0icGlsbCI+CiAgICAgICAg4o+xIDxiIGlkPSJ0aW1lVHh0Ij4wPC9iPnMKICAgICAgICA8c3BhbiBzdHlsZT0ib3BhY2l0eTouNSI+4oCiPC9zcGFuPgogICAgICAgIPCflKUgPGIgaWQ9ImNvbWJvVHh0Ij4wPC9iPgogICAgICAgIDxzcGFuIHN0eWxlPSJvcGFjaXR5Oi41Ij7igKI8L3NwYW4+CiAgICAgICAg8J+OqyA8YiBpZD0icmV2aXZlVHh0Ij4wPC9iPgogICAgICAgIDxzcGFuIHN0eWxlPSJvcGFjaXR5Oi41Ij7igKI8L3NwYW4+CiAgICAgICAg8J+SsCA8YiBpZD0iY29pblR4dCI+MDwvYj4KICAgICAgICA8c3BhbiBzdHlsZT0ib3BhY2l0eTouNSI+4oCiPC9zcGFuPgogICAgICAgIOKtkCA8YiBpZD0ic2NvcmVUeHQiPjA8L2I+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0ibWFpbiI+CiAgICAgIDxkaXYgY2xhc3M9ImFyZW5hIiBpZD0iYXJlbmEiPgogICAgICAgIDxkaXYgY2xhc3M9InJvdyI+CiAgICAgICAgICA8ZGl2IGNsYXNzPSJtaW5pIj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iaGVhcnRzIiBpZD0iaGVhcnRzIj48L2Rpdj4KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29tYm9GbGFtZSIgaWQ9ImNvbWJvRmxhbWUiPvCflKUgQ29tYm8geDEuMDA8L2Rpdj4KICAgICAgICAgICAgPHNwYW4gY2xhc3M9InRhZyIgaWQ9ImJsaXR6VGFnIiBzdHlsZT0iZGlzcGxheTpub25lIj7imqEgQkxJVFogeDI8L3NwYW4+CiAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJ0YWcgZ29sZCIgaWQ9ImNoYXJUYWciPvCfp5kgQ2jGsGEgY2jhu41uIG5ow6JuIHbhuq10PC9zcGFuPgogICAgICAgICAgPC9kaXY+CgogICAgICAgICAgPGRpdiBjbGFzcz0ibWluaSI+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImJhcldyYXAiPjxkaXYgY2xhc3M9ImJhciIgaWQ9ImJhciI+PC9kaXY+PC9kaXY+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImJvc3NXcmFwIiBpZD0iYm9zc1dyYXAiPgogICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJib3NzVGFnIj5CT1NTPC9zcGFuPgogICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImhwV3JhcCI+PGRpdiBjbGFzcz0iaHAiIGlkPSJocCI+PC9kaXY+PC9kaXY+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDxkaXYgY2xhc3M9InFib3giPgogICAgICAgICAgPHAgY2xhc3M9InF0ZXh0IiBpZD0icVRleHQiPk5o4bqlbiDigJxC4bqvdCDEkeG6p3XigJ0gxJHhu4MgY2jGoWkuPC9wPgogICAgICAgICAgPGRpdiBjbGFzcz0iYW5zd2VycyIgaWQ9ImFuc3dlcnMiPjwvZGl2PgogICAgICAgIDwvZGl2PgoKICAgICAgICA8ZGl2IGNsYXNzPSJub3RlIiBpZD0ibm90ZSI+CkjGsOG7m25nIGThuqtuIG5oYW5oOgotIELhuqVtIPCfp5kgU8awdSB04bqnbSBuaMOibiB24bqtdCDihpIgTeG7nyByxrDGoW5nIGLhurFuZyB4dSDihpIgQ2jhu41uIG5ow6JuIHbhuq10IMSR4buDIGJ1ZmYKLSBN4buXaSA1IGPDonU6IFbDsm5nIHF1YXkgdGjGsOG7n25nCi0gxJDDum5nIGxpw6puIHRp4bq/cCAzLzUvNy8xMDogbuG7lSBxdcOgCi0gQkxJVFogbmfhuqt1IG5oacOqbjogMTVzIHgyIMSRaeG7g20KUGjDrW06IEggPSBn4bujaSDDvSDigJxBSeKAnQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KCiAgICAgIDxkaXYgY2xhc3M9ImZvb3RlckJ0bnMiPgogICAgICAgIDxidXR0b24gY2xhc3M9InNtYWxsQnRuIiBpZD0iYnRuU3RhcnQiPuKWtu+4jyBC4bqvdCDEkeG6p3U8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJzbWFsbEJ0biIgaWQ9ImJ0bkNoYXJzIj7wn6eZIFPGsHUgdOG6p20gbmjDom4gduG6rXQ8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJzbWFsbEJ0biIgaWQ9ImJ0bjUwNTAiPvCfjJMgNTA6NTA8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJzbWFsbEJ0biIgaWQ9ImJ0bkZyZWV6ZSI+8J+niiArNXM8L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJzbWFsbEJ0biIgaWQ9ImJ0blNoaWVsZCI+8J+boe+4jyBLaGnDqm48L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGNsYXNzPSJzbWFsbEJ0biIgaWQ9ImJ0blJlc3RhcnQiPuKZu++4jyBDaMahaSBs4bqhaTwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9InNtYWxsQnRuIiBpZD0iYnRuU291bmQiPvCflIogw4JtIHRoYW5oOiBPTjwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvc2VjdGlvbj4KCiAgPGFzaWRlIGNsYXNzPSJjYXJkIj4KICAgIDxkaXYgY2xhc3M9ImhlYWQiPgogICAgICA8ZGl2IGNsYXNzPSJicmFuZCI+PHNwYW4gY2xhc3M9ImRvdCI+PC9zcGFuPjxiPkLhuqNuZyDEkWnhu4F1IGtoaeG7g248L2I+PC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9InBpbGwiPvCfkaQgPGIgaWQ9InBsYXllck5hbWUiPk5nxrDhu51pIGNoxqFpPC9iPjwvZGl2PgogICAgPC9kaXY+CgogICAgPGRpdiBjbGFzcz0ic2lkZSI+CiAgICAgIDxkaXYgY2xhc3M9ImdyaWQyIj4KICAgICAgICA8ZGl2IGNsYXNzPSJrcGkiPjxkaXYgY2xhc3M9Im51bSIgaWQ9Imx2bFR4dCI+MTwvZGl2PjxkaXYgY2xhc3M9ImxhYiI+4bqiaTwvZGl2PjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImtwaSI+PGRpdiBjbGFzcz0ibnVtIiBpZD0icHJvZ1R4dCI+MC8xMDwvZGl2PjxkaXYgY2xhc3M9ImxhYiI+VGnhur9uIMSR4buZPC9kaXY+PC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ia3BpIj48ZGl2IGNsYXNzPSJudW0iIGlkPSJhY2NUeHQiPjAlPC9kaXY+PGRpdiBjbGFzcz0ibGFiIj5DaMOtbmggeMOhYzwvZGl2PjwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9ImtwaSI+PGRpdiBjbGFzcz0ibnVtIiBpZD0ic3RyZWFrVHh0Ij4wPC9kaXY+PGRpdiBjbGFzcz0ibGFiIj7EkMO6bmcgbGnDqm4gdGnhur9wPC9kaXY+PC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iYm94Ij4KICAgICAgICA8aDM+8J+nmSBOaMOibiB24bqtdCDEkWFuZyBjaOG7jW48L2gzPgogICAgICAgIDxkaXYgY2xhc3M9Im11dGVkIiBpZD0iY2hhckJveCI+Q2jGsGEgY2jhu41uPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0iYmFkZ2VSb3ciIGlkPSJjaGFyQmFkZ2VzIj48L2Rpdj4KICAgICAgPC9kaXY+CgogICAgICA8ZGl2IGNsYXNzPSJib3giPgogICAgICAgIDxoMz7wn46vIERhbmggaGnhu4d1PC9oMz4KICAgICAgICA8ZGl2IGNsYXNzPSJtdXRlZCIgaWQ9InRpdGxlQm94Ij4tPC9kaXY+CiAgICAgIDwvZGl2PgoKICAgICAgPGRpdiBjbGFzcz0iYm94Ij4KICAgICAgICA8aDM+8J+noCBH4bujaSDDvSDigJxBSeKAnTwvaDM+CiAgICAgICAgPGRpdiBjbGFzcz0ibXV0ZWQiIGlkPSJhaUJveCI+TmjhuqVuIHBow61tIDxiPkg8L2I+IMSR4buDIGfhu6NpIMO9LjwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogIDwvYXNpZGU+CjwvZGl2PgoKPGRpdiBjbGFzcz0idG9hc3QiIGlkPSJ0b2FzdCI+PC9kaXY+Cgo8ZGl2IGNsYXNzPSJvdmVybGF5IiBpZD0ib3ZlcmxheSI+CiAgPGRpdiBjbGFzcz0ibW9kYWwiPgogICAgPGRpdiBjbGFzcz0ibW9kYWxIZWFkIj4KICAgICAgPGRpdiBjbGFzcz0iYnJhbmQiPjxzcGFuIGNsYXNzPSJkb3QiPjwvc3Bhbj48YiBpZD0ibW9kYWxUaXRsZSI+LTwvYj48L2Rpdj4KICAgICAgPGJ1dHRvbiBjbGFzcz0ic21hbGxCdG4iIGlkPSJtb2RhbENsb3NlIj7EkMOzbmc8L2J1dHRvbj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0ibW9kYWxCb2R5IiBpZD0ibW9kYWxCb2R5Ij48L2Rpdj4KICA8L2Rpdj4KPC9kaXY+Cgo8c2NyaXB0PgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBDw4JVIEjhu45JIChC4bqgTiBUSEFZIDIwIEPDglUgTOG7mlAgOSDhu54gxJDDglkpCj09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmxldCBRVUVTVElPTl9CQU5LID0gWwogIHsgcToiR2nhuqNpIHBoxrDGoW5nIHRyw6xuaDogMnggLSA1ID0gOSIsIGE6WyJ4PTIiLCJ4PTciLCJ4PS0yIiwieD0tNyJdLCBjb3JyZWN0OjEgfSwKICB7IHE6Is6UIGPhu6dhIHjCsiAtIDR4ICsgMyA9IDAgbMOgIiwgYTpbIjQiLCI3IiwiMTYiLCIxIl0sIGNvcnJlY3Q6MCB9LAogIHsgcToiUsO6dCBn4buNbjogKHjCsiAtIDkpLyh4IC0gMyksIHjiiaAzIiwgYTpbIngtMyIsIngrMyIsInjCsi0zIiwieMKyKzMiXSwgY29ycmVjdDoxIH0sCiAgeyBxOiLEkGnhu4F1IGtp4buHbiDEkeG7gyDiiJooMngtMSkgeMOhYyDEkeG7i25oIiwgYTpbIjJ4LTE+MCIsIjJ4LTHiiaUwIiwiMngtMTwwIiwieOKJoDAiXSwgY29ycmVjdDoxIH0sCiAgeyBxOiJUYW0gZ2nDoWMgdnXDtG5nIGPDsyAyIGPhuqFuaCAzIHbDoCA0LCBj4bqhbmggaHV54buBbiBsw6AiLCBhOlsiNSIsIjYiLCI3IiwiNC41Il0sIGNvcnJlY3Q6MCB9LAogIHsgcToiSOG7hyBz4buRIGfDs2MgY+G7p2EgeT0tM3grMSBsw6AiLCBhOlsiMSIsIi0zIiwiMyIsIjAiXSwgY29ycmVjdDoxIH0sCiAgeyBxOiJHaeG6o2kgYuG6pXQgcGjGsMahbmcgdHLDrG5oOiB4KzQ+MSIsIGE6WyJ4Pi0zIiwieD4zIiwieDwtMyIsIng8MyJdLCBjb3JyZWN0OjAgfSwKICB7IHE6IihhK2IpwrIgYuG6sW5nIiwgYTpbImHCsitiwrIiLCJhwrIrMmFiK2LCsiIsImHCsi0yYWIrYsKyIiwiMmHCsisyYsKyIl0sIGNvcnJlY3Q6MSB9LAogIHsgcToiTuG6v3UgMl54ID0gOCB0aMOsIHggPSIsIGE6WyIyIiwiMyIsIjQiLCI4Il0sIGNvcnJlY3Q6MSB9LAogIHsgcToiR2nhuqNpIGjhu4c6IHgreT01OyB4LXk9MSIsIGE6WyJ4PTMseT0yIiwieD0yLHk9MyIsIng9NCx5PTEiLCJ4PTEseT00Il0sIGNvcnJlY3Q6MCB9LAogIHsgcToiQ2h1IHZpIMSRxrDhu51uZyB0csOybiBiw6FuIGvDrW5oIFIgbMOgIiwgYTpbIs+AUsKyIiwiMs+AUiIsIs+AUiIsIjTPgFIiXSwgY29ycmVjdDoxIH0sCiAgeyBxOiJHacOhIHRy4buLIHwgLTEyIHwgbMOgIiwgYTpbIi0xMiIsIjEyIiwiMCIsIjEiXSwgY29ycmVjdDoxIH0sCiAgeyBxOiJ4wrI9MTYgY8OzIG5naGnhu4dtIiwgYTpbIng9NCIsIng9LTQiLCJ4PcKxNCIsIlbDtCBuZ2hp4buHbSJdLCBjb3JyZWN0OjIgfSwKICB7IHE6IjN4LSgyeC01KSA9IiwgYTpbIngtNSIsIngrNSIsIjV4LTUiLCJ4LTciXSwgY29ycmVjdDoxIH0sCiAgeyBxOiJO4bq/dSAoeC0yKSh4KzUpPTAgdGjDrCB4IiwgYTpbIjIgaG/hurdjIC01IiwiLTIgaG/hurdjIDUiLCIyIGhv4bq3YyA1IiwiLTIgaG/hurdjIC01Il0sIGNvcnJlY3Q6MCB9LAogIHsgcToiR2nhuqNpOiA1eD0yNSIsIGE6WyJ4PTUiLCJ4PTI1IiwieD0wIiwieD0tNSJdLCBjb3JyZWN0OjAgfSwKICB7IHE6Ikdpw6EgdHLhu4sgY+G7p2EgM8KyIGzDoCIsIGE6WyI2IiwiOSIsIjMiLCIxMiJdLCBjb3JyZWN0OjEgfSwKICB7IHE6IlBow6JuIHRo4bupYyAxL3ggeMOhYyDEkeG7i25oIGtoaSIsIGE6WyJ4PTAiLCJ44omgMCIsIng+MCIsIng8MCJdLCBjb3JyZWN0OjEgfSwKICB7IHE6IlThu5VuZyBjw6FjIGfDs2MgdHJvbmcgdGFtIGdpw6FjIGLhurFuZyIsIGE6WyI5MMKwIiwiMTgwwrAiLCIzNjDCsCIsIjI3MMKwIl0sIGNvcnJlY3Q6MSB9LAogIHsgcToiQ8O0bmcgdGjhu6ljIFBpdGFnbyIsIGE6WyJhwrI9YsKyK2PCsiIsImHCsitiwrI9Y8KyIiwiYT1iK2MiLCJhPWItYyJdLCBjb3JyZWN0OjEgfSwKXTsKCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIE5Iw4JOIFbhuqxUICsgQlVGRiAoU8avVSBU4bqmTSkKPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KY29uc3QgQ0hBUl9QT09MID0gWwogIHsgaWQ6Im5hdmkiLCBuYW1lOiJOYXZpIFRo4buneSBUaW5oIiwgaWNvbjoi8J+nmiIsIHJhcml0eToiQ29tbW9uIiwKICAgIGRlc2M6IlTEg25nIHh1IG5o4bqtbiDEkcaw4bujYyBt4buXaSBjw6J1IMSRw7puZy4iLAogICAgYnVmZkJhc2U6eyBjb2luTXVsdDoxLjEwLCBzY29yZU11bHQ6MS4wMCwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czowIH0sCiAgICBidWZmUGVyTHY6eyBjb2luTXVsdDowLjAzLCBzY29yZU11bHQ6MC4wMCwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czowIH0KICB9LAogIHsgaWQ6ImF0bGFzIiwgbmFtZToiQXRsYXMgS+G7tyBMdeG6rXQiLCBpY29uOiLwn6egIiwgcmFyaXR5OiJDb21tb24iLAogICAgZGVzYzoiVMSDbmcgxJFp4buDbS4iLAogICAgYnVmZkJhc2U6eyBjb2luTXVsdDoxLjAwLCBzY29yZU11bHQ6MS4wOCwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czowIH0sCiAgICBidWZmUGVyTHY6eyBjb2luTXVsdDowLjAwLCBzY29yZU11bHQ6MC4wMiwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czowIH0KICB9LAogIHsgaWQ6ImNocm9ubyIsIG5hbWU6IkNocm9ubyDEkOG7k25nIEjhu5MiLCBpY29uOiLij7MiLCByYXJpdHk6IlJhcmUiLAogICAgZGVzYzoiTeG7l2kgY8OidSArdGjhu51pIGdpYW4uIiwKICAgIGJ1ZmZCYXNlOnsgY29pbk11bHQ6MS4wMCwgc2NvcmVNdWx0OjEuMDAsIHRpbWVQbHVzOjIsIHNoaWVsZENoYW5jZTowLjAwLCBzdGFydENvbWJvOjAsIHJldml2ZVBsdXM6MCB9LAogICAgYnVmZlBlckx2OnsgY29pbk11bHQ6MC4wMCwgc2NvcmVNdWx0OjAuMDAsIHRpbWVQbHVzOjEsIHNoaWVsZENoYW5jZTowLjAwLCBzdGFydENvbWJvOjAsIHJldml2ZVBsdXM6MCB9CiAgfSwKICB7IGlkOiJhZWdpcyIsIG5hbWU6IkFlZ2lzIEtoacOqbiBMYW0iLCBpY29uOiLwn5uh77iPIiwgcmFyaXR5OiJSYXJlIiwKICAgIGRlc2M6IkPDsyBjxqEgaOG7mWkgY2jhurduIG3huqV0IHRpbSBraGkgc2FpL2jhur90IGdp4budLiIsCiAgICBidWZmQmFzZTp7IGNvaW5NdWx0OjEuMDAsIHNjb3JlTXVsdDoxLjAwLCB0aW1lUGx1czowLCBzaGllbGRDaGFuY2U6MC4xOCwgc3RhcnRDb21ibzowLCByZXZpdmVQbHVzOjAgfSwKICAgIGJ1ZmZQZXJMdjp7IGNvaW5NdWx0OjAuMDAsIHNjb3JlTXVsdDowLjAwLCB0aW1lUGx1czowLCBzaGllbGRDaGFuY2U6MC4wNCwgc3RhcnRDb21ibzowLCByZXZpdmVQbHVzOjAgfQogIH0sCiAgeyBpZDoic3BhcmsiLCBuYW1lOiJTcGFyayBDb21ibyIsIGljb246IvCflKUiLCByYXJpdHk6IkVwaWMiLAogICAgZGVzYzoiVsOgbyBnYW1lIGPDsyBjb21ibyBz4bq1biwgbMOqbiBjb21ibyBuaGFuaC4iLAogICAgYnVmZkJhc2U6eyBjb2luTXVsdDoxLjAwLCBzY29yZU11bHQ6MS4wMCwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MiwgcmV2aXZlUGx1czowIH0sCiAgICBidWZmUGVyTHY6eyBjb2luTXVsdDowLjAwLCBzY29yZU11bHQ6MC4wMCwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MSwgcmV2aXZlUGx1czowIH0KICB9LAogIHsgaWQ6InBob2VuaXgiLCBuYW1lOiJQaMaw4bujbmcgSG/DoG5nIELEg25nIiwgaWNvbjoi8J+Viu+4jyIsIHJhcml0eToiTGVnZW5kYXJ5IiwKICAgIGRlc2M6IlThurduZyB0aMOqbSB2w6kgaOG7k2kgc2luaCB0aGVvIGxldmVsICsgdMSDbmcgxJFp4buDbSBuaOG6uS4iLAogICAgYnVmZkJhc2U6eyBjb2luTXVsdDoxLjAwLCBzY29yZU11bHQ6MS4wNSwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czoxIH0sCiAgICBidWZmUGVyTHY6eyBjb2luTXVsdDowLjAwLCBzY29yZU11bHQ6MC4wMSwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAuMDAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czoxIH0KICB9LApdOwoKZnVuY3Rpb24gcmFyaXR5TGFiZWwocil7CiAgaWYocj09PSJMZWdlbmRhcnkiKSByZXR1cm4gIvCfjJ8gTGVnZW5kYXJ5IjsKICBpZihyPT09IkVwaWMiKSByZXR1cm4gIvCfkpwgRXBpYyI7CiAgaWYocj09PSJSYXJlIikgcmV0dXJuICLwn5KZIFJhcmUiOwogIHJldHVybiAi4pqqIENvbW1vbiI7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIFVUSUwgKyBTRlgKPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KY29uc3QgS0VZID0gWyJBIiwiQiIsIkMiLCJEIl07CmNvbnN0ICQgPSAoaWQpPT5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7CmxldCBTTkQgPSB0cnVlOwoKY29uc3Qgc3RvcmUgPSB7CiAgZ2V0KGssIGQ9bnVsbCl7IHRyeXsgY29uc3Qgdj1sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKTsgcmV0dXJuIHY/SlNPTi5wYXJzZSh2KTpkOyB9Y2F0Y2goXyl7IHJldHVybiBkOyB9IH0sCiAgc2V0KGssIHYpeyB0cnl7IGxvY2FsU3RvcmFnZS5zZXRJdGVtKGssIEpTT04uc3RyaW5naWZ5KHYpKTsgfWNhdGNoKF8peyB9IH0KfTsKCmxldCBwbGF5ZXIgPSBzdG9yZS5nZXQoInFoX3BsYXllciIsIHtuYW1lOiJOZ8aw4budaSBjaMahaSJ9KTsKJCgicGxheWVyTmFtZSIpLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7CgpsZXQgaW52ID0gc3RvcmUuZ2V0KCJxaF9pbnYiLCB7fSk7CmxldCBzZWxlY3RlZENoYXJJZCA9IHN0b3JlLmdldCgicWhfc2VsQ2hhciIsICJuYXZpIik7CmlmKCFpbnZbIm5hdmkiXSl7IGludlsibmF2aSJdID0ge2x2bDoxLCBzaGFyZHM6MH07IHN0b3JlLnNldCgicWhfaW52IiwgaW52KTsgfQppZighc2VsZWN0ZWRDaGFySWQgfHwgIWludltzZWxlY3RlZENoYXJJZF0peyBzZWxlY3RlZENoYXJJZD0ibmF2aSI7IHN0b3JlLnNldCgicWhfc2VsQ2hhciIsIHNlbGVjdGVkQ2hhcklkKTsgfQoKZnVuY3Rpb24gZ2V0Q2hhckRlZihpZCl7IHJldHVybiBDSEFSX1BPT0wuZmluZChjPT5jLmlkPT09aWQpOyB9CmZ1bmN0aW9uIGdldENoYXJMZXZlbChpZCl7IHJldHVybiBpbnZbaWRdPy5sdmwgfHwgMDsgfQpmdW5jdGlvbiBzaGFyZHNOZWVkZWQobHZsKXsgcmV0dXJuIE1hdGgubWluKDEwLCAyICsgbHZsKTsgfQoKZnVuY3Rpb24gY2FsY0J1ZmYoaWQpewogIGNvbnN0IGRlZj1nZXRDaGFyRGVmKGlkKTsKICBpZighZGVmKSByZXR1cm4geyBjb2luTXVsdDoxLCBzY29yZU11bHQ6MSwgdGltZVBsdXM6MCwgc2hpZWxkQ2hhbmNlOjAsIHN0YXJ0Q29tYm86MCwgcmV2aXZlUGx1czowIH07CiAgY29uc3QgbHZsPWdldENoYXJMZXZlbChpZCk7CiAgY29uc3QgYj1kZWYuYnVmZkJhc2UsIHA9ZGVmLmJ1ZmZQZXJMdjsKICByZXR1cm4gewogICAgY29pbk11bHQ6IGIuY29pbk11bHQgKyAobHZsLTEpKnAuY29pbk11bHQsCiAgICBzY29yZU11bHQ6IGIuc2NvcmVNdWx0ICsgKGx2bC0xKSpwLnNjb3JlTXVsdCwKICAgIHRpbWVQbHVzOiAgYi50aW1lUGx1cyAgKyAobHZsLTEpKnAudGltZVBsdXMsCiAgICBzaGllbGRDaGFuY2U6IGIuc2hpZWxkQ2hhbmNlICsgKGx2bC0xKSpwLnNoaWVsZENoYW5jZSwKICAgIHN0YXJ0Q29tYm86IGIuc3RhcnRDb21ibyArIChsdmwtMSkqcC5zdGFydENvbWJvLAogICAgcmV2aXZlUGx1czogYi5yZXZpdmVQbHVzICsgKGx2bC0xKSpwLnJldml2ZVBsdXMKICB9Owp9CgpmdW5jdGlvbiByZW5kZXJDaGFyU2lkZWJhcigpewogIGNvbnN0IGRlZj1nZXRDaGFyRGVmKHNlbGVjdGVkQ2hhcklkKTsKICBjb25zdCBsdmw9Z2V0Q2hhckxldmVsKHNlbGVjdGVkQ2hhcklkKTsKICBjb25zdCBidWZmPWNhbGNCdWZmKHNlbGVjdGVkQ2hhcklkKTsKCiAgJCgiY2hhclRhZyIpLnRleHRDb250ZW50ID0gZGVmID8gYCR7ZGVmLmljb259ICR7ZGVmLm5hbWV9IEx2JHtsdmx9YCA6ICLwn6eZIENoxrBhIGNo4buNbiBuaMOibiB24bqtdCI7CiAgJCgiY2hhckJveCIpLmlubmVySFRNTCA9IGRlZgogICAgPyBgPGI+JHtkZWYuaWNvbn0gJHtkZWYubmFtZX0gKEx2JHtsdmx9KTwvYj48YnI+JHtkZWYuZGVzY308YnI+CiAgICAgICBCdWZmOiArJHtNYXRoLnJvdW5kKChidWZmLmNvaW5NdWx0LTEpKjEwMCl9JSB4dSDigKIgKyR7TWF0aC5yb3VuZCgoYnVmZi5zY29yZU11bHQtMSkqMTAwKX0lIMSRaeG7g20g4oCiICske2J1ZmYudGltZVBsdXN9cy9jw6J1IOKAoiBLaGnDqm4gJHtNYXRoLnJvdW5kKGJ1ZmYuc2hpZWxkQ2hhbmNlKjEwMCl9JSDigKIgU3RhcnQgY29tYm8gKyR7YnVmZi5zdGFydENvbWJvfSDigKIgVsOpICske2J1ZmYucmV2aXZlUGx1c31gCiAgICA6ICJDaMawYSBjaOG7jW4iOwoKICBjb25zdCBiYWRnZXM9JCgiY2hhckJhZGdlcyIpOyBiYWRnZXMuaW5uZXJIVE1MPSIiOwogIGNvbnN0IG1rPSh0LG9uKT0+eyBjb25zdCBiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOyBiLmNsYXNzTmFtZT0iYmFkZ2UiKyhvbj8iIG9uIjoiIik7IGIudGV4dENvbnRlbnQ9dDsgYmFkZ2VzLmFwcGVuZENoaWxkKGIpOyB9OwogIG1rKCLwn5KwIFh1IiwgYnVmZi5jb2luTXVsdD4xKTsKICBtaygi4q2QIMSQaeG7g20iLCBidWZmLnNjb3JlTXVsdD4xKTsKICBtaygi4o+xIFRo4budaSBnaWFuIiwgYnVmZi50aW1lUGx1cz4wKTsKICBtaygi8J+boe+4jyBLaGnDqm4iLCBidWZmLnNoaWVsZENoYW5jZT4wKTsKICBtaygi8J+UpSBDb21ibyIsIGJ1ZmYuc3RhcnRDb21ibz4wKTsKICBtaygi8J+OqyBI4buTaSBzaW5oIiwgYnVmZi5yZXZpdmVQbHVzPjApOwp9CgovKiBTRlggKi8KbGV0IGF1ZGlvQ3R4PW51bGw7CmZ1bmN0aW9uIGJlZXAoZnJlcSxkdXIsdHlwZT0ic2luZSIsZ2Fpbj0wLjA2KXsKICBpZighU05EKSByZXR1cm47CiAgdHJ5ewogICAgYXVkaW9DdHggPSBhdWRpb0N0eCB8fCBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTsKICAgIGNvbnN0IG89YXVkaW9DdHguY3JlYXRlT3NjaWxsYXRvcigpLCBnPWF1ZGlvQ3R4LmNyZWF0ZUdhaW4oKTsKICAgIG8udHlwZT10eXBlOyBvLmZyZXF1ZW5jeS52YWx1ZT1mcmVxOyBnLmdhaW4udmFsdWU9Z2FpbjsKICAgIG8uY29ubmVjdChnKTsgZy5jb25uZWN0KGF1ZGlvQ3R4LmRlc3RpbmF0aW9uKTsKICAgIG8uc3RhcnQoKTsgc2V0VGltZW91dCgoKT0+by5zdG9wKCksIGR1cik7CiAgfWNhdGNoKF8pe30KfQpmdW5jdGlvbiBzZnhHb29kKCl7IGJlZXAoODgwLDExMCwic2luZSIsMC4wNyk7IHNldFRpbWVvdXQoKCk9PmJlZXAoMTE4MCw5MCwic2luZSIsMC4wNiksMTIwKTsgfQpmdW5jdGlvbiBzZnhCYWQoKXsgYmVlcCgyMjAsMTYwLCJzcXVhcmUiLDAuMDUpOyB9CmZ1bmN0aW9uIHNmeFNwaW4oKXsgYmVlcCg1MjAsNzAsInRyaWFuZ2xlIiwwLjA1KTsgfQpmdW5jdGlvbiBzZnhMb290KCl7IGJlZXAoNjYwLDEyMCwidHJpYW5nbGUiLDAuMDYpOyBzZXRUaW1lb3V0KCgpPT5iZWVwKDk5MCwxMjAsInRyaWFuZ2xlIiwwLjA2KSwxNDApOyB9CgpsZXQgdG9hc3RUaW1lcj1udWxsOwpmdW5jdGlvbiB0b2FzdChtc2cpewogIGNvbnN0IHQ9JCgidG9hc3QiKTsKICB0LnRleHRDb250ZW50PW1zZzsKICB0LmNsYXNzTGlzdC5hZGQoIm9uIik7CiAgY2xlYXJUaW1lb3V0KHRvYXN0VGltZXIpOwogIHRvYXN0VGltZXI9c2V0VGltZW91dCgoKT0+dC5jbGFzc0xpc3QucmVtb3ZlKCJvbiIpLDE3MDApOwp9CgovKiBDb25mZXR0aSAqLwpjb25zdCBmeD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiZngiKSwgY3R4PWZ4LmdldENvbnRleHQoIjJkIik7CmxldCBjb25mZXR0aT1bXTsKZnVuY3Rpb24gcmVzaXplRngoKXsKICBmeC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogZGV2aWNlUGl4ZWxSYXRpbzsKICBmeC5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiBkZXZpY2VQaXhlbFJhdGlvOwp9CndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCByZXNpemVGeCk7CnJlc2l6ZUZ4KCk7CmZ1bmN0aW9uIGNvbmZldHRpQnVyc3QoeCx5LG49OTApewogIGZvcihsZXQgaT0wO2k8bjtpKyspewogICAgY29uZmV0dGkucHVzaCh7CiAgICAgIHg6eCpkZXZpY2VQaXhlbFJhdGlvLCB5OnkqZGV2aWNlUGl4ZWxSYXRpbywKICAgICAgdng6KE1hdGgucmFuZG9tKCkqMi0xKSo2KmRldmljZVBpeGVsUmF0aW8sCiAgICAgIHZ5OihNYXRoLnJhbmRvbSgpKjItMSkqNypkZXZpY2VQaXhlbFJhdGlvIC0gMipkZXZpY2VQaXhlbFJhdGlvLAogICAgICBnOjAuMTgqZGV2aWNlUGl4ZWxSYXRpbywKICAgICAgcjoyK01hdGgucmFuZG9tKCkqMywgYToxLCBkYTowLjAxNStNYXRoLnJhbmRvbSgpKjAuMDIKICAgIH0pOwogIH0KfQooZnVuY3Rpb24gdGlja0Z4KCl7CiAgY3R4LmNsZWFyUmVjdCgwLDAsZngud2lkdGgsZnguaGVpZ2h0KTsKICBjb25mZXR0aSA9IGNvbmZldHRpLmZpbHRlcihwPT5wLmE+MC4wMik7CiAgZm9yKGNvbnN0IHAgb2YgY29uZmV0dGkpewogICAgcC52eSs9cC5nOyBwLngrPXAudng7IHAueSs9cC52eTsgcC5hLT1wLmRhOwogICAgY3R4Lmdsb2JhbEFscGhhPXAuYTsKICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyhwLngscC55LHAuciwwLE1hdGguUEkqMik7CiAgICBjdHguZmlsbFN0eWxlPSJyZ2JhKDExLDExNiwyNTUsLjgpIjsKICAgIGN0eC5maWxsKCk7CiAgfQogIGN0eC5nbG9iYWxBbHBoYT0xOwogIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrRngpOwp9KSgpOwoKZnVuY3Rpb24gc2h1ZmZsZShhKXsgZm9yKGxldCBpPWEubGVuZ3RoLTE7aT4wO2ktLSl7IGNvbnN0IGo9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihpKzEpKTsgW2FbaV0sYVtqXV09W2Fbal0sYVtpXV07IH0gcmV0dXJuIGE7IH0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIEdBTUUgU1RBVEUKPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi8KY29uc3QgU1RBUlRfSEVBUlRTPTM7CmNvbnN0IFFfUEVSX0xFVkVMPTEwOyAgICAvLyA5IHRoxrDhu51uZyArIDEgYm9zcwpjb25zdCBCQVNFX1RJTUU9MjA7CmNvbnN0IEJMSVRaX1RJTUU9MTU7CgpsZXQgYmFuaz1bXSwgcT1udWxsOwpsZXQgbGV2ZWw9MSwgaWR4PTA7CmxldCBzY29yZT0wLCBjb2lucz0wOwpsZXQgaGVhcnRzPVNUQVJUX0hFQVJUUzsKbGV0IGNvbWJvPTAsIHN0cmVhaz0wOwpsZXQgY29ycmVjdENvdW50PTAsIHdyb25nQ291bnQ9MDsKCmxldCBib3NzSFA9MDsKbGV0IHNoaWVsZD0wOwpsZXQgdXNlZDUwNTA9ZmFsc2U7CmxldCByZXZpdmVUaWNrZXRzPTE7CmxldCBpc0JsaXR6PWZhbHNlOwoKbGV0IHRpbWVyPW51bGw7CmxldCB0PTA7CgpmdW5jdGlvbiByZW5kZXJIZWFydHMoKXsKICBjb25zdCB3cmFwPSQoImhlYXJ0cyIpOyB3cmFwLmlubmVySFRNTD0iIjsKICBmb3IobGV0IGk9MDtpPFNUQVJUX0hFQVJUUztpKyspewogICAgY29uc3QgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKICAgIGguY2xhc3NOYW1lPSJoZWFydCIrKGk8aGVhcnRzPyIgb24iOiIiKTsKICAgIHdyYXAuYXBwZW5kQ2hpbGQoaCk7CiAgfQp9CgpmdW5jdGlvbiBjb21ib011bHQoKXsKICBpZihjb21ibz49MTApIHJldHVybiAyLjIwOwogIGlmKGNvbWJvPj03KSByZXR1cm4gMS45MDsKICBpZihjb21ibz49NSkgcmV0dXJuIDEuNjA7CiAgaWYoY29tYm8+PTMpIHJldHVybiAxLjM1OwogIHJldHVybiAxLjAwOwp9CmZ1bmN0aW9uIHVwZGF0ZUNvbWJvVUkoKXsKICBjb25zdCBtPWNvbWJvTXVsdCgpOwogICQoImNvbWJvVHh0IikudGV4dENvbnRlbnQ9U3RyaW5nKGNvbWJvKTsKICAkKCJzdHJlYWtUeHQiKS50ZXh0Q29udGVudD1TdHJpbmcoc3RyZWFrKTsKICAkKCJyZXZpdmVUeHQiKS50ZXh0Q29udGVudD1TdHJpbmcocmV2aXZlVGlja2V0cyk7CiAgY29uc3QgYz0kKCJjb21ib0ZsYW1lIik7CiAgYy50ZXh0Q29udGVudD1g8J+UpSBDb21ibyB4JHttLnRvRml4ZWQoMil9YDsKICBjLmNsYXNzTGlzdC50b2dnbGUoImhvdCIsIGNvbWJvPj01KTsKfQpmdW5jdGlvbiB1cGRhdGVTdGF0cygpewogICQoImNvaW5UeHQiKS50ZXh0Q29udGVudD1TdHJpbmcoY29pbnMpOwogICQoInNjb3JlVHh0IikudGV4dENvbnRlbnQ9U3RyaW5nKHNjb3JlKTsKICAkKCJsdmxUeHQiKS50ZXh0Q29udGVudD1TdHJpbmcobGV2ZWwpOwogICQoInByb2dUeHQiKS50ZXh0Q29udGVudD1gJHtpZHh9LyR7UV9QRVJfTEVWRUx9YDsKICAkKCJiYXIiKS5zdHlsZS53aWR0aD1gJHtNYXRoLnJvdW5kKChpZHgvUV9QRVJfTEVWRUwpKjEwMCl9JWA7CiAgY29uc3QgdG90YWw9Y29ycmVjdENvdW50K3dyb25nQ291bnQ7CiAgY29uc3QgYWNjPSB0b3RhbCA/IE1hdGgucm91bmQoKGNvcnJlY3RDb3VudC90b3RhbCkqMTAwKSA6IDA7CiAgJCgiYWNjVHh0IikudGV4dENvbnRlbnQ9YCR7YWNjfSVgOwogIHVwZGF0ZUNvbWJvVUkoKTsKICByZW5kZXJDaGFyU2lkZWJhcigpOwogICQoInRpdGxlQm94IikudGV4dENvbnRlbnQgPSBnZXRSYW5rVGl0bGUoKTsKfQoKZnVuY3Rpb24gaXNCb3NzKCl7IHJldHVybiBpZHg9PT1RX1BFUl9MRVZFTC0xOyB9CgpmdW5jdGlvbiBzdG9wVGltZXIoKXsgaWYodGltZXIpeyBjbGVhckludGVydmFsKHRpbWVyKTsgdGltZXI9bnVsbDsgfSB9CmZ1bmN0aW9uIHN0YXJ0VGltZXIoKXsKICBzdG9wVGltZXIoKTsKICBjb25zdCBidWZmPWNhbGNCdWZmKHNlbGVjdGVkQ2hhcklkKTsKICBjb25zdCBiYXNlID0gaXNCbGl0eiA/IEJMSVRaX1RJTUUgOiBCQVNFX1RJTUU7CiAgdCA9IGJhc2UgKyBidWZmLnRpbWVQbHVzOwogICQoInRpbWVUeHQiKS50ZXh0Q29udGVudD1TdHJpbmcodCk7CiAgdGltZXI9c2V0SW50ZXJ2YWwoKCk9PnsKICAgIHQtLTsgJCgidGltZVR4dCIpLnRleHRDb250ZW50PVN0cmluZyh0KTsKICAgIGlmKHQ8PTApeyBzdG9wVGltZXIoKTsgdGltZU91dCgpOyB9CiAgfSwxMDAwKTsKfQoKZnVuY3Rpb24gZmlsbEJhbmsoKXsgYmFuayA9IHNodWZmbGUoWy4uLlFVRVNUSU9OX0JBTktdKTsgfQpmdW5jdGlvbiBwaWNrUXVlc3Rpb24oKXsgaWYoYmFuay5sZW5ndGg9PT0wKSBmaWxsQmFuaygpOyByZXR1cm4gYmFuay5wb3AoKTsgfQoKZnVuY3Rpb24gc2V0QmxpdHoob24pewogIGlzQmxpdHogPSBvbjsKICAkKCJibGl0elRhZyIpLnN0eWxlLmRpc3BsYXkgPSBvbiA/ICJpbmxpbmUtZmxleCIgOiAibm9uZSI7CiAgaWYob24pIHRvYXN0KCLimqEgQkxJVFohIDE1cyDigJQgeDIgxJFp4buDbSEiKTsKfQpmdW5jdGlvbiBtYXliZUJsaXR6KCl7CiAgaWYoaXNCb3NzKCkpIHsgc2V0QmxpdHooZmFsc2UpOyByZXR1cm47IH0KICBpZihNYXRoLnJhbmRvbSgpIDwgMC4xOCkgc2V0QmxpdHoodHJ1ZSk7CiAgZWxzZSBzZXRCbGl0eihmYWxzZSk7Cn0KCmZ1bmN0aW9uIGxvY2tBbnN3ZXJzKCl7IFsuLi4kKCJhbnN3ZXJzIikucXVlcnlTZWxlY3RvckFsbCgiYnV0dG9uIildLmZvckVhY2goYj0+Yi5kaXNhYmxlZD10cnVlKTsgfQpmdW5jdGlvbiBtYXJrKGNvcnJlY3RJbmRleCwgY2hvc2VuSW5kZXgpewogIGNvbnN0IGJ0bnM9Wy4uLiQoImFuc3dlcnMiKS5xdWVyeVNlbGVjdG9yQWxsKCJidXR0b24iKV07CiAgYnRucy5mb3JFYWNoKChiLGkpPT57CiAgICBpZihpPT09Y29ycmVjdEluZGV4KSBiLmNsYXNzTGlzdC5hZGQoImNvcnJlY3QiKTsKICAgIGlmKGNob3NlbkluZGV4IT09bnVsbCAmJiBpPT09Y2hvc2VuSW5kZXggJiYgY2hvc2VuSW5kZXghPT1jb3JyZWN0SW5kZXgpIGIuY2xhc3NMaXN0LmFkZCgid3JvbmciKTsKICB9KTsKfQoKZnVuY3Rpb24gc2hvd1F1ZXN0aW9uKCl7CiAgdXNlZDUwNTA9ZmFsc2U7CiAgcSA9IHBpY2tRdWVzdGlvbigpOwoKICAkKCJib3NzV3JhcCIpLnN0eWxlLmRpc3BsYXkgPSBpc0Jvc3MoKSA/ICJpbmxpbmUtZmxleCIgOiAibm9uZSI7CiAgaWYoaXNCb3NzKCkpewogICAgYm9zc0hQPTQ7ICQoImhwIikuc3R5bGUud2lkdGg9IjEwMCUiOwogICAgJCgicVRleHQiKS50ZXh0Q29udGVudCA9IGDwn5GRIEJPU1Mg4oCUICR7cS5xfWA7CiAgfWVsc2V7CiAgICAkKCJxVGV4dCIpLnRleHRDb250ZW50ID0gcS5xOwogIH0KCiAgY29uc3QgYW5zd2Vycz0kKCJhbnN3ZXJzIik7CiAgYW5zd2Vycy5pbm5lckhUTUw9IiI7CiAgcS5hLmZvckVhY2goKHR4dCxpKT0+ewogICAgY29uc3QgYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJidXR0b24iKTsKICAgIGIuY2xhc3NOYW1lPSJidG4iOwogICAgYi5pbm5lckhUTUw9YDxkaXYgY2xhc3M9ImtleSI+JHtLRVlbaV19PC9kaXY+PGRpdj4ke3R4dH08L2Rpdj5gOwogICAgYi5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsICgpPT5jaG9vc2UoaSxiKSk7CiAgICBhbnN3ZXJzLmFwcGVuZENoaWxkKGIpOwogIH0pOwoKICByZW5kZXJIZWFydHMoKTsKICB1cGRhdGVTdGF0cygpOwogIHN0YXJ0VGltZXIoKTsKfQoKLyogPT09PT09PSBCVUZGIENI4bq2TiBN4bqkVCBUSU0gPT09PT09PSAqLwpmdW5jdGlvbiB0cnlDaGFyU2hpZWxkKCl7CiAgY29uc3QgYnVmZj1jYWxjQnVmZihzZWxlY3RlZENoYXJJZCk7CiAgaWYoYnVmZi5zaGllbGRDaGFuY2U8PTApIHJldHVybiBmYWxzZTsKICBjb25zdCBvayA9IE1hdGgucmFuZG9tKCkgPCBidWZmLnNoaWVsZENoYW5jZTsKICBpZihvayl7CiAgICB0b2FzdChg8J+nmSBCdWZmOiBDSOG6tk4gTeG6pFQgVElNISAoJHtNYXRoLnJvdW5kKGJ1ZmYuc2hpZWxkQ2hhbmNlKjEwMCl9JSlgKTsKICAgIHNmeExvb3QoKTsKICB9CiAgcmV0dXJuIG9rOwp9CgpmdW5jdGlvbiBwb2ludHNGb3JDb3JyZWN0KCl7CiAgY29uc3QgYnVmZj1jYWxjQnVmZihzZWxlY3RlZENoYXJJZCk7CiAgbGV0IG11bHQgPSBjb21ib011bHQoKTsKICBsZXQgYmFzZVAgPSBpc0Jvc3MoKSA/IDM0IDogMjI7CiAgbGV0IGJhc2VDID0gaXNCb3NzKCkgPyAxMiA6IDc7CiAgaWYoaXNCbGl0eil7IGJhc2VQICo9IDI7IGJhc2VDID0gTWF0aC5yb3VuZChiYXNlQyoxLjMpOyB9CgogIGJhc2VQID0gTWF0aC5yb3VuZChiYXNlUCAqIGJ1ZmYuc2NvcmVNdWx0KTsKICBiYXNlQyA9IE1hdGgucm91bmQoYmFzZUMgKiBidWZmLmNvaW5NdWx0KTsKCiAgY29uc3QgcCA9IE1hdGgucm91bmQoYmFzZVAgKiBtdWx0KTsKICBjb25zdCBjID0gTWF0aC5yb3VuZChiYXNlQyAqIG11bHQpOwogIHJldHVybiB7cCxjLCBtdWx0fTsKfQoKLyogPT09PT09PSBTVFJFQUsgUkVXQVJEID09PT09PT0gKi8KY29uc3Qgc3RyZWFrTWlsZXN0b25lcyA9IG5ldyBTZXQoWzMsNSw3LDEwXSk7CmZ1bmN0aW9uIHN0cmVha1Jld2FyZCgpewogIGlmKCFzdHJlYWtNaWxlc3RvbmVzLmhhcyhzdHJlYWspKSByZXR1cm47CiAgY29uc3QgcGFja3MgPSBbCiAgICB7bmFtZToi8J+SsCArMjUgeHUiLCBhcHBseTooKT0+Y29pbnMrPTI1fSwKICAgIHtuYW1lOiLirZAgKzcwIMSRaeG7g20iLCBhcHBseTooKT0+c2NvcmUrPTcwfSwKICAgIHtuYW1lOiLinaTvuI8gKzEgdGltIiwgYXBwbHk6KCk9PmhlYXJ0cz1NYXRoLm1pbihTVEFSVF9IRUFSVFMsIGhlYXJ0cysxKX0sCiAgICB7bmFtZToi8J+OqyArMSB2w6kgaOG7k2kgc2luaCIsIGFwcGx5OigpPT5yZXZpdmVUaWNrZXRzKz0xfSwKICAgIHtuYW1lOiLimqEgQkxJVFogY8OidSB0aeG6v3AiLCBhcHBseTooKT0+c2V0QmxpdHoodHJ1ZSl9LAogIF07CiAgY29uc3QgcGljayA9IHBhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwYWNrcy5sZW5ndGgpXTsKICBwaWNrLmFwcGx5KCk7CiAgc2Z4TG9vdCgpOwogIHRvYXN0KGDwn46JIFRIxq/hu55ORyBDSFXhu5ZJICR7c3RyZWFrfSEgJHtwaWNrLm5hbWV9YCk7Cn0KCi8qID09PT09PT0gU1BJTiBldmVyeSA1IHF1ZXN0aW9ucyA9PT09PT09ICovCmZ1bmN0aW9uIHNwaW5XaGVlbCgpewogIHN0b3BUaW1lcigpOwogIGxvY2tBbnN3ZXJzKCk7CgogIGNvbnN0IHByaXplcyA9IFsKICAgIHt0OiLwn5KwICs0MCB4dSIsIGE6KCk9PmNvaW5zKz00MH0sCiAgICB7dDoi4q2QICsxMjAgxJFp4buDbSIsIGE6KCk9PnNjb3JlKz0xMjB9LAogICAge3Q6IvCfm6HvuI8gS2hpw6puIiwgYTooKT0+c2hpZWxkPTF9LAogICAge3Q6IvCfjqsgKzEgdsOpIGjhu5NpIHNpbmgiLCBhOigpPT5yZXZpdmVUaWNrZXRzKz0xfSwKICAgIHt0OiLinaTvuI8gKzEgdGltIiwgYTooKT0+aGVhcnRzPU1hdGgubWluKFNUQVJUX0hFQVJUUywgaGVhcnRzKzEpfSwKICAgIHt0OiLwn5SlIENvbWJvICsyIiwgYTooKT0+Y29tYm8rPTJ9LAogICAge3Q6IvCfmIggQuG6q3k6IC0xMCB4dSIsIGE6KCk9PmNvaW5zPU1hdGgubWF4KDAsIGNvaW5zLTEwKX0sCiAgXTsKCiAgY29uc3Qgbm9kZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKICBub2RlLmlubmVySFRNTCA9IGAKICAgIDxkaXYgY2xhc3M9Im11dGVkIj7wn46wIFbDsm5nIHF1YXkgdGjGsOG7n25nICht4buXaSA1IGPDonUpLiBC4bqlbSBRVUFZIMSR4buDIG5o4bqtbi48L2Rpdj4KICAgIDxkaXYgc3R5bGU9ImhlaWdodDoxMHB4Ij48L2Rpdj4KICAgIDxkaXYgc3R5bGU9ImJvcmRlcjoxcHggc29saWQgcmdiYSgxMSwxMTYsMjU1LC4xOCk7IGJvcmRlci1yYWRpdXM6MTZweDsgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LC44NSk7IHBhZGRpbmc6MTJweCI+CiAgICAgIDxiIGlkPSJzcGluVGV4dCI+U+G6tW4gc8OgbmcgcXVheeKApjwvYj4KICAgICAgPGRpdiBjbGFzcz0ibXV0ZWQiIHN0eWxlPSJtYXJnaW4tdG9wOjZweCI+SGnhu4d1IOG7qW5nIOKAnG3hu58gdGjGsOG7n25n4oCdIGzDoG0gZ2FtZSBjdeG7kW4gaMahbi48L2Rpdj4KICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4OyBkaXNwbGF5OmZsZXg7IGdhcDoxMHB4OyBmbGV4LXdyYXA6d3JhcCI+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuVGlueSBnb2xkIiBpZD0ic3BpbkJ0biI+UVVBWTwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ0blRpbnkiIGlkPSJzcGluU2tpcCI+QuG7jiBRVUE8L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICBgOwogIG9wZW5Nb2RhbCgi8J+OsCBWw7JuZyBxdWF5Iiwgbm9kZSk7CgogIGxldCBzcGlubmluZz1mYWxzZTsKICBub2RlLnF1ZXJ5U2VsZWN0b3IoIiNzcGluQnRuIikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+ewogICAgaWYoc3Bpbm5pbmcpIHJldHVybjsKICAgIHNwaW5uaW5nPXRydWU7CiAgICBsZXQgY291bnQ9MCwgdGVtcEluZGV4PTA7CiAgICBjb25zdCBzcGluSW50ZXJ2YWw9c2V0SW50ZXJ2YWwoKCk9PnsKICAgICAgc2Z4U3BpbigpOwogICAgICB0ZW1wSW5kZXggPSAodGVtcEluZGV4KzEpICUgcHJpemVzLmxlbmd0aDsKICAgICAgbm9kZS5xdWVyeVNlbGVjdG9yKCIjc3BpblRleHQiKS50ZXh0Q29udGVudCA9IGDEkGFuZyBxdWF54oCmICR7cHJpemVzW3RlbXBJbmRleF0udH1gOwogICAgICBjb3VudCsrOwogICAgICBpZihjb3VudD4xOCl7CiAgICAgICAgY2xlYXJJbnRlcnZhbChzcGluSW50ZXJ2YWwpOwogICAgICAgIGNvbnN0IHdpbiA9IHByaXplc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqcHJpemVzLmxlbmd0aCldOwogICAgICAgIHdpbi5hKCk7CiAgICAgICAgc2Z4TG9vdCgpOwogICAgICAgIHRvYXN0KGDwn46wIFRyw7puZzogJHt3aW4udH1gKTsKICAgICAgICB1cGRhdGVTdGF0cygpOwogICAgICAgIGNsb3NlTW9kYWwoKTsKICAgICAgICBzZXRUaW1lb3V0KCgpPT5jb250aW51ZUFmdGVyTW9kYWwoKSwgMjAwKTsKICAgICAgfQogICAgfSwgNzApOwogIH0pOwoKICBub2RlLnF1ZXJ5U2VsZWN0b3IoIiNzcGluU2tpcCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PnsKICAgIGNsb3NlTW9kYWwoKTsKICAgIHNldFRpbWVvdXQoKCk9PmNvbnRpbnVlQWZ0ZXJNb2RhbCgpLCAxMjApOwogIH0pOwp9CgpmdW5jdGlvbiBjb250aW51ZUFmdGVyTW9kYWwoKXsKICByZW5kZXJIZWFydHMoKTsKICB1cGRhdGVTdGF0cygpOwogIGlmKGlkeD49UV9QRVJfTEVWRUwpIHJldHVybiBsZXZlbFVwKCk7CiAgc2hvd1F1ZXN0aW9uKCk7Cn0KCi8qID09PT09PT0gTU9EQUwgPT09PT09PSAqLwpmdW5jdGlvbiBvcGVuTW9kYWwodGl0bGUsIG5vZGUpewogICQoIm1vZGFsVGl0bGUiKS50ZXh0Q29udGVudD10aXRsZTsKICBjb25zdCBiPSQoIm1vZGFsQm9keSIpOyBiLmlubmVySFRNTD0iIjsgYi5hcHBlbmRDaGlsZChub2RlKTsKICAkKCJvdmVybGF5Iikuc3R5bGUuZGlzcGxheT0iZmxleCI7Cn0KZnVuY3Rpb24gY2xvc2VNb2RhbCgpeyAkKCJvdmVybGF5Iikuc3R5bGUuZGlzcGxheT0ibm9uZSI7IH0KJCgibW9kYWxDbG9zZSIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgY2xvc2VNb2RhbCk7CiQoIm92ZXJsYXkiKS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsKGUpPT57IGlmKGUudGFyZ2V0PT09JCgib3ZlcmxheSIpKSBjbG9zZU1vZGFsKCk7IH0pOwoKLyogPT09PT09PSBQT1dFUlVQUyA9PT09PT09ICovCmZ1bmN0aW9uIHNwZW5kKHBheSl7CiAgaWYoY29pbnM8cGF5KXsgdG9hc3QoIkNoxrBhIMSR4bunIHh1ISIpOyBzZnhCYWQoKTsgcmV0dXJuIGZhbHNlOyB9CiAgY29pbnMtPXBheTsgdXBkYXRlU3RhdHMoKTsgcmV0dXJuIHRydWU7Cn0KZnVuY3Rpb24gdXNlNTA1MCgpewogIGlmKCFxKSByZXR1cm47CiAgaWYodXNlZDUwNTApeyB0b2FzdCgiQ8OidSBuw6B5IMSRw6MgZMO5bmcgNTA6NTAhIik7IHJldHVybjsgfQogIGlmKCFzcGVuZCgxOCkpIHJldHVybjsKICB1c2VkNTA1MD10cnVlOwoKICBjb25zdCB3cm9uZ3M9WzAsMSwyLDNdLmZpbHRlcih4PT54IT09cS5jb3JyZWN0KTsKICBzaHVmZmxlKHdyb25ncyk7CiAgY29uc3QgaGlkZT13cm9uZ3Muc2xpY2UoMCwyKTsKCiAgY29uc3QgYnRucz1bLi4uJCgiYW5zd2VycyIpLnF1ZXJ5U2VsZWN0b3JBbGwoImJ1dHRvbiIpXTsKICBidG5zLmZvckVhY2goKGIsaSk9PnsKICAgIGlmKGhpZGUuaW5jbHVkZXMoaSkpewogICAgICBiLmRpc2FibGVkPXRydWU7CiAgICAgIGIuc3R5bGUub3BhY2l0eT0iMC40NSI7CiAgICAgIGIuc3R5bGUuZmlsdGVyPSJncmF5c2NhbGUoMSkiOwogICAgfQogIH0pOwogIHRvYXN0KCLwn4yTIExv4bqhaSAyIMSRw6FwIMOhbiBzYWkhIik7Cn0KZnVuY3Rpb24gdXNlRnJlZXplKCl7CiAgaWYoIXEpIHJldHVybjsKICBpZighc3BlbmQoMTIpKSByZXR1cm47CiAgdCA9IE1hdGgubWluKDcwLCB0ICsgNSk7CiAgJCgidGltZVR4dCIpLnRleHRDb250ZW50PVN0cmluZyh0KTsKICB0b2FzdCgi8J+niiArNSBnacOieSEiKTsKfQpmdW5jdGlvbiB1c2VTaGllbGQoKXsKICBpZighcSkgcmV0dXJuOwogIGlmKHNoaWVsZCl7IHRvYXN0KCJC4bqhbiDEkcOjIGPDsyBraGnDqm4gcuG7k2khIik7IHJldHVybjsgfQogIGlmKCFzcGVuZCgyMikpIHJldHVybjsKICBzaGllbGQ9MTsKICB0b2FzdCgi8J+boe+4jyBLaGnDqm46IGNo4bq3biAxIGzhuqduIG3huqV0IHRpbSEiKTsKfQoKLyogPT09PT09PSBBSSBISU5UID09PT09PT0gKi8KZnVuY3Rpb24gaGludCgpewogIGlmKCFxKSByZXR1cm47CiAgY29uc3QgY29uZj1NYXRoLm1pbigwLjkyLCAwLjU1ICsgTWF0aC5yYW5kb20oKSowLjMwICsgKGNvbWJvPj0zID8gMC4wNiA6IDApKTsKICBjb25zdCB3aWxsT2s9TWF0aC5yYW5kb20oKTxjb25mOwogIGNvbnN0IHBpY2s9d2lsbE9rID8gcS5jb3JyZWN0IDogKFswLDEsMiwzXS5maWx0ZXIoeD0+eCE9PXEuY29ycmVjdCkpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKV07CiAgY29uc3QgYWx0PSBwaWNrPT09cS5jb3JyZWN0ID8gKFswLDEsMiwzXS5maWx0ZXIoeD0+eCE9PXEuY29ycmVjdCkpW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSozKV0gOiBxLmNvcnJlY3Q7CiAgJCgiYWlCb3giKS5pbm5lckhUTUwgPSBgR+G7o2kgw706IG5naGnDqm5nIHbhu4EgPGI+JHtLRVlbcGlja119PC9iPiwgY8OibiBuaOG6r2MgPGI+JHtLRVlbYWx0XX08L2I+LiAofiR7TWF0aC5yb3VuZChjb25mKjEwMCl9JSlgOwp9CgovKiA9PT09PT09IEdBTUUgRkxPVyA9PT09PT09ICovCmZ1bmN0aW9uIHRpbWVPdXQoKXsKICBsb2NrQW5zd2VycygpOwogIG1hcmsocS5jb3JyZWN0LCBudWxsKTsKICB3cm9uZ0NvdW50Kys7IHN0cmVhaz0wOyBjb21ibz0wOwoKICBsZXQgYmxvY2tlZD1mYWxzZTsKICBpZihzaGllbGQpeyBzaGllbGQ9MDsgdG9hc3QoIvCfm6HvuI8gS2hpw6puIGNo4bq3biBt4bqldCB0aW0gKGjhur90IGdp4budKSEiKTsgYmxvY2tlZD10cnVlOyB9CiAgZWxzZSBpZih0cnlDaGFyU2hpZWxkKCkpeyBibG9ja2VkPXRydWU7IH0KICBpZighYmxvY2tlZCkgaGVhcnRzLS07CgogIHNmeEJhZCgpOwogICQoIm5vdGUiKS50ZXh0Q29udGVudCA9IGDij7AgSOG6v3QgZ2nhu50hIMSQw6FwIMOhbiDEkcO6bmc6ICR7S0VZW3EuY29ycmVjdF19LmA7CgogIGlkeCsrOwogIHJlbmRlckhlYXJ0cygpOwogIHVwZGF0ZVN0YXRzKCk7CgogIGlmKGhlYXJ0czw9MCkgcmV0dXJuIG1heWJlUmV2aXZlKCk7CiAgYWZ0ZXJRdWVzdGlvbigpOwp9CgpmdW5jdGlvbiBhcHBseUJvc3NEYW1hZ2UoKXsKICBib3NzSFA9TWF0aC5tYXgoMCxib3NzSFAtMSk7CiAgJCgiaHAiKS5zdHlsZS53aWR0aCA9IGAkeyhib3NzSFAvNCkqMTAwfSVgOwogIHJldHVybiBib3NzSFA9PT0wOwp9CgpmdW5jdGlvbiBhZnRlclF1ZXN0aW9uKCl7CiAgaWYoaWR4PjAgJiYgaWR4JTU9PT0wICYmIGlkeDw9UV9QRVJfTEVWRUwtMSl7CiAgICByZXR1cm4gc3BpbldoZWVsKCk7CiAgfQogIG1heWJlQmxpdHooKTsKICBpZihpZHg+PVFfUEVSX0xFVkVMKSByZXR1cm4gbGV2ZWxVcCgpOwogIHNldFRpbWVvdXQoKCk9PnNob3dRdWVzdGlvbigpLCA0ODApOwp9CgpmdW5jdGlvbiBtYXliZVJldml2ZSgpewogIGlmKHJldml2ZVRpY2tldHM+MCl7CiAgICByZXZpdmVUaWNrZXRzLS07CiAgICBoZWFydHM9MTsKICAgIHRvYXN0KCLwn46rIEjhu5NpIHNpbmghIELhuqFuIMSRxrDhu6NjIDEgdGltLiIpOwogICAgcmVuZGVySGVhcnRzKCk7IHVwZGF0ZVN0YXRzKCk7CiAgICBzZXRUaW1lb3V0KCgpPT5zaG93UXVlc3Rpb24oKSwgNjUwKTsKICB9ZWxzZXsKICAgIHJldHVybiBnYW1lT3ZlcigpOwogIH0KfQoKZnVuY3Rpb24gY2hvb3NlKGksIGJ0bkVsKXsKICBpZighcSkgcmV0dXJuOwogIHN0b3BUaW1lcigpOwogIGxvY2tBbnN3ZXJzKCk7CgogIGNvbnN0IG9rID0gaT09PXEuY29ycmVjdDsKCiAgaWYoaXNCb3NzKCkpewogICAgaWYob2spewogICAgICBzZnhHb29kKCk7CiAgICAgIGNvbWJvKys7IHN0cmVhaysrOyBjb3JyZWN0Q291bnQrKzsKICAgICAgY29uc3Qgcj1wb2ludHNGb3JDb3JyZWN0KCk7CiAgICAgIHNjb3JlKz1yLnA7IGNvaW5zKz1yLmM7CgogICAgICBjb25zdCByZWN0PWJ0bkVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOwogICAgICBjb25mZXR0aUJ1cnN0KHJlY3QubGVmdCtyZWN0LndpZHRoLzIsIHJlY3QudG9wK3JlY3QuaGVpZ2h0LzIsIDgwKTsKCiAgICAgIG1hcmsocS5jb3JyZWN0LGkpOwogICAgICBjb25zdCBraWxsZWQgPSBhcHBseUJvc3NEYW1hZ2UoKTsKCiAgICAgICQoIm5vdGUiKS50ZXh0Q29udGVudCA9IGtpbGxlZAogICAgICAgID8gYPCfkZEgSOG6oCBCT1NTISArJHtyLnB9IMSRaeG7g20sICske3IuY30geHUuYAogICAgICAgIDogYOKchSBUcsO6bmcgYm9zcyEgKyR7ci5wfSDEkWnhu4NtLCArJHtyLmN9IHh1LmA7CgogICAgICBzdHJlYWtSZXdhcmQoKTsKICAgICAgdXBkYXRlU3RhdHMoKTsKCiAgICAgIHNldFRpbWVvdXQoKCk9PnsKICAgICAgICBpZihraWxsZWQpewogICAgICAgICAgaWR4Kys7CiAgICAgICAgICBjb2lucyArPSAzNTsgc2NvcmUgKz0gMTIwOwogICAgICAgICAgdG9hc3QoIvCfkZEgQm9zcyByxqFpIHRoxrDhu59uZzogKzM1IHh1LCArMTIwIMSRaeG7g20hIik7CiAgICAgICAgICBzZXRCbGl0eihmYWxzZSk7CiAgICAgICAgICB1cGRhdGVTdGF0cygpOwogICAgICAgICAgbGV2ZWxVcCgpOwogICAgICAgIH1lbHNlewogICAgICAgICAgc2hvd1F1ZXN0aW9uKCk7CiAgICAgICAgfQogICAgICB9LCA2NTApOwogICAgICByZXR1cm47CiAgICB9ZWxzZXsKICAgICAgc2Z4QmFkKCk7CiAgICAgIHdyb25nQ291bnQrKzsgc3RyZWFrPTA7IGNvbWJvPTA7CgogICAgICBsZXQgYmxvY2tlZD1mYWxzZTsKICAgICAgaWYoc2hpZWxkKXsgc2hpZWxkPTA7IHRvYXN0KCLwn5uh77iPIEtoacOqbiBjaOG6t24gbeG6pXQgdGltISIpOyBibG9ja2VkPXRydWU7IH0KICAgICAgZWxzZSBpZih0cnlDaGFyU2hpZWxkKCkpeyBibG9ja2VkPXRydWU7IH0KICAgICAgaWYoIWJsb2NrZWQpIGhlYXJ0cy0tOwoKICAgICAgbWFyayhxLmNvcnJlY3QsaSk7CiAgICAgICQoIm5vdGUiKS50ZXh0Q29udGVudCA9IGDinYwgU2FpISDEkMOhcCDDoW4gxJHDum5nOiAke0tFWVtxLmNvcnJlY3RdfS5gOwogICAgICByZW5kZXJIZWFydHMoKTsgdXBkYXRlU3RhdHMoKTsKICAgICAgaWYoaGVhcnRzPD0wKSByZXR1cm4gbWF5YmVSZXZpdmUoKTsKICAgICAgc2V0VGltZW91dCgoKT0+c2hvd1F1ZXN0aW9uKCksIDY1MCk7CiAgICAgIHJldHVybjsKICAgIH0KICB9CgogIG1hcmsocS5jb3JyZWN0LGkpOwoKICBpZihvayl7CiAgICBzZnhHb29kKCk7CiAgICBjb21ibysrOyBzdHJlYWsrKzsgY29ycmVjdENvdW50Kys7CiAgICBjb25zdCByPXBvaW50c0ZvckNvcnJlY3QoKTsKICAgIHNjb3JlKz1yLnA7IGNvaW5zKz1yLmM7CgogICAgY29uc3QgcmVjdD1idG5FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTsKICAgIGNvbmZldHRpQnVyc3QocmVjdC5sZWZ0K3JlY3Qud2lkdGgvMiwgcmVjdC50b3ArcmVjdC5oZWlnaHQvMiwgOTApOwoKICAgICQoIm5vdGUiKS50ZXh0Q29udGVudCA9IGDinIUgxJDDum5nISArJHtyLnB9IMSRaeG7g20sICske3IuY30geHUgKHgke3IubXVsdC50b0ZpeGVkKDIpfSkuYDsKICAgIHN0cmVha1Jld2FyZCgpOwogIH1lbHNlewogICAgc2Z4QmFkKCk7CiAgICB3cm9uZ0NvdW50Kys7IHN0cmVhaz0wOyBjb21ibz0wOwoKICAgIGNvbnN0IG5lYXJNaXNzID0gTWF0aC5yYW5kb20oKSA8IDAuMzU7CiAgICBsZXQgYmxvY2tlZD1mYWxzZTsKICAgIGlmKG5lYXJNaXNzKXsKICAgICAgdG9hc3QoIvCfmLUgU3XDvXQgxJHDum5nISBLaMO0bmcgbeG6pXQgdGltIChtYXkgbeG6r24pISIpOwogICAgICBibG9ja2VkPXRydWU7CiAgICB9ZWxzZSBpZihzaGllbGQpewogICAgICBzaGllbGQ9MDsgdG9hc3QoIvCfm6HvuI8gS2hpw6puIGNo4bq3biBt4bqldCB0aW0hIik7IGJsb2NrZWQ9dHJ1ZTsKICAgIH1lbHNlIGlmKHRyeUNoYXJTaGllbGQoKSl7CiAgICAgIGJsb2NrZWQ9dHJ1ZTsKICAgIH0KICAgIGlmKCFibG9ja2VkKSBoZWFydHMtLTsKCiAgICAkKCJub3RlIikudGV4dENvbnRlbnQgPSBg4p2MIFNhaSEgxJDDoXAgw6FuIMSRw7puZzogJHtLRVlbcS5jb3JyZWN0XX0uYDsKICB9CgogIHNldEJsaXR6KGZhbHNlKTsKCiAgaWR4Kys7CiAgcmVuZGVySGVhcnRzKCk7CiAgdXBkYXRlU3RhdHMoKTsKCiAgaWYoaGVhcnRzPD0wKSByZXR1cm4gbWF5YmVSZXZpdmUoKTsKICBhZnRlclF1ZXN0aW9uKCk7Cn0KCmZ1bmN0aW9uIGxldmVsVXAoKXsKICBzdG9wVGltZXIoKTsKICBsZXZlbCsrOwogIGlkeD0wOwogIGNvaW5zKz0yMDsgc2NvcmUrPTYwOwogIHNmeExvb3QoKTsKICB0b2FzdChg8J+OiSBRdWEg4bqjaSEgKzYwIMSRaeG7g20sICsyMCB4dS4g4bqiaSAke2xldmVsfSFgKTsKICBmaWxsQmFuaygpOwogIHNldEJsaXR6KGZhbHNlKTsKICB1cGRhdGVTdGF0cygpOwogIHNldFRpbWVvdXQoKCk9PnNob3dRdWVzdGlvbigpLCA2NTApOwp9CgpmdW5jdGlvbiBnYW1lT3ZlcigpewogIHN0b3BUaW1lcigpOwogIC8vIEfhu61pIGvhur90IHF14bqjIHbhu4EgaOG7hyB0aOG7kW5nIGNoYSAobuG6v3UgbmjDum5nIHRyb25nIGlmcmFtZSkKICB0cnl7IHBhcmVudCAmJiBwYXJlbnQucG9zdE1lc3NhZ2UgJiYgcGFyZW50LnBvc3RNZXNzYWdlKHt0eXBlOiJHQU1FX1JFU1VMVCIsIHBheWxvYWQ6e3Njb3JlLCBjb2lucywgbGV2ZWwsIGNvcnJlY3RDb3VudCwgd3JvbmdDb3VudCwgdHM6RGF0ZS5ub3coKX19LCAiKiIpOyB9Y2F0Y2goXyl7IH0KICBsb2NrQW5zd2VycygpOwogICQoImJvc3NXcmFwIikuc3R5bGUuZGlzcGxheT0ibm9uZSI7CiAgJCgicVRleHQiKS50ZXh0Q29udGVudD0i8J+SpSBHYW1lIE92ZXIhIjsKICAkKCJhbnN3ZXJzIikuaW5uZXJIVE1MPSIiOwogICQoIm5vdGUiKS50ZXh0Q29udGVudCA9CmDEkGnhu4NtOiAke3Njb3JlfSDigKIgWHU6ICR7Y29pbnN9IOKAoiDhuqJpOiAke2xldmVsfQrEkMO6bmc6ICR7Y29ycmVjdENvdW50fSDigKIgU2FpOiAke3dyb25nQ291bnR9CkRhbmggaGnhu4d1OiAke2dldFJhbmtUaXRsZSgpfWA7CiAgdXBkYXRlU3RhdHMoKTsKfQoKZnVuY3Rpb24gZ2V0UmFua1RpdGxlKCl7CiAgY29uc3QgdG90YWw9Y29ycmVjdENvdW50K3dyb25nQ291bnQ7CiAgY29uc3QgYWNjID0gdG90YWwgPyAoY29ycmVjdENvdW50L3RvdGFsKSA6IDA7CiAgY29uc3QgbSA9IGNvbWJvTXVsdCgpOwogIGlmKGFjYz49MC45ICYmIHNjb3JlPj05MDApIHJldHVybiAi8J+RkSBUaOG7pyBraG9hIGh1eeG7gW4gdGhv4bqhaSI7CiAgaWYoYWNjPj0wLjggJiYgbT49MS42KSByZXR1cm4gIvCflKUgQ2hp4bq/biB0aOG6p24gY29tYm8iOwogIGlmKGFjYz49MC44KSByZXR1cm4gIvCfjq8gWOG6oSB0aOG7pyBjaMOtbmggeMOhYyI7CiAgaWYoc2NvcmU+PTYwMCkgcmV0dXJuICLimqEgVGF5IG5oYW5oIGjGoW4gbsOjbyI7CiAgcmV0dXJuICLwn4yxIFTDom4gdGjhu6cgxJFhbmcgbMOqbiI7Cn0KCi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09CiAgIEdBQ0hBIC8gQ09MTEVDVElPTgo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwpmdW5jdGlvbiByb2xsUmFyaXR5KCl7CiAgY29uc3Qgcj1NYXRoLnJhbmRvbSgpKjEwMDsKICBpZihyPDIpIHJldHVybiAiTGVnZW5kYXJ5IjsKICBpZihyPDEyKSByZXR1cm4gIkVwaWMiOwogIGlmKHI8NDApIHJldHVybiAiUmFyZSI7CiAgcmV0dXJuICJDb21tb24iOwp9CmZ1bmN0aW9uIHBpY2tGcm9tUmFyaXR5KHJhcil7CiAgY29uc3QgbGlzdD1DSEFSX1BPT0wuZmlsdGVyKGM9PmMucmFyaXR5PT09cmFyKTsKICByZXR1cm4gbGlzdFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbGlzdC5sZW5ndGgpXTsKfQpmdW5jdGlvbiBhZGRDaGFyT3JTaGFyZChpZCl7CiAgaWYoIWludltpZF0pewogICAgaW52W2lkXT17bHZsOjEsIHNoYXJkczowfTsKICAgIHN0b3JlLnNldCgicWhfaW52IiwgaW52KTsKICAgIHJldHVybiB7dHlwZToibmV3IiwgbHZsOjF9OwogIH0KICBpbnZbaWRdLnNoYXJkcyA9IChpbnZbaWRdLnNoYXJkc3x8MCkgKyAxOwogIGxldCB1cGdyYWRlZD1mYWxzZTsKICB3aGlsZShpbnZbaWRdLnNoYXJkcyA+PSBzaGFyZHNOZWVkZWQoaW52W2lkXS5sdmwpKXsKICAgIGludltpZF0uc2hhcmRzIC09IHNoYXJkc05lZWRlZChpbnZbaWRdLmx2bCk7CiAgICBpbnZbaWRdLmx2bCArPSAxOwogICAgdXBncmFkZWQ9dHJ1ZTsKICB9CiAgc3RvcmUuc2V0KCJxaF9pbnYiLCBpbnYpOwogIHJldHVybiB7dHlwZToiZHVwIiwgdXBncmFkZWQsIGx2bDppbnZbaWRdLmx2bCwgc2hhcmRzOmludltpZF0uc2hhcmRzfTsKfQoKZnVuY3Rpb24gb3BlbkNoYXJzTW9kYWwoKXsKICBjb25zdCBub2RlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogIG5vZGUuY2xhc3NOYW1lPSJncmlkMyI7CgogIGNvbnN0IGxlZnQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7CiAgbGVmdC5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz0ibXV0ZWQiPk3hu58gcsawxqFuZyBi4bqxbmcgeHUg4oaSIHRyw7luZyBuaMOibiB24bqtdCB0aMOgbmggbeG6o25oIOKGkiDEkeG7pyBt4bqjbmggbMOqbiBMdiDihpIgYnVmZiBt4bqhbmggZOG6p24uPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT0iaGVpZ2h0OjEwcHgiPjwvZGl2PmA7CiAgY29uc3QgZ3JpZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKICBncmlkLmNsYXNzTmFtZT0iY2hhckdyaWQiOwoKICBDSEFSX1BPT0wuZm9yRWFjaChkZWY9PnsKICAgIGNvbnN0IG93bmVkPSEhaW52W2RlZi5pZF07CiAgICBjb25zdCBsdmw9b3duZWQ/aW52W2RlZi5pZF0ubHZsOjA7CiAgICBjb25zdCBzaGFyZHM9b3duZWQ/KGludltkZWYuaWRdLnNoYXJkc3x8MCk6MDsKICAgIGNvbnN0IG5lZWQ9b3duZWQ/c2hhcmRzTmVlZGVkKGx2bCk6MDsKCiAgICBjb25zdCBjYXJkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgY2FyZC5jbGFzc05hbWU9ImNoYXJDYXJkIiArIChkZWYuaWQ9PT1zZWxlY3RlZENoYXJJZCA/ICIgc2VsZWN0ZWQiOiIiKTsKICAgIGNhcmQuaW5uZXJIVE1MID0gYAogICAgICA8ZGl2IGNsYXNzPSJjaGFySWNvbiI+JHtkZWYuaWNvbn08L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY2hhck1ldGEiIHN0eWxlPSJtaW4td2lkdGg6MCI+CiAgICAgICAgPGI+JHtkZWYubmFtZX0gJHtvd25lZD9gTHYke2x2bH1gOiIoQ2jGsGEgY8OzKSJ9PC9iPgogICAgICAgIDxkaXYgY2xhc3M9InJhciI+JHtyYXJpdHlMYWJlbChkZWYucmFyaXR5KX08L2Rpdj4KICAgICAgICA8ZGl2IGNsYXNzPSJkZXNjIj4ke2RlZi5kZXNjfTwvZGl2PgogICAgICAgIDxkaXYgY2xhc3M9Im11dGVkIiBzdHlsZT0ibWFyZ2luLXRvcDo4cHgiPgogICAgICAgICAgJHtvd25lZCA/IGBN4bqjbmg6ICR7c2hhcmRzfS8ke25lZWR9YCA6IGBN4bufIHLGsMahbmcgxJHhu4Mgc+G7nyBo4buvdWB9CiAgICAgICAgPC9kaXY+CiAgICAgICAgPGRpdiBjbGFzcz0ibWluaVJvdyI+CiAgICAgICAgICAke293bmVkID8gYDxidXR0b24gY2xhc3M9ImJ0blRpbnkgZ29sZCIgZGF0YS1zZWxlY3Q9IiR7ZGVmLmlkfSI+Q2jhu41uPC9idXR0b24+YCA6IGBgfQogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgIGA7CiAgICBncmlkLmFwcGVuZENoaWxkKGNhcmQpOwogIH0pOwoKICBsZWZ0LmFwcGVuZENoaWxkKGdyaWQpOwoKICBjb25zdCByaWdodD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKICByaWdodC5pbm5lckhUTUwgPSBgCiAgICA8ZGl2IHN0eWxlPSJib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTEsMTE2LDI1NSwuMTgpOyBib3JkZXItcmFkaXVzOjE2cHg7IGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwuODUpOyBwYWRkaW5nOjEycHgiPgogICAgICA8Yj7wn46BIE3hu58gUsawxqFuZyBOaMOibiBW4bqtdDwvYj4KICAgICAgPGRpdiBjbGFzcz0ibXV0ZWQiIHN0eWxlPSJtYXJnaW4tdG9wOjZweCI+CiAgICAgICAgR2nDoTogPGI+NjAgeHU8L2I+LiBU4bu3IGzhu4c6IENvbW1vbiA2MCUg4oCiIFJhcmUgMjglIOKAoiBFcGljIDEwJSDigKIgTGVnZW5kYXJ5IDIlLgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBzdHlsZT0ibWFyZ2luLXRvcDoxMHB4OyBkaXNwbGF5OmZsZXg7IGdhcDoxMHB4OyBmbGV4LXdyYXA6d3JhcCI+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuVGlueSBnb2xkIiBpZD0ib3BlbkNyYXRlIj5N4bufIHLGsMahbmcgKDYwIHh1KTwvYnV0dG9uPgogICAgICAgIDxidXR0b24gY2xhc3M9ImJ0blRpbnkiIGlkPSJvcGVuMTAiPk3hu58geDEwICg1NDAgeHUpPC9idXR0b24+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOjEwcHgiIGNsYXNzPSJtdXRlZCIgaWQ9ImdhY2hhTG9nIj5N4bq5bzogY2jGoWkgZ2nhu49pIOKGkiBuaGnhu4F1IHh1IOKGkiBt4bufIHLGsMahbmcgbmhhbmguPC9kaXY+CiAgICA8L2Rpdj4KCiAgICA8ZGl2IHN0eWxlPSJoZWlnaHQ6MTJweCI+PC9kaXY+CgogICAgPGRpdiBzdHlsZT0iYm9yZGVyOjFweCBzb2xpZCByZ2JhKDExLDExNiwyNTUsLjE4KTsgYm9yZGVyLXJhZGl1czoxNnB4OyBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsLjg1KTsgcGFkZGluZzoxMnB4Ij4KICAgICAgPGI+4pyoIEJ1ZmYgxJFhbmcgZMO5bmc8L2I+CiAgICAgIDxkaXYgY2xhc3M9Im11dGVkIiBzdHlsZT0ibWFyZ2luLXRvcDo2cHgiIGlkPSJidWZmTm93Ij4tPC9kaXY+CiAgICAgIDxkaXYgc3R5bGU9Im1hcmdpbi10b3A6MTBweCI+CiAgICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuVGlueSIgaWQ9InJlbmFtZUJ0biI+xJDhu5VpIHTDqm4gbmfGsOG7nWkgY2jGoWk8L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICBgOwoKICBub2RlLmFwcGVuZENoaWxkKGxlZnQpOwogIG5vZGUuYXBwZW5kQ2hpbGQocmlnaHQpOwoKICBvcGVuTW9kYWwoIvCfp5kgU8awdSB04bqnbSBuaMOibiB24bqtdCIsIG5vZGUpOwoKICBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoIltkYXRhLXNlbGVjdF0iKS5mb3JFYWNoKGJ0bj0+ewogICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PnsKICAgICAgY29uc3QgaWQ9YnRuLmdldEF0dHJpYnV0ZSgiZGF0YS1zZWxlY3QiKTsKICAgICAgc2VsZWN0ZWRDaGFySWQ9aWQ7CiAgICAgIHN0b3JlLnNldCgicWhfc2VsQ2hhciIsIHNlbGVjdGVkQ2hhcklkKTsKICAgICAgdG9hc3QoIuKchSDEkMOjIGNo4buNbiBuaMOibiB24bqtdCEiKTsKICAgICAgdXBkYXRlU3RhdHMoKTsKICAgICAgY2xvc2VNb2RhbCgpOwogICAgfSk7CiAgfSk7CgogIGNvbnN0IGRlZj1nZXRDaGFyRGVmKHNlbGVjdGVkQ2hhcklkKTsKICBjb25zdCBsdmw9Z2V0Q2hhckxldmVsKHNlbGVjdGVkQ2hhcklkKTsKICBjb25zdCBiPWNhbGNCdWZmKHNlbGVjdGVkQ2hhcklkKTsKICByaWdodC5xdWVyeVNlbGVjdG9yKCIjYnVmZk5vdyIpLmlubmVySFRNTCA9CiAgICBkZWYgPyBgJHtkZWYuaWNvbn0gPGI+JHtkZWYubmFtZX08L2I+IEx2JHtsdmx9PGJyPgogICAgKyR7TWF0aC5yb3VuZCgoYi5jb2luTXVsdC0xKSoxMDApfSUgeHUg4oCiICske01hdGgucm91bmQoKGIuc2NvcmVNdWx0LTEpKjEwMCl9JSDEkWnhu4NtIOKAoiArJHtiLnRpbWVQbHVzfXMvY8OidSDigKIgS2hpw6puICR7TWF0aC5yb3VuZChiLnNoaWVsZENoYW5jZSoxMDApfSUg4oCiIFN0YXJ0IGNvbWJvICske2Iuc3RhcnRDb21ib30g4oCiIFbDqSArJHtiLnJldml2ZVBsdXN9YAogICAgOiAiLSI7CgogIGZ1bmN0aW9uIGRvT3Blbih0aW1lcyl7CiAgICBjb25zdCBjb3N0ID0gdGltZXM9PT0xMCA/IDU0MCA6IDYwOwogICAgaWYoY29pbnMgPCBjb3N0KXsgdG9hc3QoIuKdjCBLaMO0bmcgxJHhu6cgeHUgxJHhu4MgbeG7nyEiKTsgc2Z4QmFkKCk7IHJldHVybjsgfQogICAgY29pbnMgLT0gY29zdDsKCiAgICBjb25zdCBsb2cgPSByaWdodC5xdWVyeVNlbGVjdG9yKCIjZ2FjaGFMb2ciKTsKICAgIGxldCByZXN1bHRzPVtdOwogICAgZm9yKGxldCBrPTA7azx0aW1lcztrKyspewogICAgICBjb25zdCByYXI9cm9sbFJhcml0eSgpOwogICAgICBjb25zdCBkZWY9cGlja0Zyb21SYXJpdHkocmFyKTsKICAgICAgY29uc3QgcmVzPWFkZENoYXJPclNoYXJkKGRlZi5pZCk7CiAgICAgIHJlc3VsdHMucHVzaCh7ZGVmLCByYXIsIHJlc30pOwogICAgfQoKICAgIHNmeExvb3QoKTsKICAgIGNvbmZldHRpQnVyc3Qod2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIgLSA0MCwgdGltZXM9PT0xMCA/IDE4MCA6IDEyMCk7CgogICAgY29uc3Qgc2hvdyA9IHJlc3VsdHMuc2xpY2UoMCw2KS5tYXAoeD0+ewogICAgICBjb25zdCB0YWcgPSB4LnJlcy50eXBlPT09Im5ldyIgPyAiTeG7mkkiIDogKHgucmVzLnVwZ3JhZGVkID8gIkzDik4gTFYhIiA6ICJN4bqiTkgiKTsKICAgICAgcmV0dXJuIGDigKIgJHt4LmRlZi5pY29ufSAke3guZGVmLm5hbWV9ICgke3gucmFyfSkg4oCUICR7dGFnfWA7CiAgICB9KS5qb2luKCI8YnI+Iik7CiAgICBsb2cuaW5uZXJIVE1MID0gYDxiPkvhur90IHF14bqjOjwvYj48YnI+JHtzaG93fSR7cmVzdWx0cy5sZW5ndGg+Nj9gPGJyPuKApiB2w6AgJHtyZXN1bHRzLmxlbmd0aC02fSBr4bq/dCBxdeG6oyBu4buvYWA6IiJ9YDsKCiAgICBzdG9yZS5zZXQoInFoX2ludiIsIGludik7CiAgICB1cGRhdGVTdGF0cygpOwogIH0KCiAgcmlnaHQucXVlcnlTZWxlY3RvcigiI29wZW5DcmF0ZSIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmRvT3BlbigxKSk7CiAgcmlnaHQucXVlcnlTZWxlY3RvcigiI29wZW4xMCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PmRvT3BlbigxMCkpOwoKICByaWdodC5xdWVyeVNlbGVjdG9yKCIjcmVuYW1lQnRuIikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+ewogICAgY29uc3QgbmFtZSA9IHByb21wdCgiTmjhuq1wIHTDqm4gbmfGsOG7nWkgY2jGoWk6IiwgcGxheWVyLm5hbWUgfHwgIk5nxrDhu51pIGNoxqFpIik7CiAgICBpZihuYW1lICYmIG5hbWUudHJpbSgpKXsKICAgICAgcGxheWVyLm5hbWUgPSBuYW1lLnRyaW0oKS5zbGljZSgwLDE4KTsKICAgICAgJCgicGxheWVyTmFtZSIpLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7CiAgICAgIHN0b3JlLnNldCgicWhfcGxheWVyIiwgcGxheWVyKTsKICAgICAgdG9hc3QoIuKchSDEkMOjIMSR4buVaSB0w6puISIpOwogICAgfQogIH0pOwp9CgovKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PQogICBSRVNFVCAvIFNUQVJUCj09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovCmZ1bmN0aW9uIHJlc2V0R2FtZShzdGFydE5vdz1mYWxzZSl7CiAgc3RvcFRpbWVyKCk7CiAgZmlsbEJhbmsoKTsKICBxPW51bGw7CiAgbGV2ZWw9MTsgaWR4PTA7CiAgc2NvcmU9MDsgY29pbnM9MDsKICBoZWFydHM9U1RBUlRfSEVBUlRTOwogIGNvbWJvPTA7IHN0cmVhaz0wOwogIGNvcnJlY3RDb3VudD0wOyB3cm9uZ0NvdW50PTA7CiAgYm9zc0hQPTA7IHNoaWVsZD0wOyB1c2VkNTA1MD1mYWxzZTsKCiAgcmV2aXZlVGlja2V0cz0xOwoKICAvLyBhcHBseSBjaGFyYWN0ZXIgc3RhcnQgYnVmZnMKICBjb25zdCBiPWNhbGNCdWZmKHNlbGVjdGVkQ2hhcklkKTsKICBjb21ibyA9IGIuc3RhcnRDb21ibyB8fCAwOwogIHJldml2ZVRpY2tldHMgKz0gKGIucmV2aXZlUGx1cyB8fCAwKTsKCiAgc2V0QmxpdHooZmFsc2UpOwoKICAkKCJib3NzV3JhcCIpLnN0eWxlLmRpc3BsYXk9Im5vbmUiOwogICQoInFUZXh0IikudGV4dENvbnRlbnQgPSBzdGFydE5vdyA/ICJWw6BvIGdhbWUuLi4iIDogIk5o4bqlbiDigJxC4bqvdCDEkeG6p3XigJ0gxJHhu4MgY2jGoWkuIjsKICAkKCJhbnN3ZXJzIikuaW5uZXJIVE1MPSIiOwogIHJlbmRlckhlYXJ0cygpOwogIHVwZGF0ZVN0YXRzKCk7CgogIGlmKHN0YXJ0Tm93KXsKICAgIGNvbmZldHRpQnVyc3Qod2luZG93LmlubmVyV2lkdGgvMiwgd2luZG93LmlubmVySGVpZ2h0LzIgLSA2MCwgMTIwKTsKICAgIHNob3dRdWVzdGlvbigpOwogIH0KfQoKLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT0KICAgQlVUVE9OUyArIEVWRU5UUwo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqLwokKCJidG5TdGFydCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PnJlc2V0R2FtZSh0cnVlKSk7CiQoImJ0bkNoYXJzIikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCBvcGVuQ2hhcnNNb2RhbCk7CiQoImJ0bjUwNTAiKS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIHVzZTUwNTApOwokKCJidG5GcmVlemUiKS5hZGRFdmVudExpc3RlbmVyKCJjbGljayIsIHVzZUZyZWV6ZSk7CiQoImJ0blNoaWVsZCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgdXNlU2hpZWxkKTsKJCgiYnRuUmVzdGFydCIpLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCk9PnJlc2V0R2FtZSh0cnVlKSk7CiQoImJ0blNvdW5kIikuYWRkRXZlbnRMaXN0ZW5lcigiY2xpY2siLCAoKT0+ewogIFNORD0hU05EOwogICQoImJ0blNvdW5kIikudGV4dENvbnRlbnQgPSBTTkQgPyAi8J+UiiDDgm0gdGhhbmg6IE9OIiA6ICLwn5SHIMOCbSB0aGFuaDogT0ZGIjsKICB0b2FzdChTTkQgPyAiw4JtIHRoYW5oIGLhuq10IiA6ICLDgm0gdGhhbmggdOG6r3QiKTsKfSk7CmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoImtleWRvd24iLChlKT0+eyBpZihlLmtleS50b0xvd2VyQ2FzZSgpPT09ImgiKSBoaW50KCk7IH0pOwoKLyogaW5pdCAqLwpyZW5kZXJDaGFyU2lkZWJhcigpOwpyZXNldEdhbWUoZmFsc2UpOwoKLy8gPT09PT0gTmjhuq1uIGPDonUgaOG7j2kgdOG7qyBo4buHIHRo4buRbmcgY2hhID09PT09CndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwoZSk9PnsKICBjb25zdCBkID0gZSAmJiBlLmRhdGEgPyBlLmRhdGEgOiB7fTsKICBpZihkLnR5cGU9PT0iSU5JVF9HQU1FIil7CiAgICBpZihBcnJheS5pc0FycmF5KGQucXVlc3Rpb25zKSAmJiBkLnF1ZXN0aW9ucy5sZW5ndGgpewogICAgICAvLyBWYWxpZGF0ZSBtaW5pbWFsIHNoYXBlCiAgICAgIFFVRVNUSU9OX0JBTksgPSBkLnF1ZXN0aW9ucy5maWx0ZXIoeD0+eCAmJiB4LnEgJiYgQXJyYXkuaXNBcnJheSh4LmEpICYmIHguYS5sZW5ndGg9PT00ICYmIE51bWJlci5pc0ludGVnZXIoeC5jb3JyZWN0KSk7CiAgICB9CiAgICBpZihkLnBsYXllck5hbWUpewogICAgICBwbGF5ZXIubmFtZSA9IFN0cmluZyhkLnBsYXllck5hbWUpLnRyaW0oKS5zbGljZSgwLDE4KSB8fCBwbGF5ZXIubmFtZTsKICAgICAgJCgicGxheWVyTmFtZSIpLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7CiAgICAgIHN0b3JlLnNldCgicWhfcGxheWVyIiwgcGxheWVyKTsKICAgIH0KICAgIGlmKGQuc3VidGl0bGUpewogICAgICBjb25zdCBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInN1YlRpdGxlIik7CiAgICAgIGlmKHMpIHMudGV4dENvbnRlbnQgPSBTdHJpbmcoZC5zdWJ0aXRsZSkuc2xpY2UoMCw4MCk7CiAgICB9CiAgICB0b2FzdCgi4pyFIMSQw6MgdOG6o2kgY8OidSBo4buPaSB04burIGjhu4cgdGjhu5FuZyEiKTsKICAgIHJlc2V0R2FtZShmYWxzZSk7CiAgfQp9KTsKdHJ5eyBwYXJlbnQgJiYgcGFyZW50LnBvc3RNZXNzYWdlICYmIHBhcmVudC5wb3N0TWVzc2FnZSh7dHlwZToiR0FNRV9SRUFEWSJ9LCAiKiIpOyB9Y2F0Y2goXyl7fQoKPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo=";

function b64ToUtf8(b64){
  try{
    const bin = atob(b64);
    const esc = bin.split('').map(c=>'%'+c.charCodeAt(0).toString(16).padStart(2,'0')).join('');
    return decodeURIComponent(esc);
  }catch(e){ try{ return atob(b64); }catch(_){ return ""; } }
}
function shuffleArr(arr){
  for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]]; }
  return arr;
}
function buildGameQuestionsForStudent(stu){
  const qs = (DB.questions||[]).filter(q=>q && q.text && q.A && q.B && q.C && q.D && q.ans);
  const pick = shuffleArr(qs.slice()).slice(0,20);
  const mapAns = (x)=>"ABCD".indexOf(String(x||"").trim().toUpperCase());
  return pick.map(q=>({ q:q.text, a:[q.A,q.B,q.C,q.D], correct: mapAns(q.ans) }))
             .filter(x=>x.correct>=0);
}
function openStudentGame(){
  if(!currentStudentId){ toast("Bạn cần đăng nhập học sinh trước."); return; }
  const stu = DB.users && DB.users.student ? DB.users.student[currentStudentId] : null;
  if(!stu){ toast("Không tìm thấy học sinh."); return; }

  const ov = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");
  const pill = document.getElementById("gameStuPill");
  pill.textContent = `HS: ${stu.name||currentStudentId}`;
  document.getElementById("gameSub").textContent = "Chế độ game (quest) — câu hỏi lấy từ ngân hàng của hệ thống.";

  ov.classList.remove("hidden");

  frame.srcdoc = b64ToUtf8(GAME_HTML_B64);

  const init = ()=>{
    const questions = buildGameQuestionsForStudent(stu);
    try{
      frame.contentWindow.postMessage({
        type:"INIT_GAME",
        playerName: (stu.name||"Người chơi"),
        subtitle: "Luyện Toán 9 • Quest Mode",
        questions
      }, "*");
    }catch(e){}
  };
  frame.onload = ()=> setTimeout(init, 50);
}
function closeStudentGame(){
  const ov = document.getElementById("gameOverlay");
  const frame = document.getElementById("gameFrame");
  ov.classList.add("hidden");
  frame.srcdoc = "<!doctype html><meta charset='utf-8'><title>Game</title>";
}
window.addEventListener("message",(e)=>{
  const d = e && e.data ? e.data : null;
  if(!d || d.type!=="GAME_RESULT") return;
  if(!currentStudentId) return;
  const stu = DB.users && DB.users.student ? DB.users.student[currentStudentId] : null;
  if(!stu) return;
  stu.gameLog = stu.gameLog || [];
  const p = d.payload || {};
  stu.gameLog.push({
    day: todayKey(),
    ts: p.ts || Date.now(),
    score: p.score||0,
    coins: p.coins||0,
    level: p.level||1,
    correctCount: p.correctCount||0,
    wrongCount: p.wrongCount||0
  });
  // thưởng nhẹ để khuyến khích (không thay thế điểm phiên học)
  const bonus = Math.max(0, Math.round((p.score||0)/100));
  stu.score = (stu.score||0) + bonus;
  saveDB(DB);
  toast(`🎮 Đã lưu kết quả game! (+${bonus} điểm khuyến khích)`);
});

function clampInt(n, lo, hi){n=Number(n); if(!Number.isFinite(n)) n=lo; n=Math.round(n); return Math.max(lo, Math.min(hi, n));}
function ensureSettings(){
  // Migration + đảm bảo cấu trúc DB luôn đúng (kể cả khi người dùng đã từng dùng bản cũ)
  DB.meta = DB.meta || {school:"Trường PTDTBT THCS Mường Đun", version:"3.0-submission", settings:{perDayDefault:5}};
  DB.meta.settings = DB.meta.settings || {};
  if(DB.meta.settings.perDayDefault==null) DB.meta.settings.perDayDefault = 5;

  DB.users = DB.users || {};
  // Một số bản cũ có thể lưu users = { gv01:{...}, hs001:{...} } → chuyển về đúng cấu trúc
  if(!DB.users.teacher && !DB.users.student && !DB.users.parent){
    const flat = DB.users; // backup
    DB.users = {teacher:{}, student:{}, parent:{}};
    for(const k in flat){
      const u = flat[k];
      if(!u || typeof u!=="object") continue;
      const role = u.role || u.type || "";
      if(role==="teacher") DB.users.teacher[k]=u;
      else if(role==="parent") DB.users.parent[k]=u;
      else DB.users.student[k]=u;
    }
  }

  DB.users.teacher = DB.users.teacher || {};
  DB.users.student = DB.users.student || {};
  DB.users.parent  = DB.users.parent  || {};

  // đảm bảo luôn có tài khoản GV mặc định để đăng nhập
  if(!DB.users.teacher["gv01"]){
    DB.users.teacher["gv01"] = {id:"gv01", name:"GV Demo", pw:"123456"};
  }
}
function getPerDayForStudent(stu){
  const g = (DB.meta && DB.meta.settings && DB.meta.settings.perDayDefault!=null) ? DB.meta.settings.perDayDefault : 5;
  const s = (stu && stu.settings && stu.settings.perDay!=null) ? stu.settings.perDay : null;
  return clampInt(s ?? g, 3, 15);
}
function setPerDayForStudent(stu, n){
  stu.settings = stu.settings || {};
  stu.settings.perDay = clampInt(n, 3, 15);
}

function fmtDate(d){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,"0"),da=String(d.getDate()).padStart(2,"0");return y+"-"+m+"-"+da;}
let testDayOffset=Number(localStorage.getItem(TEST_DAY_OFFSET_KEY)||"0");
function nowDate(){const d=new Date();d.setDate(d.getDate()+testDayOffset);return d;}
function todayKey(){return fmtDate(nowDate());}
function setTestOffset(n){testDayOffset=Number(n)||0;localStorage.setItem(TEST_DAY_OFFSET_KEY,String(testDayOffset));toast("Test offset: "+(testDayOffset>=0?"+":"")+testDayOffset+" ngày");refreshAll();}
function nextTestDay(){setTestOffset(testDayOffset+1);} function resetTestOffset(){setTestOffset(0);}

function loadDB(){try{const raw=localStorage.getItem(LS_KEY);if(!raw) return null;return JSON.parse(raw);}catch(e){return null;}}
function saveDB(db){localStorage.setItem(LS_KEY, JSON.stringify(db)); refreshKPIs();}
function newDB(){return {meta:{school:"Trường PTDTBT THCS Mường Đun",version:"3.0-submission",settings:{perDayDefault:5}},users:{teacher:{"gv01":{id:"gv01",name:"GV Demo",pw:"123456"}},student:{},parent:{}},skills:DEFAULT_SKILLS,questions:DEFAULT_QUESTIONS};}
let DB=loadDB()||newDB(); ensureSettings(); ensureUsers(); reconcileParents(); saveDB(DB);

function hardSaveNow(){
  try{ localStorage.setItem(LS_KEY, JSON.stringify(DB)); }catch(e){}
}
// Tăng độ chắc chắn: tự lưu khi rời tab/đóng trang (để không phải nhập lại)
window.addEventListener("beforeunload", hardSaveNow);
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState==="hidden") hardSaveNow(); });


function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));}
let currentTeacher=null,currentStudentId=null,currentParentId=null,teacherSelected=null,parentSelected=null,session=null;
function SKILL_NAME(){const o={};(DB.skills||[]).forEach(s=>o[s.id]=s.name);return o;}
function ensureSkillId(id){return (DB.skills||[]).some(s=>s.id===id);}

const KEYWORD_TO_SKILLS=[
 {k:["căn","rút gọn căn","căn bậc"],ids:["alg_root"]},{k:["hằng đẳng","đa thức","khai triển"],ids:["alg_poly"]},
 {k:["phương trình bậc nhất","bậc nhất"],ids:["alg_linear_eq"]},{k:["bất phương trình","bpt"],ids:["alg_inequality"]},
 {k:["hệ phương trình","hệ pt","2 ẩn"],ids:["alg_system"]},{k:["phương trình bậc hai","bậc hai","delta"],ids:["alg_quadratic"]},
 {k:["hàm số bậc nhất","đồ thị","y=ax+b"],ids:["alg_function_linear"]},{k:["thống kê","trung bình","trung vị","mốt"],ids:["alg_statistics"]},
 {k:["pitago","pythag","tam giác vuông"],ids:["geo_pythag"]},{k:["sin","cos","tan","hệ thức lượng"],ids:["geo_trig"]},
 {k:["đồng dạng","tỉ số đồng dạng"],ids:["geo_similarity"]},{k:["chu vi","diện tích hình tròn"],ids:["geo_circle_length_area"]},
 {k:["góc nội tiếp","góc ở tâm","tứ giác nội tiếp"],ids:["geo_circle_angles"]},{k:["tiếp tuyến","dây cung","lực của điểm"],ids:["geo_circle_tangent"]},
 {k:["tọa độ","trung điểm","khoảng cách"],ids:["geo_coordinate"]}
];
function parseRequirement(text){const t=(text||"").toLowerCase();const found=new Set(); for(const r of KEYWORD_TO_SKILLS){if(r.k.some(w=>t.includes(w))) r.ids.forEach(id=>found.add(id));} return [...found].filter(ensureSkillId);}
function getWeakSkills(stu,topN=2){const m=stu.mastery||{};const arr=(DB.skills||[]).map(s=>({id:s.id,val:(m[s.id]??0)}));arr.sort((a,b)=>a.val-b.val);return arr.slice(0,topN).map(x=>x.id);}
function fastThresholdMs(diff){return diff<=1?1500:diff==2?2200:3000;}

function getTopicSkillIds(topicChoice){
  const choice = String(topicChoice||"AUTO");
  if(!choice || choice==="AUTO") return [];
  if(choice==="ALG") return (DB.skills||[]).filter(s=>String(s.id||"").startsWith("alg_")).map(s=>s.id);
  if(choice==="GEO") return (DB.skills||[]).filter(s=>String(s.id||"").startsWith("geo_")).map(s=>s.id);
  if(ensureSkillId(choice)) return [choice];
  return [];
}
function topicChoiceLabel(choice){
  choice = String(choice||"AUTO");
  if(choice==="AUTO") return "Tự động";
  if(choice==="ALG") return "Đại số (tất cả)";
  if(choice==="GEO") return "Hình học (tất cả)";
  return SKILL_NAME()[choice] || choice;
}
function initStudentTopicUI(stu){
  const sel=document.getElementById("stuTopic");
  if(!sel || !stu) return;
  stu.settings = stu.settings || {};
  const cur = String(stu.settings.topicChoice || "AUTO");
  const skills = DB.skills || [];
  let html = "";
  html += `<option value="AUTO">🤖 Tự động (AI theo yêu cầu + lỗ hổng)</option>`;
  html += `<option value="ALG">📘 Đại số (tất cả)</option>`;
  html += `<option value="GEO">📐 Hình học (tất cả)</option>`;
  html += `<option value="" disabled>──────────</option>`;
  for(const s of skills){
    if(!s || !s.id) continue;
    html += `<option value="${escapeHTML(s.id)}">${escapeHTML(s.name || s.id)}</option>`;
  }
  sel.innerHTML = html;
  sel.value = cur;
  sel.onchange = ()=>{
    stu.settings.topicChoice = sel.value || "AUTO";
    saveDB(DB);
    toast("Đã chọn chủ đề: " + topicChoiceLabel(stu.settings.topicChoice));
  };
}


function pickQuestionsForToday(stu, reqText, count, topicChoice){
  const detected=parseRequirement(reqText);
  const weak=getWeakSkills(stu,2);

  // Nếu HS chọn chủ đề cụ thể → chỉ ưu tiên đúng chủ đề đó
  const topicSkills=getTopicSkillIds(topicChoice);
  let targets=[];
  if(topicSkills.length){
    targets = topicSkills.filter(ensureSkillId);
  }else{
    const reqSkills=new Set(detected);
    weak.forEach(s=>reqSkills.add(s));
    targets=[...reqSkills].filter(ensureSkillId);
  }

  if(targets.length===0) targets=[weak[0] || (DB.skills[0]||{}).id].filter(Boolean);

  const m=stu.mastery||{};
  const avg=targets.reduce((s,id)=>s+(m[id]??0),0)/Math.max(1,targets.length);
  let baseDiff=1; if(avg>18) baseDiff=3; else if(avg>8) baseDiff=2;

  let pool=(DB.questions||[]).filter(q=>String(q.subject||"").toLowerCase().includes("toán") && targets.includes(q.skill));

  // Fallback nếu không có đủ câu đúng chủ đề (hoặc chưa import)
  let fallbackNote="";
  if(!pool.length){
    pool=(DB.questions||[]).filter(q=>String(q.subject||"").toLowerCase().includes("toán"));
    fallbackNote = " (thiếu câu đúng chủ đề → lấy ngẫu nhiên Toán 9)";
  }

  count = clampInt(count ?? 3, 1, 20);
  const topicSet = new Set(topicSkills);
  const scored=pool.map(q=>{
    const d=Number(q.diff||1);
    const diffScore=1.0-Math.min(2,Math.abs(d-baseDiff))*0.35;
    const mastery=m[q.skill]??0;
    const weakBoost=1.0+Math.max(0,10-mastery)*0.05;
    const topicBoost = (topicSet.size && topicSet.has(q.skill)) ? 1.35 : 1.0;
    return {q,s:diffScore*weakBoost*topicBoost*(0.9+Math.random()*0.2)};
  }).sort((a,b)=>b.s-a.s);

  const chosen=[];
  const used=new Set();
  for(const it of scored){
    if(chosen.length>=count) break;
    if(it && it.q && !used.has(it.q.id)){ chosen.push(it.q); used.add(it.q.id); }
  }
  while(chosen.length<count && pool.length){
    const q = pool[Math.floor(Math.random()*pool.length)];
    if(q && !used.has(q.id)){ chosen.push(q); used.add(q.id); }
    else break;
  }

  const topicExplain = topicSkills.length ? ('ưu tiên chủ đề="'+topicChoiceLabel(topicChoice)+'"; ') : "";
  const explain='AI chọn theo: '+topicExplain+'yêu cầu="'+((reqText||"").trim()||"không")+'"; lỗ hổng='+weak.map(w=>SKILL_NAME()[w]||w).join(", ")+'; độ khó gợi ý='+baseDiff+'.'+fallbackNote;
  return {tasks:chosen, explain, detectedSkills:detected, topicSkills};
}
function pickGateQuestion(skillId, avoidSet){const cand=(DB.questions||[]).filter(q=>q.skill===skillId && Number(q.diff||1)===1 && !avoidSet.has(q.id)); if(!cand.length) return null; return cand[Math.floor(Math.random()*cand.length)];}
function applyAnswerEffects(q,isCorrect,hintLevel,elapsedMs,isGate){
  const diff=Number(q.diff||1); const base=diff===1?6:diff===2?9:12;
  const speedPenalty=Math.max(0,(fastThresholdMs(diff)-elapsedMs)/fastThresholdMs(diff));
  let delta=0; if(isCorrect) delta=base-hintLevel*2; else delta=-Math.max(3,base*0.55)-(speedPenalty>0.15?2:0);
  if(isGate) delta=Math.max(2,Math.round(base*0.5))-hintLevel;
  const gain=isCorrect?(diff===1?1.2:diff===2?1.6:2.0):-(diff===1?0.8:diff===2?1.1:1.4);
  const masteryDelta=isCorrect?(gain-hintLevel*0.4):gain;
  return {delta:Math.round(delta*10)/10, masteryDelta};
}
function dateDiffDays(aStr,bStr){const a=new Date(aStr+"T00:00:00");const b=new Date(bStr+"T00:00:00");return Math.round((b-a)/(1000*60*60*24));}
function updateStreak(stu,dayStr){const st=stu.streak||{current:0,best:0,lastDay:null}; if(!st.lastDay){st.current=1;st.best=Math.max(st.best,1);st.lastDay=dayStr;} else {const d=dateDiffDays(st.lastDay,dayStr); if(d===1){st.current++;st.best=Math.max(st.best,st.current);st.lastDay=dayStr;} else if(d>1){st.current=1;st.best=Math.max(st.best,1);st.lastDay=dayStr;}} stu.streak=st;}
function energyFromStreak(s){return Math.min(100,10+(s||0)*5);}

function parseCSV(text){
  const rows=[]; let i=0, field="", row=[], inQ=false;
  const pushField=()=>{row.push(field);field="";}; const pushRow=()=>{rows.push(row);row=[];};
  while(i<text.length){const c=text[i];
    if(inQ){if(c==='"'){if(text[i+1]==='"'){field+='"';i++;} else inQ=false;} else field+=c;}
    else{if(c==='"') inQ=true; else if(c===',') pushField(); else if(c==='\n'){pushField();pushRow();} else if(c==='\r'){} else field+=c;}
    i++;
  }
  if(field.length||row.length){pushField();pushRow();}
  return rows.filter(r=>r.some(x=>String(x).trim()!==""));
}
function rowsToObjects(rows){if(rows.length<2) return []; const header=rows[0].map(h=>String(h).trim()); const out=[]; for(let i=1;i<rows.length;i++){const obj={}; for(let j=0;j<header.length;j++) obj[header[j]]=rows[i][j]??""; out.push(obj);} return out;}
function downloadText(filename,text){const blob=new Blob([text],{type:"text/plain;charset=utf-8"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url;a.download=filename; document.body.appendChild(a);a.click();a.remove(); URL.revokeObjectURL(url);}


function ensureUsers(){
  DB.users = DB.users || {teacher:{},student:{},parent:{}};
  DB.users.teacher = DB.users.teacher || {};
  DB.users.student = DB.users.student || {};
  DB.users.parent  = DB.users.parent  || {};
}
function upsertParent(id,name,phone,pw){
  ensureUsers();
  const pid=String(id||"").trim(); if(!pid) return;
  const p=DB.users.parent[pid] || {id:pid,name:"",phone:"",pw:"123456",students:[]};
  if(name) p.name=String(name).trim();
  if(phone) p.phone=String(phone).trim();
  if(pw) p.pw=String(pw).trim() || p.pw;
  p.students = p.students || [];
  DB.users.parent[pid]=p;
}
function linkParentStudent(parentId, studentId){
  ensureUsers();
  const pid=String(parentId||"").trim(), sid=String(studentId||"").trim();
  if(!pid||!sid) return;
  const p=DB.users.parent[pid]; if(!p) return;
  p.students = p.students || [];
  if(!p.students.includes(sid)) p.students.push(sid);
  if(DB.users.student[sid]) DB.users.student[sid].parentId = pid;
}

function reconcileParents(){
  ensureUsers();
  for(const sid in (DB.users.student||{})){
    const stu=DB.users.student[sid];
    const pid=stu && stu.parentId ? String(stu.parentId).trim() : "";
    if(pid){ upsertParent(pid,"","",""); linkParentStudent(pid,sid); }
  }
}

function importStudentsCSV(objs){let add=0,upd=0;
  for(const r of objs){const id=String(r.id||"").trim(); const name=String(r.name||"").trim(); if(!id||!name) continue; const cls=String(r.class||r.lop||"").trim();
    const parentId=String(r.parentId||r.parentid||r.ph||r.guardian||"").trim();
    const parentName=String(r.parentName||r.parentname||"").trim();
    const parentPhone=String(r.parentPhone||r.parentphone||r.phone||"").trim();
    const parentPw=String(r.parentPw||r.parentpw||"").trim();
    if(parentId){ upsertParent(parentId,parentName,parentPhone,parentPw); linkParentStudent(parentId,id); }

    if(!DB.users.student[id]){DB.users.student[id]={id,name,class:cls,pw:"123456",score:0,mastery:{},streak:{current:0,best:0,lastDay:null},history:[],parentId:null,settings:{perDay:DB.meta.settings.perDayDefault ?? 5}}; add++;}
    else{DB.users.student[id].name=name; if(cls) DB.users.student[id].class=cls; if(parentId) DB.users.student[id].parentId=parentId; upd++;}
  }
  saveDB(DB); toast("Import HS: +"+add+" (cập nhật "+upd+")"); renderTeacher();
}
function importQuestionsCSV(objs){let add=0,skip=0;
  for(const r of objs){
    const skill=String(r.skill||"").trim(); const diff=Number(r.diff||1);
    const text=String(r.text||"").trim(); const A=String(r.A||"").trim(); const B=String(r.B||"").trim(); const C=String(r.C||"").trim(); const D=String(r.D||"").trim();
    const ans=String(r.ans||"").trim().toUpperCase();
    if(!text||!A||!B||!C||!D||!"ABCD".includes(ans)||!ensureSkillId(skill)||!(diff>=1&&diff<=3)){skip++; continue;}
    const id="q_"+Math.random().toString(36).slice(2,10);
    DB.questions.push({id,subject:String(r.subject||"Toán 9"),skill,diff,text,A,B,C,D,ans,explain:String(r.explain||""),hint1:String(r.hint1||""),hint2:String(r.hint2||""),hint3:String(r.hint3||"")});
    add++;
  }
  saveDB(DB); toast("Import câu hỏi: +"+add+" (bỏ qua "+skip+")"); renderTeacher();
}
function exportDB(){downloadText("mdun_streak_ai_db.json", JSON.stringify(DB,null,2));}

function lastNDays(n){const base=nowDate(); const out=[]; for(let i=n-1;i>=0;i--){const d=new Date(base); d.setDate(base.getDate()-i); out.push(fmtDate(d));} return out;}
function calcWeekly(stu){
  const days=lastNDays(7); const map=new Map((stu.history||[]).map(h=>[h.day,h]));
  let totalDelta=0,totalCorrect=0,totalHints=0,totalGate=0,daysDone=0; const skillAgg={};
  for(const day of days){const h=map.get(day); if(!h) continue; daysDone++; totalDelta+=Number(h.scoreDelta||0); totalCorrect+=Number(h.correctCount||0); totalHints+=Number(h.hintsUsed||0); totalGate+=(h.gateTasks||[]).length;
    const all=[...(h.tasks||[]),...(h.gateTasks||[])];
    for(const a of all){const sid=a.skill; if(!skillAgg[sid]) skillAgg[sid]={attempt:0,correct:0}; skillAgg[sid].attempt++; if(a.correct) skillAgg[sid].correct++;}
  }
  const acc=Object.entries(skillAgg).map(([sid,v])=>({sid,acc:v.correct/Math.max(1,v.attempt)})).sort((a,b)=>a.acc-b.acc);
  return {days,daysDone,totalDelta,totalCorrect,totalHints,totalGate,weakWeek:acc.slice(0,3).map(x=>x.sid)};
}
function renderReportCard(stu){
  const wk=calcWeekly(stu); const map=new Map((stu.history||[]).map(h=>[h.day,h])); const sn=SKILL_NAME();
  const rows=wk.days.map(day=>{const h=map.get(day);
    return "<tr><td>"+day+"</td><td>"+(h?"✅":"—")+"</td><td class='right'>"+(h?(h.correctCount||0):0)+"</td><td class='right'>"+(h?(h.hintsUsed||0):0)+"</td><td class='right'>"+(h?(h.gateTasks||[]).length:0)+"</td><td class='right'>"+(h?(h.scoreDelta||0):0)+"</td></tr>";
  }).join("");
  const weakList=wk.weakWeek.length?wk.weakWeek.map(sid=>"<li>"+escapeHTML(sn[sid]||sid)+"</li>").join(""):"<li>Chưa đủ dữ liệu</li>";
  const comment=document.getElementById("teacherComment")?document.getElementById("teacherComment").value.trim():"";
  const note=comment?("Nhận xét GV: <b>"+escapeHTML(comment)+"</b>"):"Gợi ý: thêm nhận xét ngắn.";
  return "<div class='qbox' id='reportPrintable'><div class='row' style='justify-content:space-between;align-items:flex-start'><div><div class='title' style='font-size:16px'>Báo cáo 7 ngày — "+escapeHTML(stu.name)+" "+(stu.class?("("+escapeHTML(stu.class)+")"):"")+"</div><div class='small muted'>Trường: <b>"+escapeHTML(DB.meta.school||"")+"</b> · Ngày hệ thống: <b>"+todayKey()+"</b> (offset "+testDayOffset+")</div></div><div class='pill'>🔥 Streak: "+(stu.streak?.current||0)+" · Best: "+(stu.streak?.best||0)+"</div></div>"
    +"<div class='hr'></div><table><thead><tr><th>Ngày</th><th>Làm?</th><th class='right'>Đúng</th><th class='right'>Hint</th><th class='right'>Gate</th><th class='right'>Điểm</th></tr></thead><tbody>"+rows+"</tbody></table>"
    +"<div class='hr'></div><div class='row'><span class='pill'>Hoàn thành: <b>"+wk.daysDone+"/7</b></span><span class='pill'>Tổng đúng: <b>"+wk.totalCorrect+"</b></span><span class='pill'>Hint: <b>"+wk.totalHints+"</b></span><span class='pill'>Gate: <b>"+wk.totalGate+"</b></span><span class='pill'>Điểm tuần: <b>"+(Math.round(wk.totalDelta*10)/10)+"</b></span></div>"
    +"<div class='hr'></div><div class='split'><div><div class='small muted'><b>Chủ đề cần củng cố:</b></div><ul class='small'>"+weakList+"</ul></div><div><div class='small muted'><b>Nhận xét / kiến nghị:</b></div><div class='help'>"+note+"</div><div class='help' style='margin-top:8px'>Kế hoạch tuần sau: luyện 2 chủ đề yếu + duy trì streak 7/7.</div></div></div>"
    +"<div class='hr'></div><div class='help'><b>Ghi chú AI:</b> chọn câu theo yêu cầu + lỗ hổng + độ khó; chống đoán mò bằng Gate.</div></div>";
}
function renderQuestionPreview(){
  const skill=document.getElementById("filterSkill").value||"";
  const kw=(document.getElementById("filterText").value||"").trim().toLowerCase();
  const sn=SKILL_NAME();
  const list=(DB.questions||[]).filter(q=>{
    const okSkill=skill? q.skill===skill : true;
    const okKw=kw? String(q.text||"").toLowerCase().includes(kw):true;
    return okSkill && okKw && String(q.subject||"").toLowerCase().includes("toán");
  }).slice(0,6);
  if(!list.length){document.getElementById("qPreview").innerHTML="<div class='help'>Chưa có câu phù hợp (hoặc chưa import).</div>"; return;}
  document.getElementById("qPreview").innerHTML=list.map(q=>`
    <div class="qbox" style="margin-bottom:10px">
      <div class="row" style="justify-content:space-between">
        <span class="tag">${escapeHTML(sn[q.skill]||q.skill)}</span>
        <span class="tag">diff ${q.diff}</span>
      </div>
      <div class="qtext" style="margin-top:8px">${escapeHTML(q.text)}</div>
      <div class="help">Đáp án: <b>${q.ans}</b> · ${escapeHTML(q[q.ans]||"")}</div>
    </div>
  `).join("");
}

function resetToday(stu){const day=todayKey(); stu.history=(stu.history||[]).filter(h=>h.day!==day); saveDB(DB);}
function renderStudentApp(){
  const stu=DB.users.student[currentStudentId]; if(!stu) return;
  document.getElementById("pillToday").textContent="Hôm nay: "+todayKey();
  document.getElementById("stuTitle").textContent="Học sinh: "+stu.name+(stu.class?(" ("+stu.class+")"):"");
  document.getElementById("pillStudent").textContent=stu.id;
  const per=getPerDayForStudent(stu);
  const lab=document.getElementById("stuPerDayLabel"); if(lab) lab.textContent=String(per);
  const ssel=document.getElementById("studentPerDay"); if(ssel) ssel.value=String(per);

  initStudentTopicUI(stu);

  document.getElementById("stuStreak").textContent=stu.streak?.current||0;
  document.getElementById("stuEnergy").textContent=energyFromStreak(stu.streak?.current||0);
  document.getElementById("stuScore").textContent=Math.round((stu.score||0)*10)/10;
  const weak=getWeakSkills(stu,1)[0]; document.getElementById("stuWeak").textContent=weak?(SKILL_NAME()[weak]||weak):"—";
  const wk=calcWeekly(stu);
  const weakWeek=wk.weakWeek.map(sid=>"• "+(SKILL_NAME()[sid]||sid)).join("<br/>");
  document.getElementById("weekReportMini").innerHTML="<b>7 ngày:</b> "+wk.daysDone+"/7<br/>Điểm tuần: <b>"+(Math.round(wk.totalDelta*10)/10)+"</b><br/>Gate: <b>"+wk.totalGate+"</b><div class='hr'></div><b>Cần luyện:</b><br/>"+(weakWeek||"Chưa đủ dữ liệu.");
  const done=(stu.history||[]).find(h=>h.day===todayKey());
  if(done && !session) document.getElementById("quizArea").innerHTML="<div class='help'>Bạn đã hoàn thành hôm nay ✅</div>";
  else if(!session) document.getElementById("quizArea").innerHTML="<div class='help'>Nhập yêu cầu rồi bấm “Bắt đầu 5 phút”.</div>";
  else renderQuestion();
}
function startSession(){
  const stu=DB.users.student[currentStudentId]; const day=todayKey();
  if((stu.history||[]).some(h=>h.day===day)){toast("Bạn đã làm hôm nay. Bấm làm lại nếu muốn.");return;}
  const req=document.getElementById("stuReq").value.trim();
  const perDay=getPerDayForStudent(stu);
  const topicChoice = (stu.settings && stu.settings.topicChoice) ? stu.settings.topicChoice : "AUTO";
  const sel=pickQuestionsForToday(stu, req, perDay, topicChoice);
  session={day, req, topicChoice, detectedSkills:(sel.detectedSkills||[]), topicSkills:(sel.topicSkills||[]), explain:sel.explain, tasks:sel.tasks.map(q=>({q,start:Date.now(),hintLevel:0})), gateQueue:[], idx:0, total: sel.tasks.length, answers:[], gateAnswers:[], correctCount:0, hintsUsed:0, scoreDelta:0};
  toast("Bắt đầu!"); renderStudentApp();
}
function renderQuestion(){
  const isGate=session.gateQueue.length>0;
  const cur=isGate?session.gateQueue[0]:session.tasks[session.idx];
  const q=cur.q;
  const prog=isGate?"Gợi mở (Gate)":"Câu "+(session.idx+1)+"/"+(session.total||session.tasks.length);
  const hintBox=cur.hintLevel>0?("<div class='pill' style='margin-top:10px'>💡 Hint: "+escapeHTML(q["hint"+cur.hintLevel]||"")+"</div>"):"";
  document.getElementById("quizArea").innerHTML="<div class='qbox'><div class='row' style='justify-content:space-between'><div class='pill'>"+prog+"</div><div class='pill'>"+escapeHTML((SKILL_NAME()[q.skill]||q.skill))+" · diff "+q.diff+"</div></div>"
    +"<p class='qtext' style='margin-top:10px'>"+escapeHTML(q.text)+"</p>"
    +["A","B","C","D"].map(L=>"<label class='opt'><input type='radio' name='opt' value='"+L+"'><div class='lab'><b>"+L+".</b> "+escapeHTML(q[L])+"</div></label>").join("")
    +"<div class='row' style='margin-top:10px'><button class='btn primary' id='btnSubmit'>✅ Trả lời</button><button class='btn' id='btnHint'>💡 Hint (+)</button><span class='pill'>⏱ <b id='timer'>0.0s</b></span></div>"
    +hintBox+"<div class='hr'></div><div class='help'><b>Lý do AI chọn:</b> "+escapeHTML(session.explain)+"</div></div>";
  clearInterval(renderQuestion._tm);
  renderQuestion._tm=setInterval(()=>{const t=(Date.now()-cur.start)/1000; const el=document.getElementById("timer"); if(el) el.textContent=t.toFixed(1)+"s";},100);
  document.getElementById("btnHint").onclick=()=>{if(cur.hintLevel<3){cur.hintLevel++;session.hintsUsed++;toast("Đã mở hint");renderQuestion();}else toast("Đã hết hint");};
  document.getElementById("btnSubmit").onclick=()=>submitAnswer();
}
function submitAnswer(){
  const stu=DB.users.student[currentStudentId];
  const isGate=session.gateQueue.length>0;
  const cur=isGate?session.gateQueue[0]:session.tasks[session.idx];
  const q=cur.q;
  const chosen=(document.querySelector("input[name='opt']:checked")||{}).value;
  if(!chosen){toast("Chọn 1 đáp án");return;}
  const elapsedMs=Date.now()-cur.start;
  const isCorrect=(chosen===q.ans);
  const eff=applyAnswerEffects(q,isCorrect,cur.hintLevel,elapsedMs,isGate);
  session.scoreDelta+=eff.delta;
  stu.mastery=stu.mastery||{};
  stu.mastery[q.skill]=(stu.mastery[q.skill]??0)+eff.masteryDelta;
  const obj={qid:q.id,skill:q.skill,diff:q.diff,correct:isCorrect,hints:cur.hintLevel,elapsedMs:Math.round(elapsedMs),delta:eff.delta,gate:isGate};
  (isGate?session.gateAnswers:session.answers).push(obj);
  if(isCorrect && !isGate) session.correctCount++;
  if(!isGate && !isCorrect && elapsedMs<fastThresholdMs(q.diff)){
    const avoid=new Set([q.id,...session.answers.map(a=>a.qid),...session.gateAnswers.map(a=>a.qid)]);
    const gq=pickGateQuestion(q.skill, avoid);
    if(gq){session.gateQueue.unshift({q:gq,start:Date.now(),hintLevel:1});toast("Sai quá nhanh → làm Gate!");renderQuestion();return;}
  }
  clearInterval(renderQuestion._tm);
  document.getElementById("quizArea").innerHTML="<div class='qbox'><div class='row' style='justify-content:space-between'><div class='pill'>Kết quả</div><div class='pill'>"+escapeHTML((SKILL_NAME()[q.skill]||q.skill))+" · diff "+q.diff+"</div></div>"
    +"<div style='margin-top:10px;font-size:18px'>"+(isCorrect?"<span class='good'>✅ Đúng</span>":"<span class='bad'>❌ Sai</span>")+" <span class='pill'>Điểm <b>"+eff.delta+"</b></span> <span class='pill'>"+(elapsedMs/1000).toFixed(1)+"s</span></div>"
    +"<div class='hr'></div><div class='help'><b>Giải thích:</b> "+escapeHTML(q.explain||"")+"</div><div class='help' style='margin-top:8px'><b>Đáp án:</b> "+q.ans+" · <b>"+escapeHTML(q[q.ans]||"")+"</b></div>"
    +"<div class='row' style='margin-top:12px'><button class='btn primary' id='btnNext'>➡️ Tiếp tục</button></div></div>";
  document.getElementById("btnNext").onclick=()=>{
    if(isGate){session.gateQueue.shift();} else session.idx++;
    if(session.gateQueue.length){renderQuestion();return;}
    if(session.idx>=session.tasks.length){finishSession();return;}
    session.tasks[session.idx].start=Date.now(); renderQuestion();
  };
}
function finishSession(){
  const stu=DB.users.student[currentStudentId];
  const day=todayKey();
  updateStreak(stu,day);
  stu.score=(stu.score||0)+session.scoreDelta;
  stu.history=stu.history||[];
  stu.history.push({day,req:{text:session.req,topicChoice:(session.topicChoice||"AUTO"),topicLabel:topicChoiceLabel(session.topicChoice||"AUTO"),parsedSkills:parseRequirement(session.req),detectedSkills:(session.detectedSkills||[]),topicSkills:(session.topicSkills||[])},explain:session.explain,tasks:session.answers,gateTasks:session.gateAnswers,correctCount:session.correctCount,hintsUsed:session.hintsUsed,scoreDelta:Math.round(session.scoreDelta*10)/10});
  session=null; saveDB(DB); toast("Hoàn thành hôm nay ✅"); renderStudentApp();
}


if(document.getElementById("btnAddParentManual")){
  document.getElementById("btnAddParentManual").onclick=()=>{
    const pbox=document.getElementById("manualParentBox");
    const sbox=document.getElementById("manualStudentBox");
    if(sbox && !sbox.classList.contains("hidden")) sbox.classList.add("hidden");
    pbox.classList.toggle("hidden");
    if(!pbox.classList.contains("hidden")) document.getElementById("mphId").focus();
  };
}

if(document.getElementById("btnAddTeacherManual")){
  document.getElementById("btnAddTeacherManual").onclick=()=>{
    const tbox=document.getElementById("manualTeacherBox");
    const pbox=document.getElementById("manualParentBox");
    const sbox=document.getElementById("manualStudentBox");
    if(pbox && !pbox.classList.contains("hidden")) pbox.classList.add("hidden");
    if(sbox && !sbox.classList.contains("hidden")) sbox.classList.add("hidden");
    tbox.classList.toggle("hidden");
    if(!tbox.classList.contains("hidden")) document.getElementById("mgvId").focus();
  };
}
function addTeacherManual(){
  ensureUsers();
  const id=document.getElementById("mgvId").value.trim();
  const name=document.getElementById("mgvName").value.trim();
  const phone=document.getElementById("mgvPhone").value.trim();
  const pw=(document.getElementById("mgvPw").value.trim() || "123456");
  if(!id || !name){ toast("Thiếu ID hoặc họ tên"); return; }
  if(!/^[a-zA-Z0-9_-]{2,20}$/.test(id)){ toast("ID chỉ gồm chữ/số/_/- (2–20 ký tự)"); return; }
  DB.users.teacher = DB.users.teacher || {};
  // Cho phép cập nhật nếu đã tồn tại (không gây lỗi)
  const t = DB.users.teacher[id] || {id};
  t.id=id; t.name=name; t.phone=phone; t.pw=pw;
  DB.users.teacher[id]=t;
  saveDB(DB);
  toast("Đã lưu giáo viên: "+id);
  if(currentTeacher) renderTeacher();
}
if(document.getElementById("btnSaveManualTeacher")) document.getElementById("btnSaveManualTeacher").onclick=addTeacherManual;
if(document.getElementById("btnClearManualTeacher")) document.getElementById("btnClearManualTeacher").onclick=()=>{
  ["mgvId","mgvName","mgvPhone","mgvPw"].forEach(id=>{const el=document.getElementById(id); if(el) el.value="";});
  toast("Đã xoá ô nhập");
  const el=document.getElementById("mgvId"); if(el) el.focus();
};

function addParentManual(){
  ensureUsers();
  const id=document.getElementById("mphId").value.trim();
  const name=document.getElementById("mphName").value.trim();
  const phone=document.getElementById("mphPhone").value.trim();
  const pw=(document.getElementById("mphPw").value.trim() || "123456");
  const kidsRaw=document.getElementById("mphStudents").value.trim();
  if(!id){toast("Thiếu mã phụ huynh");return;}
  upsertParent(id,name,phone,pw);
  const kids=kidsRaw?kidsRaw.split(",").map(x=>x.trim()).filter(Boolean):[];
  for(const sid of kids){
    if(DB.users.student[sid]) linkParentStudent(id,sid);
  }
  saveDB(DB); toast("Đã lưu phụ huynh"); renderTeacher();
}
document.getElementById("btnSaveManualParent").onclick=addParentManual;
document.getElementById("btnClearManualParent").onclick=()=>{
  ["mphId","mphName","mphPhone","mphPw","mphStudents"].forEach(id=>{const el=document.getElementById(id); if(el) el.value="";});
  toast("Đã xoá ô nhập");
};
function seedDemo(){
  const sample=[{id:"hs001",name:"Lò Văn A",class:"9A"},{id:"hs002",name:"Lò Thị B",class:"9A"},{id:"hs003",name:"Nguyễn Văn C",class:"9B"}];
  for(const s of sample){if(!DB.users.student[s.id]) DB.users.student[s.id]={id:s.id,name:s.name,class:s.class,pw:"123456",score:0,mastery:{},streak:{current:0,best:0,lastDay:null},history:[],parentId:null,settings:{perDay:DB.meta.settings.perDayDefault ?? 5}};}
  upsertParent("ph001","PH Demo","0900000000","123456"); linkParentStudent("ph001","hs001"); linkParentStudent("ph001","hs002");
  saveDB(DB); toast("Đã tạo demo. (PH: ph001/123456)");
}
function seed7DaysForStudent(sid){
  const stu=DB.users.student[sid]; if(!stu) return;
  const base=nowDate(); const days=[]; for(let i=6;i>=0;i--){const d=new Date(base); d.setDate(base.getDate()-i); days.push(fmtDate(d));}
  const existed=new Set((stu.history||[]).map(h=>h.day));
  for(const dayStr of days){
    if(existed.has(dayStr)) continue;
    const req=(Math.random()<0.55)?"luyện hệ phương trình":(Math.random()<0.5?"góc nội tiếp":"");
    const perDay=getPerDayForStudent(stu);
    const sel=pickQuestionsForToday(stu,req, perDay);
    let answers=[],gateAnswers=[],correctCount=0,hintsUsed=0,scoreDelta=0;
    for(const q of sel.tasks){
      const willCorrect=Math.random()<0.75;
      const hint=(Math.random()<0.22)?1:0; hintsUsed+=hint;
      const elapsed=willCorrect?(2800+Math.random()*3500):(900+Math.random()*1800);
      const eff=applyAnswerEffects(q,willCorrect,hint,elapsed,false); scoreDelta+=eff.delta;
      stu.mastery[q.skill]=(stu.mastery[q.skill]??0)+eff.masteryDelta;
      answers.push({qid:q.id,skill:q.skill,diff:q.diff,correct:willCorrect,hints:hint,elapsedMs:Math.round(elapsed),delta:eff.delta,gate:false});
      if(willCorrect) correctCount++;
      if(!willCorrect && elapsed<fastThresholdMs(q.diff)){
        const avoid=new Set([q.id,...answers.map(a=>a.qid),...gateAnswers.map(a=>a.qid)]);
        const gq=pickGateQuestion(q.skill,avoid);
        if(gq){
          const geff=applyAnswerEffects(gq,true,1,3200,true); scoreDelta+=geff.delta; hintsUsed+=1;
          gateAnswers.push({qid:gq.id,skill:gq.skill,diff:gq.diff,correct:true,hints:1,elapsedMs:3200,delta:geff.delta,gate:true});
        }
      }
    }
    updateStreak(stu,dayStr);
    stu.score=(stu.score||0)+scoreDelta;
    stu.history.push({day:dayStr,req:{text:req,parsedSkills:parseRequirement(req)},explain:sel.explain,tasks:answers,gateTasks:gateAnswers,correctCount,hintsUsed,scoreDelta:Math.round(scoreDelta*10)/10});
  }
  saveDB(DB);
}

function show(id){document.getElementById("viewLogin").classList.add("hidden");document.getElementById("viewTeacher").classList.add("hidden");document.getElementById("viewStudent").classList.add("hidden");document.getElementById("viewParent").classList.add("hidden");document.getElementById(id).classList.remove("hidden");}
function refreshKPIs(){
  document.getElementById("kpiQB").textContent=(DB.questions||[]).length;
  document.getElementById("kpiStu").textContent=Object.keys(DB.users.student||{}).length;
  let total=0,best=0;
  for(const sid in DB.users.student){const stu=DB.users.student[sid]; total+=calcWeekly(stu).daysDone; best=Math.max(best, stu.streak?.best||0);}
  document.getElementById("kpi7").textContent=total;
  document.getElementById("kpiStreak").textContent=best;
}
function renderTeacher(){
  document.getElementById("pillMode").textContent="Chế độ: Giáo viên";
  document.getElementById("pillTeacher").textContent=currentTeacher.id+" · "+currentTeacher.name;
  show("viewTeacher");
  refreshPerDayUI();
  const sel=document.getElementById("teacherStudentSelect");
  const stus=Object.values(DB.users.student||{}).sort((a,b)=>a.id.localeCompare(b.id));
  sel.innerHTML=stus.map(s=>"<option value='"+s.id+"'>"+s.id+" — "+escapeHTML(s.name)+" "+(s.class?("("+escapeHTML(s.class)+")"):"")+"</option>").join("");
  teacherSelected=sel.value || (stus[0]?.id||null);
  if(teacherSelected) sel.value=teacherSelected;
  sel.onchange=()=>{teacherSelected=sel.value; document.getElementById("teacherReport").innerHTML="";};
  const fs=document.getElementById("filterSkill");
  fs.innerHTML="<option value=''>Tất cả chủ đề</option>"+(DB.skills||[]).map(s=>"<option value='"+s.id+"'>"+escapeHTML(s.name)+" ("+s.id+")</option>").join("");
  fs.onchange=renderQuestionPreview;
  document.getElementById("filterText").oninput=()=>{clearTimeout(renderQuestionPreview._t);renderQuestionPreview._t=setTimeout(renderQuestionPreview,180);};
  renderQuestionPreview();
}
function renderStudent(){document.getElementById("pillMode").textContent="Chế độ: Học sinh"; show("viewStudent"); refreshPerDayUI(); renderStudentApp();}

function renderParent(){
  ensureUsers();
  const p=DB.users.parent[currentParentId];
  document.getElementById("pillMode").textContent="Chế độ: Phụ huynh";
  document.getElementById("pillParent").textContent=p.id+" · "+(p.name||"Phụ huynh");
  show("viewParent");
  const sel=document.getElementById("parentStudentSelect");
  const kids=(p.students||[]).filter(sid=>DB.users.student[sid]).map(sid=>DB.users.student[sid]);
  sel.innerHTML = kids.length
    ? kids.map(s=>"<option value='"+s.id+"'>"+s.id+" — "+escapeHTML(s.name)+(s.class?(" ("+escapeHTML(s.class)+")"):"")+"</option>").join("")
    : "<option value=''>Chưa gán học sinh</option>";
  parentSelected = sel.value || (kids[0]?.id||"");
  if(parentSelected) sel.value=parentSelected;
  sel.onchange=()=>{parentSelected=sel.value; document.getElementById("parentReport").innerHTML="";};
  document.getElementById("btnParentViewReport").onclick=()=>{
    if(!parentSelected) return;
    document.getElementById("parentReport").innerHTML = renderReportCard(DB.users.student[parentSelected]);
  };
  document.getElementById("btnParentPrintReport").onclick=()=>{
    const r=document.querySelector("#viewParent #reportPrintable");
    if(!r){toast("Hãy bấm “Xem báo cáo” trước.");return;}
    const win=window.open("","_blank");
    if(!win){toast("Trình duyệt chặn pop-up. Cho phép pop-up để in/PDF.");return;}
    const css=document.querySelector("style").innerHTML;
    win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>Báo cáo</title><style>${css} @media print{.card{box-shadow:none}}</style></head><body><div class="wrap">${r.outerHTML}</div><script>window.onload=()=>{window.print();};<\/script></body></html>`);
    win.document.close();
  };
}

function refreshAll(){refreshKPIs(); if(currentTeacher) renderTeacher(); if(currentStudentId) renderStudent(); if(currentParentId) renderParent();}

document.getElementById("btnResetAll").onclick=()=>{ 
  if(confirm("Xoá toàn bộ dữ liệu?")){
    localStorage.removeItem(LS_KEY);
    DB=newDB(); 
    ensureSettings(); 
    saveDB(DB);
    currentTeacher=null; 
    currentStudentId=null; 
    currentParentId=null;
    teacherSelected=null;
    parentSelected=null;
    session=null;
    document.getElementById("pillMode").textContent="Chưa đăng nhập";
    show("viewLogin");
    refreshPerDayUI();
    toast("Đã reset.");
  } 
};

function getExt(file){
  const n=(file?.name||"").toLowerCase();
  const m=n.match(/\.([a-z0-9]+)$/); return m?m[1]:"";
}
function normalizeHeaderKey(h){
  const s=String(h||"").trim().toLowerCase();
  const t=s.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const k=t.replace(/[^a-z0-9]/g,"");
  const map={
    subject:"subject", mon:"subject", lop:"class",
    skill:"skill", chude:"skill", topic:"skill",
    diff:"diff", dokho:"diff", level:"diff",
    text:"text", cauhoi:"text", question:"text",
    a:"A", b:"B", c:"C", d:"D",
    ans:"ans", dapan:"ans", answer:"ans",
    explain:"explain", giaithich:"explain", loigiai:"explain", solution:"explain",
    hint1:"hint1", goiy1:"hint1", y1:"hint1",
    hint2:"hint2", goiy2:"hint2", y2:"hint2",
    hint3:"hint3", goiy3:"hint3", y3:"hint3",
    parentid:"parentId", ph:"parentId", guardian:"parentId",
    parentname:"parentName", parentphone:"parentPhone", parentpw:"parentPw", phone:"phone"
  };
  return map[k]||"";
}

// ===== XLSX loader (auto) — chỉ phục vụ Import HS Excel, không ảnh hưởng tính năng khác =====
let __xlsxLoaderPromise = null;
function __loadScriptOnce(url){
  return new Promise((resolve,reject)=>{
    // Nếu đã có cùng URL thì khỏi tải lại
    const exists=[...document.scripts].some(s=>s.src===url);
    if(exists) return resolve(true);
    const s=document.createElement("script");
    s.src=url;
    s.async=true;
    s.onload=()=>resolve(true);
    s.onerror=()=>reject(new Error("load failed: "+url));
    document.head.appendChild(s);
  });
}
async function ensureXLSX(){
  if(window.XLSX) return true;
  if(__xlsxLoaderPromise) return __xlsxLoaderPromise;
  __xlsxLoaderPromise = (async ()=>{
    const urls=[
      "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js",
      "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js",
      "https://unpkg.com/xlsx@0.18.5/dist/xlsx.full.min.js"
    ];
    for(const u of urls){
      try{ await __loadScriptOnce(u); if(window.XLSX) return true; }catch(e){}
    }
    return !!window.XLSX;
  })();
  return __xlsxLoaderPromise;
}

async function readXlsxToObjects(file){
  const ok = await ensureXLSX();
  if(!ok){toast("Không tải được thư viện Excel (XLSX). Hãy bật mạng hoặc dùng CSV."); return [];}
  const ab=await file.arrayBuffer();
  const wb=XLSX.read(ab,{type:"array"});
  const sheet=wb.Sheets[wb.SheetNames[0]];
  const rows=XLSX.utils.sheet_to_json(sheet,{defval:""});
  // Chuẩn hoá key theo header
  return rows.map(r=>{
    const o={};
    Object.keys(r||{}).forEach(k=>{
      const nk=normalizeHeaderKey(k) || k;
      o[nk]=r[k];
    });
    return o;
  });
}
function parseQuestionsPlainText(text){
  const out=[];
  const parts=String(text||"").split(/(?:^|\n)\s*(?:Câu|CAU)\s*\d+\s*[:.)-]?\s*/).filter(Boolean);
  const defaultSkill=(DB.skills && DB.skills[0] ? DB.skills[0].id : "");
  for(const p of parts){
    const block=p.trim();
    if(!block) continue;
    const getOpt=(L,nextL)=>{ const re=new RegExp(String.raw`(?:^|\n)\s*${L}[\.\)]\s*([\s\S]*?)(?=(?:\n\s*${nextL}[\.\)]|\n\s*Đáp án|\n\s*DAP AN|\n\s*Câu|\n\s*CAU|$))`,"i"); const m=block.match(re); return m?m[1].trim():""; };
    const A=getOpt("A","B"), B=getOpt("B","C"), C=getOpt("C","D"), D=getOpt("D","Đáp án");
    const ansM=block.match(/Đáp án\s*[:\-]?\s*([ABCD])/i) || block.match(/DAP\s*AN\s*[:\-]?\s*([ABCD])/i);
    const ans=ansM?ansM[1].toUpperCase():"";
    // text = phần trước option A
    const textOnly=block.split(/\n\s*A[\.\)]\s*/i)[0].trim();
    out.push({subject:"Toán 9",skill:defaultSkill,diff:1,text:textOnly,A,B,C,D,ans,explain:"",hint1:"",hint2:"",hint3:""});
  }
  return out;
}
async function parseQuestionsDOCX(file){
  if(!window.mammoth){toast("Thiếu thư viện đọc Word (mammoth). Hãy bật mạng hoặc dùng CSV."); return [];}
  const ab=await file.arrayBuffer();
  const res=await mammoth.convertToHtml({arrayBuffer:ab});
  const div=document.createElement("div");
  div.innerHTML=res.value||"";
  const table=div.querySelector("table");
  if(table){
    const trs=[...table.querySelectorAll("tr")];
    if(trs.length>=2){
      const headers=[...trs[0].querySelectorAll("th,td")].map(td=>td.textContent.trim());
      const objs=[];
      for(let i=1;i<trs.length;i++){
        const tds=[...trs[i].querySelectorAll("th,td")].map(td=>td.textContent.trim());
        const obj={};
        headers.forEach((h,idx)=>{
          const key=normalizeHeaderKey(h) || h;
          if(key) obj[key]=tds[idx]??"";
        });
        objs.push(obj);
      }
      return objs;
    }
  }
  // fallback plain text
  return parseQuestionsPlainText(div.textContent||"");
}

function openFile(kind){
  const fp=document.getElementById("filePicker"); fp.value="";
  fp.accept = (kind==="students") ? ".xlsx,.xls,.csv,.txt" :
              (kind==="questions") ? ".docx,.csv,.txt" : ".csv,.txt,.json";
  fp.onchange=async ev=>{
    const file=ev.target.files[0]; if(!file) return;
    const ext=getExt(file);
    try{
      if(kind==="students"){
        let objs=[];
        if(ext==="xlsx"||ext==="xls"){ objs=await readXlsxToObjects(file); }
        else{ const text=(await file.text()).replace(/^\uFEFF/,""); objs=rowsToObjects(parseCSV(text)); }
        importStudentsCSV(objs);
      }
      if(kind==="questions"){
        let objs=[];
        if(ext==="docx"){ objs=await parseQuestionsDOCX(file); }
        else{ const text=(await file.text()).replace(/^\uFEFF/,""); objs=rowsToObjects(parseCSV(text)); }
        importQuestionsCSV(objs);
      }
    }catch(e){
      console.error(e);
      toast("Không đọc được file. Hãy kiểm tra định dạng và thử lại.");
    }
  };
  fp.click();
}
document.getElementById("btnImportStudents").onclick=()=>openFile("students");
document.getElementById("btnImportQuestions").onclick=()=>openFile("questions");
document.getElementById("btnGuide").onclick=()=>document.getElementById("guideBox").classList.toggle("hidden");

document.getElementById("btnLogin").onclick=()=>{
  const role=document.getElementById("role").value; const id=document.getElementById("loginId").value.trim(); const pw=document.getElementById("loginPw").value.trim();
  if(role==="teacher"){const u=DB.users.teacher[id]; if(!u||u.pw!==pw){toast("Sai tài khoản/mật khẩu");return;} currentTeacher=u; currentStudentId=null; session=null; renderTeacher(); return;}
  if(role==="parent"){
    const u=DB.users.parent[id];
    if(!u||u.pw!==pw){toast("Sai tài khoản/mật khẩu");return;}
    currentParentId=id;
    currentTeacher=null;
    currentStudentId=null;
    session=null;
    renderParent();
    return;
  }
  const u=DB.users.student[id]; if(!u||u.pw!==pw){toast("Sai tài khoản/mật khẩu");return;} currentStudentId=id; currentTeacher=null; session=null; renderStudent();
};
document.getElementById("btnDemo").onclick=()=>{seedDemo(); toast("Dùng gv01/123456 hoặc hs001/123456 hoặc ph001/123456");};

document.getElementById("btnLogoutT").onclick=()=>{currentTeacher=null; teacherSelected=null; document.getElementById("pillMode").textContent="Chưa đăng nhập"; show("viewLogin"); toast("Đã đăng xuất");};
document.getElementById("btnLogoutS").onclick=()=>{currentStudentId=null; session=null; document.getElementById("pillMode").textContent="Chưa đăng nhập"; show("viewLogin"); toast("Đã đăng xuất");};
document.getElementById("btnLogoutP").onclick=()=>{currentParentId=null; currentTeacher=null; currentStudentId=null; session=null; document.getElementById("pillMode").textContent="Chưa đăng nhập"; show("viewLogin"); toast("Đã đăng xuất");};

document.getElementById("btnExportDB").onclick=exportDB;
document.getElementById("btnNextDay").onclick=nextTestDay;
document.getElementById("btnResetDay").onclick=resetTestOffset;
document.getElementById("btnSeed7").onclick=()=>{ if(!teacherSelected) return toast("Chọn học sinh"); seed7DaysForStudent(teacherSelected); toast("Đã tạo dữ liệu 7 ngày."); };

document.getElementById("btnViewReport").onclick=()=>{ if(!teacherSelected) return toast("Chọn học sinh"); document.getElementById("teacherReport").innerHTML=renderReportCard(DB.users.student[teacherSelected]); };
document.getElementById("btnPrintReport").onclick=()=>{
  const r=document.querySelector("#viewTeacher #reportPrintable");
  if(!r){toast("Hãy bấm “Xem báo cáo” trước.");return;}
  const win=window.open("","_blank");
  if(!win){toast("Trình duyệt chặn pop-up. Cho phép pop-up để in/PDF.");return;}
  const css=document.querySelector("style").innerHTML;
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Báo cáo 7 ngày</title><style>${css} body{background:#fff} header{display:none} .wrap{max-width:900px} .card,.qbox{box-shadow:none}</style>
</head><body><div class="wrap">${r.outerHTML}</div><script>window.onload=()=>{window.print();};<\/script></body></html>`);
  win.document.close();
};

document.getElementById("btnStart").onclick=startSession;
document.getElementById("btnOpenGame").onclick=openStudentGame;
document.getElementById("btnCloseGame").onclick=closeStudentGame;
document.getElementById("btnResetToday").onclick=()=>{ const stu=DB.users.student[currentStudentId]; if(confirm("Xoá bài làm hôm nay?")){ resetToday(stu); session=null; toast("Đã xoá hôm nay."); renderStudentApp(); } };
document.getElementById("btnShowWeek").onclick=()=>{ const stu=DB.users.student[currentStudentId]; document.getElementById("quizArea").innerHTML=renderReportCard(stu); };




// ====== Cài đặt số câu / ngày ======
function refreshPerDayUI(){
  ensureSettings();
  if(document.getElementById("teacherPerDay")){
    document.getElementById("teacherPerDay").value = String(clampInt(DB.meta.settings.perDayDefault ?? 5, 3, 15));
  }
  if(currentStudentId){
    const stu=DB.users.student[currentStudentId];
    const per=getPerDayForStudent(stu);
    const sel=document.getElementById("studentPerDay");
    if(sel) sel.value=String(per);
    const lab=document.getElementById("stuPerDayLabel");
    if(lab) lab.textContent=String(per);
  }
}
if(document.getElementById("btnSaveTeacherPerDay")){
  document.getElementById("btnSaveTeacherPerDay").onclick=()=>{
    ensureSettings();
    DB.meta.settings.perDayDefault = clampInt(document.getElementById("teacherPerDay").value, 3, 15);
    saveDB(DB);
    toast("Đã lưu mặc định: "+DB.meta.settings.perDayDefault+" câu/ngày");
    refreshPerDayUI();
  };
}
if(document.getElementById("studentPerDay")){
  document.getElementById("studentPerDay").onchange=()=>{
    const stu=DB.users.student[currentStudentId];
    if(!stu) return;
    setPerDayForStudent(stu, document.getElementById("studentPerDay").value);
    saveDB(DB);
    toast("Đã chọn: "+getPerDayForStudent(stu)+" câu hôm nay");
    refreshPerDayUI();
  };
}

// ====== Thêm học sinh thủ công ======
if(document.getElementById("btnAddStudentManual")){
  document.getElementById("btnAddStudentManual").onclick=()=>{
    const box=document.getElementById("manualStudentBox");
    box.classList.toggle("hidden");
    if(!box.classList.contains("hidden")) document.getElementById("mstuId").focus();
  };
}
function addStudentManual(){
  const id=document.getElementById("mstuId").value.trim();
  const name=document.getElementById("mstuName").value.trim();
  const cls=document.getElementById("mstuClass").value.trim();
  const pw=(document.getElementById("mstuPw").value.trim() || "123456");
  if(!id || !name){ toast("Thiếu ID hoặc họ tên"); return; }
  if(!/^[a-zA-Z0-9_-]{2,20}$/.test(id)){ toast("ID chỉ gồm chữ/số/_/- (2–20 ký tự)"); return; }
  DB.users.student = DB.users.student || {};
  if(DB.users.student[id]){ toast("ID đã tồn tại."); return; }
  DB.users.student[id]={id,name,class:cls,pw,score:0,mastery:{},streak:{current:0,best:0,lastDay:null},history:[],parentId:null,settings:{perDay:DB.meta.settings.perDayDefault ?? 5}};
  saveDB(DB);
  toast("Đã thêm học sinh: "+id);
  if(currentTeacher) renderTeacher();
  document.getElementById("mstuId").value="";
  document.getElementById("mstuName").value="";
  document.getElementById("mstuClass").value="";
  document.getElementById("mstuPw").value="";
  document.getElementById("mstuId").focus();
}
if(document.getElementById("btnSaveManualStudent")) document.getElementById("btnSaveManualStudent").onclick=addStudentManual;
if(document.getElementById("btnClearManualStudent")) document.getElementById("btnClearManualStudent").onclick=()=>{
  document.getElementById("mstuId").value="";
  document.getElementById("mstuName").value="";
  document.getElementById("mstuClass").value="";
  document.getElementById("mstuPw").value="";
  toast("Đã xoá ô nhập");
  document.getElementById("mstuId").focus();
};

refreshKPIs();
show("viewLogin");
