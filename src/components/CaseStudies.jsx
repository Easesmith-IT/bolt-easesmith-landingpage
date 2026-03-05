import { caseStudies } from '@/data/portfolio';
import { ArrowUpRight, TrendingDown, TrendingUp } from 'lucide-react';
import { ProjectThumbnail } from './ProjectThumbnail';
import { Modal } from './Modal';
import { useState } from 'react';

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(null);
  // const caseStudies = [
  //   {
  //     name: "Premium Fashion Retailer",
  //     industry: "E-commerce",
  //     result: "↑ 42% Conversion Increase",
  //     description:
  //       "Custom Shopify Plus implementation with advanced product customization and seamless checkout flow.",
  //     tags: ["Shopify Plus", "Custom Development", "Optimization"],
  //   },
  //   {
  //     name: "SaaS Platform Overhaul",
  //     industry: "Software",
  //     result: "↑ 3x User Engagement",
  //     description:
  //       "Complete platform redesign and rebuild using modern architecture, resulting in significantly improved performance.",
  //     tags: ["Web App", "React", "Performance"],
  //   },
  //   {
  //     name: "Supply Chain Automation",
  //     industry: "Logistics",
  //     result: "↓ 60% Processing Time",
  //     description:
  //       "Custom workflow automation system eliminating manual processes and reducing errors across operations.",
  //     tags: ["Automation", "Custom Software", "Integration"],
  //   },
  //   {
  //     name: "Mobile Banking App",
  //     industry: "FinTech",
  //     result: "↑ 4.8★ App Rating",
  //     description:
  //       "High-security mobile application with intuitive UX, handling thousands of daily transactions.",
  //     tags: ["Mobile App", "Security", "UX Design"],
  //   },
  //   {
  //     name: "Multi-vendor Marketplace",
  //     industry: "E-commerce",
  //     result: "↑ ₹2M Monthly GMV",
  //     description:
  //       "Scalable marketplace platform connecting vendors and buyers with advanced search and recommendation engine.",
  //     tags: ["Marketplace", "Scalability", "Custom Development"],
  //   },
  //   {
  //     name: "Healthcare Management System",
  //     industry: "Healthcare",
  //     result: "↑ 95% User Satisfaction",
  //     description:
  //       "HIPAA-compliant patient management system streamlining workflows for healthcare providers.",
  //     tags: ["Healthcare", "Compliance", "Web App"],
  //   },
  // ];

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Proven Results
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-luxury">
            Real projects, measurable impact, exceptional outcomes
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-sky-400 transition-all duration-300 hover:shadow-2xl cursor-pointer"
            >
              <div className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black group-hover:text-sky-600 transition-colors">
                        {study.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {study.industry}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-gray-400 group-hover:text-sky-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-50 to-sky-100 rounded-lg border border-sky-200">
                    <TrendingUp size={16} className="text-sky-600" />
                    <span className="text-sm font-bold text-sky-700">
                      {study.result}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {study.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
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

        {selectedStudy && (
          <Modal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </div>
    </section>
  );
}
