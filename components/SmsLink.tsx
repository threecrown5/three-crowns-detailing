"use client";

import { trackConversion, CONVERSIONS } from "@/lib/gtag";

export function SmsLink({
  className,
  children,
  body,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  body?: string;
  onClick?: () => void;
}) {
  const bodyParam = body ? `&body=${encodeURIComponent(body)}` : "";

  return (
    <a
      href={`sms:8182967347${bodyParam}`}
      className={className}
      onClick={() => {
        trackConversion(CONVERSIONS.textClick);
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
