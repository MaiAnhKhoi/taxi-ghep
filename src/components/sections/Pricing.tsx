import Link from "next/link";
import { Container } from "@/components/ui/Container";

const pricing = [
  {
    route: "Đà Nẵng ↔ Quảng Ngãi",
    price: "Từ 350.000đ",
    note: "Đón tận nơi nội thành, có thể phụ thu xa.",
    href: "/xe-ghep-da-nang-quang-ngai",
  },
  {
    route: "Quảng Ngãi ↔ Bình Định",
    price: "Từ 300.000đ",
    note: "Chuyến linh hoạt theo giờ, xác nhận nhanh.",
    href: "/xe-ghep-quang-ngai-binh-dinh",
  },
  {
    route: "Đà Nẵng ↔ Bình Định",
    price: "Từ 650.000đ",
    note: "Đi thẳng, tiết kiệm thời gian (đặt trước).",
    href: "/#dat-xe",
  },
] as const;

export function Pricing() {
  return (
    <section id="bang-gia" className="bg-white/80 py-16 backdrop-blur-sm sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Bảng giá minh bạch</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Giá tham khảo theo tuyến. Gọi/Zalo để chốt giá chính xác theo điểm đón – trả và số khách.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pricing.map((p) => (
            <Link
              key={p.route}
              href={p.href}
              className="group rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="text-sm font-semibold text-slate-600">Tuyến</div>
              <div className="mt-1 text-xl font-extrabold text-slate-900">{p.route}</div>
              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
                <div className="text-xs text-slate-600">Giá</div>
                <div className="mt-1 text-2xl font-extrabold text-[var(--brand-accent)]">{p.price}</div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{p.note}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[color:var(--brand-primary)]">
                Xem chi tiết <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

