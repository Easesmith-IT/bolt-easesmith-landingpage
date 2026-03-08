"use client";

import { allServices } from "@/data/services";
import { cn } from "@/lib/utils";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-3">
            <img
              className="h-16 sm:h-20 w-40 sm:w-56 object-contain"
              src="/logo-easesmith.png"
              alt="Easesmith"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Elite technology engineering for businesses that demand
              excellence.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {allServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-black transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link
                  href="/#process"
                  className="hover:text-black transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={cn(
                    pathname === "/portfolio" && "text-sky-600 underline",
                  )}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={cn(
                    pathname === "/contact-us" && "text-sky-600 underline",
                  )}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black mb-3 text-sm">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:hello@easesmith.com"
                  className="hover:text-black transition-colors"
                >
                  hello@easesmith.com
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easesmith. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="#" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
