import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar";

export default function AppLayout({ children }) {
  return (
    <main>
      <SiteNavbar />

      {children}
      <Footer />
    </main>
  );
}
