"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/PageHeader";

const tiers = [
  {
    label: "Sedan / Sport",
    sub: "Mustang GT · BMW 3 Series · Mercedes C-Class\nCoupes & Sport Sedans",
    icon: "/images/icon_sedan.png",
    prices: { prince: "$185", king: "$290", queen: "$400" },
    tierLabel: "Sedan · Sport · Coupe",
  },
  {
    label: "SUV / Truck",
    sub: "BMW X5 · Mercedes GLE · Range Rover Sport\nF-150 · Silverado · Tacoma",
    icon: "/images/icon_suv.png",
    prices: { prince: "$225", king: "$350", queen: "$480" },
    tierLabel: "SUV · Truck",
  },
  {
    label: "XL SUV / HD Truck",
    sub: "Cadillac Escalade · Lincoln Navigator · Tahoe · Expedition\nF-250 · Ram 2500 · Silverado HD · 3-Row SUVs",
    icon: "/images/icon_xl.png",
    prices: { prince: "$270", king: "$425", queen: "$580" },
    tierLabel: "XL SUV · HD Truck",
  },
];

const packages = [
  {
    key: "prince" as const,
    name: "Prince",
    tagline: "The clean slate.\nEvery new client starts here.",
    popular: false,
    interior: [
      { text: "Exfoliation Scrub for all Plastic, Vinyl, Alcantara, and Leather surfaces", upgrade: false },
      { text: "Focused attention to Creases and Crevices", upgrade: false },
      { text: "Deep Interior Vacuum + Brush Agitation", upgrade: false },
      { text: "Streak-Free Glass and Screens", upgrade: false },
      { text: "Floor Mat Cleaning + Dressing", upgrade: false },
      { text: "Foot Pedal Cleaning", upgrade: false },
    ],
    exterior: [
      { text: "Pre-Soak Foam Bath", upgrade: false },
      { text: "Foam Bath and Contact Wash", upgrade: false },
      { text: "Wheel Faces, Wells, and Barrels cleaned", upgrade: false },
      { text: "Tires Scrubbed and Cleaned with Gentle Chemicals", upgrade: false },
      { text: "Hydrophobic Layer for Wheels", upgrade: false },
      { text: "Dressing for Moisturizing and Shine applied to Tires and Wheel Wells", upgrade: false },
      { text: "Hydrophobic and Dust Repellent Polymer Wax Protection", upgrade: false },
    ],
    included: [
      "Vehicle Health Check Card",
      "Keep It Clean Maintenance Guide",
      "Priority Rebooking Slot",
    ],
  },
  {
    key: "king" as const,
    name: "King",
    tagline: "For those who take\ntheir car seriously.",
    popular: true,
    interior: [
      { text: "Exfoliation Scrub for all Plastic, Vinyl, Alcantara, and Leather surfaces", upgrade: false },
      { text: "Focused attention to Creases and Crevices", upgrade: false },
      { text: "Deep Interior Vacuum + Brush Agitation", upgrade: false },
      { text: "Streak-Free Glass and Screens", upgrade: false },
      { text: "Floor Mat Cleaning + Dressing", upgrade: false },
      { text: "Foot Pedal Cleaning", upgrade: false },
      { text: "Leather Conditioning", upgrade: true },
      { text: "Carpet and Upholstery Shampoo", upgrade: true },
      { text: "Anti-Static and UV Protectant", upgrade: true },
    ],
    exterior: [
      { text: "Pre-Soak Foam Bath", upgrade: false },
      { text: "Foam Bath and Contact Wash", upgrade: false },
      { text: "Wheel Faces, Wells, and Barrels cleaned", upgrade: false },
      { text: "Tires Scrubbed and Cleaned with Gentle Chemicals", upgrade: false },
      { text: "Hydrophobic Layer for Wheels", upgrade: false },
      { text: "Dressing for Moisturizing and Shine applied to Tires and Wheel Wells", upgrade: false },
      { text: "Clay Bar Decontamination", upgrade: true },
      { text: "Iron Remover Treatment", upgrade: true },
      { text: "Ceramic Spray Sealant", upgrade: true },
    ],
    included: [
      "Vehicle Health Check Card",
      "Priority Rebooking Slot",
      "50% Off First Crown Refresh",
    ],
  },
  {
    key: "queen" as const,
    name: "Queen",
    tagline: "The full experience.\nNothing held back.",
    popular: false,
    interior: [
      { text: "Exfoliation Scrub for all Plastic, Vinyl, Alcantara, and Leather surfaces", upgrade: false },
      { text: "Focused attention to Creases and Crevices", upgrade: false },
      { text: "Deep Interior Vacuum + Brush Agitation", upgrade: false },
      { text: "Streak-Free Glass and Screens", upgrade: false },
      { text: "Floor Mat Cleaning + Dressing", upgrade: false },
      { text: "Foot Pedal Cleaning", upgrade: false },
      { text: "Leather Conditioning", upgrade: false },
      { text: "Carpet and Upholstery Shampoo", upgrade: false },
      { text: "Anti-Static and UV Protectant", upgrade: false },
      { text: "One-Step Paint Correction & Gloss Enhancement", upgrade: true },
    ],
    exterior: [
      { text: "Pre-Soak Foam Bath", upgrade: false },
      { text: "Foam Bath and Contact Wash", upgrade: false },
      { text: "Wheel Faces, Wells, and Barrels cleaned", upgrade: false },
      { text: "Tires Scrubbed and Cleaned with Gentle Chemicals", upgrade: false },
      { text: "Hydrophobic Layer for Wheels", upgrade: false },
      { text: "Dressing for Moisturizing and Shine applied to Tires and Wheel Wells", upgrade: false },
      { text: "Clay Bar Decontamination", upgrade: false },
      { text: "Iron Remover Treatment", upgrade: false },
      { text: "Ceramic Spray Sealant", upgrade: false },
    ],
    included: [
      "1 Complimentary Crown Refresh within 30 days",
      "Priority Rebooking Slot",
    ],
  },
];

function CrownIcon({ color }: { color: string }) {
  return (
    <svg width="18" height="16" viewBox="0 0 22 18" fill="none" style={{ marginBottom: 10 }}>
      <path
        d="M1 14 L4.5 6 L8.5 10.5 L11 2 L13.5 10.5 L17.5 6 L21 14 Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="1" y1="16.5" x2="21" y2="16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesPage() {
  const [tierIdx, setTierIdx] = useState(0);
  const tier = tiers[tierIdx];

  return (
    <>
      <PageHeader
        label="Services & Pricing"
        heading="Mobile Detailing Packages & Pricing — Glendale, Pasadena & Burbank"
        subtitle={"Mobile detailing at your driveway.\nNo drop-off. No waiting."}
      />

      <section className="max-w-[1020px] mx-auto px-5 pb-6">
        <p className="text-sm md:text-base opacity-60 leading-relaxed max-w-[680px]">
          Three Crowns Detailing serves clients across Glendale, Pasadena, and Burbank, CA. Every package is performed on-site at your location — priced by vehicle type, scoped to your car&apos;s actual condition, and backed by our vehicle health check at every visit.
        </p>
      </section>

      <div className="max-w-[1020px] mx-auto px-5 pb-24">

        {/* VEHICLE SELECTOR */}
        <div className="mb-12">
          <p className="text-center text-[11px] text-[#2e5c3a] tracking-[0.1em] uppercase mb-[18px]">
            Select your vehicle — pricing updates
          </p>
          <div className="grid grid-cols-3 gap-2.5 sm:gap-[10px]">
            {tiers.map((t, i) => {
              const active = i === tierIdx;
              return (
                <button
                  key={t.label}
                  onClick={() => setTierIdx(i)}
                  className={[
                    "cursor-pointer rounded-xl border p-5 pb-3.5 text-center transition-all duration-200",
                    active
                      ? "bg-gradient-to-br from-[#162e1f] to-[#0e2218] border-[#C9A84C] shadow-[0_0_0_1px_rgba(201,168,76,0.25),0_8px_28px_rgba(201,168,76,0.09)]"
                      : "bg-[#0d1f16] border-[#1a3020] hover:-translate-y-0.5",
                  ].join(" ")}
                >
                  <div className="h-20 flex items-center justify-center mb-2.5">
                    <Image
                      src={t.icon}
                      alt={t.label}
                      width={160}
                      height={80}
                      className="max-h-full w-auto"
                      style={{ opacity: active ? 1 : 0.3, transition: "opacity 0.22s" }}
                    />
                  </div>
                  <div
                    className="text-[12px] font-semibold mb-[3px] transition-colors duration-200"
                    style={{ color: active ? "#f0ebe0" : "#3d6b48" }}
                  >
                    {t.label}
                  </div>
                  <div
                    className="hidden sm:block text-[10px] leading-[1.5] whitespace-pre-line transition-colors duration-200"
                    style={{ color: active ? "#4a7a55" : "#2a4a32" }}
                  >
                    {t.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* PACKAGES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 items-start mb-4">
          {packages.map((pkg) => {
            const price = tier.prices[pkg.key];
            return (
              <div
                key={pkg.key}
                className={[
                  "relative rounded-[14px] border p-7 flex flex-col",
                  pkg.popular
                    ? "bg-gradient-to-br from-[#162e20] to-[#0d1f16] border-[#6a5120]"
                    : "bg-[#0d1f16] border-[#1a3020]",
                ].join(" ")}
              >
                {pkg.popular && (
                  <div className="absolute -top-px right-[22px] bg-[#C9A84C] text-[#091810] text-[9px] font-bold tracking-[0.14em] uppercase px-[11px] py-1 rounded-b-lg">
                    Most Popular
                  </div>
                )}

                <CrownIcon color={pkg.popular ? "#C9A84C" : "#3d6b48"} />

                <div
                  className="font-['Cormorant_Garamond',serif] text-[30px] font-bold text-[#f0ebe0] leading-none mb-1"
                >
                  {pkg.name}
                </div>
                <div className="text-[11px] text-[#3d6b48] leading-[1.55] mb-5 whitespace-pre-line">
                  {pkg.tagline}
                </div>

                <div className="pb-4 mb-0 border-b border-[#1a3020]">
                  <div
                    key={`${tierIdx}-${pkg.key}`}
                    className="font-['Cormorant_Garamond',serif] text-[52px] font-bold text-[#C9A84C] leading-none animate-[priceIn_0.26s_cubic-bezier(0.22,1,0.36,1)_both]"
                  >
                    {price}
                  </div>
                  <div className="text-[11px] text-[#3d6b48] mt-1">{tier.tierLabel}</div>
                </div>

                <div className="border-t border-[#1a3020] my-[18px]" />

                <div className="flex-1 mb-[22px] space-y-0">
                  {/* Interior */}
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5a9468] mb-2">Interior</div>
                  <ul className="flex flex-col gap-[7px] mb-3.5">
                    {pkg.interior.map((item) => (
                      <li
                        key={item.text}
                        className="text-[13px] flex items-start gap-2 leading-[1.45]"
                        style={{ color: item.upgrade ? "#C9A84C" : "#8fbf9a" }}
                      >
                        <span style={{ color: item.upgrade ? "#C9A84C" : "#4a7a55", marginTop: 1, flexShrink: 0, fontSize: 11 }}>
                          {item.upgrade ? "★" : "✓"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  {/* Exterior */}
                  <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#5a9468] mb-2">Exterior</div>
                  <ul className="flex flex-col gap-[7px] mb-3.5">
                    {pkg.exterior.map((item) => (
                      <li
                        key={item.text}
                        className="text-[13px] flex items-start gap-2 leading-[1.45]"
                        style={{ color: item.upgrade ? "#C9A84C" : "#8fbf9a" }}
                      >
                        <span style={{ color: item.upgrade ? "#C9A84C" : "#4a7a55", marginTop: 1, flexShrink: 0, fontSize: 11 }}>
                          {item.upgrade ? "★" : "✓"}
                        </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  {/* Included */}
                  <div className="text-[9px] font-semibold tracking-[0.18em] uppercase text-[#2e5c3a] mb-2">Included</div>
                  <ul className="flex flex-col gap-[7px]">
                    {pkg.included.map((item) => (
                      <li key={item} className="text-[12px] flex items-start gap-2 leading-[1.45] text-[#c8d8c0]">
                        <span className="text-[#C9A84C] mt-px flex-shrink-0 text-[11px]">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  className={[
                    "w-full rounded-lg text-[11px] font-semibold tracking-[0.1em] uppercase transition-all py-3",
                    pkg.popular
                      ? "bg-[#C9A84C]! text-[#091810]! border border-[#C9A84C]! hover:bg-[#d4b560]!"
                      : "bg-transparent! border border-[#1e3828]! text-[#7aa882]! hover:border-[#C9A84C]! hover:text-[#C9A84C]!",
                  ].join(" ")}
                >
                  <Link href={`/book?package=${pkg.name}`}>Book {pkg.name}</Link>
                </Button>
              </div>
            );
          })}
        </div>

        {/* GUARANTEE */}
        <div className="text-center py-8 pb-10">
          <p className="text-[13px] text-[#3d6b48] leading-[1.75]">
            <span className="text-[#C9A84C] font-medium">48-hour satisfaction guarantee.</span>{" "}
            Not completely happy? We come back and make it right — free, no questions.
          </p>
        </div>

        {/* ADD-ONS */}
        <div className="mb-8">
          <div className="mb-7">
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#3d6b48] mb-2">Add-On Services</div>
            <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold mb-1 leading-[1.1]">
              Customize your detail.
            </div>
            <p className="text-[12px] text-[#3d6b48] leading-[1.75]">
              Add one or more services to any package. Just mention it when you book.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Headlight Restoration", price: "$60", body: "Oxidized, yellowed headlights reduce visibility and make a clean car look older than it is. We wet-sand, polish, and seal both lenses. Priced per pair." },
              { name: "Engine Bay Cleaning", price: "$75", body: "A degreased, detailed engine bay makes maintenance easier and keeps buyers interested if you ever sell. We protect sensitive components and hand-clean the bay for a clean, presentable finish." },
              { name: "Pet Hair Removal", price: "from $50", body: "Pet hair embeds into carpet and upholstery fibers in a way a standard vacuum can't touch. We use specialized tools to pull it out fully before the detail begins. Priced by severity." },
              { name: "Tar & Adhesive Removal", price: "$40", body: "Road tar, sap, sticker residue, and bonded contamination that won't come off in a wash. Treated with a dedicated solvent before the exterior detail so it doesn't affect the finish." },
              { name: "Trim Restoration", price: "from $55", body: "Faded, gray plastic trim ages a car faster than almost anything else. We restore color and apply a protective coating that holds up through washes. Priced by severity and trim coverage." },
              { name: "Scratch Removal", price: "from $50", body: "Light scratches and swirls can often be polished out, but every scratch is different — depth, paint type, and location all change what's possible, and no single process fixes them all. Reach out and we'll talk through your goals and what results to expect before we start." },
            ].map((addon) => (
              <div key={addon.name} className="bg-[#0d1f16] border border-[#1a3020] rounded-[14px] p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="text-[13px] font-semibold text-[#f0ebe0] leading-tight">{addon.name}</div>
                  <div className="font-['Cormorant_Garamond',serif] text-[18px] font-bold text-[#C9A84C] shrink-0">{addon.price}</div>
                </div>
                <p className="text-[13px] text-[#5a9468] leading-[1.7]">{addon.body}</p>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#2e5c3a] leading-[1.75] mt-4">
            Add-on pricing is per service at time of booking. Some add-ons are condition-dependent — if scope changes on-site, we&apos;ll tell you before we start. No surprises.
          </p>
        </div>

        {/* CROWN REFRESH */}
        <div className="bg-[#0d1f16] border border-[#1a3020] rounded-[14px] p-8 md:p-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-start">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#3d6b48] mb-2.5">Maintenance</div>
              <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold mb-2 leading-[1.1]">
                Crown Refresh
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[34px] font-semibold text-[#C9A84C] mb-1">
                $85{" "}
                <span className="text-sm font-['DM_Sans',sans-serif] font-normal text-[#3d6b48]">starting</span>
              </div>
              <div className="text-[11px] text-[#3d6b48] mb-2.5">$105 SUV / $120 XL</div>
              <p className="text-[12px] text-[#3d6b48] leading-[1.75] max-w-[260px]">
                Maintenance for in-between details so your vehicle is clean, always. Best for vehicles serviced within the last 60 days. The more often you book, the less it costs — Refresh pricing scales with how frequent your vehicle is serviced. Heavier conditions requiring deeper cleaning will be charged accordingly.
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                {[
                  "Exterior Foam Bath & Hand Wash",
                  "Tires Cleaned and Dressed",
                  "Wheel Faces Cleaned and Hydrophobics Refreshed",
                  "Streak-Free Glass",
                  "Gentle Wipe Down for All Surfaces",
                  "Light Vacuum",
                  "Floor Mat Cleaned and Dressed",
                  "Polymer Wax/Ceramic Sealant Booster",
                ].map((item) => (
                  <li key={item} className="text-[12px] text-[#7aa882] flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] mt-[6px] flex-shrink-0 opacity-45" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="bg-transparent! border border-[#1e3828]! text-[#7aa882]! hover:border-[#C9A84C]! hover:text-[#C9A84C]! text-[11px] tracking-[0.1em] uppercase font-semibold py-3 px-6"
              >
                <Link href="/book?package=Crown+Refresh">Book Refresh</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes priceIn {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
