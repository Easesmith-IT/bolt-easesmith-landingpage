"use client";

import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
const pathname = usePathname();

  return (
    // <footer className="bg-white border-t border-gray-200">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
    //       <div className="space-y-4">
    //         {/* <img
    //           src="/Untitled_design_(4).png"
    //           alt="Easesmith"
    //           className="h-8 w-auto"
    //         /> */}
    //         <img
    //           className="h-16 sm:h-20 w-40 sm:w-56 object-contain"
    //           src="/logo-easesmith.png"
    //           alt="Easesmith"
    //         />
    //         <p className="text-gray-600 text-sm leading-relaxed">
    //           Elite technology engineering for businesses that demand
    //           excellence.
    //         </p>
    //       </div>

    //       <div>
    //         <h3 className="font-bold text-black mb-4">Services</h3>
    //         <ul className="space-y-3">
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("services")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Shopify Development
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("services")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Custom Software
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("services")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               App Development
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("services")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Automation
    //             </button>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="font-bold text-black mb-4">Company</h3>
    //         <ul className="space-y-3">
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("process")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Our Process
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("case-studies")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Case Studies
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("testimonials")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Testimonials
    //             </button>
    //           </li>
    //           <li>
    //             <button
    //               onClick={() => scrollToSection("cta")}
    //               className="text-gray-600 hover:text-black transition-colors text-sm"
    //             >
    //               Contact
    //             </button>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="font-bold text-black mb-4">Contact</h3>
    //         <ul className="space-y-3">
    //           <li className="text-gray-600 text-sm">
    //             <a
    //               href="mailto:hello@agency.com"
    //               className="hover:text-black transition-colors"
    //             >
    //               hello@agency.com
    //             </a>
    //           </li>
    //           <li className="text-gray-600 text-sm">Schedule a Call</li>
    //         </ul>
    //         <div className="flex gap-4 mt-6">
    //           <a
    //             href="#"
    //             className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
    //           >
    //             <Linkedin size={18} />
    //           </a>
    //           <a
    //             href="#"
    //             className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
    //           >
    //             <Twitter size={18} />
    //           </a>
    //           <a
    //             href="#"
    //             className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
    //           >
    //             <Github size={18} />
    //           </a>
    //           <a
    //             href="#"
    //             className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
    //           >
    //             <Mail size={18} />
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="pt-8 border-t border-gray-200">
    //       <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    //         <p className="text-sm text-gray-500">
    //           © {new Date().getFullYear()} Easesmith. All rights reserved.
    //         </p>
    //         <div className="flex gap-6">
    //           <a
    //             href="#"
    //             className="text-sm text-gray-500 hover:text-black transition-colors"
    //           >
    //             Privacy Policy
    //           </a>
    //           <a
    //             href="#"
    //             className="text-sm text-gray-500 hover:text-black transition-colors"
    //           >
    //             Terms of Service
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img
              src="/logo-easesmith.png"
              alt="Easesmith"
              className="h-10 w-auto object-contain"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Elite technology engineering for businesses that demand
              excellence.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-4">Services</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {[
                "Shopify Development",
                "Custom Software",
                "App Development",
                "Automation",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    className="hover:text-black transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-600">
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
                    "font-medium",
                    pathname === "/portfolio" && "text-sky-600 underline",
                  )}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="hover:text-black transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <a href="#cta" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-black mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="mailto:hello@easesmith.com"
                  className="hover:text-black transition-colors"
                >
                  hello@easesmith.com
                </a>
              </li>
              <li>Schedule a Call</li>
            </ul>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-sky-100 hover:text-sky-600 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Easesmith. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
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
