"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Integrations", href: "#integrations" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export default function NiwaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || mobileOpen
            ? "border-b border-[#E5E7EB] bg-white/92 shadow-[0_16px_40px_-28px_rgba(8,20,38,0.22)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/products/niwa" className="flex items-center gap-3">
            <Image
              src="/products/niwa/niwa-logo.png"
              alt="NiWa"
              width={128}
              height={72}
              className="h-11 w-auto"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-tight text-[#081426]">
                NiWa
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-[#64748B]">
                Built by Easesmith
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#475569] transition-colors hover:text-[#081426]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-[#295CFF] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#234fe0]"
            >
              Book Demo
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#081426] lg:hidden"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="fixed inset-x-0 top-20 z-40 h-[calc(100dvh-5rem)] overflow-y-auto border-t border-[#E5E7EB] bg-white lg:hidden">
          <div className="mx-auto flex max-w-lg flex-col gap-3 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4 text-sm font-semibold text-[#081426]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#295CFF] px-5 py-4 text-sm font-semibold text-white"
            >
              Book Demo
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
