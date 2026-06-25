import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function GlendalePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-[140px] pb-16 px-6 md:px-20 max-w-[1200px] mx-auto">
        <p className="text-gold text-xs tracking-[6px] font-medium mb-4 uppercase opacity-80">
          Glendale, CA
        </p>
        <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-[1.1] mb-4">
          Mobile Car Detailing in Glendale, CA
        </h1>
        <h2 className="text-lg md:text-xl font-light opacity-60 mb-8 max-w-[640px]">
          We come to you — Montrose, La Crescenta, Adams Hill, Verdugo Woodlands, and across Glendale
        </h2>
        <div className="flex flex-row gap-4 mb-6">
          <Button
            asChild
            className="bg-gold! text-black! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold/90! transition-all duration-300"
          >
            <Link href="/book?city=glendale">Book Your Glendale Detail →</Link>
          </Button>
        </div>
        <div className="flex items-center gap-2 text-white/35 text-xs tracking-wide">
          <MapPin size={13} className="text-gold/60" />
          Serving Montrose · La Crescenta · Adams Hill · Verdugo Woodlands · Glenoaks Canyon
        </div>
      </section>

      {/* ── BODY COPY ── */}
      <section className="py-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            Glendale is home base for Three Crowns Detailing. We've been working in driveways, apartment lots, and office parking structures across this city since we launched — and it's where we do most of our work. If you've seen a dark green setup at a neighbor's place, that was probably us.
          </p>
          <p>
            We serve clients throughout Glendale and the surrounding neighborhoods — Montrose, La Crescenta, Adams Hill, Verdugo Woodlands, Glenoaks Canyon, and the areas near the Glendale Galleria and Brand Boulevard. If you're in the 91201, 91202, 91203, 91204, 91205, 91206, 91207, 91208, or 91214 zip codes, we're already in your area regularly.
          </p>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">What We Offer in Glendale</p>
          <h2 className="text-3xl md:text-4xl font-light mb-12">Detailing packages, on-site.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Prince Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $185</p>
              <p className="text-sm opacity-50 leading-relaxed">
                A complete interior and exterior detail for the car that needs to look right and stay that way. Deep vacuum, surface cleaning, streak-free glass, pre-soak foam bath, contact wash, wheel and tire treatment, and polymer wax. Includes a vehicle health check card and priority rebooking.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">King Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $290</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. The right package for a car that's overdue for a proper reset — or an owner who wants real protection built in. Includes a complimentary Crown Refresh within 30 days.
              </p>
            </div>
            <div className="border-t border-gold/20 pt-8">
              <p className="text-gold text-sm font-medium mb-1">Queen Detail</p>
              <p className="text-gold/60 text-xs mb-4">from $390</p>
              <p className="text-sm opacity-50 leading-relaxed">
                Our most complete service. Everything in King, plus a one-step paint correction to remove swirl marks and restore gloss, followed by a professional sealant application. Glendale's sun is hard on paint — if your finish has lost its depth, this is how you get it back. Includes two Crown Refreshes, fragrance selection, and priority rebooking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GLENDALE ── */}
      <section className="py-16 px-6 md:px-20 max-w-[1200px] mx-auto">
        <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-3">Why Glendale Clients Choose Three Crowns</p>
        <div className="max-w-[720px] space-y-5 text-sm md:text-base opacity-60 leading-relaxed">
          <p>
            Most detailers in this area are hard to pin down. You text them, you wait, you're not sure if they're coming. That's the experience Three Crowns was built to replace.
          </p>
          <p>
            You get a confirmation before we arrive. When the job is done, you get a vehicle health check card — a written summary of what was treated and what to keep an eye on going forward. The price you were quoted is what you pay. No surprises, no add-ons pushed on-site.
          </p>
          <p>
            We've completed 50+ jobs across Glendale with a 5-star rating on Google. Our clients book again — not because we remind them constantly, but because the experience was worth repeating.
          </p>
        </div>
      </section>

      {/* ── BOOKING CTA ── */}
      <section className="py-16 px-6 md:px-20 bg-black/20">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-xs tracking-[4px] uppercase text-gold opacity-70 mb-4">Book Mobile Detailing in Glendale</p>
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
            <Link href="/book?city=glendale">Book Your Glendale Detail →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
