import CorporateRaastaClientDashboard from "@/components/portfolio/corporate-rasta-consulting-dashboard.jsx/corporate-raasta-client-dashboard";
import CaseStudySummary from "@/components/portfolio/CaseStudySummary";

export const metadata = {
  title: "Corporate Raasta Dashboard — UI/UX Case Study",
  description:
    "Explore the Corporate Raasta Dashboard UI/UX case study — a centralized legal management system designed to streamline case tracking, client communication, document handling, and real-time decision-making.",

  keywords: [
    "Corporate Raasta dashboard case study",
    "legal dashboard UI UX",
    "case management dashboard design",
    "law firm dashboard UX",
    "legal SaaS dashboard",
    "admin panel UI UX case study",
    "client portal dashboard design",
    "Easesmith portfolio dashboard",
  ],

  alternates: {
    canonical: "/portfolio/corporate-rasta-consulting-dashboard",
  },

  openGraph: {
    title: "Corporate Raasta Dashboard — UI/UX Case Study | Easesmith",
    description:
      "Discover the design of a modern legal dashboard — featuring case tracking, request management, chat system, document handling, and intuitive workflows.",
    url: "https://www.easesmith.com/portfolio/corporate-rasta-consulting-dashboard",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/corporate-rasta-consulting-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Corporate Raasta Dashboard Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corporate Raasta Dashboard — UI/UX Case Study | Easesmith",
    description:
      "A complete UI/UX case study of a legal dashboard system — simplifying workflows with real-time insights, automation, and clean interface design.",
    images: ["/og/corporate-rasta-consulting-dashboard.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const CorporateRaastaDashboardPage = () => {
  return (
    <>
      <CaseStudySummary url="/portfolio/corporate-rasta-consulting-dashboard" />
      <CorporateRaastaClientDashboard />
    </>
  );
};

export default CorporateRaastaDashboardPage;
