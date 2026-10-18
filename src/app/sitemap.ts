import type { MetadataRoute } from "next";
import { SITE_URL } from "@/site";

/** One page today. The in-page sections (#services, #work, #contact) are
 *  anchors, not URLs, so they do not belong here. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
