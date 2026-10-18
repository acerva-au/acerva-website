/**
 * The canonical origin, in one place.
 *
 * Metadata, robots.txt and the sitemap all have to agree on this. Keeping it
 * here means a domain change is one edit rather than three that can silently
 * drift apart — a sitemap advertising a different host than the canonical tag
 * is worse than having no sitemap at all.
 */
export const SITE_URL = "https://acerva.com.au";
