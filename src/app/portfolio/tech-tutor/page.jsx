import TechTutorClient from "@/components/portfolio/tech-tutor/tech-tutor-client";
import CaseStudySummary from "@/components/portfolio/CaseStudySummary";

export const metadata = {
  title: "Tech Tutor — EdTech App UI/UX Case Study",
  description:
    "Explore the Tech Tutor EdTech app UI/UX case study — designed to enhance personalized learning through intuitive interfaces, engaging onboarding, and structured educational flows.",

  keywords: [
    "Tech Tutor case study",
    "EdTech app UI UX",
    "learning app design",
    "education platform UX",
    "mobile app UI case study",
    "Easesmith portfolio",
    "UX design education app",
    "wireframes onboarding UI",
  ],

  alternates: {
    canonical: "/portfolio/tech-tutor",
  },

  openGraph: {
    title: "Tech Tutor — EdTech App UI/UX Case Study | Easesmith",
    description:
      "Discover the complete UI/UX journey of Tech Tutor — from research and problem-solving to onboarding flows, wireframes, and high-fidelity mobile screens.",
    url: "https://www.easesmith.com/portfolio/tech-tutor",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/tech-tutor.png",
        width: 1200,
        height: 630,
        alt: "Tech Tutor EdTech App Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Tutor — EdTech App UI/UX Case Study | Easesmith",
    description:
      "Full UI/UX case study of Tech Tutor — improving digital learning experiences with clean UX and engaging mobile UI.",
    images: ["/og/tech-tutor.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const TechTutorPage = () => {
  return (
    <>
      <CaseStudySummary url="/portfolio/tech-tutor" />
      <TechTutorClient />
    </>
  );
};

export default TechTutorPage;
