import { allServices } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Software, Shopify, App & AI Automation Services",
  description:
    "Explore Easesmith services for Shopify development, custom software, mobile apps, high-performance websites, and AI-powered business automation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software, Shopify, App & AI Automation Services | Easesmith",
    description:
      "Development and automation services designed to improve operations, customer experience, and scalable business growth.",
    url: "https://www.easesmith.com/services",
    siteName: "Easesmith",
    type: "website",
    images: ["/og/easesmith-social.png"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white px-6 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
              Easesmith services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Software, Shopify, App and AI Automation Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the service that matches your current bottleneck. Each
              engagement starts with discovery and ends with a production-ready
              system, documented handover, and clear next steps.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {allServices.map((service) => {
              const ServiceIcon = service.icon;

              return (
                <article
                  key={service.slug}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <ServiceIcon size={24} aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-black">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-gray-600">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2">
                        <span className="text-sky-600" aria-hidden="true">
                          •
                        </span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-700 hover:text-sky-900"
                  >
                    Explore {service.title}
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
