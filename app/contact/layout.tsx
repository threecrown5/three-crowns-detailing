import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Three Crowns Mobile Detailing. Call, text, or email us. Serving Glendale, Pasadena, Burbank, and surrounding areas in Los Angeles.",
  alternates: { canonical: "/contact" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
