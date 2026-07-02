export const GOOGLE_ADS_ID = "AW-17812920864";

/**
 * Google Ads conversion action send_to values.
 * Created in Google Ads > Tools > Conversions.
 */
export const CONVERSIONS = {
  formSubmission: `${GOOGLE_ADS_ID}/8I93CLCY0cccEKC07q1C`,
  phoneClick: `${GOOGLE_ADS_ID}/860NCLOY0cccEKC07q1C`,
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(sendTo: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: sendTo });
  }
}
