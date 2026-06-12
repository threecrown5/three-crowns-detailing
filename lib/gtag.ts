export const GOOGLE_ADS_ID = "AW-17812920864";

/**
 * Google Ads conversion action send_to values.
 * Created in Google Ads > Tools > Conversions.
 */
export const CONVERSIONS = {
  formSubmission: `${GOOGLE_ADS_ID}/MiuFCKisqr0cEKC07qlC`,
  phoneClick: `${GOOGLE_ADS_ID}/A57jCKusqr0cEKC07qlC`,
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a Google Ads conversion event. Safe to call even if gtag
 * hasn't loaded yet (e.g. ad blockers) — it just no-ops.
 */
export function trackConversion(sendTo: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}
