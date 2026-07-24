import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar";

export default function PortfolioCaseStudyLayout({ children }) {
  return (
    <main>
      <SiteNavbar />
      <div className="pt-20">{children}</div>
      <Footer />
    </main>
  );
}
