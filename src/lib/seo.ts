import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type RouteSeoInput = {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImagePath?: string;
};

export function buildRouteMetadata(input: RouteSeoInput): Metadata {
  const urlPath = `/${input.slug}`.replace(/\/+/g, "/");
  const keywords = input.keywords?.length ? [...input.keywords] : [...siteConfig.defaultKeywords];

  return {
    title: input.title,
    description: input.description,
    keywords,
    alternates: { canonical: urlPath },
    openGraph: {
      type: "website",
      locale: "vi_VN",
      url: urlPath,
      siteName: siteConfig.brand,
      title: input.title,
      description: input.description,
      images: input.ogImagePath
        ? [{ url: input.ogImagePath, width: 1200, height: 630, alt: input.title }]
        : undefined,
    },
  };
}

export function buildLocalBusinessJsonLd(routeUrlPath = "/") {
  const url = new URL(routeUrlPath, siteConfig.siteUrl).toString();

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand,
    url,
    telephone: siteConfig.phoneE164,
    areaServed: ["miền Trung", "Đà Nẵng", "Quảng Ngãi", "Bình Định"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: siteConfig.address,
    },
    sameAs: [siteConfig.zaloUrl],
  };
}

type FaqItem = { question: string; answer: string };

export function buildFaqJsonLd(items: FaqItem[], routeUrlPath = "/") {
  const url = new URL(routeUrlPath, siteConfig.siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((x) => ({
      "@type": "Question",
      name: x.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: x.answer,
      },
    })),
    url,
  };
}

