const siteUrl = "https://threecrownsdetailing.com";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Three Crowns Detailing",
  description:
    "Professional mobile car detailing serving Glendale, Pasadena, and Burbank, CA. We come to your home or office.",
  url: siteUrl,
  telephone: "+18182967347",
  email: "threecrowns.detailing@gmail.com",
  image: `${siteUrl}/images/Classic Benz.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Glendale",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1425,
    longitude: -118.2551,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Glendale",
      sameAs: "https://en.wikipedia.org/wiki/Glendale,_California",
    },
    {
      "@type": "City",
      name: "Pasadena",
      sameAs: "https://en.wikipedia.org/wiki/Pasadena,_California",
    },
    {
      "@type": "City",
      name: "Burbank",
      sameAs: "https://en.wikipedia.org/wiki/Burbank,_California",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
  ],
  serviceType: [
    "Mobile Car Detailing",
    "Auto Detailing",
    "Paint Correction",
    "Ceramic Coating",
    "Interior Detailing",
    "Exterior Detailing",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "40",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/threecrowns.detailing/",
    "https://www.facebook.com/threecrownsdetail",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to be home during the appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nope. As long as we have access to your vehicle and a place to park and work, you're free to go about your day. Many clients are at work or running errands while we detail.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need access to water or power?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — we bring our own water tank and generator, so we're fully self-sufficient. You don't need to provide anything.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a detail take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A Prince Detail typically runs 1.5–2 hours. King and Queen packages take longer depending on your vehicle's size and condition. We'll give you a realistic time estimate when we confirm your booking.",
      },
    },
    {
      "@type": "Question",
      name: "What if it's raining on the day of my appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We'll reach out to reschedule at no extra cost. Exterior work needs dry conditions to be done right, so we'd rather wait than rush it.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Glendale, Pasadena, Burbank, Altadena, La Cañada Flintridge, and Tujunga. If you're nearby but not sure, just ask — we're flexible.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to pay anything to book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No payment required up front. We'll confirm timing and details with you first, and handle payment once the job is done.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not happy with the result?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If something isn't right within 48 hours of your detail, we'll come back and make it right — free, no questions asked.",
      },
    },
  ],
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
