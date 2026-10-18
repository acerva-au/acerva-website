import type { MetadataRoute } from "next";
import { SITE_URL } from "@/site";

/** In-page sections (#services, #work, #contact) are anchors, not URLs, so they
 *  do not belong here. Real routes do. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/salesforce`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/salesforce/training`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
