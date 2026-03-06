import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ShopifyClient from "@/components/shopify/shopify-client";

export const metadata = {
  title: "Shopify Development",

  description:
    "Expert Shopify and Shopify Plus development services by Easesmith. We build high-conversion Shopify stores with custom themes, fast performance, and scalable e-commerce solutions.",

  keywords: [
    "Shopify development",
    "Shopify developer",
    "Shopify Plus development",
    "custom Shopify store",
    "Shopify theme development",
    "Shopify ecommerce development",
    "Shopify store development",
    "Easesmith Shopify services",
  ],

  alternates: {
    canonical: "/shopify-dev-page",
  },

  openGraph: {
    title: "Shopify Development",
    description:
      "High-performance Shopify and Shopify Plus stores engineered for conversions. Custom themes, integrations, and scalable e-commerce solutions.",
    url: "https://www.easesmith.com/shopify-dev-page",
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
    title: "Shopify Development",
    description:
      "Custom Shopify stores engineered for performance, speed, and conversion.",
    images: ["/logo-easesmith.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Home = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.easesmith.com" },
          {
            name: "Shopify Development",
            url: "https://www.easesmith.com/shopify-dev-page",
          },
        ]}
      />
      <ShopifyClient />
    </>
  );
};

export default Home;
