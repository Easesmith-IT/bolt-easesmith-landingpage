import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PortfolioClient from "@/components/portfolio/portfolio-client";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore the Easesmith portfolio showcasing projects, case studies, and innovative digital solutions. Discover our expertise in web development, design, and technology.",
  keywords: [
    "Easesmith portfolio",
    "Easesmith projects",
    "web development portfolio",
    "software development projects",
    "digital solutions",
    "UI UX projects",
    "tech portfolio",
    "web design portfolio",
    "case studies",
    "Easesmith work",
  ],
  alternates: {
    canonical: "/portfolio",
  },

  openGraph: {
    title: "Portfolio",
    description:
      "Explore real-world projects and case studies built by Easesmith. Discover modern web development, automation, and software engineering solutions.",
    url: "https://www.easesmith.com/portfolio",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/logo-easesmith.png",
        width: 1200,
        height: 630,
        alt: "Easesmith Portfolio",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description:
      "Explore the Easesmith portfolio of modern web development and software engineering projects.",
    images: ["/logo-easesmith.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Portfolio = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.easesmith.com" },
          { name: "Portfolio", url: "https://www.easesmith.com/portfolio" },
        ]}
      />
      <PortfolioClient />
    </>
  );
};

export default Portfolio;
