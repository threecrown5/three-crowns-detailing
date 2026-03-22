import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const siteUrl = "https://threecrownsdetailing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Three Crowns Mobile Detailing | Glendale, CA",
    template: "%s | Three Crowns Mobile Detailing",
  },
  description:
    "Professional mobile car detailing in Glendale, CA and surrounding areas. We come to you with precision craftsmanship and premium-grade protection.",
  keywords: [
    "mobile detailing",
    "car detailing",
    "auto detailing",
    "Glendale CA",
    "Pasadena",
    "Burbank",
    "La Cañada Flintridge",
    "ceramic coating",
    "paint correction",
    "interior detailing",
    "exterior detailing",
    "mobile car wash",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Three Crowns Mobile Detailing",
    title: "Three Crowns Mobile Detailing | Glendale, CA",
    description:
      "Professional mobile car detailing delivered to your driveway. Serving Glendale, CA and surrounding areas.",
    images: [
      {
        url: "/images/Classic Benz.jpg",
        width: 1200,
        height: 630,
        alt: "Three Crowns Mobile Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Crowns Mobile Detailing | Glendale, CA",
    description:
      "Professional mobile car detailing delivered to your driveway. Serving Glendale, CA and surrounding areas.",
    images: ["/images/Classic Benz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-[family-name:var(--font-montserrat)]">
        <StructuredData />
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
