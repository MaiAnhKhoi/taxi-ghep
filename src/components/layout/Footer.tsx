import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-900">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <div className="text-lg font-bold">{siteConfig.brand}</div>
          <p className="text-sm text-slate-600">
            Xe ghép tuyến miền Trung: đón tận nơi, chạy liên tục, giá rõ ràng. Ưu tiên an toàn – đúng giờ – phục vụ
            24/7 theo lịch.
          </p>
          <div className="pt-2 text-sm text-slate-600">
            Facebook:{" "}
            <a
              className="font-bold text-[color:var(--brand-primary)] hover:underline"
              href={siteConfig.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Xem trang
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold text-slate-900">Tuyến phổ biến</div>
          <ul className="space-y-2 text-sm text-slate-600">
            {siteConfig.routes.map((r) => (
              <li key={r.slug}>
                <Link className="hover:text-[color:var(--brand-primary)]" href={`/${r.slug}`}>
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-bold text-slate-900">Liên hệ nhanh</div>
          <div className="text-sm text-slate-600">
            <div>
              Điện thoại:{" "}
              <a
                className="font-bold text-[color:var(--brand-primary)] hover:underline"
                href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div>
              Zalo:{" "}
              <a
                className="font-bold text-[color:var(--brand-primary)] hover:underline"
                href={siteConfig.zaloUrl}
                target="_blank"
                rel="noreferrer"
              >
                Nhắn ngay
              </a>
            </div>
            <div className="pt-2 text-xs text-slate-500">{siteConfig.address}</div>
          </div>
        </div>
      </Container>

      <div className="border-t border-slate-200">
        <Container className="py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </Container>
      </div>
    </footer>
  );
}

