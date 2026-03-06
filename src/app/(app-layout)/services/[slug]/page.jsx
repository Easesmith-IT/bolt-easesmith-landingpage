import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceDetailClient from "@/components/service/service-detail-client";

import { servicesBySlug } from "@/data/services";

export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const service = servicesBySlug[slug];

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const url = `https://www.easesmith.com/services/${service.slug}`;

  return {
    title: service.title,
    description: service.description,
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
      title: service.title,
      description: service.description,
      url,
      siteName: "Easesmith",
      type: "website",
      images: [
        {
          url: "/logo-easesmith.png",
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
      images: ["/logo-easesmith.png"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const ServiceDetail = async ({params}) => {
   const { slug } = await params; 
  const service = servicesBySlug[slug];

    if (!service) return null;
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.easesmith.com" },
          { name: "Services", url: "https://www.easesmith.com/services" },
          {
            name: service.title,
            url: `https://www.easesmith.com/services/${service.slug}`,
          },
        ]}
      />

      <ServiceDetailClient />
    </>
  );
};

export default ServiceDetail;
