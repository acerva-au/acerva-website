import type { MetadataRoute } from "next";
import { SITE_URL } from "@/site";

/** In-page sections (#services, #work, #contact) are anchors, not URLs, so they
 *  do not belong here. Real routes do. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: [string, number][] = [
    ["", 1],
    ["/salesforce", 0.8],
    ["/salesforce/admin-support", 0.7],
    ["/salesforce/training", 0.7],
  ];
  return routes.map(([path, priority]) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
