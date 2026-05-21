"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Phone, MessageCircle, Star, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

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

      <section className="pb-20 px-6 md:px-20 w-full min-w-0 max-w-[800px] mx-auto">

        {/* ── PRIMARY CTAs — Call & Text ── */}
        <div className="mb-10">
          <p className="text-xs tracking-[3px] uppercase text-gold opacity-70 text-center mb-5">
            Fastest way to book
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="tel:8182967347"
              className="flex items-center justify-center gap-3 bg-gold text-black font-semibold text-sm tracking-wide uppercase px-6 py-5 rounded-sm hover:bg-gold/90 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
            >
              <Phone size={16} />
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Call Us</span>
                <span className="text-xs font-normal opacity-70">(818) 296-7347</span>
              </div>
            </a>
            <a
              href="sms:8182967347&body=Hi, I'd like to get a quote for a detail."
              className="flex items-center justify-center gap-3 border border-gold/40 text-gold text-sm tracking-wide uppercase px-6 py-5 rounded-sm hover:border-gold hover:bg-gold/5 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold">Text Us</span>
                <span className="text-xs font-normal opacity-70">Quick quote</span>
              </div>
            </a>
          </div>
        </div>

        {/* ── OR DIVIDER ── */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-white/8" />
          <span className="text-xs tracking-[3px] uppercase text-white/30">or leave your info</span>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        {/* ── FORM ── */}
        <div className="max-w-[560px]">
          <p className="text-xs tracking-[3px] uppercase text-gold opacity-70 mb-6">
            We'll call you within the hour
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

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

              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-transparent! border border-gold/30 text-white! px-10 py-2.5 h-14! tracking-wider uppercase text-xs font-semibold hover:border-gold/60 hover:bg-gold/5! transition-all disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Request a Quote →"}
              </Button>

              {error && (
                <p className="text-red-400 text-xs mt-2">
                  Something went wrong. Please try again or call (818) 296-7347.
                </p>
              )}
              <p className="text-xs opacity-40">
                No payment required. We'll reach out to confirm timing and answer any questions.
              </p>
            </form>
          ) : (
            <div className="text-center py-16 px-8 border border-gold/20 rounded-xl bg-black/30 animate-in fade-in slide-in-from-bottom-3 duration-400">
              <CheckCircle className="mx-auto mb-4 text-gold" size={48} />
              <h2 className="text-2xl text-gold font-semibold mb-3">You're all set.</h2>
              <p className="opacity-70">
                We'll call you shortly to confirm your appointment.<br />
                Questions? Call or text (818) 296-7347.
              </p>
            </div>
          )}
        </div>

        {/* ── TRUST BAR ── */}
        <div className="grid grid-cols-3 border border-gold/10 rounded-sm overflow-hidden mt-12 max-w-[560px]">
          <div className="flex flex-col items-center justify-center py-5 px-4 bg-black/20 border-r border-gold/10 text-center">
            <Star size={14} className="text-gold mb-2 opacity-70" />
            <span className="text-gold font-light text-xl" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>31</span>
            <span className="text-xs opacity-40 mt-1 tracking-wide">5-Star Reviews</span>
          </div>
          <div className="flex flex-col items-center justify-center py-5 px-4 bg-black/20 border-r border-gold/10 text-center">
            <Clock size={14} className="text-gold mb-2 opacity-70" />
            <span className="text-gold font-light text-xl" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>1hr</span>
            <span className="text-xs opacity-40 mt-1 tracking-wide">Avg. Response</span>
          </div>
          <div className="flex flex-col items-center justify-center py-5 px-4 bg-black/20 text-center">
            <MapPin size={14} className="text-gold mb-2 opacity-70" />
            <span className="text-gold font-light text-xl" style={{ fontFamily: 'var(--font-cormorant, serif)' }}>$0</span>
            <span className="text-xs opacity-40 mt-1 tracking-wide">Drop-off needed</span>
          </div>
        </div>

        {/* ── SERVICE AREA ── */}
        <p className="text-xs text-center opacity-30 tracking-widest mt-6 max-w-[560px]">
          GLENDALE · PASADENA · BURBANK · AND SURROUNDING AREAS
        </p>

      </section>
    </>
  );
}
