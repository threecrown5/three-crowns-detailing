"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`w-full z-50 flex items-center justify-between px-6 md:px-20 h-[90px] ${
        isHome
          ? "absolute top-0 left-0 bg-transparent"
          : "fixed top-0 left-0 bg-black/35 backdrop-blur-[8px]"
      }`}
    >
      <Link href="/">
        <Image
          src="/images/LogoXL.png"
          alt="Three Crowns Logo"
          width={180}
          height={60}
          className="h-[60px] w-auto"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-10 ml-auto">
        {navLinks.map((link) => (
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
        <Button
          asChild
          className="ml-2 tracking-wide bg-gold! text-white! rounded-full px-6 py-2 font-semibold hover:bg-gold-soft! hover:-translate-y-0.5 transition-all"
        >
          <Link href="/book">Book</Link>
        </Button>
      </nav>

      {/* Mobile Nav */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <button className="flex flex-col gap-1.5 cursor-pointer z-[2000]">
            <span className="block w-[26px] h-[2px] bg-white" />
            <span className="block w-[26px] h-[2px] bg-white" />
            <span className="block w-[26px] h-[2px] bg-white" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-black/95 backdrop-blur-lg border-none w-[70%]">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <nav className="flex flex-col items-center justify-center h-full gap-10">
            {navLinks.map((link) => (
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
