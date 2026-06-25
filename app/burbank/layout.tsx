import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Burbank, CA | Three Crowns Detailing",
  description:
    "Professional mobile detailing in Burbank, CA. We come to your home, studio lot, or office. Serving the entertainment district, Toluca Lake, and surrounding areas. Book online.",
  alternates: { canonical: "/burbank" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
