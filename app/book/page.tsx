"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Truck, ShieldCheck, Clock, Sparkles } from "lucide-react";
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
    description: "Most booking requests are confirmed within 1-2 hours.",
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
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg) {
      setSelectedPackage(pkg);
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", `New Detail Request - ${selectedPackage || "No package selected"}`);
    formData.append("_captcha", "false");
    formData.append("_template", "table");

    try {
      await fetch("https://formsubmit.co/ajax/threecrowns.detailing@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <>
      <PageHeader
        label="APPOINTMENT"
        heading="Request Your Detail"
        subtitle="Request your mobile detailing appointment. We will contact you shortly to confirm."
      />
      <section className="pb-20 px-6 md:px-20 w-full min-w-0 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-14"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-14"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input
                    type="text"
                    name="vehicle"
                    placeholder="Vehicle Year / Make / Model"
                    className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold h-14"
                  />
                  <Select
                    name="package"
                    value={selectedPackage}
                    onValueChange={setSelectedPackage}
                  >
                    <SelectTrigger className="bg-black/35 border-white/15 text-white h-14 focus:border-gold focus:ring-gold">
                      <SelectValue placeholder="Select Package" />
                    </SelectTrigger>
                    <SelectContent className="bg-viridian-dark border-gold/20 text-white">
                      <SelectItem value="Prince Detail">Prince Detail</SelectItem>
                      <SelectItem value="King Detail">King Detail</SelectItem>
                      <SelectItem value="Queen Detail">Queen Detail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Textarea
                  name="details"
                  rows={4}
                  placeholder="Address & Additional Details"
                  className="bg-black/35 border-white/15 text-white placeholder:text-white/60 focus:border-gold focus:ring-gold"
                />

                <Button
                  type="submit"
                  className="bg-gold! text-white! px-10 py-2.5 h-auto! tracking-wider uppercase text-xs font-semibold hover:bg-gold-soft! transition-all"
                >
                  Submit
                </Button>
                <p className="text-xs opacity-50">
                  No payment required to request your appointment.
                </p>
              </form>
            ) : (
              <div className="text-center py-16 px-8 border border-gold/20 rounded-xl bg-black/30 animate-in fade-in slide-in-from-bottom-3 duration-400">
                <CheckCircle className="mx-auto mb-4 text-gold" size={48} />
                <h2 className="text-2xl text-gold font-semibold mb-3">
                  Booking Request Sent
                </h2>
                <p className="opacity-70">
                  Thank you for choosing Three Crowns. We will contact you
                  shortly.
                </p>
              </div>
            )}
          </div>

          {/* Right: What to Expect */}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
