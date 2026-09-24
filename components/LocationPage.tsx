import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneLink } from "@/components/PhoneLink";
import { ImageSlot } from "@/components/ImageSlot";
import { formatPrice } from "@/lib/pricing";
import { locations, type Location } from "@/lib/locations";

const siteUrl = "https://threecrownsdetailing.com";

const allReviews = [
  { name: "Cheryl L.", text: "The work is meticulous, and the wax has lasted over a month and still looks great. They listened and made it right without any hassle." },
  { name: "Jessica C.", text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless. You can tell they take pride in their work." },
  { name: "Luke K.", text: "They went above and beyond what was required and paid attention to details most people would skip. The car looked absolutely amazing when they were done, inside and out." },
  { name: "Haroutyun S.", text: "JP was professional and did a great job. He was kind enough to come out within an hour of my call. I would definitely recommend him to others." },
];

const packages = [
  { key: "prince" as const, name: "Prince" },
  { key: "king" as const, name: "King" },
  { key: "queen" as const, name: "Queen" },
];

export function LocationPage({ location }: { location: Location }) {
  const bookHref = `/book?city=${location.slug}`;
  const otherLocations = locations.filter((l) => l.slug !== location.slug);
  const reviewOffset = locations.findIndex((l) => l.slug === location.slug);
  const reviews = [0, 1, 2].map((i) => allReviews[(reviewOffset + i) % allReviews.length]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Car Detailing",
    provider: {
      "@type": "LocalBusiness",
      name: "Three Crowns Detailing",
      url: siteUrl,
      telephone: "+18182967347",
    },
    areaServed: { "@type": "City", name: location.city },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.28em] font-medium mb-5 uppercase">
              {location.city}, CA
            </p>
            <h1 className="font-['Cormorant_Garamond',serif] font-bold text-4xl md:text-[54px] leading-[1.12] text-[#F2EFE6] mb-5 max-w-[560px]">
              {location.heading}
            </h1>
            <p className="text-base md:text-[17px] leading-relaxed text-[#F2EFE6]/60 font-light mb-7 max-w-[480px]">
              {location.subhead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                asChild
                className="bg-gold! text-black! px-7 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
              >
                <Link href={bookHref}>Book Your {location.city} Detail →</Link>
              </Button>
              <PhoneLink className="flex items-center justify-center min-h-11 border border-[#F2EFE6]/25 text-[#F2EFE6]/80 px-7 py-3 tracking-[2px] text-xs font-medium hover:border-[#F2EFE6]/50 hover:text-[#F2EFE6] transition-all duration-300 rounded-md">
                Call or text (818) 296-7347
              </PhoneLink>
            </div>
            <div className="flex items-center gap-2 text-white/35 text-xs tracking-wide">
              <MapPin size={13} className="text-gold/60" />
              Serving {location.servingAreas}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <ImageSlot
              src={location.heroImages[0].src}
              alt={location.heroImages[0].alt}
              ratio="4:3"
              priority
            />
            <ImageSlot
              src={location.heroImages[1].src}
              alt={location.heroImages[1].alt}
              ratio="4:3"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── BODY COPY (SEO) ── */}
      <section className="py-12 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="max-w-[720px] space-y-5 text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
          {location.bodyIntro.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="text-[#F2EFE6]/40 text-sm">
            If you&apos;re in the {location.zipCodes} zip codes, we&apos;re already working in your area.
          </p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-20 px-6 md:px-20 bg-[#12261D]">
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">
            What We Offer in {location.city}
          </p>
          <h2 className="font-['Cormorant_Garamond',serif] font-bold text-3xl md:text-[36px] leading-[1.25] text-[#F2EFE6] mb-12 max-w-[720px]">
            Detailing packages, on-site.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {packages.map((pkg) => (
              <div
                key={pkg.key}
                className="bg-gradient-to-b from-[#173026] to-[#12261D] border border-[#F2EFE6]/10 rounded-xl p-7"
              >
                <p className="font-['Cormorant_Garamond',serif] font-bold text-xl text-gold mb-1">
                  {pkg.name} Detail
                </p>
                <p className="text-gold/60 text-xs mb-4">
                  from {formatPrice(pkg.key, "t1")}
                </p>
                <p className="text-sm text-[#F2EFE6]/55 leading-relaxed font-light">
                  {location.packageBlurbs[pkg.key]}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
            >
              See full pricing by vehicle type →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY THIS CITY ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">
              Why {location.city} Clients Choose Three Crowns
            </p>
            <h2 className="font-['Cormorant_Garamond',serif] font-bold text-2xl md:text-[34px] leading-[1.2] text-[#F2EFE6]">
              Book it. Stop thinking about it.
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
            {location.whyParagraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="bg-gold/[0.08] border-l-2 border-gold rounded-r-md px-6 py-5 text-[#F2EFE6]/80">
              {location.statHighlight}
            </p>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 px-6 md:px-20 bg-[#12261D]">
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-3">What clients say</p>
              <h2 className="font-['Cormorant_Garamond',serif] font-bold text-2xl md:text-3xl text-[#F2EFE6]">
                40 five-star reviews.
              </h2>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-gold fill-gold" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gradient-to-b from-[#173026] to-[#0e2218] border border-[#F2EFE6]/10 rounded-xl px-6 py-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-sm text-[#F2EFE6]/55 leading-relaxed font-light mb-4">{r.text}</p>
                <p className="text-xs text-[#F2EFE6]/40 tracking-wide">{r.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?q=Three+Crowns+Detailing&kgmid=/g/11ysl2zrrr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
            >
              See all 40 reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-20 max-w-[800px] mx-auto w-full">
        <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-11 text-center">Questions</p>

        <div className="bg-[#12261D] rounded-xl overflow-hidden border border-[#F2EFE6]/10">
          <Accordion type="single" collapsible className="w-full">
            {location.faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="border-b border-[#F2EFE6]/10 last:border-b-0 px-7"
              >
                <AccordionTrigger className="text-[15px] md:text-base font-medium text-[#F2EFE6] hover:no-underline hover:text-gold py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#F2EFE6]/55 leading-relaxed font-light">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Radix Accordion doesn't render collapsed panel content into the
            initial HTML, so the FAQ answers above are invisible to a plain
            fetch/crawl until JS hydrates. Mirror the same text here as real,
            static markup — matches the FAQPage JSON-LD above. */}
        <dl className="sr-only">
          {location.faqs.map((faq) => (
            <div key={faq.q}>
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── ALSO SERVING ── */}
      <section className="pb-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-3">Also Serving</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {otherLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/${loc.slug}`}
              className="text-sm text-[#F2EFE6]/50 hover:text-gold transition-all"
            >
              Mobile Detailing in {loc.city} →
            </Link>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-[#173026]">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">
            Book Mobile Detailing in {location.city}
          </p>
          <h2 className="font-['Cormorant_Garamond',serif] font-bold text-3xl md:text-[38px] text-[#F2EFE6] mb-9">
            Ready to get your car handled?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold! text-black! px-10 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
            >
              <Link href={bookHref}>Book Your {location.city} Detail →</Link>
            </Button>
            <PhoneLink className="flex items-center justify-center min-h-11 border border-gold/40 text-gold px-10 py-3 tracking-[2px] text-xs font-semibold hover:border-gold hover:bg-gold/5 transition-all rounded-md">
              Call or text (818) 296-7347
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
