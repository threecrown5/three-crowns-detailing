"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { HEADLIGHT_STANDALONE } from "@/lib/pricing";

const fieldClass =
  "w-full bg-[#0b221b] border border-gold/25 rounded-md px-4 py-3.5 text-[15px] text-[#f1ece0] placeholder:text-[#b9c7c0]/50 outline-none focus:border-gold transition-colors";
const labelClass =
  "text-xs tracking-[0.18em] font-semibold text-[#b9c7c0] uppercase";

export function HeadlightBookingPopup({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/threecrowns.detailing@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );
      if (!res.ok) throw new Error();
      // /thank-you fires the Google Ads conversion tag — same as BookForm.
      router.push("/thank-you");
    } catch {
      setError(true);
      setSubmitting(false);
    }
  }

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    if (!next) {
      // Reset after the close animation so a reopen starts fresh.
      setTimeout(() => setError(false), 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton
        className="max-w-[560px] w-full gap-[22px] rounded-xl border border-gold/55 bg-gradient-to-br from-viridian-mid to-viridian-dark px-10 py-9 max-h-[calc(100vh-48px)] overflow-y-auto [&_[data-slot=dialog-close]]:top-[18px] [&_[data-slot=dialog-close]]:right-[18px] [&_[data-slot=dialog-close]]:size-9 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:bg-black/30 [&_[data-slot=dialog-close]]:text-[#b9c7c0] [&_[data-slot=dialog-close]]:hover:text-[#f1ece0]"
      >
        <>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-xs tracking-[0.24em] font-semibold text-gold">
                <span className="size-[7px] bg-gold rotate-45" />
                HEADLIGHT RESTORATION
              </div>
              <DialogTitle className="font-['Cormorant_Garamond',serif] text-[32px] font-bold leading-[1.15] text-[#f1ece0]">
                Book your headlight restoration
              </DialogTitle>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-['Cormorant_Garamond',serif] text-[30px] font-bold text-gold leading-none">
                  ${HEADLIGHT_STANDALONE}
                </span>
                <span className="text-sm text-[#b9c7c0]">per pair, any vehicle</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[14px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className={fieldClass}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className={labelClass}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(818) 555-0100"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>

              <div className="h-px bg-gold/20" />

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Year / Make / Model</label>
                <input
                  type="text"
                  name="vehicle"
                  placeholder="2019 BMW 330i"
                  className={fieldClass}
                />
              </div>

              <input type="hidden" name="package" value="Headlights" />
              <input type="hidden" name="lead_source" value="Headlight Restoration Page" />
              <input type="hidden" name="_subject" value="New Detail Request - Headlight Restoration" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              {/* Honeypot — hidden from humans, formsubmit.co discards filled submissions. */}
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gold text-[#0a100d] font-bold text-[15px] tracking-[0.1em] uppercase py-[18px] rounded-md hover:bg-[#dab35a] transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Book Headlight Restoration"}
              </button>

              {error && (
                <p className="text-red-400 text-xs text-center">
                  Something went wrong. Please try again or call (818) 296-7347.
                </p>
              )}
            </form>

            <div className="flex justify-center gap-6 text-[13px] text-[#b9c7c0]">
              <div className="flex items-center gap-2">
                <span className="size-[7px] rounded-full bg-gold" />
                Reply within the hour
              </div>
              <div className="flex items-center gap-2">
                <span className="size-[7px] rounded-full bg-gold" />
                Limited slots per week
              </div>
            </div>
          </>
      </DialogContent>
    </Dialog>
  );
}
