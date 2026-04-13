import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ChaperoneClient from "@/components/portfolio/chaperone/chaperone-client";

export const metadata = {
  title: "Chaperone — UI/UX Case Study",
  description:
    "A detailed UI/UX case study for Chaperone, a nature-inspired plant brand. Explore the design process: color palette, typography, wireframes, and high-fidelity designs built by Easesmith.",
  keywords: [
    "Chaperone case study",
    "UI UX design",
    "plant brand design",
    "nature website design",
    "Easesmith portfolio",
    "high fidelity wireframes",
    "web design case study",
  ],
  alternates: {
    canonical: "/portfolio/chaperone",
  },
  openGraph: {
    title: "Chaperone — UI/UX Case Study | Easesmith",
    description:
      "Explore the full design journey of Chaperone — from problem definition to high-fidelity UI screens for a nature-inspired plant brand.",
    url: "https://www.easesmith.com/portfolio/chaperone",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/logo-easesmith.png",
        width: 1200,
        height: 630,
        alt: "Chaperone Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaperone — UI/UX Case Study | Easesmith",
    description:
      "Full UI/UX case study for Chaperone — a nature-themed plant brand designed by Easesmith.",
    images: ["/logo-easesmith.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ChaperonePage = () => {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.easesmith.com" },
          { name: "Portfolio", url: "https://www.easesmith.com/portfolio" },
          {
            name: "Chaperone",
            url: "https://www.easesmith.com/portfolio/chaperone",
          },
        ]}
      />
      <ChaperoneClient />
    </>
  );
};

export default ChaperonePage;
