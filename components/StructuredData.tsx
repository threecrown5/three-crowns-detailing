export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: "Three Crowns Mobile Detailing",
    description:
      "Professional mobile car detailing delivered to your driveway. Serving Glendale, CA and surrounding areas.",
    url: "https://threecrownsdetailing.com",
    telephone: "+18182967347",
    email: "threecrowns.detailing@gmail.com",
    areaServed: [
      "Glendale, CA",
      "Pasadena, CA",
      "Burbank, CA",
      "Altadena, CA",
      "La Cañada Flintridge, CA",
      "Tujunga, CA",
    ],
    priceRange: "$170 - $350",
    image: "https://threecrownsdetailing.com/images/Classic Benz.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glendale",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.1425,
      longitude: -118.255,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Detailing Packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Prince Detail",
          price: "170",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "King Detail",
          price: "270",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Queen Detail",
          price: "350",
          priceCurrency: "USD",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
