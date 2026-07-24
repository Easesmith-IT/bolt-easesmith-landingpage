import { ArrowLeft, BriefcaseBusiness, Home, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const helpfulLinks = [
  {
    href: "/services",
    label: "Explore services",
    description: "Shopify, software, mobile apps, and automation",
    icon: Wrench,
  },
  {
    href: "/portfolio",
    label: "View case studies",
    description: "See selected website and product design work",
    icon: BriefcaseBusiness,
  },
];

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen overflow-hidden bg-slate-950 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.22),transparent_34%),radial-gradient(circle_at_82%_78%,rgba(59,130,246,0.16),transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:54px_54px]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-white/80 bg-white px-4 py-3 shadow-lg shadow-black/20 transition hover:bg-slate-50"
            aria-label="Easesmith homepage"
          >
            <Image
              src="/logo-easesmith.png"
              alt="Easesmith"
              width={981}
              height={156}
              priority
              className="h-auto w-40 sm:w-44"
            />
          </Link>
        </header>

        <section className="flex flex-1 items-center py-16 lg:py-20">
          <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.78fr] lg:gap-20">
            <div>
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
                Error 404
              </p>
              <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
                This page has
                <span className="block text-sky-400">gone off route.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                The address may be outdated, mistyped, or the page may have
                moved. Return to the homepage or continue with one of the
                helpful links below.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl bg-sky-400 px-6 py-3.5 font-bold text-slate-950 transition hover:bg-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  <Home size={19} aria-hidden="true" />
                  Go to homepage
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3.5 font-semibold text-white transition hover:border-sky-300/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
                >
                  <ArrowLeft size={19} aria-hidden="true" />
                  Contact support
                </Link>
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="font-mono text-[clamp(6rem,18vw,11rem)] font-black leading-none tracking-[-0.1em] text-white/[0.08]"
                >
                  404
                </div>
                <h2 className="-mt-4 text-xl font-bold text-white sm:text-2xl">
                  Try another destination
                </h2>

                <nav className="mt-6 space-y-3" aria-label="Helpful links">
                  {helpfulLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-sky-300/40 hover:bg-sky-400/10"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white group-hover:text-sky-200">
                            {item.label}
                          </span>
                          <span className="mt-1 block text-sm leading-6 text-slate-400">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </section>

        <footer className="border-t border-white/10 pt-6 text-sm text-slate-500">
          Easesmith · AI automation, custom software, and Shopify development
        </footer>
      </div>
    </main>
  );
}
