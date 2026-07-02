import type { Metadata } from "next";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Booking Request Received",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
