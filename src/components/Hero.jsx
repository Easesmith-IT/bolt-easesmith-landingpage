import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    index: "01",
    title: "Shopify Commerce",
    description: "Storefronts and buying journeys designed to convert.",
  },
  {
    index: "02",
    title: "AI Automation",
    description: "Operational systems that remove delay and manual friction.",
  },
  {
    index: "03",
    title: "Custom Software",
    description: "Business-critical platforms built for control and scale.",
  },
];

const proofPoints = [
  { value: "200+", label: "Projects" },
  { value: "\u20B950M+", label: "Revenue Impact" },
  { value: "98%", label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbff_0%,#ffffff_42%,#f8fafc_100%)] pt-28 pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute left-[6%] top-[36%] h-40 w-40 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="absolute right-[8%] bottom-[12%] h-52 w-52 rounded-full bg-sky-100/80 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(24rem,0.95fr)]">
          <div className="max-w-3xl pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/88 px-4 py-2 text-sm font-medium text-sky-700 shadow-[0_10px_28px_-22px_rgba(14,165,233,0.5)]">
              <Sparkles size={15} className="text-sky-500" />
              <span>Revenue-Focused Technology</span>
            </div>

            <h1 className="mt-8 text-balance font-black leading-[0.92] tracking-[-0.055em] text-slate-950">
              <span className="block text-[clamp(3.3rem,6.5vw,6.2rem)]">
                We Build
              </span>
              <span className="mt-2 block bg-gradient-to-r from-sky-700 via-sky-500 to-cyan-400 bg-clip-text text-[clamp(4rem,8.2vw,7.6rem)] text-transparent">
                What Drives Revenue.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              We design and engineer revenue-focused technology that helps
              businesses convert more, move faster, and scale with control.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://calendly.com/mavyakunal/business-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-8 py-4 font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.45)] transition-all hover:-translate-y-0.5 hover:bg-slate-900"
              >
                Book Strategy Call
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-900 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.35)] transition-all hover:-translate-y-0.5 hover:border-slate-300"
              >
                View Case Studies
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              <span className="font-medium text-slate-900">
                Shopify, AI automation, and custom software
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-y-6 rounded-[2rem] bg-sky-100/60 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/88 shadow-[0_30px_80px_-36px_rgba(15,23,42,0.3)] backdrop-blur">
              <div className="border-b border-slate-200/80 px-6 py-5 md:px-8">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Selected Capabilities
                </div>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600 md:text-base">
                  Modern commerce, automation, and software delivered with a
                  sharper business lens and a calmer execution model.
                </p>
              </div>

              <div className="px-6 md:px-8">
                {capabilities.map((item, index) => (
                  <div
                    key={item.title}
                    className={`grid gap-4 py-6 md:grid-cols-[3.25rem_minmax(0,1fr)] ${
                      index !== capabilities.length - 1
                        ? "border-b border-slate-200/80"
                        : ""
                    }`}
                  >
                    <div className="text-sm font-semibold tracking-[0.2em] text-slate-300">
                      {item.index}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-slate-950">
                        {item.title}
                      </h2>
                      <p className="mt-2 max-w-md text-sm leading-7 text-slate-600 md:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200/80 bg-slate-950 px-6 py-6 text-white md:px-8">
                <div className="grid grid-cols-3 gap-4">
                  {proofPoints.map((item) => (
                    <div key={item.label}>
                      <div className="text-2xl font-bold tracking-tight md:text-3xl">
                        {item.value}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
