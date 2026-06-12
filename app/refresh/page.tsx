import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { PhoneLink } from "@/components/PhoneLink";
import { ShieldCheck, Star } from "lucide-react";

const refreshItems = [
  "Exterior Hand Wash & Dry",
  "Tire Shine & Dress",
  "Exterior & Interior Windows",
  "Quick Interior Vacuum & Wipe-Down",
  "Door Panels & Screens Wiped",
  "Air Freshener",
];

export default function RefreshPage() {
  return (
    <>
      <PageHeader
        label="FOR RETURNING CLIENTS"
        heading="Time for a refresh?"
        subtitle="A quick maintenance detail to keep your car looking like the day we handled it. About 45 minutes, at your home or office."
      />

      <section className="pb-20 px-6 md:px-20 w-full min-w-0 max-w-[600px] mx-auto">
        <div className="border border-gold/20 rounded-xl p-8 md:p-10 bg-black/20">
          <p className="text-[11px] tracking-[4px] uppercase text-white/40 mb-2">
            Maintenance Service
          </p>
          <h2 className="text-2xl font-semibold tracking-[4px] uppercase mb-2">
            Crown Refresh
          </h2>
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-4xl font-bold text-gold">$85</span>
            <span className="text-white/40 text-sm">starting</span>
          </div>

          <ul className="space-y-2.5 mb-8">
            {refreshItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                <span className="text-gold mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="w-full bg-gold! text-black! font-semibold tracking-wider uppercase text-xs h-14 rounded-sm hover:bg-gold/90! transition-all"
          >
            <Link href="/book?package=Crown%20Refresh">
              Book My Refresh →
            </Link>
          </Button>

          <p className="text-white/30 text-xs leading-relaxed mt-4 text-center">
            No payment required to book. We'll confirm timing with you directly.
          </p>
        </div>

        {/* OR divider */}
        <div className="flex items-center gap-4 mt-8 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs tracking-[3px] uppercase text-white/30">or reach us directly</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <PhoneLink className="flex items-center justify-center gap-2 border border-gold/40 text-gold text-sm uppercase px-6 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all w-full">
          <span className="font-semibold">Call or Text</span>
          <span className="font-normal opacity-60">(818) 296-7347</span>
        </PhoneLink>

        {/* Trust strip */}
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="flex flex-col items-center justify-center gap-2 border border-gold/10 rounded-sm py-5 bg-black/20 text-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="text-gold fill-gold" />
              ))}
            </div>
            <span className="text-xs opacity-50">31 Google Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 border border-gold/10 rounded-sm py-5 bg-black/20 text-center">
            <ShieldCheck size={18} className="text-gold" />
            <span className="text-xs opacity-50">Satisfaction Guaranteed</span>
          </div>
        </div>
      </section>
    </>
  );
}