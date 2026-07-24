import FinalCTA from "@/components/FinalCTA";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import CaseStudies from "@/components/CaseStudies";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.easesmith.com/#organization",
      name: "Easesmith",
      url: "https://www.easesmith.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.easesmith.com/logo-easesmith.png",
        width: 981,
        height: 156,
      },
      email: "info@easesmith.com",
      telephone: "+91-89256-87688",
      sameAs: [
        "https://in.linkedin.com/company/easesmith",
        "https://www.facebook.com/easesmiths/",
        "https://www.instagram.com/easesmith/",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@easesmith.com",
        telephone: "+91-89256-87688",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.easesmith.com/#website",
      name: "Easesmith",
      url: "https://www.easesmith.com",
      publisher: {
        "@id": "https://www.easesmith.com/#organization",
      },
    },
  ],
};


export default function Home() {
  return (
    // shadcn@3.8.5
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <div className="min-h-screen bg-white">
        <Hero />
        <SocialProof />
        <Services />
        <WhyChooseUs />
        <Process />
        <CaseStudies />
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  );
}
