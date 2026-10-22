"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

const fieldClass =
  "w-full bg-[#0b221b] border border-gold/25 rounded-md px-4 py-3.5 text-[15px] text-[#f1ece0] placeholder:text-[#b9c7c0]/50 outline-none focus:border-gold transition-colors";
const labelClass =
  "text-xs tracking-[0.18em] font-semibold text-[#b9c7c0] uppercase";

const interests = ["Detailing", "Headlight Restoration", "Other"] as const;

export function BookNowPopup({
  open,
  onOpenChange,
  leadSource = "Book Now Popup",
  fixedInterest,
  interestLabel,
  packageName,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Distinguishes which page/button triggered this popup in the email. */
  leadSource?: string;
  /** Skips the "what are you interested in?" question (e.g. "Detailing"). */
  fixedInterest?: string;
  /** What to show in place of the question (e.g. "King Detail"). */
  interestLabel?: string;
  /** Package the visitor clicked (e.g. "King"); sent as a hidden field. */
  packageName?: string;
}) {
  const router = useRouter();
  const [interest, setInterest] = useState<string>(fixedInterest ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [selectionError, setSelectionError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    if (!interest) {
      setSelectionError(true);
      return;
    }
    setSelectionError(false);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const page = window.location.pathname;
    formData.append("page", page);
    formData.append(
      "_subject",
      `New Quote Request - ${interestLabel ?? interest} — ${page}`
    );

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
      setTimeout(() => {
        setError(false);
        setSelectionError(false);
        setInterest(fixedInterest ?? "");
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton
        className="max-w-[560px] w-full gap-[22px] rounded-xl border border-gold/55 bg-gradient-to-br from-viridian-mid to-viridian-dark px-10 py-9 max-h-[calc(100vh-48px)] overflow-y-auto [&_[data-slot=dialog-close]]:top-[18px] [&_[data-slot=dialog-close]]:right-[18px] [&_[data-slot=dialog-close]]:size-9 [&_[data-slot=dialog-close]]:flex [&_[data-slot=dialog-close]]:items-center [&_[data-slot=dialog-close]]:justify-center [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:bg-black/30 [&_[data-slot=dialog-close]]:text-[#b9c7c0] [&_[data-slot=dialog-close]]:hover:text-[#f1ece0]"
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2.5 text-xs tracking-[0.24em] font-semibold text-gold">
            <span className="size-[7px] bg-gold rotate-45" />
            GET A FREE QUOTE
          </div>
          <DialogTitle className="font-['Cormorant_Garamond',serif] text-[32px] font-bold leading-[1.15] text-[#f1ece0]">
            Tell us about your car
          </DialogTitle>
          <p className="text-sm text-[#b9c7c0]">
            We&apos;ll reach out within the hour to confirm timing and pricing.
          </p>
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

          {fixedInterest ? (
            <div className="flex flex-col gap-2">
              <span className={labelClass}>You&apos;re requesting</span>
              <p className="text-lg font-semibold text-gold">
                {interestLabel ?? fixedInterest}
              </p>
              <input type="hidden" name="interested_in" value={fixedInterest} />
            </div>
          ) : (
            <fieldset className="flex flex-col gap-2">
              <legend className={labelClass}>What are you interested in?</legend>
              <div className="grid grid-cols-3 gap-2.5 mt-1">
                {interests.map((option) => {
                  const checked = interest === option;
                  return (
                    <label
                      key={option}
                      className={[
                        "flex items-center justify-center text-center border rounded-md px-2 py-3 text-[13px] cursor-pointer transition-colors leading-snug",
                        checked
                          ? "border-gold bg-gold/10 text-[#f1ece0]"
                          : "border-gold/25 bg-[#0b221b] text-[#b9c7c0] hover:border-gold/50",
                      ].join(" ")}
                    >
                      <input
                        type="radio"
                        name="interested_in"
                        value={option}
                        checked={checked}
                        onChange={() => setInterest(option)}
                        className="sr-only"
                      />
                      {option}
                    </label>
                  );
                })}
              </div>
              {selectionError && (
                <p className="text-red-400 text-xs">Please select one so we know how to help.</p>
              )}
            </fieldset>
          )}

          <input type="hidden" name="lead_source" value={leadSource} />
          {packageName && <input type="hidden" name="package" value={packageName} />}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* Honeypot — hidden from humans, formsubmit.co discards filled submissions. */}
          <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-gold text-[#0a100d] font-bold text-[15px] tracking-[0.1em] uppercase py-[18px] rounded-md hover:bg-[#dab35a] transition-colors disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Get My Free Quote"}
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
            No payment required to book
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
