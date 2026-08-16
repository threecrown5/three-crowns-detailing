import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Star, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const reviews = [
  { name: "Cheryl L.", text: "The work is meticulous, and the wax has lasted over a month and still looks great. They listened and made it right without any hassle." },
  { name: "Luke K.", text: "They went above and beyond and paid attention to details most people would skip. The car looked absolutely amazing inside and out." },
  { name: "Jessica C.", text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless." },
];

const faqs = [
  {
    q: "Do I need to be home during the appointment?",
    a: "Nope. As long as we have access to your vehicle and a place to park and work, you're free to go about your day. Many clients are at work or running errands while we detail.",
  },
  {
    q: "Do you need access to water or power?",
    a: "No — we bring our own water tank and generator, so we're fully self-sufficient. You don't need to provide anything.",
  },
  {
    q: "How long does a detail take?",
    a: "A Prince Detail typically runs 1.5–2 hours. King and Queen packages take longer depending on your vehicle's size and condition. We'll give you a realistic time estimate when we confirm your booking.",
  },
  {
    q: "What if it's raining on the day of my appointment?",
    a: "We'll reach out to reschedule at no extra cost. Exterior work needs dry conditions to be done right, so we'd rather wait than rush it.",
  },
  {
    q: "What areas do you serve?",
    a: "Glendale, Pasadena, Burbank, Altadena, La Cañada Flintridge, and Tujunga. If you're nearby but not sure, just ask — we're flexible.",
  },
  {
    q: "Do I have to pay anything to book?",
    a: "No payment required up front. We'll confirm timing and details with you first, and handle payment once the job is done.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "If something isn't right within 48 hours of your detail, we'll come back and make it right — free, no questions asked.",
  },
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
        className="relative min-h-svh flex items-center bg-cover bg-center bg-no-repeat pt-[70px] md:pt-[90px]"
        style={{ backgroundImage: 'url("/images/Classic Benz.jpg")' }}
      >
        {/* Horizontal overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        {/* Vertical overlay — mobile legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
        {/* Bottom fade — smooth transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#070E08] to-transparent" />

        <div className="relative z-10 w-full max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto px-6 md:px-20 py-32 md:py-0">
          <div className="max-w-[680px] text-center md:text-left">

            <p className="text-gold text-xs tracking-[6px] font-medium mb-6 uppercase opacity-80">
              Glendale · Pasadena · Burbank
            </p>

            <h1 className="text-2xl md:text-3xl font-light tracking-wide leading-[1.2] mb-3 opacity-80">
              Mobile Car Detailing in Glendale, CA — We Come to You
            </h1>

            <h2 className="text-4xl md:text-[clamp(52px,5vw,80px)] font-light tracking-wide leading-[1.1] mb-6">
              Your car.<br className="hidden md:block" /> We'll handle it.
            </h2>

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
              <span className="text-white/45 text-xs tracking-wide">40 five-star reviews on Google</span>
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

      {/* ── BODY COPY (SEO) ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="relative max-w-[720px] mx-auto px-8 py-6 md:px-12 md:py-8">
          {/* Corner brackets */}
          <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/70" />
          <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/70" />
          <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/70" />
          <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/70" />

          <p className="text-sm md:text-base opacity-60 leading-relaxed mb-4 text-center">
            Three Crowns Detailing is a professional mobile detailing service serving Glendale, Pasadena, and Burbank, CA. We come to your home or office — no drop-off, no waiting rooms, no wasted time.
          </p>
          <p className="text-sm md:text-base opacity-60 leading-relaxed mb-4 text-center">
            Whether your car needs a full interior and exterior detail, paint decontamination, or a one-step paint correction to restore lost gloss, we handle it on-site with professional-grade products and a process built around your schedule.
          </p>
          <p className="text-sm md:text-base opacity-60 leading-relaxed mb-4 text-center">
            Every service includes a vehicle health check — a written summary of what we found, what we treated, and what to watch. No guesswork, no surprises. Just an honest assessment and a car that looks and feels the way it should.
          </p>
          <p className="text-sm md:text-base opacity-60 leading-relaxed text-center">
            We've served 35+ clients across the Glendale corridor with a 5-star rating on Google. If you've been looking for a detailer you can actually rely on, this is it.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
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
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">

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

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Where we work</p>
        <h2 className="text-3xl md:text-4xl font-light mb-14">Serving your city.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { href: "/glendale", city: "Glendale", body: "Our home base — Montrose, La Crescenta, Adams Hill, Verdugo Woodlands, and across Glendale." },
            { href: "/pasadena", city: "Pasadena", body: "Old Town, San Marino, Arcadia, and across Pasadena." },
            { href: "/burbank", city: "Burbank", body: "Media District, Magnolia Park, Toluca Lake, and across Burbank." },
          ].map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="group border-t border-gold/20 pt-8 block hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-gold/60" />
                <h3 className="text-base font-medium tracking-wide">{area.city}</h3>
              </div>
              <p className="text-sm opacity-50 leading-relaxed mb-4">{area.body}</p>
              <span className="text-xs tracking-[2px] uppercase text-gold opacity-70 group-hover:opacity-100 transition-opacity">
                Mobile Detailing in {area.city} →
              </span>
            </Link>
          ))}
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
          
            <a href="https://www.google.com/search?q=Three+Crowns+Detailing&kgmid=/g/11ysl2zrrr"
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
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-2 text-center">
          Questions
        </p>
        <h2 className="text-3xl md:text-4xl font-light mb-10 text-center">
          Good to know.
        </h2>

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