import { Container } from "@/components/ui/Container";

const items = [
  {
    title: "Đón tận nơi – trả tận nơi",
    desc: "Tài xế đến đúng điểm hẹn. Không phải ra bến, không phải chờ lâu.",
  },
  {
    title: "Giá rõ ràng, không phát sinh",
    desc: "Báo giá trước khi chạy. Minh bạch phụ phí (nếu có) với điểm xa.",
  },
  {
    title: "An toàn & đúng giờ",
    desc: "Lái xe kinh nghiệm tuyến miền Trung, ưu tiên an toàn và lịch trình.",
  },
  {
    title: "Hỗ trợ nhanh qua Zalo",
    desc: "Gửi vị trí, giờ đón, số khách. Xác nhận chuyến ngay khi nhận tin.",
  },
] as const;

function Icon({ name }: { name: "pin" | "shield" | "wallet" | "chat" }) {
  const common = "h-5 w-5 text-[color:var(--brand-primary)]";
  switch (name) {
    case "pin":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 10.5a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "wallet":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M4 7.5A3.5 3.5 0 017.5 4H20v16H7.5A3.5 3.5 0 014 16.5v-9z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M20 9h-5a2 2 0 000 4h5V9z" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V7l7-4z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case "chat":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12a8 8 0 01-8 8H7l-4 2 1.6-4.8A8 8 0 113 12a8 8 0 0118 0z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
  }
}

const icons: Array<"pin" | "wallet" | "shield" | "chat"> = ["pin", "wallet", "shield", "chat"];

export function WhyChooseUs() {
  return (
    <section id="ly-do" className="bg-white/80 py-16 backdrop-blur-sm sm:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Lý do khách chọn xe ghép của chúng tôi
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Tối ưu trải nghiệm đặt xe: nhanh – rõ ràng – tiện. Bạn chỉ cần cung cấp điểm đón/trả, giờ đi và số khách.
              Phần còn lại để chúng tôi lo.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it, idx) => (
              <div
                key={it.title}
                className="rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-sm transition hover:shadow-lg"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--bg-muted)] ring-1 ring-slate-200">
                  <Icon name={icons[idx] ?? "pin"} />
                </div>
                <div className="mt-3 text-base font-extrabold text-slate-900">{it.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-600">{it.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

