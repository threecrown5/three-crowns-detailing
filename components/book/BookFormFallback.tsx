import { Input } from "@/components/ui/input";
import { tiers, packages } from "@/lib/pricing";

const selectClasses =
  "flex w-full items-center justify-between gap-2 rounded-md border border-white/15 bg-black/35 px-3 h-14 text-sm text-white/40 [&>option]:text-black";

// Static, non-interactive duplicate of BookForm's markup. Rendered on the
// server (and in the prerendered HTML) while BookForm — which needs
// useSearchParams — resolves on the client behind the Suspense boundary
// in app/book/page.tsx. Keep this in visual sync with BookForm.
export function BookFormFallback() {
  return (
    <div aria-hidden="true" className="space-y-4">
      <p className="text-lg font-light text-white">Get a free quote in seconds.</p>
      <p className="text-xs tracking-[3px] uppercase text-gold opacity-70">
        We&apos;ll reach out within the hour
      </p>

      <Input
        type="text"
        placeholder="Your name"
        disabled
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 h-14"
      />
      <Input
        type="tel"
        placeholder="Phone number"
        disabled
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 h-14"
      />
      <Input
        type="email"
        placeholder="Email"
        disabled
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 h-14"
      />

      <select disabled className={selectClasses} defaultValue="">
        <option value="" disabled>
          Vehicle size
        </option>
        {tiers.map((t) => (
          <option key={t.key} value={t.label}>
            {t.label}
          </option>
        ))}
      </select>

      <div>
        <p className="text-sm text-white/70 mb-2.5">
          Which package are you most interested in?
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {packages.map((p) => (
            <div
              key={p.key}
              className="flex items-center gap-2.5 border border-white/15 bg-black/35 text-white/70 rounded-sm px-3.5 h-14"
            >
              <span className="size-4 shrink-0 border border-white/30 rounded-[3px]" />
              <span className="text-sm">{p.name}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled
        className="w-full bg-gold text-black font-semibold tracking-wider uppercase text-xs h-14 rounded-sm opacity-50"
      >
        Get My Free Quote →
      </button>

      <p className="text-xs opacity-60">
        No payment required. We&apos;ll reach out to confirm timing and answer any questions.
      </p>
    </div>
  );
}
