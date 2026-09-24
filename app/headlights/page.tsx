import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PhoneLink } from "@/components/PhoneLink";
import { ImageSlot } from "@/components/ImageSlot";
import { HeadlightBookButton } from "@/components/HeadlightBookButton";
import { HEADLIGHT_STANDALONE, HEADLIGHT_ADDON } from "@/lib/pricing";

const HEADLIGHT_PRICE = `$${HEADLIGHT_STANDALONE}`;
const HEADLIGHT_ADDON_PRICE = `$${HEADLIGHT_ADDON}`;
const HEADLIGHT_SAVINGS = HEADLIGHT_STANDALONE - HEADLIGHT_ADDON;
const REPLACEMENT_ANCHOR_PRICE = "$1,500";
const siteUrl = "https://threecrownsdetailing.com";

const reviews = [
  { name: "Cheryl L.", text: "The work is meticulous, and the wax has lasted over a month and still looks great. They listened and made it right without any hassle." },
  { name: "Luke K.", text: "They went above and beyond and paid attention to details most people would skip. The car looked absolutely amazing inside and out." },
  { name: "Jessica C.", text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless." },
];

const otherHeadlights = [
  {
    label: "Toyota Camry",
    before: "/images/headlight-restoration/camry-before-close.jpg",
    after: "/images/headlight-restoration/camry-after-close.jpg",
  },
  {
    label: "Toyota Tacoma",
    before: "/images/headlight-restoration/suv-before.jpg",
    after: "/images/headlight-restoration/suv-after.jpg",
  },
];

const faqs = [
  {
    q: "How much does headlight restoration cost?",
    a: `${HEADLIGHT_PRICE} per pair, any vehicle, at your location. No travel fee within our service area.`,
  },
  {
    q: "How long does headlight restoration last?",
    a: `Because we seal with 2K UV clear coat rather than a wipe-on sealant, it's built to last years rather than months. If they yellow within 12 months, I redo them free.`,
  },
  {
    q: "How long does it take?",
    a: "About an hour.",
  },
  {
    q: "Do I need to be home?",
    a: "Only to hand over keys if the car's locked. We bring our own water and power.",
  },
  {
    q: "Can you do it at the same time as a detail?",
    a: `Yes — and it's ${HEADLIGHT_ADDON_PRICE} instead of ${HEADLIGHT_PRICE} when it's added to any detail package, same visit.`,
  },
  {
    q: "My headlights are foggy on the inside. Can you fix that?",
    a: "No — internal moisture means the seal has failed and the headlight needs replacing. Send a photo and I'll tell you before booking.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Headlight Restoration",
  provider: {
    "@type": "LocalBusiness",
    name: "Three Crowns Detailing",
    url: siteUrl,
    telephone: "+18182967347",
  },
  areaServed: [
    { "@type": "City", name: "Glendale" },
    { "@type": "City", name: "Pasadena" },
    { "@type": "City", name: "Burbank" },
    { "@type": "City", name: "Altadena" },
    { "@type": "City", name: "La Cañada Flintridge" },
  ],
  offers: {
    "@type": "Offer",
    price: String(HEADLIGHT_STANDALONE),
    priceCurrency: "USD",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HeadlightRestorationPage() {
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
              Headlight Restoration
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-[54px] leading-[1.12] text-[#F2EFE6] mb-5 max-w-[560px]">
              Mobile Headlight Restoration in Glendale, Pasadena &amp; Burbank
            </h1>
            <p className="text-base md:text-[17px] leading-relaxed text-[#F2EFE6]/60 font-light mb-7 max-w-[480px]">
              Foggy, yellow headlights restored in your driveway — and sealed so they stay clear.
            </p>
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-[family-name:var(--font-playfair)] font-bold text-4xl md:text-[44px] text-[#E2C47A]">
                {HEADLIGHT_PRICE}
              </span>
              <span className="text-sm text-[#F2EFE6]/40 tracking-wide">per pair · all vehicles</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <HeadlightBookButton className="bg-gold! text-black! px-7 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300" />
              <PhoneLink className="flex items-center justify-center min-h-11 border border-[#F2EFE6]/25 text-[#F2EFE6]/80 px-7 py-3 tracking-[2px] text-xs font-medium hover:border-[#F2EFE6]/50 hover:text-[#F2EFE6] transition-all duration-300 rounded-md">
                Call or text (818) 296-7347
              </PhoneLink>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold text-center font-semibold">Before</p>
              <ImageSlot
                src="/images/headlight-restoration/before.jpg"
                alt="Foggy, yellowed headlight before restoration"
                ratio="4:3"
                priority
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] tracking-[0.22em] uppercase text-gold text-center font-semibold">After</p>
              <ImageSlot
                src="/images/headlight-restoration/after.jpg"
                alt="Clear, restored headlight after restoration"
                ratio="4:3"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS HAPPENS FASTER HERE / WHY HEADLIGHTS GO YELLOW ── */}
      <section className="py-20 px-6 md:px-20 bg-[#12261D]">
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start mb-16">
            <div>
              <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">
                Why This Happens Faster Here
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] font-bold text-2xl md:text-[34px] leading-[1.2] text-[#F2EFE6]">
                Southern California sun accelerates it
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
              <p>
                Glendale, Pasadena, and Burbank see well over 250 sunny days a year, and that constant UV exposure breaks down the factory coating faster than in most of the country. Once it&apos;s gone, freeway grit and brake dust from the 5, 134, and 210 sandblast the bare plastic, which speeds up the yellowing further.
              </p>
              <p className="bg-gold/[0.08] border-l-2 border-gold rounded-r-md px-6 py-5 text-[#F2EFE6]/80">
                AAA laboratory testing found that degraded headlights can put out as little as 22% of a new headlight&apos;s light on low beam — roughly an <span className="text-[#E2C47A] font-medium">80% loss in forward visibility</span> at night. Deterioration can start in as little as three to five years.
              </p>
            </div>
          </div>

          <div className="max-w-[720px]">
            <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">
              Why Headlights Go Yellow
            </p>
            <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl md:text-2xl text-[#F2EFE6] mb-5">
              It&apos;s not dirt. It&apos;s the factory coating failing.
            </h3>
            <div className="flex flex-col gap-5 text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
              <p>
                Headlight lenses are plastic, protected from the factory by a thin UV coating. The sun breaks that coating down over a few years. Once it&apos;s gone, the plastic itself starts to oxidize — that&apos;s the cloudy, yellow haze you see.
              </p>
              <p>
                Cloudy headlights don&apos;t just look tired. They scatter light instead of projecting it, so less of it reaches the road at night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">The Difference</p>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl md:text-[36px] leading-[1.25] text-[#F2EFE6] mb-5">
            Why most headlight restorations turn yellow again in months
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
            Most quick fixes wipe a light polish over the haze and finish with a thin, wipe-on sealant. It looks great that day. But that thin layer isn&apos;t the same category of protection the factory coating provided — it breaks down fast, and the bare plastic underneath starts yellowing again almost immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="bg-gradient-to-b from-[#173026] to-[#12261D] border border-[#F2EFE6]/10 rounded-xl p-9">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#F2EFE6]/40 font-semibold mb-5">
              Quick Polish Kits
            </p>
            <div className="flex flex-col gap-4 text-sm text-[#F2EFE6]/55 font-light leading-relaxed">
              <p>Wipes or a light polish knocks the haze back</p>
              <p>A thin wipe-on sealant</p>
              <p className="text-[#F2EFE6]/80 font-medium">Yellows again in months</p>
            </div>
          </div>
          <div className="relative bg-gradient-to-b from-[#173026] to-[#12261D] border border-gold rounded-xl p-9">
            <span className="absolute -top-3.5 right-8 bg-gold text-[#0B1410] text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded">
              Three Crowns
            </span>
            <p className="text-[11px] tracking-[0.18em] uppercase text-gold font-semibold mb-5">Our Process</p>
            <div className="flex flex-col gap-4 text-sm text-[#F2EFE6]/85 font-light leading-relaxed">
              <p>Wet-sand the failed coating off completely, down to fresh plastic</p>
              <p>A catalyzed 2K clear coat — the same category of coating the factory used, not a wipe</p>
              <p className="text-[#E2C47A] font-semibold">
                Built to last years, not months. If they yellow within 12 months, I redo them free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESTORE, DON'T REPLACE ── */}
      <section className="py-20 px-6 md:px-20 bg-[#12261D]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">Restore, Don&apos;t Replace</p>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-2xl md:text-[32px] leading-[1.25] text-[#F2EFE6] mb-5">
            A new headlight assembly costs 5 to 10 times more than restoring one
          </h2>
          <p className="text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light max-w-[680px] mx-auto mb-11">
            Once a headlight lens is too far gone to restore — cracked, or fogged with moisture inside the housing — the only fix is a full replacement assembly. Depending on the vehicle, that typically runs $500 to $1,500+ per side installed, more on luxury and European models. Restoration costs a fraction of that and takes about an hour in your driveway.
          </p>
          <div className="flex justify-center gap-10 md:gap-14">
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-[30px] font-bold text-[#F2EFE6]/40 line-through decoration-[#F2EFE6]/30">
                {REPLACEMENT_ANCHOR_PRICE}
              </p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-[#F2EFE6]/40 mt-2">Dealer Replacement</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-[30px] font-bold text-[#E2C47A]">
                {HEADLIGHT_PRICE}
              </p>
              <p className="text-[11px] tracking-[0.1em] uppercase text-gold mt-2">Restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="max-w-[620px] mx-auto text-center">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-5">Pricing</p>
          <p className="font-[family-name:var(--font-playfair)] font-bold text-5xl md:text-[64px] text-[#E2C47A] leading-none">
            {HEADLIGHT_PRICE}
          </p>
          <p className="text-sm text-[#F2EFE6]/50 tracking-wide mt-3 mb-8">per pair · any vehicle · at your location</p>

          <p className="text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light max-w-[480px] mx-auto mb-8">
            Includes masking, wet sanding, and a 2K UV clear coat seal — plus a vehicle health check.
          </p>

          <div className="bg-gold/[0.08] border border-gold/25 rounded-lg px-7 py-5 text-sm text-[#F2EFE6]/85 leading-relaxed">
            Already booking a detail? Add headlight restoration for{" "}
            <span className="text-[#E2C47A] font-semibold">{HEADLIGHT_ADDON_PRICE}</span> — you save{" "}
            <span className="text-[#E2C47A] font-semibold">${HEADLIGHT_SAVINGS}</span> versus booking it separately.
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-9">
            <HeadlightBookButton className="bg-gold! text-black! px-7 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300" />
            <Button
              asChild
              className="bg-transparent! border border-[#F2EFE6]/25! text-[#F2EFE6]/80! px-7 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-medium hover:border-[#F2EFE6]/50! hover:text-[#F2EFE6]! transition-all duration-300"
            >
              <Link href="/services">See detail packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HONEST LIMITS ── */}
      <section className="py-16 px-6 md:px-20 bg-[#12261D]">
        <div className="max-w-[720px] mx-auto text-center">
          <h3 className="font-[family-name:var(--font-playfair)] font-bold text-xl md:text-2xl text-[#F2EFE6] mb-4">
            When restoration isn&apos;t the answer
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-[#F2EFE6]/60 font-light">
            If there&apos;s moisture or fog on the inside of the lens, or the housing is cracked, restoration can&apos;t fix it — that needs a new headlight. Send a photo when you book and I&apos;ll tell you honestly before I drive out.
          </p>
        </div>
      </section>

      {/* ── OTHER HEADLIGHTS WE'VE DONE ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="text-center max-w-[720px] mx-auto mb-14">
          <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-4">More Results</p>
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl md:text-[36px] leading-[1.25] text-[#F2EFE6]">
            Other headlights we&apos;ve done
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {otherHeadlights.map((item) => (
            <div
              key={item.label}
              className="bg-gradient-to-b from-[#173026] to-[#12261D] border border-[#F2EFE6]/10 rounded-xl p-6"
            >
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-gold text-center font-semibold">Before</p>
                  <ImageSlot
                    src={item.before}
                    alt={`${item.label} headlight before restoration`}
                    ratio="4:3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-gold text-center font-semibold">After</p>
                  <ImageSlot
                    src={item.after}
                    alt={`${item.label} headlight after restoration`}
                    ratio="4:3"
                  />
                </div>
              </div>
              <p className="text-sm text-[#F2EFE6]/60 text-center">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="text-xs tracking-[0.2em] uppercase text-gold/70 hover:text-gold transition-colors"
          >
            See more of our work →
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-3">What clients say</p>
            <h2 className="font-[family-name:var(--font-playfair)] font-bold text-2xl md:text-3xl text-[#F2EFE6]">
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
            <div key={r.name} className="bg-gradient-to-b from-[#173026] to-[#12261D] border border-[#F2EFE6]/10 rounded-xl px-6 py-6">
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
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-20 max-w-[800px] mx-auto w-full">
        <p className="text-xs tracking-[0.26em] uppercase text-gold font-medium mb-11 text-center">Questions</p>

        <div className="bg-[#12261D] rounded-xl overflow-hidden border border-[#F2EFE6]/10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
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
            static markup — matches the FAQPage JSON-LD below. */}
        <dl className="sr-only">
          {faqs.map((faq) => (
            <div key={faq.q}>
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-[#173026]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] font-bold text-3xl md:text-[38px] text-[#F2EFE6] mb-9">
            Clear headlights, handled.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HeadlightBookButton className="bg-gold! text-black! px-10 py-3 h-auto! min-h-11 tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all" />
            <PhoneLink className="flex items-center justify-center min-h-11 border border-gold/40 text-gold px-10 py-3 tracking-[2px] text-xs font-semibold hover:border-gold hover:bg-gold/5 transition-all rounded-md">
              Call or text (818) 296-7347
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
