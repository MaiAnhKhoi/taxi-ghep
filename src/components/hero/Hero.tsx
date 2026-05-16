"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const telHref = `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`;

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 z-[10]"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,64,175,0.75) 0%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.65) 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 z-[10] h-[60%] bg-gradient-to-t from-[color:var(--overlay)] via-black/25 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-20 flex min-h-[100svh] items-center pt-16 sm:pt-20">
        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur"
          >
            Đón tận nơi • Chạy liên tục • Hỗ trợ 24/7
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="hero-text-shadow text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"
          >
            Xe ghép Đà Nẵng - Quảng Ngãi - Bình Định
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="hero-subtext-shadow mx-auto mt-4 max-w-3xl text-pretty text-sm leading-6 text-white/95 sm:mt-5 sm:text-lg sm:leading-7"
          >
            Giá rẻ - Đón tận nơi - Chạy liên tục. Xác nhận chuyến nhanh, lộ trình rõ ràng. Ưu tiên đúng giờ và an toàn.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 grid max-w-3xl gap-3 sm:grid-cols-3"
          >
            {[
              { k: "Giá minh bạch", v: "Báo trước khi đón" },
              { k: "Đón tận nơi", v: "Không cần ra bến" },
              { k: "Hỗ trợ nhanh", v: "Gọi/Zalo xác nhận liền" },
            ].map((x) => (
              <div
                key={x.k}
                className="rounded-3xl border border-white/15 bg-white/10 px-5 py-4 text-center backdrop-blur"
              >
                <div className="text-sm font-extrabold text-white">{x.k}</div>
                <div className="mt-1 text-xs text-white/70">{x.v}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={telHref}
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[var(--cta)] px-6 text-base font-extrabold text-white shadow-[0_12px_30px_-18px_rgba(34,197,94,0.65)] hover:brightness-[1.02] active:brightness-[0.98] sm:w-auto"
            >
              📞 Gọi ngay
            </a>
            <ButtonLink
              href={siteConfig.zaloUrl}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              💬 Zalo
            </ButtonLink>
            <ButtonLink href="/#dat-xe" variant="primary" size="lg" className="w-full sm:w-auto">
              Đặt xe
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-white/65"
          >
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Không ghép khách lung tung</span>
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Giá rõ ràng</span>
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10">Đón đúng hẹn</span>
            <span className="hidden rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/10 sm:inline-flex">
              Đúng giờ
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

