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
    description: "We'll call you within the hour to confirm.",
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
 
          {/* ── LEFT: Call/Text + Form ── */}
          <div className="lg:col-span-3">
 
            {/* Call & Text buttons */}
            <div className="mb-8">
              <p className="text-xs tracking-[3px] uppercase text-gold opacity-70 mb-4">
                Fastest way to book
              </p>
              <div className="grid grid-cols-1 gap-4">
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
 
            {/* OR divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs tracking-[3px] uppercase text-white/30">or leave your info</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
 
            {/* Form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-xs tracking-[3px] uppercase text-gold opacity-70">
                  We'll call you within the hour
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-14"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-14"
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
                  className="bg-gold! text-white! px-10 py-2.5 h-auto! tracking-wider uppercase text-xs font-semibold hover:bg-gold-soft! transition-all disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Request a Quote →"}
                </Button>
 
                {error && (
                  <p className="text-red-400 text-xs mt-2">
                    Something went wrong. Please try again or call (818) 296-7347.
                  </p>
                )}
                <p className="text-xs opacity-50">
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
 
          {/* ── RIGHT: What to Expect ── */}
          <div className="lg:col-span-2 lg:self-start lg:mt-0 lg:pt-0">
            <div className="lg:border-l lg:border-gold/15 lg:pl-16 pt-0">
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
 
              {/* Trust bar — desktop only */}
              <div className="hidden lg:grid grid-cols-3 border border-gold/10 rounded-sm overflow-hidden mt-12">
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
