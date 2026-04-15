import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BhoomieRealityClient from "@/components/portfolio/bhoomie-reality/bhoomie-reality-client";


export const metadata = {
  title: "Bhoomie Realty — Real Estate Website UI/UX Case Study | Easesmith",

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
    canonical: "/portfolio/bhoomie-realty",
  },

  openGraph: {
    title: "Bhoomie Realty — Real Estate Website UI/UX Case Study | Easesmith",
    description:
      "A complete UI/UX case study of a real estate platform — featuring property listings, responsive design, intuitive navigation, and engaging user experience.",
    url: "https://www.easesmith.com/portfolio/bhoomie-realty",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/case-study/bhoomie-realty-cover.png", // update path if needed
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
    images: ["/case-study/bhoomie-realty-cover.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BhoomieReality = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.easesmith.com",
          },
          {
            name: "Portfolio",
            url: "https://www.easesmith.com/portfolio",
          },
          {
            name: "Corporate Raasta Dashboard",
            url: "https://www.easesmith.com/portfolio/corporate-raasta-dashboard",
          },
        ]}
      />

      <BhoomieRealityClient />
    </>
  );
};

export default BhoomieReality;
