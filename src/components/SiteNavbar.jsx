"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  Home,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

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
  const pendingScrollTarget = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const root = document.documentElement;
    const lockedScrollY = window.scrollY;
    const previousRootOverflow = root.style.overflow;
    const previousRootOverscroll = root.style.overscrollBehavior;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyLeft = document.body.style.left;
    const previousBodyRight = document.body.style.right;
    const previousBodyWidth = document.body.style.width;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    root.style.overflow = "hidden";
    root.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      root.style.overflow = previousRootOverflow;
      root.style.overscrollBehavior = previousRootOverscroll;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.left = previousBodyLeft;
      document.body.style.right = previousBodyRight;
      document.body.style.width = previousBodyWidth;
      window.removeEventListener("keydown", onKeyDown);
      const pendingTarget = pendingScrollTarget.current;
      const behavior = pendingTarget === null ? "instant" : "smooth";
      pendingScrollTarget.current = null;
      window.requestAnimationFrame(() => {
        const targetY =
          pendingTarget === null
            ? lockedScrollY
            : typeof pendingTarget === "string"
            ? document.getElementById(pendingTarget)?.offsetTop - 80
            : pendingTarget;
        window.scrollTo({ top: targetY, behavior });
      });
    };
  }, [mobileOpen]);

  const handleSectionClick = (sectionId) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        pendingScrollTarget.current = sectionId;
        return;
      }
    }
    pendingScrollTarget.current = 0;
    router.push(`/#${sectionId}`);
  };

  const handleMobileLinkClick = (event, href) => {
    event.preventDefault();
    pendingScrollTarget.current = 0;
    router.push(href);
    setMobileOpen(false);
  };

  const navLinks = [
    { label: "Services", section: "services" },
    // { label: "Process", section: "process" },
    // { label: "Work", section: "case-studies" },
    // { label: "Clients", section: "testimonials" },
  ];

  const mobileLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", section: "services", icon: Layers3 },
    { label: "Portfolio", href: "/portfolio", icon: BriefcaseBusiness },
    {
      label: "Shopify Development",
      href: "/shopify-dev-page",
      icon: ShoppingBag,
    },
    { label: "Contact Us", href: "/contact-us", icon: MessageCircle },
  ];

  const isCurrentPath = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 isolate transition-all duration-300 ${
          mobileOpen
            ? "border-b border-gray-100 bg-white shadow-sm"
            : scrolled
              ? "bg-white/95 backdrop-blur-md shadow-sm"
              : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo — always links to home */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center flex-shrink-0"
            aria-label="Easesmith home"
          >
            {/* Inline SVG — horizontal colored logo, exact brand colors */}
            <Image
              className="h-16 sm:h-20 w-44 sm:w-56 object-contain"
              src="/logo-easesmith.png"
              alt="Easesmith"
              width={224}
              height={80}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center space-x-8">
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
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-gray-700 hover:text-black transition-colors font-medium",
              )}
            >
              Shopify Development
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-gray-700 hover:text-black transition-colors font-medium",
              )}
            >
              Contact Us
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
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-gray-100 bg-white lg:hidden"
        >
          <div className="mx-auto flex min-h-full max-w-lg flex-col px-6 py-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
                Navigate
              </p>
              <div className="space-y-2">
                {mobileLinks.map(({ label, href, section, icon: Icon }) => {
                  const active =
                    (href && isCurrentPath(href)) ||
                    (section && pathname.startsWith("/services"));
                  const itemClass = cn(
                    "flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 text-left text-sm font-semibold transition-colors",
                    active
                      ? "border-sky-200 bg-sky-50 text-sky-700"
                      : "border-transparent text-gray-700 hover:border-gray-200 hover:bg-gray-50 hover:text-black",
                  );
                  const content = (
                    <>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                          active
                            ? "bg-sky-100 text-sky-600"
                            : "bg-gray-100 text-gray-500",
                        )}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="flex-1">{label}</span>
                      <ChevronRight size={17} className="text-gray-400" />
                    </>
                  );

                  if (section) {
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => handleSectionClick(section)}
                        className={itemClass}
                        aria-current={active ? "page" : undefined}
                      >
                        {content}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={(event) => handleMobileLinkClick(event, href)}
                      className={itemClass}
                      aria-current={active ? "page" : undefined}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <a
                href="https://calendly.com/mavyakunal/business-call"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-black px-5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-gray-800"
              >
                Book a strategy call
                <ArrowUpRight size={17} />
              </a>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href="tel:+91892568788"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700"
                >
                  <Phone size={16} className="text-sky-600" />
                  Call us
                </a>
                <a
                  href="mailto:info@easemith.com"
                  className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700"
                >
                  <Mail size={16} className="text-sky-600" />
                  Email us
                </a>
              </div>
              <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                AI automation · Custom software · Shopify
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
