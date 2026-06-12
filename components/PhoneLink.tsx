"use client";

import { trackConversion, CONVERSIONS } from "@/lib/gtag";

export function PhoneLink({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href="tel:+18182967347"
      className={className}
      onClick={() => {
        trackConversion(CONVERSIONS.phoneClick);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
