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
import { HEADLIGHT_STANDALONE, HEADLIGHT_ADDON } from "@/lib/pricing";

const HEADLIGHT_PRICE = `$${HEADLIGHT_STANDALONE}`;
const HEADLIGHT_ADDON_PRICE = `$${HEADLIGHT_ADDON}`;
const REPLACEMENT_ANCHOR_PRICE = "$1,500";
const siteUrl = "https://threecrownsdetailing.com";

const reviews = [
  { name: "Cheryl L.", text: "The work is meticulous, and the wax has lasted over a month and still looks great. They listened and made it right without any hassle." },
  { name: "Luke K.", text: "They went above and beyond and paid attention to details most people would skip. The car looked absolutely amazing inside and out." },
  { name: "Jessica C.", text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless." },
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
      <section className="pt-[140px] pb-12 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-gold text-xs tracking-[6px] font-medium mb-4 uppercase opacity-80">
            Headlight Restoration
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-[1.1] mb-4">
            Mobile Headlight Restoration in Glendale, Pasadena & Burbank
          </h1>
          <h2 className="text-lg md:text-xl font-light opacity-60 mb-6 max-w-[520px] mx-auto">
            Foggy, yellow headlights restored in your driveway — and sealed so they stay clear.
          </h2>
          <p className="text-gold text-2xl font-light mb-8">
            {HEADLIGHT_PRICE} per pair <span className="text-sm opacity-60">· all vehicles</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
            >
              <Link href="/book?package=Headlights">Book Headlight Restoration</Link>
            </Button>
            <PhoneLink className="flex items-center justify-center border border-white/25 text-white/80 px-7 py-2.5 tracking-[2px] text-xs font-medium hover:border-white/50 hover:text-white transition-all duration-300 rounded">
              Call or text (818) 296-7347
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER ── */}
      <section className="pb-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1040px] mx-auto">
          <div>
            <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">Before</p>
            <ImageSlot
              src="/images/headlight-restoration/before.jpg"
              alt="Foggy, yellowed headlight before restoration"
              ratio="4:3"
              priority
            />
          </div>
          <div>
            <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">After</p>
            <ImageSlot
              src="/images/headlight-restoration/after.jpg"
              alt="Clear, restored headlight after restoration"
              ratio="4:3"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── RESTORE, DON'T REPLACE ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Restore, Don&apos;t Replace</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-[720px]">
            A new headlight assembly costs 5 to 10 times more than restoring one
          </h2>
          <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed mb-10">
            <p>
              Once a headlight lens is too far gone to restore — cracked, or fogged with moisture inside the housing — the only fix is a full replacement assembly. Depending on the vehicle, that typically runs $500 to $1,500+ per side installed, more on luxury and European models.
            </p>
            <p>
              Restoration costs a fraction of that and takes about an hour in your driveway. If it&apos;s not too far gone, there&apos;s no reason to pay for new.
            </p>
          </div>

          <div className="max-w-[440px] mx-auto border border-white/10 bg-black/30 rounded-[14px] px-8 py-6 flex items-center justify-between gap-4">
            <div className="text-center flex-1">
              <p className="text-[10px] tracking-[2px] uppercase text-white/40 mb-2">Replacement</p>
              <p className="text-2xl md:text-3xl font-light text-white/50 line-through decoration-red-400/60">{REPLACEMENT_ANCHOR_PRICE}</p>
            </div>
            <p className="text-xs text-white/30 font-medium shrink-0">VS</p>
            <div className="text-center flex-1">
              <p className="text-[10px] tracking-[2px] uppercase text-gold/70 mb-2">Three Crowns</p>
              <p className="text-2xl md:text-3xl font-semibold text-gold">{HEADLIGHT_PRICE}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY HEADLIGHTS GO YELLOW ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why This Happens Faster Here</p>
        <h3 className="text-xl md:text-2xl font-light mb-5 max-w-[720px]">
          Southern California sun accelerates it
        </h3>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed mb-12">
          <p>
            Glendale, Pasadena, and Burbank see well over 250 sunny days a year, and that constant UV exposure breaks down the factory coating faster than in most of the country. Once it&apos;s gone, freeway grit and brake dust from the 5, 134, and 210 sandblast the bare plastic, which speeds up the yellowing further.
          </p>
          <p>
            AAA laboratory testing found that degraded headlights can put out as little as 22% of a new headlight&apos;s light on low beam — roughly an 80% loss in forward visibility at night. Deterioration can start in as little as three to five years.
          </p>
        </div>

        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why Headlights Go Yellow</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-[720px]">
          It&apos;s not dirt. It&apos;s the factory coating failing.
        </h2>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            Headlight lenses are plastic, protected from the factory by a thin UV coating. The sun breaks that coating down over a few years. Once it&apos;s gone, the plastic itself starts to oxidize — that&apos;s the cloudy, yellow haze you see.
          </p>
          <p>
            Cloudy headlights don&apos;t just look tired. They scatter light instead of projecting it, so less of it reaches the road at night.
          </p>
        </div>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">The Difference</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-[720px]">
          Why most headlight restorations turn yellow again in months
        </h2>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed mb-12">
          <p>
            Most quick fixes wipe a light polish over the haze and finish with a thin, wipe-on sealant. It looks great that day. But that thin layer isn&apos;t the same category of protection the factory coating provided — it breaks down fast, and the bare plastic underneath starts yellowing again almost immediately.
          </p>
          <p className="text-white/80 font-medium">
            We rebuild the protection instead of skipping it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <div className="bg-black/20 border border-white/10 rounded-[14px] p-7">
            <p className="text-sm font-medium text-white/60 tracking-wide mb-5">Quick polish or wipe-on kit</p>
            <ul className="space-y-3 text-sm opacity-50 leading-relaxed">
              <li>Wipes or a light polish knocks the haze back</li>
              <li>A thin wipe-on sealant</li>
              <li>Thin layer, breaks down again in months</li>
            </ul>
          </div>
          <div className="bg-[#0d1f16] border border-gold/30 rounded-[14px] p-7">
            <p className="text-sm font-medium text-gold tracking-wide mb-5">Three Crowns</p>
            <ul className="space-y-3 text-sm opacity-70 leading-relaxed">
              <li>Wet-sand the failed coating off completely, down to fresh plastic</li>
              <li>A catalyzed 2K clear coat — the same category of coating the factory used, not a wipe</li>
              <li>Cures hard. Built to last years, not months</li>
              <li className="text-gold">If they yellow within 12 months, I redo them free.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6">One flat price</h2>
          <p className="text-gold text-6xl font-light mb-2">{HEADLIGHT_PRICE}</p>
          <p className="text-sm opacity-50 mb-8">per pair · any vehicle · at your location</p>

          <p className="text-sm opacity-60 leading-relaxed mb-10 max-w-[520px] mx-auto">
            Includes masking, wet sanding, and a 2K UV clear coat seal — plus a vehicle health check.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
            >
              <Link href="/book?package=Headlights">Book Headlight Restoration</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent! border border-white/25! text-white/80! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-medium hover:border-white/50! hover:text-white! transition-all duration-300"
            >
              <Link href="/services">See detail packages →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── HONEST LIMITS ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="max-w-[720px] border-l-[3px] border-gold/40 pl-6">
          <h3 className="text-lg font-medium mb-3 tracking-wide">When restoration isn&apos;t the answer</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            If there&apos;s moisture or fog on the inside of the lens, or the housing is cracked, restoration can&apos;t fix it — that needs a new headlight. Send a photo when you book and I&apos;ll tell you honestly before I drive out.
          </p>
        </div>
      </section>

      {/* ── MORE RESULTS ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto w-full">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Recent Work</p>
        <h2 className="text-3xl md:text-4xl font-light mb-8 max-w-[720px]">More before &amp; afters</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">Before</p>
              <ImageSlot
                src="/images/headlight-restoration/camry-before-wide.jpg"
                alt="Foggy Toyota Camry headlight before restoration"
                ratio="4:3"
              />
            </div>
            <div>
              <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">After</p>
              <ImageSlot
                src="/images/headlight-restoration/camry-after-wide.jpg"
                alt="Clear Toyota Camry headlight after restoration"
                ratio="4:3"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">Before</p>
              <ImageSlot
                src="/images/headlight-restoration/camry-before-close.jpg"
                alt="Foggy Toyota Camry headlight before restoration, close angle"
                ratio="4:3"
              />
            </div>
            <div>
              <p className="text-xs tracking-[3px] uppercase text-gold/70 mb-2 text-center">After</p>
              <ImageSlot
                src="/images/headlight-restoration/camry-after-close.jpg"
                alt="Clear Toyota Camry headlight after restoration, close angle"
                ratio="4:3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-2">What clients say</p>
            <h2 className="text-3xl font-light">40 five-star reviews.</h2>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {reviews.map((r) => (
            <div key={r.name} className="border border-white/8 bg-black/20 rounded-sm px-5 py-5">
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm opacity-55 leading-relaxed mb-4">{r.text}</p>
              <p className="text-xs opacity-40 tracking-wide">{r.name}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Three+Crowns+Detailing&kgmid=/g/11ysl2zrrr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[2px] uppercase text-gold opacity-70 hover:opacity-100 transition-opacity"
          >
            See all 40 reviews on Google →
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 md:px-20 max-w-[800px] mx-auto w-full">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-2 text-center">Questions</p>
        <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">Good to know.</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`faq-${i}`} className="border-white/10">
              <AccordionTrigger className="text-base font-medium hover:no-underline hover:text-gold py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm opacity-50 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-black/20">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Clear headlights, handled.</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-gold! text-black! px-10 py-3 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
            >
              <Link href="/book?package=Headlights">Book Headlight Restoration</Link>
            </Button>
            <PhoneLink className="flex items-center justify-center border border-gold/40 text-gold px-10 py-3 tracking-[2px] text-xs font-semibold hover:border-gold hover:bg-gold/5 transition-all rounded">
              Call or text (818) 296-7347
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  );
}
