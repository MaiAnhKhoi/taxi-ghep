import { Hero } from "@/components/hero/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Reviews } from "@/components/sections/Reviews";
import { BookingForm } from "@/components/sections/BookingForm";
import { Services } from "@/components/sections/Services";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { PopularRoutes } from "@/components/sections/PopularRoutes";
import { Introduction } from "@/components/sections/Introduction";
import { FAQ, faqItems } from "@/components/sections/FAQ";
import { buildFaqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd([...faqItems], "/")) }}
      />
      <Hero />
      <Pricing />
      <WhyChooseUs />
      <Services />
      <ServiceArea />
      <PopularRoutes />
      <Introduction />
      <FAQ />
      <Reviews />
      <BookingForm />
    </>
  );
}

