import NiwaLandingClient from "@/components/niwa/niwa-landing-client";

const pageUrl = "https://www.easesmith.com/products/niwa";
const ogImage = "https://www.easesmith.com/products/niwa/niwa-logo.png";

export const metadata = {
  title: "NiWa | Business Communication Platform",
  description:
    "NiWa is an AI-powered business communication platform that connects existing software to automate reminders, notifications, customer support, and WhatsApp-led workflows.",
  keywords: [
    "NiWa",
    "NiWa by Easesmith",
    "business communication platform",
    "WhatsApp automation platform",
    "AI customer communication",
    "workflow automation",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "NiWa | Automate Customer Communication",
    description:
      "Connect CRM, ERP, APIs, and WhatsApp Business to automate reminders, notifications, support, and customer conversations.",
    url: pageUrl,
    siteName: "Easesmith",
    images: [
      {
        url: ogImage,
        width: 512,
        height: 512,
        alt: "NiWa by Easesmith",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NiWa | Automate Customer Communication",
    description:
      "Connect CRM, ERP, APIs, and WhatsApp Business to automate reminders, notifications, support, and customer conversations.",
    images: [{ url: ogImage, alt: "NiWa by Easesmith" }],
  },
};

const faqs = [
  {
    question: "Can I connect my own WhatsApp Business Account?",
    answer:
      "Yes. NiWa is built to connect your own WhatsApp Business Account so your business retains channel ownership and control.",
  },
  {
    question: "Will NiWa work with my existing software?",
    answer:
      "Yes. NiWa is designed to connect to CRMs, ERPs, school software, hospital software, DMS tools, accounting systems, APIs, and webhook-driven workflows.",
  },
  {
    question: "Can my team use it without technical knowledge?",
    answer:
      "Yes. Business teams can manage day-to-day workflows, while technical teams can extend automations through APIs and webhooks when needed.",
  },
  {
    question: "Can NiWa automate reminders and follow-ups?",
    answer:
      "Yes. Fee reminders, appointment reminders, payment nudges, service updates, and customer follow-ups are core use cases.",
  },
  {
    question: "Is the platform secure?",
    answer:
      "NiWa is presented as an enterprise platform with secure APIs, encrypted communication support, role-based access, audit logs, and privacy-aware architecture.",
  },
];

const niwaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "NiWa",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      brand: {
        "@type": "Brand",
        name: "NiWa",
      },
      creator: {
        "@type": "Organization",
        name: "Easesmith",
        url: "https://www.easesmith.com",
      },
      description:
        "NiWa is an AI-powered business communication platform for reminders, notifications, support, and software-connected customer automation.",
      url: pageUrl,
      image: ogImage,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function NiwaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(niwaSchema) }}
      />
      <NiwaLandingClient />
    </>
  );
}
