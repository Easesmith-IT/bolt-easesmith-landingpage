"use client";

import Footer from "@/components/Footer";
import SiteNavbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AppLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <main>
      <SiteNavbar />

      {children}
      <Footer />
    </main>
  );
}
