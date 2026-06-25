import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function BurbankPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16 px-6 md:px-20 max-w-[1200px] mx-auto">
        <p className="text-gold text-xs tracking-[6px] font-medium mb-4 uppercase opacity-80">
          Burbank, CA
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-[1.1] mb-4">
          Mobile Car Detailing in Burbank, CA
        </h1>
        <h2 className="text-lg md:text-xl font-light opacity-60 mb-8 max-w-[600px]">
          On-site detailing for Burbank — Toluca Lake, the studios, and everywhere in between
        </h2>
        <div className="flex flex-row gap-4 mb-6">
          <Button
            asChild
            className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
          >
            <Link href="/book?city=burbank">Book Your Burbank Detail →</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 text-white/35 text-xs tracking-wide">
          <MapPin size={13} className="text-gold/60" />
          Serving Toluca Lake · North Hollywood · Warner Bros. · Disney · NBC areas
        </div>
      </section>

      {/* ── BODY COPY ── */}
      <section className="py-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            Burbank runs on a different schedule than most of LA. Early calls, long days, a car that goes from the studio lot to the freeway and back without much ceremony. The last thing on the list is finding time to get the car detailed. Three Crowns Detailing fits into your schedule instead of forcing you to rearrange it. We come to you — at home, at work, wherever the car is parked — and handle the job while you're handling everything else.
          </p>
          <p>
            We serve clients across Burbank and the surrounding area, including Toluca Lake, North Hollywood adjacent, and the neighborhoods near Warner Bros., Disney, and NBC. If you're in the 91501, 91502, 91504, 91505, or 91506 zip codes, we're already working in your area.
          </p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">What We Offer in Burbank</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Detailing packages, on-site.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Prince Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $185</p>
              <p className="text-sm opacity-50 leading-relaxed">
                A thorough interior and exterior detail for the car that gets used hard. Deep vacuum, surface cleaning, streak-free glass, pre-soak foam bath, contact wash, wheel and tire treatment, and polymer wax. Includes a vehicle health check card and priority rebooking.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">King Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $290</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. For the car that's due for a full reset — or the owner who wants real protection going forward. Includes a complimentary Crown Refresh within 30 days.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Queen Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $390</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Our premium package. Everything in King, plus a one-step paint correction to remove swirl marks and restore gloss depth, followed by a professional sealant application. If your paint looks dull or scratched under direct light and you want it corrected properly, this is it. Includes two Crown Refreshes, fragrance selection, and priority rebooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY BURBANK ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why Burbank Clients Choose Three Crowns</p>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            In Burbank, time is the real currency. Our clients aren't comparison shopping six detailers — they want someone reliable they can book and stop thinking about. That's the exact problem we're built to solve.
          </p>
          <p>
            You'll get a confirmation text before we arrive. When we're done, you get a vehicle health check card — a written summary of what we treated and what to keep an eye on. Honest, clear, no upselling on-site. The price you were quoted is the price you pay.
          </p>
          <p>
            We've served 35+ clients across the Glendale–Burbank corridor with a 5-star rating on Google. Most of them were working while we took care of the car.
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-4">Book Mobile Detailing in Burbank</p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to get your car handled?</h2>
          <p className="text-sm opacity-45 leading-relaxed mb-8">
            Fill out the form or text us directly. We'll confirm your vehicle, recommend the right package, and get you on the schedule — usually within the week.
          </p>
          <p className="text-sm italic opacity-40 mb-8" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Handled. Every time.
          </p>
          <Button
            asChild
            className="bg-gold! text-black! px-10 py-3 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
          >
            <Link href="/book?city=burbank">Book Your Burbank Detail →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
