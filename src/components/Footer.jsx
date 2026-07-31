import { allServices, getServicePath } from "@/data/services";
import { caseStudies } from "@/data/portfolio";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/#process" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "NiWa", href: "/products/niwa" },
  { label: "Contact Us", href: "/contact-us" },
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070b12] text-white">
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-20">
        <div className="border-b border-white/10 pb-8 lg:hidden">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-sky-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Engineering growth
          </div>

          <h2 className="max-w-sm text-2xl font-bold tracking-[-0.035em] text-white">
            Technology built around your business.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            AI automation, custom software, and Shopify experiences built for
            measurable growth.
          </p>

          <a
            href="https://calendly.com/mavyakunal/business-call"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
          >
            <CalendarDays size={17} />
            Book a strategy call
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            <details className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                Services
                <ChevronDown
                  size={17}
                  className="text-slate-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="space-y-3 pb-5">
                {allServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={getServicePath(service.slug)}
                      className="block py-0.5 text-sm leading-6 text-slate-400 transition-colors hover:text-sky-300"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                Company
                <ChevronDown
                  size={17}
                  className="text-slate-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="space-y-3 pb-5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-0.5 text-sm text-slate-400 transition-colors hover:text-sky-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <details className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-3 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
                Case studies
                <ChevronDown
                  size={17}
                  className="text-slate-500 transition-transform group-open:rotate-180"
                />
              </summary>
              <ul className="space-y-3 pb-5">
                {caseStudies.map((study) => (
                  <li key={study.url}>
                    <Link
                      href={study.url}
                      className="block py-0.5 text-sm text-slate-400 transition-colors hover:text-sky-300"
                    >
                      {study.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </div>

          <div className="mt-7">
            <h3 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Contact
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              <a
                href="mailto:info@easesmith.com"
                className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
              >
                <Mail size={17} className="shrink-0 text-sky-300" />
                info@easesmith.com
              </a>
              <a
                href="tel:+918925687688"
                className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
              >
                <Phone size={17} className="shrink-0 text-sky-300" />
                +91 89256 87688
              </a>
            </div>
            <nav
              aria-label="Easesmith social profiles"
              className="mt-4 flex flex-wrap gap-2"
            >
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm font-medium text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
                  >
                    <SocialIcon size={17} aria-hidden="true" />
                    {social.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="hidden grid-cols-[1.35fr_0.9fr_0.9fr_0.75fr_1fr] gap-8 border-b border-white/10 pb-16 lg:grid">
          <div className="max-w-md">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Engineering growth
            </div>

            <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
              Technology built around your business.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
              AI automation, custom software, and Shopify experiences designed
              to remove bottlenecks and create measurable growth.
            </p>

            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-50"
            >
              <CalendarDays size={17} />
              Book a strategy call
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <nav aria-label="Footer services">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Services
            </h3>
            <ul className="space-y-3">
              {allServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={getServicePath(service.slug)}
                    className="text-sm leading-6 text-slate-300 transition-colors hover:text-sky-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer case studies">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Case studies
            </h3>
            <ul className="space-y-3">
              {caseStudies.map((study) => (
                <li key={study.url}>
                  <Link
                    href={study.url}
                    className="text-sm leading-6 text-slate-300 transition-colors hover:text-sky-300"
                  >
                    {study.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company links">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-sky-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Start a conversation
            </h3>
            <a
              href="mailto:info@easesmith.com"
              className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-sky-300">
                <Mail size={16} />
              </span>
              info@easesmith.com
            </a>
            <a
              href="tel:+918925687688"
              className="group mt-3 flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-sky-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-sky-300">
                <Phone size={16} />
              </span>
              +91 89256 87688
            </a>
            <nav
              aria-label="Easesmith social profiles"
              className="mt-5 flex gap-2"
            >
              {socialLinks.map((social) => {
                const SocialIcon = social.icon;

                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Easesmith on ${social.label}`}
                    title={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-300"
                  >
                    <SocialIcon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Tell us what you are building. We usually respond within one
              business day.
            </p>
            <Link
              href="/contact-us"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-sky-300"
            >
              Start a project
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-b border-white/10 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:gap-3 lg:py-6">
          <p>© {new Date().getFullYear()} Easesmith. All rights reserved.</p>
          <p>AI automation · Custom software · Shopify</p>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative select-none overflow-x-clip px-5 pb-0 pt-4 sm:px-8 sm:pt-6 lg:pt-10"
      >
        <div className="flex justify-center">
          <span className="whitespace-nowrap text-[clamp(4.1rem,17.5vw,16rem)] font-extrabold leading-none tracking-[0.015em] text-white/[0.08]">
            Easesmith
          </span>
        </div>
      </div>
    </footer>
  );
}
