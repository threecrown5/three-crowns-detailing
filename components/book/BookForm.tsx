"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { tiers, packages, tierByLabel, packageByName, formatPrice } from "@/lib/pricing";

const AUTORESPONSE = `Thanks for reaching out to Three Crowns — this is an automatic confirmation that we got your request.

JP here. I'll text you personally with your quote shortly. If you need me faster, just reply to this message or call (818) 296-7347.

One thing that'll speed this up: what's the year, make and model?

— JP, Three Crowns Detailing
Handled. Every time.`;

// The useSearchParams() consumer, isolated so only this subtree opts out
// of prerendering — see the Suspense boundary in app/book/page.tsx.
export function BookForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const initialPackage = searchParams.get("package");
  const [selectedPackages, setSelectedPackages] = useState<string[]>(
    initialPackage ? [initialPackage] : []
  );
  const [vehicleSize, setVehicleSize] = useState("");
  const [selectionError, setSelectionError] = useState(false);

  const tier = tierByLabel(vehicleSize);

  function togglePackage(name: string) {
    setSelectedPackages((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    // Radix's hidden native <select> (used for form association) defaults
    // to its first option even when nothing has actually been chosen in
    // the UI, so `required` alone won't block an empty selection here —
    // enforce it explicitly against the real component state instead.
    if (!vehicleSize || selectedPackages.length === 0) {
      setSelectionError(true);
      return;
    }
    setSelectionError(false);
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("vehicle_size", vehicleSize);

    formData.append(
      "_subject",
      `New Detail Request - ${selectedPackages.join(", ")} (${vehicleSize})`
    );
    formData.append("_captcha", "false");
    formData.append("_template", "table");
    formData.append("_autoresponse", AUTORESPONSE);

    try {
      const res = await fetch("https://formsubmit.co/ajax/threecrowns.detailing@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error();
      router.push("/thank-you");
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-lg font-light text-white">
        Get a free quote in seconds.
      </p>
      <p className="text-xs tracking-[3px] uppercase text-gold opacity-70">
        We&apos;ll reach out within the hour
      </p>

      <Input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-14"
      />

      <Input
        type="tel"
        name="phone"
        placeholder="Phone number"
        required
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-14"
      />

      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="bg-black/35 border-white/15 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-14"
      />

      <Select
        name="vehicle_size"
        value={vehicleSize}
        onValueChange={setVehicleSize}
        required
      >
        <SelectTrigger className="bg-black/35 border-white/15 text-white h-14 focus:border-gold focus:ring-gold w-full">
          <SelectValue placeholder="Vehicle size" />
        </SelectTrigger>
        <SelectContent className="bg-viridian-dark border-gold/20 text-white">
          {tiers.map((t) => (
            <SelectItem key={t.key} value={t.label}>
              {t.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <fieldset>
        <legend className="text-sm text-white/70 mb-2.5">
          Which package are you most interested in?
        </legend>
        <div className="grid grid-cols-2 gap-2.5">
          {packages.map((p) => {
            const checked = selectedPackages.includes(p.name);
            return (
              <label
                key={p.key}
                className={[
                  "flex items-center gap-2.5 border rounded-sm px-3.5 h-14 cursor-pointer transition-colors",
                  checked
                    ? "border-gold bg-gold/10 text-white"
                    : "border-white/15 bg-black/35 text-white/70 hover:border-white/30",
                ].join(" ")}
              >
                <input
                  type="checkbox"
                  name="package"
                  value={p.name}
                  checked={checked}
                  onChange={() => togglePackage(p.name)}
                  className="accent-gold size-4 shrink-0"
                />
                <span className="text-sm">{p.name}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {tier && selectedPackages.length > 0 && (
        <div className="border border-gold/30 bg-gold/[0.06] rounded-sm px-5 py-4 space-y-2">
          {selectedPackages.map((name) => {
            const pkg = packageByName(name);
            if (!pkg) return null;
            return (
              <p key={name} className="text-2xl font-light text-gold">
                {name}: From {formatPrice(pkg.key, tier.key)}
              </p>
            );
          })}
          <p className="text-xs opacity-60 leading-relaxed">
            Starting price for your vehicle. Heavy pet hair, stains, or neglected paint may add — I&apos;ll confirm the exact number before we book.
          </p>
        </div>
      )}

      {selectionError && (
        <p className="text-red-400 text-xs">
          Please select your vehicle size and at least one package to continue.
        </p>
      )}

      {/* Honeypot — hidden from humans, formsubmit.co discards filled submissions. */}
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold text-black font-semibold tracking-wider uppercase text-xs h-14 rounded-sm hover:bg-gold/90 transition-all disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Get My Free Quote →"}
      </button>

      {error && (
        <p className="text-red-400 text-xs">
          Something went wrong. Please try again or call (818) 296-7347.
        </p>
      )}

      <p className="text-xs opacity-60">
        No payment required. We&apos;ll reach out to confirm timing and answer any questions.
      </p>
    </form>
  );
}
