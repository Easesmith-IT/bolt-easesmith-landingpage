import { ContactUsClient } from "@/components/contact-us/contact-us-client";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Easesmith to discuss a software, Shopify, mobile app, website, or AI automation project and book a strategy consultation.",
  keywords: [
    "contact Easesmith",
    "Easesmith contact",
    "hire web developers",
    "software development consultation",
    "book strategy call",
    "web development services contact",
    "Easesmith support",
    "technology consulting",
    "digital solutions company",
    "schedule meeting Easesmith",
  ],

  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title: "Contact Easesmith",
    description:
      "Discuss your software, Shopify, mobile app, website, or AI automation project with Easesmith.",
    url: "https://www.easesmith.com/contact-us",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/easesmith-social.png",
        width: 1200,
        height: 630,
        alt: "Contact Easesmith",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Easesmith",
    description:
      "Contact Easesmith to discuss your project and book a strategy consultation.",
    images: ["/og/easesmith-social.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactUsClient />
    </>
  );
}
