"use client";

import { useState, useEffect } from 'react';
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    Star,
    Quote,
    Calendar,
    MessageCircle,
    Home,
    ChevronRight,
    Zap,
    TrendingUp,
    Linkedin,
    Twitter,
    Github,
    Mail,
    ExternalLink,
} from 'lucide-react';
import { servicesBySlug, allServices } from '@/data/services';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';


// ─── Store Mockup ─────────────────────────────────────────────────────────────

function StoreMockup({ category }) {
    const colors = {
        shopify: ['bg-sky-400', 'bg-sky-200', 'bg-sky-100'],
        software: ['bg-slate-700', 'bg-sky-400', 'bg-slate-200'],
        app: ['bg-gray-800', 'bg-sky-400', 'bg-gray-200'],
        automation: ['bg-sky-500', 'bg-slate-800', 'bg-sky-100'],
    };
    const key = category.toLowerCase().includes('shopify') ? 'shopify'
        : category.toLowerCase().includes('soft') ? 'software'
            : category.toLowerCase().includes('app') || category.toLowerCase().includes('mobile') ? 'app'
                : 'automation';
    const [accent, header, body] = colors[key];

    return (
        <div className="relative max-w-md mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-sky-400/20 rounded-3xl blur-2xl scale-110" />

            {/* Laptop */}
            <div className="relative bg-gray-900 rounded-2xl p-3 shadow-2xl border border-gray-700">
                {/* Browser chrome */}
                <div className="bg-gray-800 rounded-t-xl p-2 flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 bg-gray-700 rounded-md h-5 flex items-center px-3">
                        <span className="text-gray-400 text-xs">🔒 easesmith.com/store</span>
                    </div>
                </div>
                {/* Screen content */}
                <div className="bg-white rounded-xl overflow-hidden">
                    {/* Nav */}
                    <div className={`${header === 'bg-sky-400' ? 'bg-sky-600' : 'bg-gray-900'} h-9 flex items-center px-4 gap-6`}>
                        <div className="w-16 h-3 bg-white/80 rounded-full" />
                        <div className="flex gap-3 ml-auto">
                            {[1, 2, 3].map(i => <div key={i} className="w-8 h-2.5 bg-white/30 rounded-full" />)}
                        </div>
                    </div>
                    {/* Hero */}
                    <div className={`${accent} p-6`}>
                        <div className="w-32 h-5 bg-white/90 rounded-full mb-2" />
                        <div className="w-48 h-3 bg-white/50 rounded-full mb-4" />
                        <div className="w-24 h-8 bg-white rounded-lg" />
                    </div>
                    {/* Products */}
                    <div className="p-4 grid grid-cols-3 gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
                                <div className={`h-16 ${body}`} />
                                <div className="p-2 space-y-1">
                                    <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                                    <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Stats bar */}
                    <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
                        {['↑ 48%', '↓ 31%', '↑ $94'].map((v, i) => (
                            <div key={i} className="p-3 text-center">
                                <div className="text-xs font-bold text-sky-600">{v}</div>
                                <div className="text-[9px] text-gray-400 mt-0.5">{['CVR', 'Cart Abnd.', 'AOV'][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating metric card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                        <TrendingUp size={16} className="text-sky-600" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-black">↑ 48% CVR</div>
                        <div className="text-xs text-gray-500">90 days post-launch</div>
                    </div>
                </div>
            </div>

            {/* Trust badge */}
            <div className="absolute -top-3 -right-4 bg-black text-white rounded-xl px-3 py-2 text-xs font-semibold shadow-xl">
                {/* ✓ Shopify Plus */}
                ✓ {category}
            </div>
        </div>
    );
}

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ question, answer  }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`border rounded-2xl overflow-hidden transition-all duration-300 ${open ? 'border-sky-200 shadow-sm' : 'border-gray-200'}`}>
            <button
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span className="font-semibold text-black pr-4">{question}</span>
                {open
                    ? <ChevronUp size={20} className="text-sky-500 flex-shrink-0" />
                    : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />
                }
            </button>
            {open && (
                <div className="px-6 pb-5 bg-white">
                    <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">{answer}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ServiceDetail() {
    const { slug } = useParams();
    const router = useRouter();
    const service = slug ? servicesBySlug[slug] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold text-black">
                Service Not Found
              </h1>
              <p className="text-gray-600">
                The service you&apos;re looking for doesn&apos;t exist.
              </p>
              <button
                onClick={() => router.push("/")}
                className="px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto"
              >
                <ArrowLeft size={18} /> Back to Home
              </button>
            </div>
          </div>
        );
    }

    const ServiceIcon = service.icon;

    return (
      <div className="min-h-screen bg-white">
        {/* Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              description: service.heroSubheadline,
              provider: { "@type": "Organization", name: "Easesmith" },
              url: `https://easesmith.com/services/${service.slug}`,
            }),
          }}
        />


        {/* Sticky CTA — mobile only */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-4 flex gap-3 shadow-lg">
          <a
            href="https://calendly.com/mavyakunal/business-call"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-black text-white rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-1.5"
          >
            <Calendar size={16} /> Book Free Call
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-3 bg-green-500 text-white rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-1.5"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        {/* ── Breadcrumb ── */}
        <div className="pt-24 pb-0 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <nav
              className="flex items-center gap-2 text-sm text-gray-500"
              aria-label="Breadcrumb"
            >
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-black transition-colors"
              >
                <Home size={14} /> Home
              </Link>
              <ChevronRight size={14} />
              <Link
                href="/#services"
                className="hover:text-black transition-colors"
              >
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-black font-medium">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* ── 1. Hero ── */}
        <section className="relative pt-12 pb-24 lg:pb-32 bg-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-sky-400/6 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] bg-sky-300/5 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage:
                  "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full text-sm font-semibold text-sky-700 border border-sky-200">
                    <ServiceIcon size={15} className="text-sky-500" />
                    {service.tagline}
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-tight">
                    {service.heroHeadline}
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {service.heroSubheadline}
                  </p>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://calendly.com/mavyakunal/business-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Calendar size={20} />
                    Book Free Strategy Call
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <Link
                    href="/portfolio"
                    className="px-8 py-4 bg-white text-black border-2 border-gray-200 rounded-xl font-semibold hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    View Our Work
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.trustBadges.map((badge, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-lg text-xs font-semibold text-gray-700 border border-gray-200"
                    >
                      <CheckCircle2 size={12} className="text-sky-500" />
                      {badge}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — mockup */}
              <div className="relative hidden lg:block">
                <StoreMockup category={service.tagline} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Pain Section ── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-full text-sm font-semibold text-red-700 border border-red-100">
                ⚠️ The Problem
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {service.painHeadline}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.painPoints.map((pain, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{pain.icon}</div>
                  <h3 className="text-lg font-bold text-black mb-2">
                    {pain.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {pain.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Solution / Process ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full text-sm font-semibold text-sky-700 border border-sky-200">
                <Zap size={14} className="text-sky-500" /> Our Process
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                {service.solutionHeadline}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {service.solutionSubheadline}
              </p>
            </div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-sky-300 via-sky-400 to-transparent" />

              <div className="space-y-6">
                {service.steps.map((step, i) => (
                  <div
                    key={i}
                    className="relative flex gap-4 sm:gap-8 items-start group"
                  >
                    {/* Step number */}
                    <div className="relative flex-shrink-0 size-10 sm:size-16 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-sky-600 transition-colors z-10">
                      {step.number}
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-6 group-hover:border-sky-200 group-hover:shadow-md transition-all duration-300">
                      <h3 className="text-lg font-bold text-black mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Services Breakdown (optional — shown when serviceBreakdown data exists) ── */}
        {service.serviceBreakdown && service.serviceBreakdown.length > 0 && (
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-14 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full text-sm font-semibold text-sky-700 border border-sky-200">
                  <CheckCircle2 size={14} className="text-sky-500" /> What We
                  Build
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                  Two Disciplines. One World-Class Team.
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Whether it&apos;s a native mobile app, a high-traffic web platform,
                  or both — we engineer it end to end.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {service.serviceBreakdown.map((section, si) => (
                  <div
                    key={si}
                    className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:border-sky-200 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Section header */}
                    <div
                      className={`p-7 border-b border-gray-100 ${si === 0 ? "bg-gradient-to-r from-sky-50 to-white" : "bg-gradient-to-r from-slate-50 to-white"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${si === 0 ? "bg-sky-100" : "bg-slate-100"}`}
                        >
                          {section.icon}
                        </div>
                        <h3 className="text-xl font-bold text-black">
                          {section.heading}
                        </h3>
                      </div>
                    </div>
                    {/* Feature list */}
                    <div className="p-7 grid grid-cols-1 gap-4">
                      {section.items.map((item, ii) => (
                        <div
                          key={ii}
                          className="flex gap-3 items-start group/item"
                        >
                          <div
                            className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5 ${si === 0 ? "bg-sky-100" : "bg-slate-100"}`}
                          >
                            <CheckCircle2
                              size={14}
                              className={
                                si === 0 ? "text-sky-600" : "text-slate-600"
                              }
                            />
                          </div>
                          <div>
                            <span className="font-semibold text-black text-sm">
                              {item.title}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {" "}
                              — {item.description}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Results / Proof ── */}
        <section className="py-20 lg:py-28 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-900/50 rounded-full text-sm font-semibold text-sky-300 border border-sky-800">
                <TrendingUp size={14} className="text-sky-400" /> Proven Results
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Real Numbers. Real Clients.
              </h2>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {service.results.map((r, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-sky-700 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-sky-400 mb-2">
                    {r.metric}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">
                    {r.label}
                  </div>
                  <div className="text-xs text-gray-500">{r.context}</div>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:border-sky-800 transition-colors"
                >
                  <Quote size={24} className="text-sky-500 mb-4" />
                  <p className="text-gray-300 leading-relaxed italic mb-6">
                    &quot;{t.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="w-10 h-10 bg-sky-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">
                        {t.role}, {t.company}
                      </p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          size={12}
                          className="fill-sky-400 text-sky-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Features / What's Included ── */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-50 rounded-full text-sm font-semibold text-sky-700 border border-sky-200">
                <CheckCircle2 size={14} className="text-sky-500" /> What&apos;s
                Included
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                Everything You Need to Succeed
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {service.features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-sky-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-sky-100 group-hover:bg-sky-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <CheckCircle2 size={18} className="text-sky-600" />
                  </div>
                  <h3 className="font-bold text-black mb-2 text-sm">
                    {f.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Pricing Teaser ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 md:p-14 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-900/60 rounded-full text-sm font-semibold text-sky-300 border border-sky-800">
                  Investment
                </div>
                <div>
                  <span className="text-5xl md:text-7xl font-bold text-white">
                    {service.pricingFrom}
                  </span>
                  <span className="text-2xl text-gray-400 font-medium">+</span>
                </div>
                <p className="text-gray-400 max-w-lg mx-auto">
                  {service.pricingNote}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <a
                    href="#cta"
                    className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar size={18} /> Get Custom Quote
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Why Choose Us ── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                Why Easesmith?
              </h2>
              <p className="text-xl text-gray-600 max-w-xl mx-auto">
                What separates a revenue-generating system from a costly
                experiment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whyPoints.map((wp, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-gray-200 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">{wp.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {wp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-black tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Everything you need to know before we start.
              </p>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. Final CTA ── */}
        <section
          id="cta"
          className="py-24 lg:py-32 bg-black text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #38bdf8 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="space-y-6 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-900/50 rounded-full text-sm font-medium text-sky-300 border border-sky-800">
                <TrendingUp size={14} className="text-sky-400" />
                Ready to Grow?
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Ready to Build a {service.tagline}
                <br />
                <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                  That Actually Scales?
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed">
                Let&apos;s talk about your specific goals. 30-minute strategy call,
                no obligation, clear next steps.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                // href="tel:+1234567890"
                href="https://calendly.com/mavyakunal/business-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Free Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Chat
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-800">
              {[
                { val: "30 Min", label: "Strategy Call" },
                { val: "48 Hrs", label: "Proposal Delivery" },
                { val: "No Risk", label: "Free Consultation" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-sky-400">{s.val}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related Services ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-black mb-8">
              Other Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {allServices
                .filter((s) => s.slug !== service.slug)
                .slice(0, 3)
                .map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-sky-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-sky-100 group-hover:bg-sky-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={18} className="text-sky-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-black text-sm group-hover:text-sky-700 transition-colors">
                          {s.title}
                        </div>
                        <div className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
                          {s.description}
                        </div>
                      </div>
                      <ChevronRight
                        size={16}
                        className="text-gray-400 group-hover:text-sky-500 flex-shrink-0 mt-0.5 transition-colors"
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
              <div className="space-y-3">
                {/* <img src="/easesmith-logo.png" alt="Easesmith" className="h-10 w-auto object-contain" /> */}
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
                        {/* {s.title.split("&")[0].trim()} */}
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
                      className="hover:text-black transition-colors"
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#cta"
                      className="hover:text-black transition-colors"
                    >
                      Contact
                    </a>
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

        {/* Mobile bottom padding spacer */}
        <div className="md:hidden h-20" />
      </div>
    );
}
