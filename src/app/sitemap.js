const SITE_URL = "https://www.easesmith.com";
const LAST_SIGNIFICANT_UPDATE = "2026-07-25";

const INDEXABLE_ROUTES = [
  "/",
  "/services",
  "/services/shopify-conversion-optimization",
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
  "/products/niwa",
  "/contact-us",
];

export default function sitemap() {
  return INDEXABLE_ROUTES.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));
}
