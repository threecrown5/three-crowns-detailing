import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <section
      className="relative flex-1 flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/images/Classic Benz.jpg")' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-20 py-32 md:py-0">
        <div className="max-w-[720px] text-center md:text-left">
          {/* Tagline */}
          <p className="text-gold text-sm md:text-base tracking-[6px] font-semibold mb-6 drop-shadow-[0_0_14px_rgba(198,161,74,0.35)]">
            Precision. Presentation. Peace of Mind.
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-[clamp(56px,5vw,84px)] font-light tracking-wide leading-[1.1] mb-8">
            Relax. We&apos;ll Take
            <br className="hidden md:block" />
            {" "}It From Here.
          </h1>

          {/* Description */}
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-[540px] mb-10 mx-auto md:mx-0 drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]">
            Skip the drive. We bring professional detailing directly to your
            driveway with precision craftsmanship and premium-grade protection.
            An effortless experience from start to finish.
          </p>

          {/* CTAs */}
          <div className="flex flex-row gap-4 justify-center md:justify-start mb-12">
            <Button
              asChild
              className="bg-gold! text-white! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-semibold hover:bg-gold-soft! transition-all duration-300"
            >
              <Link href="/book">Schedule Detail</Link>
            </Button>
            <Button
              asChild
              className="bg-transparent! border border-white/25! text-white/80! px-7 py-2.5 h-auto! tracking-[2px] text-xs font-medium hover:border-white/50! hover:text-white! transition-all duration-300"
            >
              <Link href="/services">View Packages</Link>
            </Button>
          </div>

          {/* Service Area */}
          <div className="flex items-center gap-2 justify-center md:justify-start text-white/40 text-sm tracking-wide">
            <MapPin size={14} className="text-gold/60" />
            Serving Glendale, CA &amp; Surrounding Areas
          </div>
        </div>
      </div>
    </section>
  );
}
