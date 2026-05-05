import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Crown } from "lucide-react";

const packages = [
  {
    key: "prince",
    name: "Prince",
    price: "$170",
    tagline: "The clean slate. Every new client starts here.",
    popular: false,
    cta: "Book Prince Detail",
    interior: [
      "All Surface Cleaning",
      "Crack & Crevice Air Purge",
      "Deep Interior Vacuum",
      "Streak-Free Glass and Screens",
      "Floor Mat Cleaning",
    ],
    exterior: [
      "Pre-Soak Foam Bath",
      "Foam Bath and Contact Wash",
      "Wheel & Tires Cleaned and Dressed",
      "Polymer Wax Protection",
    ],
    bonuses: [
      "Vehicle Health Check Card",
      "Keep It Clean Maintenance Guide",
      "Priority Rebooking Slot",
    ],
    interiorUpgrades: [] as string[],
    exteriorUpgrades: [] as string[],
  },
  {
    key: "king",
    name: "King",
    price: "$270",
    tagline: "For those who take their car seriously.",
    popular: true,
    cta: "Book King Detail",
    interior: [
      "All Surface Cleaning",
      "Crack & Crevice Air Purge",
      "Deep Interior Vacuum",
      "Streak-Free Glass and Screens",
      "Floor Mat Cleaning",
    ],
    interiorUpgrades: [
      "Leather Conditioning",
      "Carpet and Upholstery Shampoo",
      "Anti-Static and UV Protectant",
    ],
    exterior: [
      "Pre-Soak Foam Bath",
      "Foam Bath and Contact Wash",
      "Wheel & Tires Cleaned and Dressed",
    ],
    exteriorUpgrades: [
      "Clay Bar Decontamination",
      "Iron Remover Treatment",
      "Ceramic Spray Sealant",
    ],
    bonuses: [
      "Complimentary Crown Refresh Within 30 Days",
      "Priority Rebooking Slot",
    ],
  },
  {
    key: "queen",
    name: "Queen",
    price: "$350",
    tagline: "The full experience. Nothing held back.",
    popular: false,
    cta: "Go Premium",
    interior: [
      "All Surface Cleaning",
      "Crack & Crevice Air Purge",
      "Deep Interior Vacuum",
      "Streak-Free Glass and Screens",
      "Floor Mat Cleaning",
      "Leather Conditioning",
      "Carpet and Upholstery Shampoo",
      "Anti-Static and UV Protectant",
    ],
    interiorUpgrades: [],
    exterior: [
      "Pre-Soak Foam Bath",
      "Foam Bath and Contact Wash",
      "Wheel & Tires Cleaned and Dressed",
      "Clay Bar Decontamination",
      "Iron Remover Treatment",
      "Ceramic Spray Sealant",
    ],
    exteriorUpgrades: [
      "One-Step Paint Correction & Gloss Enhancement",
    ],
    bonuses: [
      "2 Complimentary Crown Refreshes Within 60 Days",
      "Certified Detail Card",
      "Fragrance Selection",
      "Priority Rebooking Slot",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="SERVICES"
        heading="Detailing Packages"
        subtitle="Professional mobile detailing brought to your driveway. No drop-off. No waiting around."
      />

      {/* Main Packages */}
      <section className="pt-8 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto w-full min-w-0 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.key}
              className={`relative rounded-xl border p-8 md:p-10 flex flex-col transition-all ${
                pkg.popular
                  ? "border-gold/40 bg-gold/5 lg:scale-105 lg:-my-4 shadow-[0_0_60px_rgba(198,161,74,0.08)]"
                  : "border-white/10 bg-black/20"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[9px] tracking-[2px] uppercase font-bold px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap">
                  <Crown size={10} />
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-[4px] uppercase mb-1">
                  {pkg.name}
                </h2>
                <p className="text-white/40 text-xs mb-4 leading-relaxed">
                  {pkg.tagline}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-bold text-gold">
                    {pkg.price}
                  </span>
                  <span className="text-white/40 text-sm">starting</span>
                </div>
              </div>

              {/* Interior */}
              <div className="mb-6">
                <h3 className="text-[11px] tracking-[4px] uppercase text-white/40 font-semibold mb-4">
                  Interior
                </h3>
                <ul className="space-y-2.5">
                  {pkg.interior.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-white/30 mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                  {pkg.interiorUpgrades.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gold">
                      <span className="mt-0.5">&#9733;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exterior */}
              <div className="mb-6">
                <h3 className="text-[11px] tracking-[4px] uppercase text-white/40 font-semibold mb-4">
                  Exterior
                </h3>
                <ul className="space-y-2.5">
                  {pkg.exterior.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="text-white/30 mt-0.5">&#10003;</span>
                      {item}
                    </li>
                  ))}
                  {pkg.exteriorUpgrades.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gold">
                      <span className="mt-0.5">&#9733;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonuses */}
              <div className="mb-8">
                <h3 className="text-[11px] tracking-[4px] uppercase text-white/40 font-semibold mb-4">
                  Included
                </h3>
                <ul className="space-y-2.5">
                  {pkg.bonuses.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                      <span className="text-gold mt-0.5">&#10022;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-auto">
                <Button
                  asChild
                  className={`w-full h-auto! tracking-[2px] uppercase font-semibold transition-all ${
                    pkg.popular
                      ? "bg-gold! text-white! hover:bg-gold-soft! py-4 text-sm"
                      : "bg-transparent! border border-gold/40! text-gold! hover:bg-gold/10! py-3 text-xs"
                  }`}
                >
                  <Link href={`/book?package=${encodeURIComponent(pkg.name + " Detail")}`}>
                    {pkg.cta}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-12">
        <div className="border border-gold/20 rounded-xl p-8 text-center">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-3">Our Promise</p>
          <p className="text-white/70 text-sm leading-relaxed max-w-[520px] mx-auto">
            Not completely satisfied within 48 hours of your detail? We'll come back and make it right — free, no questions asked. We stand behind every job.
          </p>
        </div>
      </section>

      {/* Crown Refresh */}
      <section className="px-6 md:px-20 max-w-[1200px] mx-auto w-full pb-20">
        <div className="border border-white/10 rounded-xl p-8 md:p-10 bg-black/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-[560px]">
              <p className="text-[11px] tracking-[4px] uppercase text-white/40 mb-2">
                Maintenance Service
              </p>
              <h2 className="text-2xl font-semibold tracking-[4px] uppercase mb-2">
                Crown Refresh
              </h2>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-gold">$85</span>
                <span className="text-white/40 text-sm">starting</span>
              </div>
              <ul className="space-y-2 mb-4">
                {[
                  "Exterior Hand Wash & Dry",
                  "Tire Shine & Dress",
                  "Exterior & Interior Windows",
                  "Quick Interior Vacuum & Wipe-Down",
                  "Door Panels & Screens Wiped",
                  "Air Freshener",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-white/30 mt-0.5">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-white/30 text-xs leading-relaxed">
                Best for vehicles maintained within the last 60 days. New clients start with the Prince Detail to establish a clean baseline.
              </p>
            </div>
            <div className="md:text-right">
              <Button
                asChild
                className="bg-transparent! border border-gold/40! text-gold! hover:bg-gold/10! py-3 px-8 text-xs tracking-[2px] uppercase font-semibold"
              >
                <Link href="/book?package=Crown%20Refresh">
                  Book Refresh
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
