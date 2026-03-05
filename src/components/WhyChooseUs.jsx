import { Target, Layers, Users, Gauge, Shield, Rocket } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Target,
      title: 'Revenue-First Development',
      description:
        'Every line of code we write is focused on driving business outcomes. We build technology that directly impacts your bottom line.',
    },
    {
      icon: Layers,
      title: 'Built for Scale',
      description:
        'Enterprise-grade architecture from day one. Our systems grow with your business without costly rebuilds or performance issues.',
    },
    {
      icon: Users,
      title: 'Senior-Level Engineering',
      description:
        'No juniors, no offshore teams. Work directly with experienced engineers who understand complex business requirements.',
    },
    {
      icon: Gauge,
      title: 'Performance-Optimized',
      description:
        'Speed matters. We obsess over performance optimization to ensure your applications load fast and convert better.',
    },
    {
      icon: Shield,
      title: 'Security & Reliability',
      description:
        'Bank-grade security practices and robust testing ensure your systems are secure, stable, and trustworthy.',
    },
    {
      icon: Rocket,
      title: 'Long-Term Partnership',
      description:
        'We\'re not just developers for hire. We become your technical partner, invested in your sustained growth and success.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            Why Elite Teams Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto tracking-luxury">
            The difference between good software and exceptional systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-sky-200"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-sky-50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon size={24} className="text-sky-600" />
                </div>

                <h3 className="text-xl font-bold text-black">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
