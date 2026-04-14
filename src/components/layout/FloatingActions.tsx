"use client";

import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "@/lib/site";

function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function FloatingActions() {
  const telHref = useMemo(() => `tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`, []);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Right-side quick actions (desktop/tablet) */}
      <div
        className={cn(
          "fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 sm:flex",
          show ? "opacity-100" : "opacity-95",
        )}
        aria-label="Liên hệ nhanh"
      >
        <a
          href={telHref}
          className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cta)] text-white shadow-[0_16px_40px_-18px_rgba(34,197,94,0.6)] ring-1 ring-black/5 hover:brightness-[1.03] active:brightness-[0.98]"
          aria-label={`Gọi ${siteConfig.phoneDisplay}`}
        >
          <span className="text-sm font-extrabold">📞</span>
          <span className="sr-only">Gọi {siteConfig.phoneDisplay}</span>
        </a>

        <a
          href={siteConfig.zaloUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--cta)] text-white shadow-[0_16px_40px_-18px_rgba(34,197,94,0.6)] ring-1 ring-black/5 hover:brightness-[1.03] active:brightness-[0.98]"
          aria-label="Nhắn Zalo"
        >
          Z
        </a>

        <a
          href={siteConfig.facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white shadow-[0_16px_40px_-18px_rgba(30,64,175,0.55)] ring-1 ring-black/5 hover:brightness-[1.03] active:brightness-[0.98]"
          aria-label="Facebook"
        >
          f
        </a>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 px-3 py-3">
          <a
            href={telHref}
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--cta)] font-extrabold text-white"
          >
            Gọi ngay
          </a>
          <a
            href={siteConfig.zaloUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--cta)] font-extrabold text-white"
          >
            Zalo
          </a>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)] font-extrabold text-white"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}

