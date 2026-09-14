import Link from "next/link";
import { currentOffer } from "@/lib/offers";

// "Editorial split" treatment: gold rule on the left edge, offer copy on
// the left, deadline + action on the right. Quieter than a boxed promo,
// closer to the rest of the site's language.
export function OfferBanner({
  ctaLabel,
  ctaHref,
}: {
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 border-l-[3px] border-gold bg-gradient-to-r from-viridian-mid/65 to-viridian-dark px-6 py-9 md:px-10 md:py-11 text-left">
      <div className="flex-1 min-w-[260px]">
        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-gold mb-3">
          {currentOffer.kicker}
        </p>
        <p className="font-['Cormorant_Garamond',serif] text-2xl md:text-[32px] font-bold leading-snug text-[#f0ebe0]">
          {currentOffer.headline}
        </p>
        <p className="text-sm font-light text-white/55 mt-3 max-w-[440px]">
          {currentOffer.subCopy}
        </p>
      </div>

      <div className="flex-none max-w-[200px]">
        <p className="text-xs font-medium text-gold/80 leading-snug mb-3.5">
          {currentOffer.constraint}
        </p>
        {ctaHref && ctaLabel && (
          <Link
            href={ctaHref}
            className="inline-block border border-gold text-gold text-sm font-medium tracking-[0.06em] px-7 py-3.5 rounded-sm hover:bg-gold hover:text-black transition-colors"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </div>
  );
}
