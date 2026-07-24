import { caseStudies } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
            Client work
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl">
            Product and Website Case Studies
          </h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Explore documented challenges, design decisions, wireframes, and
            high-fidelity outcomes from real client and product engagements.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={study.url}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center bg-white p-7">
                <Image
                  src={study.img}
                  alt={`${study.name} ${study.type} case study`}
                  width={360}
                  height={240}
                  className="max-h-full w-auto object-contain"
                />
              </div>
              <div className="border-t border-slate-100 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sky-700">
                      {study.type}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-slate-950">
                      {study.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-700"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {study.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-slate-800"
          >
            View the complete portfolio
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
