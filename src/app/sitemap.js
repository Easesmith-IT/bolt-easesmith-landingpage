import { servicesBySlug } from "@/data/services";

export default function sitemap() {
  const baseUrl = "https://www.easesmith.com";

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/shopify-dev-page`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const serviceRoutes = Object.values(servicesBySlug).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
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
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...portfolioRoutes];
}
