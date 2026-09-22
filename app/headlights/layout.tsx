import type { Metadata } from "next";

const title = "Mobile Headlight Restoration in Glendale & Pasadena | Three Crowns";
const description =
  "Foggy or yellow headlights restored in your driveway. Wet-sanded and sealed with 2K UV clear coat. Flat price per pair. Serving Glendale, Pasadena & Burbank.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/headlights" },
  openGraph: {
    title,
    description,
    url: "https://threecrownsdetailing.com/headlights",
    siteName: "Three Crowns Detailing",
    images: [
      {
        url: "https://threecrownsdetailing.com/images/Classic Benz.jpg",
        width: 1200,
        height: 630,
        alt: "Three Crowns Detailing — Mobile Headlight Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://threecrownsdetailing.com/images/Classic Benz.jpg"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
