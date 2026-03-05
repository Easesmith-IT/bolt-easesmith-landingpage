import { Building2 } from 'lucide-react';

export default function SocialProof() {
  const companies = [
    'Premium Brand A',
    'Premium Brand B',
    'Premium Brand C',
    'Premium Brand D',
    'Premium Brand E',
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 tracking-luxury uppercase">
            Trusted by Industry Leaders
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200 hover:border-sky-300 transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-600 transition-colors">
                <Building2 size={24} />
                <span className="text-sm font-medium whitespace-nowrap">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
