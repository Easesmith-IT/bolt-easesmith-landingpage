import { TrendingUp, ArrowRight } from 'lucide-react';
import { allServices } from '@/data/services';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Engineering Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We engineer technology that removes bottlenecks, streamlines operations,
            and drives measurable revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <div
                key={service.slug}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-sky-400 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative space-y-6">
                  <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                    <ServiceIcon size={28} className="text-sky-600" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-black group-hover:text-sky-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp size={16} className="text-sky-500" />
                      <span className="text-sm font-semibold text-gray-700">Key Outcomes:</span>
                    </div>
                    <ul className="space-y-2 mb-5">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors group/link"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
