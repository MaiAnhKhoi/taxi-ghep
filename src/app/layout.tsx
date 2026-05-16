import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import { buildLocalBusinessJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { GlobalVideoBackground } from "@/components/layout/GlobalVideoBackground";

const beVietnam = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.defaultDescription,
  keywords: [...siteConfig.defaultKeywords],
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: siteConfig.logoSrc, type: "image/png" }],
    apple: siteConfig.logoSrc,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "/",
    siteName: siteConfig.brand,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} h-full antialiased`}>
      <body className="min-h-full bg-transparent font-sans text-[color:var(--text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLocalBusinessJsonLd("/")) }}
        />
        <GlobalVideoBackground src="/models/158316-816359649_medium.mp4" />
        <div className="relative z-10">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </div>
      </body>
    </html>
  );
}

