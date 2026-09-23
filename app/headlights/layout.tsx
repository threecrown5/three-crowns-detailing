import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

// Scoped to this page only — a pilot of the new visual direction before a
// possible sitewide rebrand. The rest of the site still runs on Montserrat.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const title = "Mobile Headlight Restoration in Glendale & Pasadena | Three Crowns";
const description =
  "Foggy or yellow headlights restored in your driveway. Wet-sanded and sealed with 2K UV clear coat. Flat price per pair. Serving Glendale, Pasadena & Burbank.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "headlight restoration",
    "mobile headlight restoration",
    "headlight restoration near me",
    "foggy headlights",
    "cloudy headlights",
    "yellow headlights",
    "headlight restoration cost",
    "Glendale CA",
    "Pasadena",
    "Burbank",
    "La Cañada Flintridge",
  ],
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
  return (
    <div
      className={`${playfair.variable} ${poppins.variable} font-[family-name:var(--font-poppins)] font-light bg-[#0B1410] text-[#F2EFE6]`}
    >
      {children}
    </div>
  );
}
