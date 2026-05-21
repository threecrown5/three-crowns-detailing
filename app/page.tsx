import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Star, CheckCircle } from "lucide-react";

const reviews = [
  { name: "Thunder Butt", text: "The work is meticulous, and the wax has lasted over a month and still looks great. They listened and made it right without any hassle." },
  { name: "Luke", text: "They went above and beyond and paid attention to details most people would skip. The car looked absolutely amazing inside and out." },
  { name: "Jessica C.", text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless." },
];

const steps = [
  { num: "01", title: "Book in seconds", body: "Fill out a 2-field form or call us directly. We'll reach out within the hour to confirm your slot." },
  { num: "02", title: "We come to you", body: "Home, office, or wherever your car is parked. No drop-off, no waiting rooms, no disruption to your day." },
  { num: "03", title: "Spotless, every time", body: "We detail your vehicle and walk you through exactly what was done. You'll know it was worth it." },
];

const differentiators = [
  "We show up on time, every time",
  "Clear communication before, during, and after",
  "Vehicle health card — you know exactly what was done",
  "If something isn't right, we make it right",
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-svh flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/Classic Benz.jpg")' }}
      >
        {/* Horizontal overlay — heavy left where text lives */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        {/* Vertical overlay — bumped for mobile legibility per C2 suggestion */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 py-32 md:py-0">
          <div className="max-w-[680px] text-center md:text-left">

            <p className="text-gold text-xs tracking-[6px] font-medium mb-6 uppercase opacity-80">
              Mobile Detailing · Glendale · Pasadena · Burbank
            </p>

            <h1 className="text-4xl md:text-[clamp(52px,5vw,80px)] font-light tracking-wide leading-[1.1] mb-6">
              Your car.<br className="hidden md:block" /> We handle it.
            </h1>

            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-[520px] mb-4 mx-auto md:mx-0">
              We come to your home or office and leave your vehicle spotless — no drop-off, no hassle, no second-guessing. Just results you can trust.
            </p>

            {/* Star row */}
            <div className="flex items-center gap-2 justify-center md:justify-start mb-10">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white/45 text-xs tracking-wide">31 five-star reviews on Google</span>
            </div>

            <div className="flex flex-row gap-4 justify-center md:justify-start mb-10">
              <Button
                asChild
                className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
              >
                <Link href="/book">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                className="bg-transparent! border border-white/25! text-white/80! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-medium hover:border-white/50! hover:text-white! transition-all duration-300"
              >
                <Link href="/services">View Packages</Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 justify-center md:justify-start text-white/35 text-xs tracking-wide">
              <MapPin size={13} className="text-gold/60" />
              Serving Glendale, Pasadena, Burbank &amp; surrounding areas
            </div>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">The process</p>
        <h2 className="text-3xl md:text-4xl font-light mb-14">Simple from start to finish.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-gold/20 pt-8">
              <p className="text-gold/30 text-4xl font-light mb-4" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>{step.num}</p>
              <h3 className="text-base font-medium mb-3 tracking-wide">{step.title}</h3>
              <p className="text-sm opacity-50 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY THREE CROWNS ── */}
      <section className="py-20 px-6 md:px-20 bg-black/20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">

          <div>
            <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why clients stay</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Most detailers do the job.<br />
              <span className="text-gold italic" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>We take care of you.</span>
            </h2>
            <p className="text-sm opacity-50 leading-relaxed mb-10 max-w-[480px]">
              You're trusting someone to show up at your home, handle your car, and do it right without you babysitting the process. That's the bar we hold ourselves to — every single time.
            </p>
            <Button
              asChild
              className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
            >
              <Link href="/book">Book Your Detail</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-4 border border-white/8 bg-black/20 rounded-sm px-5 py-4">
                <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                <p className="text-sm opacity-70">{item}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-2">What clients say</p>
            <h2 className="text-3xl font-light">31 five-star reviews.</h2>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-gold fill-gold" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-6 md:px-20 bg-black/20">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-4">Ready?</p>
          <h2 className="text-3xl md:text-4xl font-light mb-3">
            We'll take care of it.
          </h2>
          <p className="text-sm italic opacity-60 mb-4" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Handled. Every time.
          </p>
          <p className="text-sm opacity-45 leading-relaxed mb-10">
            We come to your home or office in Glendale, Pasadena, and Burbank.<br />No drop-off needed.
          </p>
          <Button
            asChild
            className="bg-gold! text-black! px-10 py-3 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
          >
            <Link href="/book">Get a Free Quote →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
