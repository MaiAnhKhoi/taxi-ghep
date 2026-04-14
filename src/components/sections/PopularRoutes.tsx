import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const routes = [
  {
    title: "Xe ghép Đà Nẵng ↔ Quảng Ngãi",
    desc: "Đi công tác/về quê, đón tận nơi, giá rõ ràng.",
    href: "/xe-ghep-da-nang-quang-ngai",
  },
  {
    title: "Xe ghép Quảng Ngãi ↔ Bình Định",
    desc: "Đi Quy Nhơn linh hoạt, xác nhận nhanh.",
    href: "/xe-ghep-quang-ngai-binh-dinh",
  },
  {
    title: "Taxi Quảng Ngãi nội thành",
    desc: "Đưa đón nhanh, hỗ trợ 24/7 theo lịch.",
    href: "/#dat-xe",
  },
] as const;

export function PopularRoutes() {
  return (
    <section id="tuyen-duong-pho-bien" className="bg-transparent py-14 sm:py-18">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="hero-text-shadow text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Tuyến đường phổ biến
          </h2>
          <p className="hero-subtext-shadow mt-3 text-sm leading-6 text-white/85 sm:text-base">
            Tối ưu theo nhu cầu thực tế. Bấm vào tuyến để xem chi tiết và đặt xe nhanh.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {routes.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              className="group rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:bg-white/15"
            >
              <div className="text-sm font-semibold text-white/75">{siteConfig.brand}</div>
              <div className="mt-1 text-lg font-extrabold text-white">{r.title}</div>
              <p className="mt-2 text-sm leading-6 text-white/80">{r.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[var(--brand-accent)]">
                Xem chi tiết <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

