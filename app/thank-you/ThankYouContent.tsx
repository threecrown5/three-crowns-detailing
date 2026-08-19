"use client";

import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { trackConversion, CONVERSIONS } from "@/lib/gtag";

export function ThankYouContent() {
  useEffect(() => {
    trackConversion(CONVERSIONS.formSubmission);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <CheckCircle className="mx-auto mb-6 text-gold" size={56} />
        <h1 className="text-3xl font-semibold text-gold mb-4">Got it.</h1>
        <p className="text-lg font-light opacity-70 leading-relaxed">
          I&apos;ll reach out within a few hours to lock in your booking.
        </p>
        <p className="text-sm opacity-40 mt-4">
          Questions in the meantime? Text or call{" "}
          <a href="tel:8182967347" className="text-gold hover:underline">
            (818) 296-7347
          </a>
          .
        </p>
      </div>
    </section>
  );
}
