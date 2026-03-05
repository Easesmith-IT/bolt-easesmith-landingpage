"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

/**
 * SiteNavbar — shared across ALL pages.
 *
 * On the homepage (/):
 *   - Nav links scroll to sections smoothly.
 * On other pages (/portfolio, /services/:slug):
 *   - Nav links navigate to /#section anchor.
 * Logo always redirects to /.
 */
export default function SiteNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';
    console.log("pathname",pathname);
    

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const handleSectionClick = (sectionId) => {
        setMobileOpen(false);
        if (isHome) {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        router.push(`/#${sectionId}`);
    };

    const navLinks = [
        { label: 'Services', section: 'services' },
        { label: 'Process', section: 'process' },
        { label: 'Work', section: 'case-studies' },
        { label: 'Clients', section: 'testimonials' },
    ];

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo — always links to home */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label="Easesmith home"
            >
              {/* Inline SVG — horizontal colored logo, exact brand colors */}
              <img
                className="h-16 sm:h-20 w-44 sm:w-56 object-contain"
                src="/logo-easesmith.png"
                alt="Easesmith"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={cn(
                    "text-gray-700 hover:text-black transition-colors font-medium cursor-pointer",
                    pathname.includes("services") &&
                      section === "services" &&
                      "text-sky-600 underline",
                  )}
                >
                  {label}
                </button>
              ))}
              <Link
                href="/portfolio"
                className={cn(
                  "text-gray-700 hover:text-black transition-colors font-medium",
                  pathname === "/portfolio" && "text-sky-600 underline",
                )}
              >
                Portfolio
              </Link>
              <Link
                href="/shopify-dev-page"
                className={cn(
                  "text-gray-700 hover:text-black transition-colors font-medium",
                )}
              >
                Shopify Development
              </Link>
              <a
                href="https://calendly.com/mavyakunal/business-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Book Strategy Call
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-gray-700 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-2">
              {navLinks.map(({ label, section }) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className="block w-full text-left px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
                >
                  {label}
                </button>
              ))}
              <Link
                href="/portfolio"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:text-black transition-colors"
              >
                Portfolio
              </Link>
              <div className="pt-2">
                <a
                  href="https://calendly.com/mavyakunal/business-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all font-medium shadow-lg hover:shadow-xl"
                >
                  Book Strategy Call
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    );
}
