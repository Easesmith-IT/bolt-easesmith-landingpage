import BhoomieRealityClient from "@/components/portfolio/bhoomie-reality/bhoomie-reality-client";
import CaseStudySummary from "@/components/portfolio/CaseStudySummary";


export const metadata = {
  title: "Bhoomie Realty — Real Estate Website UI/UX Case Study",

  description:
    "Explore the Bhoomie Realty UI/UX case study — a modern real estate website designed to showcase property listings, enhance user engagement, and provide seamless browsing across devices.",

  keywords: [
    "real estate website UI UX case study",
    "property listing website design",
    "real estate UX design portfolio",
    "responsive real estate website",
    "Bhoomie Realty case study",
    "real estate platform UI design",
    "property search UX",
    "Easesmith portfolio real estate",
  ],

  alternates: {
    canonical: "/portfolio/bhoomie-reality",
  },

  openGraph: {
    title: "Bhoomie Realty — Real Estate Website UI/UX Case Study | Easesmith",
    description:
      "A complete UI/UX case study of a real estate platform — featuring property listings, responsive design, intuitive navigation, and engaging user experience.",
    url: "https://www.easesmith.com/portfolio/bhoomie-reality",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/bhoomie-reality.png",
        width: 1200,
        height: 630,
        alt: "Bhoomie Realty Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhoomie Realty — Real Estate Website UI/UX Case Study | Easesmith",
    description:
      "Discover the design of a modern real estate website — featuring property search, responsive layouts, and user-friendly interactions.",
    images: ["/og/bhoomie-reality.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BhoomieReality = () => {
  return (
    <>
      <CaseStudySummary url="/portfolio/bhoomie-reality" />
      <BhoomieRealityClient />
    </>
  );
};

export default BhoomieReality;
