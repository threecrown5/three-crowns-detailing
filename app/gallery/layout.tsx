import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View our mobile detailing work. Before and after photos of interior and exterior car detailing in Glendale, Pasadena, and Burbank, CA.",
  alternates: { canonical: "/gallery" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
