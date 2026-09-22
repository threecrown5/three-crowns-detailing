export const GOOGLE_ADS_ID = "AW-17812920864";

/**
 * Google Ads conversion action send_to values.
 * Created in Google Ads > Tools > Conversions.
 */
// TODO: JP hasn't created the "Text click" conversion action in Google Ads yet
// (Goals > Conversions > New conversion action > Website > "Text click").
// Swap this placeholder for the real conversion label once he has it.
const TEXT_CLICK_LABEL_TODO = "TODO_TEXT_CLICK_LABEL";

export const CONVERSIONS = {
  formSubmission: `${GOOGLE_ADS_ID}/8l93CLCY0cccEKC07q1C`,
  phoneClick: `${GOOGLE_ADS_ID}/860NCLOY0cccEKC07q1C`,
  textClick: `${GOOGLE_ADS_ID}/${TEXT_CLICK_LABEL_TODO}`,
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
