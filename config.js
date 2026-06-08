/**
 * ============================================================
 *  CONFIG.JS — Toàn bộ nội dung bạn có thể chỉnh sửa tại đây
 *  Không cần động vào index.html hay style.css
 * ============================================================
 */

const SHOP_CONFIG = {

  /* ─── THÔNG TIN SHOP ─────────────────────────────────────── */
  shopName:    "OrderHub VN",          // Tên hiển thị trên trang
  tagline:     "Mua hàng Hàn – Nhật – Mỹ/EU về tận tay bạn",
  description: "Hỗ trợ đặt hàng, thanh toán, vận chuyển và kiểm hàng toàn bộ — bạn chỉ cần gửi link là xong.",
  year:        "2025",

  /* ─── LIÊN HỆ ────────────────────────────────────────────── */
  contact: {
    zalo:      "0912 345 678",         // Số Zalo
    telegram:  "@orderhub_vn",         // Username Telegram (có @ phía trước)
    facebook:  "facebook.com/orderhubvn", // Link Facebook (bỏ https://)
    email:     "orderhubvn@gmail.com", // Email
    hours:     "8:00 – 22:00 hàng ngày",
  },

  /* ─── SỐ LIỆU HERO ───────────────────────────────────────── */
  stats: [
    { num: "500+",  label: "Đơn thành công" },
    { num: "3–5%",  label: "Phí dịch vụ thấp" },
    { num: "100%",  label: "Kiểm hàng kỹ" },
  ],

  /* ─── TUYẾN HÀNG ─────────────────────────────────────────── */
  // Bật/tắt tuyến bằng cách xoá hoặc thêm object vào mảng này
  routes: [
    { id: "han",  flag: "🇰🇷", label: "Hàn Quốc", sites: "Coupang, Naver, Musinsa" },
    { id: "nhat", flag: "🇯🇵", label: "Nhật Bản", sites: "Rakuten, Yahoo JP, Amazon JP" },
    { id: "my",   flag: "🇺🇸", label: "Mỹ / Châu Âu", sites: "Amazon US, ASOS, iHerb, Sephora" },
  ],

  /* ─── PHÍ DỊCH VỤ (%) ────────────────────────────────────── */
  // Cấu trúc: { maxValue: giá trị đơn tối đa (VND), rates: { id_tuyến: phần trăm } }
  // Bậc cuối cùng (maxValue: Infinity) là bậc "từ X trở lên"
  serviceFees: [
    {
      label:    "Dưới 2 triệu đ",
      maxValue: 2_000_000,
      rates:    { han: 8, nhat: 8, my: 10 },
    },
    {
      label:    "2 – 5 triệu đ",
      maxValue: 5_000_000,
      rates:    { han: 6, nhat: 6, my: 8 },
    },
    {
      label:    "5 – 15 triệu đ",
      maxValue: 15_000_000,
      rates:    { han: 5, nhat: 5, my: 7 },
    },
    {
      label:    "Trên 15 triệu đ",
      maxValue: Infinity,
      rates:    { han: 3, nhat: 3, my: 5 },
    },
  ],

  /* ─── CƯỚC VẬN CHUYỂN ────────────────────────────────────── */
  // Đơn vị: VND/kg · minWeight: cân tối thiểu tính cước (kg)
  // transitDays: số ngày vận chuyển ước tính
  shipping: {
    han: {
      air: { pricePerKg: 280_000, transitDays: "7–10 ngày" },
      sea: { pricePerKg:  90_000, transitDays: "25–35 ngày" },
      minWeight: 0.5,
    },
    nhat: {
      air: { pricePerKg: 320_000, transitDays: "7–12 ngày" },
      sea: { pricePerKg: 110_000, transitDays: "30–40 ngày" },
      minWeight: 0.5,
    },
    my: {
      air: { pricePerKg: 480_000, transitDays: "10–15 ngày" },
      sea: { pricePerKg: 150_000, transitDays: "45–60 ngày" },
      minWeight: 0.5,
    },
  },

  /* ─── QUY ĐỊNH THANH TOÁN ────────────────────────────────── */
  payment: {
    depositPercent:   70,    // % đặt cọc khi xác nhận
    remainPercent:    30,    // % thanh toán khi hàng về
    method:           "Chuyển khoản ngân hàng",
    exchangeRateNote: "Tỷ giá theo Vietcombank ngày đặt cọc",
    freeStorageDays:  30,    // Ngày miễn phí lưu kho
    storageFeePerDay: 10_000, // Phí lưu kho/ngày/kiện (VND)
  },

  /* ─── ĐIỀU KHOẢN GIAO DỊCH ───────────────────────────────── */
  // icon: tên icon Tabler (https://tabler.io/icons)
  rules: [
    {
      icon:    "cash",
      title:   "Hoàn tiền khi shop hết hàng / huỷ đơn",
      content: "Trường hợp shop không có hàng hoặc tự huỷ đơn, mình hoàn 100% tiền cọc trong 24h làm việc.",
    },
    {
      icon:    "replace",
      title:   "Hàng lỗi do shop: hoàn hoặc đổi",
      content: "Nếu hàng về sai mô tả / lỗi của nhà sản xuất, mình hỗ trợ liên hệ shop để đổi/trả. Phí vận chuyển chiều về do shop chịu hoặc thương lượng theo từng case.",
    },
    {
      icon:    "alert-triangle",
      title:   "Không hoàn phí dịch vụ nếu bạn đổi ý",
      content: "Sau khi đã đặt cọc và mình tiến hành mua, phí dịch vụ không hoàn lại nếu bạn tự ý huỷ đơn.",
    },
    {
      icon:    "package",
      title:   "Không chịu trách nhiệm hàng thất lạc do hãng vận chuyển",
      content: "Mình hỗ trợ khiếu nại hãng vận chuyển tối đa, nhưng không bồi thường toàn phần nếu hàng thất lạc ngoài tầm kiểm soát. Khuyến khích mua bảo hiểm hàng hoá.",
    },
    {
      icon:    "clock",
      title:   "Giữ hàng tại kho miễn phí 30 ngày",
      content: "Sau 30 ngày kể từ khi hàng về kho nội địa mà chưa nhận, phát sinh phí lưu kho 10.000đ/ngày/kiện.",
    },
    {
      icon:    "file-invoice",
      title:   "Thuế nhập khẩu & hải quan",
      content: "Mình khai báo hải quan trung thực. Mọi thuế nhập khẩu phát sinh (nếu có) do người mua chịu. Mình tư vấn cách tối ưu nhưng không chịu trách nhiệm pháp lý thay cho khách.",
    },
  ],

  /* ─── HÀNG CẤM ───────────────────────────────────────────── */
  forbidden: [
    "Thuốc / dược phẩm kê đơn",
    "Chất lỏng trên 500ml/kiện",
    "Hàng giả / nhái thương hiệu",
    "Vũ khí & phụ kiện nguy hiểm",
    "Thực phẩm tươi sống",
    "Pin lithium rời (>100Wh)",
    "Hàng cấm theo luật Việt Nam",
    "Thuốc lá / chất kích thích",
  ],

};
