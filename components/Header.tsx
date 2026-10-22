"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { PhoneLink } from "@/components/PhoneLink";
import { SmsLink } from "@/components/SmsLink";
import { BookNowPopup } from "@/components/BookNowPopup";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const SMS_BODY = "Hi, I'd like to get a quote for a detail.";

const serviceLinks = [
  { href: "/services#detailing", label: "Detailing" },
  { href: "/services#add-ons", label: "Add-Ons" },
  { href: "/services#maintenance", label: "Refresh" },
  { href: "/headlights", label: "Headlight Restoration" },
];

// EXPERIMENTAL — trying a minimal nav (desktop: centered logo, hamburger
// opens the same full menu used on mobile; mobile: icon-only call + a
// sticky bottom Call/Book bar) from a design mockup. Easy to revert: see
// git history for this file pre-mockup.
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [bookOpen, setBookOpen] = useState(false);
  // The menu should slide in from whichever side its hamburger sits on —
  // right on mobile, left on desktop's minimal nav — so this tracks the
  // breakpoint client-side after mount (harmless if it lags by a frame;
  // it only matters once the sheet is actually opened).
  const [isDesktopNav, setIsDesktopNav] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktopNav(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const servicesActive = pathname === "/services" || pathname === "/headlights";

  return (
    <>
      <header className="w-full z-50 h-[70px] md:h-[88px] fixed top-0 left-0 bg-black/35 backdrop-blur-[8px]">
        {/* Mobile bar */}
        <div className="flex md:hidden items-center justify-between px-5 h-[70px]">
          <Link href="/">
            <Image
              src="/images/logo_transparent.png"
              alt="Three Crowns Logo"
              width={180}
              height={60}
              className="h-[56px] w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-4">
            <PhoneLink className="flex items-center text-white" aria-label="Call (818) 296-7347">
              <Phone size={18} strokeWidth={1.8} />
            </PhoneLink>

            <SmsLink
              body={SMS_BODY}
              className="flex items-center text-white"
              aria-label="Text us"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
            </SmsLink>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1 cursor-pointer z-[2000]"
              aria-label="Open menu"
            >
              <span className="block w-5 h-[2px] bg-white" />
              <span className="block w-5 h-[2px] bg-white" />
            </button>
          </div>
        </div>

        {/* Desktop bar — minimal nav: hamburger / centered logo / call + book */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center px-8 h-[88px]">
          <div>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex flex-col gap-1.5 cursor-pointer"
              aria-label="Open menu"
            >
              <span className="block w-[26px] h-[2px] bg-white" />
              <span className="block w-[26px] h-[2px] bg-white" />
              <span className="block w-[26px] h-[2px] bg-white" />
            </button>
          </div>

          <Link href="/" className="flex justify-center">
            <Image
              src="/images/logo_transparent.png"
              alt="Three Crowns Logo"
              width={180}
              height={60}
              className="h-[64px] w-auto"
              priority
            />
          </Link>

          <div className="flex items-center justify-end gap-6">
            <PhoneLink className="flex items-center text-white hover:text-gold transition-colors" aria-label="Call (818) 296-7347">
              <Phone size={20} strokeWidth={1.6} />
            </PhoneLink>
            <SmsLink
              body={SMS_BODY}
              className="flex items-center text-white hover:text-gold transition-colors"
              aria-label="Text us"
            >
              <MessageCircle size={20} strokeWidth={1.6} />
            </SmsLink>
            <button
              type="button"
              onClick={() => setBookOpen(true)}
              className="h-10 px-5 rounded-[3px] bg-gold text-[#0a100d] text-xs font-semibold tracking-wide hover:bg-gold/90 transition-colors cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </header>

      <Sheet
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setMobileServicesOpen(false);
        }}
      >
        <SheetContent side={isDesktopNav ? "left" : "right"} className="bg-black/95 backdrop-blur-lg border-none w-[70%]">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <nav className="flex flex-col items-center justify-start h-full gap-10 overflow-y-auto pt-28 pb-10">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={`text-lg font-medium tracking-wide transition-colors hover:text-gold ${
                pathname === "/" ? "text-gold" : "text-white"
              }`}
            >
              Home
            </Link>

            <div className="flex flex-col items-center gap-6">
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`flex items-center gap-2 text-lg font-medium tracking-wide transition-colors hover:text-gold cursor-pointer ${
                  servicesActive ? "text-gold" : "text-white"
                }`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="flex flex-col items-center gap-5">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 text-sm tracking-wide text-white/70 hover:text-gold transition-colors"
                    >
                      <span className="text-gold/50">→</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium tracking-wide transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Phone number */}
            <PhoneLink
              className="text-lg font-medium tracking-wide text-gold hover:opacity-80 transition-opacity"
              onClick={() => setOpen(false)}
            >
              (818) 296-7347
            </PhoneLink>

            <Button
              asChild
              className="bg-gold text-white rounded-md px-6 py-2 font-semibold hover:bg-gold-soft"
            >
              <Link href="/book" onClick={() => setOpen(false)}>
                Book
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>

      <BookNowPopup open={bookOpen} onOpenChange={setBookOpen} />
    </>
  );
}
