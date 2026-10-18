import type { MetadataRoute } from "next";
import { SITE_URL } from "@/site";

/** Everything here is public, so the only real job is pointing crawlers at
 *  the sitemap. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
