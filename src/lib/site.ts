export const siteConfig = {
  brand: "Taxi Quảng Ngãi",
  /** Logo trong thư mục `public` (ví dụ file `public/logo.png` → `/logo.png`). */
  logoSrc: "/logo.png",
  siteUrl: "https://example.com",
  phoneE164: "+84905418433",
  phoneDisplay: "0905 418 433",
  zaloPhone: "0905418433",
  zaloUrl: "https://zalo.me/0905418433",
  facebookUrl: "https://www.facebook.com/khoa.mai.73345",
  address: "Miền Trung (Đà Nẵng - Quảng Ngãi - Bình Định)",
  defaultTitle: "Xe ghép Đà Nẵng - Quảng Ngãi - Bình Định | Giá rẻ, đón tận nơi",
  defaultDescription:
    "Xe ghép xuất phát Quảng Ngãi: Đà Nẵng ↔ Quảng Ngãi, Quảng Ngãi ↔ Bình Định và các tuyến liên quan. Giá mềm, đón tận nơi. Gọi hoặc nhắn Zalo để đặt xe.",
  defaultKeywords: [
    "xe ghép",
    "xe ghép đà nẵng quảng ngãi",
    "xe ghép quảng ngãi bình định",
    "taxi liên tỉnh",
    "taxi quảng ngãi",
    "đặt xe nhanh",
    "đón tận nơi",
    "giá rẻ",
  ],
  routes: [
    {
      slug: "xe-ghep-da-nang-quang-ngai",
      title: "Xe ghép Đà Nẵng ↔ Quảng Ngãi",
    },
    {
      slug: "xe-ghep-quang-ngai-binh-dinh",
      title: "Xe ghép Quảng Ngãi ↔ Bình Định",
    },
  ],
} as const;

