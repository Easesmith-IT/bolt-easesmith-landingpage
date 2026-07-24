import ShopifyClient from "@/components/shopify/shopify-client";

export const metadata = {
  title: "Shopify Conversion Optimization for F&B Brands",

  description:
    "Shopify conversion optimization and storefront design for established food and beverage brands, covering mobile UX, speed, product pages, and checkout.",

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
    title: "Shopify Conversion Optimization for F&B Brands",
    description:
      "Conversion-focused Shopify storefront design for food and beverage brands, including mobile UX, performance, product pages, and checkout.",
    url: "https://www.easesmith.com/shopify-dev-page",
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
    title: "Shopify Conversion Optimization for F&B Brands",
    description:
      "Shopify storefront optimization for established food and beverage brands.",
    images: ["/og/easesmith-social.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Home = () => {
  return (
    <>
      <ShopifyClient />
    </>
  );
};

export default Home;
