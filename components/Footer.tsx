import Link from "next/link";

const serviceAreas = [
  { href: "/glendale", label: "Glendale" },
  { href: "/pasadena", label: "Pasadena" },
  { href: "/burbank", label: "Burbank" },
];

export function Footer() {
  return (
    <footer className="mt-auto text-center py-10 bg-black/80 border-t border-gold/50">
      <div className="flex items-center justify-center gap-5 mb-4">
        {serviceAreas.map((area) => (
          <Link
            key={area.href}
            href={area.href}
            className="text-xs text-white/40 tracking-wide hover:text-gold transition-colors"
          >
            {area.label}
          </Link>
        ))}
      </div>
      <p className="text-sm text-white/60 tracking-wide">
        &copy; 2026 Three Crowns Mobile Detailing
      </p>
      <p className="text-xs text-white/30 mt-2 tracking-wide">
        Precision Mobile Detailing &middot; Glendale, CA &amp; Surrounding Areas
      </p>
    </footer>
  );
}
