import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Detailing Packages & Pricing | Three Crowns Detailing",
  description:
    "View Three Crowns Detailing packages and pricing for Glendale, Pasadena, and Burbank, CA. Prince, King, and Queen detail tiers — interior, exterior, paint correction, and ceramic sealant.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Mobile Detailing Packages & Pricing | Three Crowns Detailing",
    description:
      "View Three Crowns Detailing packages and pricing for Glendale, Pasadena, and Burbank, CA. Prince, King, and Queen detail tiers — interior, exterior, paint correction, and ceramic sealant.",
    url: "https://threecrownsdetailing.com/services",
    siteName: "Three Crowns Detailing",
    images: [
      {
        url: "https://threecrownsdetailing.com/images/Classic Benz.jpg",
        width: 1200,
        height: 630,
        alt: "Three Crowns Detailing — Mobile Car Detailing in Glendale CA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Detailing Packages & Pricing | Three Crowns Detailing",
    description:
      "Prince, King, and Queen detail packages for Glendale, Pasadena, and Burbank, CA. We come to you.",
    images: ["https://threecrownsdetailing.com/images/Classic Benz.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
