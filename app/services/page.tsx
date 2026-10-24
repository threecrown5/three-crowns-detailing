"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OfferBanner } from "@/components/OfferBanner";
import { ReviewStrip } from "@/components/ReviewStrip";
import { PhoneLink } from "@/components/PhoneLink";
import { SmsLink } from "@/components/SmsLink";
import { BookNowLink } from "@/components/BookNowLink";
import { REVIEW_COUNT } from "@/lib/reviews";
import { formatPrice, getPrice, HEADLIGHT_STANDALONE, type TierKey } from "@/lib/pricing";

const playfair = Playfair_Display({ subsets: ["latin"] });

const jumpLinks = [
  { id: "packages", label: "Packages" },
  { id: "add-ons", label: "Add-ons" },
  { id: "maintenance", label: "Maintenance" },
  { id: "reviews", label: "Reviews" },
];

function scrollToId(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

const callTextRowClass = "grid grid-cols-2 gap-3";
const callTextButtonClass =
  "flex items-center justify-center gap-2.5 border border-[#C9A84C]/40 text-[#C9A84C] text-xs uppercase px-5 py-3.5 min-h-11 rounded-md hover:border-[#C9A84C] hover:bg-[#C9A84C]/5 transition-all";

const tiers: {
  key: TierKey;
  label: string;
  sub: string;
  icon: string;
  tierLabel: string;
}[] = [
  {
    key: "t1",
    label: "Sedan / Sport",
    sub: "Mustang GT · BMW 3 Series · Mercedes C-Class\nCoupes & Sport Sedans",
    icon: "/images/icon_sedan.png",
    tierLabel: "Sedan · Sport · Coupe",
  },
  {
    key: "t2",
    label: "SUV / Truck",
    sub: "BMW X5 · Mercedes GLE · Range Rover Sport\nF-150 · Silverado · Tacoma",
    icon: "/images/icon_suv.png",
    tierLabel: "SUV · Truck",
  },
  {
    key: "t3",
    label: "XL SUV / HD Truck",
    sub: "Cadillac Escalade · Lincoln Navigator · Tahoe · Expedition\nF-250 · Ram 2500 · Silverado HD · 3-Row SUVs",
    icon: "/images/icon_xl.png",
    tierLabel: "XL SUV · HD Truck",
  },
];

const packages: {
  key: "queen" | "king" | "prince";
  name: string;
  popular: boolean;
  tagline: string;
  blurb: string;
  extraLabel: string;
  extra: string;
  included: { text: string; href?: string }[];
}[] = [
  {
    key: "queen",
    name: "Queen",
    popular: false,
    tagline: "The full experience.\nNothing held back.",
    blurb:
      "Walk up to your car in the sun and see depth in the paint you haven't seen since the dealership. The shine you remember, back and built to hold.",
    extraLabel: "Everything in King, plus",
    extra: "A one-step gloss enhancement pass that restores depth and clarity to the paint.",
    included: [
      { text: "Vehicle Health Check Card" },
      { text: "Priority rebooking slot" },
      { text: "50% off Crown Refresh", href: "#maintenance" },
    ],
  },
  {
    key: "king",
    name: "King",
    popular: true,
    tagline: "For those who take\ntheir car seriously.",
    blurb:
      "Run your palm across the paint and feel it smooth as glass. Leather soft again, seats and carpet deep clean, every surface shielded from the California sun.",
    extraLabel: "Everything in Prince, plus",
    extra:
      "Leather conditioning, carpet and upholstery shampoo, UV protection, clay bar and iron decontamination, ceramic spray sealant.",
    included: [{ text: "Vehicle Health Check Card" }, { text: "Priority rebooking slot" }],
  },
  {
    key: "prince",
    name: "Prince",
    popular: false,
    tagline: "The clean slate.",
    blurb:
      "Open your car tomorrow morning to a cabin that feels reset. Glass so clear you forget it's there, carpet that feels clean under your hand, wheels bright again, and water beading off the paint for weeks.",
    extraLabel: "Inside and out",
    extra:
      "Full interior deep clean, foam wash, wheels and tires, and a polymer wax finish. Every new client starts here.",
    included: [{ text: "Vehicle Health Check Card" }, { text: "Priority rebooking slot" }],
  },
];

export default function ServicesPage() {
  const [tierIdx, setTierIdx] = useState(0);
  const tier = tiers[tierIdx];
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let current: string | null = null;
        for (const l of jumpLinks) {
          const el = document.getElementById(l.id);
          if (el && el.getBoundingClientRect().top <= 200) current = l.id;
        }
        setActiveTab(current);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!activeTab) return;
    const strip = stripRef.current;
    const tab = strip?.querySelector<HTMLElement>(`[data-tab="${activeTab}"]`);
    if (strip && tab) strip.scrollTo({ left: tab.offsetLeft - 24, behavior: "smooth" });
  }, [activeTab]);

  return (
    <>
      <header className="pt-[140px] md:pt-[180px] pb-8 px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto w-full">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#C9A84C] mb-5">
          Services &amp; Pricing
        </p>
        <h1 className="text-[40px] md:text-6xl font-normal leading-[1.1] mb-6 max-w-[900px]">
          Mobile Detailing Packages &amp; Pricing
          <span className="hidden md:inline"> — Glendale, Pasadena &amp; Burbank</span>
        </h1>
        <p className="text-lg text-[#a9bdb0] leading-relaxed max-w-[520px] mb-6">
          Mobile detailing at your driveway. No drop-off. No waiting.
        </p>
        <a
          href="#reviews"
          onClick={(e) => scrollToId(e, "reviews")}
          className="inline-flex items-center gap-3 min-h-11 text-base"
        >
          <span aria-hidden="true" className="tracking-[2px] text-[#C9A84C]">★★★★★</span>
          <span className="font-medium text-[#f0ebe0]">5.0</span>
          <span aria-hidden="true" className="text-[#a9bdb0]/60">•</span>
          <span className="text-[#a9bdb0]">{REVIEW_COUNT} Google reviews ›</span>
        </a>
      </header>

      <nav aria-label="On this page" className="border-y border-[#C9A84C]/15 mb-10">
        <div
          ref={stripRef}
          className="flex justify-between md:justify-start gap-4 md:gap-8 overflow-x-auto px-6 md:px-20 max-w-[1200px] min-[2000px]:max-w-[1500px] mx-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {jumpLinks.map((l) => {
            const active = activeTab === l.id;
            return (
              <a
                key={l.id}
                data-tab={l.id}
                href={`#${l.id}`}
                aria-current={active ? "true" : undefined}
                onClick={(e) => {
                  setActiveTab(l.id);
                  scrollToId(e, l.id);
                }}
                className={[
                  "shrink-0 whitespace-nowrap py-4 min-h-12 text-[11px] md:text-sm uppercase tracking-[0.03em] md:tracking-[0.08em] border-b-2 -mb-px transition-colors",
                  active
                    ? "text-[#f0ebe0]! border-[#C9A84C]"
                    : "text-[#a9bdb0]! border-transparent hover:text-[#f0ebe0]!",
                ].join(" ")}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </nav>

      <div className="max-w-[1020px] mx-auto px-5 pb-24">

        {/* VEHICLE SELECTOR */}
        <div id="detailing" className="mb-12 scroll-mt-28">
          <p className="text-center text-[11px] text-[#9bb8a3] tracking-[0.1em] uppercase mb-[18px]">
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
                    style={{ color: active ? "#f0ebe0" : "#9bb8a3" }}
                  >
                    {t.label}
                  </div>
                  <div
                    className="hidden sm:block text-[10px] leading-[1.5] whitespace-pre-line transition-colors duration-200"
                    style={{ color: active ? "#b4cdbb" : "#8aa892" }}
                  >
                    {t.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CALL / TEXT — above the package prices on mobile */}
        <div className={`${callTextRowClass} mb-10`}>
          <PhoneLink className={callTextButtonClass}>
            <Phone size={14} />
            Call Us
          </PhoneLink>
          <SmsLink
            body="Hi, I'd like a quote for a detail."
            className={callTextButtonClass}
          >
            <MessageCircle size={14} />
            Text Us
          </SmsLink>
        </div>

        {/* PACKAGES GRID */}
        <div id="packages" className="scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {packages.map((pkg) => {
              const price = getPrice(pkg.key, tier.key);
              return (
                <div
                  key={pkg.key}
                  className={[
                    "flex flex-col p-7 md:p-8 border",
                    pkg.popular
                      ? "bg-[#1d3828] border-[#8a7335]"
                      : "bg-[#1b3427] border-[#3a4a2c]",
                  ].join(" ")}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className={`${playfair.className} text-[32px] font-medium text-white leading-none`}>
                      {pkg.name}
                    </h3>
                    {pkg.popular && (
                      <span className="text-[11px] tracking-[0.18em] uppercase text-[#C9A84C]">
                        Most popular
                      </span>
                    )}
                  </div>

                  <div
                    key={`${tierIdx}-${pkg.key}`}
                    className={`${playfair.className} mt-5 mb-5 text-[56px] font-medium text-white leading-none animate-[priceIn_0.26s_cubic-bezier(0.22,1,0.36,1)_both]`}
                  >
                    {price}
                  </div>

                  <p className={`${playfair.className} text-[22px] leading-snug text-[#E2C47A] whitespace-pre-line mb-4`}>
                    {pkg.tagline}
                  </p>
                  <p className="text-[15px] leading-[1.7] text-[#f0ebe0]/90 mb-6">{pkg.blurb}</p>

                  <div className="border-t border-[#C9A84C]/25 pt-5 flex-1">
                    <p className="text-[11px] tracking-[0.16em] uppercase text-[#C9A84C] mb-2">
                      {pkg.extraLabel}
                    </p>
                    <p className="text-[13px] leading-relaxed text-[#e8e4d8]/85 mb-5">{pkg.extra}</p>

                    <p className="text-[11px] tracking-[0.16em] uppercase text-[#C9A84C] mb-3">
                      Included with {pkg.name}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {pkg.included.map((item) => (
                        <li key={item.text} className="flex items-start gap-2.5 text-[14px] leading-snug text-[#f0ebe0]">
                          <span aria-hidden="true" className="text-[#C9A84C] text-[9px] mt-[5px]">◆</span>
                          {item.href ? (
                            <a
                              href={item.href}
                              onClick={(e) => scrollToId(e, item.href!.slice(1))}
                              className="text-[#E2C47A]! underline! underline-offset-4 decoration-[#E2C47A]/50 hover:decoration-[#E2C47A] cursor-pointer"
                            >
                              {item.text} →
                            </a>
                          ) : (
                            item.text
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-7">
                    <BookNowLink
                      href={`/book?package=${pkg.name}`}
                      leadSource="Book Now Popup — Services Page"
                      fixedInterest="Detailing"
                      interestLabel={`${pkg.name} Detail`}
                      packageName={pkg.name}
                      className="w-full min-h-12 rounded-sm text-[13px] font-semibold tracking-[0.05em] transition-all py-3 bg-[#C9A84C]! text-[#091810]! border border-[#C9A84C]! hover:bg-[#d4b560]!"
                    >
                      Book {pkg.name}
                    </BookNowLink>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-[#C9A84C]/20 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 mb-14">
            <div>
              <p className={`${playfair.className} text-[20px] text-[#E2C47A] mb-2`}>The Crown Guarantee</p>
              <p className="text-[14px] leading-relaxed text-[#f0ebe0]/85">
                Not completely happy within 48 hours? We come back and make it right, free.
              </p>
            </div>
            <div>
              <p className={`${playfair.className} text-[20px] text-[#E2C47A] mb-2`}>{REVIEW_COUNT} five-star reviews</p>
              <p className="text-[14px] leading-relaxed text-[#f0ebe0]/85">
                Across Glendale, Pasadena, and Burbank.
              </p>
            </div>
            <div>
              <p className={`${playfair.className} text-[20px] text-[#E2C47A] mb-2`}>We come to you</p>
              <p className="text-[14px] leading-relaxed text-[#f0ebe0]/85">
                Your driveway, your schedule. No drop-off, no waiting room.
              </p>
            </div>
          </div>
        </div>

        {/* OFFER */}
        <div className="mb-10">
          <OfferBanner />
        </div>

        {/* ADD-ONS */}
        <div id="add-ons" className="mb-8 scroll-mt-28">
          <div className="mb-7">
            <div className="text-[10px] tracking-[0.22em] uppercase text-[#9bb8a3] mb-2">Add-On Services</div>
            <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold mb-1 leading-[1.1]">
              Customize your detail.
            </div>
            <p className="text-[14px] text-[#7aa882] leading-[1.75]">
              Add one or more services to any package. Just mention it when you book.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: "Headlight Restoration", price: `$${HEADLIGHT_STANDALONE}`, body: "Oxidized, yellowed headlights reduce visibility and make a clean car look older than it is. We wet-sand and seal both lenses with a 2K UV clear coat. Flat price per pair.", href: "/headlights" },
              { name: "Engine Bay Cleaning", price: "$75", body: "A degreased, detailed engine bay makes maintenance easier and keeps buyers interested if you ever sell. We protect sensitive components and hand-clean the bay for a clean, presentable finish." },
              { name: "Pet Hair Removal", price: "from $50", body: "Pet hair embeds into carpet and upholstery fibers in a way a standard vacuum can't touch. We use specialized tools to pull it out fully before the detail begins. Priced by severity." },
              { name: "Tar & Adhesive Removal", price: "$40", body: "Road tar, sap, sticker residue, and bonded contamination that won't come off in a wash. Treated with a dedicated solvent before the exterior detail so it doesn't affect the finish." },
              { name: "Trim Restoration", price: "from $60", body: "Faded, gray plastic trim ages a car faster than almost anything else. We restore color and apply a protective coating that holds up through washes. Priced by severity and trim coverage." },
              { name: "Scratch Removal", price: "from $50", body: "Light scratches and swirls can often be polished out, but every scratch is different — depth, paint type, and location all change what's possible, and no single process fixes them all. Reach out and we'll talk through your goals and what results to expect before we start." },
            ].map((addon) => {
              const Card = (
                <div className="bg-[#0d1f16] border border-[#1a3020] rounded-[14px] p-5 h-full transition-all duration-200 hover:border-gold/50 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.35)]">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="text-[13px] font-semibold text-[#f0ebe0] leading-tight">{addon.name}</div>
                    <div className="font-['Cormorant_Garamond',serif] text-[18px] font-bold text-[#C9A84C] shrink-0">{addon.price}</div>
                  </div>
                  <p className="text-[13px] text-[#9bb8a3] leading-[1.7]">{addon.body}</p>
                  {addon.href && (
                    <p className="text-[11px] text-[#C9A84C] tracking-[0.08em] uppercase mt-3">Learn more →</p>
                  )}
                </div>
              );
              return addon.href ? (
                <Link key={addon.name} href={addon.href} className="block h-full">
                  {Card}
                </Link>
              ) : (
                <div key={addon.name} className="h-full">{Card}</div>
              );
            })}
          </div>

          <p className="text-[13px] text-[#7aa882] leading-[1.75] mt-4">
            Add-on pricing is per service at time of booking. Some add-ons are condition-dependent — if scope changes on-site, we&apos;ll tell you before we start. No surprises.
          </p>
        </div>

        {/* CROWN REFRESH */}
        <div id="maintenance" className="bg-[#0d1f16] border border-[#1a3020] rounded-[14px] p-8 md:p-9 scroll-mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-start">
            <div>
              <div className="text-[10px] tracking-[0.22em] uppercase text-[#9bb8a3] mb-2.5">Maintenance</div>
              <div className="font-['Cormorant_Garamond',serif] text-[28px] font-bold mb-2 leading-[1.1]">
                Crown Refresh
              </div>
              <div className="font-['Cormorant_Garamond',serif] text-[34px] font-semibold text-[#C9A84C] mb-1">
                {formatPrice("refresh", "t1")}{" "}
                <span className="text-sm font-['DM_Sans',sans-serif] font-normal text-[#9bb8a3]">starting</span>
              </div>
              <div className="text-[11px] text-[#9bb8a3] mb-2.5">
                {formatPrice("refresh", "t2")} SUV / {formatPrice("refresh", "t3")} XL
              </div>
              <p className="text-[12px] text-[#9bb8a3] leading-[1.75] max-w-[260px]">
                Maintenance for in-between details so your vehicle is clean, always. Best for vehicles serviced within the last 60 days. The more often you book, the less it costs — Refresh pricing scales with how frequent your vehicle is serviced. Heavier conditions requiring deeper cleaning will be charged accordingly.
              </p>
            </div>
            <div>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-2.5 mb-6">
                {[
                  "Exterior Foam Bath & Hand Wash",
                  "Tires Cleaned and Dressed",
                  "Wheel Faces Cleaned",
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
                className="bg-transparent! border border-[#1e3828]! text-[#7aa882]! hover:border-[#C9A84C]! hover:text-[#C9A84C]! min-h-12 text-[11px] tracking-[0.1em] uppercase font-semibold py-3 px-6"
              >
                <Link href="/book?package=Crown+Refresh">Book Refresh</Link>
              </Button>
            </div>
          </div>
        </div>


        {/* REVIEWS */}
        <section id="reviews" className="scroll-mt-28 mt-12 mb-10">
          <ReviewStrip />
        </section>

        {/* CALL / TEXT — second prompt after add-ons/maintenance */}
        <div className={`${callTextRowClass} mt-10 mb-0`}>
          <PhoneLink className={callTextButtonClass}>
            <Phone size={14} />
            Call Us
          </PhoneLink>
          <SmsLink
            body="Hi, I'd like a quote for a detail."
            className={callTextButtonClass}
          >
            <MessageCircle size={14} />
            Text Us
          </SmsLink>
        </div>

        {/* SEO intro copy */}
        <p className="text-sm md:text-base opacity-60 leading-relaxed max-w-[680px] mt-12">
          Three Crowns Detailing serves clients across Glendale, Pasadena, and Burbank, CA. Every package is performed on-site at your location — priced by vehicle type, scoped to your car&apos;s actual condition, and backed by our vehicle health check at every visit.
        </p>

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
