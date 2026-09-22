// Single source of truth for vehicle tiers, packages, and pricing.
// Both /services and /book render from this module — do not duplicate
// price numbers anywhere else.

export type TierKey = "t1" | "t2" | "t3";
export type PackageKey = "prince" | "king" | "queen" | "refresh" | "headlights";

export interface Tier {
  key: TierKey;
  /** e.g. "Sedan / Sport / Coupe" — used as the /book vehicle_size value */
  label: string;
  multiplier: number;
}

export interface PackageDef {
  key: PackageKey;
  name: string;
}

export const tiers: Tier[] = [
  { key: "t1", label: "Sedan / Sport / Coupe", multiplier: 1.0 },
  { key: "t2", label: "SUV / Truck", multiplier: 1.2 },
  { key: "t3", label: "XL SUV / HD Truck", multiplier: 1.45 },
];

export const packages: PackageDef[] = [
  { key: "prince", name: "Prince" },
  { key: "king", name: "King" },
  { key: "queen", name: "Queen" },
  { key: "refresh", name: "Crown Refresh" },
  { key: "headlights", name: "Headlights" },
];

// Flat, tier-independent headlight restoration pricing — see /headlights.
export const HEADLIGHT_STANDALONE = 125;
export const HEADLIGHT_ADDON = 85;

// Literal price table — do not compute floats at runtime.
// "headlights" is flat per pair, regardless of vehicle tier — see /headlights.
const PRICE_TABLE: Record<PackageKey, Record<TierKey, number>> = {
  prince: { t1: 185, t2: 225, t3: 270 },
  king: { t1: 290, t2: 350, t3: 425 },
  queen: { t1: 400, t2: 480, t3: 580 },
  refresh: { t1: 85, t2: 105, t3: 120 },
  headlights: { t1: HEADLIGHT_STANDALONE, t2: HEADLIGHT_STANDALONE, t3: HEADLIGHT_STANDALONE },
};

export function getPrice(pkg: PackageKey, tier: TierKey): number {
  return PRICE_TABLE[pkg][tier];
}

export function formatPrice(pkg: PackageKey, tier: TierKey): string {
  return `$${getPrice(pkg, tier)}`;
}

/** e.g. "$185–$268" across all tiers for a package. */
export function priceRange(pkg: PackageKey): string {
  const values = tiers.map((t) => getPrice(pkg, t.key));
  return `$${Math.min(...values)}–$${Math.max(...values)}`;
}

export function tierByLabel(label: string): Tier | undefined {
  return tiers.find((t) => t.label === label);
}

export function packageByName(name: string): PackageDef | undefined {
  return packages.find((p) => p.name === name);
}
