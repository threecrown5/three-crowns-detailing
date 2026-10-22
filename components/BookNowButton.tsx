"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookNowPopup } from "@/components/BookNowPopup";

export function BookNowButton({
  className,
  children,
  leadSource,
}: {
  className?: string;
  children: React.ReactNode;
  /** Distinguishes which page/button triggered this popup in the email. */
  leadSource?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </Button>
      <BookNowPopup open={open} onOpenChange={setOpen} leadSource={leadSource} />
    </>
  );
}
