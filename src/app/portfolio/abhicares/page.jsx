import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import AbhicaresClient from "@/components/portfolio/abhicares/abhicares-client";

export const metadata = {
  title: "AbhiCares — UI/UX Case Study",
  description:
    "A detailed UI/UX case study for AbhiCares, a service-based platform. Explore the complete design process including user flows, wireframes, typography, and high-fidelity UI screens crafted by Easesmith.",

  keywords: [
    "AbhiCares case study",
    "service app UI UX design",
    "home services app design",
    "UI UX case study India",
    "Easesmith portfolio",
    "mobile app UI design",
    "web design case study",
  ],

  alternates: {
    canonical: "/portfolio/abhicares",
  },

  openGraph: {
    title: "AbhiCares — UI/UX Case Study | Easesmith",
    description:
      "Explore the full UI/UX journey of AbhiCares — from research and problem definition to high-fidelity mobile and web designs.",
    url: "https://www.easesmith.com/portfolio/abhicares",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/abhicares.png",
        width: 1200,
        height: 630,
        alt: "AbhiCares Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AbhiCares — UI/UX Case Study | Easesmith",
    description:
      "Complete UI/UX case study for AbhiCares — a service-based platform designed by Easesmith.",
    images: ["/og/abhicares.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const AbhicaresPage = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.easesmith.com" },
          { name: "Portfolio", url: "https://www.easesmith.com/portfolio" },
          {
            name: "AbhiCares",
            url: "https://www.easesmith.com/portfolio/abhicares",
          },
        ]}
      />
      <AbhicaresClient />
    </>
  );
};

export default AbhicaresPage;
