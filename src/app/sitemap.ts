import type { MetadataRoute } from "next";
import { SITE_URL, PAGE_SEO } from "@/lib/seo";

/**
 * Hash-based section anchors are included for SPA section-level discovery.
 * changeFrequency reflects actual update cadence per section.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/${PAGE_SEO.about.canonicalPath}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/${PAGE_SEO.portfolio.canonicalPath}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/${PAGE_SEO.contact.canonicalPath}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
