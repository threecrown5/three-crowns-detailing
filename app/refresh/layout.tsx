import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crown Refresh — Maintenance Detail",
  description:
    "Keep your car looking like the day we handled it. Crown Refresh maintenance detail starting at $85.",
  alternates: { canonical: "/refresh" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}