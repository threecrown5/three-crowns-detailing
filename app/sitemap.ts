import type { MetadataRoute } from "next";

const siteUrl = "https://threecrownsdetailing.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), priority: 1 },
    { url: `${siteUrl}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteUrl}/gallery`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteUrl}/book`, lastModified: new Date(), priority: 0.9 },
  ];
}
