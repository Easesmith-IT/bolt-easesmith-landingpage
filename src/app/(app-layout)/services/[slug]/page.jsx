import ServiceDetailClient from "@/components/service/service-detail-client";
import { notFound } from "next/navigation";

import { allServices, servicesBySlug } from "@/data/services";
import { caseStudies } from "@/data/portfolio";

const serviceSeo = {
  "shopify-development": {
    title: "Shopify Development Services",
    description:
      "Custom Shopify and Shopify Plus development covering themes, integrations, conversion-focused UX, checkout optimization, and store performance.",
    headline: "Shopify Development Services",
  },
  "custom-software": {
    title: "Custom Software Development Services for Businesses",
    description:
      "Custom software development for business workflows, internal platforms, integrations, dashboards, and scalable web applications.",
    headline: "Custom Software Development Built Around Your Business",
  },
  "app-development": {
    title: "Mobile App Development Services for iOS & Android",
    description:
      "Mobile app development for iOS, Android, and cross-platform products, from product discovery and UX through engineering, testing, and launch.",
    headline: "Mobile App Development for iOS, Android and Cross-Platform Products",
  },
  automation: {
    title: "AI Automation Services for Business Operations",
    description:
      "AI automation services that connect business tools, reduce repetitive work, improve data flow, and create reliable operational workflows.",
    headline: "AI Automation Services for Faster Business Operations",
  },
  "mobile-web-development": {
    title: "Web and Mobile Development Services for Scalable Products",
    description:
      "Web and mobile development for responsive websites, product platforms, customer portals, and cross-platform applications.",
    headline: "Web and Mobile Development for Scalable Digital Products",
  },
};

const serviceCaseStudyUrls = {
  "shopify-development": [
    "/portfolio/easemart",
    "/portfolio/chaperone",
    "/portfolio/bhoomie-reality",
  ],
  "custom-software": [
    "/portfolio/corporate-rasta-consulting-dashboard",
    "/portfolio/abhicares",
    "/portfolio/corporate-rasta-consulting",
  ],
  "app-development": [
    "/portfolio/tech-tutor",
    "/portfolio/sportx",
    "/portfolio/easemart",
  ],
  automation: [
    "/portfolio/corporate-rasta-consulting-dashboard",
    "/portfolio/abhicares",
    "/portfolio/corporate-rasta-consulting",
  ],
  "mobile-web-development": [
    "/portfolio/abhicares",
    "/portfolio/bhoomie-reality",
    "/portfolio/sportx",
  ],
};

export const dynamicParams = false;

export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const service = servicesBySlug[slug];
  const seo = serviceSeo[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `https://www.easesmith.com/services/${service.slug}`;

  return {
    title: seo?.title ?? service.title,
    description: seo?.description ?? service.description,
    keywords: [
      service.title,
      "Easesmith services",
      "software development services",
      "web development services",
      "digital solutions",
      "business automation",
      "custom software",
    ],

    alternates: {
      canonical: `/services/${service.slug}`,
    },

    openGraph: {
      title: seo?.title ?? service.title,
      description: seo?.description ?? service.description,
      url,
      siteName: "Easesmith",
      type: "website",
      images: [
        {
          url: "/og/easesmith-social.png",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: seo?.title ?? service.title,
      description: seo?.description ?? service.description,
      images: ["/og/easesmith-social.png"],
    },

    robots: {
      index: slug !== "shopify-development",
      follow: true,
    },
  };
}

const ServiceDetail = async ({ params }) => {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  const seo = serviceSeo[slug];
  const serviceData = {
    ...service,
    icon: service.slug,
    heroHeadline: seo?.headline ?? service.heroHeadline,
  };
  const relatedServices = allServices
    .filter((relatedService) => relatedService.slug !== service.slug)
    .slice(0, 3)
    .map((relatedService) => ({
      slug: relatedService.slug,
      title: relatedService.title,
      description: relatedService.description,
      icon: relatedService.slug,
    }));
  const relatedCaseStudies = caseStudies.filter((study) =>
    serviceCaseStudyUrls[slug]?.includes(study.url),
  );

  return (
    <>
      <ServiceDetailClient
        service={serviceData}
        relatedServices={relatedServices}
        relatedCaseStudies={relatedCaseStudies}
      />
    </>
  );
};

export default ServiceDetail;
