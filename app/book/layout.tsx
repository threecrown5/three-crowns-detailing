import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Your Detail",
  description:
    "Schedule your mobile detailing appointment. No payment required to book. We come to your home or workplace in Glendale, CA and surrounding areas.",
  alternates: { canonical: "/book" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
