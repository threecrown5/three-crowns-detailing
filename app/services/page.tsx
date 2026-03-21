"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";
import { Crown } from "lucide-react";

const packages = [
  {
    key: "prince",
    name: "Prince",
    price: "$170",
    popular: false,
    cta: "Get Started",
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
    interiorUpgrades: [] as string[],
    exteriorUpgrades: [] as string[],
  },
  {
    key: "king",
    name: "King",
    price: "$270",
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
      "Clay Bar",
      "Iron Remover",
      "Ceramic Spray Sealant",
    ],
  },
  {
    key: "queen",
    name: "Queen",
    price: "$350",
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
    interiorUpgrades: [] as string[],
    exterior: [
      "Pre-Soak Foam Bath",
      "Foam Bath and Contact Wash",
      "Wheel & Tires Cleaned and Dressed",
      "Clay Bar",
      "Iron Remover",
      "Ceramic Spray Sealant",
    ],
    exteriorUpgrades: [
      "One-Step Paint Correction and Gloss Enhancement",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="SERVICES"
        heading="Detailing Packages"
        subtitle="Choose the level of care your vehicle deserves."
      />
      <section className="pt-8 pb-20 px-6 md:px-20 max-w-[1200px] mx-auto w-full min-w-0 flex-1">
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
              <div className="mb-8">
                <h2 className="text-2xl font-semibold tracking-[4px] uppercase mb-2">
                  {pkg.name}
                </h2>
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
              <div className="mb-10">
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
    </>
  );
}
