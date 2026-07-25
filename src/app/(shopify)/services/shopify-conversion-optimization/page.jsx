import ShopifyClient from "@/components/shopify/shopify-client";

const PAGE_PATH = "/services/shopify-conversion-optimization";
const PAGE_URL = `https://www.easesmith.com${PAGE_PATH}`;
const PAGE_TITLE = "Shopify Conversion Optimization for F&B Brands";
const PAGE_DESCRIPTION =
  "Shopify conversion optimization services for established food and beverage brands, covering storefront UX, speed, product pages, and checkout performance.";

export const metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,

  keywords: [
    "Shopify conversion optimization",
    "Shopify conversion rate optimization",
    "Shopify CRO services",
    "Shopify development for food brands",
    "Shopify development",
    "Shopify Plus development",
    "Shopify checkout optimization",
    "Shopify speed optimization",
    "food and beverage ecommerce agency",
  ],

  alternates: {
    canonical: PAGE_PATH,
  },

  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/easesmith-social.png",
        width: 1200,
        height: 630,
        alt: "Easesmith Shopify conversion optimization services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: "/og/easesmith-social.png",
        alt: "Easesmith Shopify conversion optimization services",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const Home = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.easesmith.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.easesmith.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: PAGE_TITLE,
          item: PAGE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      serviceType: "Shopify conversion optimization",
      areaServed: "Worldwide",
      provider: {
        "@type": "Organization",
        name: "Easesmith",
        url: "https://www.easesmith.com",
      },
      url: PAGE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: PAGE_URL,
      isPartOf: {
        "@type": "WebSite",
        name: "Easesmith",
        url: "https://www.easesmith.com",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <ShopifyClient />
    </>
  );
};

export default Home;
