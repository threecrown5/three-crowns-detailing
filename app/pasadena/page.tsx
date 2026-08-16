import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function PasadenaPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-gold text-xs tracking-[6px] font-medium mb-4 uppercase opacity-80">
          Pasadena, CA
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-[1.1] mb-4">
          Mobile Car Detailing in Pasadena, CA
        </h1>
        <h2 className="text-lg md:text-xl font-light opacity-60 mb-8 max-w-[600px]">
          We come to you — in Old Town, San Marino, Arcadia, and across Pasadena
        </h2>
        <div className="flex flex-row gap-4 mb-6">
          <Button
            asChild
            className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
          >
            <Link href="/book?city=pasadena">Book Your Pasadena Detail →</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 text-white/35 text-xs tracking-wide">
          <MapPin size={13} className="text-gold/60" />
          Serving Old Town · San Marino · Arcadia · Altadena · La Cañada Flintridge
        </div>
      </section>

      {/* ── BODY COPY ── */}
      <section className="py-12 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            If you're in Pasadena and you've been putting off getting your car detailed, it's usually for one reason: you don't have time to deal with it. Drop it off somewhere, wait around, pick it up — that's half a day gone. Three Crowns Detailing removes that entirely. We come to your driveway, your parking structure, or your office lot and handle the job while you're doing something that actually matters to you.
          </p>
          <p>
            We serve clients across Pasadena and the surrounding area — including Old Town, San Marino, Arcadia, Altadena, La Cañada Flintridge, and the neighborhoods along the 210 corridor. If you're in the 91101, 91103, 91104, 91105, 91106, or 91107 zip codes, we're already working in your area.
          </p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">What We Offer in Pasadena</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Detailing packages, on-site.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Prince Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $185</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Our baseline interior and exterior service. Deep vacuum, surface cleaning, streak-free glass, foam pre-soak, contact wash, wheel and tire treatment, and polymer wax. Right for clients who want their car clean and maintained on a regular schedule. Includes a vehicle health check card and priority rebooking.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">King Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $290</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. For the car that needs a deeper reset, or the owner who wants real protection built in. Includes a complimentary Crown Refresh within 30 days.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Queen Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $390</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Our most comprehensive service. Everything in King, plus a one-step paint correction to remove light swirl marks and restore gloss, followed by a sealant application. If your paint has lost its depth and you want it to look the way it did when you first got it — this is the service. Includes two Crown Refreshes, fragrance selection, and priority rebooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PASADENA ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why Pasadena Clients Choose Three Crowns</p>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            Pasadena has a car culture worth protecting. Whether you're driving a daily BMW through Old Town or keeping a weekend vehicle in storage near the Rose Bowl, the standard here is different. Our clients aren't looking for a quick wash — they want someone who's going to show up, communicate clearly, and leave the car better than they found it.
          </p>
          <p>
            That's the whole model. You get a confirmation text before we arrive, a health check card when we're done, and a detailer who actually picks up the phone. No chasing anyone down. No surprises on pricing. No wondering if the job got done right.
          </p>
          <p>
            We've served 35+ clients across the Glendale–Pasadena corridor with a 5-star rating on Google. Most of them didn't come outside once during the service.
          </p>
        </div>
      </section>

      {/* ── ALSO SERVING ── */}
      <section className="pb-16 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Also Serving</p>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Link href="/glendale" className="text-sm opacity-50 hover:opacity-100 hover:text-gold transition-all">
            Mobile Detailing in Glendale →
          </Link>
          <Link href="/burbank" className="text-sm opacity-50 hover:opacity-100 hover:text-gold transition-all">
            Mobile Detailing in Burbank →
          </Link>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-4">Book Mobile Detailing in Pasadena</p>
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to get your car handled?</h2>
          <p className="text-sm opacity-45 leading-relaxed mb-8">
            Fill out the form or text us directly. We'll confirm your vehicle type, recommend the right package, and get you scheduled — usually within the week.
          </p>
          <p className="text-sm italic opacity-40 mb-8" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>
            Handled. Every time.
          </p>
          <Button
            asChild
            className="bg-gold! text-black! px-10 py-3 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all"
          >
            <Link href="/book?city=pasadena">Book Your Pasadena Detail →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
