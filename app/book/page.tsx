"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Phone, MessageCircle, Truck, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

const trustItems = [
  {
    title: "Mobile Convenience",
    description: "We come directly to your home or workplace.",
    icon: Truck,
  },
  {
    title: "Professional Products",
    description: "Safe for all paint types and interior materials.",
    icon: Sparkles,
  },
  {
    title: "Fast Response",
    description: "We'll reach out within the hour to confirm.",
    icon: Clock,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "If something isn't right, we'll make it right.",
    icon: ShieldCheck,
  },
];

export default function BookPage() {
  return (
    <Suspense>
      <BookPageContent />
    </Suspense>
  );
}

function BookPageContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(
    searchParams.get("package") || ""
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `New Detail Request - ${selectedPackage || "No package selected"}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      const res = await fetch("https://formsubmit.co/ajax/threecrowns.detailing@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHeader
        label="APPOINTMENT"
        heading="We'll take care of it."
        subtitle="Handled. Every time."
      />

      <section className="pb-20 px-6 md:px-20 w-full min-w-0 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:items-start">

          {/* ── LEFT: Form + Call/Text ── */}
          <div className="lg:col-span-3">

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Mini headline + label */}
                <p className="text-lg font-light text-white">
                  Get a free quote in seconds.
                </p>
                <p className="text-xs tracking-[3px] uppercase text-gold opacity-70">
                  We'll reach out within the hour
                </p>

                {/* Name */}
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-black/35 border-white/15 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-14"
                />

                {/* Phone */}
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="bg-black/35 border-white/15 text-white placeholder:text-white/40 focus:border-gold focus:ring-gold h-14"
                />

                {/* Package — optional */}
                <Select
                  name="package"
                  value={selectedPackage}
                  onValueChange={setSelectedPackage}
                >
                  <SelectTrigger className="bg-black/35 border-white/15 text-white h-14 focus:border-gold focus:ring-gold">
                    <SelectValue placeholder="Which package interests you? (optional)" />
                  </SelectTrigger>
                  <SelectContent className="bg-viridian-dark border-gold/20 text-white">
                    <SelectItem value="Prince Detail">Prince — From $170</SelectItem>
                    <SelectItem value="King Detail">King — From $270</SelectItem>
                    <SelectItem value="Queen Detail">Queen — From $350</SelectItem>
                    <SelectItem value="Crown Refresh">Crown Refresh — Maintenance wash</SelectItem>
                    <SelectItem value="Not sure">Not sure yet — just want a quote</SelectItem>
                  </SelectContent>
                </Select>

                {/* Submit */}
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
                  No payment required. We'll reach out to confirm timing and answer any questions.
                </p>

              </form>
            ) : (
              <div className="text-center py-16 px-8 border border-gold/20 rounded-xl bg-black/30 animate-in fade-in slide-in-from-bottom-3 duration-400">
                <CheckCircle className="mx-auto mb-4 text-gold" size={48} />
                <h2 className="text-2xl text-gold font-semibold mb-3">You're all set.</h2>
                <p className="opacity-70">
                  We'll reach out shortly to confirm your appointment.<br />
                  Questions? Call or text (818) 296-7347.
                </p>
              </div>
            )}

            {/* OR divider */}
            <div className="flex items-center gap-4 mt-8 mb-6">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs tracking-[3px] uppercase text-white/30">or reach us directly</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Call & Text — secondary */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:8182967347"
                className="flex items-center justify-center gap-3 border border-gold/40 text-gold text-sm uppercase px-6 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all"
              >
                <Phone size={15} />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Call Us</span>
                  <span className="text-xs font-normal opacity-60">(818) 296-7347</span>
                </div>
              </a>
              <a
                href="sms:8182967347&body=Hi, I'd like to get a quote for a detail."
                className="flex items-center justify-center gap-3 border border-gold/40 text-gold text-sm uppercase px-6 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all"
              >
                <MessageCircle size={15} />
                <div className="flex flex-col items-start">
                  <span className="text-sm font-semibold">Text Us</span>
                  <span className="text-xs font-normal opacity-60">Quick quote</span>
                </div>
              </a>
            </div>

          </div>

          {/* ── RIGHT: What to Expect ── */}
          <div className="lg:col-span-2">
            <div className="lg:border-l lg:border-gold/15 lg:pl-16">
              <h3 className="text-xs tracking-[4px] uppercase text-gold opacity-80 mb-8">
                What to Expect
              </h3>
              <div className="space-y-8">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold tracking-wide text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="opacity-50 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Trust bar */}
              <div className="grid grid-cols-3 border border-gold/10 rounded-sm overflow-hidden mt-12">
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 border-r border-gold/10 text-center">
                  <span className="text-gold text-xl font-light">31</span>
                  <span className="text-xs opacity-40 mt-1">5-Star Reviews</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 border-r border-gold/10 text-center">
                  <span className="text-gold text-xl font-light">1hr</span>
                  <span className="text-xs opacity-40 mt-1">Avg. Response</span>
                </div>
                <div className="flex flex-col items-center justify-center py-4 px-3 bg-black/20 text-center">
                  <span className="text-gold text-xl font-light">$0</span>
                  <span className="text-xs opacity-40 mt-1">Drop-off needed</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
