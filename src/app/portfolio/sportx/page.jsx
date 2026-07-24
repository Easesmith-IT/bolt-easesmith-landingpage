import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import SportxClient from "@/components/portfolio/sportx/sportx-client";

export const metadata = {
  title: "SportX — Sports Mobile App UI/UX Case Study",
  description:
    "Explore the SportX mobile app UI/UX case study — designed to deliver real-time sports updates, intuitive navigation, and engaging user experiences for sports enthusiasts.",

  keywords: [
    "SportX case study",
    "sports app UI UX",
    "mobile sports app design",
    "UI UX case study sports",
    "live score app UX",
    "sports dashboard UI",
    "Easesmith portfolio",
    "mobile app wireframes sports",
  ],

  alternates: {
    canonical: "/portfolio/sportx",
  },

  openGraph: {
    title: "SportX — Sports Mobile App UI/UX Case Study | Easesmith",
    description:
      "Discover the complete UI/UX journey of SportX — from research and problem-solving to wireframes and high-fidelity sports app screens.",
    url: "https://www.easesmith.com/portfolio/sportx",
    siteName: "Easesmith",
    type: "website",
    images: [
      {
        url: "/og/sportx.png",
        width: 1200,
        height: 630,
        alt: "SportX Mobile App Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SportX — Sports Mobile App UI/UX Case Study | Easesmith",
    description:
      "Full UI/UX case study of SportX — enhancing sports tracking and engagement through intuitive design and clean mobile UI.",
    images: ["/og/sportx.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const SportXPage = () => {
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
            name: "SportX",
            url: "https://www.easesmith.com/portfolio/sportx",
          },
        ]}
      />

      <SportxClient />
    </>
  );
};

export default SportXPage;
