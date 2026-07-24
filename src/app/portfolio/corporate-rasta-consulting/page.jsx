import CorporateRaastaClient from "@/components/portfolio/corporate-rasta-consulting/corporate-raasta-client";
import CaseStudySummary from "@/components/portfolio/CaseStudySummary";

export const metadata = {
  title: "Corporate Raasta Consulting — UI/UX Case Study",
  description:
    "Explore the UI/UX case study for Corporate Raasta Consulting — a legal services platform designed to simplify access to legal guidance through intuitive design, structured navigation, and user-focused experiences.",
  keywords: [
    "Corporate Raasta Consulting case study",
    "legal website UI UX",
    "law firm website design",
    "Easesmith portfolio",
    "UX case study legal platform",
    "high fidelity wireframes",
    "dashboard UI design",
  ],

  alternates: {
    canonical: "/portfolio/corporate-rasta-consulting",
  },

  openGraph: {
    title: "Corporate Raasta Consulting — UI/UX Case Study | Easesmith",
    description:
      "Discover the complete UI/UX journey of Corporate Raasta Consulting — from research and problem definition to high-fidelity screens and dashboard design.",
    url: "https://www.easesmith.com/portfolio/corporate-rasta-consulting",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/corporate-rasta-consulting.png",
        width: 1200,
        height: 630,
        alt: "Corporate Raasta Consulting Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Raasta Consulting — UI/UX Case Study | Easesmith",
    description:
      "Full UI/UX case study of Corporate Raasta Consulting — simplifying legal services through clean UX and modern UI design.",
    images: ["/og/corporate-rasta-consulting.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CorporateRaastaPage = () => {
  return (
    <>
      <CaseStudySummary url="/portfolio/corporate-rasta-consulting" />
      <CorporateRaastaClient />
    </>
  );
};

export default CorporateRaastaPage;
