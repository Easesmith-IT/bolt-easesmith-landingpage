"use client";

import { useState, useEffect } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import {
    ArrowRight,
    ArrowUpRight,
    X,
    TrendingUp,
    TrendingDown,
    Star,
    ChevronRight,
    Sparkles,
    BarChart3,
    Zap,
    ShieldCheck,
    Calendar,
    FileText,
    Linkedin,
    Twitter,
    Github,
    Mail,
    Quote,
    ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import { caseStudies, categories, stats, testimonials } from '@/data/portfolio';
import { ProjectThumbnail } from '@/components/ProjectThumbnail';
import { Modal } from '@/components/Modal';

// ─── Sub-components ───────────────────────────────────────────────────────────





// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedStudy, setSelectedStudy] = useState(null);

    const filtered = activeFilter === 'All'
        ? caseStudies
        : caseStudies.filter((s) => s.category === activeFilter);

    return (
      <div className="min-h-screen bg-white font-sans">
        {/* ── Navbar ── */}
        {/* <SiteNavbar /> */}

        {/* ── 1. Hero ── */}
        <section className="relative pt-40 pb-24 bg-white overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-sky-400/8 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 left-1/4 w-[400px] h-[400px] bg-sky-300/6 rounded-full blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(90deg, #0ea5e9 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 rounded-full text-sm font-semibold text-sky-700 border border-sky-200 mb-8">
              <Sparkles size={14} className="text-sky-500" />
              Case Studies & Portfolio
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black tracking-tight leading-tight mb-6">
              Proven Work.
              <br />
              <span className="bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                Measurable Impact.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
              Explore how we design and engineer high-performance digital
              systems that streamline operations and drive real revenue growth.
            </p>

            {/* Metrics strip */}
            <div className="inline-grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="bg-white px-8 py-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. Filter Bar ── */}
        <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`flex-shrink-0 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeFilter === cat
                        ? "bg-sky-500 text-white shadow-md shadow-sky-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <span className="flex-shrink-0 text-sm text-gray-400 font-medium hidden sm:block">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </section>

        {/* ── 3. Project Cards Grid ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((study) => (
                <article
                  key={study.id}
                  onClick={() => setSelectedStudy(study)}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-10px_rgba(14,165,233,0.18)] hover:border-sky-200"
                  aria-label={`Open ${study.name} case study`}
                >
                  {/* Thumbnail */}
                  <ProjectThumbnail
                    category={study.category}
                    accentColor={study.accentColor}
                    iconBg={study.iconBg}
                  />

                  {/* Content */}
                  <div className="p-7 space-y-5">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider">
                          {study.category}
                        </span>
                        <h2 className="text-lg font-bold text-black group-hover:text-sky-700 transition-colors mt-0.5 leading-snug">
                          {study.name}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5">
                          {study.industry}
                        </p>
                      </div>
                      <div className="flex-shrink-0 w-9 h-9 bg-gray-50 group-hover:bg-sky-50 rounded-lg flex items-center justify-center transition-colors">
                        <ArrowUpRight
                          size={18}
                          className="text-gray-400 group-hover:text-sky-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                        />
                      </div>
                    </div>

                    {/* Key Result */}
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-sky-50 to-sky-100/50 rounded-xl border border-sky-100">
                      {study.resultTrend === "up" ? (
                        <TrendingUp
                          size={16}
                          className="text-sky-600 flex-shrink-0"
                        />
                      ) : (
                        <TrendingDown
                          size={16}
                          className="text-sky-600 flex-shrink-0"
                        />
                      )}
                      <span className="text-sm font-bold text-sky-700">
                        {study.resultValue}
                      </span>
                      <span className="text-sm text-sky-600/70">
                        {study.resultLabel}
                      </span>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {study.tagline}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 3).map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                      {study.tags.length > 3 && (
                        <span className="px-2.5 py-1 text-xs font-medium bg-gray-50 text-gray-400 rounded-lg">
                          +{study.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Modal ── */}
        {selectedStudy && (
          <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}

        {/* ── 5. Results Banner ── */}
        <section className="py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-80 h-80 bg-sky-600/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                The Numbers Don't Lie
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Aggregate results across all client engagements.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: "200+",
                  sub: "Projects Delivered",
                  icon: <BarChart3 className="w-5 h-5 text-sky-400" />,
                },
                {
                  value: "↑ 41%",
                  sub: "Avg Client Revenue Growth",
                  icon: <TrendingUp className="w-5 h-5 text-sky-400" />,
                },
                {
                  value: "65+",
                  sub: "Systems Automated",
                  icon: <Zap className="w-5 h-5 text-sky-400" />,
                },
                {
                  value: "94%",
                  sub: "Client Retention Rate",
                  icon: <ShieldCheck className="w-5 h-5 text-sky-400" />,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="text-center space-y-3 p-6 rounded-2xl border border-gray-800 hover:border-sky-800 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-sky-900/50 rounded-xl">
                    {s.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Testimonial Strip ── */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
                What Executives Say
              </h2>
              <p className="text-gray-500 mt-4 text-lg">
                From the leaders who trusted us with their most critical
                systems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-sky-200 transition-all duration-300"
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        size={14}
                        className="fill-sky-400 text-sky-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-700 font-bold">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-black text-sm">{t.author}</p>
                      <p className="text-gray-500 text-xs">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA Section ── */}
        <section
          id="cta"
          className="py-24 lg:py-32 bg-black text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-900/50 rounded-full text-sm font-medium text-sky-300 border border-sky-800 mb-8">
              <ChevronRight size={14} className="text-sky-400" />
              Next Step
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ready to See
              <br />
              <span className="bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent">
                Similar Results?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
              Let's build the systems your business needs to scale efficiently.
              No guesswork — just engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <a
                href="https://calendly.com/mavyakunal/business-call"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Strategy Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <button className="px-8 py-4 border-2 border-gray-700 text-white rounded-xl font-semibold hover:bg-white/10 hover:border-sky-500 transition-all flex items-center justify-center gap-2">
                <ExternalLink size={20} />
                Discuss Your Project
              </button>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-gray-800">
              {[
                { val: "30 Min", label: "Strategy Call" },
                { val: "48 Hours", label: "Proposal Delivery" },
                { val: "No Obligation", label: "Free Consultation" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-sky-400">{s.val}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. Footer ── */}
        
      </div>
    );
}
