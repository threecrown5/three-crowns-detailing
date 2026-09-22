import { Suspense } from "react";
import { Phone, MessageCircle, Truck, Sparkles, Clock, ShieldCheck, Star } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { PhoneLink } from "@/components/PhoneLink";
import { SmsLink } from "@/components/SmsLink";
import { OfferBanner } from "@/components/OfferBanner";
import { BookForm } from "@/components/book/BookForm";
import { BookFormFallback } from "@/components/book/BookFormFallback";

const trustItems = [
  {
    title: "Mobile Convenience",
    description: "We come directly to your home or workplace.",
    icon: Truck,
  },
  {
    title: "Professional Products",
    description: "Safe for all paint types and interior materials.",
    icon: Sparkles,
  },
  {
    title: "Fast Response",
    description: "We'll reach out within the hour to confirm.",
    icon: Clock,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "If something isn't right, we'll make it right.",
    icon: ShieldCheck,
  },
];

const reviews = [
  {
    name: "Cheryl L.",
    text: "They respond quickly, scheduling is super flexible, and pricing is very reasonable. The work is meticulous, and the wax has lasted over a month and still looks great. I also really appreciate how professionally they addressed a small complaint — they listened and made it right without any hassle.",
  },
  {
    name: "Jessica C.",
    text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless. You can tell they take pride in their work.",
  },
  {
    name: "Luke",
    text: "They went above and beyond what was required and paid attention to details most people would skip. The car looked absolutely amazing when they were done, inside and out.",
  },
  {
    name: "Haroutyun S.",
    text: "JP was professional and did a great job. He was kind enough to come out within an hour of my call. I would definitely recommend him to others.",
  },
];

export default function BookPage() {
  return (
    <>
      <PageHeader
        label="APPOINTMENT"
        heading="We'll take care of it."
        subtitle="We come to your home or office in Glendale, Pasadena, and Burbank. No drop-off needed."
      />

      <section className="pb-20 px-6 md:px-20 w-full min-w-0 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:items-start">

          {/* ── LEFT: Offer + Form + Call/Text + Reviews ── */}
          <div className="lg:col-span-3">

            <div className="mb-6">
              <OfferBanner />
            </div>

            <Suspense fallback={<BookFormFallback />}>
              <BookForm />
            </Suspense>

            {/* OR divider */}
            <div className="flex items-center gap-4 mt-8 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs tracking-[3px] uppercase text-white/30">or reach us directly</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Call & Text */}
            <div className="grid grid-cols-2 gap-4">
              <PhoneLink className="flex items-center justify-center gap-3 border border-gold/40 text-gold text-sm uppercase px-6 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all">
                <Phone size={15} />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Call Us</span>
                  <span className="text-xs font-normal opacity-60">(818) 296-7347</span>
                </div>
              </PhoneLink>

              <SmsLink
                body="Hi, I'd like to get a quote for a detail."
                className="flex items-center justify-center gap-3 border border-gold/40 text-gold text-sm uppercase px-6 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all"
              >
                <MessageCircle size={15} />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Text Us</span>
                  <span className="text-xs font-normal opacity-60">Quick quote</span>
                </div>
              </SmsLink>
            </div>

            {/* ── Review Strip ── */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-xs tracking-[3px] uppercase text-gold opacity-70">
                    40 Google Reviews
                  </span>
                </div>

                  <a
                  href="https://www.google.com/search?q=Three+Crowns+Detailing&kgmid=/g/11ysl2zrrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[2px] uppercase text-gold/70 hover:text-gold transition-colors"
                >
                  See all →
                </a>
              </div>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="border border-white/8 bg-black/20 rounded-sm px-5 py-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <span className="text-xs font-medium text-white opacity-70">{review.name}</span>
                    </div>
                    <p className="text-sm opacity-50 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── RIGHT: What to Expect ── */}
          <div className="lg:col-span-2">
            <div className="lg:border-l lg:border-gold/15 lg:pl-16">
              <h3 className="text-xs tracking-[4px] uppercase text-gold opacity-80 mb-8">
                What to Expect
              </h3>
              <div className="space-y-8">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold tracking-wide text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="opacity-50 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust bar */}
              <div className="grid grid-cols-3 border border-gold/10 rounded-sm overflow-hidden mt-12">
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 border-r border-gold/10 text-center">
                  <span className="text-gold text-xl font-light">40</span>
                  <span className="text-xs opacity-40 mt-1">5-Star Reviews</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 border-r border-gold/10 text-center">
                  <span className="text-gold text-xl font-light">1hr</span>
                  <span className="text-xs opacity-40 mt-1">Avg. Response</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 text-center">
                  <span className="text-gold text-xl font-light">$0</span>
                  <span className="text-xs opacity-40 mt-1">Drop-off needed</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
