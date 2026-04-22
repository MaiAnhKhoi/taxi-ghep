"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

const routes = [
  "Quảng Ngãi ↔ Đà Nẵng",
  "Quảng Ngãi ↔ Quy Nhơn",
  "Quảng Ngãi ↔ Măng Đen",
  "Đà Nẵng ↔ Măng Đen",
  "Khác (ghi chú thêm)",
] as const;

export function BookingForm({ defaultRoute }: { defaultRoute?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [route, setRoute] = useState(defaultRoute || routes[0]);
  const [note, setNote] = useState("");

  const telHref = useMemo(() => `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`, []);

  const zaloText = useMemo(() => {
    const lines = [
      "Đặt xe ghép:",
      `- Họ tên: ${name || "(chưa nhập)"}`,
      `- SĐT: ${phone || "(chưa nhập)"}`,
      `- Tuyến: ${route}`,
      note ? `- Ghi chú: ${note}` : "",
    ].filter(Boolean);
    return encodeURIComponent(lines.join("\n"));
  }, [name, phone, route, note]);

  const zaloHref = `${siteConfig.zaloUrl}?text=${zaloText}`;

  return (
    <section id="dat-xe" className="bg-white/80 py-16 backdrop-blur-sm sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Đặt xe nhanh trong 30 giây</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base">
              Điền thông tin cơ bản để chúng tôi xác nhận ngay. Ưu tiên gọi điện nếu bạn cần xe gấp.
            </p>
            <div className="mt-6 space-y-3 rounded-3xl border border-slate-200 bg-white/70 p-6">
              <div className="text-sm text-slate-700">
                Hotline:{" "}
                <a className="font-extrabold text-[color:var(--brand-primary)] hover:underline" href={telHref}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="text-sm text-slate-700">
                Zalo:{" "}
                <a
                  className="font-extrabold text-[color:var(--brand-primary)] hover:underline"
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Nhắn ngay
                </a>
              </div>
              <div className="text-xs text-slate-500">Mẹo: gửi kèm vị trí GPS để tài xế đón chuẩn.</div>
            </div>
          </div>

          <form
            className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm"
            onSubmit={(e) => {
              e.preventDefault();
              window.open(zaloHref, "_blank", "noopener,noreferrer");
            }}
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-bold text-slate-900">Họ tên</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]/30"
                  placeholder="VD: Nguyễn Văn A"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-900">Số điện thoại</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]/30"
                  placeholder="VD: 09xx xxx xxx"
                  inputMode="tel"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="text-sm font-bold text-slate-900">Tuyến</label>
                <select
                  value={route}
                  onChange={(e) => setRoute(e.target.value)}
                  className="mt-2 h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]/30"
                >
                  {routes.map((r) => (
                    <option key={r} value={r} className="bg-white">
                      {r}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-900">Ghi chú (tuỳ chọn)</label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="mt-2 min-h-24 w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand-primary)]/30"
                  placeholder="Điểm đón/trả, giờ đi, số khách…"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={siteConfig.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--cta)] px-6 text-base font-extrabold text-white shadow-[0_12px_30px_-18px_rgba(34,197,94,0.65)]"
                >
                  💬 Gửi Zalo
                </a>
                <a
                  href={telHref}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[var(--cta)] px-6 text-base font-extrabold text-white shadow-[0_12px_30px_-18px_rgba(34,197,94,0.65)]"
                >
                  📞 Gọi ngay
                </a>
              </div>
              <p className="text-xs leading-5 text-slate-500">
                Bằng cách gửi thông tin, bạn đồng ý để chúng tôi liên hệ xác nhận chuyến. Thông tin chỉ dùng cho mục đích
                đặt xe.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

