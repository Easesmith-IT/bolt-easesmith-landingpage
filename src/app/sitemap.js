const SITE_URL = "https://www.easesmith.com";
const LAST_SIGNIFICANT_UPDATE = "2026-07-24";

const INDEXABLE_ROUTES = [
  "/",
  "/services",
  "/services/shopify-development",
  "/services/custom-software",
  "/services/app-development",
  "/services/automation",
  "/services/mobile-web-development",
  "/portfolio",
  "/portfolio/abhicares",
  "/portfolio/bhoomie-reality",
  "/portfolio/chaperone",
  "/portfolio/corporate-rasta-consulting",
  "/portfolio/corporate-rasta-consulting-dashboard",
  "/portfolio/easemart",
  "/portfolio/sportx",
  "/portfolio/tech-tutor",
  "/contact-us",
  "/shopify-dev-page",
];

export default function sitemap() {
  return INDEXABLE_ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));
}
