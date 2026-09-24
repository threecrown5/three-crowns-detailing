// Single source of truth for the service-area landing pages
// (/burbank, /pasadena, /glendale). Each renders through
// components/LocationPage.tsx — add a new city by adding an entry here,
// not by copy-pasting a new page.

export interface LocationHeroImage {
  src: string;
  alt: string;
}

export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  slug: "burbank" | "pasadena" | "glendale";
  city: string;
  heading: string;
  subhead: string;
  servingAreas: string;
  zipCodes: string;
  bodyIntro: string[];
  whyHeading: string;
  whyParagraphs: string[];
  statHighlight: string;
  heroImages: [LocationHeroImage, LocationHeroImage];
  packageBlurbs: { prince: string; king: string; queen: string };
  faqs: LocationFaq[];
}

export const locations: Location[] = [
  {
    slug: "burbank",
    city: "Burbank",
    heading: "Mobile Car Detailing in Burbank, CA",
    subhead: "On-site detailing for Burbank — Toluca Lake, the studios, and everywhere in between",
    servingAreas: "Toluca Lake · North Hollywood · Warner Bros. · Disney · NBC areas",
    zipCodes: "91501, 91502, 91504, 91505, or 91506",
    bodyIntro: [
      "Burbank runs on a different schedule than most of LA. Early calls, long days, a car that goes from the studio lot to the freeway and back without much ceremony. The last thing on the list is finding time to get the car detailed. Three Crowns Detailing fits into your schedule instead of forcing you to rearrange it. We come to you — at home, at work, wherever the car is parked — and handle the job while you're handling everything else.",
      "We serve clients across Burbank and the surrounding area, including Toluca Lake, North Hollywood adjacent, and the neighborhoods near Warner Bros., Disney, and NBC.",
    ],
    whyHeading: "Why Burbank Clients Choose Three Crowns",
    whyParagraphs: [
      "In Burbank, time is the real currency. Our clients aren't comparison shopping six detailers — they want someone reliable they can book and stop thinking about. That's the exact problem we're built to solve.",
      "You'll get a confirmation text before we arrive. When we're done, you get a vehicle health check card — a written summary of what we treated and what to keep an eye on. Honest, clear, no upselling on-site. The price you were quoted is the price you pay.",
    ],
    statHighlight: "35+ clients served across the Glendale–Burbank corridor, 5-star rating on Google.",
    heroImages: [
      { src: "/galleryC/GraySRT2.jpg", alt: "Gray Dodge Challenger SRT detailed by Three Crowns in Burbank, CA" },
      { src: "/galleryC/RedHellcat.jpeg", alt: "Red Dodge Hellcat clay bar and ceramic sealant detail in Burbank, CA" },
    ],
    packageBlurbs: {
      prince: "A thorough interior and exterior detail for the car that gets used hard. Deep vacuum, surface cleaning, streak-free glass, pre-soak foam bath, contact wash, wheel and tire treatment, and polymer wax. Includes a vehicle health check card and priority rebooking.",
      king: "Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. For the car that's due for a full reset — or the owner who wants real protection going forward. Includes a complimentary Crown Refresh within 30 days.",
      queen: "Our premium package. Everything in King, plus a one-step paint correction to remove swirl marks and restore gloss depth, followed by a professional sealant application. If your paint looks dull or scratched under direct light and you want it corrected properly, this is it. Includes two Crown Refreshes, fragrance selection, and priority rebooking.",
    },
    faqs: [
      { q: "Do you come to apartments and studio parking structures in Burbank?", a: "Yes — as long as there's a spot to park and work, we can detail there. Just let us know if the lot requires a guest pass or check-in and we'll plan around it." },
      { q: "How far in advance should I book?", a: "Most Burbank clients get scheduled within the week. If you need it sooner, call or text and we'll see what we can do." },
      { q: "Do I need to provide water or power?", a: "No — we bring our own water tank and generator, so we're fully self-sufficient at your location." },
      { q: "What if my car is at the studio lot, not home?", a: "That works too. Tell us the address and any gate or badge instructions when you book." },
    ],
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    heading: "Mobile Car Detailing in Pasadena, CA",
    subhead: "We come to you — in Old Town, San Marino, Arcadia, and across Pasadena",
    servingAreas: "Old Town · San Marino · Arcadia · Altadena · La Cañada Flintridge",
    zipCodes: "91101, 91103, 91104, 91105, 91106, or 91107",
    bodyIntro: [
      "If you're in Pasadena and you've been putting off getting your car detailed, it's usually for one reason: you don't have time to deal with it. Drop it off somewhere, wait around, pick it up — that's half a day gone. Three Crowns Detailing removes that entirely. We come to your driveway, your parking structure, or your office lot and handle the job while you're doing something that actually matters to you.",
      "We serve clients across Pasadena and the surrounding area — including Old Town, San Marino, Arcadia, Altadena, La Cañada Flintridge, and the neighborhoods along the 210 corridor.",
    ],
    whyHeading: "Why Pasadena Clients Choose Three Crowns",
    whyParagraphs: [
      "Pasadena has a car culture worth protecting. Whether you're driving a daily BMW through Old Town or keeping a weekend vehicle in storage near the Rose Bowl, the standard here is different. Our clients aren't looking for a quick wash — they want someone who's going to show up, communicate clearly, and leave the car better than they found it.",
      "That's the whole model. You get a confirmation text before we arrive, a health check card when we're done, and a detailer who actually picks up the phone. No chasing anyone down. No surprises on pricing. No wondering if the job got done right.",
    ],
    statHighlight: "35+ clients served across the Glendale–Pasadena corridor, 5-star rating on Google.",
    heroImages: [
      { src: "/galleryC/Cyan65Mustang.jpg", alt: "1965 Ford Mustang hand wash and wax detail in Pasadena, CA" },
      { src: "/galleryC/WhiteLexus.jpeg", alt: "White Lexus exterior detail and sealant top-up in Pasadena, CA" },
    ],
    packageBlurbs: {
      prince: "Our baseline interior and exterior service. Deep vacuum, surface cleaning, streak-free glass, foam pre-soak, contact wash, wheel and tire treatment, and polymer wax. Right for clients who want their car clean and maintained on a regular schedule. Includes a vehicle health check card and priority rebooking.",
      king: "Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. For the car that needs a deeper reset, or the owner who wants real protection built in. Includes a complimentary Crown Refresh within 30 days.",
      queen: "Our most comprehensive service. Everything in King, plus a one-step paint correction to remove light swirl marks and restore gloss, followed by a sealant application. If your paint has lost its depth and you want it to look the way it did when you first got it — this is the service. Includes two Crown Refreshes, fragrance selection, and priority rebooking.",
    },
    faqs: [
      { q: "Do you serve San Marino and Arcadia, or just Pasadena proper?", a: "Both — we work throughout Old Town, San Marino, Arcadia, Altadena, and the 210 corridor regularly." },
      { q: "Can you detail a car kept in storage?", a: "Yes. Tell us where it's stored when you book and we'll confirm access and timing." },
      { q: "How long does a detail take?", a: "A Prince Detail typically runs 1.5–2 hours. King and Queen take longer depending on your vehicle's size and condition." },
      { q: "Do I have to pay anything to book?", a: "No payment required up front. We confirm timing and details first, then handle payment once the job is done." },
    ],
  },
  {
    slug: "glendale",
    city: "Glendale",
    heading: "Mobile Car Detailing in Glendale, CA",
    subhead: "We come to you — Montrose, La Crescenta, Adams Hill, Verdugo Woodlands, and across Glendale",
    servingAreas: "Montrose · La Crescenta · Adams Hill · Verdugo Woodlands · Glenoaks Canyon",
    zipCodes: "91201, 91202, 91203, 91204, 91205, 91206, 91207, 91208, or 91214",
    bodyIntro: [
      "Glendale is home base for Three Crowns Detailing. We've been working in driveways, apartment lots, and office parking structures across this city since we launched — and it's where we do most of our work. If you've seen a dark green setup at a neighbor's place, that was probably us.",
      "We serve clients throughout Glendale and the surrounding neighborhoods — Montrose, La Crescenta, Adams Hill, Verdugo Woodlands, Glenoaks Canyon, and the areas near the Glendale Galleria and Brand Boulevard.",
    ],
    whyHeading: "Why Glendale Clients Choose Three Crowns",
    whyParagraphs: [
      "Most detailers in this area are hard to pin down. You text them, you wait, you're not sure if they're coming. That's the experience Three Crowns was built to replace.",
      "You get a confirmation before we arrive. When the job is done, you get a vehicle health check card — a written summary of what was treated and what to keep an eye on going forward. The price you were quoted is what you pay. No surprises, no add-ons pushed on-site.",
    ],
    statHighlight: "50+ jobs completed across Glendale, 5-star rating on Google.",
    heroImages: [
      { src: "/galleryC/WhiteM32.jpg", alt: "White BMW M3 exterior wash and sealant detail in Glendale, CA" },
      { src: "/galleryC/BlueMatteBenz.jpeg", alt: "Matte blue Mercedes-Benz clay bar and ceramic sealant detail in Glendale, CA" },
    ],
    packageBlurbs: {
      prince: "A complete interior and exterior detail for the car that needs to look right and stay that way. Deep vacuum, surface cleaning, streak-free glass, pre-soak foam bath, contact wash, wheel and tire treatment, and polymer wax. Includes a vehicle health check card and priority rebooking.",
      king: "Everything in Prince, plus leather conditioning, carpet and upholstery shampoo, UV protectant, clay bar decontamination, iron remover, and ceramic spray sealant. The right package for a car that's overdue for a proper reset — or an owner who wants real protection built in. Includes a complimentary Crown Refresh within 30 days.",
      queen: "Our most complete service. Everything in King, plus a one-step paint correction to remove swirl marks and restore gloss, followed by a professional sealant application. Glendale's sun is hard on paint — if your finish has lost its depth, this is how you get it back. Includes two Crown Refreshes, fragrance selection, and priority rebooking.",
    },
    faqs: [
      { q: "Is Glendale really where you're based?", a: "Yes — it's home base, so it's where we have the most scheduling flexibility and can usually get you in fastest." },
      { q: "Do you detail cars at apartment complexes near the Galleria?", a: "Regularly. Let us know if the lot needs a guest pass or specific parking instructions." },
      { q: "What if it's raining on the day of my appointment?", a: "We'll reach out to reschedule at no extra cost — exterior work needs dry conditions to be done right." },
      { q: "What if I'm not happy with the result?", a: "If something isn't right within 48 hours, we'll come back and make it right — free, no questions asked." },
    ],
  },
];

export function getLocation(slug: Location["slug"]): Location {
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) throw new Error(`Unknown location slug: ${slug}`);
  return loc;
}
