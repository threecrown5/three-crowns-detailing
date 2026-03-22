import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Detailing Packages & Pricing",
  description:
    "Choose from Prince, King, or Queen detailing packages. Mobile car detailing starting at $170. Interior and exterior services in Glendale, CA.",
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
