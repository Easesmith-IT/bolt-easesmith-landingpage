import { ContactUsClient } from "@/components/contact-us/contact-us-client";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Easesmith to discuss your project, request a consultation, or explore how our web development and digital solutions can help grow your business.",
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
      "Reach out to Easesmith for web development, automation, and software engineering solutions. Book a strategy call or contact our team today.",
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
      "Need help with a project or want to collaborate? Contact Easesmith and schedule a consultation today.",
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
