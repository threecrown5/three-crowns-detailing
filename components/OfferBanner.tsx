"use client";

import { useState } from "react";
import { currentOffer } from "@/lib/offers";
import { ClaimOfferPopup } from "@/components/ClaimOfferPopup";

const Eyebrow = () => (
  <div className="flex items-center gap-2.5 text-xs tracking-[0.24em] font-semibold text-gold">
    <span className="size-[7px] bg-gold rotate-45 shrink-0" />
    {currentOffer.kicker.toUpperCase()}
  </div>
);

function PriceRow({ size }: { size: "lg" | "sm" }) {
  const oldPrice =
    size === "lg"
      ? "text-[28px] after:-left-[5px] after:-right-[5px] after:h-[2px]"
      : "text-[21px] after:-left-[4px] after:-right-[4px] after:h-[2px]";
  const freePrice = size === "lg" ? "text-[38px]" : "text-[27px]";

  return (
    <div className="flex items-baseline gap-3">
      <span
        className={`relative font-['Cormorant_Garamond',serif] font-bold text-[#a9b8b1] leading-none after:content-[''] after:absolute after:top-1/2 after:bg-[#6f7f78] after:-translate-y-1/2 ${oldPrice}`}
      >
        ${currentOffer.value}
      </span>
      <span className={`font-['Cormorant_Garamond',serif] font-bold text-gold leading-none ${freePrice}`}>
        Free
      </span>
    </div>
  );
}

export function OfferBanner({ variant = "wide" }: { variant?: "wide" | "narrow" }) {
  const [open, setOpen] = useState(false);

  if (variant === "narrow") {
    return (
      <div className="rounded-[10px] border border-gold/45 bg-gradient-to-br from-viridian-mid to-viridian-dark">
        <div className="flex flex-col gap-3 px-7 py-7 pb-[22px]">
          <Eyebrow />
          <p className="font-['Cormorant_Garamond',serif] font-bold text-[26px] leading-[1.2] text-[#f1ece0]">
            {currentOffer.headline}
          </p>
          <p className="text-[13px] leading-relaxed text-[#b9c7c0]">{currentOffer.body}</p>
        </div>
        <div className="flex items-center justify-between gap-5 border-t border-dashed border-gold/45 bg-black/[0.18] rounded-b-[10px] px-7 py-[18px]">
          <PriceRow size="sm" />
          <p className="text-[12px] text-gold text-right">{currentOffer.constraint}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-[10px] border border-gold/45 bg-gradient-to-br from-viridian-mid to-viridian-dark md:grid md:grid-cols-[minmax(0,1fr)_240px]">
        <div className="flex flex-col gap-[14px] px-7 py-7 pb-[22px] md:px-10 md:py-9">
          <Eyebrow />
          <p className="font-['Cormorant_Garamond',serif] font-bold text-[26px] md:text-[31px] leading-[1.15] text-[#f1ece0] max-w-[460px]">
            {currentOffer.headline}
          </p>
          <p className="text-[13px] md:text-[14px] leading-relaxed text-[#b9c7c0] max-w-[430px]">
            {currentOffer.body}
          </p>
        </div>

        <div className="flex flex-col gap-3 border-t border-dashed border-gold/45 bg-black/[0.18] px-7 py-[18px] md:border-t-0 md:border-l md:justify-center md:px-7 md:py-7 md:rounded-r-[10px]">
          <PriceRow size="lg" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full bg-gold text-[#0a100d] font-semibold text-[13px] tracking-[0.08em] py-3 px-4 rounded-[4px] hover:bg-[#dab35a] transition-colors"
          >
            Claim offer
          </button>
          <p className="text-[12px] leading-snug text-gold">{currentOffer.constraint}</p>
        </div>
      </div>

      <ClaimOfferPopup open={open} onOpenChange={setOpen} />
    </>
  );
}
