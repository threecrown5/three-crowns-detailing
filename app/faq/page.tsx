import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PhoneLink } from "@/components/PhoneLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatPrice, HEADLIGHT_STANDALONE, HEADLIGHT_ADDON } from "@/lib/pricing";

type Faq = {
  q: string;
  /** Canonical plain-text answer — used for the FAQPage schema and the
   * sr-only crawlable mirror. Always required, even when `bullets` is
   * set, so schema/crawlers get a clean flattened version. */
  a: string;
  /** Optional visual breakdown shown in the accordion instead of `a`. */
  bullets?: { label: string; text: string }[];
  /** Optional line shown after `bullets` in the accordion. */
  closing?: string;
};

// Grouped by category so this is easy to extend — add a question to the
// matching category's array, or add a new category to the list below.
// Keep every answer consistent with what's already promised on /services,
// /headlights, and the homepage — this page doesn't introduce new claims.
const categories: { label: string; faqs: Faq[] }[] = [
  {
    label: "Booking & Process",
    faqs: [
      {
        q: "How do I book a detail?",
        a: "Book directly on our site or call/text (818) 296-7347. Let us know your vehicle type and which package you want. Or describe what you need, and we can personalize the service and quote.",
      },
      {
        q: "Do I need to be there during the appointment?",
        a: "No — we just need access to your vehicle and a legal parking spot. Many clients leave keys and go about their day.",
      },
      {
        q: "Do I need to provide water or power?",
        a: "No. Our setup is fully self-contained — we bring our own water tank and generator, so all you need to provide is a parking spot. No hose, no outlet, no prep on your end.",
      },
      {
        q: "What should I do to prepare my car before you arrive?",
        a: "Take out anything you'd want to see again — trash and everyday clutter are fine to leave, we'll handle those. If there's a compartment with valuables, we won't open it; we'll clean carefully around it instead.",
      },
      {
        q: "How long does a detail take?",
        a: "A Prince Detail typically runs 1.5–2 hours. King and Queen packages take longer depending on your vehicle's size and condition. We'll give you a realistic time estimate when we confirm your booking.",
      },
      {
        q: "How far in advance do I need to book?",
        a: "We can often accommodate next-day or same-week appointments, but we don't take last-minute bookings — as a solo operation, we schedule deliberately to make sure every vehicle gets our full attention.",
      },
      {
        q: "What's your cancellation or rescheduling policy?",
        a: "We ask for at least 24 hours' notice to reschedule or cancel — it lets us offer that slot to another client.",
      },
      {
        q: "What if it's raining on the day of my appointment?",
        a: "We'll reach out to reschedule at no extra cost. Exterior work needs dry conditions to be done right, so we'd rather wait than rush it.",
      },
      {
        q: "Do I have to pay anything to book?",
        a: "No payment required up front. We'll confirm timing and details with you first, and handle payment once the job is done.",
      },
      {
        q: "How do I pay?",
        a: "Cash, card, Venmo, or Zelle — payment is collected once the detail is complete.",
      },
    ],
  },
  {
    label: "Service Area",
    faqs: [
      {
        q: "What areas do you service?",
        a: "Three Crowns is mobile, so we come to you anywhere in Glendale, Pasadena, Burbank, Altadena, South Pasadena, La Cañada Flintridge, Montrose, La Crescenta, Sunland-Tujunga, Eagle Rock, and Monrovia. If you're just outside this range, reach out — we may still be able to make it work.",
      },
      {
        q: "Can you detail my car at my apartment, condo, or workplace?",
        a: "Yes, as long as there's a legal parking spot with enough room to work — driveway, street parking, or a garage. Some apartment complexes and office buildings restrict outside vendors on-site, so if you're unsure, send us the address before booking and we'll confirm.",
      },
      {
        q: "Is there an extra charge if I'm outside the core service area?",
        a: "It depends on distance and scheduling, so there's no fixed rule — reach out with your location and we'll let you know if anything extra applies before you book.",
      },
    ],
  },
  {
    label: "Interior Detailing",
    faqs: [
      {
        q: "What's included in an interior detail?",
        a: "Every package includes a full exfoliation scrub of all plastic, vinyl, Alcantara, and leather surfaces, deep vacuuming with brush agitation to lift embedded dirt, streak-free glass and screen cleaning, floor mat cleaning and dressing, and foot pedal cleaning. King and Queen packages add leather conditioning, carpet and upholstery shampoo, and anti-static/UV protectant for a deeper clean and longer-lasting finish.",
      },
      {
        q: "Can you get stains, pet hair, and odors out of my seats and carpet?",
        a: "Yes. Carpet and upholstery shampoo (included in King and Queen) handles most ground-in stains, and we offer dedicated pet hair removal as an add-on for vehicles with heavier hair embedded in the fibers — a standard vacuum can't fully pull that out, so we use specialized tools. Odors are typically resolved as a byproduct of a deep clean, since most car odors come from whatever's trapped in the carpet or upholstery.",
      },
      {
        q: "How long does an interior detail take?",
        a: "It depends on vehicle size and condition, but plan for a couple hours minimum for a thorough interior detail — longer for larger vehicles or heavier buildup. We'll give you a time estimate when we quote your vehicle.",
      },
      {
        q: "Do you clean leather and cloth seats differently?",
        a: "Yes. Leather gets conditioned to prevent cracking and fading, while cloth and Alcantara surfaces are treated with the exfoliation scrub and, on King/Queen, an anti-static and UV protectant to help fabric resist re-soiling and sun damage.",
      },
    ],
  },
  {
    label: "Pricing & Packages",
    faqs: [
      {
        q: "How much does mobile detailing cost?",
        a: "Pricing depends on your vehicle size and the package you choose. Reach out for a quote — pricing is confirmed based on your specific vehicle and condition.",
      },
      {
        q: "What's the difference between your Prince, King, and Queen packages?",
        a: "Prince is our foundation package — a full interior and exterior detail, including deep vacuum, streak-free glass, foam bath wash, and polymer wax protection. King, our most popular package, includes everything in Prince plus leather conditioning, carpet and upholstery shampoo, clay bar decontamination, and a ceramic spray sealant — a deeper, more protective detail for owners who want their car looked after, not just cleaned. Queen, our top tier, includes everything in King plus one-step gloss enhancement to remove light swirls and restore shine. All packages include a Vehicle Health Check Card and our 48-hour satisfaction guarantee.",
        bullets: [
          {
            label: "Prince",
            text: "Our foundation package — a full interior and exterior detail, including deep vacuum, streak-free glass, foam bath wash, and polymer wax protection.",
          },
          {
            label: "King",
            text: "Our most popular package. Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, clay bar decontamination, and a ceramic spray sealant — a deeper, more protective detail for owners who want their car looked after, not just cleaned.",
          },
          {
            label: "Queen",
            text: "Our top tier, built for cars that need real correction. Everything in King, plus one-step gloss enhancement to remove light swirls and restore shine.",
          },
        ],
        closing: "All packages include a Vehicle Health Check Card and our 48-hour satisfaction guarantee.",
      },
      {
        q: "Do prices change based on my vehicle type?",
        a: "Yes. SUVs and mid-size trucks run higher than sedans, and XL SUVs and full-size trucks sit at our top tier for the extra time and materials involved. Get an exact quote for your vehicle when you reach out.",
      },
      {
        q: "Do you offer a maintenance plan or recurring service?",
        a: `Yes — Crown Refresh is a lighter maintenance detail to keep your car looking fresh between full details, ideal on a recurring schedule. The more often you book it, the less it costs. Starts at ${formatPrice("refresh", "t1")}.`,
      },
    ],
  },
  {
    label: "Trust & Differentiation",
    faqs: [
      {
        q: "What's the difference between a car wash and a mobile detail?",
        a: "A car wash cleans the surface — mobile detailing restores it. We hand wash, decontaminate, and treat every surface (paint, wheels, interior fabric, leather) individually instead of running your car through an automated process built for speed. It's the difference between wiping a counter and actually deep-cleaning a kitchen.",
      },
      {
        q: "Is mobile detailing worth it compared to doing it myself?",
        a: "A DIY wash and vacuum can maintain a car between details, but it won't remove embedded contamination, restore faded surfaces, or apply protection that actually bonds to paint and fabric. Professional-grade products, technique, and time are what separate a detail from a Saturday car wash — and we bring all three to your driveway.",
      },
      {
        q: "Why choose Three Crowns over a bigger detailing company?",
        a: "We're a solo operation by design — every vehicle gets the same set of hands and the same standard, visit to visit. No rotating techs, no rushed jobs to hit a daily quota. Your car doesn't look dirty. It just doesn't look like this yet — and that's what we're here to fix.",
      },
      {
        q: "What if I'm not happy with the detail?",
        a: "We back every package with a 48-hour satisfaction guarantee. If something's not right, we come back and make it right — free, no questions asked.",
      },
    ],
  },
  {
    label: "Headlight Restoration",
    faqs: [
      {
        q: "How much does headlight restoration cost?",
        a: `$${HEADLIGHT_STANDALONE} per pair, any vehicle, at your location. No travel fee within our service area.`,
      },
      {
        q: "How long does headlight restoration last?",
        a: "Because we seal with 2K UV clear coat rather than a wipe-on sealant, it's built to last years rather than months. If they yellow within 12 months, we redo them free.",
      },
      {
        q: "Can you do headlight restoration at the same time as a detail?",
        a: `Yes — and it's $${HEADLIGHT_ADDON} instead of $${HEADLIGHT_STANDALONE} when it's added to any detail package, same visit.`,
      },
      {
        q: "My headlights are foggy on the inside. Can you fix that?",
        a: "No — internal moisture means the seal has failed and the headlight needs replacing. Send a photo and we'll tell you before booking.",
      },
    ],
  },
];

const allFaqs = categories.flatMap((c) => c.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHeader
        label="FAQ"
        heading="Frequently Asked Questions"
        subtitle="Everything you need to know about mobile detailing with Three Crowns — serving Glendale, Pasadena, Burbank, Altadena, South Pasadena, La Cañada Flintridge, Montrose, La Crescenta, Sunland-Tujunga, Eagle Rock, and Monrovia. Don't see your question here? Call or text us at (818) 296-7347."
      />

      <section className="pb-20 px-6 md:px-20 max-w-[800px] mx-auto w-full">
        {categories.map((category) => (
          <div key={category.label} className="mb-14 last:mb-0">
            <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-4">
              {category.label}
            </p>
            <Accordion type="single" collapsible className="w-full">
              {category.faqs.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`${category.label}-${i}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-base font-medium hover:no-underline hover:text-gold py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm opacity-50 leading-relaxed">
                    {faq.bullets ? (
                      <>
                        <ul className="space-y-3 mb-3">
                          {faq.bullets.map((b) => (
                            <li key={b.label}>
                              <span className="text-white/80 font-medium">{b.label}:</span> {b.text}
                            </li>
                          ))}
                        </ul>
                        {faq.closing && <p>{faq.closing}</p>}
                      </>
                    ) : (
                      faq.a
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}

        {/* Radix Accordion doesn't render collapsed panel content into the
            initial HTML, so answers above are invisible to a plain fetch/crawl
            until JS hydrates. Mirror the same text here as real, static markup
            — matches the FAQPage JSON-LD above. */}
        <dl className="sr-only">
          {allFaqs.map((faq) => (
            <div key={faq.q}>
              <dt>{faq.q}</dt>
              <dd>{faq.a}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="text-sm opacity-60 leading-relaxed mb-6">
            Still have a question? We&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneLink className="flex items-center justify-center border border-gold/40 text-gold px-7 py-2.5 tracking-[2px] text-xs font-semibold hover:border-gold hover:bg-gold/5 transition-all rounded">
              Call or text (818) 296-7347
            </PhoneLink>
            <Link
              href="/contact"
              className="flex items-center justify-center border border-white/25 text-white/80 px-7 py-2.5 tracking-[2px] text-xs font-medium hover:border-white/50 hover:text-white transition-all duration-300 rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
