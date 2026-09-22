"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PhoneLink } from "@/components/PhoneLink";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#detailing", label: "Detailing" },
  { href: "/services#add-ons", label: "Add-Ons" },
  { href: "/services#refresh", label: "Refresh" },
  { href: "/headlights", label: "Headlight Restoration" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesActive = pathname === "/services" || pathname === "/headlights";

  return (
    <header className="w-full z-50 flex items-center justify-between px-6 md:px-20 h-[70px] md:h-[90px] fixed top-0 left-0 bg-black/35 backdrop-blur-[8px]">
      <Link href="/">
        <Image
          src="/images/logo_transparent.png"
          alt="Three Crowns Logo"
          width={180}
          height={60}
          className="h-[62px] md:h-[90px] w-auto"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 ml-auto">
        <Link
          href="/"
          className={`font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
            pathname === "/" ? "text-gold!" : "text-white"
          }`}
        >
          Home
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            className={`flex items-center gap-1.5 font-medium tracking-wide transition-colors duration-300 hover:text-gold outline-none cursor-pointer ${
              servicesActive ? "text-gold!" : "text-white"
            }`}
          >
            Services
            <ChevronDown size={14} />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className="bg-viridian-dark border-gold/20 text-white min-w-[220px] py-2"
          >
            {serviceLinks.map((s) => (
              <DropdownMenuItem
                key={s.href}
                asChild
                className="tracking-wide focus:bg-gold/10 focus:text-gold cursor-pointer px-3 py-2.5"
              >
                <Link href={s.href}>{s.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {navLinks.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
              pathname === link.href ? "text-gold!" : "text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}

        {/* Phone number — desktop */}
        <PhoneLink className="font-medium tracking-wide text-gold hover:opacity-80 transition-opacity">
          (818) 296-7347
        </PhoneLink>

        <Link
          href="/book"
          className="ml-4 text-xs tracking-[0.18em] uppercase font-medium pb-[3px] border-b border-[#C9A84C] hover:opacity-70 transition-opacity"
          style={{ color: "#C9A84C" }}
        >
          Book Now
        </Link>
      </nav>

      {/* Mobile Nav */}
      <Sheet
        open={open}
        onOpenChange={(v) => {
          setOpen(v);
          if (!v) setMobileServicesOpen(false);
        }}
      >
        <SheetTrigger asChild className="md:hidden">
          <button className="flex flex-col gap-1.5 cursor-pointer z-[2000]">
            <span className="block w-[26px] h-[2px] bg-white" />
            <span className="block w-[26px] h-[2px] bg-white" />
            <span className="block w-[26px] h-[2px] bg-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black/95 backdrop-blur-lg border-none w-[70%]">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <nav className="flex flex-col items-center justify-center h-full gap-10 overflow-y-auto py-10">
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

            {/* Phone number — mobile */}
            <PhoneLink
              className="text-lg font-medium tracking-wide text-gold hover:opacity-80 transition-opacity"
              onClick={() => setOpen(false)}
            >
              (818) 296-7347
            </PhoneLink>

            <Button
              asChild
              className="bg-gold text-white rounded-full px-6 py-2 font-semibold hover:bg-gold-soft"
            >
              <Link href="/book" onClick={() => setOpen(false)}>
                Book
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
