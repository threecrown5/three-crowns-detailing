import { Star } from "lucide-react";
import { REVIEW_COUNT } from "@/lib/reviews";

const reviews = [
  {
    name: "Cheryl L.",
    text: "They respond quickly, scheduling is super flexible, and pricing is very reasonable. The work is meticulous, and the wax has lasted over a month and still looks great. I also really appreciate how professionally they addressed a small complaint — they listened and made it right without any hassle.",
  },
  {
    name: "Jessica C.",
    text: "Professional, punctual, and extremely thorough. Both the interior and exterior were left spotless. You can tell they take pride in their work.",
  },
  {
    name: "Luke",
    text: "They went above and beyond what was required and paid attention to details most people would skip. The car looked absolutely amazing when they were done, inside and out.",
  },
  {
    name: "Haroutyun S.",
    text: "JP was professional and did a great job. He was kind enough to come out within an hour of my call. I would definitely recommend him to others.",
  },
];

export function ReviewStrip({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="text-xs tracking-[3px] uppercase text-gold opacity-70">
            {REVIEW_COUNT} Google Reviews
          </span>
        </div>

        <a
          href="https://www.google.com/search?q=Three+Crowns+Detailing&kgmid=/g/11ysl2zrrr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-[2px] uppercase text-gold/70 hover:text-gold transition-colors"
        >
          See all →
        </a>
      </div>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="border border-white/8 bg-black/20 rounded-sm px-5 py-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="text-xs font-medium text-white opacity-70">{review.name}</span>
            </div>
            <p className="text-sm opacity-50 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
