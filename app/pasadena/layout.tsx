import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Pasadena, CA | Three Crowns Detailing",
  description:
    "Professional mobile detailing in Pasadena, CA. We come to your home or office in Old Town, San Marino, Arcadia, and surrounding neighborhoods. Book online.",
  alternates: { canonical: "/pasadena" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
