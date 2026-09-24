"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeadlightBookingPopup } from "@/components/HeadlightBookingPopup";

export function HeadlightBookButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setOpen(true)} className={className}>
        Book Headlight Restoration
      </Button>
      <HeadlightBookingPopup open={open} onOpenChange={setOpen} />
    </>
  );
}
