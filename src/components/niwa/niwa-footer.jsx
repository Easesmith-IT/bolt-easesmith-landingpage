import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const productLinks = [
  { label: "Features", href: "/products/niwa#features" },
  { label: "Pricing", href: "/products/niwa#final-cta" },
  { label: "API", href: "/products/niwa#integrations" },
  { label: "Documentation", href: "/products/niwa#faq" },
  { label: "Integrations", href: "/products/niwa#integrations" },
];

const companyLinks = [
  { label: "Built by Easesmith", href: "/" },
  { label: "Privacy Policy", href: "/products/niwa/privacy-policy" },
  { label: "Terms", href: "/products/niwa/terms-and-conditions" },
  { label: "Contact", href: "/contact-us" },
  { label: "Support", href: "/contact-us" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/easesmith",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/easesmiths/",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/easesmith/",
    icon: Instagram,
  },
];

export default function NiwaFooter() {
  return (
    <footer className="border-t border-[#DCE3EE] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_0.8fr_0.8fr_1fr]">
          <div>
            <Image
              src="/products/niwa/niwa-logo.png"
              alt="NiWa"
              width={128}
              height={72}
              className="h-14 w-auto"
            />
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#64748B]">
              Built by Easesmith
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#64748B]">
              NiWa helps businesses automate reminders, notifications, support,
              and customer communication without replacing their existing
              software.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081426]">
              Product
            </h3>
            <div className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-[#64748B] transition-colors hover:text-[#081426]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081426]">
              Company
            </h3>
            <div className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-[#64748B] transition-colors hover:text-[#081426]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081426]">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[#64748B]">
              <a
                href="mailto:info@easesmith.com"
                className="flex items-center gap-2 transition-colors hover:text-[#081426]"
              >
                <Mail size={16} className="text-[#295CFF]" />
                info@easesmith.com
              </a>
              <a
                href="tel:+918925687688"
                className="flex items-center gap-2 transition-colors hover:text-[#081426]"
              >
                <Phone size={16} className="text-[#18C37D]" />
                +91 89256 87688
              </a>
            </div>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#64748B] transition-colors hover:border-[#C7D2FE] hover:text-[#295CFF]"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#E5E7EB] pt-6 text-sm text-[#64748B]">
          © {new Date().getFullYear()} NiWa. Built by Easesmith.
        </div>
      </div>
    </footer>
  );
}
