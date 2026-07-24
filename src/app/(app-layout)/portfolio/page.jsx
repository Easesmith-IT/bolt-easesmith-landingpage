import PortfolioClient from "@/components/portfolio/portfolio-client";

export const metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore the Easesmith portfolio of websites, mobile apps, dashboards, service platforms, and UI/UX case studies.",
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
    title: "Portfolio & Case Studies | Easesmith",
    description:
      "Explore websites, mobile apps, dashboards, service platforms, and UI/UX case studies created by Easesmith.",
    url: "https://www.easesmith.com/portfolio",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/easesmith-social.png",
        width: 1200,
        height: 630,
        alt: "Easesmith Portfolio",
      },
    ],
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Easesmith",
    description:
      "Explore the Easesmith portfolio of websites, mobile apps, dashboards, and UI/UX case studies.",
    images: ["/og/easesmith-social.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Portfolio = () => {
  return (
    <>
      <PortfolioClient />
    </>
  );
};

export default Portfolio;
