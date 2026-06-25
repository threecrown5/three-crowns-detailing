import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Car Detailing in Glendale, CA | Three Crowns Detailing",
  description:
    "Professional mobile detailing in Glendale, CA. We come to your home or office in Montrose, La Crescenta, Adams Hill, and surrounding neighborhoods. Book online.",
  alternates: { canonical: "/glendale" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
