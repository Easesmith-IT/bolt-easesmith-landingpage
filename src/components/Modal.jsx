import { CalendarIcon, FileTextIcon, QuoteIcon, XIcon } from "lucide-react";
import { useEffect } from "react";

export function Modal({ study, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div
          className={`bg-gradient-to-br ${study.heroColor} p-8 rounded-t-3xl`}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-sky-100 text-sky-700 rounded-full mb-3">
                {study.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {study.name}
              </h2>
              <p className="text-gray-600 mt-1 text-sm">
                {study.client} · {study.industry}
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
              aria-label="Close"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {study.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-white/60"
              >
                <div
                  className={`text-lg font-bold ${m.trend === "down" ? "text-sky-700" : "text-sky-700"}`}
                >
                  {m.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Client Overview */}
          <section>
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
              Client Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">{study.overview}</p>
          </section>

          <div className="border-t border-gray-100" />

          {/* Challenge */}
          <section>
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
              The Challenge
            </h3>
            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
          </section>

          <div className="border-t border-gray-100" />

          {/* Solution */}
          <section>
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
              Our Solution
            </h3>
            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
          </section>

          <div className="border-t border-gray-100" />

          {/* Tech Stack */}
          <section>
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Testimonial */}
          {study.testimonial && (
            <>
              <div className="border-t border-gray-100" />
              <section className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
                <QuoteIcon size={20} className="text-sky-400 mb-3" />
                <p className="text-gray-800 leading-relaxed italic mb-4">
                  &quot;{study.testimonial.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-sky-200 rounded-full flex items-center justify-center text-sky-700 font-bold text-sm">
                    {study.testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-bold text-black text-sm">
                      {study.testimonial.author}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {study.testimonial.role}
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://calendly.com/mavyakunal/business-call"
              target="_blank"
              rel="noopener noreferrer"
              // onClick={onClose}
              className="flex-1 text-center px-6 py-3 bg-black text-white rounded-xl font-semibold hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
            >
              <CalendarIcon size={18} />
              Book Strategy Call
            </a>
            <a
              href="#cta"
              onClick={onClose}
              className="flex-1 text-center px-6 py-3 bg-white text-black border-2 border-gray-200 rounded-xl font-semibold hover:border-sky-300 hover:bg-sky-50 transition-all flex items-center justify-center gap-2"
            >
              <FileTextIcon size={18} />
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}