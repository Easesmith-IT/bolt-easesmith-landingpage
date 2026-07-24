import EasemartClient from "@/components/portfolio/easemart/easemart-client";
import CaseStudySummary from "@/components/portfolio/CaseStudySummary";
import React from "react";

export const metadata = {
  title: "Easemart — Grocery Delivery App UI/UX Case Study",

  description:
    "Explore the Easemart grocery delivery app UI/UX case study — designed to simplify online shopping with intuitive navigation, fast delivery tracking, and a seamless mobile experience.",

  keywords: [
    "Easemart case study",
    "grocery app UI UX",
    "delivery app design",
    "mobile ecommerce UX",
    "UI UX case study ecommerce",
    "shopping app interface design",
    "Easesmith portfolio",
    "mobile app wireframes ecommerce",
  ],

  alternates: {
    canonical: "/portfolio/easemart",
  },

  openGraph: {
    title: "Easemart — Grocery Delivery App UI/UX Case Study | Easesmith",

    description:
      "Discover the complete UI/UX journey of Easemart — from research and problem-solving to wireframes and high-fidelity mobile app screens.",

    url: "https://www.easesmith.com/portfolio/easemart",

    siteName: "Easesmith",

    type: "website",

    images: [
      {
        url: "/og/easemart.png",
        width: 1200,
        height: 630,
        alt: "Easemart Mobile App Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Easemart — Grocery Delivery App UI/UX Case Study | Easesmith",

    description:
      "Full UI/UX case study of Easemart — improving grocery shopping experience with clean UI, smart flows, and fast delivery tracking.",

    images: ["/og/easemart.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const Easemart = () => {
  return (
    <>
      <CaseStudySummary url="/portfolio/easemart" />
      <EasemartClient />
    </>
  );
};

export default Easemart;
