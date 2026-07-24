import { servicesBySlug } from "@/data/services";

const LAST_SIGNIFICANT_UPDATE = "2026-07-24";

export default function sitemap() {
  const baseUrl = "https://www.easesmith.com";

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
    {
      url: `${baseUrl}/shopify-dev-page`,
      lastModified: LAST_SIGNIFICANT_UPDATE,
    },
  ];

  const serviceRoutes = Object.values(servicesBySlug).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));

  const portfolioRoutes = [
    "abhicares",
    "bhoomie-reality",
    "chaperone",
    "corporate-rasta-consulting",
    "corporate-rasta-consulting-dashboard",
    "easemart",
    "sportx",
    "tech-tutor",
  ].map((slug) => ({
    url: `${baseUrl}/portfolio/${slug}`,
    lastModified: LAST_SIGNIFICANT_UPDATE,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}
