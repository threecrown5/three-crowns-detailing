"use client";

import { trackConversion, CONVERSIONS } from "@/lib/gtag";

export function SmsLink({
  className,
  children,
  body,
  onClick,
  ...props
}: Omit<React.ComponentProps<"a">, "href" | "onClick"> & {
  body?: string;
  onClick?: () => void;
}) {
  const bodyParam = body ? `&body=${encodeURIComponent(body)}` : "";

  return (
    <a
      href={`sms:+18182967347?${bodyParam}`}
      className={className}
      onClick={() => {
        trackConversion(CONVERSIONS.textClick);
        onClick?.();
      }}
      {...props}
    >
      {children}
    </a>
  );
}
