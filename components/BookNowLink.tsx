"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookNowPopup } from "@/components/BookNowPopup";

// A real <a href> so the button still reaches /book if JS fails to load;
// with JS, the click opens the quote popup instead.
export function BookNowLink({
  href,
  className,
  children,
  leadSource,
  defaultInterest,
  packageName,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  leadSource?: string;
  defaultInterest?: string;
  packageName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button asChild className={className}>
        <a
          href={href}
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          {children}
        </a>
      </Button>
      <BookNowPopup
        open={open}
        onOpenChange={setOpen}
        leadSource={leadSource}
        defaultInterest={defaultInterest}
        packageName={packageName}
      />
    </>
  );
}
