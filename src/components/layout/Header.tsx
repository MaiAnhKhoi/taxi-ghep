import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900">
          <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/90">
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.brand}
              width={36}
              height={36}
              className="object-contain"
              priority
            />
          </span>
          <span className="hidden sm:inline">{siteConfig.brand}</span>
          <span className="sm:hidden">Taxi</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <Link className="hover:text-[color:var(--brand-primary)]" href="/#bang-gia">
            Bảng giá
          </Link>
          <Link className="hover:text-[color:var(--brand-primary)]" href="/#ly-do">
            Lý do chọn
          </Link>
          <Link className="hover:text-[color:var(--brand-primary)]" href="/#danh-gia">
            Đánh giá
          </Link>
          <Link className="hover:text-[color:var(--brand-primary)]" href="/#dat-xe">
            Đặt xe
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, "")}`}
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Gọi {siteConfig.phoneDisplay}
          </ButtonLink>
          <ButtonLink href="/#dat-xe" variant="primary" size="sm">
            Đặt xe
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}

