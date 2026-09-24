import type { Metadata } from "next";

const title = "Frequently Asked Questions | Three Crowns Detailing";
const description =
  "Answers to common questions about mobile detailing, booking, pricing, and headlight restoration with Three Crowns Detailing in Glendale, Pasadena & Burbank.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "mobile detailing FAQ",
    "car detailing questions",
    "headlight restoration FAQ",
    "Glendale CA",
    "Pasadena",
    "Burbank",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title,
    description,
    url: "https://threecrownsdetailing.com/faq",
    siteName: "Three Crowns Detailing",
    images: [
      {
        url: "https://threecrownsdetailing.com/images/Classic Benz.jpg",
        width: 1200,
        height: 630,
        alt: "Three Crowns Detailing — Frequently Asked Questions",
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
