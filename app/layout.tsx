import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Three Crowns Mobile Detailing",
  description:
    "Professional mobile car detailing in Glendale, CA and surrounding areas. Precision craftsmanship. Premium-grade protection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-[family-name:var(--font-montserrat)]">
        <TooltipProvider>
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
